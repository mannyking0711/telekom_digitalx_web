<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <div class="iniAward">
		<div class="pageInitiative__filled">
			<section class="no-spacing">
				<div class="col-100 iniAward__headline-wrap">
					<h2 class="pageInitiative__headline">{{ $t('pageinitiative.headlinePart1') }}<br>{{ $t('pageinitiative.headlinePart2') }}</h2>
				</div>
			</section>
		</div>
		<section class="no-spacing">
			<div class="col-100 iniAward__content">
				<img class="iniAward__image" :src="basePath + 'img/app/award/award-logo.jpg'" alt="" />
				<div class="iniAward__info">
					<h3 class="iniAward__subheadline">{{ $t('pageinitiative.awardSubheadline') }}</h3>
					<p class="iniAward__desc">{{ $t('pageinitiative.awardText') }}</p>
					<a href="https://digitalchampionsaward.wiwo.de" target="_blank" class="btn blue icon-left iniAward__btn">
						<svg-icon icon="app/icon-arrow"></svg-icon>
						<span>{{ $t('pageinitiative.awardButton') }}</span>
					</a>
				</div>
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

			name: 'InitiativeAward',

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
				"pageinitiative.headlinePart1": "Deutschlands digitalste:",
				"pageinitiative.headlinePart2": "Der Digital Champions Award",
				"pageinitiative.awardSubheadline": "DER DIGITAL CHAMPIONS AWARD – digitale Vorreiter unter dem Dach der DIGITAL X",
				"pageinitiative.awardText": "Auch in diesem Jahr findet der Digital Champions Award wieder unter der Schirmherrschaft von Peter Altmaier statt. In verschiedenen Kategorien, wie z.B. „Digitales Kundenerlebnis“ oder „Digitale Prozesse & Organisation“, treten innovative Unternehmen mit ihren Referenz-Cases mit – und gegeneinander an. Und was ist, wenn auch Sie einen potentiellen Gewinner-Case haben? Dann sollten auch Sie sich für den Digital Champions Award bewerben. Mehr Informationen gibt es hier – ebenso eine Übersicht über die Nominierten und Sieger der letzten Jahre sowie der aktuellen Gewinner:",
				"pageinitiative.awardButton": "MEHR ERFAHREN"
			},
			"en": {
				"pageinitiative.headlinePart1": "Germanys most digital:",
				"pageinitiative.headlinePart2": "The Digital Champions Award",
				"pageinitiative.awardSubheadline": "THE DIGITAL CHAMPIONS AWARD – digital pioneers under the DIGITAL X umbrella",
				"pageinitiative.awardText": "This year’s Digital Champions Award is taking place once again this year under the patronage of Peter Altmaier. Innovative companies submit their reference cases and compete against each other in different categories such as “Digital customer experience” and “Digital processes & organisation”. And what do you do when you think you’ve got a winning case? Then you should apply for the Digital Champions Award. Find out more information here – as well as an overview of all the nominees and winners from previous years, and the latest winners:",
				"pageinitiative.awardButton": "MORE INFORMATION"
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



