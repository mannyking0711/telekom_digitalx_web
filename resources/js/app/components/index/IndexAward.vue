<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<section class="index-award inner">

			<!-- COPY -->
			<div class="col-30">
				<img alt="" class="lazy index-award-logo" :data-src="basePath+'img/app/index/index-award-logo.jpg'">
				<p style="text-align:center;">
					{{ $t('indexaward.copy') }}
				</p>
<!--				<p style="text-align:center;">-->
<!--					<router-link class="btn purple" :to="link('award', {year: 2020})">{{ $t('indexaward.button') }}</router-link>-->
<!--				</p>-->
			</div>

			<!-- PICTURE DE-->
			<div v-if="$i18n.locale ==='de'" class="col-70">
<!--				<a href="https://telekom-digitalx-content-develop.s3.eu-central-1.amazonaws.com/WiWo_DCA_Beileger_210x280.pdf" target="_blank">-->
					<img alt="" class="lazy index-award-dca-2020" :data-src="basePath+'img/app/index/index-dca.jpg'">
<!--					<p style="text-align:center;">-->
<!--						{{ $t('indexaward.copyVideo') }}-->
<!--					</p>-->
<!--				</a>-->
			</div>

			<!-- VIDEO EN-->
			<div v-if="$i18n.locale ==='en'" class="col-70">
				<video-player class="pagevid__player pagevid__full-width" source="https://telekom-digitalx-content-develop.s3.eu-central-1.amazonaws.com/video_demo_9bc0d4b383.mp4" />
				<p style="text-align:center;">
					{{ $t('indexaward.copyVideo') }}
				</p>
				<article-info colorbox="purple" class="pagevid__articleinfo articleinfo--large" published="07.09.2020" author="DIGITAL X" />
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
				"indexaward.copy": "Der Digital Champions Award (DCA) ist ein gemeinsamer Award der Telekom und der WirtschaftsWoche mit dem Ziel, die bedeutendsten Digitalisierungsprojekte mittelständischer Unternehmen zu prämieren und einer breiten Öffentlichkeit näherzubringen.",
				"indexaward.button": "DIGITAL CHAMPIONS AWARD 2020",
				"indexaward.copyVideo": "Lesen Sie hier alles über den digitalen Vorreiter und Preisträger 2020.",
				"cta": "Starten Sie hier"
			},


			"en": {
				"indexaward.copy": "The Digital Champions Award (DCA) is an award presented jointly by Deutsche Telekom and WirtschaftsWoche, aimed at recognizing the most significant digitalization projects carried out by SMEs, and making them accessible to a broader audience.",
				"indexaward.button": "DIGITAL CHAMPIONS AWARD 2020",
				"indexaward.copyVideo": "Digital pioneers are already defining what the age of digitalization is all about.",
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


