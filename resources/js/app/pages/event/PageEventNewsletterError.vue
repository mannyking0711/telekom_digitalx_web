<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pageEventNewsletterError.headline')" :copy="$t('pageEventNewsletterError.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pageEventNewsletterError.text1') }}</p>
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

			name: 'pageEventNewsletterError',

            metaInfo() {

				return {
					title: this.$t('pageEventNewsletterError.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pageEventNewsletterError.metaDescription') } ],
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
				"pageEventNewsletterError.headline": "Newsletter",
				"pageEventNewsletterError.subheadline": "Bleiben Sie dran",
				"pageEventNewsletterError.text1": "Leider ist etwas schiefgelaufen. Bitte versuche es später erneut.",
                "pagenewsletterError.button": "Newsletter bestellen",
				"pageEventNewsletterError.metaTitle": "DIGITAL X Erinnerung: Da hat wohl etwas nicht funktioniert",
				"pageEventNewsletterError.metaDescription": "Wir erinnern Sie gerne und freuen uns auf einen Abend gemeinsam mit Ihnen und spannenden Themen aus dem Mittelstand"
			},


			"en": {
				"pageEventNewsletterError.headline": "Newsletter",
				"pageEventNewsletterError.subheadline": "Keep on it",
                "pageEventNewsletterError.text1": "Unfortunately something went wrong. Please try again later.",
                "pagenewsletterError.button": "Subscribe to Newsletter",
				"pageEventNewsletterError.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pageEventNewsletterError.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



