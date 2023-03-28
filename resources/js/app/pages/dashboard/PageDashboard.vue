<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pageDashboard">

		<!-- user not logged in -->
		<dashboard-unauthenticated v-if="!isAuthenticated"></dashboard-unauthenticated>

		<!-- user logged in -->
		<dashboard-authenticated v-if="isAuthenticated"></dashboard-authenticated>

	</div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {mapGetters} from 'vuex';
import DashboardUnauthenticated from "../../components/dashboard/DashboardUnauthenticated";
import DashboardAuthenticated from "../../components/dashboard/DashboardAuthenticated";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PageDashboard',

	components: {DashboardAuthenticated, DashboardUnauthenticated},

	metaInfo() {

		return {
			title: this.$store.getters.env.app_name,
			titleTemplate: this.$t('pageDashboard.metaTitle'),
			meta: [
				{name: 'description', content: this.$t('pageDashboard.metaDescription')},
				{property: 'og:title', content: this.$t('pageDashboard.metaTitle')},
				{property: 'og:description', content: this.$t('pageDashboard.metaDescription')},
				{property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-contact.jpg'},
				{property: 'og:type', content: 'website'},
				{property: 'og:url', content: this.ogUrl},
				{property: 'og:site_name', content: this.$t('pageDashboard.metaTitle')},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				{property: 'twitter:title', content: this.$t('pageDashboard.metaTitle')},
				{property: 'twitter:description', content: this.$t('pageDashboard.metaDescription')},
				{property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-contact.jpg'}
			],
			link: [this.canonical]
		};
	},

	props: {},

	data() {
		return {};
	},

	computed: {

		...mapGetters('oidcStore', [
			'oidcIsAuthenticated',
		]),

		isAuthenticated() {
			return this.oidcIsAuthenticated;
		}

	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////


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
		"pageDashboard.metaTitle": "My DIGITAL X",
		"pageDashboard.metaDescription": "",
		"pageDashboard.headline": "My DIGITAL X",
		"pageDashboard.subheadline": ""
	},
	"en": {
		"pageDashboard.metaTitle": "My DIGITAL X",
		"pageDashboard.metaDescription": "",
		"pageDashboard.headline": "My DIGITAL X",
		"pageDashboard.subheadline": ""
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



