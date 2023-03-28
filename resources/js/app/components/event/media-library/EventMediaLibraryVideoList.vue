<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="event-media-library-video-list">
    <!-- Filter categories -->
    <section v-if="categories.length" class="no-spacing">
      <div class="event-media-library-video-list__filter">
        <div class="event-media-library-video-list__filter__label">
          {{ $t('event-media-library-video-list.filter') }}
        </div>
        <div class="event-media-library-video-list__filter__buttons">
          <div
            v-for="(category, key) in categories"
            :key="key"
            class="event-media-library-video-list__filter__button"
            :class="{'event-media-library-video-list__filter__button--active': isActiveCategory(category)}"
            @click="toggleCategory(category)"
          >
            {{ category }}
          </div>
        </div>
        <div class="event-media-library-video-list__filter__search">
          <div class="event-media-library-video-list__search-input">
            <div class="event-media-library-video-list__search-input__input">
              <input-text autocomplete="off" :placeholder="$t('event-media-library-video-list.search')" v-model="search" @keyup.enter.native="handleSearch"/>
              <svg-icon class="event-media-library-video-list__search-input__icon" icon="app/icon-search" />
            </div>
            <button class="btn blue icon-left event-media-library-video-list__search-input__button" @click="handleSearch">
              <svg-icon icon="app/icon-arrow" />
              <span>{{ $t('event-media-library-video-list.search') }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- videos -->
    <section v-if="filteredVideos.length" class="event-media-library-video-list__videos article-list no-spacing">
      <magazine-list-item
        v-for="(item, index) in itemsVisible"
        :key="index.id"
        :item="item"
        :headlineStyle="'h5'"
      />
    </section>
    <p v-else class="event-media-library-video-list__no-video"> {{ $t("event-media-library-video-list.novideo") }} </p>
    
    <!-- LOAD MORE -->
    <div class="event-media-library-video-list__loadmore">
      <button
        v-if="(itemsStart + itemsOffset) < filteredVideos.length"
        class="btn blue icon-left"
        @click="loadMore"
      >
        <svg-icon icon="app/icon-select2"></svg-icon>
        {{ $t("event-media-library-video-list.button") }}
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
import Fuse from 'fuse.js';
import {IS_SSR} from "../../../plugins/ssrSwitch";

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: "EventMediaLibraryVideoList",

  props: {
    videos: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      itemsVisible: [],
      itemsStart: 0,
      itemsOffset: 0,
      selectedCategories: [],
      term: '',
      search: '',
      fuse: null,
      fuseSettings: {
        keys: [
          { name: 'author', weight: 0.3 },
          { name: 'title', weight: 1 },
          { name: 'description', weight: 0.8 },
          { name: 'tags', weight: 0.4 },
          { name: 'published', weight: 0.1 },
          { name: 'id', weight: 0.1 }
        ],
        threshold: 0.3,
        ignoreLocation: true,
        findAllMatches: false,
        ignoreFieldNorm: true,
        includeScore: false,
        includeMatches: false,
        sortFn: (a, b) => {
          if (a > b) {
            return -1;
          } else if (a < b) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    }
  },

  mounted() {
    this.initFuse();
  },

  beforeMount() {
    if (!this.itemsVisible.length > 0) {
      this.loadMore();
    }
  },

  computed: {
    filteredVideos() {
      let filteredVideos = (this.selectedCategories.length) ? this.filterVideos(this.videos) : this.videos;
      if (this.term) {
        console.log("term changed")
        this.fuse.setCollection(filteredVideos);
        let result = this.fuse.search(this.term);
        filteredVideos = result.map(i => i.item)
      }
      return filteredVideos;
    },
  },

  methods: {
    initFuse() {
      this.fuse = new Fuse([], this.fuseSettings);
    },

    handleSearch(e) {
      this.term = this.search;
      console.log("handle search called")
      this.refresh();
    },

    loadMore() {
      if(this.itemsOffset < 9)
        this.itemsOffset = 9;
      // set correct offset
      var loadCount = this.filteredVideos.length - (this.itemsStart + this.itemsOffset);
      loadCount = loadCount > 3 ? 3 : loadCount;

      // update container arrays
      this.itemsVisible = this.filteredVideos.slice(this.itemsStart, this.itemsStart + this.itemsOffset + loadCount);
      this.itemsOffset += loadCount;

      if (IS_SSR === true) {
        return
      }
      this.$nextTick(() => {
        window.lazyload.update();
      });
    },

    refresh() {
      this.itemsVisible = [];
      this.itemsOffset = 0;
      this.itemsStart = 0;
      this.loadMore();
    },

    // FILTER
    toggleCategory(category) {
      let index = this.selectedCategories.indexOf(category);
      index === -1 ? this.selectedCategories.push(category) : this.selectedCategories.splice(index, 1);
      this.refresh();
    },

    clearCategories() {
      this.selectedCategories = [];
    },

    isActiveCategory(category) {
      return this.selectedCategories.indexOf(category) !== -1;
    },

    filterVideos(videos) {
      const result = [];
      videos.forEach(video => {
        if (this.videoHasCategory(video)) {
          result.push(video);
        }
      })
      return result;
    },

    videoHasCategory(video) {
      if (!this.selectedCategories.length) {
        return true;
      }

      let result = false;
      if (video.tags) {
        for (const tag of video.tags) {
          if (this.isActiveCategory(tag)) {
            result = true;
            break;
          }
        }
      }
      return result;
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
    "event-media-library-video-list.filter": "Filtern nach Kategorien:",
    "event-media-library-video-list.clear": "Filter löschen",
    "event-media-library-video-list.search": "Suchen",
    "event-media-library-video-list.button": "Weitere Videos Laden",
    "event-media-library-video-list.novideo": "Kein Video"
  },
  "en": {
    "event-media-library-video-list.filter": "Filter by categories:",
    "event-media-library-video-list.clear": "Clear filter",
    "event-media-library-video-list.search": "Search",
    "event-media-library-video-list.button": "Load More Videos",
    "event-media-library-video-list.novideo": "No Video"
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
