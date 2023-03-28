/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	App Cookie Consent Config
//  https://github.com/kiprotect/klaro/blob/master/dist/config.js
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

export default function createCookieConsentConfig(app_cookie_name, locale) {

    return {
        version: 1,
        styling: {
            theme: ['light', 'top', 'wide'],
        },
        noAutoLoad: true,
        htmlTexts: true,
        cookieName: app_cookie_name,
        default: false,
        mustConsent: true,
        acceptAll: true,
        hideDeclineAll: true,
        hideLearnMore: false,
        noticeAsModal: false,
        disablePoweredBy: true,
        lang: locale,
        translations: {
            de: {
                privacyPolicyUrl: '/de/datenschutzbestimmungen',
                consentModal: {
                    title: 'Verwalten Sie Ihre Datenschutz-Einstellungen',
                    description:
                        'Um Ihnen ein optimales Webseiten Erlebnis zu bieten, setzen wir Cookies ein. Dazu zählen Cookies für den Betrieb und die Optimierung der Seite als auch für Services, wie die Nutzung des Text- oder Video Chats als auch für an Ihrem online Nutzungsverhalten orientierte Werbung. So kann z.B. erkannt werden, wenn Sie unsere Seiten vom selben Gerät aus wiederholt besuchen. Wir möchten Ihnen die Wahl geben, welche Cookies Sie zulassen:<br>',
                },
                acceptAll: "Alle akzeptieren",
                acceptSelected: "Auswahl bestätigen",
                purposes: {
                    functional: {
                        title: "Erforderliche Cookies",
                        description: "Diese Cookies sind notwendig, damit Sie durch die Seiten navigieren und wesentliche Funktionen nutzen können.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "Sie ermöglichen Grundfunktionen, wie die Bestellabwicklung im Online-Shop und den Zugriff auf gesicherte Bereiche der Webseite. Zudem dienen sie der anonymen Auswertung des Nutzerverhaltens, die von uns verwendet werden, um unseren Webauftritt stetig für Sie weiterzuentwickeln." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'functional', more: 'Mehr erfahren', less: 'Weniger erfahren'}); \">Mehr erfahren</a>",
                    },
                    analytics: {
                        title: "Analytische Cookies",
                        description: "Diese Cookies helfen uns, das Nutzungsverhalten besser zu verstehen.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "Analyse-Cookies ermöglichen die Erhebung von Nutzungs- und Erkennungsmöglichkeiten durch Erst- oder Drittanbieter, in so genannten pseudonymen Nutzungsprofilen. Wir benutzen beispielsweise Analyse-Cookies, um die Zahl der individuellen Besucher einer Webseite oder eines Dienstes zu ermitteln oder um andere Statistiken im Hinblick auf den Betrieb unserer Produkte zu erheben, als auch das Nutzerverhalten auf Basis anonymer und pseudonymer Informationen zu analysieren, wie Besucher mit der Webseite interagieren. Ein unmittelbarer Rückschluss auf eine Person ist dabei nicht möglich." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'analytics', more: 'Mehr erfahren', less: 'Weniger erfahren'}); \">Mehr erfahren</a>",
                    },
                    marketing: {
                        title: "Marketing-Cookies",
                        description: "Diese Cookies und ähnliche Technologien werden eingesetzt, um Ihnen personalisierte und dadurch relevante werbliche Inhalte anzeigen zu können.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "Marketing-Cookies werden eingesetzt, um interessante Werbeinhalte anzuzeigen und die Wirksamkeit unserer Kampagnen zu messen. Dies geschieht nicht nur auf Webseiten der Telekom, sondern auch auf anderen Werbepartner-Seiten (Drittanbieter). Dies wird auch als Retargeting bezeichnet. Es dient zur Erstellung pseudonymer Inhalts- oder Anzeigenprofile, der Schaltung relevanter Werbung auf anderen Webseiten und um Erkenntnisse über Zielgruppen, die die Anzeigen und Inhalte betrachtet haben, abzuleiten. Ein unmittelbarer Rückschluss auf eine Person ist dabei nicht möglich. Marketing- und Retargeting-Cookies helfen uns mögliche relevanten Werbeinhalte für Sie anzuzeigen. Durch das Unterdrücken von Marketing-Cookies sehen Sie auch weiterhin die gleiche Anzahl an Werbung, die aber möglicherweise weniger relevant für Sie ist." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'marketing', more: 'Mehr erfahren', less: 'Weniger erfahren'}); \">Mehr erfahren</a>",
                    },
                    thirdparty: {
                        title: "Dienste von anderen Unternehmen (eigenverantwortliche Drittanbieter)",
                        description: "Auf Seiten der Telekom werden Drittanbieter Dienste eingebunden, die Ihren Services eigenverantwortlich erbringen.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "Dabei werden beim Besuch von Telekom Seiten Daten mittels Cookies oder ähnlicher Technologien erfasst und an Dritte übermittelt, zum Teil für Telekomeigene Zwecke. In welchem Umfang, zu welchen Zwecken und auf Basis welcher Rechtsgrundlage eine Weiterverarbeitung zu eigenen Zwecken des Drittanbieters erfolgt, entnehmen Sie bitte den Datenschutzhinweisen des Drittanbieters. Die Informationen zu den eigenverantwortlichen Drittanbietern finden Sie in den <a class=\"textlink\" href=\"/de/datenschutzbestimmungen\">Datenschutzhinweisen</a>." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'thirdparty', more: 'Mehr erfahren', less: 'Weniger erfahren'}); \">Mehr erfahren</a>",
                    },
                },
            },
            en: {
                privacyPolicyUrl: '/en/privacy-policy',
                consentModal: {
                    title: 'Privacy Settings',
                    description:
                        'In order to provide you with an optimal website experience, we use cookies. These include cookies for the operation and optimization of the site as well as for services such as text or video chat and for advertising based on your online usage behavior. This allows us, for example, to detect if you visit our pages repeatedly from the same device. We would like to give you the choice which cookies you allow:<br>',
                },
                acceptAll: "Accept all",
                acceptSelected: "Save settings",
                purposes: {
                    functional: {
                        title: "Required cookies",
                        description: "These cookies are required to enable you to navigate through the websites and use key functions.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "They support basic functions, such as order processing in the online shop and access to secured areas of the web page. They also serve the purpose of performing an anonymous analysis of user patterns, which we use to continuously develop and improve our web pages for you." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'functional', more: 'Find out more', less: 'Find out less'}); \">Find out more</a>",
                    },
                    analytics: {
                        title: "Analytical cookies",
                        description: "These cookies help us to improve our understanding of user behavior.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "Analysis cookies allow for the compilation of usage and identification data by the original provider or third party providers into pseudonymous usage profiles. We use analysis cookies e.g. to determine the number of individual visitors to a web page or a service, to collect statistical data on the performance of our products and to analyze the visitors’ usage patterns and visitor interactions on the basis of anonymous and pseudonymous information. This information cannot be traced back to a person." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'analytics', more: 'Find out more', less: 'Find out less'}); \">Find out more</a>",
                    },
                    marketing: {
                        title: "Marketing cookies",
                        description: "These cookies and similar technologies are used to enable the display of personalized and therefore relevant marketing content.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "Marketing cookies are used to display interesting advertising content and to measure the effectiveness of our campaigns. This happens not only on Telekom websites, but also on other advertising partner sites (third party providers). This is also called retargeting, It is used to create pseudonymous content or ad profiles, to the placement of relevant advertising on other websites and to derive insights into target groups that have viewed the ads and content. For the interest-based creation of target groups of logged-in users (existing customers), information on purchased products, tariffs, options and contract extensions is taken into account. This information cannot be traced back to a person. Marketing and retargeting tools assist us in serving you advertising content that is potentially relevant for you. By suppressing marketing cookies, you will still see the same amount of advertising, but it may be less relevant to you." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'marketing', more: 'Find out more', less: 'Find out less'}); \">Find out more</a>",
                    },
                    thirdparty: {
                        title: "Services by other companies (independent third-party providers)",
                        description: "Telekom’s websites include links to third party service providers, who provide their services under their own responsibility.&nbsp;" +
                            "<span class=\"more\" style=\"display: none\">" +
                            "When you visit Telekom’s web pages, cookies or similar technologies record data and send it to third parties, in part for Telekom’s own purposes. The scope, purpose and legal basis on which further processing is carried out for the third party’s own purposes can be found in the third party’s data privacy information. Information on the independent third party providers can be found in the data privacy information. In addition, we use a mechanism for cross-device profiling on our websites by means of IDs and transmit sociodemographic information such as zip code, age group and gender. For cross-device profiling, Telekom Deutschland GmbH and emetriq GmbH are joint controllers according to Art 26 GDPR. Further information on the responsibility of the partners and their data subject rights can be found in the <a class=\"textlink\" href=\"/en/privacy-policy\">privacy information</a>." +
                            "</span>" +
                            "<a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'thirdparty', more: 'Find out more', less: 'Find out less'}); \">Find out more</a>",
                    },
                },
            },
        },

        // This is a list of third-party services that Klaro will manage for you.
        services: [
            {
                name: 'newsletter-modal',
                title: '',
                cookies: ['newsletter_modal_shown'],
                purposes: ['functional'],
                required: true,
            },
            {
                name: 'matomo',
                title: 'Matomo/Piwik',
                purposes: ['analytics'],
                cookies: [
                    [/^_pk_.*$/, '/', 'www.digital-x.eu'], // for the production version
                    [/^_pk_.*$/, '/', 'preview-web-develop.digital-x.eu'], // for the staging version
                    [/^_pk_.*$/, '/', 'localhost'], // for the local version
                    'piwik_ignore',
                ],
                callback: function(consent, service) {
                    // To be used in conjunction with Matomo 'requireCookieConsent' Feature, Matomo 3.14.0 or newer
                    // For further Information see https://matomo.org/faq/new-to-piwik/how-can-i-still-track-a-visitor-without-cookies-even-if-they-decline-the-cookie-consent/
                    if (consent == true) {
                        window._paq.push(['rememberCookieConsentGiven']);
                    } else {
                        window._paq.push(['forgetCookieConsentGiven']);
                    }
                },
                required: false,
                optOut: false,
                onlyOnce: true,
            },
            {
                name: 'youtube',
                purposes: ['marketing'],
            },
            {
                name: 'facebook-connect',
                purposes: ['thirdparty'],
            },
            {
                name: 'facebook-plugin',
                purposes: ['thirdparty'],
            },
        ],
    };

}
