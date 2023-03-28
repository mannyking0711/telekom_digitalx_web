<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <section class="search-results inner">
    <div class="container-fluid">
      <div class="section">
        <div class="col-100">
          <!-- SEARCH INPUT -->
          <div class="search-results__search">
            <search-input ref="search" :search-term="searchTerm" :search-category="category" class="header-search"></search-input>
          </div>

          <!-- SEARCH RESULTS -->
          <search-results v-if="itemData" :items="itemData" :search-term="searchTerm" :showFirst="5"></search-results>
        </div>
      </div>
    </div>
  </section>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>


import fetchItemMixin from "../../mixins/fetchItem";

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageSearchResults',

  mixins: [fetchItemMixin],

  metaInfo() {

    return {
      title: this.$store.getters.env.app_name,
      titleTemplate: this.$t('pagesearchresults.metaTitle'),
      meta: [
        {name: 'description', content: this.$t('pagesearchresults.metaDescription')},
        {property: 'og:title', content: this.$t('pagesearchresults.metaTitle')},
        {property: 'og:description', content: this.$t('pagesearchresults.metaDescription')},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-newsletter.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: this.$t('pagesearchresults.metaTitle')},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: this.$t('pagesearchresults.metaTitle')},
        {property: 'twitter:description', content: this.$t('pagesearchresults.metaDescription')},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-newsletter.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'autocomplete/full_search/?q='
          + encodeURIComponent(this.$router.currentRoute.query.q ? this.$router.currentRoute.query.q : '')
          + '&c=' + encodeURIComponent(this.$router.currentRoute.query.c ? this.$router.currentRoute.query.c : 'all')
          + '&page=1'
          + '&lang=' + this.$i18n.locale,
      searchTerm: '',
      category: 'all',
      page: 1,
    };
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  mounted() {
    if (this.$router.currentRoute.query.q) {
      this.searchTerm = this.$router.currentRoute.query.q;
    }
    if (this.$router.currentRoute.query.c) {
      this.category = this.$router.currentRoute.query.c;
    }
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
  },



  /////////////////////////////////
  // WATCH
  /////////////////////////////////

  watch: {
    $route(to, from) {
      if (to.query.q !== this.searchTerm || to.query.c !== this.category) {
        this.searchTerm = to.query.q;
        this.ENDPOINT = 'autocomplete/full_search/?q='
            + encodeURIComponent(this.$router.currentRoute.query.q ? this.$router.currentRoute.query.q : '')
            + '&c=' + encodeURIComponent(this.$router.currentRoute.query.c ? this.$router.currentRoute.query.c : 'all')
            + '&page=' + this.page
            + '&lang=' + this.$i18n.locale;
        this.fetchItem();
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
    "pagesearchresults.metaTitle": "Suchergebnisse",
    "pagesearchresults.metaDescription": "",
    "pagesearchresults.noResult": "Leider konnten keine Ergebnisse gefunden werden."
  },
  "en": {
    "pagesearchresults.metaTitle": "Search results",
    "pagesearchresults.metaDescription": "",
    "pagesearchresults.noResult": "Unfortunately, no results could be found."
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
