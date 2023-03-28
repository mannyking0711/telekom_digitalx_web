<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


    <template>

        <transition name="cookie-consent-fade">

            <div v-show="isCookieConsentVisible" class="cookie-consent-backdrop">

                <div class="cookie-consent"
                     role="dialog"
                     aria-labelledby="cookie-consent-title"
                     aria-describedby="cookie-consent-description"
                >

                    <h3 id="cookie-consent-title">{{ $t('cookieConsent.title') }}</h3>

                    <i18n path="cookieConsent.text" tag="p" id="cookie-consent-description">
                        <template v-slot:cookieConsent.privacyPolicy>
                            <router-link class="textlink" :to="link('meta.privacy')">{{ $t('cookieConsent.privacyPolicy') }}</router-link>
                        </template>
                        <template v-slot:cookieConsent.deny>
                            <a class="textlink" @click="deny">{{ $t('cookieConsent.deny') }}</a>
                        </template>
                        <template v-slot:imprint>
                          <br /><router-link class="textlink" :to="link('meta.imprint')">{{ $t('cookieConsent.imprintLabel') }}</router-link>
                        </template>
                    </i18n>

                    <div class="form-row-buttons cookie-consent-buttons">
                        <button class="btn secondary deny" @click="configure">{{ $t('cookieConsent.button1') }}</button>
                        <button class="btn confirm" @click="confirm">{{ $t('cookieConsent.button2') }}</button>
                    </div>

                </div>

            </div>

        </transition>

    </template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

        import {Mixins} from "../../../components/Mixins";

		export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'CookieConsent',

            mixins: [Mixins],

			props: {

			},

			data() {
				return {
                    isCookieConsentVisible: false,
				};
			},

			computed: {
                locale() { return this.$i18n.locale; },
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {

			},

			mounted() {
			    this.isCookieConsentVisible = this.$store.state.cookieManager ? !this.$store.state.cookieManager.confirmed : true;
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

			    deny() {
                    this.isCookieConsentVisible = false;
			        this.denyAppCookie();
                },

                confirm() {
                    this.isCookieConsentVisible = false;
			        this.confirmAppCookie();
                },

                configure() {
                    this.isCookieConsentVisible = false;
                    this.configureAppCookie();
                },

			},


            /////////////////////////////////
            // WATCH
            /////////////////////////////////

            watch: {
                locale: function (newLocale, oldLocale) {
                    window.klaroConfig.lang = newLocale;
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
        "cookieConsent.title": "Ihre Datenschutz-Einstellungen",
        "cookieConsent.text": "Diese Webseite verwendet Cookies und ähnliche Technologien. Das sind kleine Textdateien, die auf Ihrem Computer gespeichert und gelesen werden. Mit einem Klick auf „Alle akzeptieren“ akzeptieren Sie die Verarbeitung, die Webseiten- und partnerübergreifende Erstellung von individuellen Nutzungsprofilen sowie die Weitergabe Ihrer Daten an Drittanbieter, die zum Teil Ihre Daten in Ländern außerhalb der europäischen Union verarbeiten (DSGVO Art. 49). Details finden Sie im Abschnitt 10 des {cookieConsent.privacyPolicy}. Die Daten werden für Analysen, Retargeting und zur Ausspielung von personalisierten Inhalten und Werbung auf Seiten der Telekom, sowie auf Drittanbieterseiten genutzt. Weitere Informationen, auch zur Datenverarbeitung durch Drittanbieter und der Möglichkeit des Widerrufs, finden Sie in den Einstellungen sowie in unseren Datenschutzhinweisen. Hier geht es {cookieConsent.deny} nur mit den notwendigen Cookies. {imprint}",
        "cookieConsent.privacyPolicy": "Datenschutzhinweises",
        "cookieConsent.deny": "weiter",
        "cookieConsent.button1": "Einstellungen ändern",
        "cookieConsent.button2": "Alle akzeptieren",
        "cookieConsent.imprintLabel": "Impressum",
        "cookieConsent.imprintUrl": "/de/impressum"
    },


    "en": {
        "cookieConsent.title": "Privacy Settings",
        "cookieConsent.text": "This website uses cookies and similar technologies. These are small text files that are stored and read on your computer. By clicking on “Accept all”, you accept the processing of data, the creation and processing of individual usage profiles across websites and across partners and devices, and the transfer of your data to third-party providers, some of whom process your data in countries outside the European Union (GDPR Art. 49). Details can be found in section 10 of the {cookieConsent.privacyPolicy}. The data is used for analyses, retargeting and for playing out personalized content on Telekom pages, as well as additionally for playing out advertising on third-party sites and for third parties’ own purposes. Further information, including information on data processing by third-party providers and the possibility of revocation, can be found in the settings and in our privacy information. Here you can {cookieConsent.deny}  with the necessary tools. {imprint}",
        "cookieConsent.privacyPolicy": "privacy information",
        "cookieConsent.deny": "continue",
        "cookieConsent.button1": "Change Settings",
        "cookieConsent.button2": "Accept All",
        "cookieConsent.imprintLabel": "Imprint",
        "cookieConsent.imprintUrl": "/en/imprint"
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


