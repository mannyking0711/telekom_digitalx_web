<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div>
    <div v-if="theme && (theme === 'B')" class="award-intro" :style="imageGradient">
      <!-- 2022 design -->
      <section class="container-fluid">
        <div class="col-100">
          <div class="award-intro__container">
            <h5 v-if="tagline" class="award-intro__tagline">{{ tagline }}</h5>
            <h1 class="award-intro__headline">{{ headline }}</h1>
            <h3 v-if="subheadline" class="award-intro__subheadline">{{ subheadline }}</h3>
            <div v-if="image && image.url || (cta === 'side')" class="award-intro__grid">
              <div class="award-intro__container-text">
                <div v-html="text"/>
                <a v-if="cta === 'text'" :href="url" target="_blank" class="btn icon-left">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ button }}</span>
                </a>
              </div>
              <div class="award-intro__container-image">
                <img v-if="image && image.url" class="lazy award-intro__image" :data-src="image.url" alt="" :src="image.url">
                <div v-if="image_title" class="award-intro__image-title">{{ image_title }}</div>
                <div v-if="image_subtitle" class="award-intro__image-subtitle">{{ image_subtitle }}</div>
                <a v-if="cta === 'side'" :href="url" target="_blank" class="btn icon-left awardIntro__btn">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ button }}</span>
                </a>
              </div>
            </div>
            <div v-else>
              <div v-html="text"/>
              <a v-if="cta === 'text'" :href="url" target="_blank" class="btn icon-left">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ button }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else class="pageaward__intro-spacing">
      <!-- PRE 2022 design -->
      <div class="awardIntro__background"></div>
      <section class="container-fluid awardIntro">
        <div class="col-100">
          <section class="no-spacing awardIntro__content">
            <h1 class="col-100 awardIntro__headline">{{ headline }}</h1>
            <div class="col-70">
              <h3 v-if="subheadline" class="awardIntro__subheadline">{{ subheadline }}</h3>
              <h3 v-if="tagline" class="awardIntro__tagline">{{ tagline }}</h3>
              <div class="awardIntro__mobile-only">
                <img alt="" class="lazy awardIntro__logo" :data-src="image.url" :src="image.url">
                <a v-if="cta === 'side'" :href="url" target="_blank" class="btn icon-left awardIntro__btn">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ button }}</span>
                </a>
              </div>
              <div class="awardIntro__desc">
                <div v-html="text"/>
                <a v-if="cta === 'text'" :href="url" target="_blank" class="btn icon-left">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ button }}</span>
                </a>
              </div>
            </div>
            <div class="col-30">
              <div class="awardIntro__desktop-only">
                <img class="lazy awardIntro__logo" :data-src="image.url" alt="" :src="image.url">
                <a v-if="cta === 'side'" :href="url" target="_blank" class="btn icon-left awardIntro__btn">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ button }}</span>
                </a>
              </div>
              <share-teaser></share-teaser>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import ShareTeaser from "../teaser/ShareTeaser";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'AwardIntro',

  props: {
    headline: String,
    tagline: String,
    subheadline: String,
    image: Object,
    image_title: String,
    image_subtitle: String,
    text: String,
    cta: String,
    button: String,
    url: String,
    watermark: Object,
    theme: {
      type: String,
      default: 'theme-a'
    },
  },

  components: {
    ShareTeaser
  },

  data() {
    return {};
  },


  computed: {
    imageGradient() {
      // let deg = '135deg'
      // let color1 = '#000 0%'
      // let color2 = 'rgba(255, 255, 255, 0) 50%'
      // let color3 = 'rgba(255, 255, 255, 0) 100%)'

      let imageStyle = 'display: -webkit-box !important;'
      imageStyle += 'display: -ms-flexbox !important;'
      imageStyle += 'display: flex !important;'
      imageStyle += 'width: 100% !important;'

      // imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ', ' + color3 + ', url("' + image + '");'
      // imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ', ' + color3 + ', url("' + image + '");'
      if (this.watermark && this.watermark.url) {
        imageStyle += 'background: url("' + this.watermark.url + '");'
      }

      return imageStyle;
    },
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {}

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






