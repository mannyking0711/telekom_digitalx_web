<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="pageDashboard__filled dashboardNewDX" id="dashboard-newdx">
    <div class="container-fluid">
      <section class="no-spacing">
        <h3 class="dashboardNewDX__headline dashboardNewDX__caption" v-html="$t('dashboardDX.headline')"></h3>
        <section class="article-list inner">
          <div class="row">
            <magazine-list-item
                v-for="(item, index) in filteredItems"
                :key="index"
                :item="item"
                class="col-md-6 col-lg-4"
                :headlineStyle="'h5'"
            />
          </div>
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

import MagazineListItem from "../magazine/MagazineListItem";

export default {


    /////////////////////////////////
    // INIT
    /////////////////////////////////

    name: 'DashboardAuthenticatedNewDX',

	props: {
	},

	data() {
		return {
			filteredItems: [],
		};
	},

	computed: {

		articles() {
			return this.$store.state.content.articles.list;
		},
		videos() {
			return this.$store.state.content.videos.list;
		},
		podcasts() {
			return this.$store.state.content.podcasts.list;
		},

	},

	components: {MagazineListItem},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////


	mounted() {
        this.filterArticles();
        this.filterPodcasts();
        this.filterVideos();
        this.$nextTick(() => {
            window.lazyload.update();
        });
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
		filterArticles() {
			this.articles.forEach(item => {
				if(item.premium){
					this.filteredItems.push(item);
				}
			})

		},

		filterPodcasts() {
			this.podcasts.forEach(item => {
				if(item.premium){
					this.filteredItems.push(item);
				}
			})
		},

		filterVideos() {
			this.videos.forEach(item => {
				if(item.premium){
					this.filteredItems.push(item);
				}
			})
		}
	},

	watch: {
    	articles() {
    		this.filterArticles();
		},
		podcasts() {
    		this.filterPodcasts();
		},
		videos() {
    		this.filterVideos();
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
        "dashboardDX.headline": "Neue <em>My DIGITAL X</em> Inhalte"
    },


    "en": {
        "dashboardDX.headline": "New <em>My DIGITAL X</em> Content"
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
