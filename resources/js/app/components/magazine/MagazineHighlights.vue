<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="inhighlights">
		<h3 class="inhighlights__headline">
			<span v-if="contentType === 'article'">{{ $t('highlights.articleHeadline') }}</span>
			<span v-else-if="contentType === 'video'">{{ $t('highlights.videoHeadline') }}</span>
			<span v-else-if="contentType === 'podcast'">{{ $t('highlights.podcastHeadline') }}</span>
			<span v-else>{{ $t('highlights.allHeadline') }}</span>
		</h3>
		<div class="inhighlights__tabs" ref="nav">
			<div class="tns-nav-active">
				<div class="inhighlights__tab">{{ $t('highlights.today') }}</div>
				<div class="colorbox green inhighlights__colorbox"></div>
			</div>
			<div>
				<div class="inhighlights__tab">{{ $t('highlights.week') }}</div>
				<div class="colorbox green inhighlights__colorbox"></div>
			</div>
			<div>
				<div class="inhighlights__tab">{{ $t('highlights.month') }}</div>
				<div class="colorbox green inhighlights__colorbox"></div>
			</div>
		</div>
		<div ref="slider">
			<ol class="inhighlights__articles">
				<li v-for="(item, j) in highlights.day" :key="j" class="inhighlights__article">
					<router-link :to="link(linkTarget(item),linkParams(item))">{{ item.title }}</router-link>
				</li>
			</ol>
			<ol class="inhighlights__articles">
				<li v-for="(item, j) in highlights.week" :key="j" class="inhighlights__article">
					<router-link :to="link(linkTarget(item),linkParams(item))">{{ item.title }}</router-link>
				</li>
			</ol>
			<ol class="inhighlights__articles">
				<li v-for="(item, j) in highlights.month" :key="j" class="inhighlights__article">
					<router-link :to="link(linkTarget(item),linkParams(item))">{{ item.title }}</router-link>
				</li>
			</ol>
		</div>
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

		name: 'MagazineHighlights',

		props: {
			contentType: String,
			highlights: {}
		},

		data() {
			return {
				slider: undefined
			};
		},

		computed: {
		},


		/////////////////////////////////
		// EVENTS
		/////////////////////////////////

		created() {
		},

		serverPrefetch() {
		},

		mounted() {
			this.initTinySlider();
		},




		/////////////////////////////////
	// METHODS
	/////////////////////////////////

		methods: {

			initTinySlider() {

			const { tns } = require('tiny-slider/src/tiny-slider');

			// TinySlider options
				const sliderOptions = {
					slideBy: 			'page',
					mouseDrag: 			true,
					swipeAngle: 		50,
					preventScrollOnTouch: 'auto',
					autoHeight: 		true,
					controls: 			false,
					container: 		    this.$refs.slider,
					navContainer:       this.$refs.nav
				};

			// init TinySlider library
				return tns(sliderOptions);
			},

      linkTarget(item) {
        switch (item.type) {
          case 'article':
            return 'magazine.article.detail';
          case 'podcast':
            return 'magazine.podcast.detail';
          case 'video':
            return 'magazine.video.detail';
        }
      },

      linkParams(item) {
        switch (item.type) {
          case 'article':
            return {slug: this.localeSlug(item), group: this.localeSlug(item.articles_group)};
          case 'podcast':
            return {slug: this.localeSlug(item), group: this.localeSlug(item.podcast_group)};
          case 'video':
            return {slug: this.localeSlug(item), group: this.localeSlug(item.videos_group)};
        }
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
				"highlights.articleHeadline": "Meistgelesene Artikel",
				"highlights.videoHeadline": "Meistgesehene Videos",
				"highlights.podcastHeadline": "Meistgehörte Podcasts",
				"highlights.allHeadline": "Meistgesehene Inhalte",
				"highlights.today": "Heute",
				"highlights.week": "Woche",
				"highlights.month": "Monat"
			},
			"en": {
				"highlights.articleHeadline": "Most read articles",
				"highlights.videoHeadline": "Most watched videos",
				"highlights.podcastHeadline": "Most listend podcasts",
				"highlights.allHeadline": "Most viewed content",
				"highlights.today": "Today",
				"highlights.week": "Week",
				"highlights.month": "Month"
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


