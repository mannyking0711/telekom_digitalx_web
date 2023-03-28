<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- CONTENT -->
    <section class="inner" style="margin-top: 5%">
			<div class="col-100">
				<p>{{ $t('pagenewsletterOk.text1') }}</p>
                <p>{{ $t('pagenewsletterOk.text2') }}<br>{{ $t('pagenewsletterOk.text3') }}</p>
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

			name: 'PageNewsletterInternalOk',

            metaInfo() {

				return {
					title: this.$t('pagenewsletterOk.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pagenewsletterOk.metaDescription') } ],
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
				"pagenewsletterOk.headline": "Newsletter",
				"pagenewsletterOk.subheadline": "Bleiben Sie dran",
				"pagenewsletterOk.text1": "Wir freuen uns über Ihr Interesse! Wir wollen sicherstellen, dass unsere Informationen nur an die von Ihnen gewünschte Adresse gesendet werden. Hierzu erhalten Sie in Kürze eine E-Mail. Bitte bestätigen Sie Ihre Anmeldung über den darin enhaltenen Link.",
                "pagenewsletterOk.text2": "Mit freundlichen Grüßen",
                "pagenewsletterOk.text3": "Ihr DIGITAL X Team",
				"pagenewsletterOk.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
				"pagenewsletterOk.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
			},


			"en": {
				"pagenewsletterOk.headline": "Newsletter",
				"pagenewsletterOk.subheadline": "Keep on it",
                "pagenewsletterOk.text1": "We appreciate your interest! We want to make sure that our information is only sent to the address you requested. For this purpose you will receive an e-mail shortly. Please confirm your registration via the link contained therein.",
                "pagenewsletterOk.text2": "With kind regards",
                "pagenewsletterOk.text3": "Your DIGITAL X Team",
				"pagenewsletterOk.text": "Subscribe to the DIGITAL X newsletter to receive news and insights from the digital world! Find out all the latest updates about events and topics featuring at DIGITAL X, Europe’s leading digitalization initiative for decision makers.",
				"pagenewsletterOk.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pagenewsletterOk.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



