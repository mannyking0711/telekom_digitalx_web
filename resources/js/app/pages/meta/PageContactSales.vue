<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div>

        <!-- HEADER -->
        <meta-header :title="$t('pageContactSales.headline')" :copy="$t('pageContactSales.subheadline')"></meta-header>

        <!-- CONTENT -->
        <section class="inner meta-content">
            <div class="col-100">

                <contact-sales-form></contact-sales-form>

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

export default {


    /////////////////////////////////
    // INIT
    /////////////////////////////////

    name: 'PageContactSales',

    metaInfo() {

        return {
            title: 			this.$store.getters.env.app_name,
            titleTemplate: 	this.$t('pageContactSales.metaTitle'),
            meta: [
                { name: 	'description', 			content: this.$t('pageContactSales.metaDescription') },
                { property: 'og:title', 			content: this.$t('pageContactSales.metaTitle') },
                { property: 'og:description', 		content: this.$t('pageContactSales.metaDescription') },
                { property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-contact.jpg' },
                { property: 'og:type', 				content: 'website' },
                { property: 'og:url', 				content: this.ogUrl },
                { property: 'og:site_name', 		content: this.$t('pageContactSales.metaTitle') },
                { property: 'twitter:card', 		content: 'summary' },
                { property: 'twitter:creator', 		content: 'Telekom' },
                { property: 'twitter:title', 		content: this.$t('pageContactSales.metaTitle') },
                { property: 'twitter:description', 	content: this.$t('pageContactSales.metaDescription') },
                { property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-contact.jpg' }
            ],
            link: [	this.canonical ]
        };
    },

    props: {

    },

    data() {
        return {};
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
        "pageContactSales.metaTitle": "Beratung: Produkte & Services für Ihre Digitalisierung",
        "pageContactSales.metaDescription": "Sie haben einen Beratungswunsch? Nutzen Sie das Kontaktformular. Sie erhalten eine persönliche Beratung für Ihre digitale Transformation: Cloud, IT-Security, verfügbaren Netze, die Lösung ist individuell auf Sie zugeschnitten.",
        "pageContactSales.headline": "Beratungswunsch",
        "pageContactSales.subheadline": "Wir sind gerne für Sie da."
    },
    "en": {
        "pageContactSales.metaTitle": "Consulting: Products & services for your digitalization",
        "pageContactSales.metaDescription": "Do you have a consultation request? Use the contact form. You will receive personal advice for your digital transformation: cloud, IT security, available networks, the solution is individually tailored to you.",
        "pageContactSales.headline": "Consultation request",
        "pageContactSales.subheadline": "We are glad to be of assistance."
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



