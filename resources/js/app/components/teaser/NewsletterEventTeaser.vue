<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="newsletter-event-teaser">

        <div class="headline">
            <h3>
                <span>{{ $t('newsletterEventRegistrationForm.headerA') }}</span>
                {{ $t('newsletterEventRegistrationForm.headerB') }}
            </h3>
        </div>

        <div class="content">
            <div class="left">
                <h4>{{ $t('newsletterEventRegistrationForm.leftHeadline1') }}<br><span>{{ $t('newsletterEventRegistrationForm.leftHeadline2') }}</span><br>{{ $t('newsletterEventRegistrationForm.leftHeadline3') }}</h4>
                <p>{{ $t('newsletterEventRegistrationForm.leftText1') }}</p>
                <p>{{ $t('newsletterEventRegistrationForm.leftText2') }}</p>
                <p>{{ $t('newsletterEventRegistrationForm.leftText3') }}</p>
            </div>

            <div class="middle">
                <div class="top">
                    <p>
                        {{ $t('newsletterEventRegistrationForm.middleHeadlineA') }}
                        <span>{{ $t('newsletterEventRegistrationForm.middleHeadlineB') }}</span>
                        {{ $t('newsletterEventRegistrationForm.middleHeadlineC') }}
                    </p>
                </div>
                <div class="bottom">
                    <newsletter-event-registration-form class="dark" />
                </div>
            </div>

            <div class="right">
                <div class="top">
                    <p>
                        {{ $t('newsletterEventRegistrationForm.rightHeadlineA') }}
                        <span>{{ $t('newsletterEventRegistrationForm.rightHeadlineB') }}</span>
                        {{ $t('newsletterEventRegistrationForm.rightHeadlineC') }}
                    </p>
                </div>
                <div class="middle">
                    <a href="https://telekom-digitalx-content-develop.s3.amazonaws.com/Lange_Nacht_des_Mittelstandes_am%2023_Maerz_2021.ics" class="icon-calendar-plus">
                        <svg-icon icon="app/icon-calendar-plus"></svg-icon>
                    </a>
                </div>
                <div class="bottom">
                    <a href="https://telekom-digitalx-content-develop.s3.amazonaws.com/Lange_Nacht_des_Mittelstandes_am%2023_Maerz_2021.ics" class="btn blue icon-left">
                        <svg-icon icon="app/icon-arrow"></svg-icon>
                        <span>{{ $t('newsletterEventRegistrationForm.button2') }}</span>
                    </a>
                </div>
            </div>
        </div>

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

			name: 'NewsletterEventTeaser',

            props: {

			},

			data() {
				return {};
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
                "newsletterEventRegistrationForm.headerA": "Jetzt vormerken:",
                "newsletterEventRegistrationForm.headerB": "der Mittelstand spricht Klartext",
                "newsletterEventRegistrationForm.leftHeadline1": "Save-the-date:",
                "newsletterEventRegistrationForm.leftHeadline2": "23.03., ab 18 Uhr –",
                "newsletterEventRegistrationForm.leftHeadline3": "WIR ERINNERN SIE GERNE!",
                "newsletterEventRegistrationForm.leftText1": "Melden Sie sich unverbindlich an und wir senden Ihnen eine Erinnerungsmail zu oder speichern Sie sich direkt den Termin (via ICS File) im Kalender ab.",
                "newsletterEventRegistrationForm.leftText2": "Freuen Sie sich auf ein abwechslungsreiches Programm mit praxisnahen, branchenübergreifenden Insights: von Gastgewerbe über KI, Einzelhandel bis hin zu Logistik in einem Format von Unternehmer*Innen für Unternehmer*Innen.",
                "newsletterEventRegistrationForm.leftText3": "Wir freuen uns auf Sie!",
                "newsletterEventRegistrationForm.middleHeadlineA": "Nichts verpassen –",
                "newsletterEventRegistrationForm.middleHeadlineB": "Erinnerung",
                "newsletterEventRegistrationForm.middleHeadlineC": "per Mail",
                "newsletterEventRegistrationForm.rightHeadlineA": "Der Termin steht –",
                "newsletterEventRegistrationForm.rightHeadlineB": "Kalendereintrag",
                "newsletterEventRegistrationForm.rightHeadlineC": "direkt speichern",
                "newsletterEventRegistrationForm.button2": "Kalendereintrag"
            },


            "en": {
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



