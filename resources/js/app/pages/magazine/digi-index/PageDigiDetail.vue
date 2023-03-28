<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div v-if="itemData">

    <!-- HEADER -->
    <digi-index-header :labels="itemData.labels" :show-back="true" :title="itemData.header_title" :subtitle="itemData.header_header" :image="itemData.image_header" :alt="itemData.header"></digi-index-header>

    <div class="container-fluid">
      <div class="section">
        <!-- INTRO -->
        <section class="page-digi-index-detail__page inner no-spacing" v-if="itemData">
          <div class="col-100">
            <div class="text-center">
              <h2 v-if="itemData.page_title" class="page-digi-index-detail__page__title">{{ itemData.page_title }}</h2>
              <h3 v-if="itemData.page_subtitle" class="page-digi-index-detail__page__subtitle">{{ itemData.page_subtitle }}</h3>
              <p v-if="itemData.page_intro" class="page-digi-index-detail__page__intro">{{ itemData.page_intro }}</p>
              <div v-if="itemData.page_intro_html" class="page-digi-index-detail__page__intro" v-html="itemData.page_intro_html"></div>
              <div v-if="itemData.archive_button" class="page-digi-index-detail__page__archive-button">
                <router-link :to="link('magazine.digi-index.archive')" class="btn blue">{{ itemData.archive_button }}</router-link>
              </div>
            </div>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="page-digi-index-detail inner no-spacing" v-if="itemData">
          <div class="col-100">
            <div v-for="(item, index) in itemData.content" :key="index" class="page-digi-index-detail__content">
              <div class="page-digi-index-detail__content__grid">
                <div class="page-digi-index-detail__content__content-container">
                  <div class="page-digi-index-detail__content__content">
                    <h2 v-if="item.title" class="page-digi-index-detail__content__title">{{ item.title }}</h2>
                    <div v-if="item.title" class="colorbox"></div>
                    <div v-if="item.content" class="page-digi-index-detail__content__copy" v-html="item.content"></div>
                  </div>
                </div>
                <div class="page-digi-index-detail__content__image-container" :class="'page-digi-index-detail__content__image-align-' + item.image_alignment.toLowerCase()">
                  <img class="page-digi-index-detail__content__image" v-if="item.image" :src="item.image.url" :alt="item.alt_text ? item.alt_text : ''">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- DOWNLOAD -->
        <div class="page-digi-index__download" v-if="itemData && itemData.download_title && itemData.download_button && itemData.download_image && itemData.download_study">
          <section class="no-spacing position-relative">
            <div class="page-digi-index__download__bg-image-container">
              <img class="page-digi-index__download__bg-image" :src="basePath + 'img/app/digi-index/bg-section.jpg'" alt="">
            </div>
            <section class="inner box-large position-relative">
              <div class="col-100">
                <div class="page-digi-index__download__grid">
                  <div class="page-digi-index__download__content-container ">
                    <div class="page-digi-index__download__content">
                      <h2 class="page-digi-index__download__title">{{ itemData.download_title }}</h2>
                      <div v-if="itemData.download_subtitle" class="page-digi-index__download__subtitle">{{ itemData.download_subtitle }}</div>
                      <div class="colorbox"></div>
                      <div v-if="itemData.download_text" class="page-digi-index__archive__copy">{{ itemData.download_text }}</div>
                      <div v-if="itemData.download_study && itemData.download_button" class="page-digi-index__archive__button">
                        <a :href="itemData.download_study" class="btn blue" target="_blank">{{ itemData.download_button }}</a>
                      </div>
                    </div>
                  </div>
                  <div v-if="itemData.download_study && itemData.download_image" class="page-digi-index__download__image-container">
                    <a :href="itemData.download_study" target="_blank">
                      <img class="page-digi-index__download__image" v-if="itemData.download_image" :src="itemData.download_image" :alt="itemData.download_title">
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>

        <!-- ARCHIVE -->
        <section class="page-digi-index__archive inner no-spacing" v-if="itemData && itemData.archive">
          <div class="col-100">
            <digi-index-archive
              :title="itemData.archive.title"
              :text="itemData.archive.text"
              :button="itemData.archive.button"
              :image="itemData.archive.image"
              :alt="itemData.archive.title"
            ></digi-index-archive>
          </div>
        </section>
      </div>

    </div>

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

  name: 'PageDigiIndexDetail',

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
      ENDPOINT: 'digi-index-sectors/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'name',
      SET_AS_CURRENT_ITEM: true,
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



