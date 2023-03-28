    // Libraries
    require('intersection-observer');
    import LazyLoad from "vanilla-lazyload";

    // include Vue
    import Vue from 'vue';
    import VueMeta from 'vue-meta'
    import VueI18n from 'vue-i18n'
    import MasonryWall from '@yeger/vue2-masonry-wall'
    import AppRoot from './AppRoot'
    import createStore from './AppStore'
    import createRouter from './AppRouter'
    import createI18n from './AppLang'
    import { Mixins } from '../components/Mixins'
    import RouterReferer from './plugins/routerReferer'
    import { IS_SSR } from "./plugins/ssrSwitch"
    import { sync } from 'vuex-router-sync'


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	LIBARIES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// init lazy loading
const lazyload = (IS_SSR === false) ? new LazyLoad({ elements_selector: ".lazy" }) : {};
if (IS_SSR === true) {
    Vue.prototype.$lazyload = lazyload;
} else {
    window.lazyload = lazyload;
}


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	VUE
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


    /////////////////////////////////
    // GLOBAL COMPONENTS
    /////////////////////////////////

    // include basic components
    import LanguageSelect from '../components/LanguageSelect'; Vue.component('LanguageSelect',LanguageSelect);
    import PageTransition from '../components/PageTransition'; Vue.component('PageTransition',PageTransition);
    import SvgIcon from '../components/svg/SvgIcon'; Vue.component('SvgIcon',SvgIcon);
    import PopupError from '../components/popup/PopupError'; Vue.component('PopupError',PopupError);
    import Breadcrumb from '../components/breadcrumb/Breadcrumb'; Vue.component('Breadcrumb',Breadcrumb);

    // include all form components
    const globalFormFiles = require.context('../components/form/', true, /\.vue$/i);
    globalFormFiles.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], globalFormFiles(key).default));

    // include optional components
    import VideoPlayer from '../components/media/VideoPlayer'; Vue.component('VideoPlayer',VideoPlayer);
    import AudioPlayer from '../components/media/AudioPlayer'; Vue.component('AudioPlayer',AudioPlayer);
    import Slider from '../components/slider/Slider'; Vue.component('Slider',Slider);
    //import Accordeon from '../components/accordeon/Accordeon'; Vue.component('Accordeon',Accordeon);
    import VueSuggestion from 'vue-suggestion'; Vue.use(VueSuggestion);


    /////////////////////////////////
    // APP COMPONENTS
    /////////////////////////////////

    // include layouts
    import DefaultLayout from './layouts/DefaultLayout'; Vue.component('DefaultLayout',DefaultLayout);
    import LandingpageLayout from './layouts/LandingpageLayout'; Vue.component('LandingpageLayout',LandingpageLayout);
    import TextLayout from './layouts/TextLayout'; Vue.component('TextLayout',TextLayout);

    // include all app components
//        @todo: style-loader in node not universal - use vue-style-loader instead
//        @see: https://ssr.vuejs.org/guide/css.html#enabling-css-extraction
    const appFiles = require.context('./components', true, /\.vue$/i);
    appFiles.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], appFiles(key).default));


    /////////////////////////////////
    // VUE MAIN
    /////////////////////////////////

    // prevent message in browser console
    Vue.config.productionTip = false;

    // functions for all components via mixins
    Vue.mixin(Mixins);

    // init vue plugins
    Vue.use(VueMeta);
    Vue.use(VueI18n);
    Vue.use(MasonryWall);
    if(IS_SSR === false) {
        Vue.use(RouterReferer);
    }

    // init Vue app
    export default function createApp(context) {

        // create router, store, i18n instances
        const store = createStore(context.env)
        const router = createRouter(store)
        const i18n = createI18n(store)

        // Make i18n and router accessible in store
        store.$i18n = i18n;
        store.$router = router;

        // sync so that route state is available as part of the store
        sync(store, router);

        // init matamo analytics
        if (IS_SSR === false) {
            const VueMatomo = require('vue-matomo').default;
            Vue.use(VueMatomo, {
                host: 'https://analytics.digital-x.eu',
                siteId: 1,
                router: router,
                requireConsent: false,
                requireCookieConsent: true,
            });
        }

        const app = new Vue({
            data: {
                url: context.url,
            },
            router,
            store,
            i18n,
            created() {
                // Server-side and Client-side
            },
            serverPrefetch () {
                // Server-side only
                return this.$store.dispatch('loadContent')
            },
            beforeMount () {
                // Client-side only
                if (!this.$store.getters.isContentLoaded) {
                    store.dispatch('loadContent')
                }
                if (!this.$store.getters.cookieManager) {
                    this.$store.dispatch('initCookieConsent')
                }
            },
            render: h => h(AppRoot)
        })

        // expose the app, the router and the store.
        return { app, router, store }
    }
