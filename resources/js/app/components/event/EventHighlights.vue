<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="eventhigh" id="eventhigh" v-if="title && events && events.length">

    <section class="inner no-spacing">
      <div class="col-100">

        <!-- HIGHLIGHTS INFO -->
        <h3 class="eventhigh__headline">
          <span v-if="title_tag" class="eventhigh__headline__tag">{{ title_tag }}</span>
          {{ title }}
        </h3>

        <p v-if="text" class="eventhigh__text" v-html="text"></p>

        <router-link v-if="button" :to="link('events.detail.agenda', { slug: localeSlug(event) })" class="btn yellow icon-left eventhigh__btn">
          <svg-icon icon="app/icon-arrow"></svg-icon>
          <span>{{ button }}</span>
        </router-link>

        <!-- HIGHLIGHTS SLIDER -->
        <div class="slider slider--large eventhigh__slider">

          <!-- SLIDES -->
          <div class="eventhigh__slides" ref="slider">
            <div v-for="(highlight, key) in events" :key="key">
              <div class="eventhigh__card">
                <div class="eventhigh__card-header">
                  <div class="eventhigh__day">
                    <span>{{ highlight.day_subtitle }}</span>  &nbsp; {{ highlight.day_title }}
                  </div>
                  <div class="eventhigh__time-place">
                    {{ highlight.from }} {{ $t('pageevent.til') }} {{ highlight.to }}
                    -
                    <span>{{ highlight.subject }}</span>
                  </div>
                </div>
                <div class="eventhigh__card-body">
                  <div>
                    <h4 class="eventhigh__title">{{ highlight.title }}</h4>
                    <ul class="eventhigh__speakers">
                      <li v-for="(speaker, key) in highlight.speaker" :key="key" class="eventhigh__speaker">
                        <img :src="speaker.image" class="eventhigh__speaker-image"/>
                        <div>
                          <div class="eventhigh__speaker-name">{{ speaker.name }}</div>
                          <div class="eventhigh__speaker-desc">{{ speaker.company }}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="eventhigh__card-bottom">
                    <client-only>
                      <a :href="generateCalendarHref(highlight.title, highlight.description, highlight.subject_title, highlight.day_iso, highlight.from, highlight.to)">
                        <div class="btn blue icon-left">
                          <svg-icon icon="app/icon-calendar"></svg-icon>
                          <span>{{ $t('eventhigh.addtoCalendar') }}</span>
                        </div>
                      </a>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SLIDER CONTROLS -->
          <div class="slider__controls eventhigh__controls" ref="controls">
            <svg-icon ref="buttonPrev" icon="app/icon-arrow"
                      class="slider__arrow slider__arrow--left eventhigh__arrow eventhigh__arrow--left"></svg-icon>
            <ul ref="nav" class="slider__bullets">
              <li v-for="(highlight, key) in events" :key="key" class="slider__bullet"
                  style="display: none;"></li>
            </ul>
            <svg-icon ref="buttonNext" icon="app/icon-arrow"
                      class="slider__arrow slider__arrow--right eventhigh__arrow eventhigh__arrow--right"></svg-icon>
          </div>

        </div>

        <!--                &lt;!&ndash; HIGHLIGHTS BUTTON &ndash;&gt;-->
        <!--                <router-link :to="link('events.detail.agenda', {slug: localeSlug(data)})" class="btn blue icon-left eventhigh__btn">-->
        <!--                    <svg-icon icon="app/icon-arrow"></svg-icon>-->
        <!--                    <span>{{ $t('pageevent.highlightsButton') }}</span>-->
        <!--                </router-link>-->

      </div>
    </section>

  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {IS_SSR} from "../../plugins/ssrSwitch";
import {generateIcsFile} from "../../services/ics";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'EventHighlights',

  props: {
    title: String,
    title_tag: String,
    text: String,
    button: String,
    events: Array,
  },

  data() {
    return {
      slider: undefined
    };
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////


  mounted() {
    this.initTinySlider();
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    initTinySlider() {
      const {tns} = require('tiny-slider/src/tiny-slider');

      // TinySlider options
      var sliderOptions = {
        slideBy: 'page',
        mouseDrag: true,
        swipeAngle: 50,
        preventScrollOnTouch: 'auto',
        container: this.$refs.slider,
        controlsContainer: this.$refs.controls,
        navContainer: this.$refs.nav,
        prevButton: this.$refs.buttonPrev.$el,
        nextButton: this.$refs.buttonNext.$el,
        items: 1,
        responsive: {
          640: {
            gutter: 30,
            items: 2,
            speed: 500
          },
          980: {
            items: 3
          }
        }
      };

      // init TinySlider library
      this.slider = tns(sliderOptions);
    },

    generateCalendarHref: function(title, description, location, date, startTime, endTime) {
      if (IS_SSR) return;
      let start = new Date(`${date}T${startTime}`);
      let end = new Date(`${date}T${endTime}`);
      let file = generateIcsFile('DIGITAL X: ' + title ?? '', description ?? '', location ?? '', start, end);

      return 'data:text/calendar;base64,' + btoa(unescape(encodeURIComponent(file)));
    },

  }

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
    "eventhigh.addtoCalendar": "IN KALENDER EINTRAGEN"
  },
  "en": {
    "eventhigh.addtoCalendar": "ADD TO CALENDAR"
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






