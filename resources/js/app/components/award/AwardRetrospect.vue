<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="awardRetrospect">
    <section class="container-fluid">
      <div class="col-100">
        <h5 v-if="tagline" class="awardRetrospect__tagline">{{ tagline }}</h5>
        <h2 class="awardRetrospect__headline">
          {{ headline }}
          <span v-if="theme === 'A'">{{ year }}</span>
        </h2>
        <div v-if="intro" class="awardRetrospect__intro" v-html="intro"/>
        <div class="awardRetrospect__wrapper">
          <img class="awardRetrospect__image" :src="image.url" :alt="subheadline"/>
          <div class="awardRetrospect__text-wrapper">
            <h5 v-if="tagline" class="awardRetrospect__tagline">{{ tagline }}</h5>
            <h2 class=" awardRetrospect__subheadline">
              {{ subheadline }}
              <span v-if="theme === 'B'">{{ year }}</span>
            </h2>
            <div class="awardRetrospect__text" v-html="text"/>
            <router-link v-if="button" class="awardRetrospect__button btn blue icon-left" :to="link('award', { year: year ? year : null })">
              <svg-icon icon="app/icon-arrow"></svg-icon>
              <span>{{ button }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
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

  name: 'awardRetrospect',

  props: {
    tagline: String,
    headline: String,
    intro: String,
    subheadline: String,
    year: Number,
    button: String,
    text: String,
    image: Object,
    theme: {
      type: String,
      default: 'theme-a'
    },
  },

  data() {
    return {};
  },

  computed: {},


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






