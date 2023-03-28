<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="pageParticipate">

    <template v-if="itemData">
      <component
        v-for="(component, key) in itemData.content"
        :key="key"
        v-bind="component"
        :is="component.__component"
      />
    </template>

  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import FaqSection from "../../components/sections/FaqSection";
import fetchItemMixin from "../../mixins/fetchItem";
import {IS_SSR} from "../../plugins/ssrSwitch";
import fetch from "node-fetch";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageParticipate',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-participate.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-participate.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'event-participate-page/',
      metaData: null,
    };
  },

  computed: {

  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },

  beforeRouteLeave(to, from, next) {
    // if the route changed due to a language change, we need to translate the slug
    this.translateSlugIfLanguageChanged(to, next, this.event);
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    fetchSyncMetadata() {
      fetch(this.$store.getters.env.content_url + this.ENDPOINT)
        .then(response => response.json())
        .then(data => {
          this.metaData = data;
        })
        .catch(err => console.log(err))
    },

    findMetaData() {
      if (IS_SSR === true && this.metaData) {
        return this.metaData;
      }

      if (IS_SSR === false && typeof this.itemData !== 'undefined') {
        return this.itemData;
      }

      return {};
    },
  },
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
    "pageParticipate.headline": "Veranstaltungsteilnahme DIGITAL X",
    "pageParticipate.introText": "Mit Ihrer Anmeldung zur DIGITAL X 2022 werden Sie Teil des Community Netzwerks der DIGITAL X. Profitieren Sie zukünftig vom gesamten Angebot: Events, Coachings, Insights, Networking, Zugang zu exklusiven Podcast- & Videoformaten, sowie Studien und White Papers, Vorteile für Produkte und Services und vielem mehr.",
    "pageParticipate.stepsHeadline": "Ihre Anmeldung zur DIGITAL X",
    "pageParticipate.step1Headline": "Registrierung über die Website",
    "pageParticipate.step1Text": "Über den Registrierungsbutton werden Sie zur Anmeldung weitergeleitet.",
    "pageParticipate.step2Headline": "Benutzeraccount anlegen und vervollständigen",
    "pageParticipate.step2Text": "Erstellen Sie Ihren Benutzeraccount für die Teilnahme am DIGITAL X Campus und allen weiteren DIGITAL X Veranstaltungen. Geben Sie dafür bitte Ihre persönlichen Daten ein und vervollständigen Sie Ihr Profil. Sollten Sie sich bereits registriert haben, können Sie sich direkt mit Ihren Benutzerdaten einloggen.",
    "pageParticipate.step3Headline": "Registrierung abschließen",
    "pageParticipate.step3Text": "Bestätigen Sie Ihre Registrierung auf der Anmeldeplattform. Damit sind Sie erfolgreich registriert und erhalten eine Bestätigungsmail. In der Mail finden Sie einen Link zur Website, unter dem Sie sich erneut einloggen und an den Veranstaltungen teilnehmen können.",
    "pageParticipate.step4Headline": "Anmeldung DIGITAL X 2022",
    "pageParticipate.step4Text": "Nach der erfolgreichen Registrierung können Sie sich jederzeit erneut über die Website einloggen und an der Veranstaltung teilnehmen. Im My DIGITAL X-Bereich stehen Ihnen veranstaltungsspezifische Features, sowie exklusive Inhalte zur Verfügung.",
    "pageParticipate.stepsButton": "Jetzt teilnehmen",
    "pageParticipate.faqHeadline": "FAQ",
    "pageindex.metaTitle": "Jetzt registrieren und an der DIGITAL X teilnehmen",
    "pageindex.metaDescription": "Alle Vorteile der DIGITAL X nutzen – mit Ihrer Anmeldung am Campus können Sie ab sofort aktiv an der DIGITAL X Community teilnehmen: Events, Networking, Best Practice Beispiele und Wissensaustausch."
  },
  "en": {
    "pageParticipate.headline": "Participating in DIGITAL X",
    "pageParticipate.introText": "By registering for DIGITAL X 2022 you‘ll gain access to the entire DIGITAL X community. Benefit from all program highlights, the partner network, your customized agenda, and much more.",
    "pageParticipate.stepsHeadline": "Registering for DIGITAL X",
    "pageParticipate.step1Headline": "Registering through the website",
    "pageParticipate.step1Text": "Clicking the Registration button will take you to the registration.",
    "pageParticipate.step2Headline": "Creating and completing your user account",
    "pageParticipate.step2Text": "Create your user account to participate in the DIGITAL X Campus and all other DIGITAL X events. To do this, please enter your personal details and complete your profile. If you have already registered, you can log in directly with your user details.",
    "pageParticipate.step3Headline": "Completing registration",
    "pageParticipate.step3Text": "Confirm your registration on the registration platform. This successfully registers you, and you will receive an email confirmation containing a link to the website, where you can log in again and participate in the events.",
    "pageParticipate.step4Headline": "Registering for the DIGITAL X 2022",
    "pageParticipate.step4Text": "Once you have successfully registered, you can log in through the website at any time and participate in the event. The My DIGITAL X area provides event-specific features and exclusive content.",
    "pageParticipate.stepsButton": "Register now",
    "pageParticipate.faqHeadline": "FAQ",
    "pageindex.metaTitle": "Register now and participate in DIGITAL X",
    "pageindex.metaDescription": "Maximize all the benefits of DIGITAL X – by registering at the Campus, you’ll instantly be able to actively participate in the DIGITAL X community, with events, networking, best practice examples, and knowledge exchange."
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



