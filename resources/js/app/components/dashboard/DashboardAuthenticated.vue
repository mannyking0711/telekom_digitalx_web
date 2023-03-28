<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<div class="dahsboard-authenticated">
		<meta name="robots" content="noindex, nofollow"/>
		<!-- user profile -->
		<dashboard-authenticated-profile v-if="userProfile.tags" :userProfile="userProfile" :items="items"></dashboard-authenticated-profile>

		<!-- digital x live -->
		<dashboard-authenticated-live></dashboard-authenticated-live>
		<!-- user interests -->
		<dashboard-authenticated-interests v-if="userProfile.tags" :userProfile="userProfile" :items="items"></dashboard-authenticated-interests>

		<!-- new dx content -->
		<dashboard-authenticated-new-d-x></dashboard-authenticated-new-d-x>
		<!-- bookmarks -->
		<dashboard-authenticated-bookmarks v-if="userProfile.bookmarks && userProfile.tags" :userProfile="userProfile" :items="items"></dashboard-authenticated-bookmarks>

	</div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import DashboardAuthenticatedProfile from "./DashboardAuthenticatedProfile";
import DashboardAuthenticatedLive from "./DashboardAuthenticatedLive";
import DashboardAuthenticatedInterests from "./DashboardAuthenticatedInterests";
import DashboardAuthenticatedNewDX from "./DashboardAuthenticatedNewDX";
import DashboardAuthenticatedBookmarks from "./DashboardAuthenticatedBookmarks";
import {mapGetters} from "vuex";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'DashboardAuthenticated',
	components: {
		DashboardAuthenticatedBookmarks,
		DashboardAuthenticatedNewDX,
		DashboardAuthenticatedInterests, DashboardAuthenticatedLive, DashboardAuthenticatedProfile
	},
	props: {},

	data() {
		return {};
	},

	computed: {
		...mapGetters('oidcStore', [
			'oidcIsAuthenticated',
			'oidcUser',
			'oidcAccessToken'
		]),

		userProfile() {
			return this.$store.state.userProfile;
		},

		items() {
			let articles = this.$store.state.content.articles.list;
			let podcasts = this.$store.state.content.podcasts.list;
			let videos = this.$store.state.content.videos.list;
			return [...articles, ...podcasts, ...videos]
		},
	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	created() {
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
		"dashboardAuthenticated.foo": "Foo"
	},
	"en": {
		"dashboardAuthenticated.foo": "Foo"
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
