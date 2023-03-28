<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="award-hero" :class="{loading: isLoading}">
    <!-- IMAGE -->
    <div v-if="item && item.image" class="award-hero__image" :style="imageGradient">
      <section class="container-fluid">
        <div class="col-100">
          <div class="award-hero__container">
            <!-- HEADLINE -->
            <h3 class="award-hero__headline" v-html="item.title"></h3>
            <!-- LOGO -->
            <div class="award-hero__logo">
              <img :src="item.logo" :alt="item.title" />
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

  name: "AwardHero",

  props: {
    hero: {type: Object, required: false},
  },

  data() {
    return {
      isLoading: true,
      item: {
        type: Object,
      },
    };
  },

  computed: {
    imageGradient() {
      let image = this.item.image;

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
      imageStyle += 'background: url("' + image + '");'
      return imageStyle;
    },

  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
  },

  mounted() {
    this.initItem();
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    initItem() {
      if (this.hero) {
        this.item = this.hero;
        this.isLoading = false;
      }
    },
  },

  /////////////////////////////////
  // WATCH
  /////////////////////////////////

  watch: {
    hero(newValue, oldValue) {
      this.initItem();
    },
  },
}; // end export
</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
