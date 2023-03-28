<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div v-if="itemData">

		<!-- HEADER -->
		<meta-header :title="itemData.title" :copy="itemData.header"></meta-header>

		<!-- CONTENT -->
    <div class="section">
      <section class="container-fluid" v-if="itemData">
        <div class="col-100" v-for="item in itemData.content">

          <!-- TEXT -->
          <div v-if="item.__component == 'article.article-text'" v-html="item.content"></div>

          <!-- COOKIES -->
          <table class="table" v-if="item.__component == 'privacy-policy.cookie-list' && item.cookies.length > 0">
            <thead>
            <tr>
              <th style="width: 30%">{{ $t('pagePrivacy.cookieTitleCompany') }}</th>
              <th style="width: 30%">{{ $t('pagePrivacy.cookieTitlePurpose') }}</th>
              <th style="width: 20%">{{ $t('pagePrivacy.cookieTitleStoragePeriod') }}</th>
              <th style="width: 20%">{{ $t('pagePrivacy.cookieTitleInvolvedAs') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="cookie in item.cookies">
              <td>{{ cookie.company }}</td>
              <td>{{ cookie.purpose }}</td>
              <td>{{ cookie.storage_period }}</td>
              <td>{{ cookie.involved_as }}</td>
            </tr>
            </tbody>
          </table>
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
import fetchItemMixin from '../../mixins/fetchItem.js';

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PagePrivacy',

	mixins: [fetchItemMixin],

	metaInfo() {

		return {
			title: this.$store.getters.env.app_name,
			titleTemplate: this.$t('pageindex.metaTitle'),
			meta: [
				{name: 'description', content: this.$t('pageindex.metaDescription')},
				{property: 'og:title', content: this.$t('pageindex.metaTitle')},
				{property: 'og:description', content: this.$t('pageindex.metaDescription')},
				{property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-privacy-policy.jpg'},
				{property: 'og:type', content: 'website'},
				{property: 'og:url', content: this.ogUrl},
				{property: 'og:site_name', content: this.$t('pageindex.metaTitle')},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				{property: 'twitter:title', content: this.$t('pageindex.metaTitle')},
				{property: 'twitter:description', content: this.$t('pageindex.metaDescription')},
				{property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-privacy-policy.jpg'}
			],
			link: [this.canonical]
		};
	},

	props: {},

	data() {
		return {
			ENDPOINT: 'privacy-policy/'
		};
	},

	computed: {},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	created() {},

	mounted() {},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {},


    /////////////////////////////////
    // WATCH
    /////////////////////////////////

    watch: {}

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
		"pagePrivacy.cookieTitleCompany": "Unternehmen",
		"pagePrivacy.cookieTitlePurpose": "Zweck",
		"pagePrivacy.cookieTitleStoragePeriod": "Speicherdauer",
		"pagePrivacy.cookieTitleInvolvedAs": "Land",
		"pageindex.metaTitle": "Datenschutzbestimmungen",
		"pageindex.metaDescription": "Die DIGITAL X ist die Antwort auf die Frage „Was bedeutet Digitalisierung? Im Community-Netzwerk finden Unternehmen und Experten zusammen und erhalten konkrete Lösungen und Impulse auf Ihrem Weg in die Digitalisierung."
	},
	"en": {
		"pagePrivacy.cookieTitleCompany": "Company",
		"pagePrivacy.cookieTitlePurpose": "Purpose",
		"pagePrivacy.cookieTitleStoragePeriod": "Storage period",
		"pagePrivacy.cookieTitleInvolvedAs": "Country",
		"pageindex.metaTitle": "Privacy policy",
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



