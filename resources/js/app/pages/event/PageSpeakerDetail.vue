<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div v-if="speaker" class="page-speaker-detail">
    <speaker-hero
      :name="speaker.name"
      :surname="speaker.surname"
      :subline="speaker.subline"
      :bgImage="speaker.img_header"
      :detailImage="speaker.img_detail"
      :fullname="speaker.fullname"
      :company="speaker.company"
      :website="speaker.website"
      :linkedin="speaker.linkedin"
      :xing="speaker.xing"
      :twitter="speaker.twitter"
      :facebook="speaker.facebook"
      :youtube="speaker.youtube"
      :instagram="speaker.instagram"
    />

    <speaker-detail :itemData="speaker" />

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
import fetch from "node-fetch";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageSpeakerDetail',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [
        {name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-speaker-detail.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-speaker-detail.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      metaData: null,
      ENDPOINT: 'speakers/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'fullname',
      SET_AS_CURRENT_ITEM: true,
      previewSecret: this.$router.currentRoute.query.preview_secret ?? null,
    };
  },

  computed: {
    speaker() {
      return this.itemData;
    },

    event() {
      return this.$store.getters.nextEvent;
    },

    // groups sessions by their event_id
    sessionsByEvent() {
      if (!this.speaker.sessions) return [];

      return this.speaker.sessions.reduce((acc, session) => {
        if (!acc[session.event_id]) acc[session.event_id] = [];
        acc[session.event_id].push(session);
        return acc;
      }, {});
    }
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },

  beforeRouteLeave(to, from, next) {
    // if the route changed due to a language change, we need to translate the slug
    this.translateSlugIfLanguageChanged(to, next, this.speaker);
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    // if a url contains the name of a social network return the corresponing icon
    getSocialIconByUrl(url) {
      if (url.indexOf('linkedin') > 0) return 'app/icon-linkedin';
      if (url.indexOf('xing') > 0) return 'app/icon-xing';
      if (url.indexOf('twitter') > 0) return 'app/icon-twitter';
      if (url.indexOf('facebook') > 0) return 'app/icon-facebook';
      if (url.indexOf('instagram') > 0) return 'app/icon-instagram';
      if (url.indexOf('spotify') > 0) return 'app/icon-spotify';
      if (url.indexOf('youtube') > 0) return 'app/icon-youtube';
      return 'app/icon-link';
    },

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

      if (IS_SSR === false && typeof this.speaker !== 'undefined') {
        return this.speaker;
      }

      return {};
    },
  },
} // end export

</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<style lang="scss">

</style>


<style lang="scss" scoped>

</style>



