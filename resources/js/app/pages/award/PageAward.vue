<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="pageaward" v-if="itemData" :class="themeClass">

    <!-- HERO -->
    <award-hero :hero="hero" v-if="hero"/>

    <component
      v-for="(component, key) in itemData.content"
      :key="key"
      v-bind="component"
      :theme="itemData.theme"
      :currentYear="itemData.year"
      :is="component.__component"/>

  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import fetchItemMixin from '../../mixins/fetchItem.js';

import {IS_SSR} from "../../plugins/ssrSwitch";
import fetch from "node-fetch";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageAward',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-award.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-award.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'awards/' + this.$route.params.year,
      BREADCRUMB_TITLE: 'meta_title',
      SET_AS_CURRENT_ITEM: true,
      metaData: null
    };
  },

  computed: {
    hero() {
      if (this.itemData) {
        return this.itemData.award_header ? this.itemData.award_header : null
      }
    },

    themeClass() {
      return (this.itemData && this.itemData.theme) ? 'theme-' + this.itemData.theme.toLowerCase() : '';
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



