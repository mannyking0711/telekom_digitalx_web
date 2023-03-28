<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<!-- CONTENT -->
      <div class="section">
        <section class="container-fluid" v-if="itemData">
          <div class="col-100" v-for="item in itemData.content" :key="item.id">

            <!-- TEXT -->
            <div v-if="item.__component === 'article.article-text'" v-html="item.content"></div>

                      <!-- COOKIES -->
                      <table class="table" v-if="item.__component === 'privacy-policy.cookie-list' && item.cookies.length > 0">
              <caption></caption>
                          <thead>
                          <tr>
                              <th scope="" style="width: 30%">{{ $t('pagePrivacy.cookieTitleCompany') }}</th>
                              <th scope="" style="width: 30%">{{ $t('pagePrivacy.cookieTitlePurpose') }}</th>
                              <th scope="" style="width: 20%">{{ $t('pagePrivacy.cookieTitleStoragePeriod') }}</th>
                              <th scope="" style="width: 20%">{{ $t('pagePrivacy.cookieTitleInvolvedAs') }}</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="cookie in item.cookies">
                              <td>{{cookie.company}}</td>
                              <td>{{cookie.purpose}}</td>
                              <td>{{cookie.storage_period}}</td>
                              <td>{{cookie.involved_as}}</td>
                          </tr>
                          </tbody>
                      </table>
          </div>
        </section>
      </div>

		</div>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>
		import fetchItemMixin from '../../mixins/fetchItem.js';

		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PagePrivacyTickets',

			mixins: [fetchItemMixin],

			metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	'%s | ' + this.$t('Datenschutzbestimmungen')
				};
			},

			props: {

			},

			data() {
				return {
					ENDPOINT: 'privacy-policy/'
				};
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {},

			mounted() {},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {}

		} // end export

	</script>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<i18n>
		{
			"de": {
                "pagePrivacy.cookieTitleCompany": "Unternehmen",
                "pagePrivacy.cookieTitlePurpose": "Zweck",
                "pagePrivacy.cookieTitleStoragePeriod": "Speicherdauer",
                "pagePrivacy.cookieTitleInvolvedAs": "Beteiligt als"
			},


			"en": {
                "pagePrivacy.cookieTitleCompany": "Company",
                "pagePrivacy.cookieTitlePurpose": "Purpose",
                "pagePrivacy.cookieTitleStoragePeriod": "Storage period",
                "pagePrivacy.cookieTitleInvolvedAs": "Involved as"
			}
		}
	</i18n>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<style lang="scss">

	</style>


	<style lang="scss" scoped>

	</style>



