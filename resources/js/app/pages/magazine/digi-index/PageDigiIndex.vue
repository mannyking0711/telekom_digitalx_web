<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div v-if="itemData">



    <!-- HEADER -->
    <digi-index-header :labels="itemData.labels" :show-back="false" :title="itemData.title" :copy="itemData.header" :image="itemData.image" :alt="itemData.header"></digi-index-header>

    <div class="container-fluid">

    <!-- PAGE INTRO -->
    <section class="page-digi-index inner no-spacing" v-if="itemData">
      <div class="col-100">
        <div>
          <h2 v-if="itemData.page_title" class="page-digi-index__page-title">{{ itemData.page_title }}</h2>
          <p v-if="itemData.page_title" class="page-digi-index__page-intro">{{ itemData.page_intro }}</p>
        </div>
      </div>
    </section>

    <!-- USPS -->
    <section class="page-digi-index__usps inner no-spacing" v-if="itemData">
      <div class="col-100">
        <div class="page-digi-index__usps__grid">
          <div class="page-digi-index__usps__item">
            <svg-icon class="page-digi-index__usps__icon" icon="app/icon-pencil-alt"></svg-icon>
            <h4 class="page-digi-index__usps__title">{{ itemData.usp_title1 }}</h4>
            <p v-if="itemData.usp_title1" class="page-digi-index__usps__text">{{ itemData.usp_text1 }}</p>
          </div>
          <div class="page-digi-index__usps__item">
            <svg-icon class="page-digi-index__usps__icon" icon="app/icon-open-graph"></svg-icon>
            <h4 class="page-digi-index__usps__title">{{ itemData.usp_title2 }}</h4>
            <p v-if="itemData.usp_title2" class="page-digi-index__usps__text">{{ itemData.usp_text2 }}</p>
          </div>
          <div class="page-digi-index__usps__item">
            <svg-icon class="page-digi-index__usps__icon" icon="app/icon-search-alt"></svg-icon>
            <h4 class="page-digi-index__usps__title">{{ itemData.usp_title3 }}</h4>
            <p v-if="itemData.usp_title3" class="page-digi-index__usps__text">{{ itemData.usp_text3 }}</p>
          </div>
          <div class="page-digi-index__usps__item">
            <svg-icon class="page-digi-index__usps__icon" icon="app/icon-lightbulb"></svg-icon>
            <h4 class="page-digi-index__usps__title">{{ itemData.usp_title4 }}</h4>
            <p v-if="itemData.usp_title4" class="page-digi-index__usps__text">{{ itemData.usp_text4 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIONS -->
    <section class="page-digi-index__sections inner no-spacing" v-if="itemData">
      <div class="col-100">
        <div class="page-digi-index__sections__grid">
          <div class="page-digi-index__sections__intro">
            <div>
              <h3>{{ itemData.section_title}}</h3>
              <div class="colorbox"></div>
              <p>{{ itemData.section_text}}</p>
            </div>
          </div>
          <div v-for="label in itemData.labels" :key="label.id" class="page-digi-index__sections__section">
              <div class="page-digi-index__sections__image-container">
                <img class="page-digi-index__sections__image" v-if="label.image_button" :src="label.image_button" :alt="label.name">
                <div class="page-digi-index__sections__overlay"></div>
              </div>
            <router-link :to="link('magazine.digi-index.detail', {slug: label.slug})" class="page-digi-index__sections__link">
              {{ label.name }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- SELF-CHECK -->
    <div class="page-digi-index__self-check" v-if="itemData && itemData.self_check_title && itemData.self_check_button && itemData.self_check_link && itemData.self_check_image">
      <section class="no-spacing ">
        <div class="page-digi-index__self-check__bg-image-container">
          <img class="page-digi-index__self-check__bg-image" :src="basePath + 'img/app/digi-index/bg-section.jpg'" alt="">
        </div>
        <section class="inner no-spacing">
          <div class="col-100">
            <div class="page-digi-index__self-check__grid">
              <div class="page-digi-index__self-check__content-container ">
                <div class="page-digi-index__self-check__content">
                  <h2 class="page-digi-index__self-check__title">{{ itemData.self_check_title }}</h2>
                  <div class="colorbox"></div>
                  <div v-if="itemData.self_check_text" class="page-digi-index__archive__copy">{{ itemData.self_check_text }}</div>
                  <div v-if="itemData.self_check_link && itemData.self_check_button" class="page-digi-index__archive__button">
                    <a :href="itemData.self_check_link" class="btn blue" target="_blank">{{ itemData.self_check_button }}</a>
                  </div>
                </div>
              </div>
              <div v-if="itemData.self_check_link && itemData.self_check_image" class="page-digi-index__self-check__image-container">
                <a :href="itemData.self_check_link" target="_blank">
                  <img class="page-digi-index__self-check__image" v-if="itemData.self_check_image" :src="itemData.self_check_image" :alt="itemData.self_check_title">
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>

    <!-- ARCHIVE -->
    <section class="page-digi-index__archive inner no-spacing" v-if="itemData">
      <div class="col-100">
        <digi-index-archive
          :title="itemData.archive_title"
          :text="itemData.archive_text"
          :button="itemData.archive_button"
          :image="itemData.archive_image"
          :alt="itemData.archive_title"
        ></digi-index-archive>
      </div>
    </section>

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

  name: 'PageDigiIndex',

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
      ENDPOINT: 'digi-index-page/',
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



