<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('pagenewsletterSchade.headline')" :copy="$t('pagenewsletterSchade.subheadline')"></meta-header>

		<!-- CONTENT -->
		<section class="inner">
			<div class="col-100">
				<p>{{ $t('pagenewsletterSchade.text1') }}</p>
                <p>
                    <router-link :to="link('meta.newsletter')" class="btn blue">{{ $t('pagenewsletterSchade.button') }}</router-link>
                </p>
                <p>{{ $t('pagenewsletterSchade.text2') }}<br>{{ $t('pagenewsletterSchade.text3') }}</p>
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

			name: 'PageNewsletterInternalSchade',

            metaInfo() {

				return {
					title: this.$t('pagenewsletterSchade.metaTitle'),
					titleTemplate: null,
					meta: [ { name: 'description', content: this.$t('pagenewsletterSchade.metaDescription') } ],
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
				"pagenewsletterSchade.headline": "Newsletter",
				"pagenewsletterSchade.subheadline": "Bleiben Sie dran",
				"pagenewsletterSchade.text1": "Sie haben Sich erfolgreich vom Newsletter abgemeldet. Möchten Sie den DIGITAL X Newsletter erneut abonnieren, können Sie das hier tun:",
                "pagenewsletterSchade.text2": "Mit freundlichen Grüßen",
                "pagenewsletterSchade.text3": "Ihr DIGITAL X Team",
                "pagenewsletterSchade.button": "Newsletter bestellen",
				"pagenewsletterSchade.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
				"pagenewsletterSchade.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
			},


			"en": {
				"pagenewsletterSchade.headline": "Newsletter",
				"pagenewsletterSchade.subheadline": "Keep on it",
                "pagenewsletterSchade.text1": "You have successfully unsubscribed from the newsletter. If you would like to subscribe to the DIGITAL X newsletter again, you can do so here:",
                "pagenewsletterSchade.text2": "With kind regards",
                "pagenewsletterSchade.text3": "Your DIGITAL X Team",
                "pagenewsletterSchade.button": "Subscribe to Newsletter",
				"pagenewsletterSchade.text": "Subscribe to the DIGITAL X newsletter to receive news and insights from the digital world! Find out all the latest updates about events and topics featuring at DIGITAL X, Europe’s leading digitalization initiative for decision makers.",
				"pagenewsletterSchade.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
				"pagenewsletterSchade.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



