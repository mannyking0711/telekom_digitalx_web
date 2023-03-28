<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <section class="no-spacing pageMagazineOverview">
      <div class="container-fluid">
        <div class="magOverIntro pageParticipate__intro">
            <logo-headline
                :logo="'app/digitalx-logo-white'"
                :headline="$t('Magazin')" />
            <p class="magOverIntro__desc">
				{{ $t('magazineoverviewintro.copy') }}
            </p>
            <div class="pageParticipate__dashes"></div>
            <scroll-arrow class="pageParticipate__arrow" />
        </div>
      </div>
    </section>

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

		name: 'MagazineOverviewIntro',

		/*
		metaInfo() {

			return {
				title: this.$t('magazineoverviewintro.metaTitle'),
				titleTemplate: null,
				meta: [ { name: 'description', content: this.$t('magazineoverviewintro.metaDescription') } ],
				link: [	this.canonical ]
			};
		},
		*/

		props: {

		},

		data() {
			return {};
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
				"magazineoverviewintro.copy": "Das DIGITAL X Magazin zeigt die digitale Innovationskraft der deutschen Wirtschaft und bringt die besten Ansätze aus Unternehmen, Verwaltung und Bildung zusammen. Die volle Themenbreite der digitalen Transformation wird in Erfolgsgeschichten aufgezeigt – Inspiration trifft auf Tiefgang und bietet Ihnen konkrete Lösungen in wissenswerten Beiträgen, Podcasts und Videos. Hier finden Sie den richtigen Anstoß für Ihre digitale Transformation!",
				"magazineoverviewintro.metaTitle": "Digitale Transformation im Magazinformat",
				"magazineoverviewintro.metaDescription": "Das DIGITAL X Magazin zeigt die Chancen der digitalen Transformation für Wirtschaft, Bildung und Verwaltung – informativ, unterhaltsam, sehenswert & hörenswert. Finden Sie das passende Format für sich!"
			},
			"en": {
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
