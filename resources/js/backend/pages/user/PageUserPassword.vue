<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<form-error :errors="errors"></form-error>

			<!-- FORM -->
			<input-text id="password-old" type="password" label="Altes Passwort" v-model="form.old" :error="errors.old"></input-text>
			<input-text id="password-new" type="password" label="Neues Passwort" v-model="form.password" :error="errors.password"></input-text>
			<input-text id="password-confirm" type="password" label="Passwort bestätigen" v-model="form.password_confirmation" :error="errors.password_confirmation"></input-text>

			<!-- BUTTONS -->
			<div class="form-row-buttons">
				<router-link :to="link('backend.user.info')" class="btn secondary">{{ $t('Abbrechen') }}</router-link>
				<button class="btn" @click="submit">{{ $t('Speichern') }}</button>
			</div>

		</div>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>


		import {route} from '@components/routes/Routes.js';


		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PageUserPassword',

			props: {

			},

			data() {
				return {
					form: 	{},
					errors: {},
				};
			},

			computed: {

				user() { return this.$auth.user() }
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

				submit() {

					this.form.id = this.user.id;

					axios.post(route('api.user.password'), this.form)
					.then(response => {

						this.$router.push({name:'backend.user.info'});
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



