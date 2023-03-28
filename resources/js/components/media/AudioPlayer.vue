<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div ref="audioRoot" class="audio-player">

		<audio ref="audio" preload="auto">
			<source v-for="item in sourceData" :src="item.src" :type="item.type" :key="item.src" />
		</audio>

	</div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		/**
		* 	HOW TO USE:
		*
		* 	<audio-player source="..." options="..."></audio-player>
		*
		*
		*	SOURCE:
		*
		*	valid values: ['intro.mp3','intro.ogg'], 'intro.mp3' or 'intro' (shorthand for Array version => intro.mp3, intro.ogg)
		*
		*
		*	OPTIONS:
		*
		*	Most options are passed to Plyr but some are special properties for this component
		*
		* 	options: {
		*		controls: 	[],									// defines a white list for control elements if set. An empty array hides all elements
		*		preload: 	'auto',
		*		muted: 		true,
		*		autoplay: 	true,
		*		loop: 		{active: true},
		*	},
		*
		*	NOTES:
		*	Use absolute paths for audio if route changing not working
		*/

		//import Plyr from 'plyr/dist/plyr.polyfilled.js'; // Internet Explorer 11 Support
		import u from 'umbrellajs';
		import {IS_SSR} from "../../app/plugins/ssrSwitch";


		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'AudioPlayer',

			props: {
				source: 	{ type: [String, Array], required: true },
				options: 	{ type: Object, required: false, default: () => { return {} } }
			},

			data() {
				return {
					sourceData: 	[],
					player: 		undefined
				};
			},

			computed: {

			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////


			mounted() {

			  const Plyr = require('plyr');

				// convert source prop to array
				if(typeof this.source == 'string') {

					var base = this.source.startsWith('http') ? '' : this.basePath;

					if(this.source.endsWith('.mp3') || this.source.endsWith('.ogg')) { this.sourceData = [ base + this.source ]; }
					else { this.sourceData = [base + this.source + '.mp3', base + this.source+'.ogg']; }
				}

				// add correct mime-types to source data
				for (var i = 0; i < this.sourceData.length; i++) {
					this.sourceData[i] = { src: this.sourceData[i] };
					if(this.sourceData[i].src.endsWith('.mp3')) 		{ this.sourceData[i].type = 'audio/mpeg'; }
					else if(this.sourceData[i].src.endsWith('.ogg')) 	{ this.sourceData[i].type = 'audio/ogg'; }
				}

				// adapt user options for correct settings
				this.adaptOptions();

				// init Plyr audio library

				this.options.iconUrl = this.$store.getters.env.base_url + 'svg/plyr.svg';

				this.player = new Plyr(this.$refs.audio, this.options);
				this.player.toggleControls(false);
			},

			beforeDestroy() {

				this.player.destroy();
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				adaptOptions() {

					// adapt control elements if not set
					if(!this.options.controls) {
						this.options.controls = ['play', 'progress', 'current-time', 'duration'];
					}

					// correct autoplay
					if(this.options.autoplay) {
						this.options.muted = true;
						this.options.storage = { enabled: false }; // [Plyr Bugfix] autoplay won't work in safari
					}
				},
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



