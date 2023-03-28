/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	// Libraries
	require('intersection-observer');
	import svg4everybody from 'svg4everybody';
	import LazyLoad from "vanilla-lazyload";

	// include Vue
	import Vue from 'vue';
	import VueMeta from 'vue-meta'
	import VueI18n from 'vue-i18n'
	import VueAxios from 'vue-axios'
	import VueAuth from '@websanova/vue-auth'
	import BackendRoot from './BackendRoot';
	import { router } from './BackendRouter';
	import { store } from './BackendStore';
	import { i18n } from './BackendLang';
	import { AuthConfig } from './BackendAuth';
	import { Mixins } from '../components/Mixins';



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	AXIOS
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	// init Axios
	window.axios = require('axios');
	window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	window.axios.defaults.headers.common['Accept-Language'] = window.active_locale;

	// set CSRF-Token for Axios
	let token = document.head.querySelector('meta[name="csrf-token"]');
	if (token) 	{ window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content; }
	else		{ console.error('CSRF token not found!'); }



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	LIBARIES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	// init lazy loading
	window.lazyload = new LazyLoad({ elements_selector: ".lazy" });



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

	// include all form components
	const globalFormFiles = require.context('../components/form/', true, /\.vue$/i);
	globalFormFiles.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], globalFormFiles(key).default));

	// include optional components
	//import VideoPlayer from '../components/video/VideoPlayer'; Vue.component('VideoPlayer',VideoPlayer);
	//import Slider from '../components/slider/Slider'; Vue.component('Slider',Slider);
	//import Accordeon from '../components/accordeon/Accordeon'; Vue.component('Accordeon',Accordeon);


	/////////////////////////////////
	// BACKEND COMPONENTS
	/////////////////////////////////

	// include all backend components
	const backendFiles = require.context('./components', true, /\.vue$/i);
	backendFiles.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], backendFiles(key).default));


	/////////////////////////////////
	// VUE MAIN
	/////////////////////////////////

	// prevent message in browser console
	Vue.config.productionTip = false;

	// functions for all components via mixins
	Vue.mixin(Mixins);

	// init vue plugins
	Vue.router = router;
	Vue.use(VueMeta);
	Vue.use(VueI18n)
	Vue.use(VueAxios, axios)
	Vue.use(VueAuth, AuthConfig);

	// init Vue app
	window.app = new Vue({
		data: {},
		router,
		store,
		i18n,
		created() { this.$store.dispatch('init'); },
		render: h => h(BackendRoot)
	}).$mount('#app');


