<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div v-if="this.$i18n.locale === 'de'" class="pageMagazineOverview__flat magOverPodcasts">
		<div class="magOverPodcasts__arrow"></div>
        <section class="no-spacing">
            <div class="col-100">
                <h2 class="pageMagazineOverview__headline magOverPodcasts__headline">{{ $t('magOverPodcasts.headline1') }}<br>{{ $t('magOverPodcasts.headline2') }}</h2>
                <podcast-teaser v-if="podcastHighlights.length" :item="podcastHighlights[0]" variant="large" class="magOverPodcasts__teaser" />
                <div class="text-center">
                  <router-link :to="link('magazine.podcast')" class="btn blue icon-left pageMagazineOverview__btn magOverPodcasts__btn">
                      <svg-icon icon="app/icon-arrow"></svg-icon>
                      <span>{{ $t('magOverPodcasts.buttonAll') }}</span>
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

		name: 'MagazineOverviewPodcasts',

		props: {

		},

		data() {
			return {};
		},

		computed: {
			podcastHighlights() {
                return this.$store.state.content.podcasts.highlights;
            },
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
			"magOverPodcasts.headline1": "DIGITALISIERUNG FÜR DIE OHREN:",
			"magOverPodcasts.headline2": "DIE DIGITAL X PODCASTS",
			"magOverPodcasts.buttonAll": "Alle Podcasts"
		},
		"en": {
			"magOverPodcasts.headline1": "DIGITALIZED AUDIO EXPERIENCES:",
			"magOverPodcasts.headline2": "THE DIGITAL X PODCASTS",
			"magOverPodcasts.buttonAll": "All Podcasts"
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


