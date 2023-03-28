<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pagenewsletterError.headline')" :copy="$t('pagenewsletterError.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pagenewsletterError.text1') }}</p>
                <p>
                    <router-link :to="link('meta.newsletter')" class="btn blue">{{ $t('pagenewsletterError.button') }}</router-link>
                </p>
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

			name: 'PageNewsletterError',

            metaInfo() {

				return {
					title: this.$t('pagenewsletterError.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pagenewsletterError.metaDescription') } ],
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
				"pagenewsletterError.headline": "Newsletter",
				"pagenewsletterError.subheadline": "Bleiben Sie dran",
				"pagenewsletterError.text1": "Leider ist etwas schiefgelaufen. Bitte versuche es später erneut.",
                "pagenewsletterError.button": "Newsletter bestellen",
				"pagenewsletterError.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
				"pagenewsletterError.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
			},


			"en": {
				"pagenewsletterError.headline": "Newsletter",
				"pagenewsletterError.subheadline": "Keep on it",
                "pagenewsletterError.text1": "Unfortunately something went wrong. Please try again later.",
                "pagenewsletterError.button": "Subscribe to Newsletter",
				"pagenewsletterError.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pagenewsletterError.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



