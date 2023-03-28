<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pageEventNewsletterOk.headline')" :copy="$t('pageEventNewsletterOk.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pageEventNewsletterOk.text1') }}</p>
                <p>{{ $t('pageEventNewsletterOk.text2') }}<br>{{ $t('pageEventNewsletterOk.text3') }}</p>
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

			name: 'pageEventNewsletterOk',

            metaInfo() {

				return {
					title: this.$t('pageEventNewsletterOk.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pageEventNewsletterOk.metaDescription') } ],
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
				"pageEventNewsletterOk.headline": "Wir erinnern Sie gerne per Mail!",
				"pageEventNewsletterOk.subheadline": "Die lange Nacht des Mittelstandes",
				"pageEventNewsletterOk.text1": "Wir freuen uns über Ihr Interesse! Wir wollen sicherstellen, dass unsere Informationen nur an die von Ihnen gewünschte Adresse gesendet werden. Hierzu erhalten Sie in Kürze eine E-Mail. Bitte bestätigen Sie Ihre Anmeldung über den darin enhaltenen Link.",
                "pageEventNewsletterOk.text2": "Mit freundlichen Grüßen",
                "pageEventNewsletterOk.text3": "Ihr DIGITAL X Team",
				"pageEventNewsletterOk.metaTitle": "DIGITAL X Erinnerung: Die lange Nacht des Mittelstandes",
				"pageEventNewsletterOk.metaDescription": "Seien Sie #dabei! Mit diesem Service erhalten Sie eine einmalige Erinnerung mit aktuellen news für den Live-Stream."
			},


			"en": {
				"pageEventNewsletterOk.headline": "Newsletter",
				"pageEventNewsletterOk.subheadline": "Keep on it",
                "pageEventNewsletterOk.text1": "We appreciate your interest! We want to make sure that our information is only sent to the address you requested. For this purpose you will receive an e-mail shortly. Please confirm your registration via the link contained therein.",
                "pageEventNewsletterOk.text2": "With kind regards",
                "pageEventNewsletterOk.text3": "Your DIGITAL X Team",
				"pageEventNewsletterOk.text": "Subscribe to the DIGITAL X newsletter to receive news and insights from the digital world! Find out all the latest updates about events and topics featuring at DIGITAL X, Europe’s leading digitalization initiative for decision makers.",
				"pageEventNewsletterOk.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pageEventNewsletterOk.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



