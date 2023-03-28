<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="pageMagazineOverview__flat magOverStaff">
        <section class="no-spacing content text-center content-center">
            <div class="col-100 magOverStaff__wrapper">
                <div class="magOverStaff__text">
                    <h2 class="">{{ $t('magOverStaff.headline') }}</h2>
                    <p>{{ $t('magOverStaff.text1') }}</p>
                    <p>{{ $t('magOverStaff.text2') }}</p>
                    <p>{{ $t('magOverStaff.text3') }}</p>
                </div>
                <!-- img class="lazy magOverStaff__img" :data-src="basePath+'img/app/magazine/editorial_staff.jpg'" alt="" / -->
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

		name: 'MagazineOverviewStaff',

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
			"magOverStaff.headline": "Unsere Redaktion",
			"magOverStaff.text1": "Das Redaktionsteam informiert Sie umfassend über die vielfältigen Facetten der digitalen Transformation. Und das war noch nie so einfach, denn die Beiträge werden dort ausgespielt, wo Sie sich als Leser aufhalten: von Social Media, über dieses Online-Magazin bis hin zur Community-Plattform. Von spannenden Live-Formaten über Interviews bis hin zu Studien. Wir zeigen die Gesichter der Digitalisierung.",
			"magOverStaff.text2": "Passend dazu werden die Themen von Robert Weber, Dr. Ute Cohen, Christoph Krause, Stephanie Kowalski und Dr. Lars Immerthal recherchiert, diskutiert und vertieft und sind jederzeit zum Nachlesen, -hören und -schauen für Sie verfügbar. Weitere Hintergründe können Sie in Beiträgen und Podcasts der Telekom und WirtschaftsWoche erfahren.",
			"magOverStaff.text3": "Exzellent recherchiert und aufbereitet – so bleiben Sie stets auf dem Laufenden."
		},
		"en": {
			"magOverStaff.headline": "Our editorial team",
			"magOverStaff.text1": "The editorial team provides you with comprehensive information on the many facets of the digital transformation. And never has this been easier, with articles accessible on whichever channels you, as the reader, use the most: From social media, to this online magazine, or even the community platform. From exciting live formats, to interviews and studies – we show the different faces of digitalization.",
			"magOverStaff.text2": "As such, the topics raised by Robert Weber, Dr Ute Cohen, Christoph Krause, Stephanie Kowalski, and Dr. Lars Immerthal are researched, discussed, and further explored, and are available for reference – whether in text, audio, or visual format – at any time. Find out more about the backstories in articles and podcasts by Deutsche Telekom and WirtschaftsWoche.",
			"magOverStaff.text3": "Excellently researched and produced – to keep you updated at all times."
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


