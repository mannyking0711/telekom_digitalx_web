<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="eventlocations no-spacing">
    <div class="">
      <!-- 1 row / band roll -->
      <div class="" :class="'band__row__' + color" v-if="data.title">

        <h3 class="band__headline" :class="{ 'band__headline__nowrap' : nowrap }">
          {{ data.title }}
        </h3>
      </div>
      <!-- end row -->

      <!-- 2 row / slider -->
      <div class="eventlocations__slider" v-if="data.items.length > 0">
        <slider
            :items="data.items"
            :options="sliderOptions"
            class="slider--large"
        >
          <template slot-scope="item">
            <img
                :data-src="item.preview"
                :src="item.preview"
                :alt="item.title"
                class="eventlocations__slider-image tns-lazy-img"
                @click="openModal(item)"
            />
          </template>
        </slider>
      </div>
      <!-- end row -->

      <!-- The Modal/Lightbox -->
      <div id="myModal" class="modal" :class="{ active: showModal }">
        <span class="close cursor" @click="closeModal()">&times;</span>
        <div class="modal-content">
          <div
              v-for="(image, index) in data.items"
              :key="index"
              class="mySlides"
          >
            <img :src="image.large" style="width:100%" />
          </div>
        </div>
        <!-- Next/previous controls -->
        <a class="prev" @click="nextSlide(-1)">&#10094;</a>
        <a class="next" @click="nextSlide(1)">&#10095;</a>
      </div>
      <!-- end lightbox -->

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

  name: 'EventLocations',

  props: {
    data: { type: Object, required: true },
    nowrap: { type: Boolean, required: false, default: true },
    color: { type: String, required: false, default: 'blue' },
  },

  data() {
    return {
      showModal: false,

      slideIndex: 1,

      sliderOptions: {
        responsive: {
          800: { items: 2, edgePadding: 50 },
          1000: { items: 3, edgePadding: 150 },
          1300: { items: 4, edgePadding: 150 },
        },
        edgePadding: 0,
        lazyload: true,
        infinite: true,
        rows: 1,
        arrows: true,
        nav: false,
        items: 1,
        slideBy: 1,
        rewind: false,
      },
    }
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {},

  mounted() {},

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    openModal(slide) {
      this.showSingleSlide(slide)
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    },

    nextSlide(n) {
      this.slideIndex += n
      this.showSlides(this.slideIndex)
    },

    showSingleSlide(slide) {
      let slides = document.getElementsByClassName('mySlides')
      let slideIndexMatch = Object.keys(slides).filter(
        (i) =>
          slides[i].getElementsByTagName('img')[0].getAttribute('src') ===
          slide.large
      )

      // hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }

      // show match slide
      slides[slideIndexMatch].style.display = 'block'
    },

    showSlides(n) {
      var i
      var slides = document.getElementsByClassName('mySlides')

      if (n > slides.length) {
        this.slideIndex = 1
      }

      if (n < 1) {
        this.slideIndex = slides.length
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }

      if (slides[this.slideIndex - 1]) {
        const selectedImgUrl = slides[this.slideIndex - 1]
          .getElementsByTagName('img')[0]
          .getAttribute('src')

        for (i = 0; i < slides.length; i++) {
          const imgUrl = slides[i]
            .getElementsByTagName('img')[0]
            .getAttribute('src')

          if (selectedImgUrl == imgUrl) {
            slides[i].style.display = 'block'
            return true
          }
        }
      }
    },
  },
} // end export
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
