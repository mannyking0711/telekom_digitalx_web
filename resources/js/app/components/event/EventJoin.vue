<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<div class="eventjoin">
    <div class="eventjoin__container">
      <section class="inner no-spacing">
        <div class="col-100 eventjoin__inner">
          <div class="eventjoin__infos">
            <div>
              <h3 class="eventjoin__headline">{{ $t('eventJoin.headline1') }}</h3>
              <ul class="pageevent__list eventjoin__list">
                <li>{{ $t('eventJoin.bullet1') }}</li>
                <li>{{ $t('eventJoin.bullet2') }}</li>
                <li>{{ $t('eventJoin.bullet3') }}</li>
                <li>{{ $t('eventJoin.bullet4') }}</li>
              </ul>
            </div>
            <a v-if="linkRegister" :href="linkRegister" target="_blank">
                <div class="btn yellow icon-left eventjoin__btn">
                    <svg-icon icon="app/icon-arrow"></svg-icon>
                    <span>{{ $t('eventJoin.button') }}</span>
                </div>
            </a>
          </div>
          <div class="eventjoin__form">
            <div>
              <h3 class="eventjoin__headline">{{ $t('eventJoin.headline2') }}</h3>
              <p class="eventjoin__text">{{ $t('eventJoin.formText') }}</p>
            </div>
            <button class="btn blue icon-left eventjoin__btn" @click.prevent="signIn">
              <svg-icon icon="app/icon-arrow"></svg-icon>
              <span>{{ $t('eventJoin.button2') }}</span>
            </button>
          </div>
          <div class="eventjoin__calendar">
            <div>
              <div v-if="logo" class="eventjoin__logo">
                <img class="lazy" :data-src="logo" :src="logo" :alt="$t('eventJoin.headline3')">
              </div>
              <h3 class="eventjoin__headline">{{ $t('eventJoin.headline3') }}</h3>
              <p class="eventjoin__text">{{ $t('eventJoin.calendarText') }}</p>
            </div>
            <a download="event.ics" href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpWRVJTSU9OOjIuMA0KUFJPRElEOmh0dHBzOi8vd3d3LmRpZ2l0YWwteC5ldS9kZS9ldmVudHMvDQpNRVRIT0Q6UFVCTElTSA0KQkVHSU46VlRJTUVaT05FDQpUWklEOkV1cm9wZS9CZXJsaW4NCkJFR0lOOlNUQU5EQVJEDQpEVFNUQVJUOjE2MDExMDI4VDAzMDAwMA0KUlJVTEU6RlJFUT1ZRUFSTFk7QllEQVk9LTFTVTtCWU1PTlRIPTEwDQpUWk9GRlNFVEZST006KzAyMDANClRaT0ZGU0VUVE86KzAxMDANCkVORDpTVEFOREFSRA0KQkVHSU46REFZTElHSFQNCkRUU1RBUlQ6MTYwMTAzMjVUMDIwMDAwDQpSUlVMRTpGUkVRPVlFQVJMWTtCWURBWT0tMVNVO0JZTU9OVEg9Mw0KVFpPRkZTRVRGUk9NOiswMTAwDQpUWk9GRlNFVFRPOiswMjAwDQpFTkQ6REFZTElHSFQNCkVORDpWVElNRVpPTkUNCkJFR0lOOlZFVkVOVA0KVUlEOjE2NTEyMTg3NTIwMDdAZGlnaXRhbC14LmV1DQpTVU1NQVJZOkRJR0lUQUwgWCAyMDIyDQpMT0NBVElPTjoNCkRFU0NSSVBUSU9OOg0KRFRTVEFSVDtUWklEPUV1cm9wZS9CZXJsaW46MjAyMjA5MTNUMDgwMDAwWg0KRFRFTkQ7VFpJRD1FdXJvcGUvQmVybGluOjIwMjIwOTE0VDIwMDAwMFoNCkRUU1RBTVA6MjAyMjA0MjlUMDc1MjMyWg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg==">
              <div class="btn blue icon-left eventjoin__btn">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('eventJoin.button3') }}</span>
              </div>
            </a>
          </div>
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

  import {mapActions} from "vuex";
  import {getAuthenticateOidcPayload} from "../../services/oidc-helpers";

  export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'EventJoin',

		props: {
      linkRegister: {type: String, required: true},
      logo: {type: String, required: true},
		},

    /////////////////////////////////
    // METHODS
    /////////////////////////////////

    methods: {

      ...mapActions('oidcStore', ['authenticateOidc']),

      signIn() {
        try {
          this.authenticateOidc(getAuthenticateOidcPayload(
            this.$i18n.locale,
            this.$store.getters.env.origin,
            this.$router.currentRoute.path
          ));
        } catch (e) {
          console.error(e);
        }
      },

    },
	}; // end export

</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<i18n>
		{
			"de": {
				"eventJoin.headline1": 		"Jetzt Ticket sichern",
				"eventJoin.headline2": 		"Bereits Mitglied?",
				"eventJoin.headline3": 		"Save the date",
				"eventJoin.button": 		"Jetzt teilnehmen",
				"eventJoin.button2": 		"HIER GEHT ES ZUM LOGIN",
        "eventJoin.button3": 		"IN KALENDER EINTRAGEN",
				"eventJoin.bullet1":		"Teilnahme an allen Events der DIGITAL X",
				"eventJoin.bullet2":		"Individualisierbare Agenda",
				"eventJoin.bullet3":		"Exklusive Veranstaltungsinhalte",
				"eventJoin.bullet4":		"Zugang zur Best Practice- und Wissensplattform",
				"eventJoin.formText":		"Wenn Sie sich bereits zur DIGITAL X angemeldet haben, können Sie sich hier mit Ihren Zugangsdaten ganz einfach im „My DIGITAL X“-Bereich einloggen und an den Veranstaltungen teilnehmen.",
        "eventJoin.calendarText":		"Am 13. und 14. September findet die DIGITAL X 2022 statt - jetzt Termin im Kalender sichern!"
			},
			"en": {
				"eventJoin.headline1": 		"Book your ticket now",
				"eventJoin.headline2": 		"Already a member?",
        "eventJoin.headline3": 		"Save the date",
				"eventJoin.button": 		"Register now",
				"eventJoin.button2": 		"LOG IN",
				"eventJoin.button3": 		"ADD TO CALENDAR",
				"eventJoin.bullet1":		"Participate in all DIGITAL X events",
				"eventJoin.bullet2":		"Customizable agenda",
				"eventJoin.bullet3":		"Exclusive event content",
				"eventJoin.bullet4":		"Access to the best-practice and knowledge platform",
				"eventJoin.formText":		"If you have already registered for DIGITAL X, you can use your access details to easily log in to the “My DIGITAL X” area and participate in the events.",
        "eventJoin.calendarText":		"DIGITAL X 2022 will take place on September 13 and 14 - save the date in your calendar now!"
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






