/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	// Vue framework
	import Vue from 'vue'
	import Vuex from 'vuex'

	// App
	import {route} from '../components/routes/Routes.js'



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	VUEX
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	Vue.use(Vuex)

	export const store = new Vuex.Store({


		/////////////////////////////////
		// STATE
		/////////////////////////////////

		state: {

		},


		/////////////////////////////////
		// ACTIONS
		/////////////////////////////////

		actions: {

			init(context) {

				//axios.get(route('api.test').url()).then(response => { context.commit('addTest',response.data); })
				//.catch(error => { });
			}
		},


		/////////////////////////////////
		// MUTATIONS
		/////////////////////////////////

		mutations: {

			 //addTest(state, data) { state.test = data; },
		},

		/////////////////////////////////
		// GETTER
		/////////////////////////////////

		getter: {

		}


	});