<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="col-100">

        <h1>Test Protected – This route requires authentication</h1>

        <button v-if="oidcIsAuthenticated" @click.prevent="signOut" class="btn">Sign out</button>
        <button v-else @click.prevent="authenticateOidcPopup" class="btn">Sign in</button>

        <div v-if="oidcIsAuthenticated">
            <div v-if="oidcIsAuthenticated">
                <h2>
                    You are signed in as:
                </h2>
                <pre v-html="userDisplay"></pre>

                <h2>
                    Id token
                </h2>
                <p>
                    expires {{ new Date(oidcIdTokenExp).toISOString() }}
                </p>
                <pre v-model="oidcIdToken"></pre>
                <textarea readonly style="width:100%;max-width:640px;height: 200px;margin: 0 auto;font-family: monospace;" v-model="oidcIdToken"></textarea>
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

import {mapActions, mapGetters} from 'vuex'
import {getProviderLogoutUri} from "../../services/oidc-helpers";

/**
 * OIDC test page
 * http://localhost:8000/de/test/protected
 *
 * User is signed in: Show page content
 * User is not signed in: Redirect to authentication page
 */
export default {


    /////////////////////////////////
    // INIT
    /////////////////////////////////

    name: 'PageTestProtected',

    metaInfo() {

        return {
            title: 'tilte',
            titleTemplate: 	'%s | Test Protected',
        };
    },

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

        ...mapActions('oidcStore', ['authenticateOidcPopup', 'authenticateOidcSilent', 'removeOidcUser']),

        reauthenticate() {
            this.authenticateOidcSilent()
                .catch(() => this.removeOidcUser())
        },

        signOut: function () {
            this.removeOidcUser().then(() => {
                window.location.href = getProviderLogoutUri(this.$i18n.locale);
            })
        }

    }

} // end export

</script>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<!--@todo: find solution-->
<!--<style>-->
<!--.json-markup {-->
<!--    color: transparent;-->
<!--}-->
<!--.json-markup span {-->
<!--    color: black;-->
<!--    float: left;-->
<!--}-->
<!--.json-markup .json-markup-key {-->
<!--    clear: left;-->
<!--}-->
<!--</style>-->

<style>
</style>



