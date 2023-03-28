<template>
  <div class="eventParallax" :style="bgImg">
    <div class="container center">
      <!-- 1 row / headline -->
      <div class="row">
        <div class="col-12">
          <h3 class="eventParallax__headline">
            {{ getLangOfString('headline') }}
          </h3>
        </div>
      </div>

      <!-- 2 row / description -->
      <div class="row">
        <div class="col-12">
          <p v-html="getLangOfString('description')"></p>
        </div>
      </div>

      <!-- 3 row / button bar -->
      <div class="row">
        <div class="col-12">
        <a 
        v-if="data.btn_url_de || data.btn_url_en" 
        :href="getLangOfString('btn_url')" 
        class="btn yellow icon-left eventMainStages__btn">
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

  name: 'EventParallax',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {}
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

  computed: {
    bgImg(){
      let img = '';

      if(this.data && this.data.image && this.data.image.url){
        img = this.data.image.url;
      }
        
      return 'background: url(' + img + ') 50% no-repeat fixed; background-size: cover;';        
    },

    foo(){
      return 'https://secure.digital-x.eu/DX/DIGITALX2021?ui_locales=DE-de'
    }
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
