<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div v-if="itemData" class="page-event-megatrends">



    <lib-hero
        :title="itemData.header_title"
        :text="itemData.header_text"
        :subtitle="itemData.header_subtitle"
        :subtitleTag="itemData.header_subtitle_tag"
        :bgImage="itemData.header_image"
        :bgImageDarken="'0.5'"
    />

    <div class="container-fluid">
      <section class="hero-section__content bg-white">
        <EventMegatrendsIntro
            :title="itemData.intro_title"
            :subtitle="itemData.intro_subtitle"
            :text="itemData.intro_text"
        />



      </section>

    </div>

    <section class="container-fluid">
      <div class="content content-center text-center">
        <div v-if="itemData.megatrends" class="event-partner__filter">
          <div class="event-partner__filter-buttons">
            <div
                v-for="(megatrend, key) in itemData.megatrends"
                :key="megatrend.id"
                class="event-partner__megatrend-button"
                @click="onClickMegatrend(megatrend)"
            >
              <img v-if="megatrend.icon" :data-src="megatrend.icon" :src="megatrend.icon" :alt="megatrend.name" class="lazy">
              {{ megatrend.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="event-megatrends-anchor-list section">
      <div
        v-for="megatrend in itemData.megatrends"
        :key="megatrend.id"
        class="event-megatrends-anchor-list-item"
        :id="'megatrend-' + megatrend.id"
      >
        <div class="event-megatrends-anchor-list-item__teaser">
          <img v-if="megatrend.image" :data-src="megatrend.image" :src="megatrend.image" :alt="megatrend.name" class="lazy event-megatrends-anchor-list-item__image">
          <section class="event-megatrends-anchor-list-item__section container-fluid">
            <div class="event-megatrends-anchor-list-item__container col-100">
              <div class="event-megatrends-anchor-list-item__card" :class="megatrend.background_class">
                <div class="event-megatrends-anchor-list-item__icon">
                  <img v-if="megatrend.background_icon" :data-src="megatrend.background_icon" :src="megatrend.background_icon" :alt="megatrend.name" class="lazy">
                </div>
                <h2 class="event-megatrends-anchor-list-item__title">{{ megatrend.name }}</h2>
                <p v-if="megatrend.subtopics" class="event-megatrends-anchor-list-item__subtopics">
                  <span>{{ $t('pageEventMegatrends.subtopicsTitle') }}:&nbsp;</span>
                  {{ megatrend.subtopics }}
                </p>
                <p v-if="megatrend.description" class="event-megatrends-anchor-list-item__description">{{ megatrend.description }}</p>
                <p v-if="megatrend.quote" class="event-megatrends-anchor-list-item__quote">
                  „{{ megatrend.quote }}“
                  <span v-if="megatrend.quote_author">– {{ megatrend.quote_author }}</span>
                </p>
                <div class="event-megatrends-anchor-list-item__buttons">
                  <a href="#" @click.prevent="onClickPartner(megatrend)">
                    <div class="btn">
                      <span>Partner</span>
                    </div>
                  </a>
                  <a href="#" @click.prevent="onClickSpeaker(megatrend)">
                    <div class="btn">
                      <span>Speaker</span>
                    </div>
                  </a>
                  <!--              <a href="#" @click.prevent="onClickRoute(megatrend)">-->
                  <!--                <div class="btn">-->
                  <!--                  <span>Route</span>-->
                  <!--                </div>-->
                  <!--              </a>-->
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
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
import EventMegatrendsHero from "../../components/event/megatrends/EventMegatrendsHero";
import EventMegatrendsIntro from "../../components/event/megatrends/EventMegatrendsIntro";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageMegatrends',

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

  components: {
    EventMegatrendsHero,
    EventMegatrendsIntro,
    EventJoin
  },

  data() {
    return {
      ENDPOINT: 'event-megatrends-page/',
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
    onClickPartner(megatrend) {
      this.$store.commit('setFilterMegatrends', [megatrend.id]);
      let link = this.link('events.detail.partner', {slug: this.localeSlug(this.event)});
      link.hash = '#scrolltop';
      this.$router.push(link);
    },
    onClickSpeaker(megatrend) {
      this.$store.commit('setFilterMegatrends', [megatrend.id]);
      let link = this.link('events.detail.speaker', {slug: this.localeSlug(this.event)});
      link.hash = '#scrolltop';
      this.$router.push(link);
    },
    onClickRoute(megatrend) {
      this.$store.commit('setFilterMegatrends', [megatrend.id]);
      console.log('Todo: clicked Route Button for megatrend', megatrend);
      return false;
    },
    onClickMegatrend(megatrend) {
      this.$store.commit('setFilterMegatrends', [megatrend.id]);
      let link = this.link('events.detail.megatrends', {slug: this.localeSlug(this.event)});
      link.hash = '#megatrend-' + megatrend.id;
      this.$router.push(link);
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
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "pageEventMegatrends.subtopicsTitle": "Unterthemen im Megatrend"
  },
  "en": {
    "pageEventMegatrends.subtopicsTitle": "Megatrend subtopics"
  }
}

</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
