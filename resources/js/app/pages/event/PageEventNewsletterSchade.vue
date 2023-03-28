<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pageEventNewsletterSchade.headline')" :copy="$t('pageEventNewsletterSchade.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pageEventNewsletterSchade.text1') }}</p>
                <p>
                    <router-link :to="link('meta.newsletter')" class="btn blue">{{ $t('pageEventNewsletterSchade.button') }}</router-link>
                </p>
                <p>{{ $t('pageEventNewsletterSchade.text2') }}<br>{{ $t('pageEventNewsletterSchade.text3') }}</p>
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

			name: 'pageEventNewsletterSchade',

            metaInfo() {

				return {
					title: this.$t('pageEventNewsletterSchade.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pageEventNewsletterSchade.metaDescription') } ],
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
				"pageEventNewsletterSchade.headline": "Newsletter",
				"pageEventNewsletterSchade.subheadline": "Bleiben Sie dran",
				"pageEventNewsletterSchade.text1": "Sie haben Sich erfolgreich vom Newsletter abgemeldet. Möchten Sie den DIGITAL X Newsletter erneut abonnieren, können Sie das hier tun:",
                "pageEventNewsletterSchade.text2": "Mit freundlichen Grüßen",
                "pageEventNewsletterSchade.text3": "Ihr DIGITAL X Team",
                "pageEventNewsletterSchade.button": "Newsletter bestellen",
				"pageEventNewsletterSchade.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
				"pageEventNewsletterSchade.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
			},


			"en": {
				"pageEventNewsletterSchade.headline": "Newsletter",
				"pageEventNewsletterSchade.subheadline": "Keep on it",
                "pageEventNewsletterSchade.text1": "You have successfully unsubscribed from the newsletter. If you would like to subscribe to the DIGITAL X newsletter again, you can do so here:",
                "pageEventNewsletterSchade.text2": "With kind regards",
                "pageEventNewsletterSchade.text3": "Your DIGITAL X Team",
                "pageEventNewsletterSchade.button": "Subscribe to Newsletter",
				"pageEventNewsletterSchade.text": "Subscribe to the DIGITAL X newsletter to receive news and insights from the digital world! Find out all the latest updates about events and topics featuring at DIGITAL X, Europe’s leading digitalization initiative for decision makers.",
				"pageEventNewsletterSchade.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pageEventNewsletterSchade.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



