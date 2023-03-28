<template>
    <div class="hero-section" :style="imageGradient">
      <section class="container-fluid">
        <div class="row">
          <div class="col-xl-9">
            <div class="">
              <div v-if="logo">
                <img v-if="logo.indexOf('http') === 0" :src="logo" :alt="title" class="logoHeadline__logo" />
                <svg-icon v-else :sprite="logo" class="logoHeadline__logo"></svg-icon>
              </div>

              <p v-if="subtitle" class="subtitle">
                <span v-if="subtitleTag && (tagPosition === 'before')">{{ subtitleTag }}</span>
                {{ subtitle }}
                <span v-if="subtitleTag && (tagPosition === 'after')">{{ subtitleTag }}</span>
              </p>

              <h1>{{ title }}</h1>
              <p v-if="text" v-html="text"/>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: "LibHero",
  props: {
    title: {type: String, required: false, default: null},
    subtitle: {type: String, required: false, default: null},
    subtitleTag: {type: String, required: false, default: null},
    tagPosition: { type: String, required: false, default: 'after' },
    text: {type: String, required: false, default: null},
    bgImage: {type: String, required: false, default: null},
    bgImageDarken: {type: String, required: false, default: '0.5'},
    logo: {type: String, required: false, default: null},
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
        const color1 = 'rgba(0, 0, 0, ' + this.bgImageDarken + ') 0%'
        const color2 = 'rgba(0, 0, 0, ' + this.bgImageDarken + ') 100%'
        imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ' center center no-repeat fixed;'
        imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ' center center no-repeat fixed;'
        imageStyle += 'background-size: cover;'
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
