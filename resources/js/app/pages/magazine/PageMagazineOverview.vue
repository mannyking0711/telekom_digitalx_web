<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>

	<div>


    <LibHero
        :title="'Magazine'"
        :text="$t('magazineoverviewintro.copy')"
        :logo="'app/digitalx-logo'"
        :bgImage="'../img/app/initiative/background.jpg'"
        :bgImageDarken="'0'"
        style="margin-bottom: 0;"
    />

    <lib-section>
		  <magazine-overview-highlights />
    </lib-section>
		<!-- NEWSLETTER EVENT TEASER
        <magazine-overview-event-newsletter v-if="this.$i18n.locale === 'de'" />
		-->
    <lib-section>
      <magazine-overview-teaser />
      <magazine-overview-subject />
    </lib-section>

    <lib-section>
		  <magazine-overview-articles />
    </lib-section>

    <lib-section>
      <magazine-overview-podcasts />
    </lib-section>


    <magazine-overview-videos />


    <lib-section>
      <magazine-overview-staff />
    </lib-section>
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

		name: 'PageMagazineOverview',

			metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	this.$t('pageindex.metaTitle'),
					meta: [
						{ name: 	'description', 			content: this.$t('pageindex.metaDescription') },
						{ property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
						{ property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
						{ property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-magazine.jpg' },
						{ property: 'og:type', 				content: 'website' },
						{ property: 'og:url', 				content: this.ogUrl },
						{ property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:card', 		content: 'summary' },
						{ property: 'twitter:creator', 		content: 'Telekom' },
						{ property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
						{ property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-magazine.jpg' }
					],
					link: [	this.canonical ]
				};
			},

		props: {


		},

		data() {
			return {
			};
		},

		computed: {

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
				"pageindex.metaTitle": "Digitale Transformation im Magazinformat",
				"pageindex.metaDescription": "Das DIGITAL X Magazin zeigt die Chancen der digitalen Transformation für Wirtschaft, Bildung und Verwaltung – informativ, unterhaltsam, sehenswert & hörenswert. Finden Sie das passende Format für sich!",
        "magazineoverviewintro.copy": "Das DIGITAL X Magazin zeigt die digitale Innovationskraft der deutschen Wirtschaft und bringt die besten Ansätze aus Unternehmen, Verwaltung und Bildung zusammen. Die volle Themenbreite der digitalen Transformation wird in Erfolgsgeschichten aufgezeigt – Inspiration trifft auf Tiefgang und bietet Ihnen konkrete Lösungen in wissenswerten Beiträgen, Podcasts und Videos. Hier finden Sie den richtigen Anstoß für Ihre digitale Transformation!",
        "magazineoverviewintro.metaTitle": "Digitale Transformation im Magazinformat",
        "magazineoverviewintro.metaDescription": "Das DIGITAL X Magazin zeigt die Chancen der digitalen Transformation für Wirtschaft, Bildung und Verwaltung – informativ, unterhaltsam, sehenswert & hörenswert. Finden Sie das passende Format für sich!"
			},
			"en": {
				"pageindex.metaTitle": "Digital transformation in magazine format",
				"pageindex.metaDescription": "The DIGITAL X magazine highlights the opportunities offered by the digital transformation for business, education and administration – informative, entertaining and worth a read and listen. Find the right format for you!",
        "magazineoverviewintro.copy": "The DIGITAL X magazine highlights the digital innovative capacity of the German economy and pools the best approaches from the worlds of business, administration and education. The full scope of the digital transformation is illustrated through success stories, with inspiration meeting in-depth detail and offering you concrete solutions in interesting articles, podcasts and videos. You’ll find the perfect kick-start for your digital transformation here!",
        "magazineoverviewintro.metaTitle": "Digital transformation in magazine format",
        "magazineoverviewintro.metaDescription": "The DIGITAL X magazine highlights the opportunities offered by the digital transformation for business, education and administration – informative, entertaining and worth a read and listen. Find the right format for you!"
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



