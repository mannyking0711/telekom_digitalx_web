<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<h1>{{ $t('Passwort zurücksetzen') }}</h1>
			<form-error :errors="errors"></form-error>

			<!-- FORM -->
			<div v-if="!showSuccess">
				<input-text id="username" label="E-Mail" v-model="form.email" :error="errors.email"></input-text>
				<input-text type="password" id="password" label="Passwort" v-model="form.password" :error="errors.password"></input-text>
				<input-text type="password" @enter="submitConfirm" id="password_confirmation" label="Passwort bestätigen" v-model="form.password_confirmation" :error="errors.password_confirmation"></input-text>
				<div class="form-row-buttons">
					<button class="btn" @click="submitConfirm">{{ $t('Passwort ändern') }}</button>
				</div>
			</div>

			<!-- SUCCESS -->
			<p v-if="showSuccess">
				{{ $t('auth.password.reset.confirm') }}<br>
				<router-link :to="link('backend')" class="btn">{{ $t("Zum Login") }}</router-link>
			</p>

		</div>
		</div>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		import {route} from '../../../components/routes/Routes.js'


		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PagePasswordResetConfirm',

			metaInfo: {
				title: 			window.app_name,
				titleTemplate: 	'%s | Backend',
				meta: [
					{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
				]
			},

			props: {

			},

			data() {
				return {
					form: 	{},
					errors: {},
					showSuccess: false,
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

				submitConfirm() {

					this.form.token = this.$route.params.token;

					// execute api request
					axios.post(route('api.password.reset.confirm'), this.form).then(response => {

						if(response.status == 200) {
							this.showSuccess = true;
							this.errors = {};
						}
					})
					.catch(error => {

						// show errors
						this.showPopupError(error);
						this.showFormError(error);
					});
				}
			}

		} // end export

	</script>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<style lang="scss">

	</style>


	<style lang="scss" scoped>

	</style>



