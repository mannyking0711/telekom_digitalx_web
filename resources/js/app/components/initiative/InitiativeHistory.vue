
		
<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <div class="pageInitiative__filled iniHistory">
        <section class="no-spacing">
            <div class="col-100">
                <h2 class="pageInitiative__headline iniHistory__headline">{{ $t('pageinitiative.historyHeadline') }}</h2>
                <p class="iniHistory__desc">{{ $t('pageinitiative.historyText') }}</p>
            </div>
        </section>
    </div>
</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'InitiativeIntro',

			props: {


			},

			data() {
				return {
				};
			},

			computed: {

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

			}

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
				"pageinitiative.historyHeadline": "ERFOLGSGESCHICHTE DER INITIATIVE DIGITAL X",
				"pageinitiative.historyText": "„Was ist die Rolle der Digitalisierung in Unternehmen und wie können wir dabei helfen, Unternehmen digitaler und zukunftssicherer zu machen?“ Mit dieser Frage hat es 2017 angefangen. Die DIGITAL X ist eine 2017 durch die Deutsche Telekom ins Leben gerufene Initiative, um Unternehmen auf dem Weg in die Digitalisierung zu begleiten. Mehr als 200 nationale und internationale Partner engagieren sich heute in der branchenübergreifenden Initiative, mehr als 50.000 Entscheider waren Teilnehmer der zwischen 2018-2020 umgesetzten Live- und Digitalveranstaltungen innerhalb der DIGITAL X Community. Vertreter aus Wirtschaft, Politik, Unternehmen und Verbänden profitieren dabei von der Möglichkeit, voneinander zu lernen, sich zu digitalen Best Practice Cases auszutauschen und Networking zu betreiben. Das Motto lautet „vernetzen, austauschen, voneinander lernen“."
			},
			"en": {
				"pageinitiative.historyHeadline": "DIGITAL X INITIATIVE – SUCCESS STORIES",
				"pageinitiative.historyText": "“What is the role of digitalization in companies and how can we help to make them more digital and future-proof?” It all kicked off with this question in 2017. Established in 2017 by Deutsche Telekom, DIGITAL X is an initiative which helps companies on their path to digitalization. Over 200 partners from Germany and beyond are now involved in the cross-industry initiative, with more than 50,000 decision-makers taking part in the live digital events hosted between 2018-2020 by the DIGITAL X community. Representatives from business, politics, companies, and associations all benefit from the opportunity to learn from each other, share digital best practice, and network with each other. The motto is “network, share, learn from each other.”"
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



