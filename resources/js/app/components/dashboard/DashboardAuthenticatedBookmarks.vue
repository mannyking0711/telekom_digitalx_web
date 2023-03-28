<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<div class="pageDashboard__filled dashboardBookmarks no-spacing" id="dashboard-bookmarks">

        <!-- SEARCH -->
        <div class="container-fluid">
          <section class="inner no-spacing">
              <div class="col-100">
                  <div class="dashboardBookmarks__headline-row">
                      <h3 class="dashboardBookmarks__headline dashboardBookmarks__caption">
                          <svg-icon class="dashboardBookmarks__icon-bookmark" sprite="app/bookmark"></svg-icon>
                          {{ $t('dashboardBookmarks.headline') }}
                      </h3>
                      <bookmark-search
                          v-if="category && userProfile.tags && bookmarkedItems"
                          :category="category"
                          :tags="userProfile.tags"
                          :items="bookmarkedItems"
                          @search="onSearch"/>
                  </div>
              </div>
          </section>
        </div>

        <!-- LIST -->
        <div class="container-fluid">
          <section class="inner">
            <div class="col-100">
                <div class="dashboardBookmarks__bookmark-list">
                    <bookmark-list-item
                        v-for="(item, index) in itemsVisible"
                        :key="index"
                        :item="item"
                    />
                </div>

                <!-- LOAD MORE -->
                <slot>
                    <button
                        v-if="showLoadMore"
                        class="btn blue"
                        @click="loadMore"
                    >
                        {{ $t("dashboardBookmarks.button") }}
                    </button>
                </slot>
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

import BookmarkListItem from "./BookmarkListItem";
import BookmarkSearch from "./BookmarkSearch";
import {IS_SSR} from "../../plugins/ssrSwitch";
import u from "umbrellajs";


export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'DashboardAuthenticatedBookmarks',

	components: {BookmarkSearch, BookmarkListItem},


	props: {
		showFirst: {type: Number, default: 6},
		category: {type: String, default: 'all'},
		userProfile: {},
		items: Array
	},

	data() {
		return {
			itemsVisible: [],
			itemsOffset: 0,
			filteredItems: [],
			bookmarkedItems: [],
			showLoadMore: false
		};
	},

	computed: {
	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	mounted() {
		this.initBookmarkedItems();
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {

		initBookmarkedItems() {
			if (this.userProfile.bookmarks) {
				this.bookmarkedItems = this.items.filter(item => this.userProfile.bookmarks[item.type].includes(item.id));
			} else {
				this.bookmarkedItems = [];
			}
			this.updateVisibleItems(this.bookmarkedItems);
		},

		updateVisibleItems(items) {
			this.itemsOffset = items.length > this.showFirst ? this.showFirst : items.length;
			this.itemsVisible = items.slice(0, this.itemsOffset);
			this.showLoadMore = items.length > this.showFirst;
			window.lazyload.update();
		},

		loadMore() {
			let loadCount;
			// set correct offset
			if (this.filteredItems.length > 0) {
				loadCount = this.filteredItems.length - this.itemsOffset;
				loadCount = loadCount > 3 ? 3 : loadCount;
				this.itemsVisible = this.filteredItems.slice(0, this.itemsOffset + loadCount);
				this.showLoadMore = this.filteredItems.length > this.itemsOffset;
			} else {
				loadCount = this.bookmarkedItems.length - this.itemsOffset;
				loadCount = loadCount > 3 ? 3 : loadCount;
				this.itemsVisible = this.bookmarkedItems.slice(0, this.itemsOffset + loadCount);
				this.showLoadMore = this.bookmarkedItems.length > this.itemsOffset;
			}

			// update container arrays
			this.itemsOffset += loadCount;
			window.lazyload.update();

		},

		onSearch(items) {
			// update list
			if (items) {
				this.filteredItems = items;
				this.updateVisibleItems(items);
			} else {
				this.initBookmarkedItems();
			}

			if (IS_SSR === true) {
				return
			}
			this.$nextTick(() => {
				u('.article-list-item img').attr('data-was-processed', 'false');
				window.lazyload.update();
			});
		},
	},


	/////////////////////////////////
	// WATCH
	/////////////////////////////////

	watch: {

		items() {
			this.initBookmarkedItems();
		},

		userProfile() {
			this.initBookmarkedItems();
		},

		filteredItems() {
			this.updateVisibleItems(this.filteredItems);
		}
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
		"dashboardBookmarks.headline": "Ihre gemerkten Inhalte",
		"dashboardBookmarks.button": "Mehr laden"
	},
	"en": {
		"dashboardBookmarks.headline": "Your bookmarked content",
		"dashboardBookmarks.button": "Load more"
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
