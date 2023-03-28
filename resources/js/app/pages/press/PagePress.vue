<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pagePress">

		<div class="pagePress__info">
			<section class="no-spacing">
				<div class="col-100">
					<h2 class="pagePress__info-headline">{{ $t('pagepress.accreditationHeadline') }}</h2>
					<div class="pagePress__info-text">
						<p class="pagePress__info-intro">
							{{ $t('pagepress.text1') }}
						</p>
						<p>
							{{ $t('pagepress.text2') }}
							<br>
							{{ $t('pagepress.text3') }}
							{{ $t('pagepress.text4') }}
						</p>
						<p v-html="$t('pagepress.text5')" />
						<a href="mailto:presse@presse-telekom.de" class="btn blue icon-left pagePress__info-btn">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>{{ $t('pagepress.button') }}</span>
						</a>
						<p>
							{{ $t('pagepress.text6') }}
							<br><br>
							{{ $t('pagepress.text7') }}
						</p>
					</div>
				</div>
			</section>
		</div>

		<section class="no-spacing">
			<div class="col-100 pagePress__coverage" v-if="itemData">
				<h2 class="pagePress__coverage-headline">{{ $t('pagepress.coverageHeadline') }}</h2>
				<div class="pagePress__events" v-for="(item, idx) in itemData" :key="idx">
					<h3 v-if="item.event.title" class="pagePress__list-headline">{{ item.event.title }}</h3>
					<h3 v-else class="pagePress__list-headline">{{ $t('pagepress.otherHeadline') }}</h3>
					<ul class="pagePress__list">
						<li v-for="(coverage, idx) in item.coverages" :key="idx" class="pagePress__list-item">
							<a class="pagePress__list-link" :href="coverage.link" target="_blank">
								<span class="pagePress__list-title">
									<svg-icon class="pagePress__list-arrow" icon="app/icon-arrow"></svg-icon>
									<span>{{ coverage.journal }} &ndash; {{ coverage.title }}</span>
								</span>
								<span class="pagePress__list-url">{{ coverage.link }}</span>
								<svg-icon class="pagePress__list-button" icon="app/icon-arrow"></svg-icon>
							</a>
						</li>
					</ul>
				</div>
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
		import fetchItemMixin from '../../mixins/fetchItem.js';

		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PagePress',

			mixins: [fetchItemMixin],

			metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	this.$t('pageindex.metaTitle'),
					meta: [ 
						{ name: 	'description', 			content: this.$t('pageindex.metaDescription') },
						{ property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
						{ property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
						{ property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-press.jpg' },
						{ property: 'og:type', 				content: 'website' },
						{ property: 'og:url', 				content: this.ogUrl },
						{ property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:card', 		content: 'summary' },
						{ property: 'twitter:creator', 		content: 'Telekom' },
						{ property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
						{ property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-press.jpg' }
					],
					link: [	this.canonical ]
				};
			},

			props: {


			},

			data() {
				return {
					ENDPOINT: 'coverages/'
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

			methods: {}

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
				"pagepress.accreditationHeadline": "Presse-Akkreditierung",
				"pagepress.text1": "Vielen Dank für Ihr Interesse an der DIGITAL X. Wir freuen uns, Sie als Journalist, Blogger oder Influencer begrüßen zu dürfen.",
				"pagepress.text2": "Als Veranstalter unterstützen wir Journalisten bei ihrer Berichterstattung über unsere (digitalen) Events mit einer Presse-Akkreditierung, Hintergrundmaterial zu den Veranstaltungsthemen sowie Interview-Möglichkeiten mit Veranstaltern und Referenten.",
				"pagepress.text3": "Wir bitten um Verständnis, dass Pressetickets und Informationen nur an Personen ausgegeben werden können, die ihre journalistische Tätigkeit dokumentieren können.",
				"pagepress.text4": "Die sozialen Medien sind Teil der DIGITAL X: Deshalb machen wir keinen Unterschied zwischen Vertretern traditioneller und sozialer Medien. Somit können sich Blogger und Influencer unter Voraussetzung bestimmter Qualitätskriterien ebenfalls kostenfrei zur DIGITAL X akkreditieren.",
				"pagepress.text5": "<a href='mailto:presse@presse-telekom.de?subject=Akkreditierung'>Die Presse-Akkreditierung</a> und <a href='mailto:presse@presse-telekom.de?subject=Anfrage weiterer Informationen'>Anfrage weiterer Informationen</a> kann hier direkt online beantragt werden.",
				"pagepress.text6": "Wir freuen uns darauf, Sie auf der DIGITAL X begrüßen zu dürfen!",
				"pagepress.text7": "Ihr DIGITAL X Presseteam",
				"pagepress.button": "KONTAKT",
				"pagepress.coverageHeadline": "Aktuelle Pressestimmen",
				"pagepress.otherHeadline": "Weitere",
				"pageindex.metaTitle": "DIGITAL X – Presse-Akkreditierung",
				"pageindex.metaDescription": "Wir freuen uns, dass Sie sich als Journalist, Blogger oder Influencer für die DIGITAL X interessieren. Hier können Sie die Presse-Akkreditierung beantragen und weitere Informationen zur Veranstaltung anfordern."
			},
			"en": {
				"pagepress.accreditationHeadline": "Media accreditation",
				"pagepress.text1": "Thank you for your interest in DIGITAL X. We look forward to welcoming you as a journalist, blogger, or influencer.",
				"pagepress.text2": "As the event organizer, we help journalists report on our (digital) events by providing them with media accreditatin, background material on the event topics, and opportunities for interviewing organizers and speakers.",
				"pagepress.text3": "Please understand that media passes and information may only be provided to those who are able to prove their journalism credentials.",
				"pagepress.text4": "Social media is part of DIGITAL X, which is why we don’t distinguish between representatives of traditional and social media. As such, bloggers and influencers can also be granted free accreditation to DIGITAL X, provided they meet certain quality criteria.",
				"pagepress.text5": "<a href='mailto:presse@presse-telekom.de?subject=Accreditation'>The media accreditation</a> and <a href='mailto:presse@presse-telekom.de?subject=Request for further information'>further information</a> can be requested directly online here.",
				"pagepress.text6": "We look forward to seeing you at DIGITAL X!",
				"pagepress.text7": "The DIGITAL X media team",
				"pagepress.button": "CONTACT",
				"pagepress.coverageHeadline": "Press Coverage",
				"pagepress.otherHeadline": "Other",
				"pageindex.metaTitle": "DIGITAL X – Media Accreditation",
				"pageindex.metaDescription": "We’re delighted that you, as a journalist, blogger, or influencer, are interested in DIGITAL X. You can apply for media accreditation and request further event information here."
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



