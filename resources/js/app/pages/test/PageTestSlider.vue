<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<h1>Design Components - Slider</h1>


		<!-- SLIDER DEFAULT -->
		<section class="section-test">
			<h2>Slider Default</h2>
			<slider :items="sliderItems" :itemsPerPage="3" pageClass="podpanel__episodes">

				<!-- ITEM HTML -->
				<template slot-scope="item">
					<div class="podpanel__episode">
						<div class="podpanel__logo-episode"><svg-icon icon="app/icon-podcast"></svg-icon></div>
						<div>
							<h4 class="podpanel__episode-title">{{ item.title }}</h4>
							<p class="podpanel__episode-desc">{{ item.desc }}</p>
						</div>
					</div>
				</template>

			</slider>
		</section>


		<!-- SLIDER GREEN -->
		<section class="section-test">
			<h2>Slider Green</h2>
			<slider :items="sliderItems" :itemsPerPage="3" class="slider--green" pageClass="podpanel__episodes">

				<!-- ITEM HTML -->
				<template slot-scope="item">
					<div class="podpanel__episode">
						<div class="podpanel__logo-episode"><svg-icon icon="app/icon-podcast"></svg-icon></div>
						<div>
							<h4 class="podpanel__episode-title">{{ item.title }}</h4>
							<p class="podpanel__episode-desc">{{ item.desc }}</p>
						</div>
					</div>
				</template>

			</slider>
		</section>


		<!-- SLIDER LARGE -->
		<section class="section-test">
			<h2>Slider Large</h2>
			<slider :items="sliderItems" :itemsPerPage="3" class="slider--large" pageClass="podpanel__episodes">

				<!-- ITEM HTML -->
				<template slot-scope="item">
					<div class="podpanel__episode">
						<div class="podpanel__logo-episode"><svg-icon icon="app/icon-podcast"></svg-icon></div>
						<div>
							<h4 class="podpanel__episode-title">{{ item.title }}</h4>
							<p class="podpanel__episode-desc">{{ item.desc }}</p>
						</div>
					</div>
				</template>

			</slider>
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

			name: 'PageTestSlider',

			metaInfo: {
				title: 'tilte',
				titleTemplate: 	'%s | Test Slider'
			},

			props: {
			},

			data() {
				return {
					sliderItems: [
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
						},
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
						},
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
						},
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
						},
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
						},
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
						},
						{
							title: "DIGITAL X #106",
							desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed."
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
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<style lang="scss">

	</style>


	<style lang="scss" scoped>

	</style>



