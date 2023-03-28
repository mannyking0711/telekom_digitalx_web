<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div>
    <search-results-item v-if="itemsVisible.length" v-for="(item, index) in itemsVisible" :key="index"
                         :item="item"></search-results-item>

    <!-- NO DATA -->
    <p v-if="searchTerm && itemsVisible && itemsVisible.length === 0">
      {{ $t('searchResults.noResult') }}
    </p>

    <!-- LOAD MORE -->
    <div class="search-results__more">
      <button
        v-if="showLoadMore"
        class="btn blue"
        @click="loadMore"
      >
        {{ $t("searchResults.loadMore") }}
      </button>
    </div>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {IS_SSR} from "../../plugins/ssrSwitch";
import {mapGetters} from "vuex";
import fetch from "node-fetch";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'SearchResults',

  props: {
    searchTerm: String,
    showFirst: {type: Number, default: 10},
    items: Array,
  },

  data() {
    return {
      ENDPOINT: 'autocomplete/full_search/',

      itemsVisible: [],
      itemsStart: 0,
      showLoadMore: true,
      page: 1,
    }
  },

  computed: {
    ...mapGetters({
      itemsOffset: 'getSearchItemsOffset'
    }),
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  serverPrefetch() {
    this.initItems();
  },

  beforeMount() {
    if (this.itemsVisible.length === 0) {
      this.initItems();
    }
  },

  watch: {
    items(newValue, oldValue) {

      this.initItems();
    },
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    initItems() {
      if (this.itemsOffset === 0) {
        this.$store.commit('setSearchItemsOffset', this.items.length > this.showFirst ? this.showFirst : this.items.length);
      }
      this.itemsVisible = this.items.slice(0, this.itemsOffset);
      this.page = 1;

      if (IS_SSR === true) {
        return
      }
      this.$nextTick(() => {
        window.lazyload.update();
      });
    },

    loadMore() {
      // set correct offset
      this.page = this.page + 1;
      fetch(this.$store.getters.env.content_url + this.ENDPOINT
          + "?q=" + encodeURIComponent(this.$router.currentRoute.query.q)
          + "&c=" + this.$router.currentRoute.query.c
          + "&page=" + this.page
          + '&lang=' + this.$i18n.locale)
          .then(response => response.json())
          .then(data => {
            this.itemsVisible = this.itemsVisible.concat(data);
            if (data.length < 5)
              this.showLoadMore = false;
          })
          .catch(err => console.log(err))
    },
  },
}; // end export

</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "searchResults.noResult": "Leider konnten keine Ergebnisse gefunden werden.",
    "searchResults.loadMore": "Mehr laden"
  },
  "en": {
    "searchResults.noResult": "Unfortunately, no results could be found.",
    "searchResults.loadMore": "Load more"
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


