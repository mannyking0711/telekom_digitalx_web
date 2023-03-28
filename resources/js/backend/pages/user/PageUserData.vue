<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<form-error :errors="errors"></form-error>

			<!-- FORM -->
			<input-text id="email" label="E-Mail" v-model="user.email" :error="errors.email" :readonly="true"></input-text>
			<input-text id="name" label="Name" v-model="user.name" :error="errors.name"></input-text>
			<input-text id="surname" label="Nachname" v-model="user.surname" :error="errors.surname"></input-text>
			<input-radio label="Geschlecht" id="gender" v-model="user.gender" :items="itemsGender"></input-radio>

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

			name: 'PageUserData',

			props: {

			},

			data() {
				return {
					form: 	{},
					errors: {},
					itemsGender: [{'Weiblich': 'f'}, {'Männlich':'m'}, {'Divers':'d'}],
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

					axios.post(route('api.user.save'), this.user)
					.then(response=>{

						// update local user data
						if(response.data && response.data.user) { this.$auth.user(response.data.user); }

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



