<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="event-partner-hero">
    <!-- IMAGE -->
    <div class="event-partner-hero__image" :style="imageGradient">
      <section class="inner no-spacing">
        <div class="col-100">
          <div class="event-partner-hero__container">
            <div class="event-partner-hero__content">
              <div v-if="subtitle" class="event-partner-hero__subtitle">
                {{ subtitle }}
                <span v-if="subtitleTag">{{ subtitleTag }}</span>
              </div>
              <div class="event-partner-hero__title">
                {{ title }}
              </div>
              <p v-if="text" class="event-partner-hero__text" v-html="text"/>
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

  name: "EventPartnerHero",

  props: {
    title: {type: String, required: false, default: null},
    subtitle: {type: String, required: false, default: null},
    subtitleTag: {type: String, required: false, default: null},
    text: {type: String, required: false, default: null},
    bgImage: {type: String, required: false, default: null},
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
        const color1 = 'rgba(0, 0, 0, 0.3) 0%'
        const color2 = 'rgba(0, 0, 0, 0.3) 100%'
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
    "event-partner-hero.back": "Zurück"
  },
  "en": {
    "event-partner-hero.back": "Back"
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
