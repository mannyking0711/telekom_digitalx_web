<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pageEventNewsletterBestaetigung.headline')" :copy="$t('pageEventNewsletterBestaetigung.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pageEventNewsletterBestaetigung.text1') }}</p>
                <p>{{ $t('pageEventNewsletterBestaetigung.text2') }}</p>
                <p>{{ $t('pageEventNewsletterBestaetigung.text3') }}<br>{{ $t('pageEventNewsletterBestaetigung.text4') }}</p>
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

			name: 'pageEventNewsletterBestaetigung',

            metaInfo() {

				return {
					title: this.$t('pageEventNewsletterBestaetigung.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pageEventNewsletterBestaetigung.metaDescription') } ],
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
				"pageEventNewsletterBestaetigung.headline": "Die lange Nacht des Mittelstandes",
				"pageEventNewsletterBestaetigung.subheadline": "Seien Sie #dabei!",
				"pageEventNewsletterBestaetigung.text1": "Wir haben Ihre Bestätigung erhalten. Ihre Anmeldung war erfolgreich!",
				"pageEventNewsletterBestaetigung.text2": "Sie erhalten eine einmalige Erinnerungsmail für die lange Nacht des Mittelstandes.",
                "pageEventNewsletterBestaetigung.text3": "Wir freuen uns auf Sie!",
                "pageEventNewsletterBestaetigung.text4": "Ihr DIGITAL X Team",
				"pageEventNewsletterBestaetigung.metaTitle": "DIGITAL X Erinnerung: Bestätigung",
				"pageEventNewsletterBestaetigung.metaDescription": "Seien Sie #dabei! Mit diesem Service erhalten Sie eine einmalige Erinnerung mit aktuellen news für den Live-Stream."
			},


			"en": {
				"pageEventNewsletterBestaetigung.headline": "Newsletter",
				"pageEventNewsletterBestaetigung.subheadline": "Keep on it",
                "pageEventNewsletterBestaetigung.text1": "We have received your confirmation. Your registration was successful!",
                "pageEventNewsletterBestaetigung.text2": "From now on you will receive the upcoming issues of the newsletter. You can unsubscribe from this newsletter at any time. To unsubscribe, please use the link included in each newsletter issue.",
                "pageEventNewsletterBestaetigung.text3": "With kind regards",
                "pageEventNewsletterBestaetigung.text4": "Your DIGITAL X Team",
				"pageEventNewsletterBestaetigung.text": "Subscribe to the DIGITAL X newsletter to receive news and insights from the digital world! Find out all the latest updates about events and topics featuring at DIGITAL X, Europe’s leading digitalization initiative for decision makers.",
				"pageEventNewsletterBestaetigung.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pageEventNewsletterBestaetigung.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



