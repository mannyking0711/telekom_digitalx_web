 /*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	// Vue framework
	import Vue from 'vue'
	import VueRouter from 'vue-router';

	// Pages
	import PageLogin from './pages/PageLogin';
	import PageIndex from './pages/PageIndex';
	import PageError from './pages/PageError';

	// Auth
	const PagePasswordReset = () => import( /* webpackChunkName: "chunks/backend/chunk-auth" */ './pages/auth/PagePasswordReset');
	const PagePasswordResetConfirm = () => import( /* webpackChunkName: "chunks/backend/chunk-auth" */ './pages/auth/PagePasswordResetConfirm');

	// User
	import PageUser from './pages/user/PageUser';
	import PageUserInfo from './pages/user/PageUserInfo';
	import PageUserData from './pages/user/PageUserData';
	import PageUserPassword from './pages/user/PageUserPassword';



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	WEB ROUTES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	const routes = [

		{ path: 'login', name: 'login', component: PageLogin, meta: {auth: false} },
		{ path: 'backend', name: 'backend', component: PageIndex, meta: {auth: true} },

		// Auth
		{ path: 'backend/password/reset', name:"backend.password.reset", component: PagePasswordReset, meta: {auth: false} },
		{ path: 'backend/password/reset/confirm/:token', name:"backend.password.reset.confirm", component: PagePasswordResetConfirm, meta: {auth: false} },

		// User
		{ path: 'backend/user', component: PageUser, meta: {auth: true}, children:[
			{path: '', name: 'backend.user.info', component: PageUserInfo, meta: {auth: true}},
			{path: 'data', name: 'backend.user.data', component: PageUserData, meta: {auth: true}},
			{path: 'password', name: 'backend.user.password', component: PageUserPassword, meta: {auth: true}}
		]},
	];



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	VUE ROUTER
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	Vue.use(VueRouter)


	// Add error pages to route
	routes.push({ path: 'backend/404', name: 'error.404', component: PageError, meta: {auth: undefined} });
	routes.push({ path: 'backend/403', name: 'error.403', component: PageError, props: {code: '403'}, meta: {auth: undefined} });
	routes.push({ path: 'backend/*', name: 'error', alias: '/404', component: PageError, meta: {auth: undefined} });


	const router = new VueRouter({


		/////////////////////////////////
		// OPTIONS
		/////////////////////////////////

		mode: 'history',
		base: window.base_url,


		/////////////////////////////////
		// ROUTES
		/////////////////////////////////

		routes: [
			{
				// localized routes
				path: '/:lang('+window.available_locales.join('|')+')?',
				component: { template: '<router-view></router-view>' },
				children: routes
			},
			{
				path: '/logout',
				name: 'logout',
				component: {template: '<div></div>'}
			}
		],


		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		scrollBehavior (to, from, savedPosition) {

			// scroll between transition animation
			return new Promise((resolve, reject) => {
				setTimeout(() => { resolve(savedPosition ? savedPosition : { x: 0, y: 0 }) }, 250)
			});
		},

	});



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	GLOBAL GUARDS
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	router.beforeEach((to, from, next) => {

		// force logout
		if(to.path == '/logout') { router.app.$auth.logout(); return; }

		// force reload on route "login"
		else if(to.path == '/') {
			location.href = app.$router.options.base + (from.params.lang ? from.params.lang+'/' : '') + to.fullPath.substr(1);
		}
		else {
			next();
		}
	});



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	export { router }


