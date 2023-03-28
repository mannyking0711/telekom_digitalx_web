<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div>
    <section class="bg-dx magOverVideos">
      <div class="section">
        <div class="container-fluid">
            <h2 class="pageMagazineOverview__headline magOverVideos__headline">{{ $t('magOverVideos.headline1') }}<br>{{ $t('magOverVideos.headline2') }}</h2>

            <article-hero-list v-if="videoHighlights.length" class="article-hero-list--padded magOverVideos__highlight" :articles="[videoHighlights[0]]" />
        </div>
      </div>
    </section>
    <section class="magOverVideos">
      <div class="container-fluid">
            <div class="pageMagazineOverview__flat pageMagazineOverview__rounded magOverVideos__list">
                <h2 class="pageMagazineOverview__headline magOverVideos__list-headline">{{ $t('magOverVideos.currentHeadline') }}</h2>
                <magazine-list v-if="videos.length" :items="videos" contentType="video" :showFirst="3" :showLoadMore="false" />
            </div>
        <div class="text-center">
            <router-link :to="link('magazine.video')" class="btn blue icon-left pageMagazineOverview__btn">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('magOverVideos.buttonAll') }}</span>
            </router-link>
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

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'MagazineOverviewVideos',

		props: {

		},

		data() {
			return {};
		},

		computed: {
			videos() {
                return this.$store.state.content.videos.list;
            },
			videoHighlights() {
				return this.$store.state.content.videos.highlights;
			}
		},


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

		}

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
			"magOverVideos.headline1": "SEHENSWERTES ZUR DIGITALEN TRANSFORMATION:",
			"magOverVideos.headline2": "DIGITAL X VIDEOS",
			"magOverVideos.currentHeadline": "AKTUELLE VIDEOS",
			"magOverVideos.buttonAll": "ALLE VIDEOS"
		},
		"en": {
			"magOverVideos.headline1": "VISUAL CONTENT WORTH WATCHING ON THE DIGITAL TRANSFORMATION:",
			"magOverVideos.headline2": "DIGITAL X VIDEOS",
			"magOverVideos.currentHeadline": "LATEST VIDEOS",
			"magOverVideos.buttonAll": "ALL VIDEOS"
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


