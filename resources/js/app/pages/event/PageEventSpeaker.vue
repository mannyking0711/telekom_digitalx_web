<template>

  <div v-if="itemData" class="page-event-speaker">

    <event-speaker-hero
        :title="itemData.header_title"
        :subtitle="itemData.header_subtitle"
        :subtitleTag="itemData.header_subtitle_tag"
        :text="itemData.header_text"
        :bgImage="itemData.header_image"
    />

    <event-speaker-intro
        :title="itemData.intro_title"
        :subtitle="itemData.intro_subtitle"
        :text="itemData.intro_text"
    />

    <!-- Filter Megatrends -->
    <section v-if="itemData.megatrends" class="inner no-spacing">
      <div class="col-100">
        <!-- Filter Megatrends -->
        <div class="page-event-speaker__filter">
          <div class="page-event-speaker__filter-label">
            {{ $t('page-event-speaker.filter') }}
          </div>
          <div class="page-event-speaker__filter-buttons">
            <div
              v-for="(megatrend, key) in itemData.megatrends"
              :key="megatrend.id"
              class="page-event-speaker__megatrend-button"
              :class="{'page-event-speaker__megatrend-button--active': isActiveMegatrend(megatrend.id)}"
              @click="toggleMegatrend(megatrend.id)"
            >
              <img v-if="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="lazy">
              {{ megatrend.name }}
            </div>
          </div>
          <div class="page-event-speaker__filter-clear">
            <div @click="clearMegatrends()" class="page-event-speaker__filter-clear__button">
              <span>{{ $t('page-event-speaker.clear') }}</span>
              <div class="page-event-speaker__filter-clear__button__icon">
                <svg-icon class="svg-icon" icon="app/icon-close"></svg-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SPEAKER LIST -->
    <section class="inner no-spacing">
      <div class="col-100">
        <div class="pagespeaker__list">
          <router-link
              v-for="speaker in filteredSpeakers"
              :key="speaker.slug"
              :to="link('speaker.detail', { slug: speaker.slug })"
              class="pagespeaker__speaker">
            <img class="lazy pagespeaker__image" :data-src="speaker.img_list" :src="speaker.img_list" alt=""/>
            <h3 class="pagespeaker__name">{{ speaker.name }} {{ speaker.surname }}</h3>
            <h4 class="pagespeaker__company">{{ speaker.company }}</h4>
          </router-link>
        </div>
      </div>
    </section>

<!--    <event-join-->
<!--      v-if="event && event.link_register && event.logo"-->
<!--      :linkRegister="event.link_register"-->
<!--      :logo="event.logo"-->
<!--    />-->

  </div>

</template>

<script>
import EventsteaserSection from "../../components/event/EventsteaserSection";
import EventSpeakerHero from "../../components/event/speaker/EventSpeakerHero";
import EventSpeakerIntro from "../../components/event/speaker/EventSpeakerIntro";
import fetchItemMixin from '../../mixins/fetchItem.js';
import {IS_SSR} from "../../plugins/ssrSwitch";
import fetch from "node-fetch";
import EventJoin from "../../components/event/EventJoin";

export default {
  name: 'PageEventSpeaker',
  components: {
    EventJoin,
    EventsteaserSection, EventSpeakerHero, EventSpeakerIntro
  },
  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-speaker.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-speaker.jpg'}
      ],
      link: [this.canonical]
    };
  },

  data() {
    return {
      ENDPOINT: 'event-speaker-page/',
      metaData: null
    };
  },

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },

    filterMegatrends: {
      get() {
        return this.$store.getters.getFilterMegatrends
      },
      set(megatrends) {
        this.$store.commit('setFilterMegatrends', megatrends);
      }
    },

    filteredSpeakers() {
      return (this.filterMegatrends.length) ? this.filterSpeakers(this.itemData.speakers) : this.itemData.speakers;
    },
  },

  methods: {
    fetchSyncMetadata() {
      fetch(this.$store.getters.env.content_url + this.ENDPOINT)
          .then(response => response.json())
          .then(data => {
            this.metaData = data;
          })
          .catch(err => console.log(err))
    },

    findMetaData() {
      if (IS_SSR === true && this.metaData) {
        return this.metaData;
      }

      if (IS_SSR === false && typeof this.itemData !== 'undefined') {
        return this.itemData;
      }

      return {};
    },

    filterSpeakers(speakers) {
      const result = [];
      speakers.forEach(speaker => {
        if (this.speakerHasMegatrend(speaker)) {
          result.push(speaker);
        }
      })
      return result;
    },

    toggleMegatrend(id) {
      let index = this.filterMegatrends.indexOf(id);
      index === -1 ? this.filterMegatrends.push(id) : this.filterMegatrends.splice(index, 1);
    },

    clearMegatrends() {
      this.filterMegatrends = [];
    },

    isActiveMegatrend(id) {
      return this.filterMegatrends.indexOf(id) !== -1;
    },

    speakerHasMegatrend(speaker) {

      if (!this.filterMegatrends.length) {
        return true;
      }

      let result = false;
      if (speaker.megatrends) {
        for (const megatrend of speaker.megatrends) {
          if (this.isActiveMegatrend(megatrend.id)) {
            result = true;
            break;
          }
        }
      }
      return result;
    },
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
    "page-event-speaker.filter": "Filtern nach Megatrends",
    "page-event-speaker.clear": "Filter löschen"
  },
  "en": {
    "page-event-speaker.filter": "Filter by megatrends",
    "page-event-speaker.clear": "Clear filter"
  }
}
</i18n>
