<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- HEADER -->
		<meta-header :title="$t('FAQ')" :copy="$t('h2')"></meta-header>

		<!-- CONTENT -->
    <div class="section">
      <section class="container-fluid">
        <div class="col-100">
          <faq-section />
        </div>
      </section>
    </div>

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

			name: 'PageFaq',

			metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	this.$t('pageindex.metaTitle'),
					meta: [ 
						{ name: 	'description', 			content: this.$t('pageindex.metaDescription') },
						{ property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
						{ property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
						{ property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-faq.jpg' },
						{ property: 'og:type', 				content: 'website' },
						{ property: 'og:url', 				content: this.ogUrl },
						{ property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:card', 		content: 'summary' },
						{ property: 'twitter:creator', 		content: 'Telekom' },
						{ property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
						{ property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-faq.jpg' }
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
				"h2": "Antworten auf ihre Fragen",
				"pageindex.metaTitle": "FAQ",
				"pageindex.metaDescription": "Die DIGITAL X ist die Antwort auf die Frage „Was bedeutet Digitalisierung? Im Community-Netzwerk finden Unternehmen und Experten zusammen und erhalten konkrete Lösungen und Impulse auf Ihrem Weg in die Digitalisierung."
			},


			"en": {
				"h2": "Answers to your questions",
				"pageindex.metaTitle": "FAQ",
				"pageindex.metaDescription": "DIGITAL X is the answer to the question of “What does digitalization mean?” The community network brings businesses and experts together, offering them concrete solutions and ideas as they go digital."
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



