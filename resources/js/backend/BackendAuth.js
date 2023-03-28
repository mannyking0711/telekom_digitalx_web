/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	import bearer from '@websanova/vue-auth/drivers/auth/bearer'
	import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
	import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'
	import {route} from '../components/routes/Routes.js'



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	AUTH CONFIG
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	export const AuthConfig = {

		// options
		auth: 				bearer,
		http: 				axios,
		router: 			router,
		tokenDefaultKey: 	'laravel-jwt-auth',
		stores: 			['storage', 'cookie'],
		authRedirect: 		{name: 'login'},
		notFoundRedirect: 	{name: 'error.404'},
		forbiddenRedirect: 	{name: 'error.403'},

		// API endpoints used in Vue Auth.
		/*
		registerData: {
			url: 		route('api.register').template,
			method: 	'POST',
			redirect: 	route('login').template,
		},
		*/
		loginData: {
			url: 		route('api.login').template,
			method: 	'POST',
			redirect: 	'backend',
			fetchUser: 	true,
		},
		logoutData: {
			url: 		route('api.logout').template,
			method: 	'POST',
			redirect: 	'/',
			makeRequest: true
		},
		fetchData: {
			url: 		route('api.user').template,
			method: 	'GET',
			enabled: 	true
		},
		refreshData: {
			url: 		route('api.refresh').template,
			method: 	'GET',
			enabled: 	true,
			interval: 	30
		},
	}


