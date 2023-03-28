<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <transition name="newsletter-modal-fade">

        <div v-show="isNewsletterModalVisible" class="newsletter-modal-backdrop">

            <div class="newsletter-modal"
                    role="dialog"
                    aria-labelledby="newsletterModalTitle"
                    aria-describedby="newsletterModalDescription"
            >

                <div class="newsletter-modal-header">

                    <h2 id="newsletterModalTitle">
                        {{ $t('newsletterModal.header.title') }}
                    </h2>

                    <a @click="close" :aria-label="$t('newsletterModal.close')" class="close">
                        <svg-icon icon="app/icon-close"></svg-icon>
                    </a>

                </div>

                <div class="newsletter-modal-body" id="newsletterModalDescription">

                    <h3>
                        {{ $t('newsletterModal.newsletter.title') }}
                    </h3>

                    <p>
                        {{ $t('newsletterModal.newsletter.text') }}
                    </p>

                    <a @click="gotoNewsletter" class="btn blue">{{ $t('newsletterModal.newsletter.button') }}</a>

                </div>

                <div class="newsletter-modal-footer">
                    <!--
                    <h3>
                        {{ $t('newsletterModal.signup.title') }}
                    </h3>

                    <p>
                        {{ $t('newsletterModal.signup.text') }}
                    </p>

				    <router-link to="/dxlogin" class="btn blue" v-if="!isAuthenticated">{{ $t('newsletterModal.newsletter.button') }}</router-link>
                    -->

                    <div class="icons">
                        <a target="_blank" href="https://www.linkedin.com/showcase/telekom-business/"><svg-icon icon="app/icon-linkedin"></svg-icon></a>
                        <a target="_blank" href="https://www.xing.com/communities/groups/telekom-business-1086249"><svg-icon icon="app/icon-xing"></svg-icon></a>
                        <a target="_blank" href="https://twitter.com/digimittelstand"><svg-icon icon="app/icon-twitter"></svg-icon></a>
                        <a target="_blank" href="https://www.facebook.com/DigitalXMagazin"><svg-icon icon="app/icon-facebook"></svg-icon></a>
                        <a target="_blank" href="https://www.youtube.com/user/telekombusiness"><svg-icon icon="app/icon-youtube"></svg-icon></a>
                        <a target="_blank" href="https://www.instagram.com/deutschetelekom/"><svg-icon icon="app/icon-instagram"></svg-icon></a>
                    </div>

                </div>

            </div>

        </div>

    </transition>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//    Newsletter Modal
//    - 30 Sekunden => nach Cookie-Layer
//    - Nicht bei Index Artikel, Video und Podcast
//    - Nicht bei Newsletter, Kontakt, Datenschutz und AGB
//    - 1x pro Woche
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


    <script>

        import Cookies from 'js-cookie';
        import {Mixins} from "../../../components/Mixins";

        export default {

            /////////////////////////////////
            // INIT
            /////////////////////////////////

            name: 'newsletter-modal',

            mixins: [Mixins],

            data() {
                return {
                    isNewsletterModalVisible: false,
                }
            },



            /////////////////////////////////
            // EVENTS
            /////////////////////////////////

            created() {
                this.timer = null;
            },

            mounted() {
            },


            /////////////////////////////////
            // METHODS
            /////////////////////////////////

            methods: {

                /**
                 * Show modal after 30 seconds delay and set a cookie for 7 days to hide modal until cookie expires.
                 */
                show(path) {
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }

                    if (!this.isNewsletterModalVisible && this.hasConsentGiven('newsletter-modal')) {
                        if (!Cookies.get('newsletter_modal_shown')) {
                            const isMatch = this.getBlacklist().some(rx => rx.test(path));
                            if (!isMatch) {
                                this.timer = setTimeout(() => {
                                    Cookies.set('newsletter_modal_shown', 'yes', { expires: 7 });
                                    this.isNewsletterModalVisible = true;
                                }, 1000*30)
                            }
                        }
                    }

                },

                close() {
                    this.isNewsletterModalVisible = false;
                },

                gotoNewsletter() {
                    this.close();
                    this.$router.push(this.link('meta.newsletter'));
                },

                /**
                 * Don't show newsletter modal on theses pages (regex):
                 * Nicht bei Index Artikel, Video und Podcast
                 * Nicht bei Newsletter, Kontakt, Datenschutz und AGB
                 * @returns {RegExp[]}
                 */
                getBlacklist() {
                    return [
                        /^\/de\/$/,
                        /^\/en\/$/,
                        /^\/de\/magazin\/artikel\/.*$/,
                        /^\/en\/magazine\/article\/.*$/,
                        /^\/de\/magazin\/video\/.*$/,
                        /^\/en\/magazine\/video\/.*$/,
                        /^\/de\/magazin\/podcast\/.*$/,
                        /^\/en\/magazine\/podcast\/.*$/,
                        /^\/de\/newsletter$/,
                        /^\/en\/newsletter$/,
                        /^\/de\/kontakt$/,
                        /^\/en\/contact$/,
                        /^\/de\/datenschutzbestimmungen$/,
                        /^\/en\/privacy-policy$/,
                        /^\/de\/agbs$/,
                        /^\/en\/generaltermsandconditions$/,
                    ];
                }

            },


            /////////////////////////////////
            // WATCH
            /////////////////////////////////

            watch: {
                '$route'(to, from) {
                    this.show(to.path);
                }
            },


        }; // end export

    </script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
    "de": {
        "newsletterModal.close": "Fenster schließen",
        "newsletterModal.header.title": "VERPASSEN SIE NICHTS",
        "newsletterModal.newsletter.title": "Der DIGITAL X Newsletter",
        "newsletterModal.newsletter.text": "Lesen Sie neueste Infos zu Digitalisierungsthemen kompakt zusammengefasst.",
        "newsletterModal.newsletter.placeholder": "E-Mail-Adresse",
        "newsletterModal.newsletter.button": "Jetzt abonnieren",
        "newsletterModal.signup.title": "Die DIGITAL X Community",
        "newsletterModal.signup.text": "Profitieren Sie von exklusiven Inhalten zu Veranstaltungen, Studien, White Papers uvm. rund um die relevaten Themen der Digitalisierung.",
        "newsletterModal.signup.button": "Jetzt kostenlos registrieren"
    },


    "en": {
        "newsletterModal.close": "newsletterModal.close",
        "newsletterModal.header.title": "DON’T MISS A THING",
        "newsletterModal.newsletter.title": "The DIGITAL X Newsletter",
        "newsletterModal.newsletter.text": "Read a compact summary of the latest information on digitalization topics.",
        "newsletterModal.newsletter.placeholder": "Email address",
        "newsletterModal.newsletter.button": "Subscribe now",
        "newsletterModal.signup.title": "The DIGITAL X Community",
        "newsletterModal.signup.text": "Benefit from exclusive content on events, studies, white papers, and much more on the relevant topics of digitalization.",
        "newsletterModal.signup.button": "Register now for free"
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
