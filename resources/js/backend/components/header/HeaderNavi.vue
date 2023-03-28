<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<nav ref="root" class="header-navi" :class="[naviType,{open:isOpenDropdown}]">

			<!-- DROPDOWN ICON -->
			<div v-if="isDropdown" class="header-navi-button" @click="toggleDropdown">
				<svg-icon :path="svgIcon" :class="{active:isOpenDropdown}"></svg-icon>
			</div>

			<!-- NAVI CONTENT -->
			<div ref="content" class="header-navi-content">
				<slot></slot>
			</div>

		</nav>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>


		import u from "umbrellajs";
		import {gsap} from 'gsap';


		export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'HeaderNavi',

			props: {
				type: 		{type: String, default: ""},				// force rendering type: "", "dropdown", "list"
				svgIcon: 	{type: String, default: "app/icon-navi"}	// file for navi icon
			},

			data() {
				return {
					isOpenDropdown: 	false,
					currentNaviType: 	"",
					listWidth: 			0,
					items: 				undefined,
					animation: 			undefined,
				};
			},

			computed: {
				isDropdown() 	{ return this.naviType == "dropdown"; },
				naviType() 	 	{ return this.type == "" ? this.currentNaviType : this.type.toLowerCase(); },
				currentWidth() 	{ return this.currentNaviType == "dropdown" || this.type == "dropdown" ? 40 : this.listWidth; }
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {

			},

			mounted() {

				this.initListWidth();
				this.initAnimation();

				// force a resize in header component
				window.dispatchEvent(new Event('resize'));
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				initListWidth() {

					// save all items of this navi
					this.items = u(this.$refs.root).find('.header-navi-item').nodes;

					// get total width of all navi items;
					this.items.forEach(item => { this.listWidth += this.outerWidth(item,true); });

					// add margin of container to list width
					this.listWidth += parseInt( getComputedStyle(this.$el).marginRight);
				},


				initAnimation() {

					this.animation = gsap.timeline({ paused:true });

					// animate navi button

					// animate content
					this.animation.to(this.$refs.content,{ duration:0.3, height:'auto', ease:'power2' });
				},


				toggleDropdown(e) {

					// update status
					if(!this.isDropdown) { return false; }
					this.isOpenDropdown = !this.isOpenDropdown;

					// animation
					this.animation.reversed(!this.isOpenDropdown).resume();

					// close all other navis
					this.$parent.navis.forEach( navi => { if(navi != this){ navi.isOpenDropdown = false; } });
				},


				closeDropdown() {

					if(!this.isDropdown) { return; }
					this.isOpenDropdown = false;
					this.animation.reversed(true).resume();
				},


				setToDropdown(toActive) {

					this.currentNaviType = toActive ? "dropdown" : this.type;
				},
			},


			/////////////////////////////////
			// WATCH
			/////////////////////////////////

			watch: {
				'$route' (to, from) { this.closeDropdown(); }
			}

		}; // end export

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


