<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->



<template>

    <div class="col-100">

        <h1>Test User</h1>

        <pre>
            oidcIsAuthenticated: {{oidcIsAuthenticated}}
            oidcAuthenticationIsChecked: {{oidcAuthenticationIsChecked}}
        </pre>

        <button v-if="oidcIsAuthenticated" @click.prevent="signOut" class="btn">Sign out</button>
        <button v-if="!oidcIsAuthenticated" @click.prevent="signIn" class="btn">Sign in</button>
        <button v-if="!oidcIsAuthenticated" @click.prevent="authenticateOidcPopup" class="btn">Sign in Popup</button>

        <div v-if="oidcIsAuthenticated">
            <p>
                You are signed in as:
            </p>
            <pre v-html="userDisplay"></pre>
            <p>
                Id token
            </p>
            <p>
                expires {{ new Date(oidcIdTokenExp).toISOString() }}
            </p>
            <textarea readonly style="width:100%;max-width:640px;height: 200px;margin: 0 auto;font-family: monospace;" v-model="oidcIdToken"></textarea>


            <hr>
            <p>
                Your bookmarks:
            </p>


        </div>
        <p v-else-if="oidcAuthenticationIsChecked">You are not signed in</p>
    </div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>

import {mapActions, mapGetters} from 'vuex';
import {getAuthenticateOidcPayload, getProviderLogoutUri} from "../../services/oidc-helpers";

/**
 * OIDC test page
 * http://localhost:8000/de/test/user
 *
 *
 * Authentication is implemented with the help from perarnborg/vuex-oidc:
 * https://github.com/perarnborg/vuex-oidc
 * https://github.com/perarnborg/vuex-oidc/wiki
 *
 * An example of an implementation can be found here:
 * https://github.com/perarnborg/vuex-oidc-example
 *
 */
export default {


    /////////////////////////////////
    // INIT
    /////////////////////////////////

    name: 'PageTestUser',

    metaInfo() {

        return {
            title: 'tilte',
            titleTemplate: 	'%s | Test User',
        };
    },

    props: {
        bookmarks: [],
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

        userDisplay: function () {
            return (this.oidcUser);
        }

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

        signOut: function () {
            this.removeOidcUser().then(() => {
                window.location.href = getProviderLogoutUri(this.$i18n.locale);
            })
        },

    }

} // end export

</script>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<style>
</style>



