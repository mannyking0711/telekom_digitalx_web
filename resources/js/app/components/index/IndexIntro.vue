<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="index-intro">

    <!-- TELEKOM LOGO FOR MOBILE -->
    <a href="https://geschaeftskunden.telekom.de" target="_blank" class="index-intro-telekom">
      <svg-icon sprite="app/telekom-logo-mobile-2022"></svg-icon>
    </a>

    <!-- MAGAZINE HERO + COUNTDOWN/TICKETS (INSIDE) -->
    <index-hero v-if="!showArticleHero" :hero="hero" :eventCountdown="eventCountdown" :eventPresenter="eventPresenter" :eventTickets="eventTickets" />

    <!-- MAGAZINE HERO + COUNTDOWN/TICKETS (INSIDE) -->
    <index-magazine-hero v-if="showArticleHero" :articleHero="articleHero" :eventCountdown="eventCountdown" :eventTickets="eventTickets" />

    <!-- LIGHTBOX SLIDESHOW -->
    <event-locations v-if="eventLocations && eventLocations.items.length" :data="eventLocations" :nowrap="false" color="magenta" />

<!--    <div class="index-intro-container">-->

      <!-- EVENT COUNTER MOBILE -->
<!--      <event-countdown-->
<!--        v-if="eventCountdown"-->
<!--        :start-timestamp="eventCountdown.start_timestamp"-->
<!--        :title="eventCountdown.title" :text="''" :logo="eventCountdown.logo"-->
<!--        :labelDay="eventCountdown.day" :labelDays="eventCountdown.days"-->
<!--        :button="eventCountdown.button" :link-register="eventCountdown.link_register"/>-->

      <!-- EVENT TICKETS MOBILE -->
<!--      <event-tickets-->
<!--        v-if="eventTickets"-->
<!--        :title="eventTickets.title" :text="eventTickets.text" :logo="eventTickets.logo"-->
<!--        :button="eventTickets.button" :link-register="eventTickets.link_register"/>-->


      <!-- MAGAZINE LIST -->
<!--      <index-magazine-list :items="newContent" />-->

      <!-- BEST PRACTISE LIST -->
<!--      <index-best-practice-list :items="newContent"/>-->


      <!-- MAGAZINE NEWSTICKER -->
<!--      <index-magazine-newsticker :items="newContent"/>-->

<!--    </div>-->

  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>


import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {IS_SSR} from "../../plugins/ssrSwitch";

gsap.registerPlugin(ScrollToPlugin);


export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'IndexIntro',

  props: {
    hero: {type: Object, required: false},
    articleHero: {type: Object, required: false},
    showArticleHero: {type: Boolean, required: true, default: false},
    eventPresenter: {type: Object, required: false},
    eventTickets: {type: Object, required: false},
    eventCountdown: {type: Object, required: false},
    eventLocations: {type: Object, required: false},
  },

  data() {
    return {};
  },

  computed: {
    newContent() {
      return this.$store ? this.$store.getters.newContent : [];
    },
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      return;
    }

    // this.setDocHeight();
  },

  mounted() {

  },

  destroyed() {

  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    // calculating 100vh for mobile devices as css var
    // setDocHeight() {
    //
    // 	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // 		document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    // 	}
    // },
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
  },
  "en": {
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


