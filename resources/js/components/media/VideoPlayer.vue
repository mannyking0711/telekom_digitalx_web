<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div ref="videoRoot" :class="['video-player',{ background:options.background }]">

    <video ref="video" preload="auto">
      <source v-for="item in sourceData" :src="item.src" :type="item.type" :key="item.src"/>
    </video>
    <p class="video-caption">{{this.caption}}</p>
  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

/**
 *  HOW TO USE:
 *
 *  <video-player source="..." options="..."></video-player>
 *
 *
 *  SOURCE:
 *
 *  valid values: ['intro.mp4','intro.webm'], 'intro.mp4' or 'intro' (shorthand for Array version => intro.mp4, intro.webm)
 *
 *
 *  OPTIONS:
 *
 *  Most options are passed to Plyr but some are special properties for this component
 *
 *  options: {
 *		poster: 	'video/intro/intro-poster.jpg',		// preview image for video player
 *		controls: 	[],									// defines a white list for control elements if set. An empty array hides all elements
 *		preload: 	'auto',
 *		muted: 		true,
 *		autoplay: 	true,
 *		loop: 		{active: true},
 *		background: true,								// [Special] Use this video player as a background video fot other content elements
 *	},
 *
 *  NOTES:
 *  Use absolute paths for videos if route changing not working
 */

//import Plyr from 'plyr/dist/plyr.polyfilled.js'; // Internet Explorer 11 Support

import u from 'umbrellajs';


export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'VideoPlayer',

  props: {
    source: {type: [String, Array], required: true},
    caption: {type: String},
    options: {
      type: Object, required: false, default() {
        return {background: false};
      }
    }
  },
	components: {
	},

  data() {
    return {
      sourceData: [],
      player: undefined,
      poster: ""
    };
  },

  computed: {},


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  mounted() {

  	const Plyr = require('plyr');

    // convert source prop to array
    if (typeof this.source == 'string') {
      if (this.source.endsWith('.mp4') || this.source.endsWith('.webm')) {
        this.sourceData = [this.source];
      } else {
        this.sourceData = [this.source + '.mp4', this.source + '.webm'];
      }
    }

    // add correct mime-types to source data
    for (var i = 0; i < this.sourceData.length; i++) {
      this.sourceData[i] = {src: this.sourceData[i]};
      if (this.sourceData[i].src.endsWith('.mp4')) {
        this.sourceData[i].type = 'video/mp4';
      } else if (this.sourceData[i].src.endsWith('.webm')) {
        this.sourceData[i].type = 'video/webm';
      }
    }

    // add attributes to video element
    this.setHtmlAttributes();

    // adapt user options for correct settings
    this.adaptOptions();

    // init Plyr video library
    this.options.iconUrl = this.$store.getters.env.base_url + 'svg/plyr.svg';
    this.player = new Plyr(this.$refs.video, this.options);
    this.player.toggleControls(false);

    // init events backkground video
    if (this.options.background) {
      window.addEventListener('resize', this.onResize);
      this.onResize(undefined);
    }
  },

  beforeDestroy() {

    this.player.destroy();

    // remove background video events
    window.removeEventListener('resize', this.onResize);
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    setHtmlAttributes() {

      u(this.$refs.video).attr('playsinline', 'playsinline');
      if (this.options.poster) {
        u(this.$refs.video).attr('poster', this.options.poster);
      }
    },


    adaptOptions() {

      // adapt control elements if not set
      if (!this.options.controls) {
        this.options.controls = ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'];
      }

      // adapt options if background video
      if (this.options.background) {
        this.options.controls = [];
        this.options.clickToPlay = false;
        this.options.fullscreen = {enabled: false, fallback: false, iosNative: false};
        this.options.autoplay = true;
      }

      // correct autoplay
      if (this.options.autoplay) {
        this.options.muted = true;
        this.options.storage = {enabled: false}; // [Plyr Bugfix] autoplay won't work in safari
      }
    },


    onResize(e) {

      var size = u(this.$refs.videoRoot).size();
      var w, h = 0;

      // set cover size for video
      if ((size.height / size.width) > 9 / 16) {
        h = size.height;
        w = h * (16 / 9);
      } else {
        w = size.width;
        h = w * (9 / 16);
      }

      console.log('resize', w, h);

      // set new video size
      u(this.$refs.videoRoot).attr({style: `width:${w}px;height:${h}px;`});
    }
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



