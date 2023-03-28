<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pageAuthorDetail" v-if="itemData">

		<!-- INFO -->
		<div class="pageAuthorDetail__intro">
			<section class="no-spacing">
				<div class="col-100">
					<div class="pageAuthorDetail__info">

						<a @click="$router.go(-1)" class="pageAuthorDetail__back">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>{{ $t('pageauthor.back') }}</span>
						</a>

						<div v-if="itemData">
							<h1 class="pageAuthorDetail__headline">{{ itemData.name }} {{ itemData.surname }}</h1>
							<h3 class="pageAuthorDetail__subline">{{ itemData.subline }}</h3>
							<div class="pageAuthorDetail__sidebar">
								<img
										:src="itemData.img"
										:alt="itemData.fullname"
										class="pageAuthorDetail__image"/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<section class="no-spacing">
			<div class="col-100">
				<!-- DESCRIPTION -->
				<div class="pageAuthorDetail__desc">
					<div v-if="itemData" v-html="itemData.description" class="pageAuthorDetail__text"/>
<!--					<share-teaser class="pageAuthorDetail__share pageAuthorDetail__share&#45;&#45;mobile"/>-->
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

import fetchItemMixin from "../../mixins/fetchItem";
import fetch from "node-fetch";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PageAuthorDetail',

	mixins: [fetchItemMixin],

	metaInfo() {
		const metaData = this.findMetaData();
		return {
			title: metaData.meta_title,
			titleTemplate: null,
			meta: [{name: 'description', content: metaData.meta_description},
				{property: 'og:title', content:  metaData.meta_title},
				{property: 'og:description', content: metaData.meta_description},
				{property: 'og:image', content: metaData.img},
				{property: 'og:type', content: 'website'},
				{property: 'og:url', content: this.ogUrl},
				{property: 'og:site_name', content: metaData.meta_title},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				{property: 'twitter:title', content: metaData.meta_title},
				{property: 'twitter:description', content: metaData.meta_description},
				{property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-award.jpg'}
			],
			link: [this.canonical]
		};
	},

	props: {},

	data() {
		return {
			ENDPOINT: 'authors/details/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'name',
      SET_AS_CURRENT_ITEM: true,
			metaData: null,
		};
	},

	computed: {},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	created() {
		if (IS_SSR === true) {
			this.fetchSyncMetadata();
		}
	},

	beforeRouteLeave(to, from, next) {
		// if the route changed due to a language change, we need to translate the slug
		this.translateSlugIfLanguageChanged(to, next, this.itemData);
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {

		fetchSyncMetadata() {
			fetch(this.$store.getters.env.content_url + this.ENDPOINT)
					.then(response => response.json())
					.then(data => {
						this.metaData = data;
					})
					.catch(err => console.log(err))
		},

		findMetaData() {
			if (IS_SSR === true && this.metaData) {
				return this.metaData;
			}

			if (IS_SSR === false && typeof this.itemData !== 'undefined') {
				return this.itemData;
			}

			return {};
		},
	}


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
		"pageauthor.back": "Zurück",
		"pageauthor.teaser1Title": "Alle Informationen im Überblick",
		"pageauthor.teaser1Button": "Jetzt anmelden",
		"pageauthor.teaser2Title": "Unser digitales Programm",
		"pageauthor.til": "bis",
		"pageindex.metaTitle": "Digitalisierung in der Praxis – die DIGITAL X-Community",
		"pageindex.metaDescription": "Die DIGITAL X ist die Antwort auf die Frage „Was bedeutet Digitalisierung? Im Community-Netzwerk finden Unternehmen und Experten zusammen und erhalten konkrete Lösungen und Impulse auf Ihrem Weg in die Digitalisierung."
	},
	"en": {
		"pageauthor.back": "Back",
		"pageauthor.teaser1Title": "Access to all necessary information",
		"pageauthor.teaser1Button": "Join now",
		"pageauthor.teaser2Title": "Our digital agenda",
		"pageauthor.til": "til",
		"pageindex.metaTitle": "Digitalization in practice - the DIGITAL X community",
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



