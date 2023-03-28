<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div v-if="itemData" class="page-event-media-library">

    <lib-hero
      :title="itemData.header_title"
      :subtitleTag="itemData.header_subtitle_tag"
      tag-position="before"
      :text="itemData.header_text"
      :bgImage="itemData.header_image"
    />

    <div class="container-fluid">
      <LibIntro
        :title="itemData.intro_title"
        :subtitle="itemData.intro_subtitle"
        :text="itemData.intro_text"
      />
    </div>

    <div class="container-fluid">
      <section class="section inner no-spacing">
        <div class="col-100">
          <div
            v-for="item in itemData.media_libraries"
            :key="item.id"
            class="page-event-media-library__item"
          >
            <router-link v-if="item.image" class="page-event-media-library__item__image" :to="link('events.medialibrary.detail', { slug: localeSlug(item) })">
              <img class="lazy" :src="item.image" :alt="item.title">
            </router-link>
            <div class="page-event-media-library__item__content">
              <lib-headline-h2
                :title="item.title"
                :subtitle="item.subtitle"
                :text="item.teaser"
              />
              <router-link v-if="item.detail_button" class="page-event-media-library__item__button btn blue icon-left" :to="link('events.medialibrary.detail', { slug: localeSlug(item) })">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ item.detail_button }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>

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

import EventJoin from "../../components/event/EventJoin";
import fetchItemMixin from '../../mixins/fetchItem.js';
import {IS_SSR} from "../../plugins/ssrSwitch";
import fetch from "node-fetch";
import LibHero from "../../components/lib/LibHero";
import LibIntro from "../../components/lib/LibIntro";
import LibHeadlineH2 from "../../components/lib/LibHeadlineH2";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageEventMediaLibrary',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
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

  components: {
    LibHeadlineH2,
    LibIntro,
    LibHero,
    EventJoin
  },

  data() {
    return {
      ENDPOINT: 'event-media-library-page/',
      metaData: null,
    };
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
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
    this.translateSlugIfLanguageChanged(to, next, this.event);
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    onClickMediaLibrary(mediaLibrary) {
      // this.$store.commit('setFilterMegatrends', [megatrend.id]);
      // let link = this.link('events.detail.megatrends', {slug: this.localeSlug(this.event)});
      // link.hash = '#megatrend-' + megatrend.id;
      // this.$router.push(link);
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
