<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="login-teaser">
		<div class="login-teaser__header">
        	<h3 class="login-teaser__headline">{{ $t('loginteaser.headline') }}</h3>
		</div>

		<div class="login-teaser__main">
			<div class="login-teaser__info">
				<p class="login-teaser__text" v-html="$t('loginteaser.text')" />
				
				<ul class="login-teaser__bullets">
					<li>{{ $t('loginteaser.bullet1') }}</li>
					<li>{{ $t('loginteaser.bullet2') }}</li>
					<li>{{ $t('loginteaser.bullet3') }}</li>
				</ul>
			</div>

			<div class="login-teaser__form">
				<a class="btn yellow icon-left login-teaser__btn" href="https://secure.digital-x.eu/DX_Identity/Account/Register">
					<svg-icon icon="app/icon-arrow"></svg-icon>
					<span>{{ $t('loginteaser.buttonRegister') }}</span>
				</a>

				<p class="login-teaser__label">{{ $t('loginteaser.labelRegistered') }}</p>

				<button class="btn blue icon-left login-teaser__btn" @click.prevent="signIn">
					<svg-icon icon="app/icon-arrow"></svg-icon>
					<span>{{ $t('loginteaser.buttonLogin') }}</span>
				</button>
			</div>
		</div>

    </div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

	import {mapActions, mapGetters} from "vuex";
	import {getAuthenticateOidcPayload} from "../../services/oidc-helpers";

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'LoginTeaser',

		props: {

		},

		data() {
			return {
			};
		},

		computed: {
			...mapGetters('oidcStore', [
				'oidcIsAuthenticated',
				'oidcAuthenticationIsChecked',
				'oidcUser',
				'oidcIdToken',
				'oidcIdTokenExp'
			]),
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
			...mapActions('oidcStore', ['authenticateOidc', 'authenticateOidcPopup', 'authenticateOidcSilent', 'removeOidcUser']),

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
		}

	}; // end export

</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<i18n>
		{
			"de": {
				"loginteaser.headline": 			"MY DIGITAL X INHALT",
				"loginteaser.text": 				"<em>My DIGITAL X</em> erschließt Ihnen exklusive Inhalte und zusätzliche Funktionen auf unserer Plattform.",
				"loginteaser.bullet1": 				"Kostenlos und unverbindlich",
				"loginteaser.bullet2": 				"Voller Zugriff auf archivierte Inhalte der DIGITAL X Events",
				"loginteaser.bullet3": 				"Bookmarking Funktionen und auf Ihre Interessen zugeschnittene Inhalte",
				"loginteaser.buttonRegister": 		"JETZT KOSTENLOS REGISTRIEREN",
				"loginteaser.buttonLogin": 			"HIER EINLOGGEN",
				"loginteaser.labelRegistered": 		"Bereits registriert?"
			},
			"en": {
				"loginteaser.headline": 			"MY DIGITAL X CONTENT",
				"loginteaser.text": 				"<em>My DIGITAL X</em> gives you access to exclusive content and additional functions on our platform.",
				"loginteaser.bullet1": 				"Free of charge and without obligation",
				"loginteaser.bullet2": 				"Full access to archived content from DIGITAL X events",
				"loginteaser.bullet3": 				"Bookmarking functions and content that is tailored to your interests",
				"loginteaser.buttonRegister": 		"REGISTER NOW FREE OF CHARGE",
				"loginteaser.buttonLogin": 			"LOG IN HERE",
				"loginteaser.labelRegistered": 		"Already registered?"
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


