<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<section class="no-spacing">
<!--		<div class="col-100 speakerteasers">-->
<!--            &lt;!&ndash; Link zum Ticketshop &ndash;&gt;-->
<!--            <speaker-teaser v-if="this.$i18n.locale === 'de'"-->
<!--                :title="$t('eventsteaser.teaser1title')"-->
<!--                :image="basePath + 'img/app/event/teaser-digital-x-2021.jpg'"-->
<!--                :text="$t('eventsteaser.teaser1text')"-->
<!--                :button="$t('pageevent.introButton')"-->
<!--                href="https://secure.digital-x.eu/DX/DIGITALX2021?ui_locales=DE-de"-->
<!--                target="_blank" />-->
<!--            <speaker-teaser v-else-->
<!--                :title="$t('eventsteaser.teaser1title')"-->
<!--                :image="basePath + 'img/app/event/teaser-digital-x-2021.jpg'"-->
<!--                :text="$t('eventsteaser.teaser1text')"-->
<!--                :button="$t('pageevent.introButton')"-->
<!--                href="https://secure.digital-x.eu/DX/DIGITALX2021?ui_locales=en-us"-->
<!--                target="_blank" />-->
<!--			&lt;!&ndash; Link zum Event-->
<!--			<speaker-teaser-->
<!--				:title="$t('eventsteaser.teaser1title')"-->
<!--				:image="basePath + 'img/app/event/teaser-digital-x-2021.jpg'"-->
<!--				:text="$t('eventsteaser.teaser1text')"-->
<!--				:button="$t('eventsteaser.teaser1button')"-->
<!--				:href="$router.resolve(link('events.detail', {slug: 'digital-x-2021'})).href" /> &ndash;&gt;-->
<!--            &lt;!&ndash; Link zur Mediathek &ndash;&gt;-->
<!--			<speaker-teaser v-if="this.$i18n.locale === 'de'"-->
<!--				:title="$t('eventsteaser.teaser2title')"-->
<!--				:image="basePath + 'img/app/event/teaser-digital.jpg'"-->
<!--				:text="$t('eventsteaser.teaser2text')"-->
<!--				:button="$t('eventsteaser.teaser2button')"-->
<!--				:href="$router.resolve(link('events.detail', {slug: 'mediathek'})).href" />-->
<!--			<speaker-teaser v-else-->
<!--				:title="$t('eventsteaser.teaser2title')"-->
<!--				:image="basePath + 'img/app/event/teaser-digital.jpg'"-->
<!--				:text="$t('eventsteaser.teaser2text')"-->
<!--				:button="$t('eventsteaser.teaser2button')"-->
<!--				:href="$router.resolve(link('events.detail', {slug: 'media-library'})).href" />-->
<!--		</div>-->
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

		name: 'EventsteaserSection',

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
				"eventsteaser.teaser1title": "Nächstes Event",
				"eventsteaser.teaser1text": "Europas führende Digitalisierungsinitiative, die DIGITAL X, wird 2021 erstmalig in einem hybriden Format durchgeführt. Wir leben damit die Vision der digitalen Zukunft: anfassbar und gleichzeitig virtuell. Auf unterschiedlichen Themenbühnen beleuchten nationale und internationale Top-Speaker die relevantesten Digitalisierungsthemen – ehrlich, kritisch und fachlich versiert.",
				"eventsteaser.teaser1button": "DIGITAL X 2021",
				"eventsteaser.teaser2title": "Letztes Event",
				"eventsteaser.teaser2text": "100 % digital startete das Live-Event des Jahres und ergänzte die Digitalisierungsinitiative der DIGITAL X um eine digitale Eventreihe. Gestartet hat die Reihe mit einem erfolgreichen Auftakt am 19. Mai 2020 und am 23. Juni 2020, bei dem 25 Top-Speaker aus sieben Städten in drei Kontinenten zusammen mit Teilnehmern und Partnern den Tag zu einem gemeinsamen Erlebnis machten.",
				"eventsteaser.teaser2button": "Rückblick"
			},
			"en": {
				"eventsteaser.teaser1title": "Next event",
				"eventsteaser.teaser1text": "DIGITAL X 2021 will be held as a hybrid, independent format with its usual high quality standards as Europe’s leading digitalization initiative: featuring various themed stages and top international and national speakers. We shed light on the most relevant digitalization issues –honestly, critically and from a background of professional experience.",
				"eventsteaser.teaser1button": "DIGITAL X 2021",
				"eventsteaser.teaser2title": "Last event",
				"eventsteaser.teaser2text": "The live event of the year is being held 100% digitally. It adds a digital event series to the DIGITAL X digitalisation initiative. . The series had a successful kick-off on 19 May 2020 and on 23 June 2020 with 25 top speakers from seven cities on three continents joining participants and partners in making the day a shared experience.",
				"eventsteaser.teaser2button": "Review"
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






