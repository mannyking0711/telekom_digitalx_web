<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div v-if="itemData">

    <!-- HEADER -->
    <digi-index-header :labels="itemData.labels" :show-back="true" :title="itemData.title" :subtitle="itemData.header" :image="itemData.image" :alt="itemData.header" ></digi-index-header>

    <!-- ARCHIVE -->
    <section class="container-fluid" v-if="itemData">
      <div class="section">
        <div class="page-digi-index-archive">
          <h2 v-if="itemData.title_archive" class="page-digi-index-archive__headline">{{ itemData.title_archive }}</h2>
          <div class="page-digi-index-archive__items" v-for="(item, idx) in itemData.archive" :key="idx">
            <h3 class="page-digi-index-archive__list-headline">{{ itemData.section_title }} {{ item.year }}</h3>
            <ul class="page-digi-index-archive__list">
              <li v-for="download in item.downloads" :key="download.id" class="page-digi-index-archive__list-item">
                <a class="page-digi-index-archive__list-link" :href="download.download.url" target="_blank">
                  <span class="page-digi-index-archive__list-title">
                    <svg-icon class="page-digi-index-archive__list-arrow" icon="app/icon-arrow"></svg-icon>
                    <span>{{ download.title }}</span>
                  </span>
                  <span class="page-digi-index-archive__list-url">{{ download.description }}</span>
                  <svg-icon class="page-digi-index-archive__list-button" icon="app/icon-download"></svg-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
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
import fetchItemMixin from '../../../mixins/fetchItem.js';
import {IS_SSR} from "../../../plugins/ssrSwitch";
import fetch from "node-fetch";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageDigiIndexArchive',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'digi-index-archive-page/',
      metaData: null,
    };
  },

  computed: {},


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },

  mounted() {

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



