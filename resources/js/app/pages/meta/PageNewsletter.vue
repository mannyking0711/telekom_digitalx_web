<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div v-if="itemData">

    <!-- HEADER TEXT -->
    <meta-header v-if="!itemData.image" :title="itemData.title" :copy="itemData.header"></meta-header>

    <!-- HEADER IMAGE -->
    <div v-if="itemData.image" class="newsletter-header">
      <section class="no-spacing">
        <img :src="itemData.image" class="newsletter-header__image" :alt="itemData.header"/>
      </section>
    </div>

    <!-- CONTENT -->
    <section class="inner">
      <div class="col-100">
        <div v-html="itemData.content"></div>
        <newsletter-registration-form></newsletter-registration-form>
      </div>
    </section>

    <!-- ARCHIVE -->
    <section class="no-spacing">
      <div class="col-100 newsletter-archive" v-if="itemData">
        <h2 v-if="itemData.title_archive" class="newsletter-archive__headline">{{ itemData.title_archive }}</h2>
        <div class="newsletter-archive__events" v-for="(item, idx) in itemData.archive" :key="idx">
          <h3 v-if="item.event.title" class="newsletter-archive__list-headline">{{ item.event.title }}</h3>
          <h3 v-else class="newsletter-archive__list-headline">{{ $t('pagenewsletter.otherHeadline') }}</h3>
          <ul class="newsletter-archive__list">
            <li v-for="newsletter  in item.newsletters" :key="newsletter.id" class="newsletter-archive__list-item">
              <a class="newsletter-archive__list-link" :href="link(newsletter)" target="_blank">
								<span class="newsletter-archive__list-title">
									<svg-icon class="newsletter-archive__list-arrow" icon="app/icon-arrow"></svg-icon>
									<span>{{ newsletter.title }}</span>
								</span>
                <span class="newsletter-archive__list-url">{{ name(newsletter) }}</span>
                <svg-icon class="newsletter-archive__list-button" icon="app/icon-arrow"></svg-icon>
              </a>
            </li>
          </ul>
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
import fetchItemMixin from '../../mixins/fetchItem.js';

import NewsletterRegistrationForm from "../../components/form/NewsletterRegistrationForm";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageNewsletter',

  mixins: [fetchItemMixin],

  components: {NewsletterRegistrationForm},

  metaInfo() {

    return {
      title: this.$store.getters.env.app_name,
      titleTemplate: this.$t('pageindex.metaTitle'),
      meta: [
        {name: 'description', content: this.$t('pageindex.metaDescription')},
        {property: 'og:title', content: this.$t('pageindex.metaTitle')},
        {property: 'og:description', content: this.$t('pageindex.metaDescription')},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-newsletter.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: this.$t('pageindex.metaTitle')},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: this.$t('pageindex.metaTitle')},
        {property: 'twitter:description', content: this.$t('pageindex.metaDescription')},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-newsletter.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'newsletter-page/'
    };
  },

  computed: {},


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {

  },

  mounted() {

  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    link(newsletter) {
      return newsletter.link ? newsletter.link : newsletter.download.url
    },

    name(newsletter) {
      return newsletter.link ? newsletter.link : newsletter.download.name
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
    "pageindex.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
    "pageindex.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen.",
    "pagenewsletter.otherHeadline": "Weitere"
  },
  "en": {
    "pageindex.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
    "pageindex.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics.",
    "pagenewsletter.otherHeadline": "Other"
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



