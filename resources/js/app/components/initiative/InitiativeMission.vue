<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <section class="no-spacing hero-section__content bg-white">
        <div class="row">
          <div class="col-md-6">
            <div style="text-align: left">
              <h2 class="">{{ $t('pageinitiative.missionHeadline') }}</h2>
              <div class="">
                <p>{{ $t('pageinitiative.missionText1') }}</p>
                <p>{{ $t('pageinitiative.missionText2') }}</p>
                <p>{{ $t('pageinitiative.missionText3') }}<br>{{ $t('pageinitiative.missionText4') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img class="iniMission__patron-image" :src="basePath + 'img/app/initiative/hagen-rickmann.jpg'" alt="Hagen Rickmann" />
            <div class="iniMission__patron-caption">
              <div class="iniMission__patron-name">Hagen Rickmann</div>
              <div class="iniMission__patron-title">{{ $t('pageinitiative.missionText4') }}</div>
            </div>
          </div>
        </div>
    </section>
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

			name: 'InitiativeMission',

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
				"pageinitiative.missionHeadline": "DIGITAL X – Unsere Mission",
				"pageinitiative.missionText1": "Spätestens seit der aktuellen Covid-19-Pandemie haben Unternehmen die Notwendigkeit der Digitalisierung erkannt. Ganze Abteilungen arbeiten aus dem Home Office, Kunden werden aus der Ferne betreut – Unternehmen mussten sich aus der Not heraus binnen kürzester Zeit digitalisieren und umstellen.",
				"pageinitiative.missionText2": "Die Digitalisierung verändert den deutschen Mittelstand wie kaum eine technische Entwicklung zuvor. Sie kennt weder Unternehmensgrößen noch Ländergrenzen. Mit der DIGITAL X Initiative machen wir die Themen der Digitalisierung erlebbar und bringen sie überall hin, wo sie das Leben und Arbeiten der Menschen direkt betrifft. Wir geben Antworten auf die wichtigsten Fragen von Unternehmern und Unternehmen. Was ist Ihre Herausforderung auf dem Weg in die Digitalisierung? Gemeinsam finden wir Lösungen!",
				"pageinitiative.missionText3": "Ihr Hagen Rickmann",
				"pageinitiative.missionText4": "Schirmherr der DIGITAL X"
			},
			"en": {
				"pageinitiative.missionHeadline": "DIGITAL X – Our mission",
				"pageinitiative.missionText1": "The Covid-19 pandemic has made companies realize how important digitalization is. Entire departments are working from home and customers are being given remote support—companies have had to act out of necessity, adapting, and going digital in the shortest space of time.",
				"pageinitiative.missionText2": "Digitalization is changing German SMEs like no other technical development before it. It knows no bounds in terms of company size or country. With the DIGITAL X initiative, we're bringing digitalization to life in the places where it directly affects people’s lives and work. We’re providing answers to the key questions posed by companies and entrepreneurs. What is your biggest challenge when it comes to digitalization? Together we’ll find a solution!",
				"pageinitiative.missionText3": "Hagen Rickmann",
				"pageinitiative.missionText4": "Patron of DIGITAL X"
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



