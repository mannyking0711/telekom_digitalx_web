<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <section v-if="itemData" class="speaker-detail inner no-spacing">
    <div class="col-100">
      <div class="speaker-detail__container">
        <div class="speaker-detail__grid">
          <div class="speaker-detail__col1">

            <!-- Megatrends -->
            <div v-if="hasMegatrends" class="speaker-detail__section1">
              <h3>
                {{ itemData.megatrends_headline }}
              </h3>
              <div v-html="itemData.megatrends_text"/>
              <h4>
                {{ itemData.megatrends_subheadline }}
              </h4>
              <div class="speaker-detail__megatrends">
                <div v-for="(megatrend, key) in itemData.megatrends" :key="key" class="speaker-detail__megatrends__btn" @click="onClickMegatrend(megatrend)">
                  <img v-if="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="lazy">
                  {{ megatrend.name }}
                </div>
              </div>
            </div>

            <!-- Speaker -->
            <div class="speaker-detail__section1">
              <h3>
                <template v-if="itemData.speaker_headline">
                  {{ itemData.speaker_headline }}
                </template>
                <template v-else>
                  {{ $t('speaker-detail.headline') }}
                </template>
              </h3>
              <div v-html="itemData.description"/>
            </div>

            <!-- Share -->
            <div class="speaker-detail__share speaker-detail__section1 trigger">
              <share-teaser :subject="$t('speaker-detail.subject')"></share-teaser>
            </div>

            <!-- AGENDA -->
            <div v-if="itemData.sessions && itemData.sessions.length" class="speaker-detail__events">
              <h3 v-if="itemData.agenda_headline">{{ replaceSpeakernameInAgendaHeadline }}</h3>
              <p v-if="itemData.agenda_text">{{ itemData.agenda_text }}</p>
              <div class="speaker-detail__events__grid" :class="{'speaker-detail__events__grid--single': itemData.sessions.length === 1}">
                <div v-for="session in itemData.sessions" :key="session.id" class="speaker-detail__event">
                  <div>
                    <div class="speaker-detail__event__section">
                      <div class="speaker-detail__event__date">
                        {{ session.day_title }}
                      </div>
                      <div class="speaker-detail__event__stage">
                        {{ session.subject_title }}
                      </div>
                      <div class="speaker-detail__event__time">
                        {{ session.from }} {{ $t('pageevent.til') }} {{ session.to }} {{ $t('pageevent.oClock') }}
                      </div>
                    </div>
                    <div class="speaker-detail__event__section">
                      <div class="speaker-detail__event__title">
                        {{ session.title }}
                      </div>
                    </div>
                    <div class="speaker-detail__event__section">
                      <div class="speaker-detail__event__desc">
                        {{ session.description }}
                      </div>
                    </div>
                  </div>
                  <div class="speaker-detail__event__cta">
                    <client-only>
                      <a :href="generateCalendarHref(session.title, session.description, session.subject_title, session.day_iso, session.from, session.to)">
                        <div class="btn blue icon-left">
                          <svg-icon icon="app/icon-calendar"></svg-icon>
                          <span>{{ $t('speaker-detail.addtoCalendar') }}</span>
                        </div>
                      </a>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="speaker-detail__col2">
            <!-- IMAGE -->
            <div class="speaker-detail__portrait">
              <div ref="portrait">
                <img v-if="itemData.img_detail" :src="itemData.img_detail" :alt="itemData.fullname"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {icsDateTimeString, triggerDownload, generateIcsFile} from '../../services/ics';
import {IS_SSR} from "../../plugins/ssrSwitch";

gsap.registerPlugin(ScrollTrigger);

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: "SpeakerDetail",

  props: {
    itemData: {type: Object, required: true}
  },

  data() {
    return {
      anim: undefined,
    };
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },

    hasMegatrends() {
      return (this.itemData.megatrends !== null) && (this.itemData.megatrends.length > 0)
    },

    replaceSpeakernameInAgendaHeadline() {
      return this.itemData && this.itemData.agenda_headline ? this.itemData.agenda_headline.replace(/{speaker}/i, this.itemData.fullname) : null;
    },

    // groups sessions by their event_id
    // sessionsByEvent() {
    //   if (!this.itemData.sessions) return [];
    //
    //   return this.itemData.sessions.reduce((acc, session) => {
    //     if (!acc[session.event_id]) acc[session.event_id] = [];
    //     acc[session.event_id].push(session);
    //     return acc;
    //   }, {});
    // },
  },

  mounted() {
    // "Sticky image" not working in some broswers. So feature is disabled. Needs more debugging if wanted.
    if (this.itemData) {
      window.dispatchEvent(new Event('resize'));
      this.$nextTick(() => {
        this.initAnimation();
      });
    }
  },

  methods: {
    onClickMegatrend(megatrend) {
      let link = this.link('events.detail.megatrends', {slug: this.localeSlug(this.event)});
      link.hash = '#megatrend-' + megatrend.id;
      this.$router.push(link);
    },

    generateCalendarHref: function(title, description, location, date, startTime, endTime) {
      if (IS_SSR) return;
      let start = new Date(`${date}T${startTime}`);
      let end = new Date(`${date}T${endTime}`);
      let file = generateIcsFile('DIGITAL X: ' + title ?? '', description ?? '', location ?? '', start, end);

      return 'data:text/calendar;base64,' + btoa(unescape(encodeURIComponent(file)));
    },

    initAnimation() {
      var scrollTrigger = {
        trigger: ".speaker-detail__col2",
        start: "top 450px",
        end: () => {
          if (this.$refs && this.$refs.portrait) {
            // console.log('offsetHeight', this.$refs.portrait.offsetHeight);
            return "bottom 200px+=" + this.$refs.portrait.offsetHeight + "px";
          }
        },
        pin: ".speaker-detail__portrait",
        // markers: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      };

      if (this.anim) {
        this.anim.kill();
      }

      ScrollTrigger.matchMedia({
        "(min-width:800px)": () => {
          this.anim = gsap.timeline({paused: true, scrollTrigger});
        }
      });
    },
  },

  watch: {
    itemData() {
      if (this.itemData) {
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
          this.initAnimation();
        });
      }
    },
  },
}; // end export
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "speaker-detail.back": "Zurück",
    "speaker-detail.subject": "Beitrag",
    "speaker-detail.headline": "Über den Speaker",
    "speaker-detail.addtoCalendar": "IN KALENDER EINTRAGEN"
  },
  "en": {
    "speaker-detail.back": "Back",
    "speaker-detail.subject": "Article",
    "speaker-detail.headline": "About the Speaker",
    "speaker-detail.addtoCalendar": "ADD TO CALENDAR"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
