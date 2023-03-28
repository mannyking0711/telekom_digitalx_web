<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->







	<template>

		<section class="index-initiative">

      <div class="container-fluid">
        <div class="row">

          <!-- COPY -->
          <div class="col-lg-8">
            <p class="index-initiative__topline">
              {{ $t('indexinitiative.topline') }}
            </p>
            <h3 class="index-initiative__title">{{ $t('indexinitiative.headline') }}</h3>
            <p class="index-initiative__copy">
              {{ $t('indexinitiative.text1') }}
              <br><br><br>
              {{ $t('indexinitiative.text2') }}
              <br><br><br>
              {{ $t('indexinitiative.text3') }}
            </p>
          </div>

          <!-- IMAGE -->
          <div class="col-lg-4">
            <div class="index-initiative__logo">
              <svg-icon sprite="app/digitalx-logo-white"></svg-icon>
            </div>
          </div>

        </div>
      </div>

            <!-- Direkter Link zum Ticketshop -->
<!--            <a v-if="$i18n.locale=='de'" href="https://secure.digital-x.eu/DX/DIGITALX2021?ui_locales=DE-de" target="_blank" class="btn blue fullwidth">-->
<!--                {{ $t('indexinitiative.button') }}-->
<!--            </a>-->
<!--            <a v-else="$i18n.locale=='en'" href="https://secure.digital-x.eu/DX/DIGITALX2021?ui_locales=en-us" target="_blank" class="btn blue fullwidth">-->
<!--                {{ $t('indexinitiative.button') }}-->
<!--            </a>-->

            <!-- LINK zu My DIGITAL X
			<router-link :to="link('dashboard')" class="btn blue fullwidth">{{ $t('indexinitiative.button') }}</router-link> -->

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

			name: 'IndexAward',

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

			destroyed() {

			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				initAnimation() {

				}
			}

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
				"indexinitiative.topline": "Die Initiative",
				"indexinitiative.headline": "DIGITAL X – Europas führende Digitalisierungsinitiative",
				"indexinitiative.text1": "Die DIGITAL X ist Europas führende, branchenübergreifende Digitalisierungsinitiative. In ihr engagieren sich über 300 nationale und internationale Partner. Sie begleitet kleine und mittelständische Unternehmen bei der digitalen Transformation.",
				"indexinitiative.text2": "Was ist das Konzept dahinter? Vernetzen, austauschen und voneinander lernen im Sinne des digitalen Fortschritts.",
				"indexinitiative.text3": "Die DIGITAL X bringt die Top-Digitalisierungsthemen, spannende Innovationen, ein nationales Partnernetzwerk und hochkarätige Speaker zu den Entscheidern. Sie gibt Antworten und Lösungen zu konkreten Herausforderungen der Unternehmen: „Was bedeutet Digitalisierung für mich und mein Unternehmen?“, „Was ist der Status Quo?“ und „Wie sieht die Zukunft der Digitalisierung aus?“. Wir definieren Digitalisierung gemeinsam neu. Anfassbar. Und immer lösungsorientiert aus dem Netzwerkgedanken heraus.",
				"indexinitiative.button": "JETZT TEILNEHMEN",
				"cta": "Starten Sie hier"
			},


			"en": {
				"indexinitiative.topline": "The initiative",
				"indexinitiative.headline": "DIGITAL X – Europe’s leading digitalization initiative",
				"indexinitiative.text1": "DIGITAL X is Europe’s leading cross-industry digitalization initiative, with over 300 dedicated national and international partners. It helps SMEs with their digital transformation.",
				"indexinitiative.text2": "What is the concept behind it? To network, share, and learn from each other in order to pave the way for digital progress.",
				"indexinitiative.text3": "DIGITAL X brings the top digitalization topics, exciting innovations, a nationwide partner network, and expert speakers to the decision-makers. It provides answers and solutions to specific challenges faced by businesses, such as “What does digitalization mean for me and my company?”, “What is the status quo?” and “What does the future of digitalization look like?”. We are re-defining digitalization together in a tangible way - and always with a focus on solutions by means of collective thinking.",
				"indexinitiative.button": "REGISTER NOW",
				"cta": "Start here"
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


