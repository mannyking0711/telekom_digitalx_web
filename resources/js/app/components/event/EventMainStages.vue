<template>
  <div class="eventMainStages">
    <div class="container">
      <!-- 1 row -->
      <div class="row">
        <div class="col-12">
          <h3 class="eventMainStages__headline" v-html="getLangOfString('headline')"></h3>
        </div>
        <div class="col-6 col-12-sm"></div>
      </div>

      <!-- 2 row / text-image -->
      <div class="row">
        <div class="col-6 col-12-sm">
          <p v-html="getLangOfString('description')"></p>
        </div>
        <div class="col-6 col-12-sm">
          <img :src="data.image1 ? data.image1.url : ''" />
        </div>
      </div>

      <!-- 3 row / images -->
      <div class="row">
        <div class="col-6 col-12-sm">
          <img :src="data.image2 ? data.image2.url : ''" />
        </div>
        <div class="col-6 col-12-sm">
          <img :src="data.image3 ? data.image3.url : ''" />
        </div>
      </div>

      <!-- 4 row / images -->
      <div class="row">
        <div class="col-6 col-12-sm">
          <img :src="data.image4 ? data.image4.url : ''" />
        </div>
        <div class="col-6 col-12-sm">
          <img :src="data.image5 ? data.image5.url : ''" />
        </div>
      </div>

      <!-- 5 row / button bar -->
      <div class="row">
        <div class="col-12">
          <a
            v-if="data.btn_url_de || data.btn_url_en"
            :href="getLangOfString('btn_url')"
            class="btn yellow icon-left eventMainStages__btn"
          >
            <svg-icon icon="app/icon-arrow"></svg-icon>
            <span>{{ getLangOfString('btn_label') }}</span>
          </a>
        </div>
      </div>
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

  name: 'EventMainStages',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {}
  },

  computed: {},

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {},

  mounted() {},

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    // get correct lang variable out of string
    getLangOfString(stringVar) {
      if (!this.alphaNumericOnly(stringVar)) {
        return false
      }

      const interpretedString = eval(`this.data.${stringVar + this.langType()}`)

      return interpretedString === undefined ? '' : interpretedString
    },

    alphaNumericOnly(aString) {
      if (!aString.match(/^[0-9a-zA-Z_]+$/)) {
        console.log('ERROR - field naming should be alpha numeric only')
        return false
      }

      return true
    },

    langType() {
      return this.$i18n.locale === 'de' ? '_de' : '_en'
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
