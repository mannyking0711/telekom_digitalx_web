<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<!-- USER INFO -->
			<div>
				<p>
					<b>{{ $t('Name') }}:</b> {{ user.fullname }}<br>
					<b>{{ $t('E-Mail') }}:</b> {{ user.email }}
				</p>
			</div>

			<!-- BUTTONS -->
			<div class="form-row-buttons">
				<router-link class="btn small secondary" :to="link('backend.user.data')">{{ $t('Daten ändern') }}</router-link>
				<router-link class="btn small secondary" :to="link('backend.user.password')">{{ $t('Passwort ändern') }}</router-link>
			</div>
		</div>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PageUserInfo',

			props: {

			},

			data() {
				return {

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



