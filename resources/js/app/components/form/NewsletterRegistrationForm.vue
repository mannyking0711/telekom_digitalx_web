<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="newsletter-registration-form">

    <div class="intro">
      <p>
        <b>{{ $t('newsletterRegistrationForm.text1') }}</b>
      </p>

      <form-error :errors="errors"></form-error>
    </div>

    <form
      id="newsletterRegistrationForm"
      @submit="checkForm"
      method="post"
      action="https://web.inxmail.com/t-systems-zentral/subscription/servlet"
    >
      <input type="hidden" name="INXMAIL_SUBSCRIPTION" value="i22 DIGITAL Newsletter">
      <input type="hidden" name="INXMAIL_HTTP_REDIRECT" :value="okRedirectUrl">
      <input type="hidden" name="INXMAIL_HTTP_REDIRECT_ERROR" :value="errorRedirectUrl">
      <input type="hidden" name="INXMAIL_CHARSET" value="utf-8">

      <div class="left">
        <p>{{ $t('newsletterRegistrationForm.text*') }}</p>
        <div class="form-row">
          <div class="input-select">
            <svg-icon icon="app/icon-select"></svg-icon>
            <select name="i22_DIGITAL_X_FORM_SALUTATION">
              <option disabled="">{{ $t('newsletterRegistrationForm.salutation') }}</option>
              <option name="herr" value="Herr">{{ $t('newsletterRegistrationForm.mr') }}</option>
              <option name="frau" value="Frau">{{ $t('newsletterRegistrationForm.ms') }}</option>
            </select>
          </div>
        </div>

        <input-text
          id="name"
          v-model="firstname"
          type="text"
          name="i22_DIGITAL_X_FORM_FIRSTNAME"
          :placeholder="$t('newsletterRegistrationForm.firstname')"
          :error="errors.firstname"
        />

        <input-text
          id="lastname"
          v-model="lastname"
          type="test"
          name="i22_DIGITAL_X_LASTNAME"
          :placeholder="$t('newsletterRegistrationForm.lastname')"
          :error="errors.lastname"
        />

        <input-text
          id="email"
          v-model="email"
          type="email"
          name="email"
          :placeholder="$t('newsletterRegistrationForm.email')"
          :error="errors.email"
        />

        <div class="form-row">
          <div :class="['input-checkbox',{'error':errors.datenschutz}]">
            <input
              id="datenschutz"
              v-model="datenschutz"
              type="checkbox"
              name="datenschutz"
            >
            <label for="datenschutz" :class="{'error':errors.datenschutz}">
              <i18n path="newsletterRegistrationForm.datenschutz1" tag="span">
                <template v-slot:newsletterRegistrationForm.datenschutzhinweise>
                  <router-link class="textlink" :to="link('meta.privacy')" target="_blank">
                    {{ $t('newsletterRegistrationForm.datenschutzhinweise') }}
                  </router-link>
                </template>
              </i18n>
            </label>
            <svg-icon path="app/icon-checkbox"></svg-icon>
          </div>
        </div>

      </div>

      <div class="right">
        <p>{{ $t('newsletterRegistrationForm.datenschutz2') }}</p>
        <p>{{ $t('newsletterRegistrationForm.datenschutz3') }}</p>
      </div>

      <button type="submit" class="btn blue icon-left">
        <svg-icon icon="app/icon-arrow"></svg-icon>
        <span>{{ $t('newsletterRegistrationForm.button') }}</span>
      </button>

    </form>

  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {IS_SSR} from '../../plugins/ssrSwitch';

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'NewsletterRegistrationForm',

  props: {
    okUrl: {
      type: String,
      default: 'meta.newsletter.ok',
    },
    errorUrl: {
      type: String,
      default: 'meta.newsletter.error',
    },
  },

  data() {
    return {
      errors: {},
      salutation: null,
      firstname: null,
      lastname: null,
      email: null,
      datenschutz: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },

  computed: {

    okRedirectUrl() {
      return !IS_SSR ? window.location.origin + this.$router.resolve(this.link(this.okUrl)).href : '';
    },

    errorRedirectUrl() {
      return !IS_SSR ? window.location.origin + this.$router.resolve(this.link(this.errorUrl)).href : '';
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

      if (!this.email) {
        this.errors.email = [];
        this.errors.email.push(this.$t('newsletterRegistrationForm.email.required'));
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = [];
        this.errors.email.push(this.$t('newsletterRegistrationForm.email.invalid'));
      }

      if (!this.datenschutz) {
        this.errors.datenschutz = [];
        this.errors.datenschutz.push(this.$t('newsletterRegistrationForm.datenschutz.required'));
      }

      if (Object.keys(this.errors).length === 0) {
        return true;
      }

      e.preventDefault();
      return false;
    },

    isValidEmail(email) {
      return this.reg.test(email);
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
    "newsletterRegistrationForm.salutation": "Anrede",
    "newsletterRegistrationForm.mr": "Herr",
    "newsletterRegistrationForm.ms": "Frau",
    "newsletterRegistrationForm.firstname": "Vorname*",
    "newsletterRegistrationForm.lastname": "Nachname*",
    "newsletterRegistrationForm.email": "E-Mail-Adresse*",
    "newsletterRegistrationForm.email.required": "E-Mail erforderlich.",
    "newsletterRegistrationForm.email.invalid": "Gültige E-Mail erforderlich.",
    "newsletterRegistrationForm.datenschutz.required": "Datenschutz erforderlich.",
    "newsletterRegistrationForm.text1": "Bitte füllen Sie die Felder vollständig aus:",
    "newsletterRegistrationForm.text*": "* Pflichtfelder",
    "newsletterRegistrationForm.button": "JETZT ANMELDEN",
    "newsletterRegistrationForm.datenschutz1": "Die {newsletterRegistrationForm.datenschutzhinweise} habe ich zustimmend zur Kenntnis genommen.",
    "newsletterRegistrationForm.datenschutz2": "Alle im Zuge der Newsletter-Anmeldung von Ihnen eingegebenen personenbezogenen Daten werden ausschließlich durch die Telekom Deutschland GmbH genutzt. Eine Datenweitergabe an Dritte geschieht zu keinem Zeitpunkt. Auch Auswertungen erfolgen nur in statistisch aufbereiteter und anonymisierter Form.",
    "newsletterRegistrationForm.datenschutz3": "Sie können Ihr Newsletter-Abonnement zu jeder Zeit beenden. In jeder Newsletter-Ausgabe sind entsprechende Abmeldelinks enthalten.",
    "newsletterRegistrationForm.datenschutzhinweise": "Datenschutzhinweise"
  },
  "en": {
    "newsletterRegistrationForm.salutation": "Salutation",
    "newsletterRegistrationForm.mr": "Mr.",
    "newsletterRegistrationForm.ms": "Ms.",
    "newsletterRegistrationForm.firstname": "Firstname*",
    "newsletterRegistrationForm.lastname": "Lastname*",
    "newsletterRegistrationForm.email": "Email*",
    "newsletterRegistrationForm.email.required": "Email required.",
    "newsletterRegistrationForm.email.invalid": "Valid email required.",
    "newsletterRegistrationForm.datenschutz.required": "Privacy required.",
    "newsletterRegistrationForm.text1": "Please fill in the fields completely:",
    "newsletterRegistrationForm.text*": "* Compulsory fields",
    "newsletterRegistrationForm.button": "SIGN UP NOW",
    "newsletterRegistrationForm.datenschutz1": "I have taken note of and agree to the {newsletterRegistrationForm.datenschutzhinweise}.",
    "newsletterRegistrationForm.datenschutz2": "All personal data entered by you in the course of registering for the newsletter will be used exclusively by Telekom Deutschland GmbH. Data will not be passed on to third parties at any time. Evaluations are also only carried out in the statistically processed and anonymized form.",
    "newsletterRegistrationForm.datenschutz3": "You can cancel your newsletter subscription at any time. Every newsletter issue contains corresponding unsubscribe links.",
    "newsletterRegistrationForm.datenschutzhinweise": "data protection information"
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



