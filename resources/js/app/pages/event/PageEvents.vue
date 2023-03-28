<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pageevents" v-if="itemData">

		<events-intro
			:headline="itemData.intro_headline"
			:mainEvent="itemData.intro_highlight_event"
			:events="itemData.intro_events" />

		<events-info
			:headline="itemData.info_headline"
			:text="itemData.info_text"
			:fact1_number="itemData.info_fact1_number"
			:fact1_text="itemData.info_fact1_text"
			:fact2_number="itemData.info_fact2_number"
			:fact2_text="itemData.info_fact2_text"
			:fact3_number="itemData.info_fact3_number"
			:fact3_text="itemData.info_fact3_text"
			:fact4_number="itemData.info_fact4_number"
			:fact4_text="itemData.info_fact4_text" />

		<events-list :events="itemData.preview_events" />

		<!--
		<events-footer
			:headline="itemData.footer_headline"
			:text="itemData.footer_text"
			:events="itemData.footer_events" />
		-->

	</div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>
		import fetchItemMixin from '../../mixins/fetchItem.js';

		export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PageEvents',

			mixins: [fetchItemMixin],

			metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	this.$t('pageindex.metaTitle'),
					meta: [ 
						{ name: 	'description', 			content: this.$t('pageindex.metaDescription') },
						{ property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
						{ property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
						{ property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg' },
						{ property: 'og:type', 				content: 'website' },
						{ property: 'og:url', 				content: this.ogUrl },
						{ property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:card', 		content: 'summary' },
						{ property: 'twitter:creator', 		content: 'Telekom' },
						{ property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
						{ property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg' }
					],
					link: [	this.canonical ]
				};
			},

			props: {


			},

			data() {
				return {
					ENDPOINT: 'events-page/'
				};
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {},

			mounted() {},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {},



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
				"pageindex.metaTitle": "Digital-Events: regionale Veranstaltungen und ein nationales Finale",
				"pageindex.metaDescription": "Die DIGITAL X unterstützt Sie bei der digitalen Transformation. Alle Digital-Events, Live-Veranstaltungen und Konferenzen stehen unter dem Motto: „Vernetzen, austauschen und voneinander lernen“."
			},
			"en": {
				"pageindex.metaTitle": "Digital events: regional events and a national final",
				"pageindex.metaDescription": "DIGITAL X helps you with your digital transformation. All digital events, live events and conferences follow the motto of: “Network, exchange and learn from each other.”"
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



