<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div>
    <section class="inner" style="margin-top: 5%">
      <div class="col-100">
        <div>
          <h3>Newsletter abonnieren?</h3>
          <p><strong>
            Jetzt kostenlos für den<br>
            DIGITAL X Newsletter anmelden!<br>
          </strong></p>
          <h3>
            Stets am Puls der Digitalisierung
          </h3>
          <p>Registrieren Sie sich jetzt für unseren wöchentlichen DIGITAL X Newsletter und werden Sie Teil unserer Community aus Unternehmen, Politik, Visionären und führenden Experten.
            Gemeinsam fokussieren wir die digitale Transformation und Verbesserung der Wettbewerbsfähigkeit unseres Landes. Seien Sie dabei und stets am Puls der Digitalisierung.</p>
          <h4 style="margin-bottom: 40px">
            Kostenlose Anmeldung
          </h4>
        </div>
        <newsletter-registration-form ok-url="internal.newsletter.ok" error-url="internal.newsletter.error"></newsletter-registration-form>
      </div>
    </section>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import NewsletterRegistrationForm from "../../components/form/NewsletterRegistrationForm";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageNewsletterInternal',

  components: {NewsletterRegistrationForm},

  metaInfo() {

    return {
      title: this.$store.getters.env.app_name,
      titleTemplate: this.$t('pageindex.metaTitle'),
      meta: [
        {name: 'description', content: this.$t('pageindex.metaDescription')},
        {property: 'og:title', content: this.$t('pageindex.metaTitle')},
        {property: 'og:description', content: this.$t('pageindex.metaDescription')},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-newsletter.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: this.$t('pageindex.metaTitle')},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: this.$t('pageindex.metaTitle')},
        {property: 'twitter:description', content: this.$t('pageindex.metaDescription')},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-newsletter.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  computed: {},


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

  methods: {},


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
    "pageindex.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
    "pageindex.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
  },
  "en": {
    "pageindex.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
    "pageindex.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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



