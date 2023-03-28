<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="contact-sales-form">

        <form
            id="contactSalesForm"
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
                            :value="$t('contactSalesForm.mr')"
                        >
                        <label for="salutation1">{{ $t('contactSalesForm.mr') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                    <div class="input-radio">
                        <input
                            id="salutation2"
                            v-model="form.salutation"
                            type="radio"
                            name="salutation"
                            :value="$t('contactSalesForm.ms')"
                        >
                        <label for="salutation2">{{ $t('contactSalesForm.ms') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                    <div class="input-radio">
                        <input
                            id="salutation3"
                            v-model="form.salutation"
                            type="radio"
                            name="salutation"
                            :value="$t('contactSalesForm.divers')"
                        >
                        <label for="salutation3">{{ $t('contactSalesForm.divers') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-select">
                        <svg-icon icon="app/icon-select"></svg-icon>
                        <select name="title" v-model="form.title">
                            <option disabled="" value="">{{ $t('contactSalesForm.title') }}</option>
                            <option :value="$t('contactSalesForm.title1')">{{ $t('contactSalesForm.title1') }}</option>
                            <option :value="$t('contactSalesForm.title2')">{{ $t('contactSalesForm.title2') }}</option>
                        </select>
                    </div>
                </div>

                <input-text
                    id="name"
                    v-model="form.firstname"
                    type="text"
                    name="i22_DIGITAL_X_FORM_FIRSTNAME"
                    :placeholder="$t('contactSalesForm.firstname')"
                    :error="errors.firstname"
                />

                <input-text
                    id="lastname"
                    v-model="form.lastname"
                    type="test"
                    name="i22_DIGITAL_X_LASTNAME"
                    :placeholder="$t('contactSalesForm.lastname')"
                    :error="errors.lastname"
                />

                <input-text
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    :placeholder="$t('contactSalesForm.email')"
                    :error="errors.email"
                />

                <div class="form-grid">

                    <input-text
                        id="areacode"
                        v-model="form.areacode"
                        type="areacode"
                        name="areacode"
                        :placeholder="$t('contactSalesForm.areacode')"
                        :error="errors.areacode"
                        class="col-sm"
                    />

                    <input-text
                        id="phone"
                        v-model="form.phone"
                        type="phone"
                        name="phone"
                        :placeholder="$t('contactSalesForm.phone')"
                        :error="errors.phone"
                        class="col-lg"
                    />

                </div>

            </div>

            <div class="right">

                <div class="form-row">
                    <label :class="{error:errors.companySize}">{{ $t('contactSalesForm.companySize') }}</label>
                </div>
                <div class="form-row">
                    <div :class="['input-radio',{'error':errors.companySize}]">
                        <input
                            id="companySize1"
                            v-model="form.companySize"
                            type="radio"
                            name="companySize"
                            :value="$t('contactSalesForm.companySize1')"
                        >
                        <label for="companySize1">{{ $t('contactSalesForm.companySize1') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                    <div :class="['input-radio',{'error':errors.companySize}]">
                        <input
                            id="companySize2"
                            v-model="form.companySize"
                            type="radio"
                            name="companySize"
                            :value="$t('contactSalesForm.companySize2')"
                        >
                        <label for="companySize2">{{ $t('contactSalesForm.companySize2') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                </div>
                <div class="form-row">
                    <div :class="['input-radio',{'error':errors.companySize}]">
                        <input
                            id="companySize3"
                            v-model="form.companySize"
                            type="radio"
                            name="companySize"
                            :value="$t('contactSalesForm.companySize3')"
                        >
                        <label for="companySize3">{{ $t('contactSalesForm.companySize3') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                    <div :class="['input-radio',{'error':errors.companySize}]">
                        <input
                            id="companySize4"
                            v-model="form.companySize"
                            type="radio"
                            name="companySize"
                            :value="$t('contactSalesForm.companySize4')"
                        >
                        <label for="companySize4">{{ $t('contactSalesForm.companySize4') }}</label>
                        <svg-icon path="app/icon-radio"></svg-icon>
                    </div>
                </div>

                <input-text
                    id="company"
                    v-model="form.company"
                    type="company"
                    name="company"
                    :placeholder="$t('contactSalesForm.company')"
                    :error="errors.company"
                />

                <div class="form-grid">

                    <input-text
                        id="street"
                        v-model="form.street"
                        type="street"
                        name="street"
                        :placeholder="$t('contactSalesForm.street')"
                        :error="errors.street"
                        class="col-xl"
                    />

                    <input-text
                        id="number"
                        v-model="form.number"
                        type="number"
                        name="number"
                        :placeholder="$t('contactSalesForm.number')"
                        :error="errors.number"
                        class="col-xs"
                    />

                </div>

                <div class="form-grid">

                    <input-text
                        id="zip"
                        v-model="form.zip"
                        type="zip"
                        name="zip"
                        :placeholder="$t('contactSalesForm.zip')"
                        :error="errors.zip"
                        class="col-sm"
                    />

                    <input-text
                        id="city"
                        v-model="form.city"
                        type="city"
                        name="city"
                        :placeholder="$t('contactSalesForm.city')"
                        :error="errors.city"
                        class="col-lg"
                    />

                </div>

            </div>

            <input-textarea
                :placeholder="$t('contactSalesForm.message')"
                v-model="form.message"
                :error="errors.message"
            ></input-textarea>

            <div class="form-row">
                <div :class="['input-checkbox',{'error':errors.privacy}]">
                    <input
                        id="privacy"
                        v-model="form.privacy"
                        type="checkbox"
                        name="privacy"
                    >
                    <label for="privacy" :class="{'error':errors.privacy}">
                        <i18n path="contactSalesForm.privacy" tag="span">
                            <template v-slot:contactSalesForm.privacyPolicy>
                                <router-link class="textlink" :to="link('meta.privacy')" target="_blank">{{ $t('contactSalesForm.privacyPolicy') }}</router-link>
                            </template>
                        </i18n>
                    </label>
                    <svg-icon path="app/icon-checkbox"></svg-icon>
                </div>
            </div>

            <p>{{ $t('contactSalesForm.mandatory') }}</p>

            <form-error :errors="errors" v-if="hasErrors()"></form-error>

            <button type="submit" class="btn blue icon-left" v-if="!isSuccess()">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('contactSalesForm.button') }}</span>
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

    name: 'contactSalesForm',

    props: {

    },

    data() {
        return {
            ENDPOINT: '/contact-sales',
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
                this.errors.firstname.push(this.$t('contactSalesForm.firstname.required'));
            }

            if (!this.form.lastname) {
                this.errors.lastname = [];
                this.errors.lastname.push(this.$t('contactSalesForm.lastname.required'));
            }

            if (!this.form.email) {
                this.errors.email = [];
                this.errors.email.push(this.$t('contactSalesForm.email.required'));
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = [];
                this.errors.email.push(this.$t('contactSalesForm.email.invalid'));
            }

            if (!this.form.companySize) {
                this.errors.companySize = [];
                this.errors.companySize.push(this.$t('contactSalesForm.companySize.required'));
            }

            if (!this.form.zip) {
                this.errors.zip = [];
                this.errors.zip.push(this.$t('contactSalesForm.zip.required'));
            }

            if (!this.form.city) {
                this.errors.city = [];
                this.errors.city.push(this.$t('contactSalesForm.city.required'));
            }

            if (!this.form.message) {
                this.errors.message = [];
                this.errors.message.push(this.$t('contactSalesForm.message.required'));
            }

            if (!this.form.privacy) {
                this.errors.privacy = [];
                this.errors.privacy.push(this.$t('contactSalesForm.privacy.required'));
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
					this.success = this.$t('contactSalesForm.submit.success');
				}).catch(error => {
					this.errors = { submit: [ this.$t('contactSalesForm.submit.error') ] };
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
        "contactSalesForm.salutation": "Anrede",
        "contactSalesForm.mr": "Herr",
        "contactSalesForm.ms": "Frau",
        "contactSalesForm.divers": "Diverse",
        "contactSalesForm.title": "Titel",
        "contactSalesForm.title1": "Dr.",
        "contactSalesForm.title2": "Prof.",
        "contactSalesForm.firstname": "Vorname*",
        "contactSalesForm.firstname.required": "Vorname erforderlich.",
        "contactSalesForm.lastname": "Nachname*",
        "contactSalesForm.lastname.required": "Nachname erforderlich.",
        "contactSalesForm.email": "E-Mail*",
        "contactSalesForm.email.required": "E-Mail erforderlich.",
        "contactSalesForm.email.invalid": "Gültige E-Mail erforderlich.",
        "contactSalesForm.areacode": "Vorwahl",
        "contactSalesForm.phone": "Telefonnummer",
        "contactSalesForm.companySize": "Unternehmensgröße*",
        "contactSalesForm.companySize.required": "Unternehmensgröße erforderlich.",
        "contactSalesForm.companySize1": "unter 10 Mitarbeitern",
        "contactSalesForm.companySize2": "10 - 100 Mitarbeiter",
        "contactSalesForm.companySize3": "101 - 1.000 Mitarbeiter",
        "contactSalesForm.companySize4": "über 1.000 Mitarbeiter",
        "contactSalesForm.company": "Unternehmen",
        "contactSalesForm.street": "Straße",
        "contactSalesForm.number": "Nr.",
        "contactSalesForm.zip": "PLZ*",
        "contactSalesForm.zip.required": "PLZ erforderlich.",
        "contactSalesForm.city": "Stadt*",
        "contactSalesForm.city.required": "Stadt erforderlich.",
        "contactSalesForm.message": "Ihr Beratungswunsch*",
        "contactSalesForm.message.required": "Beratungswunsch erforderlich.",
        "contactSalesForm.privacy": "Die {contactSalesForm.privacyPolicy} habe ich zustimmend zur Kenntnis genommen.*",
        "contactSalesForm.privacyPolicy": "Datenschutzhinweise",
        "contactSalesForm.privacy.required": "Datenschutz erforderlich.",
        "contactSalesForm.mandatory": "*Pflichtfelder",
        "contactSalesForm.button": "Absenden",
        "contactSalesForm.submit.success": "Vielen Dank für Ihre Nachricht.",
        "contactSalesForm.submit.error": "Leider konnten wie Ihre Nachricht nicht zustellen. Bitte versuchen Sie es später erneut."
    },


    "en": {
        "contactSalesForm.salutation": "Salutation",
        "contactSalesForm.mr": "Mr.",
        "contactSalesForm.ms": "Ms.",
        "contactSalesForm.divers": "Divers",
        "contactSalesForm.title": "Title",
        "contactSalesForm.title1": "Dr.",
        "contactSalesForm.title2": "Prof.",
        "contactSalesForm.firstname": "First name*",
        "contactSalesForm.firstname.required": "First name required.",
        "contactSalesForm.lastname": "Surname*",
        "contactSalesForm.lastname.required": "Surname required.",
        "contactSalesForm.email": "Email",
        "contactSalesForm.email.required": "Email required.",
        "contactSalesForm.email.invalid": "Valid email required.",
        "contactSalesForm.areacode": "Area code",
        "contactSalesForm.phone": "Telephone number",
        "contactSalesForm.companySize": "Company size*",
        "contactSalesForm.companySize.required": "Company size required.",
        "contactSalesForm.companySize1": "under 10 employees",
        "contactSalesForm.companySize2": "10 - 100 employees",
        "contactSalesForm.companySize3": "101 - 1,000 employees",
        "contactSalesForm.companySize4": "over 1,000 employees",
        "contactSalesForm.company": "Company",
        "contactSalesForm.street": "Street",
        "contactSalesForm.number": "No.",
        "contactSalesForm.zip": "Postcode*",
        "contactSalesForm.zip.required": "Postcode required.",
        "contactSalesForm.city": "City*",
        "contactSalesForm.city.required": "City required.",
        "contactSalesForm.message": "Your consultation request*",
        "contactSalesForm.message.required": "Consultation request required.",
        "contactSalesForm.privacy": "I have taken note of and agree to the {contactSalesForm.privacyPolicy} information.*",
        "contactSalesForm.privacyPolicy": "data protection",
        "contactSalesForm.privacy.required": "Data protection required.",
        "contactSalesForm.mandatory": "*Compulsory fields",
        "contactSalesForm.button": "Submit",
        "contactSalesForm.submit.success": "Thank you for your message.",
        "contactSalesForm.submit.error": "Unfortunately, we could not deliver your message. Please try again later."
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
