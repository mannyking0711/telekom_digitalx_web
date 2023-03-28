<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <div>
        <section class="no-spacing">
            <div class="col-100 iniEcosystem">
              <div class="iniEcosystem__wrap">
                <img class="iniEcosystem__image" :src="basePath + 'img/app/initiative/ecosystem.png'" alt="" />
                <div class="iniEcosystem__info">
                  <h3 class="iniEcosystem__headline">{{ $t('pageinitiative.ecosystemHeadline') }}</h3>
                  <p class="iniEcosystem__text">{{ $t('pageinitiative.ecosystemText') }}</p>
                </div>
              </div>
              <router-link :to="link('magazine')" class="btn blue icon-left iniEcosystem__btn">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ $t('pageinitiative.button') }}</span>
              </router-link>
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

			name: 'InitiativeEcosystem',

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
				"pageinitiative.ecosystemHeadline": "WAS IST DAS DIGITAL X ÖKOSYSTEM?",
				"pageinitiative.ecosystemText": "Die DIGITAL X wurde bewusst als offene Initiative konzipiert. Als Plattform für alle, die die Digitalisierung in Deutschland und Europa beschleunigen wollen. Mittlerweile hat sich die DIGITAL X zu einem ausgereiften Ökosystem entwickelt, das die Digitalisierung des deutschen Mittelstandes über die verschiedensten Kanäle und Formate vorantreibt. Die Initiative mit ihrem starken Partnernetzwerk versorgt Unternehmen seit 2018 bei aktuell mehr als 15 Live-Formaten mit wertvollen Best Practice Cases, Innovationen und inspirierenden Experten  – regional und national. Wie wichtig und notwendig diese Mission ist, hat uns die Pandemielage 2020 eindrücklich vor Augen geführt. Darum hat sich 2020 das Angebot der DIGITAL X um einen weiteren wichtigen Baustein erweitert: Mit neuen redaktionellen Angeboten, täglichen Updates zu den wichtigsten Digitalisierungsthemen und einer noch stärkeren Vernetzung der Mitglieder der Initiative.",
				"pageinitiative.button": "WEITERE THEMEN"
			},
			"en": {
				"pageinitiative.ecosystemHeadline": "WHAT IS THE DIGITAL X ECOSYSTEM?",
				"pageinitiative.ecosystemText": "DIGITAL X was deliberately created as an open initiative – a platform for all those looking to speed up digitalization in Germany and Europe. DIGITAL X has now become a fully developed ecosystem which drives forward digitalization in German SMEs using a wide range of different channels and formats. With its strong partner network, the initiative has been supporting companies since 2018 and now provides over fifteen live formats with valuable best practice cases, innovations and inspiring experts – all over Germany. The 2020 pandemic has made us aware of just how important and necessary this mission is. To this end, this year has seen a further addition to the DIGITAL X initiative: New editorial content, daily updates on the key digitalization topics, and even better networking of members of the initiative.",
				"pageinitiative.button": "MORE TOPICS"
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



