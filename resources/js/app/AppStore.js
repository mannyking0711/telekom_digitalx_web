import Vue from 'vue'
import Vuex from 'vuex'
import {IS_SSR} from "./plugins/ssrSwitch";
import createCookieConsentConfig from "./config/CookieConsentConfig";
import {fetchItem, postItem} from './services/api';
import Oidc from "oidc-client";
import {vuexOidcCreateStoreModule} from 'vuex-oidc'
import createOidcConfig from './config/OidcConfig'


export default function createStore(env) {

    let storeModules = {};

    if (IS_SSR === false) {
        // OIDC https://github.com/perarnborg/vuex-oidc/wiki#2-setup-vuex
        const oidcConfig = createOidcConfig(env.origin, env.active_locale);
        storeModules = {
        	oidcStore: vuexOidcCreateStoreModule(
                {
                    ...oidcConfig,
                    userStore: new Oidc.WebStorageStateStore({store: window.localStorage}),
                },
                // Optional OIDC store settings
                {
                    namespaced: true,
                    // dispatchEventsOnWindow: true
                },
                {
                    userLoaded: (user) => store.dispatch('loadUserProfile', {id: user.profile.sub, access_token: user.access_token}),
                    // Optional OIDC event listeners ( !!! ONLY FOR DEBUGGING !!! )
                    // userLoaded: (user) => console.log('OIDC user is loaded:', user.profile),
                    // userUnloaded: () => console.log('OIDC user is unloaded'),
                    // accessTokenExpiring: () => console.log('Access token will expire'),
                    // accessTokenExpired: () => console.log('Access token did expire'),
                    // silentRenewError: () => console.log('OIDC user is unloaded'),
                    // userSignedOut: () => console.log('OIDC user is signed out'),
                    // oidcError: (payload) => console.log('OIDC error', payload),
                    // automaticSilentRenewError: (payload) => console.log('OIDC automaticSilentRenewError', payload)
                }
            )
        }
    }

    Vue.use(Vuex);

    const store = new Vuex.Store({

        /////////////////////////////////
        // STATE
        /////////////////////////////////

        state: () => ({
            env: {},
            cookieManager: undefined, // See ConsentManager from /node_modules/klaro/src/consent-manager.js
            content: {
                articles: {list: [], highlights: []},
                podcasts: {list: [], highlights: []},
                videos: {list: [], highlights: []},
                article_groups: [],
                podcast_groups: [],
                video_groups: [],
                events: [],
                awards: [],
                awardRegions: {},
                awardCategories: {},
                companiesInFokus: {},
                videosInFokus: {},
            },
            userProfile: {},
            meta: {},
            items: {},
            currentItem: {},
            notFound: false,
            redirect: null,
            isKeyvisualLoaded: false,
            keyvisualLoadedCount: 0,
            breadcrumbTitles: [],
            latestBreadcrumbTitles: null,
            searchItemsOffset: 0,
            filterMegatrends: [],
            filterQuarters: [],
            tabPartner: 'partner',
        }),


        /////////////////////////////////
        // Modules
        /////////////////////////////////

        modules: storeModules,


        /////////////////////////////////
        // ACTIONS
        /////////////////////////////////

        actions: {

            initCookieConsent(context) {
                // Delete old cookie consent Cookie to start with Klaro
                let Cookies = require('js-cookie');
                const test = Cookies.get(window.env.app_cookie_name);
                if (Number.isInteger(test * 1) || (test === '-1') || (test === '1')) {
                    var name = "confirmed_cookie_use",
                        path = "/",
                        domain = window.env.app_cookie_domain;
                    document.cookie = name + "=" +
                      ((path) ? ";path="+path:"")+
                      ((domain)?";domain="+domain:"") +
                      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
                    //Cookies.set(window.app_cookie.name, '{}');
                } else if (test) {
                    try {
                        JSON.parse(test);
                    } catch (e) {
                        Cookies.set(window.env.app_cookie_name, '{}');
                    }
                }

                // Klaro Cookie Consent
                let cookieConsentConfig = createCookieConsentConfig(this.state.env.app_cookie_name, this.$i18n.locale);
                const Klaro = require('klaro/dist/klaro-no-css');
                window.klaro = Klaro;
                window.klaroConfig = cookieConsentConfig;
                Klaro.setup(klaroConfig);
                context.commit('updateAppCookie');
            },

            loadContent(context) {
                return fetchItem(this.state.env.content_url + 'content', this.$i18n.locale)
                    .then(item => {
                        if (item) context.commit('addContent', item);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            /**
             * Fetch item from API and save to store.
             * For backward compatibility, args can be a scalar value (=> endpoint) or an object with multiple values.
             */
            fetchItem ({ commit }, args) {
                let endpoint, breadcrumbTitle, setAsCurrentItem, path, previewSecret;
                if (typeof args === 'object') {
                    endpoint = args.endpoint;
                    breadcrumbTitle = args.breadcrumbTitle ?? null;
                    setAsCurrentItem = args.setAsCurrentItem ?? false;
                    path = args.path ?? null;
                    previewSecret = args.previewSecret ?? null;
                } else {
                    endpoint = args;
                    breadcrumbTitle = null;
                    setAsCurrentItem = false;
                    previewSecret = null;
                }

                let url = this.state.env.content_url + endpoint;
                if (previewSecret) {
                  url = url + `/?preview_secret=${previewSecret}`
                }

                return fetchItem(url, this.$i18n.locale)
                    .then(item => {
                        if (!item || item.statusCode === 404) {
                            commit('setNotFound', true);
                        } else if (item) {
                            item.locale = this.$i18n.locale;
                            commit('setItem', {endpoint, item});

                            if (setAsCurrentItem) {
                                commit('setCurrentItem', item);

                                // DX112: DEV // Magazin / Weiterleitung bei EN Inhalten n/a
                                // Server-Side!
                                // For client-side and more description see: resources/js/components/LanguageSelect.vue changeLanguage()
                                if (this.$i18n.locale === 'en') {
                                    let routeName = this.state.route.name;
                                    if (/\.detail$/.test(routeName)) {
                                        // Redirect if item has no translation
                                        if (item && (item.translation === false)) {
                                            routeName = routeName.replace('.detail','');
                                            // Special handling for podcasts
                                            routeName = routeName.replace('.podcast','');
                                            let props = this.$router.resolve({name: routeName});
                                            commit('setRedirect', props.href);
                                        }
                                    }
                                }
                            }

                            if (breadcrumbTitle && item.hasOwnProperty(breadcrumbTitle)) {
                                const title = item[breadcrumbTitle] ?? '';
                                commit('setBreadcrumbTitle', {path, title});
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            postItem({commit}, {endpoint: endpoint, params: params}){
                params.locale = this.$i18n.locale;
                return postItem(endpoint, params).then(response => {
                    commit('setItem', {endpoint, response});
                }).catch(error => {
                    console.log(error);
                })
            },

            /**
             * After Aditus login (see oidcStore.userLoaded) the UserProfile is loaded from API.
             * The UserProfile contains tags, bookmarks and other setting for user generated content.
             * To use the userProfile: `this.$store.state.userProfile`
             * After user has changed call `this.$store.dispatch('loadUserProfile', {id: this.oidcUser.sub, access_token: this.oidcAccessToken});`
             */
            loadUserProfile(context, params) {
                const payload = {
                    access_token: params.access_token,
                }
                postItem(this.getters.env.content_url + 'user-profiles/user/' + params.id, {
                    body: JSON.stringify(payload),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(response => {
                    context.commit('updateUserProfile', response);
                }).catch(error => {
                    console.log(error.message);
                });
            },

            /**
             * Read more/less function for cookie consent dialog (which is not a Vue component).
             *
             * Example from AppCookieConsentConfig.js:
             * description: "<p>Lorem ipsum dolor sit amet<span class=\"more\" style=\"display: none\">Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <a class=\"textlink read-more-less\" onclick=\"window.VueStore.dispatch('readMoreLess', {purpose: 'functional', more: 'Mehr erfahren', less: 'Weniger erfahren'}); \">Mehr erfahren</a>",
             */
            readMoreLess({commit}, {purpose, more, less}) {
                let moreText = document.querySelector(`#purpose-item-${purpose}-description .more`);
                let btnText = document.querySelector(`#purpose-item-${purpose}-description .read-more-less`);
                if (moreText.style.display === "none") {
                    btnText.textContent = less;
                    moreText.style.display = "inline";
                } else {
                    btnText.textContent = more;
                    moreText.style.display = "none";
                }
            },
        },


        /////////////////////////////////
        // MUTATIONS
        /////////////////////////////////

        mutations: {

            addContent(state, data) {
                Vue.set(state, 'content', data);
                if (IS_SSR === false) {
                    setTimeout(() => {
                        window.lazyload.update();
                    }, 100);
                }
            },

            // @todo: DX108 experimental
            fetchSyncItem (state, endpoint) {
                fetch(this.state.env.content_url + endpoint)
                    .then(response => response.json())
                    .then(item => {
                        Vue.set(state.items, endpoint, item)
                    })
                    .catch(err => console.log(err));
            },

            setItem (state, { endpoint, item }) {
                Vue.set(state.items, endpoint, item)
            },

            setCurrentItem (state, item) {
                state.currentItem = item;
            },

            setBreadcrumbTitle (state, { path, title }) {
              title = title.replace(/<\/?[^>]+(>|$)/g, "");
              Vue.set(state.breadcrumbTitles, path, title);
              state.latestBreadcrumbTitles = title;
            },

            setEnv(state, {env}) {
                state.env = env;
            },

            updateAppCookie(state) {
                state.cookieManager = window.klaro.getManager(window.klaroConfig);
            },

            updateUserProfile(state, data) {
                state.userProfile = data;
            },

            setNotFound(state, notFound) {
                state.notFound = notFound;
            },

            setRedirect(state, redirect) {
                state.redirect = redirect;
            },

            setIsKeyvisualLoaded(state, loaded) {
                state.isKeyvisualLoaded = loaded;
            },

            setKeyvisualLoadedCount(state) {
                state.keyvisualLoadedCount ++;
            },

            setSearchItemsOffset(state, value) {
                state.searchItemsOffset = value;
            },

            setFilterMegatrends(state, value) {
                state.filterMegatrends = value;
            },

            setFilterQuarters(state, value) {
                state.filterQuarters = value;
            },

            setTabPartner(state, value) {
                state.tabPartner = value;
            },
        },


        /////////////////////////////////
        // GETTER
        /////////////////////////////////

        getters: {

            env: state => state.env,

            cookieManager: state => state.cookieManager,

            meta: state => state.meta,

            getBreadcrumbTitle: (state) => (endpoint) => {
                return state.breadcrumbTitles[endpoint] ?? '';
            },

            getLatestBreadcrumbTitle: (state) => {
                return state.latestBreadcrumbTitles ?? '';
            },

            isContentLoaded(state) {
                return (
                    (state.content !== undefined) &&
                    (state.content.articles !== undefined) &&
                    (state.content.articles.list !== undefined) &&
                    (state.content.articles.list.length > 0)
                );
            },

            getItem: (state) => (endpoint) => {
                return state.items[endpoint] ?? state.items[endpoint];
            },

            getCurrentItem: (state) => () => {
                return state.currentItem;
            },

            newContent(state) {
                return state.content.articles.list.concat(
                    state.content.podcasts.list,
                    state.content.videos.list
                ).sort((a, b) => {
                    return a.timestamp < b.timestamp ? 1 : -1;
                });
            },

            newHighlights(state) {
                return state.content.articles.highlights.concat(
                    state.content.podcasts.highlights,
                    state.content.videos.highlights
                ).sort((a, b) => {
                    return a.timestamp < b.timestamp ? 1 : -1;
                });
            },

            nextEvent(state) {

                return state.content.events.length > 0 ? state.content.events[0] : {slug_de: ' ', slug_en: ' '};
            },

            getAwardByYear: (state) => (year) => {
                return state.content.awards.find(award => award.year === year)
            },

            getAwardRegionById: (state) => (id) => {
                return state.content.awardRegions[id] ? state.content.awardRegions[id] : {};
            },

            getAwardCategoryById: (state) => (id) => {
                return state.content.awardCategories[id] ? state.content.awardCategories[id] : {};
            },

            getArticleGroupByArticleId: (state) => (id) => {
                return state.content.article_groups.find(group => group.id === id)
            },

            getPodcastGroupByPodcastId: (state) => (id) => {
                return state.content.podcast_groups.find(group => group.id === id)
            },

            getVideoGroupByVideoId: (state) => (id) => {
                return state.content.video_groups.find(group => group.id === id)
            },

            getIsKeyvisualLoaded(state) {
                return state.isKeyvisualLoaded
            },

            getKeyvisualLoadedCount(state) {
                return state.keyvisualLoadedCount
            },

            getSearchItemsOffset(state) {
                return state.searchItemsOffset
            },

            getFilterMegatrends(state) {
                return state.filterMegatrends
            },

            getFilterQuarters(state) {
                return state.filterQuarters
            },

            getTabPartner(state) {
                return state.tabPartner
            },
        },


        /////////////////////////////////
        // METHODS
        /////////////////////////////////

        getCookieSettings() {

            return {
                name: window.cookie_name,
                path: this.basePath,
                domain: window.cookie_domain,
                expires: window.cookie_lifetime
            };
        }


    });

    if ((IS_SSR === false) && window.__INITIAL_STATE__) {
        // Init state with prefetched data from entry-server.js
        //console.log("__INITIAL_STATE__", window.__INITIAL_STATE__)
        store.replaceState(window.__INITIAL_STATE__)

        // expose the store to non vue code (e.g. cookie consent)
        window.VueStore = store
    } else {
        // Init env with data from app.blade.php
        store.commit('setEnv', { env })
    }

    // expose the store
    return store;
}

