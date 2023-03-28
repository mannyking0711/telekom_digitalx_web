<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <section class="container-fluid">
    <div class="col-100 dashboard-unauthenticated-welcome">
      <div class="left">
        <div class="dashboard-unauthenticated-welcome__content">
          <div class="dashboard-unauthenticated-welcome__loginText-intro">
            <span><em>My DIGITAL X </em>{{ $t('dashboardUnauthenticated.loginText1') }}</span>
          </div>
          <div class="dashboard-unauthenticated-welcome__loginText">
            <em>&#10004</em>{{ $t('dashboardUnauthenticated.loginText2') }}
          </div>
          <div class="dashboard-unauthenticated-welcome__loginText">
            <em>&#10004</em>{{ $t('dashboardUnauthenticated.loginText3') }}
          </div>
          <div class="dashboard-unauthenticated-welcome__loginText">
            <em>&#10004</em>{{ $t('dashboardUnauthenticated.loginText4') }}
          </div>
          <div class="dashboard-unauthenticated-welcome__btnContainer">
            <button class="btn yellow icon-left" @click.prevent="signIn">
              <svg-icon icon="app/icon-arrow"></svg-icon>
              {{ $t('dashboardUnauthenticated.registerButton') }}
            </button>
            <span class="dashboard-unauthenticated-welcome__question">{{
                $t('dashboardUnauthenticated.registeredText')
              }}</span>
            <button class="btn blue icon-left" @click.prevent="signIn">
              <svg-icon icon="app/icon-arrow"></svg-icon>
              {{ $t('dashboardUnauthenticated.loginButton') }}
            </button>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="https://telekom-digitalx-content-develop.s3.amazonaws.com/dashboard-speaker-collage.png"
             alt="" class="dashboard-unauthenticated-welcome__image"/>
      </div>
    </div>
  </section>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {mapActions} from "vuex";
import {getAuthenticateOidcPayload} from "../../services/oidc-helpers";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'DashboardUnauthenticatedWelcome',

	props: {},

	data() {
		return {};
	},

	computed: {},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {

		...mapActions('oidcStore', ['authenticateOidc']),

		signIn() {
			try {
                this.authenticateOidc(getAuthenticateOidcPayload(
                    this.$i18n.locale,
                    this.$store.getters.env.origin,
                    this.$router.currentRoute.path
                ));
			} catch (e) {
				console.error(e);
			}
		},

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
		"dashboardUnauthenticated.loginText1": "erschließt Ihnen exklusive Inhalte und zusätzliche Funktionen auf unserer Plattform.",
		"dashboardUnauthenticated.loginText2": "Vollkommen kostenlos und unverbindlich",
		"dashboardUnauthenticated.loginText3": "Voller Zugriff auf alle archivierten Inhalte der DIGITAL X Veranstaltungen",
		"dashboardUnauthenticated.loginText4": "Bookmarking Funktionen und auf Ihre Interessen zugeschnittene Inhalte",
		"dashboardUnauthenticated.registerButton": "Jetzt kostenlos registrieren",
		"dashboardUnauthenticated.registeredText": "Bereits registriert?",
		"dashboardUnauthenticated.loginButton": "hier einloggen"
	},
	"en": {
		"dashboardUnauthenticated.loginText1": "opens up exclusive content and additional functions for you on our platform.",
		"dashboardUnauthenticated.loginText2": "Completely free of charge and without obligation",
		"dashboardUnauthenticated.loginText3": "Full access to all archived content of the DIGITAL X events",
		"dashboardUnauthenticated.loginText4": "Bookmarking functions and content tailored to your interests",
		"dashboardUnauthenticated.registerButton": "sign up now for free",
		"dashboardUnauthenticated.registeredText": "Already registered?",
		"dashboardUnauthenticated.loginButton": "log in here"
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
