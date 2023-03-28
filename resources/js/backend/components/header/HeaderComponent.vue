<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<header>

			<!-- LOGO -->
			<router-link ref="logo" id="header-logo" :to="{path:'/'}">
				<svg-icon sprite="app/digitalx-logo"></svg-icon>
			</router-link>

			<!-- NAVI -->
			<header-navi v-if="$auth.check()">
				<router-link class="header-navi-item" :to="link('backend')">Dashboard</router-link>
				<router-link class="header-navi-item" :to="link('backend.user.info')">{{ $t('Benutzer') }}</router-link>
				<router-link class="header-navi-item" :to="{path:'/logout'}">Logout</router-link>
				<language-select class="header-navi-item"></language-select>
			</header-navi>

		</header>

	</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>


		import {IS_SSR} from "../../../app/plugins/ssrSwitch";

    export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'HeaderComponent',

			props: {

			},

			data() {
				return {
					currentWidth: 100000, 	// force shrink resize on init
					logoNaviSpace: 50, 		// add extra space between logo and navi for toggling dropdown layout
					navis: [],				// filter <header-navi> from all child components
				};
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {
        if (IS_SSR === true) {
          return;
        }

        // init events
				window.addEventListener('resize', this.onResize);
			},

			mounted() {

				// force update of navis
				this.onResize(undefined);
			},

			destroyed() {

				window.removeEventListener("resize", this.onResize);
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				onResize(e) {

					// update navi references
					this.navis = this.$children.filter( i => i.$options.name == 'HeaderNavi' );

					// detect shrink or expand resize
					var isResizeShrink 	= this.currentWidth < this.$el.offsetWidth ? false : true;
					this.currentWidth 	= this.$el.offsetWidth;

					// Iterate all navis (on shrink resize in reversed order)
					( isResizeShrink ? this.navis.slice().reverse() : this.navis ).forEach( item => this.updateNaviType(item,isResizeShrink) );
				},


				updateNaviType(navi, isResizeShrink) {

					// close if open dropdown
					navi.closeDropdown();

					// change layout only for default type (and not for a forced type by props)
					if(navi.$props.type != "") { return; }

					// skip if already correct class for layout
					if(isResizeShrink && navi.isDropdown) 			{ return; }
					else if(!isResizeShrink && !navi.isDropdown)	{ return; }

					// get available space
					var availableSpace = this.getAvailableNaviSpace();

					// update rendering
					if(isResizeShrink && availableSpace < 0) {
						navi.setToDropdown(true);
					}
					else if(!isResizeShrink) {
						navi.setToDropdown(false);

						// double check new navi width
						if(this.getAvailableNaviSpace()<0) { navi.setToDropdown(true); }
					}
				},


				getAvailableNaviSpace() {

					// get current width of all navis
					var naviWidth = 0;
					this.navis.forEach( item => { naviWidth += item.currentWidth; });

					// return available space
					return this.$el.offsetWidth - this.outerWidth(this.$refs.logo,true) - naviWidth - this.logoNaviSpace;
				},
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


