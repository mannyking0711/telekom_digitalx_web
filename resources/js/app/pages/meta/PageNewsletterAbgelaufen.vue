<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div>

        <!-- HEADER -->
        <meta-header :title="$t('pagenewsletterAbgelaufen.headline')" :copy="$t('pagenewsletterAbgelaufen.subheadline')"></meta-header>

        <!-- CONTENT -->
        <section class="inner">
            <div class="col-100">
                <p>{{ $t('pagenewsletterAbgelaufen.text1') }}</p>
                <p>
                    <router-link :to="link('meta.newsletter')" class="btn blue">{{ $t('pagenewsletterAbgelaufen.button') }}</router-link>
                </p>
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

    name: 'pagenewsletterAbgelaufen',

    metaInfo() {

        return {
            title: this.$t('pagenewsletterAbgelaufen.metaTitle'),
            titleTemplate: null,
            meta: [ { name: 'description', content: this.$t('pagenewsletterAbgelaufen.metaDescription') } ],
            link: [	this.canonical ]
        };
    },

    props: {

    },

    data() {
        return {

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
        "pagenewsletterAbgelaufen.headline": "Newsletter",
        "pagenewsletterAbgelaufen.subheadline": "Bleiben Sie dran",
        "pagenewsletterAbgelaufen.text1": "Leider ist der Link bereits abgelaufen.",
        "pagenewsletterAbgelaufen.button": "Newsletter bestellen",
        "pagenewsletterAbgelaufen.metaTitle": "DIGITAL X Newsletter: Alle Neuigkeiten auf einen Blick",
        "pagenewsletterAbgelaufen.metaDescription": "Melden Sie sich für den DIGITAL X Newsletter an und erfahren Sie alle News zu unseren DIGITAL X Veranstaltungen und Digitalthemen."
    },


    "en": {
        "pagenewsletterAbgelaufen.headline": "Newsletter",
        "pagenewsletterAbgelaufen.subheadline": "Keep on it",
        "pagenewsletterAbgelaufen.text1": "Unfortunately the link has already expired.",
        "pagenewsletterAbgelaufen.button": "Subscribe to Newsletter",
        "pagenewsletterAbgelaufen.metaTitle": "DIGITAL X Newsletter: All the latest news at a glance",
        "pagenewsletterAbgelaufen.metaDescription": "Subscribe to the DIGITAL X newsletter to read all the latest news about our DIGITAL X events and digital topics."
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
