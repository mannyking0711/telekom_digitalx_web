<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="pageDashboard__filled dashboardInterests" id="dashboard-interests">
    <div class="container-fluid">
      <section class="no-spacing">
          <h3 class="dashboardInterests__headline dashboardInterests__caption">{{ $t('dashboardInterests.headline') }}</h3>
          <!-- LIST -->
          <section class="article-list inner" v-if="itemsVisible.length > 0">
            <magazine-list-item
                v-for="(item, index) in itemsVisible"
                :key="index"
                :item="item"
                class="col-33"
            />
            <slot>
              <a href="https://secure.digital-x.eu/DX/UserProfile/UserProfile" class="btn blue icon-left">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{$t("dashboardInterests.button")}}</span>
              </a>
            </slot>
          </section>
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

import {mapActions, mapGetters} from 'vuex';
import Fuse from "fuse.js";
import MagazineListItem from "../magazine/MagazineListItem";
import {IS_SSR} from "../../plugins/ssrSwitch";
import {postItem} from "../../services/api";

export default {


    /////////////////////////////////
    // INIT
    /////////////////////////////////

    name: 'DashboardAuthenticatedInterests',

	props: {
		showFirst: {type: Number, default: 6},
		showLoadMore: {type: Boolean, default: true},
		userProfile: {},
		items: Array
	},

    data() {
      return {
        itemsVisible: [],
        itemsOffset: 0,
        userInterests: [],
        filteredItems: [],
        fuse: null,
        fuseSettings: {
          keys: [
            { name: 'tags', weight: 1 },
            { name: 'published', weight: 0.1 },
          ],
          threshold: 0.3,
          ignoreLocation: true,
          sortFn: (a, b) => {
            if ( a > b ) {
              return -1;
            } else if ( a < b ) {
              return 1;
            } else {
              return 0;
            }
          }
        },
      };
    },

    computed: {
        ...mapGetters('oidcStore', [
            'oidcUser', 'oidcAccessToken'
        ]),

	},

	components: {MagazineListItem},


    /////////////////////////////////
    // EVENTS
    /////////////////////////////////

	mounted() {
		this.getUserTags();
	},
	/////////////////////////////////
	// METHODS
	/////////////////////////////////

    methods: {

		getUserTags() {
			if (this.userProfile.tags) {
				this.userProfile.tags.forEach(element => {
					if (this.$i18n.locale === 'de') {
						this.userInterests.push(element.name_de);
					} else {
						this.userInterests.push(element.name_en);
					}
				})

				this.initFuse();
			}
		},

		initFuse() {
			this.fuse = new Fuse(this.items, this.fuseSettings);
			this.onSearch(this.userInterests);
		},
		onSearch(terms) {
			if (terms.length > 0) {
				let items = [];
				terms.forEach(term => {
					items.push(this.fuse.search(term));
				})
				items.forEach(item => {
					item.forEach(i => {
						this.filteredItems.push(i.item);
					})
				})

				this.updateVisibleItems();
			}
		},
		updateVisibleItems() {
			this.itemsOffset = this.filteredItems.length > this.showFirst ? this.showFirst : this.filteredItems.length;
			this.itemsVisible = this.filteredItems.slice(0, this.itemsOffset);

			this.$nextTick(() => {
				window.lazyload.update();
			});
		},
	},

	watch: {
		items() {
			this.initFuse();
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
        "dashboardInterests.headline": "Neue Inhalte zu Ihren Interessen",
		"dashboardInterests.button": "Interessen Verwalten"
    },


    "en": {
        "dashboardInterests.headline": "New Content for your Interests",
		"dashboardInterests.button": "Manage Interests"
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
