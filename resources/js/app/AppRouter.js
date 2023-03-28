// Vue framework
import Vue from 'vue';
import VueRouter from 'vue-router';
import {IS_SSR} from './plugins/ssrSwitch';

// Aditus Login OIDC
import OidcCallback from './pages/OidcCallback.vue'
import OidcPopupCallback from './pages/OidcPopupCallback.vue'
import OidcCallbackError from './pages/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'

// Pages
import PageIndex from './pages/PageIndex';
import PageError from './pages/PageError';

// Magazine
const PageAuthorDetail = () => import( /* webpackChunkName: "chunks/app/chunk-author-detail" */ './pages/magazine/PageAuthorDetail');
const PageMagazineOverview = () => import( /* webpackChunkName: "chunks/app/chunk-magazine-overview" */ './pages/magazine/PageMagazineOverview');
const PageMagazine = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/PageMagazine');
const PageArticle = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/article/PageArticle');
const PageArticleGroup = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/article/PageArticleGroup');
const PageVideo = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/video/PageVideo');
const PageVideoGroup = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/video/PageVideoGroup');
const PagePodcast = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/podcast/PagePodcast');
const PagePodcastGroup = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/podcast/PagePodcastGroup');

// Magazine / Digi-Index
const PageDigiIndex = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/digi-index/PageDigiIndex');
const PageDigiIndexDetail = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/digi-index/PageDigiDetail');
const PageDigiIndexArchive = () => import( /* webpackChunkName: "chunks/app/chunk-magazine" */ './pages/magazine/digi-index/PageDigiIndexArchive');

// Events
const PageEvents = () => import( /* webpackChunkName: "chunks/app/chunk-events" */ './pages/event/PageEvents');
const PageEvent = () => import( /* webpackChunkName: "chunks/app/chunk-event" */ './pages/event/PageEvent');
const PageAgenda = () => import( /* webpackChunkName: "chunks/app/chunk-agenda" */ './pages/event/PageAgenda');
const PageEventSpeaker = () => import( /* webpackChunkName: "chunks/app/chunk-speaker" */ './pages/event/PageEventSpeaker');
const PageEventMegatrends = () => import( /* webpackChunkName: "chunks/app/chunk-megatrends" */ './pages/event/PageEventMegatrends');
const PageSpeakerDetail = () => import( /* webpackChunkName: "chunks/app/chunk-speaker" */ './pages/event/PageSpeakerDetail');
const PageEventPartner = () => import( /* webpackChunkName: "chunks/app/chunk-partner" */ './pages/event/PageEventPartner');
const PageEventPk = () => import( /* webpackChunkName: "chunks/app/chunk-event-pk" */ './pages/event/PageEventPk');
const PageParticipate = () => import( /* webpackChunkName: "chunks/app/chunk-participate" */ './pages/event/PageParticipate');
const PageEventMediaLibrary = () => import( /* webpackChunkName: "chunks/app/chunk-medialibrary" */ './pages/event/PageEventMediaLibrary');
const PageEventMediaLibraryDetail = () => import( /* webpackChunkName: "chunks/app/chunk-medialibrary" */ './pages/event/PageEventMediaLibraryDetail');
const PageEventNewsletterOk = () => import( /* webpackChunkName: "chunks/app/chunk-events" */ './pages/event/PageEventNewsletterOk');
const PageEventNewsletterError = () => import( /* webpackChunkName: "chunks/app/chunk-events" */ './pages/event/PageEventNewsletterError');
const PageEventNewsletterBestaetigung = () => import( /* webpackChunkName: "chunks/app/chunk-events" */ './pages/event/PageEventNewsletterBestaetigung');
const PageEventNewsletterSchade = () => import( /* webpackChunkName: "chunks/app/chunk-events" */ './pages/event/PageEventNewsletterSchade');

// Award
const PageAward = () => import( /* webpackChunkName: "chunks/app/chunk-award" */ './pages/award/PageAward');

// Initiative
const PageInitiative = () => import( /* webpackChunkName: "chunks/app/chunk-initiative" */ './pages/initiative/PageInitiative');

// Social
const PageSocial = () => import( /* webpackChunkName: "chunks/app/chunk-social" */ './pages/social/PageSocial');

// Press
const PagePress = () => import( /* webpackChunkName: "chunks/app/chunk-press" */ './pages/press/PagePress');

// Partner
const PagePartner = () => import( /* webpackChunkName: "chunks/app/chunk-partner" */ './pages/partner/PagePartner');
const PagePartnerDetail = () => import( /* webpackChunkName: "chunks/app/chunk-partner" */ './pages/partner/PagePartnerDetail');

// Dashboard / My Digital X
const PageDashboard = () => import( /* webpackChunkName: "chunks/app/chunk-dashboard" */ './pages/dashboard/PageDashboard');
const LoginRedirect = () => import( /* webpackChunkName: "chunks/app/login-redirect" */ './components/utils/LoginRedirect');

// Meta Newsletter
const PageNewsletter = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageNewsletter');
const PageNewsletterOk = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageNewsletterOk');
const PageNewsletterError = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageNewsletterError');
const PageNewsletterBestaetigung = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageNewsletterBestaetigung');
const PageNewsletterSchade = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageNewsletterSchade');
const PageNewsletterAbgelaufen = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageNewsletterAbgelaufen');

// Interner Newsletter
const PageNewsletterInternal = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/internal/PageNewsletterInternal');
const PageNewsletterInternalOk = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/internal/PageNewsletterInternalOk');
const PageNewsletterInternalError = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/internal/PageNewsletterInternalError');
const PageNewsletterInternalBestaetigung = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/internal/PageNewsletterInternalBestaetigung');
const PageNewsletterInternalSchade = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/internal/PageNewsletterInternalSchade');
const PageNewsletterInternalAbgelaufen = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/internal/PageNewsletterInternalAbgelaufen');

// Meta
const PageImprint = () => import( /* webpackChunkName: "chunks/app/chunk-meta1" */ './pages/meta/PageImprint');
const PagePrivacy = () => import( /* webpackChunkName: "chunks/app/chunk-meta1" */ './pages/meta/PagePrivacy');
const PagePrivacyTickets = () => import( /* webpackChunkName: "chunks/app/chunk-meta1" */ './pages/meta/PagePrivacyTickets');
const PageContact = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageContact');
const PageContactSales = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageContactSales');
const PageFaq = () => import( /* webpackChunkName: "chunks/app/chunk-meta2" */ './pages/meta/PageFaq');
const PageTerms = () => import( /* webpackChunkName: "chunks/app/chunk-meta3" */ './pages/meta/terms/PageTerms');
const PageTermsTelekom = () => import( /* webpackChunkName: "chunks/app/chunk-meta3" */ './pages/meta/terms/PageTermsTelekom');
const PageTermsTickets = () => import( /* webpackChunkName: "chunks/app/chunk-meta3" */ './pages/meta/terms/PageTermsTickets');

// Search
const PageSearchResults = () => import( /* webpackChunkName: "chunks/app/chunk-meta1" */ './pages/search/PageSearchResults');

// Testing
const PageTest = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTest');
const PageTestGrid = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestGrid');
const PageTestButton = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestButton');
const PageTestTypo = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestTypo');
const PageTestForm = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestForm');
const PageTestVideo = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestVideo');
const PageTestSlider = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestSlider');
const PageTestCookies = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestCookies');
const PageTestUser = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestUser');
const PageTestProtected = () => import( /* webpackChunkName: "chunks/app/chunk-test" */ './pages/test/PageTestProtected');


let routes = [

	{ path: '', name: 'index', component: PageIndex, meta: { breadcrumb: { de: 'Startseite', en: 'Home' }, isPublic: true } },

	// Events
	{ path: 'events', name: 'events', component: PageEvents, meta: { breadcrumb: { de: 'Events', en: 'Events' }, isPublic: true } },
	{ path: 'events/:slug', name: 'events.detail', component: PageEvent, meta: { isPublic: true } },
	{ path: 'events/:slug/agenda', name: 'events.detail.agenda', component: PageAgenda, meta: { breadcrumb: { de: 'Agenda', en: 'Agenda' }, isPublic: true } },
	{ path: 'events/:slug/megatrends', name: 'events.detail.megatrends', component: PageEventMegatrends, meta: { breadcrumb: { de: 'Megatrends', en: 'Megatrends' }, isPublic: true } },
	{ path: 'events/:slug/speaker', name: 'events.detail.speaker', component: PageEventSpeaker, meta: { breadcrumb: { de: 'Speaker', en: 'Speaker' }, isPublic: true } },
	{ path: 'speaker/:slug', name: 'speaker.detail', component: PageSpeakerDetail, meta: { isPublic: true } },
  { path: 'events/:slug/partner-brandhouses', name: 'events.detail.partner', component: PageEventPartner, meta: { breadcrumb: { de: 'Partner / Brandhouses', en: 'Partner / Brandhouses' }, isPublic: true } },
	{ path: 'events/newsletter/ok', name: 'events.newsletter.ok', component: PageEventNewsletterOk, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'events/newsletter/error', name: 'events.newsletter.error', component: PageEventNewsletterError, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'events/newsletter/bestaetigung', name: 'events.newsletter.bestaetigung', component: PageEventNewsletterBestaetigung, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'events/newsletter/schade', name: 'events.newsletter.schade', component: PageEventNewsletterSchade, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },

	//Authors
	{ path: 'author/:slug', name: 'author', component: PageAuthorDetail, meta: { isPublic: true} },

	// Award
	{ path: 'award/:year', name: 'award', component: PageAward, meta: { isPublic: true } },

	// Initiative
	{ path: 'initiative', name: 'initiative', component: PageInitiative, meta: { breadcrumb: { de: 'Initiative', en: 'Initiative' }, isPublic: true } },

	// Social
	{ path: 'social', name: 'social', component: PageSocial, meta: { breadcrumb: { de: 'Social', en: 'Social' }, isPublic: true } },

	// Partner
	{ path: 'partner', name: 'partner', component: PagePartner, meta: { breadcrumb: { de: 'Partner', en: 'Partner' }, isPublic: true } },
	{ path: 'partner/:slug', name: 'partner.detail', component: PagePartnerDetail, meta: { isPublic: true } },

	// Dashboard / My Digital X
	{ path: 'my-digital-x', name: 'dashboard', component: PageDashboard, meta: { breadcrumb: { de: 'My Digital X', en: 'My Digital X' }, isPublic: true } },

	// Meta
	{ path: 'faq', name: 'meta.faq', component: PageFaq, meta: { breadcrumb: { de: 'FAQ', en: 'FAQ' }, isPublic: true } },
	{ path: 'newsletter', name: 'meta.newsletter', component: PageNewsletter, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'newsletter/ok', name: 'meta.newsletter.ok', component: PageNewsletterOk, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'newsletter/error', name: 'meta.newsletter.error', component: PageNewsletterError, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'newsletter/bestaetigung', name: 'meta.newsletter.bestaetigung', component: PageNewsletterBestaetigung, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'newsletter/schade', name: 'meta.newsletter.schade', component: PageNewsletterSchade, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	//{ path: 'newsletter/abgelaufen', name: 'meta.newsletter.schade', component: PageNewsletterAbgelaufen, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },

  // Interne Newsletteranmeldung
	{ path: 'nl-anmeldung', name: 'internal.newsletter', component: PageNewsletterInternal, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'nl-anmeldung/ok', name: 'internal.newsletter.ok', component: PageNewsletterInternalOk, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'nl-anmeldung/error', name: 'internal.newsletter.error', component: PageNewsletterInternalError, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'nl-anmeldung/bestaetigung', name: 'internal.newsletter.bestaetigung', component: PageNewsletterInternalBestaetigung, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	{ path: 'nl-anmeldung/schade', name: 'internal.newsletter.schade', component: PageNewsletterInternalSchade, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },
	//{ path: 'nl-anmeldung/abgelaufen', name: 'internal.newsletter.schade', component: PageNewsletterInternalAbgelaufen, meta: { breadcrumb: { de: 'Newsletter', en: 'Newsletter' }, isPublic: true } },

	// Testing
	{ path: 'test', name: 'test', component: PageTest, meta: { breadcrumb: { de: 'Test DE', en: 'Test EN' }, isPublic: true } },
	{ path: 'test/grid', name: 'test.grid', component: PageTestGrid, meta: { breadcrumb: { de: 'Grid DE', en: 'Grid EN' }, isPublic: true } },
	{ path: 'test/button', name: 'test.button', component: PageTestButton, meta: { breadcrumb: { de: 'Button DE', en: 'Button EN' }, isPublic: true } },
	{ path: 'test/typo', name: 'test.typo', component: PageTestTypo, meta: { breadcrumb: { de: 'Typo DE', en: 'Typo EN' }, isPublic: true } },
	{ path: 'test/form', name: 'test.form', component: PageTestForm, meta: { breadcrumb: { de: 'Form DE', en: 'Form EN' }, isPublic: true } },
	{ path: 'test/video', name: 'test.video', component: PageTestVideo, meta: { breadcrumb: { de: 'Video DE', en: 'Video EN' }, isPublic: true } },
	{ path: 'test/slider', name: 'test.slider', component: PageTestSlider, meta: { breadcrumb: { de: 'Slider DE', en: 'Slider EN' }, isPublic: true } },
	{ path: 'test/cookies', name: 'test.cookies', component: PageTestCookies, meta: { breadcrumb: { de: 'Cookies DE', en: 'Cookies EN' }, isPublic: true } },
	{ path: 'test/user', name: 'test.user', component: PageTestUser, meta: { breadcrumb: { de: 'User DE', en: 'User EN' }, isPublic: true } },
	{ path: 'test/protected', name: 'test.protected', component: PageTestProtected, meta: { breadcrumb: { de: 'Protected DE', en: 'Protected EN' }, isPublic: false } },
];


let routesDE = [
	// Magazine
	{ path: 'magazin', name: 'de.magazine', component: PageMagazineOverview, meta: { breadcrumb: { de: 'Magazin' }, isPublic: true } },

	// Article
	{ path: 'magazin/artikel', name: 'de.magazine.article', component: PageMagazine, meta: { breadcrumb: { de: 'Beiträge' }, isPublic: true } },
	{ path: 'magazin/artikel/:group', name: 'de.magazine.article.groups', component: PageArticleGroup, meta: { isPublic: true } },
	{ path: 'magazin/artikel/:group/:slug', name: 'de.magazine.article.detail', component: PageArticle, meta: { isPublic: true } },
//		{ path: 'magazin/artikel/:slug', name: 'de.magazine.article.detail', component: PageArticle, meta: { isPublic: true } },

	// Video
	{ path: 'magazin/video', name: 'de.magazine.video', component: PageMagazine, meta: { breadcrumb: { de: 'Videos' }, isPublic: true } },
	{ path: 'magazin/video/:group', name: 'de.magazine.video.group', component: PageVideoGroup, meta: { isPublic: true } },
	{ path: 'magazin/video/:group/:slug', name: 'de.magazine.video.detail', component: PageVideo, meta: { isPublic: true } },
//		{ path: 'magazin/video/:slug', name: 'de.magazine.video.detail', component: PageVideo, meta: { isPublic: true } },

	// Podcast
	{ path: 'magazin/podcast', name: 'de.magazine.podcast', component: PageMagazine, meta: { breadcrumb: { de: 'Podcasts' }, isPublic: true } },
	{ path: 'magazin/podcast/:group', name: 'de.magazine.podcast.group', component: PagePodcastGroup, meta: { isPublic: true } },
	{ path: 'magazin/podcast/:group/:slug', name: 'de.magazine.podcast.detail', component: PagePodcast, meta: { isPublic: true } },

  // Privatbesucher
  { path: 'privatbesucher', name: 'de.pk', component: PageEventPk, meta: { breadcrumb: { de: 'Privatbesucher' }, layout: 'landingpage-layout', isPublic: true } },

  // Digi-Index
  { path: 'magazin/digitalisierungsindex', name: 'de.magazine.digi-index', component: PageDigiIndex, meta: { breadcrumb: { de: 'Digitalisierungsindex' }, isPublic: true } },
  { path: 'magazin/digitalisierungsindex/archiv', name: 'de.magazine.digi-index.archive', component: PageDigiIndexArchive, meta: { breadcrumb: { de: 'Archiv' }, isPublic: true } },
  { path: 'magazin/digitalisierungsindex/:slug', name: 'de.magazine.digi-index.detail', component: PageDigiIndexDetail, meta: { isPublic: true } },

	// Press
	{ path: 'presse', name: 'de.press', component: PagePress, meta: { breadcrumb: { de: 'Presse' }, isPublic: true } },

	// Events
	{ path: 'events/:slug/teilnehmen', name: 'de.events.detail.participate', component: PageParticipate, meta: { breadcrumb: { de: 'Teilnehmen' }, isPublic: true } },
	{ path: 'events/mediathek/:slug', name: 'de.events.medialibrary.detail', component: PageEventMediaLibraryDetail, meta: { isPublic: true } },
	{ path: 'events/mediathek', name: 'de.events.medialibrary', component: PageEventMediaLibrary, meta: { breadcrumb: { de: 'Mediathek' }, isPublic: true } },

	// Meta
	{ path: 'impressum', name: 'de.meta.imprint', component: PageImprint, meta: { breadcrumb: { de: 'Impressum' }, isPublic: true } },
	{ path: 'datenschutzbestimmungen', name: 'de.meta.privacy', component: PagePrivacy, meta: { breadcrumb: { de: 'Datenschutzbestimmungen' }, isPublic: true } },
	{ path: 'datenschutzbestimmungen/tickets', name: 'de.meta.privacy.tickets', component: PagePrivacyTickets, meta: { layout: 'text-layout', breadcrumb: { de: 'Tickets' }, isPublic: true } },
	{ path: 'kontakt', name: 'de.meta.contact', component: PageContact, meta: { breadcrumb: { de: 'Kontakt' }, isPublic: true } },
	{ path: 'beratung', name: 'de.meta.contact.consulting', component: PageContactSales, meta: { breadcrumb: { de: 'Beratung' }, isPublic: true } },

  // Search
  { path: 'suche', name: 'de.search', component: PageSearchResults, meta: { breadcrumb: { de: 'Suche' }, isPublic: true } },
];

let routesEN = [
	// Magazine
	{ path: 'magazine', name: 'en.magazine', component: PageMagazineOverview, meta: { breadcrumb: { en: 'Magazine' }, isPublic: true } },

	// Article
	{ path: 'magazine/article', name: 'en.magazine.article', component: PageMagazine, meta: { breadcrumb: { en: 'Articles' }, isPublic: true } },
	{ path: 'magazine/article/:group', name: 'en.magazine.article.group', component: PageArticleGroup, meta: { isPublic: true } },
	{ path: 'magazine/article/:group/:slug', name: 'en.magazine.article.detail', component: PageArticle, meta: { isPublic: true } },
//		{ path: 'magazine/article/:slug', name: 'en.magazine.article.detail', component: PageArticle, meta: { isPublic: true } },

	// Video
	{ path: 'magazine/video', name: 'en.magazine.video', component: PageMagazine, meta: { breadcrumb: { en: 'Videos' }, isPublic: true } },
	{ path: 'magazine/video/:group', name: 'en.magazine.video.group', component: PageVideoGroup, meta: { isPublic: true } },
	{ path: 'magazine/video/:group/:slug', name: 'en.magazine.video.detail', component: PageVideo, meta: { isPublic: true } },
//		{ path: 'magazine/video/:slug', name: 'en.magazine.video.detail', component: PageVideo, meta: { isPublic: true } },

	// Podcast
	{ path: 'magazine/podcast', name: 'en.magazine.podcast', component: PageMagazine, meta: { breadcrumb: { en: 'Podcasts' }, isPublic: true } },
	{ path: 'magazine/podcast/:group', name: 'en.magazine.podcast.group', component: PagePodcastGroup, meta: { isPublic: true } },
	{ path: 'magazine/podcast/:group/:slug', name: 'en.magazine.podcast.detail', component: PagePodcast, meta: { isPublic: true } },

  // Digi-Index
  { path: 'magazin/digitalisierungsindex', name: 'en.magazine.digi-index', component: PageDigiIndex, meta: { breadcrumb: { en: 'Digitalisierungsindex' }, isPublic: true } },
  { path: 'magazin/digitalisierungsindex/archive', name: 'en.magazine.digi-index.archive', component: PageDigiIndexArchive, meta: { breadcrumb: { en: 'Archive' }, isPublic: true } },
  { path: 'magazin/digitalisierungsindex/:slug', name: 'en.magazine.digi-index.detail', component: PageDigiIndexDetail, meta: { isPublic: true } },


	// Press
	{ path: 'press', name: 'en.press', component: PagePress, meta: { breadcrumb: { en: 'Press' }, isPublic: true } },

	// Events
	{ path: 'events/:slug/participate', name: 'en.events.detail.participate', component: PageParticipate, meta: { breadcrumb: { de: 'Participate' }, isPublic: true } },
  { path: 'events/mediathek/:slug', name: 'en.events.medialibrary.detail', component: PageEventMediaLibraryDetail, meta: { isPublic: true } },
	{ path: 'events/media-library', name: 'en.events.medialibrary', component: PageEventMediaLibrary, meta: { breadcrumb: { en: 'Media Library' }, isPublic: true } },

	// Meta
	{ path: 'imprint', name: 'en.meta.imprint', component: PageImprint, meta: { breadcrumb: { en: 'Imprint' }, isPublic: true } },
	{ path: 'privacy-policy', name: 'en.meta.privacy', component: PagePrivacy, meta: { breadcrumb: { en: 'Privacy Policy' }, isPublic: true } },
	{ path: 'privacy-policy/tickets', name: 'en.meta.privacy.tickets', component: PagePrivacyTickets, meta: { layout: 'text-layout', breadcrumb: { en: 'Tickets' }, isPublic: true } },
	{ path: 'contact', name: 'en.meta.contact', component: PageContact, meta: { breadcrumb: { en: 'Contact' }, isPublic: true } },
	{ path: 'consulting', name: 'en.meta.contact.consulting', component: PageContactSales, meta: { breadcrumb: { en: 'Consulting' }, isPublic: true } },

  // Search
  { path: 'search', name: 'en.search', component: PageSearchResults, meta: { breadcrumb: { en: 'Search' }, isPublic: true } },
];


let routesTerms = [
	// de
	{ path: 'de/agbs', name: 'de.meta.terms', component: PageTerms, meta: { breadcrumb: { de: 'AGB' }, isPublic: true } },
	{ path: 'de/agbs/telekom', name: 'de.meta.terms.telekom', component: PageTermsTelekom, meta: { layout: 'text-layout', isPublic: true } },
	{ path: 'de/agbs/tickets', name: 'de.meta.terms.tickets', component: PageTermsTickets, meta: { layout: 'text-layout', isPublic: true } },
	// en
	{ path: 'en/general-terms-and-conditions', name: 'en.meta.terms', component: PageTerms, meta: { breadcrumb: { en: 'GT&C' }, isPublic: true } },
	{ path: 'en/generaltermsandconditions/telekom', name: 'en.meta.terms.telekom', component: PageTermsTelekom, meta: { layout: 'text-layout', isPublic: true } },
	{ path: 'en/generaltermsandconditions/tickets', name: 'en.meta.terms.tickets', component: PageTermsTickets, meta: { layout: 'text-layout', isPublic: true } },
];

// OIDC authentication for Aditus
if (IS_SSR === false) {
    routes.push(
        {
            path: 'callback', // Needs to match redirectUri in oidcSettings
            name: 'oidcCallback',
            component: OidcCallback
        },
        {
            path: 'popup-callback', // Needs to match popupRedirectUri in you oidcSettings
            name: 'oidcPopupCallback',
            component: OidcPopupCallback
        },
        {
            path: 'callback-error', // Needs to match redirect_uri in you oidcSettings
            name: 'oidcCallbackError',
            component: OidcCallbackError,
            meta: {
                isPublic: true
            }
        }
    );
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	VUE ROUTER
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


Vue.use(VueRouter)

// Add error pages to route
routes.push({ path: '404', name: 'error.404', component: PageError, meta: { isPublic: true } });
routes.push({ path: '403', name: 'error.403', component: PageError, props: {code: '403'}, meta: { isPublic: true } });
routes.push({ path: '*', name: 'error', alias: '/404', component: PageError, meta: { isPublic: true } });

// combine global and language routes. Bugfix "concat()" not working
routes.forEach(val => {
	routesDE.push(Object.assign({},val,{name:'de.'+val.name}));
	routesEN.push(Object.assign({},val,{name:'en.'+val.name}));
});

let optionsRoutes = [
	{
		path: '/',
		redirect: { name: 'de.index', params:{lang:'de'} },
		component: { template: '<router-view></router-view>' },
		children: routesTerms,
		meta: { isPublic: true }
	},
	{
		// english routes
		path: '/:lang(en)',
		component: { template: '<router-view></router-view>' },
		children: routesEN,
		meta: { isPublic: true }
	},
	{
		// german routes
		path: '/:lang(de)',
		component: { template: '<router-view></router-view>' },
		children: routesDE,
		meta: { isPublic: true }
	},
];

optionsRoutes.push(
	{
		path: '/dxlogin', component: LoginRedirect, meta: { isPublic: true }
	},
    {
		path: '*', component: PageError, meta: { isPublic: true },
	}
);

export default function createRouter(store) {

    const router = new VueRouter({
        /////////////////////////////////
        // OPTIONS
        /////////////////////////////////

        mode: 'history',
        base: store.getters.env.base_url,

        /////////////////////////////////
        // ROUTES
        /////////////////////////////////

        routes: optionsRoutes,

        /////////////////////////////////
        // METHODS
        /////////////////////////////////

        scrollBehavior(to, from, savedPosition) {
            // don't scroll anywhere if only the query changed
            if (from.path === to.path && !to.hash) return false;

            return new Promise((resolve, reject) => {
                setTimeout(() => {
					// scroll to element if hash is provided
					if (to.hash) resolve( { selector: to.hash, behavior: 'smooth' } );

					// scroll to top if the user clicked on a link
					// scroll to the previous position if the user used the back/forward buttons
                    else resolve(savedPosition ? savedPosition : {x: 0, y: 0})
                }, 500);
            });
        },
    })

    /////////////////////////////////
    // GLOBAL GUARDS
    /////////////////////////////////

    if (IS_SSR === false) {
        // Handle OIDC authentication for routes: https://github.com/perarnborg/vuex-oidc/wiki#4a-setup-vue-router
        router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'));
    }

    // expose the router
    return router;
}
