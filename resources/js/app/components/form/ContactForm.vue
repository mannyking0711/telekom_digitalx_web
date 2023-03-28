<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="contact-form">

        <form
            id="contactForm"
            @submit="submit"
            method="post"
        >

            <div class="left">

                <div class="form-row">
                    <div class="input-radio">
                        <input
                            id="salutation1"
                            v-model="form.salutation"
                            type="radio"
                            name="salutation"
                            :value="$t('contactForm.mr')"
                        >
                        <label for="salutation1">{{ $t('contactForm.mr') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                    <div class="input-radio">
                        <input
                            id="salutation2"
                            v-model="form.salutation"
                            type="radio"
                            name="salutation"
                            :value="$t('contactForm.ms')"
                        >
                        <label for="salutation2">{{ $t('contactForm.ms') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                    <div class="input-radio">
                        <input
                            id="salutation3"
                            v-model="form.salutation"
                            type="radio"
                            name="salutation"
                            :value="$t('contactForm.divers')"
                        >
                        <label for="salutation3">{{ $t('contactForm.divers') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-select">
                        <svg-icon icon="app/icon-select"></svg-icon>
                        <select name="title" v-model="form.title">
                            <option disabled="" value="">{{ $t('contactForm.title') }}</option>
                            <option :value="$t('contactForm.title1')">{{ $t('contactForm.title1') }}</option>
                            <option :value="$t('contactForm.title2')">{{ $t('contactForm.title2') }}</option>
                        </select>
                    </div>
                </div>

                <input-text
                    id="name"
                    v-model="form.firstname"
                    type="text"
                    name="i22_DIGITAL_X_FORM_FIRSTNAME"
                    :placeholder="$t('contactForm.firstname')"
                    :error="errors.firstname"
                />

                <input-text
                    id="lastname"
                    v-model="form.lastname"
                    type="test"
                    name="i22_DIGITAL_X_LASTNAME"
                    :placeholder="$t('contactForm.lastname')"
                    :error="errors.lastname"
                />

                <input-text
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    :placeholder="$t('contactForm.email')"
                    :error="errors.email"
                />

            </div>

            <div class="right">

                <div class="form-row">
                    &nbsp;
                </div>

                <input-textarea
                    :placeholder="$t('contactForm.message')"
                    v-model="form.message"
                    :error="errors.message"
                ></input-textarea>

            </div>

            <div class="form-row">
                <div :class="['input-checkbox',{'error':errors.privacy}]">
                    <input
                        id="privacy"
                        v-model="form.privacy"
                        type="checkbox"
                        name="privacy"
                    >
                    <label for="privacy" :class="{'error':errors.privacy}">
                        <i18n path="contactForm.privacy" tag="span">
                            <template v-slot:contactForm.privacyPolicy>
                                <router-link class="textlink" :to="link('meta.privacy')" target="_blank">{{ $t('contactForm.privacyPolicy') }}</router-link>
                            </template>
                        </i18n>
                    </label>
                    <svg-icon path="app/icon-checkbox"></svg-icon>
                </div>
            </div>

            <p>{{ $t('contactForm.mandatory') }}</p>

            <form-error :errors="errors" v-if="hasErrors()"></form-error>

            <button type="submit" class="btn blue icon-left" v-if="!isSuccess()">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('contactForm.button') }}</span>
            </button>

            <div class="success" v-if="isSuccess()">
                <p>{{ success }}</p>
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
import { postItem } from '../../services/api';

export default {


    /////////////////////////////////
    // INIT
    /////////////////////////////////

    name: 'contactForm',

    props: {

    },

    data() {
        return {
        	ENDPOINT: '/contact-meta',
            errors: {},
            success: '',
            referer: this.$router.referer && window ? window.location.origin + this.$router.referer.path : '',
            form: {
                salutation: 'Herr',
                title: '',
                firstname: '',
                lastname: '',
                email: '',
                areacode: '',
                phone: '',
                companySize: '',
                company: '',
                street: '',
                number: '',
                zip: '',
                city: '',
                message: '',
                privacy: null,
            },
            reg:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
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

        submit(e) {
            e.preventDefault();
            this.errors = {};
            this.success = '';

            if (!this.form.firstname) {
                this.errors.firstname = [];
                this.errors.firstname.push(this.$t('contactForm.firstname.required'));
            }

            if (!this.form.lastname) {
                this.errors.lastname = [];
                this.errors.lastname.push(this.$t('contactForm.lastname.required'));
            }

            if (!this.form.email) {
                this.errors.email = [];
                this.errors.email.push(this.$t('contactForm.email.required'));
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = [];
                this.errors.email.push(this.$t('contactForm.email.invalid'));
            }

            if (!this.form.message) {
                this.errors.message = [];
                this.errors.message.push(this.$t('contactForm.message.required'));
            }

            if (!this.form.privacy) {
                this.errors.privacy = [];
                this.errors.privacy.push(this.$t('contactForm.privacy.required'));
            }


            if (!this.hasErrors()) {
                let formdata = this.form;
                formdata.locale = this.$i18n.locale;
                formdata.referer = this.referer;

                postItem(this.ENDPOINT, {
                        body: JSON.stringify(formdata),
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                }).then(res => {
					this.success = this.$t('contactForm.submit.success');
				}).catch(error => {
					this.errors = { submit: [ this.$t('contactForm.submit.error') ] };
					console.log(error.message);
				});

            }
        },

        isValidEmail(email) {
            return this.reg.test(email);
        },

        hasErrors() {
            return Object.keys(this.errors).length
        },

        isSuccess() {
            return this.success !== '';
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
        "contactForm.salutation": "Anrede",
        "contactForm.mr": "Herr",
        "contactForm.ms": "Frau",
        "contactForm.divers": "Diverse",
        "contactForm.title": "Titel",
        "contactForm.title1": "Dr.",
        "contactForm.title2": "Prof.",
        "contactForm.firstname": "Vorname*",
        "contactForm.firstname.required": "Vorname erforderlich.",
        "contactForm.lastname": "Nachname*",
        "contactForm.lastname.required": "Nachname erforderlich.",
        "contactForm.email": "E-Mail*",
        "contactForm.email.required": "E-Mail erforderlich.",
        "contactForm.email.invalid": "Gültige E-Mail erforderlich.",
        "contactForm.message": "Ihr Beratungswunsch*",
        "contactForm.message.required": "Beratungswunsch erforderlich.",
        "contactForm.privacy": "Die {contactForm.privacyPolicy} habe ich zustimmend zur Kenntnis genommen.*",
        "contactForm.privacyPolicy": "Datenschutzhinweise",
        "contactForm.privacy.required": "Datenschutz erforderlich.",
        "contactForm.mandatory": "*Pflichtfelder",
        "contactForm.button": "Absenden",
        "contactForm.submit.success": "Vielen Dank für Ihre Nachricht.",
        "contactForm.submit.error": "Leider konnten wie Ihre Nachricht nicht zustellen. Bitte versuchen Sie es später erneut."
    },


    "en": {
        "contactForm.salutation": "Salutation",
        "contactForm.mr": "Mr.",
        "contactForm.ms": "Ms.",
        "contactForm.divers": "Divers",
        "contactForm.title": "Title",
        "contactForm.title1": "Dr.",
        "contactForm.title2": "Prof.",
        "contactForm.firstname": "First name*",
        "contactForm.firstname.required": "First name required.",
        "contactForm.lastname": "Surname*",
        "contactForm.lastname.required": "Surname required.",
        "contactForm.email": "Email",
        "contactForm.email.required": "Email required.",
        "contactForm.email.invalid": "Valid email required.",
        "contactForm.message": "Your consultation request*",
        "contactForm.message.required": "Consultation request required.",
        "contactForm.privacy": "I have taken note of and agree to the {contactForm.privacyPolicy} information.*",
        "contactForm.privacyPolicy": "data protection",
        "contactForm.privacy.required": "Data protection required.",
        "contactForm.mandatory": "*Compulsory fields",
        "contactForm.button": "Submit",
        "contactForm.submit.success": "Thank you for your message.",
        "contactForm.submit.error": "Unfortunately, we could not deliver your message. Please try again later."
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
