<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div v-if="itemData" class="page-event-speaker">

    <event-partner-hero
      :title="itemData.header_title"
      :subtitle="itemData.header_subtitle"
      :subtitleTag="itemData.header_subtitle_tag"
      :text="itemData.header_text"
      :bgImage="itemData.header_image"
    />

    <event-partner-intro
      :title="itemData.intro_title"
      :subtitle="itemData.intro_subtitle"
      :text="itemData.intro_text"
    />

    <event-partner
      :labelFilterMegatrends="itemData.filter_megatrends"
      :labelFilterQuarter="itemData.filter_quarter"
      :labelTab="itemData.tab_title"
      :megatrends="itemData.megatrends"
      :quarters="itemData.quarters"
      :partnersMedia="itemData.partners_media"
      :partnersFocus="itemData.partner_focus"
      :partnersDigitalization="itemData.partners_digitalization"
      :partnersMobility="itemData.partners_mobility"
      :partnersSupport="itemData.partners_support"
      :partnersRegular="itemData.partners_regular"
      :partnersPremium="itemData.partners_premium"
      :partnersCoop="itemData.partners_coop"
      :partnersStartup="itemData.partners_startup"
      :partnersPartner="itemData.partners_partner"
      :mapLocations="itemData.map_locations"
    />
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
import EventPartnerHero from "../../components/event/partner/EventPartnerHero";
import EventPartnerIntro from "../../components/event/partner/EventPartnerIntro";
import EventPartner from "../../components/event/partner/EventPartner";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageEventPartner',
  components: {EventPartner, EventPartnerIntro, EventPartnerHero},
  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'event-partner-page/',
      metaData: null,
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

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

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



