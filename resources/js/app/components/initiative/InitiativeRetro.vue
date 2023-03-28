<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <div class="container-fluid">
        <section class="no-spacing">
            <div class="col-100">
                <div class="text-center">
                  <h2>{{ $t('pageinitiative.retroHeadline') }}</h2>
                </div>
                <slider :items="sliderItems" class="slider--large slider--full-width">
                    <template slot-scope="item">
                        <div class="iniRetro__slide">
                            <div class="iniRetro__slide-info">
                                <h3 class="pageInitiative__headline iniRetro__slide-headline">{{ item.title }}</h3>
                                <p class="iniRetro__slide-text">{{ item.text }}</p>
                            </div>
                            <img class="iniRetro__slide-image" :src="basePath + item.image" alt="" />
                        </div>
                    </template>
                </slider>
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
          sliderItems: [
            {
              title: '2021',
              text: this.$t('pageinitiative.retro2021'),
              image: 'img/app/initiative/retro-2021.jpg'
            },
            {
              title: '2020',
              text: this.$t('pageinitiative.retro2020'),
              image: 'img/app/initiative/retro-2020.jpg'
            },
            {
              title: '2019',
              text: this.$t('pageinitiative.retro2019'),
              image: 'img/app/initiative/retro-2019.jpg'
            },
            {
              title: '2018',
              text: this.$t('pageinitiative.retro2018'),
              image: 'img/app/initiative/retro-2018.jpg'
            },

          ]
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
				"pageinitiative.retroHeadline": "Ein kurzer Rückblick - Die Entwicklung der DIGITAL X",
				"pageinitiative.retro2018": "Über 15.000 Teilnehmer bei den insgesamt sechs regionalen und nationalen DIGITAL X Live-Events quer durch die Republik. Mit Top-Speakern, wie zum Beispiel Apple Co-Founder Steve Wozniak, und dem musikalischen Ausklang des ersten DIGITAL X Jahres mit den Black Eyed Peas in der Koelnmesse.",
				"pageinitiative.retro2019": "Bereits ein Jahr später verzeichnete die Community mehr als 35.000 Teilnehmer. Mit sechs Regionalveranstaltungen und dem Finale der DIGITAL X in der Koelnmesse hat sich die Initiative schon im 2. Jahr nach Gründung zur führenden Digitalisierungsinitiative entwickelt. Experten und Visionäre, wie zum Beispiel Sir Richard Branson, der Begründer des World Wide Web, Sir Tim Berners-Lee oder Wikipedia Co-Founder Jimmy Wales waren nur einige der Top-Speaker 2019. In einer Melange aus sechs Bühnen, dem Partnermarktplatz, dem Start-Up Square und der Innovationarea erlebten die Teilnehmer Digitalisierung zum Anfassen.",
				"pageinitiative.retro2020": "Was ist, wenn alles anders kommt? Dann nehmen wir die Herausforderung an und transformieren die DIGITAL X zu einer Live- und Digitalplattform. Mit den DIGITAL X DIGITAL EDITIONS als rein digitales Format haben wir eine passende Antwort auf die durch die Pandemie geltenden Einschränkungen geliefert. Und was ist, wenn wir genau jetzt die Krise als Chance sehen? Dann nutzen wir sie! Mit der Integration einer eigenen DIGITAL X Content Plattform, die den Startschuss für das größte Best Practice- und Wissensnetzwerkes im B2B-Bereich markiert. Auf diese Weise liefern wir eine Antwort auf die immer größer werdende Notwendigkeit von Digitalisierungslösungen. 365 Tage im Jahr. Rund um die Uhr. Für alle zugänglich.",
        "pageinitiative.retro2021": "Atemberaubende Indoor- und Outdoor-Bühnen, zahlreiche Brandhouses, Markplätze sowie die relevantesten Themen & Speaker. Wir verwandelten gemeinsam mit Ihnen die Stadt Köln zur Weltausstellung der Digitalisierung – dezentral, agil und innovativ. Neben geballter, inhaltlicher Power erlebten Sie wie gewohnt zahlreiche Entertainment-Highlights. Ob Netzwerken während der Kölschen Nacht oder gemeinsames Feiern auf der After-Show-Party – Die DIGITAL X 2021 waren zwei unvergessliche Tage in der schönsten Stadt am Rhein!"
			},
			"en": {
				"pageinitiative.retroHeadline": "A Quick look back at the development of DIGITAL X",
				"pageinitiative.retro2018": "Over 15,000 people attended the six regional and national DIGITAL X live events across Germany. The events featured top speakers like Apple co-founder Steve Wozniak, and the first year of DIGITAL X was rounded off with a performance by the Black Eyed Peas at the Koelnmesse.",
				"pageinitiative.retro2019": "Just one year later, the community had amassed over 35,000 participants. With six regional events and the DIGITAL X finale at the Koelnmesse, the initiative became one of the leading digitalization initiatives in just its second year. Experts and visionaries such as Sir Richard Branson, inventor of the World Wide Web Sir Tim Berners-Lee, and Wikipedia co-founder Jimmy Wales were just some of 2019’s top speakers. Attendees were able to experience digitalization up close across a mix of six stages, the partner marketplace, the start-up square, and the innovation area.",
				"pageinitiative.retro2020": "What is the best thing to do when everything is turned on its head? We faced this challenge by transforming DIGITAL X into a live digital platform. We have provided the perfect answer to the restrictions imposed by the pandemic in the form of DIGITAL X DIGITAL EDITIONS as an online-only format. And what does it mean, when we see the crisis as an opportunity? We exploit its potential – with the integration of our own DIGITAL X content platform, kicking off the largest best practice and knowledge network in the B2B sector. In this way, we are responding to the ever greater necessity of digital solutions. Available to everyone 24/7, 365 days a year.",
        "pageinitiative.retro2021": "Breathtaking indoor and outdoor stages, numerous brandhouses, marketplaces and the most relevant topics & speakers. Together with you, we transformed the city of Cologne into a world exhibition of digitalization - decentralized, agile and innovative. In addition to concentrated, content-related power, you experienced numerous entertainment highlights as usual. Whether networking during the Cologne Night or celebrating together at the after-show party - DIGITAL X 2021 was two unforgettable days in the most beautiful city on the Rhine!"
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
