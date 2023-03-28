<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="speaker-hero">
    <!-- IMAGE -->
    <div class="speaker-hero__image" :style="imageGradient">
      <section class="inner no-spacing">
        <div class="col-100">
          <div class="speaker-hero__container">
            <div class="speaker-hero__back btn icon-left" @click="$router.go(-1)">
              <svg-icon class="svg-icon" icon="app/icon-arrow"></svg-icon>
              <span>{{ $t('speaker-hero.back') }}</span>
            </div>
            <div class="speaker-hero__grid">
              <div class="speaker-hero__col1">
                <img v-if="detailImage" :src="detailImage" :alt="fullname"/>
              </div>
              <div class="speaker-hero__col2">
                <div>
                  <h1 class="speaker-hero__headline">
                    {{ name }} {{ surname }}
                  </h1>
                  <h3 class="speaker-hero__subheadline">
                    {{ subline }}
                  </h3>
                </div>
                <div class="speaker-hero__company">
                  {{ company }}
                </div>

                <!-- socials -->
                <div v-if="hasSocial" class="speaker-hero__socials">
                  <span>{{ $t('speaker-hero.follow') }}</span>
                  <a v-if="website" class="speaker-hero__social-link" :href="website" target="_blank">
                    <svg-icon icon="app/icon-link"></svg-icon>
                  </a>
                  <a v-if="linkedin" class="speaker-hero__social-link" :href="linkedin" target="_blank">
                    <svg-icon icon="app/icon-linkedin"></svg-icon>
                  </a>
                  <a v-if="xing" class="speaker-hero__social-link" :href="xing" target="_blank">
                    <svg-icon icon="app/icon-xing"></svg-icon>
                  </a>
                  <a v-if="twitter" class="speaker-hero__social-link" :href="twitter" target="_blank">
                    <svg-icon icon="app/icon-twitter"></svg-icon>
                  </a>
                  <a v-if="facebook" class="speaker-hero__social-link" :href="facebook" target="_blank">
                    <svg-icon icon="app/icon-facebook"></svg-icon>
                  </a>
                  <a v-if="youtube" class="speaker-hero__social-link" :href="youtube" target="_blank">
                    <svg-icon icon="app/icon-youtube"></svg-icon>
                  </a>
                  <a v-if="instagram" class="speaker-hero__social-link" :href="instagram" target="_blank">
                    <svg-icon icon="app/icon-instagram"></svg-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: "SpeakerHero",

  props: {
    name: {type: String, required: false, default: null},
    surname: {type: String, required: false, default: null},
    subline: {type: String, required: false, default: null},
    bgImage: {type: String, required: false, default: null},
    detailImage: {type: String, required: false, default: null},
    fullname: {type: String, required: false, default: ''},
    company: {type: String, required: false, default: null},
    website: {type: String, required: false, default: null},
    linkedin: {type: String, required: false, default: null},
    xing: {type: String, required: false, default: null},
    twitter: {type: String, required: false, default: null},
    facebook: {type: String, required: false, default: null},
    youtube: {type: String, required: false, default: null},
    instagram: {type: String, required: false, default: null},
  },

  computed: {
    imageGradient() {
      const deg = '180deg'
      let imageStyle = 'display: -webkit-box !important;'
      imageStyle += 'display: -ms-flexbox !important;'
      imageStyle += 'display: flex !important;'
      imageStyle += 'width: 100% !important;'

      if (this.bgImage) {
        const image = 'url("' + this.bgImage + '")'
        const color1 = 'rgba(26, 60, 93, 0) 50%'
        const color2 = 'rgba(13, 31, 48, 1) 100%'
        imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ';'
        imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ';'
      } else {
        const color1 = 'rgba(26, 60, 93, 1) 0%'
        const color2 = 'rgba(13, 31, 48, 1) 100%'
        imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ');'
        imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ');'
      }

      return imageStyle;
    },

    hasSocial() {
      return this.website || this.linkedin || this.xing || this.twitter || this.facebook || this.youtube || this.instagram
    },
  },
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
    "speaker-hero.back": "Zurück",
    "speaker-hero.follow": "Speaker folgen:"
  },
  "en": {
    "speaker-hero.back": "Back",
    "speaker-hero.follow": "Follow speaker:"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
