<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<h1>{{ $t('Passwort vergessen?') }}</h1>
			<form-error :errors="errors"></form-error>

			<!-- FORM -->
			<div v-if="!showSuccess">
				<input-text @enter="submitReset" id="username" label="E-Mail" v-model="form.email" :error="errors.email"></input-text>
				<div class="form-row-buttons">
					<button class="btn" @click="submitReset">{{ $t('Bestätigungslink senden') }}</button>
				</div>
			</div>

			<!-- SUCCESS -->
			<p v-if="showSuccess">
				{{ $t('auth.password.reset.mail') }}<br>
			</p>

			<!-- BACK TO LOGIN -->
			<p>
				<router-link class="textlink" :to="link('login')">{{ $t('Zurück zum Login') }}</router-link>
			</p>

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

			name: 'PagePasswordReset',

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

				submitReset() {

					// execute api request
					axios.post(route('api.password.reset'), this.form).then(response => {

						if(response.status == 200) {
							this.showSuccess = true;
							this.errors = {};
						}
					})
					.catch(error => {

						// show global error popup
						this.showPopupError(error);

						// save form errors in component
						if(error.response.data.errors) { this.errors = error.response.data.errors }
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



