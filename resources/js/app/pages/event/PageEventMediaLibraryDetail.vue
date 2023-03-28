<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div v-if="itemData" class="page-event-media-library-detail">

    <LibHero
      :title="itemData.header_title"
      :subtitle="itemData.header_subtitle"
      :subtitleTag="itemData.header_subtitle_tag"
      tag-position="after"
      :text="itemData.header_text"
      :bgImage="itemData.header_image"
    />



    <div class="container-fluid">

      <section class="hero-section__content bg-white">
        <div class="col-100">
          <div class="">

            <div class="row">
              <div class="col-lg-8">
                <div class="text-left">
                  <h5 v-if="itemData.topline" class="page-event-media-library-detail__intro__tagline">{{
                      itemData.topline
                    }}</h5>
                  <h1 class="page-event-media-library-detail__intro__headline">{{ itemData.event_title }}</h1>
                  <div v-html="itemData.text"/>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="iniMission__patron">
                  <img v-if="itemData.patron_image" class="iniMission__patron-image"
                       :data-src="itemData.patron_image" :alt="itemData.patron_name" :src="itemData.patron_image">
                  <div class="iniMission__patron-caption">
                    <div class="iniMission__patron-name" v-if="itemData.patron_name">{{ itemData.patron_name }}</div>
                    <div class="iniMission__patron-title" v-if="itemData.patron_title">{{ itemData.patron_title }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Share -->
          <div class="page-event-media-library-detail__share trigger">
            <share-teaser :subject="$t('media-library-detail.subject')"></share-teaser>
          </div>
        </div>
      </section>

      <lib-section-header
        :headline="itemData.videos_headline ? itemData.videos_headline : $t('media-library-detail.videos')"
      >
        <event-media-library-video-main :video="itemData.video_main || {}"/>
      </lib-section-header>

      <lib-section-header
        v-if="itemData.video_list && itemData.video_list.length"
        :headline="itemData.videos_more_headline ? itemData.videos_more_headline : $t('media-library-detail.more-videos')"
      >
        <event-media-library-video-list :videos="itemData.video_list || []" :categories="itemData.categories"/>
      </lib-section-header>

      <lib-section-header
        v-if="itemData.impressions_images && itemData.impressions_images.length"
        class="page-event-media-library-detail__impressions"
        :headline="itemData.impressions_headline ? itemData.impressions_headline : $t('media-library-detail.impressions') + ' ' + itemData.event_year"
      >
        <masonry-wall :items="itemData.impressions_images" :ssr-columns="1" :gap="5">
          <template #default="{ item, index }">
            <div class="page-event-media-library-detail__impressions__preview">
              <img
                :data-src="item.preview"
                :src="item.preview"
                :alt="item.title"
                class="lazy"
                @click="openModal(item)"
              />
            </div>
          </template>
        </masonry-wall>

        <!-- The Modal/Lightbox -->
        <div id="myModal" class="modal" :class="{ active: showModal }">
          <span class="close cursor" @click="closeModal()">&times;</span>
          <div class="modal-content">
            <div
              v-for="(slide, index) in itemData.impressions_images"
              :key="index"
              class="mySlides"
            >
              <img :src="slide.large" :alt="slide.title" style="width:100%"/>
            </div>
          </div>
          <!-- Next/previous controls -->
          <a class="prev" @click="nextSlide(-1)">&#10094;</a>
          <a class="next" @click="nextSlide(1)">&#10095;</a>
        </div>
        <!-- end lightbox -->
      </lib-section-header>

      <lib-section-header
        v-if="itemData.archives && itemData.archives.length"
        class="page-event-media-library-detail__archives"
        :headline="itemData.media_libraries_more_headline ? itemData.media_libraries_more_headline : $t('media-library-detail.more-media-libraries')"
      >
        <slider :items="itemData.archives" class="slider--large slider--full-width">
          <template slot-scope="item">
            <div class="page-event-media-library-detail__archives_slide">
              <div class="page-event-media-library-detail__archives__image">
                <router-link v-if="item.image" :to="link('events.medialibrary.detail', { slug: localeSlug(item) })">
                  <img
                    :data-src="item.image"
                    :src="item.image"
                    class="slider__image tns-lazy-img"
                    :alt="item.titel"
                  />
                </router-link>
                <h3 class="page-event-media-library-detail__archives__title">{{ item.title }}</h3>
              </div>
            </div>
          </template>
        </slider>
      </lib-section-header>

      <!--    <event-join-->
      <!--      v-if="event && event.link_register && event.logo"-->
      <!--      :linkRegister="event.link_register"-->
      <!--      :logo="event.logo"-->
      <!--    />-->

    </div>
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
import LibHero from "../../components/lib/LibHero";
import LibSectionHeader from "../../components/lib/LibSectionHeader";
import PageEventMediaLibrary from "./PageEventMediaLibrary";
import EventMediaLibraryVideoMain from "../../components/event/media-library/EventMediaLibraryVideoMain";
import EventMediaLibraryVideoList from "../../components/event/media-library/EventMediaLibraryVideoList";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageEventMediaLibraryDetail',
  components: {
    EventMediaLibraryVideoList,
    EventMediaLibraryVideoMain,
    PageEventMediaLibrary,
    LibSectionHeader,
    LibHero
  },
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
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-medialibrary.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-medialibrary.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      metaData: null,
      ENDPOINT: 'media-libraries/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'header_title',
      SET_AS_CURRENT_ITEM: true,
      previewSecret: this.$router.currentRoute.query.preview_secret ?? null,

      showModal: false,
      slideIndex: 1,
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

  beforeRouteLeave(to, from, next) {
    // if the route changed due to a language change, we need to translate the slug
    this.translateSlugIfLanguageChanged(to, next, this.speaker);
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

      if (IS_SSR === false && typeof this.speaker !== 'undefined') {
        return this.speaker;
      }

      return {};
    },


    // @todo: Migrate modal to a separate component (see also EventLocations)
    openModal(slide) {
      this.showSingleSlide(slide)
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    },

    nextSlide(n) {
      this.slideIndex += n
      this.showSlides(this.slideIndex)
    },

    showSingleSlide(slide) {
      let slides = document.getElementsByClassName('mySlides')
      let slideIndexMatch = Object.keys(slides).filter(
        (i) =>
          slides[i].getElementsByTagName('img')[0].getAttribute('src') ===
          slide.large
      )

      // hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }

      // show match slide
      slides[slideIndexMatch].style.display = 'block'
    },

    showSlides(n) {
      var i
      var slides = document.getElementsByClassName('mySlides')

      if (n > slides.length) {
        this.slideIndex = 1
      }

      if (n < 1) {
        this.slideIndex = slides.length
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }

      if (slides[this.slideIndex - 1]) {
        const selectedImgUrl = slides[this.slideIndex - 1]
          .getElementsByTagName('img')[0]
          .getAttribute('src')

        for (i = 0; i < slides.length; i++) {
          const imgUrl = slides[i]
            .getElementsByTagName('img')[0]
            .getAttribute('src')

          if (selectedImgUrl == imgUrl) {
            slides[i].style.display = 'block'
            return true
          }
        }
      }
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
    "media-library-detail.back": "Zurück",
    "media-library-detail.subject": "Artikel",
    "media-library-detail.videos": "Videos",
    "media-library-detail.more-videos": "Weitere Videos",
    "media-library-detail.impressions": "Impressionen",
    "media-library-detail.more-media-libraries": "Weitere Mediatheken"
  },
  "en": {
    "media-library-detail.back": "Back",
    "media-library-detail.subject": "Article",
    "media-library-detail.videos": "Videos",
    "media-library-detail.more-videos": "More Videos",
    "media-library-detail.impressions": "Impressions",
    "media-library-detail.more-media-libraries": "More Media Libraries"
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



