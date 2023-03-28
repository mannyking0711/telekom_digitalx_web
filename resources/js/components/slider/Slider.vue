<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div ref="root" class="slider">

		<!-- SLIDER CONTENT -->
		<div ref="slider">
			<div :class="pageClass" v-for="page in pageCount" :key="page">
				<div v-for="(item, index) in itemCountInPage(page)" :key="index">
					<slot v-bind="item"></slot>
				</div>
			</div>
		</div>

		<!-- SLIDER CONTROLS -->
		<div v-show="controls" class="slider__controls" ref="controls">
			<svg-icon ref="buttonPrev" icon="app/icon-arrow" class="slider__arrow slider__arrow--left"></svg-icon>
			<ul ref="nav" class="slider__bullets">
				<li v-for="page in pageCount" :key="page" class="slider__bullet"></li>
			</ul>
			<svg-icon ref="buttonNext" icon="app/icon-arrow" class="slider__arrow slider__arrow--right"></svg-icon>
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

			name: 'Slider',

			props: {
				controls:		{ type: Boolean, default: true },			// show cotrols (prev, next, bullets)
				items: 		  	{ type: Array, default() { return []; } }, 	// data of list
				itemsPerPage: 	{ type: Number, default: 1 },				// how many items shall be visible at once
				pageClass:      { type: String, default: '' },				// assign a class to each page
				options:		{ type: Object, default() { return {}; } }	// add or overwrite config options
			},

			data() {
				return {
					slider: undefined,
				};
			},

			computed: {
				// how many pages are there based on how many items there are in total
				// and how many of them are visible on each page
				pageCount() {
					return Math.ceil(this.items.length / this.itemsPerPage);
				}
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {

			},

			mounted() {
				this.initTinySlider();
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				initTinySlider() {
					var {tns} = require('tiny-slider/src/tiny-slider');

					// TinySlider options
					var defaultOptions = {
						slideBy: 			'page',
						mouseDrag: 			true,
						swipeAngle: 		50,
						preventScrollOnTouch: 'auto',
						autoHeight: 		true,
                        container: 		    this.$refs.slider,
                        controlsContainer:  this.$refs.controls,
                        navContainer:       this.$refs.nav,
                        prevButton:         this.$refs.buttonPrev.$el,
                        nextButton:         this.$refs.buttonNext.$el
                    };

					// init TinySlider library
					this.slider = tns({...defaultOptions, ...this.options});
					this.slider.events.on('indexChanged',(info,e)=>{ this.onIndexChanged(info,e); });
					this.slider.events.on('transitionStart',(info,e)=>{ this.onTransitionStart(info,e); });

				},

				// helper method used while looping through the items
				itemCountInPage(index) {
					return this.items.slice((index - 1) * this.itemsPerPage, index * this.itemsPerPage)
				},

				onIndexChanged(info,e) {

				},


				onTransitionStart(info,e) {

				},
			},


		}; // end export

	</script>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    STYLE
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<style lang="scss" scoped>

	</style>
