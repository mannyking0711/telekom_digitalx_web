<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<div class="pageSocial">
    <lib-section-header
      :headline="$t('pagesocial.socialHeadline2')"
      :headline_tag="$t('pagesocial.socialHeadline1')"
      :tag_position="'before'"
      :text="$t('pagesocial.text1')"
      :inner="false"
    >
      <social-wall f_frameid="flypsiteFrameSocial"></social-wall>
    </lib-section-header>
	</div>
</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		import LibSectionHeader from "../../components/lib/LibSectionHeader";
    export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PageSocial',
      components: {LibSectionHeader},
      metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	this.$t('pageindex.metaTitle'),
					meta: [
						{ name: 	'description', 			content: this.$t('pageindex.metaDescription') },
						{ property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
						{ property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
						{ property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-social.jpg' },
						{ property: 'og:type', 				content: 'website' },
						{ property: 'og:url', 				content: this.ogUrl },
						{ property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:card', 		content: 'summary' },
						{ property: 'twitter:creator', 		content: 'Telekom' },
						{ property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
						{ property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-social.jpg' }
					],
					link: [	this.canonical ]
				};
			},

			props: { },

			data() {
				return { };
			},

			computed: { },


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() { },

			mounted() { },


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: { }

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
				"pagesocial.socialHeadline1": "Social Wall",
				"pagesocial.socialHeadline2": "– Folgen Sie uns und werden Sie Teil der digitalen Community",
				"pagesocial.text1": "Mittendrin statt nur dabei. Inspirieren Sie die Community! Gestalten Sie unser Event aktiv mit. Unsere Social Wall wird über diverse Social Media-Plattformen mit vielen Posts bespielt und wandelt sich in Echtzeit. Frische Inhalte und ständiger Austausch  – gemeinsam gestalten wir die DIGITAL X als Event und Digitalisierungsplattform mit gemeinsamen digitalen Highlights.",
				"pagesocial.button": "",
				"pagesocial.coverageHeadline": "",
				"pagesocial.otherHeadline": "",
				"pageindex.metaTitle": "Social Wall – Eventbesucher werden zu Social Media Fans",
				"pageindex.metaDescription": "Unsere Social Wall aggregiert Inhalte von diversen sozialen Netzwerken. Ob live vor Ort auf Monitoren oder auf unserer Website: Ihre Themen und Inhalte machen unser Event einzigartig. #DIGITALX – gestalten Sie die Digitalisierung mit!"

			},
			"en": {
				"pagesocial.socialHeadline1": "Social Wall",
				"pagesocial.socialHeadline2": "– Follow us and be part of the digital community",
				"pagesocial.text1": "Get right amongst it instead of just watching on. Inspire our community! Actively enrich our event. Our Social Wall is populated with many posts across various social-media platforms, and changes in real time. Through fresh content and constant exchange, we collectively create DIGITAL X as an event and digitalization platform with shared digital highlights.",
				"pagesocial.button": "",
				"pagesocial.coverageHeadline": "",
				"pagesocial.otherHeadline": "",
				"pageindex.metaTitle": "Social Wall – From event attendees to social-media fans",
				"pageindex.metaDescription": "Our Social Wall pools content from various social networks. Whether live on monitors on site or on our website: your topics and content make our event unique. #DIGITALX – help shape the digitalization process!"

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

