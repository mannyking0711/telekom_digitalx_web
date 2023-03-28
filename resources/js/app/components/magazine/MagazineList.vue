<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
	<div>
		<!-- SEARCH AND FILTER -->
    <!-- TODO: Magazine Search -->
		<magazine-search v-if="showSearch" :contentType="contentType" @search="onSearch"/>

		<!-- LIST -->
    <div class="row article-list inner">
      <magazine-list-item
        v-for="item in itemsVisible"
        :key="item.id"
        :item="item"
        headlineStyle="h5"
        class="col-md-6 col-lg-4"
      />

      <div class="col-12">
        <div class="text-center">
          <!-- LOAD MORE -->
          <slot v-if="showLoadMore">

                <button
                  v-if="(itemsStart + itemsOffset) < items.length"
                  class="btn blue"
                  @click="loadMore"
                >
                  {{ $t("magazinelist.button") }}
                </button>

          </slot>
        </div>
      </div>

      <!-- SEO PAGINATION -->
      <nav v-if="showSeoPagination && !hasSearch" class="sr-only">
        <ul>
          <li v-for="page in this.totalPages" :key="page">
            <router-link :to="paginateObject(page)">{{ $t("magazinelist.page") }} {{ page }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
	</div>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
import u from "umbrellajs";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: "MagazineList",

  props: {
    contentType: {type: String, default: 'all'},
    showSearch: {type: Boolean, default: false},
    showFirst: {type: Number, default: 12},
    showLoadMore: {type: Boolean, default: true},
    showSeoPagination: {type: Boolean, default: false},
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    pageParameter: {
      type: String,
      default: 'p',
    },
  },

  data() {
    return {
      hasSearch: false,
      itemsVisible: [],
      itemsStart: 0,
      itemsOffset: 0,
      currentPage: null,
      totalPages: null,

    };
  },

  computed: {},

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  serverPrefetch() {
    this.initItems();
  },

  beforeMount() {
    if (!this.itemsVisible.length > 0) {
      this.initItems();
    }
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    initItems() {
      this.totalPages = Math.round(this.items.length / this.showFirst);
      this.currentPage = parseInt(this.$route.query[this.pageParameter], 10) || 1;

      this.itemsOffset = this.items.length > this.showFirst ? this.showFirst : this.items.length;
      this.itemsStart = (this.currentPage - 1) * this.itemsOffset;
      this.itemsVisible = this.items.slice(this.itemsStart, this.currentPage * this.itemsOffset);

      if (IS_SSR === true) {
        return
      }
      this.$nextTick(() => {
        window.lazyload.update();
      });
    },

    loadMore() {
      // set correct offset
      var loadCount = this.items.length - (this.itemsStart + this.itemsOffset);
      loadCount = loadCount > 3 ? 3 : loadCount;

      // update container arrays
      this.itemsVisible = this.items.slice(this.itemsStart, this.itemsStart + this.itemsOffset + loadCount);
      this.itemsOffset += loadCount;

      if (IS_SSR === true) {
        return
      }
      this.$nextTick(() => {
        window.lazyload.update();
      });
    },

    onSearch(items) {

      // update list
      if (items) {
        // this.itemsVisible = items;
        this.items = items;
        this.hasSearch = true;
      } else {
        this.initItems();
        this.hasSearch = false;
      }

      if (IS_SSR === true) {
        return
      }
      this.$nextTick(() => {
        u('.article-list-item img').attr('data-was-processed', 'false');
        window.lazyload.update();
      });
    },

    paginateObject(pageTo) {
      return {
        query: {
          ...this.$route.query,
          [this.pageParameter]: pageTo > 1 ? pageTo : undefined,
        },
      };
    },

  },

  /////////////////////////////////
  // WATCH
  /////////////////////////////////

  watch: {
    items(newValue, oldValue) {
      this.initItems();
    },
    $route(to) {
      this.initItems();
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
			"magazinelist.button": "Mehr laden",
            "magazinelist.page": "Seite"
		},
		"en": {
			"magazinelist.button": "Load more",
            "magazinelist.page": "Page"
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
