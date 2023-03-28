<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="newsletter-event-registration-form">

        <form-error :errors="errors" v-if="hasErrors()"></form-error>

        <form
            id="newsletterEventRegistrationForm"
            @submit="checkForm"
            method="post"
            action="https://web.inxmail.com/t-systems-zentral/subscription/servlet"
        >
            <input type="hidden" name="INXMAIL_SUBSCRIPTION" value="i22 DIGITAL X Erinnerungsservice">
            <input type="hidden" name="INXMAIL_HTTP_REDIRECT" :value="okRedirectUrl">
            <input type="hidden" name="INXMAIL_HTTP_REDIRECT_ERROR" :value="errorRedirectUrl">
            <input type="hidden" name="INXMAIL_CHARSET" value="utf-8">

            <div class="form-row">
                <div class="input-radio">
                    <input
                        id="salutation1"
                        v-model="salutation"
                        type="radio"
                        name="salutation"
                        value="Herr"
                    >
                    <label for="salutation1">{{ $t('newsletterEventRegistrationForm.mr') }}</label>
                    <svg-icon path="app/icon-radio"></svg-icon>
                </div>
                <div class="input-radio">
                    <input
                        id="salutation2"
                        v-model="salutation"
                        type="radio"
                        name="salutation"
                        value="Frau"
                    >
                    <label for="salutation2">{{ $t('newsletterEventRegistrationForm.ms') }}</label>
                    <svg-icon path="app/icon-radio"></svg-icon>
                </div>
                <div class="input-radio">
                    <input
                        id="salutation3"
                        v-model="salutation"
                        type="radio"
                        name="salutation"
                        value="Divers"
                    >
                    <label for="salutation3">{{ $t('newsletterEventRegistrationForm.divers') }}</label>
                    <svg-icon path="app/icon-radio"></svg-icon>
                </div>
            </div>

            <input-text
                id="name"
                v-model="firstname"
                type="text"
                name="i22_DIGITAL_X_FORM_FIRSTNAME"
                :placeholder="$t('newsletterEventRegistrationForm.firstname')"
                :error="errors.firstname"
            />

            <input-text
                id="lastname"
                v-model="lastname"
                type="test"
                name="i22_DIGITAL_X_LASTNAME"
                :placeholder="$t('newsletterEventRegistrationForm.lastname')"
                :error="errors.lastname"
            />

            <input-text
                id="email"
                v-model="email"
                type="email"
                name="email"
                :placeholder="$t('newsletterEventRegistrationForm.email')"
                :error="errors.email"
            />

            <div class="form-row privacy">
                <div :class="['input-checkbox',{'error':errors.datenschutz}]">
                    <input
                        id="datenschutz"
                        v-model="datenschutz"
                        type="checkbox"
                        name="datenschutz"
                    >
                    <label for="datenschutz" :class="{'error':errors.datenschutz}">
                        <i18n path="newsletterEventRegistrationForm.datenschutz1" tag="span">
                            <template v-slot:newsletterEventRegistrationForm.datenschutzhinweise>
                                <router-link class="textlink" :to="link('meta.privacy')" target="_blank">{{ $t('newsletterEventRegistrationForm.datenschutzhinweise') }}</router-link>
                            </template>
                        </i18n>
                    </label>
                    <svg-icon path="app/icon-checkbox"></svg-icon>
                </div>
                <p>*{{ $t('newsletterEventRegistrationForm.mandatory') }}</p>
            </div>

            <div class="submit-row">
                <button type="submit" class="btn blue icon-left">
                    <svg-icon icon="app/icon-arrow"></svg-icon>
                    <span>{{ $t('newsletterEventRegistrationForm.button') }}</span>
                </button>
            </div>

        </form>

    </div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

        import {IS_SSR} from "../../plugins/ssrSwitch";

        export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'newsletterEventRegistrationForm',

			props: {

			},

			data() {
				return {
                    errors: {},
                    salutation: 'Herr',
                    firstname: null,
                    lastname: null,
                    email: null,
                    datenschutz: null,
                    reg:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
				};
			},

			computed: {

                okRedirectUrl() {
                    return !IS_SSR ? window.location.origin + this.$router.resolve(this.link('events.newsletter.ok')).href : '';
                },

                errorRedirectUrl() {
                    return !IS_SSR ? window.location.origin +  this.$router.resolve(this.link('events.newsletter.error')).href : '';
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

                checkForm(e) {
                    this.errors = {};

                    if (!this.firstname) {
                        this.errors.firstname = [];
                        this.errors.firstname.push(this.$t('newsletterEventRegistrationForm.firstname.required'));
                    }

                    if (!this.lastname) {
                        this.errors.lastname = [];
                        this.errors.lastname.push(this.$t('newsletterEventRegistrationForm.lastname.required'));
                    }

                    if (!this.email) {
                        this.errors.email = [];
                        this.errors.email.push(this.$t('newsletterEventRegistrationForm.email.required'));
                    } else if (!this.isValidEmail(this.email)) {
                        this.errors.email = [];
                        this.errors.email.push(this.$t('newsletterEventRegistrationForm.email.invalid'));
                    }

                    if (!this.datenschutz) {
                        this.errors.datenschutz = [];
                        this.errors.datenschutz.push(this.$t('newsletterEventRegistrationForm.datenschutz.required'));
                    }

                    if (!this.hasErrors()) {
                        return true;
                    }

                    e.preventDefault();
                    return false;
                },

                isValidEmail(email) {
                    return this.reg.test(email);
                },

                hasErrors() {
                    return Object.keys(this.errors).length
                },

			}

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
                "newsletterEventRegistrationForm.salutation": "Anrede",
                "newsletterEventRegistrationForm.mr": "Herr",
                "newsletterEventRegistrationForm.ms": "Frau",
                "newsletterEventRegistrationForm.divers": "Diverse",
                "newsletterEventRegistrationForm.firstname": "Vorname*",
                "newsletterEventRegistrationForm.firstname.required": "Vorname erforderlich.",
                "newsletterEventRegistrationForm.lastname": "Nachname*",
                "newsletterEventRegistrationForm.lastname.required": "Nachname erforderlich.",
                "newsletterEventRegistrationForm.email": "Ihre Mailadresse*",
                "newsletterEventRegistrationForm.email.required": "E-Mail erforderlich.",
                "newsletterEventRegistrationForm.email.invalid": "Gültige E-Mail erforderlich.",
                "newsletterEventRegistrationForm.datenschutz.required": "Datenschutz erforderlich.",
                "newsletterEventRegistrationForm.mandatory": "Pflichtfelder",
                "newsletterEventRegistrationForm.button": "Anmelden",
                "newsletterEventRegistrationForm.datenschutz1": "Die {newsletterEventRegistrationForm.datenschutzhinweise} habe ich zustimmend zur Kenntnis genommen.",
                "newsletterEventRegistrationForm.datenschutzhinweise": "Datenschutzhinweise"
            },


            "en": {
                "newsletterEventRegistrationForm.salutation": "Salutation",
                "newsletterEventRegistrationForm.mr": "Mr.",
                "newsletterEventRegistrationForm.ms": "Ms.",
                "newsletterEventRegistrationForm.divers": "Divers",
                "newsletterEventRegistrationForm.firstname": "Firstname",
                "newsletterEventRegistrationForm.firstname.required": "Firstname required.",
                "newsletterEventRegistrationForm.lastname": "Lastname",
                "newsletterEventRegistrationForm.lastname.required": "Lastname required.",
                "newsletterEventRegistrationForm.email": "Email",
                "newsletterEventRegistrationForm.email.required": "Email required.",
                "newsletterEventRegistrationForm.email.invalid": "Valid email required.",
                "newsletterEventRegistrationForm.datenschutz.required": "Privacy required.",
                "newsletterEventRegistrationForm.mandatory": "Mandatory fields",
                "newsletterEventRegistrationForm.button": "SIGN UP NOW",
                "newsletterEventRegistrationForm.datenschutz1": "I have taken note of and agree to the {newsletterEventRegistrationForm.datenschutzhinweise}.",
                "newsletterEventRegistrationForm.datenschutzhinweise": "data protection information"
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



