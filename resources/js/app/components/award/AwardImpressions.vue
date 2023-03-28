<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<section class="awardImpressions">
    <div class="container-fluid">
          <div class="col-100">
              <h2 class="pageaward__headline awardImpressions__headline">{{ headline }} <span>{{ year }}</span></h2>
        <div class="awardImpressions__text" v-html="text" />
        <slider
          v-if="gallery_slider.length"
          :items="gallery_slider"
          :options="{lazyload: true}"
          class="slider--large slider--award"
        >
          <template slot-scope="item">
                  <img
              :data-src="item.slide.url"
              :src="item.slide.url"
              :width="item.slide.width"
              :height="item.slide.height"
              class="slider__image tns-lazy-img"
              :alt="item.slide.alternativeText"
            />
          </template>
        </slider>
          <div class="mediaGallery mediaGallery--green">
          <media-gallery-double
            v-for="gallery in gallery_double"
            :key="'double' + gallery.id"
            :image1="gallery.image1.url"
            :image2="gallery.image2.url"
            :large="gallery.large"
          />
          <media-gallery-triple
            v-for="gallery in gallery_triple"
            :key="'triple' + gallery.id"
            :image1="gallery.image1.url"
            :image2="gallery.image2.url"
            :image3="gallery.image3.url"
          />
        </div>
          </div>
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

		name: 'awardImpressions',

		props: {
			headline: String,
			year: Number,
			text: String,
			gallery_slider: Array,
			gallery_double: Array,
			gallery_triple: Array
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

		mounted() {
			window.lazyload.update();
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
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<style lang="scss">

	</style>


	<style lang="scss" scoped>

	</style>






