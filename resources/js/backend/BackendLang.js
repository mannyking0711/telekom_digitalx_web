/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	// Vue framework
	import Vue from 'vue'
	import VueI18n from 'vue-i18n'

	// Messages
	import messages from '../lang/LangGlobal.js'
	import messagesBackend from '../lang/LangBackend.js'



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	I18N
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	Vue.use(VueI18n);

	// combine global and backend language
	var allMessages = {};
	for (var lang in messagesBackend) {	allMessages[lang] = Object.assign(messages[lang],messagesBackend[lang]); }

	export const i18n = new VueI18n({

		locale: 				window.active_locale,
		fallbackLocale: 		window.fallback_locale,
		silentTranslationWarn: 	true,
		messages: 				allMessages
	});