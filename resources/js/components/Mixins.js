/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	import Cookies from 'js-cookie';
	import {IS_SSR} from "../app/plugins/ssrSwitch";


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	MIXINS
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	var Mixins = {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		data: function() {

			return {
				debug: process.env.NODE_ENV !== 'production',
			};
		},

		computed: {
			basePath() {
				return this.$store.getters.env.base_url;
			},
			ogUrl() {
				return this.$store.getters.env.origin + this.$route.path;
			},
			canonical() {
				return {rel: 'canonical', href: this.$store.getters.env.origin + this.$route.path};
			},
			metaDescription() {
				return {vmid: 'description', name: 'description', content: this.$i18n.t('meta.description')};
			}
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

			/////////////////////////////////
			// ROUTE HELPER
			/////////////////////////////////

			link(name, params = {}) {

				var to = { name, params };

				// add language prefix
				to.params.lang = this.$i18n.locale;
				to.name = to.params.lang + '.' + to.name;

				return to;
			},

			localeSlug(item) {
				return item[`slug_${this.$i18n.locale}`];
			},

			translateSlugIfLanguageChanged(to, next, entity, additionalParams) {
				if (to.params.langChanged) {
					next({
						name: to.name,
						params: {
							lang: to.params.lang,
							slug: entity[`slug_${to.params.lang}`],
							...additionalParams
						}
					});
				} else {
					next();
				}
			},


			/////////////////////////////////
			// META
			/////////////////////////////////

			updateMetaData(data) {
                //console.log('updateMetaData');
			},


			/////////////////////////////////
			// COOKIES
			/////////////////////////////////

			denyAppCookie() {

                const manager = this.getAppCookieManager();
                manager.changeAll(false);
                manager.saveAndApplyConsents();
                this.$store.commit('updateAppCookie');
			},

			confirmAppCookie() {

                const manager = this.getAppCookieManager();
                manager.changeAll(true);
                manager.saveAndApplyConsents();
                this.$store.commit('updateAppCookie');
			},

            configureAppCookie() {
				if (IS_SSR === true) {
					return;
				}
				window.klaro.show(klaroConfig, true);
			},

            resetAppCookie() {

                this.getAppCookieManager().resetConsents();
			},

            getAppCookieConsents() {

			    return this.getAppCookieManager().consents;
            },

            hasConsentGiven(service) {

			    const manager = this.$store.state.cookieManager;
                if (manager.confirmed) {
                    if ((service in manager.consents) && (manager.consents[service] === true)) {
                        return true;
                    }
                }

                return false;
            },

            getAppCookieManager() {

                // See ConsentManager from /node_modules/klaro/src/consent-manager.js
			    return this.$store.state.cookieManager;
            },


			/////////////////////////////////
			// JQUERY POLYFILLS
			/////////////////////////////////

			outerWidth(el,includeMargin) {

				if(el.$el) { el = el.$el; }
				if(!includeMargin) { return el.offsetWidth; }
				var width = el.offsetWidth;
				var style = getComputedStyle(el);
				width += parseInt(style.marginLeft) + parseInt(style.marginRight);
				return width;
			},


			outerHeight: function(el, includeMargin) {

				if(el.$el) { el = el.$el; }
				if(!includeMargin) { return el.offsetHeight; }
				var height = el.offsetHeight;
				var style = getComputedStyle(el);
				height += parseInt(style.marginTop) + parseInt(style.marginBottom);
				return height;
			},


			/////////////////////////////////
			// DATE
			/////////////////////////////////

			getMonth(index) {

				var month;

				switch(index) {
					case 0: month = 'Januar'; break;
					case 1: month = 'Februar'; break;
					case 2: month = 'März'; break;
					case 3: month = 'April'; break;
					case 4: month = 'Mai'; break;
					case 5: month = 'Juni'; break;
					case 6: month = 'Juli'; break;
					case 7: month = 'August'; break;
					case 8: month = 'September'; break;
					case 9: month = 'Oktober'; break;
					case 10: month = 'November'; break;
					case 11: month = 'Dezember'; break;
				}

				return this.$t(month);
			},


			/////////////////////////////////
			// ERRORS & DEBUG
			/////////////////////////////////

			showPopupError(e) {

				// abort if no response data
				if(!e || !e.response) { console.error('no data in showPopupError()'); return; }

				// show on fatal errros
				if(e.response.status === 500) {
					this.$root.$emit('openPopupError', e);
				}
			},


			showFormError(e) {

				// abort if no response data
				if(!e || !e.response) { console.error('no data in showFormError()'); return; }

				// save form errors from input in component
				if(e.response.data.errors) { this.errors = e.response.data.errors }

				// fallack to default error message
				else if(e.response.data.message) { this.errors = {'message': [e.response.data.message] };  }
			},


			log(message, messageType) {

				// output info messages only in debug mode
				if(!this.debug && messageType !== "error") { return; }

				// styling properties
				var colorText 		= messageType === "error" ? '#f00' : '#000';
				var styleAppLog 	= "background: #f0f0f0; padding: 4px 4px 4px 10px; color:"+colorText+";";
				var styleClassName 	= "background: #f0f0f0; font-weight: bold; padding: 4px; color:"+colorText+";";
				var styleMessage 	= "background: #f0f0f0; padding: 4px 30px 4px 4px;color:"+colorText+";";

				// message template
				message = "%cApp Log | "+"%c"+this.$options.name+":\t\t%c"+message;

				// output message
				if(messageType ==='error')	{ console.error(message, styleAppLog, styleClassName, styleMessage); }
				else						{ console.log(message, styleAppLog, styleClassName, styleMessage); }
			},

			/////////////////////////////////
			// DEBOUNCE
			/////////////////////////////////

			// simble debounce method based of:
			// https://gist.github.com/treyhuffine/d628c0cd2e7d25f829159e08c29e92c0#file-debounce-description-js

			debounce: (func, wait) => {
				let timeout;
				return function executedFunction(...args) {
					const later = () => {
						timeout = null;
						func(...args);
					};
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
				};
			},

			/////////////////////////////////
			// TRANSLATE
			/////////////////////////////////

			// Use this method to access localized fields from the cms
			// e.g. instead of {{ data['title_' + $i18n.locale] }}
			//      you can write {{ translate('data.title') }}
			// The current locale will be picked automatically

			translated(key) {
				let keyArray = key.split('.');
				keyArray[keyArray.length - 1] = keyArray[keyArray.length - 1] + '_' + this.$i18n.locale;
				return keyArray.reduce((prev, curr) => prev && prev[curr], this);
			},

		}
	};



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	export { Mixins }
