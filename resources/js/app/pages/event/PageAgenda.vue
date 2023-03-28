<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div v-if="itemData" class="page-agenda">

    <event-agenda-hero
      :title="itemData.header_title"
      :subtitle="itemData.header_subtitle"
      :subtitleTag="itemData.header_subtitle_tag"
      :text="itemData.header_text"
      :bgImage="itemData.header_image"
    />

    <event-agenda-intro
      :title="itemData.intro_title"
      :subtitle="itemData.intro_subtitle"
      :text="itemData.intro_text"
    />

    <agenda-day-selector
      :agenda="agenda"
      @set-day="activeDayIndex = $event"
    />

    <agenda-megatrends-filter
      v-if="itemData.megatrends && itemData.megatrends.length"
      :megatrends="itemData.megatrends"
    />

    <section v-if="filteredAgendaSubjects" class="agenda-day inner no-spacing">
      <div class="col-100">
        <dx-agenda
          :day1="currentDay"
          :stages-day1="filteredAgendaSubjects"
        />
      </div>
    </section>

    <template v-if="itemData && itemData.content && itemData.content.length">
      <component
        v-for="(component, key) in itemData.content"
        :key="key"
        v-bind="component"
        :is="component.__component"
      />
    </template>

<!--    <event-join-->
<!--      v-if="event && event.link_register && event.logo"-->
<!--      :linkRegister="event.link_register"-->
<!--      :logo="event.logo"-->
<!--    />-->
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import fetchItemMixin from '../../mixins/fetchItem.js';
import EventAgendaHero from "../../components/event/agenda/EventAgendaHero";
import EventAgendaIntro from "../../components/event/agenda/EventAgendaIntro";
import AgendaDaySelector from "../../components/event/agenda/AgendaDaySelector";
import DxAgenda from "../../components/event/agenda/DxAgenda";
import EventJoin from "../../components/event/EventJoin";
import AgendaMegatrendsFilter from "../../components/event/agenda/AgendaMegatrendsFilter";
import EventGkPkTeaser from "../../components/event/EventGkPkTeaser";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageAgenda',
  components: {
    EventGkPkTeaser,
    AgendaMegatrendsFilter, DxAgenda, AgendaDaySelector, EventJoin, EventAgendaIntro, EventAgendaHero},
  mixins: [fetchItemMixin],

  metaInfo() {

    return {
      title: this.$store.getters.env.app_name,
      titleTemplate: this.$t('pageindex.metaTitle'),
      meta: [
        {name: 'description', content: this.$t('pageindex.metaDescription')},
        {property: 'og:title', content: this.$t('pageindex.metaTitle')},
        {property: 'og:description', content: this.$t('pageindex.metaDescription')},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-agenda.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: this.$t('pageindex.metaTitle')},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: this.$t('pageindex.metaTitle')},
        {property: 'twitter:description', content: this.$t('pageindex.metaDescription')},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-agenda.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'events/' + this.$route.params.slug + '/agenda',
      BREADCRUMB_TITLE: 'name',
      SET_AS_CURRENT_ITEM: true,
      searchTerm: '',
      activeHours: [],
      activeSubjects: [],
      activeDayIndex: undefined,
    };
  },

  computed: {
    agenda() {
      return this.itemData;
    },

    currentDay() {
      let result = null;
      if ((this.activeDayIndex !== null) && this.agenda && this.agenda.days && this.agenda.days[this.activeDayIndex]) {
        result = this.agenda.days[this.activeDayIndex].day_raw;
      }

      return result;
    },

    filterMegatrends: {
      get() {
        return this.$store.getters.getFilterMegatrends
      },
      set(megatrends) {
        this.$store.commit('setFilterMegatrends', megatrends);
      }
    },

    filteredAgendaSubjects() {
      let result = null;
      // We need a deep cloned object and ES6 spread operator does not work with a nested object.
      const agendaCopy = JSON.parse(JSON.stringify(this.agenda));
      if ((this.activeDayIndex !== null) && agendaCopy && agendaCopy.days && agendaCopy.days[this.activeDayIndex]) {
        result = agendaCopy.days[this.activeDayIndex].subjects;
      }
      if (result && this.filterMegatrends.length > 0) {
        result.forEach((subject, i) => {
          result[i].sessions = subject.sessions.filter(session => this.sessionHasMegatrend(session));
        })
      }

      return result;
    },

    event() {
      return this.$store.getters.nextEvent;
    },
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
  },

  mounted() {
  },

  beforeRouteLeave(to, from, next) {
    // if the route changed due to a language change, we need to translate the slug
    this.translateSlugIfLanguageChanged(to, next, this.agenda);
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    sessionHasMegatrend(session) {
      if (!this.filterMegatrends.length) {
        return true;
      }

      let result = false;
      if (session.megatrends) {
        for (const megatrend of session.megatrends) {
          if (this.isActiveMegatrend(megatrend.id)) {
            result = true;
            break;
          }
        }
      }
      return result;
    },

    isActiveMegatrend(id) {
      return this.filterMegatrends.indexOf(id) !== -1;
    },

    // // clear the old search term, and focus the search field to allow a new entry
    // resetSearch: function () {
    //   this.searchTerm = "";
    //   this.$refs.agendaSelector.focusSearchField();
    // },
    //
    // // jump to agenda page, set the sessions active hour, open the sessions subject and scroll it into view
    // showSession: function (session) {
    //   const newActiveDay = this.agenda.days.find(day => day.id === session.day.id);
    //   this.$refs.agendaSelector.clearFilters();
    //   this.$refs.agendaSelector.setActiveDay(newActiveDay);
    //   this.$nextTick(() => {
    //     this.$refs.agendaSubjects.closeAllSubjects();
    //     this.$nextTick(() => {
    //       this.$refs.agendaSubjects.openSubject(session.subject.id);
    //       this.$nextTick(() => {
    //         document.getElementById('session-' + session.id).scrollIntoView({behavior: 'smooth', block: 'start'});
    //       });
    //     });
    //   });
    // },
  },
} // end export

</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "pageagenda.headline": "Agenda",
    "pageindex.metaTitle": "DIGITAL X AGENDA – Ihr persönlicher Weg durch den Campus",
    "pageindex.metaDescription": "Der Campus der digitalen Transformation! Auf der Tagesordnung: ✔ 12 Opinion Leader ✔ 12 Main Topics wie New Work, Future Mobility und Konjunkturpaket uvm. ✔ Deep Dives ✔ meinungsstarke Diskussionen & Keynotes✔weitere Top Speaker",
    "pageagenda.calenderView": "Kalenderansicht ändern:",
    "pageagenda.calenderViewLarger": "Größer",
    "pageagenda.calenderViewSmaller": "Kleiner",
    "pageagenda.calenderViewLegend": "Legende",
    "pageagenda.calenderViewOClock": "Uhr",
    "pageagenda.calenderViewAddToCalendar": "Zum Kalender hinzufügen"
  },
  "en": {
    "pageagenda.headline": "Agenda",
    "pageindex.metaTitle": "DIGITAL X Agenda – your personal roadmap through the campus",
    "pageindex.metaDescription": "The digital transformation campus! On the agenda: ✔ 12 opinion leaders ✔ 12 main topics, including New Work, future mobility, economic stimulus packages, and much more. ✔ Deep dives ✔ Intense discussions & keynotes ✔ Other top speakers",
    "pageagenda.calenderView": "Change calendar view:",
    "pageagenda.calenderViewLarger": "Larger",
    "pageagenda.calenderViewSmaller": "Smaller",
    "pageagenda.calenderViewLegend": "Legend",
    "pageagenda.calenderViewOClock": "o'clock",
    "pageagenda.calenderViewAddToCalendar": "Add to calendar"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<style lang="scss">

</style>


<style lang="scss" scoped>

</style>
