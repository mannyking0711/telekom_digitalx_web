<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pageInitiative">

      <lib-hero
          :title="$t('pageinitiative.introHeadline')"
          :text="$t('pageinitiative.introText')"
          :logo="'app/digitalx-logo'"
          :bgImage="'../img/app/initiative/background.jpg'"
          :bgImageDarken="'0'"
      />


    <div class="container-fluid">

      <section class="hero-section__content bg-white">
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
            <div class="iniMission__patron">
              <img class="iniMission__patron-image" :src="basePath + 'img/app/initiative/hagen-rickmann.jpg'" alt="Hagen Rickmann" />
              <div class="iniMission__patron-caption">
                <div class="iniMission__patron-name">Hagen Rickmann</div>
                <div class="iniMission__patron-title">{{ $t('pageinitiative.missionText4') }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- SUCCESS STORY -->
    <section class="section">
      <div class="container-fluid">
        <div class="content content-center">
          <h2 >{{ $t('pageinitiative.historyHeadline') }}</h2>
          <p>{{ $t('pageinitiative.historyText') }}</p>
        </div>
      </div>
    </section>

    <!-- ECOSYSTEM -->
    <section class="bg-dx bg-overlay">
      <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <img class="" :src="basePath + 'img/app/initiative/ecosystem.png'" alt="" />
            </div>
            <div class="col-lg-6">
              <h2 class="">{{ $t('pageinitiative.ecosystemHeadline') }}</h2>
              <p class="">{{ $t('pageinitiative.ecosystemText') }}</p>
              <router-link :to="link('magazine')" class="btn blue icon-left">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('pageinitiative.button') }}</span>
              </router-link>
            </div>
          </div>
      </div>
    </section>

    <div class="section">
      <!-- RÜCKBLICK -->
      <initiative-retro />
    </div>

		<!-- AWARD -->
<!--		<initiative-award />-->

		<!-- EVENTS -->
<!--		<div class="pageInitiative__filled pageInitiative__events">-->
<!--			<section class="no-spacing">-->
<!--				<div class="col-100">-->
<!--					<h2 class="pageInitiative__headline pageInitiative__events-headline">{{ $t('pageinitiative.headlinePart1') }}<br>{{ $t('pageinitiative.headlinePart2') }}</h2>-->
<!--				</div>-->
<!--			</section>-->
<!--			<eventsteaser-section />-->
<!--		</div>-->

		<!-- PARTNER -->
    <section class="section">
            <div class="container-fluid">
                <partner-focus
                    v-if="itemData"
                    :partners="itemData.partner_focus"
                />

                <partner-list
                    v-if="itemData"
                    :support="itemData.partners_support"
                    :regular="itemData.partners_regular"
                    :premium="itemData.partners_premium"
                    :coop="itemData.partners_coop"
                    :mobility="itemData.partners_mobility"
                    :digitalization="itemData.partners_digitalization"
                    :media="itemData.partners_media"
                    :startup="itemData.partners_startup"
                    :partner="itemData.partners_partner"
                />

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
import fetchItemMixin from '../../mixins/fetchItem.js';

export default {

        /////////////////////////////////
        // INIT
        /////////////////////////////////

        name: 'PageInitiative',

        mixins: [fetchItemMixin],

        metaInfo() {

            return {
                title: 			this.$store.getters.env.app_name,
                titleTemplate: 	this.$t('pageindex.metaTitle'),
                meta: [
                    { name: 	'description', 			content: this.$t('pageindex.metaDescription') },
                    { property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
                    { property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
                    { property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-about.jpg' },
                    { property: 'og:type', 				content: 'website' },
                    { property: 'og:url', 				content: this.ogUrl },
                    { property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
                    { property: 'twitter:card', 		content: 'summary' },
                    { property: 'twitter:creator', 		content: 'Telekom' },
                    { property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
                    { property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
                    { property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-about.jpg' }
                ],
                link: [	this.canonical ]
            };
        },


        props: {


        },

        data() {
            return {
                ENDPOINT: 'about'
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
        "pageinitiative.introHeadline": "Die Initiative",
        "pageinitiative.introText": "Die DIGITAL X ist Europas führende Digitalisierungsinitiative. Sie verbindet Konzerne, den Mittelstand, Start-Ups, Politik, Visionäre und führende Experten in einer gemeinsamen Community. Für eine nachhaltige Digitalisierung und eine Verbesserung der Wettbewerbsfähigkeit unseres Landes.",
        "pageinitiative.headlinePart1": "Virtuell oder vor Ort:",
				"pageinitiative.headlinePart2": "Unsere Veranstaltungen",
				"pageindex.metaTitle": "Europas führende Digitalisierungsinitiative - DIGITAL X",
				"pageindex.metaDescription": "Willkommen bei der Initiative DIGITAL X. Neue Technologien und daraus entstehende Möglichkeiten für die Industrie bedürfen des Austauschs miteinander. Von und mit anderen Unternehmen und Experten lernen, um gemeinsam die Zukunft zu gestalten.",
        "pageinitiative.missionHeadline": "DIGITAL X – Unsere Mission",
        "pageinitiative.missionText1": "Spätestens seit der aktuellen Covid-19-Pandemie haben Unternehmen die Notwendigkeit der Digitalisierung erkannt. Ganze Abteilungen arbeiten aus dem Home Office, Kunden werden aus der Ferne betreut – Unternehmen mussten sich aus der Not heraus binnen kürzester Zeit digitalisieren und umstellen.",
        "pageinitiative.missionText2": "Die Digitalisierung verändert den deutschen Mittelstand wie kaum eine technische Entwicklung zuvor. Sie kennt weder Unternehmensgrößen noch Ländergrenzen. Mit der DIGITAL X Initiative machen wir die Themen der Digitalisierung erlebbar und bringen sie überall hin, wo sie das Leben und Arbeiten der Menschen direkt betrifft. Wir geben Antworten auf die wichtigsten Fragen von Unternehmern und Unternehmen. Was ist Ihre Herausforderung auf dem Weg in die Digitalisierung? Gemeinsam finden wir Lösungen!",
        "pageinitiative.missionText3": "Ihr Hagen Rickmann",
        "pageinitiative.missionText4": "Schirmherr der DIGITAL X",
        "pageinitiative.ecosystemHeadline": "Was ist das DIGITAL X Ökosystem?",
        "pageinitiative.ecosystemText": "Die DIGITAL X wurde bewusst als offene Initiative konzipiert. Als Plattform für alle, die die Digitalisierung in Deutschland und Europa beschleunigen wollen. Mittlerweile hat sich die DIGITAL X zu einem ausgereiften Ökosystem entwickelt, das die Digitalisierung des deutschen Mittelstandes über die verschiedensten Kanäle und Formate vorantreibt. Die Initiative mit ihrem starken Partnernetzwerk versorgt Unternehmen seit 2018 bei aktuell mehr als 15 Live-Formaten mit wertvollen Best Practice Cases, Innovationen und inspirierenden Experten  – regional und national. Wie wichtig und notwendig diese Mission ist, hat uns die Pandemielage 2020 eindrücklich vor Augen geführt. Darum hat sich 2020 das Angebot der DIGITAL X um einen weiteren wichtigen Baustein erweitert: Mit neuen redaktionellen Angeboten, täglichen Updates zu den wichtigsten Digitalisierungsthemen und einer noch stärkeren Vernetzung der Mitglieder der Initiative.",
        "pageinitiative.button": "Weitere Themen",
        "pageinitiative.historyHeadline": "Erfolgsgeschichte der Initiative DIGITAL X",
        "pageinitiative.historyText": "„Was ist die Rolle der Digitalisierung in Unternehmen und wie können wir dabei helfen, Unternehmen digitaler und zukunftssicherer zu machen?“ Mit dieser Frage hat es 2017 angefangen. Die DIGITAL X ist eine 2017 durch die Deutsche Telekom ins Leben gerufene Initiative, um Unternehmen auf dem Weg in die Digitalisierung zu begleiten. Mehr als 200 nationale und internationale Partner engagieren sich heute in der branchenübergreifenden Initiative, mehr als 50.000 Entscheider waren Teilnehmer der zwischen 2018-2020 umgesetzten Live- und Digitalveranstaltungen innerhalb der DIGITAL X Community. Vertreter aus Wirtschaft, Politik, Unternehmen und Verbänden profitieren dabei von der Möglichkeit, voneinander zu lernen, sich zu digitalen Best Practice Cases auszutauschen und Networking zu betreiben. Das Motto lautet „vernetzen, austauschen, voneinander lernen“."

      },
			"en": {
        "pageinitiative.introHeadline": "The initiative",
        "pageinitiative.introText": "DIGITAL X is Europe’s leading digitalization initiative. It brings together company groups, SMEs, start-ups, politicians, visionaries, and top experts as one community—to ensure that digitalization is sustainable and our country becomes more competitive. ",
        "pageinitiative.headlinePart1": "Virtual or in person:",
				"pageinitiative.headlinePart2": "Our events",
				"pageindex.metaTitle": "Europe’s leading digitalization initiative – DIGITAL X",
				"pageindex.metaDescription": "Welcome to the DIGITAL X initiative. In order for new technologies and the resulting possibilities for the industry to work, we need to communicate with each other, and learn from and with other companies and experts so we can shape the future together.",
        "pageinitiative.missionHeadline": "DIGITAL X – Our mission",
        "pageinitiative.missionText1": "The Covid-19 pandemic has made companies realize how important digitalization is. Entire departments are working from home and customers are being given remote support—companies have had to act out of necessity, adapting, and going digital in the shortest space of time.",
        "pageinitiative.missionText2": "Digitalization is changing German SMEs like no other technical development before it. It knows no bounds in terms of company size or country. With the DIGITAL X initiative, we're bringing digitalization to life in the places where it directly affects people’s lives and work. We’re providing answers to the key questions posed by companies and entrepreneurs. What is your biggest challenge when it comes to digitalization? Together we’ll find a solution!",
        "pageinitiative.missionText3": "Hagen Rickmann",
        "pageinitiative.missionText4": "Patron of DIGITAL X",
        "pageinitiative.ecosystemHeadline": "What ist the DIGITAL X ecosystem?",
        "pageinitiative.ecosystemText": "DIGITAL X was deliberately created as an open initiative – a platform for all those looking to speed up digitalization in Germany and Europe. DIGITAL X has now become a fully developed ecosystem which drives forward digitalization in German SMEs using a wide range of different channels and formats. With its strong partner network, the initiative has been supporting companies since 2018 and now provides over fifteen live formats with valuable best practice cases, innovations and inspiring experts – all over Germany. The 2020 pandemic has made us aware of just how important and necessary this mission is. To this end, this year has seen a further addition to the DIGITAL X initiative: New editorial content, daily updates on the key digitalization topics, and even better networking of members of the initiative.",
        "pageinitiative.button": "More topics",
        "pageinitiative.historyHeadline": "DIGITAL X initiative – Success stories",
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



