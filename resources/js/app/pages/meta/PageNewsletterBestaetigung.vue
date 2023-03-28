<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pagenewsletterBestaetigung.headline')" :copy="$t('pagenewsletterBestaetigung.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pagenewsletterBestaetigung.text1') }}</p>
                <p>{{ $t('pagenewsletterBestaetigung.text2') }}</p>
                <p>{{ $t('pagenewsletterBestaetigung.text3') }}<br>{{ $t('pagenewsletterBestaetigung.text4') }}</p>
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

			name: 'PageNewsletterBestaetigung',

            metaInfo() {

				return {
					title: this.$t('pagenewsletterBestaetigung.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pagenewsletterBestaetigung.metaDescription') } ],
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
				"pagenewsletterBestaetigung.headline": "Newsletter",
				"pagenewsletterBestaetigung.subheadline": "Bleiben Sie dran",
				"pagenewsletterBestaetigung.text1": "Wir haben Ihre Bestätigung erhalten. Ihre Anmeldung war erfolgreich!",
				"pagenewsletterBestaetigung.text2": "Ab sofort erhalten Sie die kommenden Ausgaben des Newsletter. Sie können diesen Newsletter jederzeit wieder abbestellen. Um eine Abmeldung durchzuführen nutzen Sie bitte den Link, der in jeder Newsletter-Ausgabe enthalten ist.",
                "pagenewsletterBestaetigung.text3": "Mit freundlichen Grüßen",
                "pagenewsletterBestaetigung.text4": "Ihr DIGITAL X Team",
				"pagenewsletterBestaetigung.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
				"pagenewsletterBestaetigung.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
			},


			"en": {
				"pagenewsletterBestaetigung.headline": "Newsletter",
				"pagenewsletterBestaetigung.subheadline": "Keep on it",
                "pagenewsletterBestaetigung.text1": "We have received your confirmation. Your registration was successful!",
                "pagenewsletterBestaetigung.text2": "From now on you will receive the upcoming issues of the newsletter. You can unsubscribe from this newsletter at any time. To unsubscribe, please use the link included in each newsletter issue.",
                "pagenewsletterBestaetigung.text3": "With kind regards",
                "pagenewsletterBestaetigung.text4": "Your DIGITAL X Team",
				"pagenewsletterBestaetigung.text": "Subscribe to the DIGITAL X newsletter to receive news and insights from the digital world! Find out all the latest updates about events and topics featuring at DIGITAL X, Europe’s leading digitalization initiative for decision makers.",
				"pagenewsletterBestaetigung.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pagenewsletterBestaetigung.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



