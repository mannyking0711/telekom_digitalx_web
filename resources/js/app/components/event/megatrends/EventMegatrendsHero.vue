<template>
  <div class="event-megatrends-hero">
    <!-- IMAGE -->
    <div class="event-megatrends-hero__image" :style="imageGradient">
      <section class="inner no-spacing">
        <div class="col-100">
          <div class="event-megatrends-hero__container">
            <div class="event-megatrends-hero__content">
              <div v-if="subtitle" class="event-megatrends-hero__subtitle">
                {{ subtitle }}
                <span v-if="subtitleTag">{{ subtitleTag }}</span>
              </div>
              <div class="event-megatrends-hero__title">
                {{ title }}
              </div>
              <p v-if="text" class="event-megatrends-hero__text" v-html="text"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventMegatrendsHero",
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
};
</script>