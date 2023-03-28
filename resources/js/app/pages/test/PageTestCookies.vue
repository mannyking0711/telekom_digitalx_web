<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div class="col-100">

            <h1>Test Cookies</h1>

            <button @click="configure" class="btn">Change consent settings</button>
            <button @click="reset" class="btn">Reset to default (delete all cookies)</button>

            <h3>Debug</h3>
            <pre>
                confirmed: {{ cookieManager.confirmed }}
            </pre>

            <h4>consents</h4>
            <pre v-for="(consent, index) in cookieManager.consents">
                {{ index }}: {{ consent }}
            </pre>

            <h4>states</h4>
            <pre v-for="(consent, index) in cookieManager.states">
                {{ index }}: {{ consent }}
            </pre>

            <h4>initialized</h4>
            <pre v-for="(consent, index) in cookieManager.initialized">
                {{ index }}: {{ consent }}
            </pre>

            <h4>executedOnce</h4>
            <pre v-for="(consent, index) in cookieManager.executedOnce">
                {{ index }}: {{ consent }}
            </pre>



		</div>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

	<script>

        import {Mixins} from "../../../components/Mixins";

		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PageTestCookies',

            mixins: [Mixins],

			metaInfo() {

				return {
					title: 'tilte',
                    titleTemplate: 	'%s | Test Cookies',
				};
			},

			props: {

			},

			data() {
				return {
				};
			},

			computed: {
				cookieManager() { return this.$store.state.cookieManager; },
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

                configure() {
                    this.configureAppCookie();
                },

                reset() {
                    this.resetAppCookie();
                },

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



