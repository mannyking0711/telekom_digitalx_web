<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="digi-index-header">
    <section class="no-spacing ">
      <div class="digi-index-header__image-container">
        <img class="digi-index-header__image" v-if="image" :src="image" :alt="alt">
        <div class="digi-index-header__overlay"></div>
      </div>
      <div class="digi-index-header__content-container container-fluid">
        <div class="digi-index-header__content">
          <h1 class="digi-index-header__title">{{ title }}</h1>
          <div v-if="subtitle" class="digi-index-header__subtitle">{{ subtitle }}</div>
          <div class="colorbox"></div>
          <div v-if="copy" class="digi-index-header__copy">{{ copy }}</div>
        </div>
        <div class="digi-index-header__nav-container" :class="{ 'digi-index-header__nav-container--mt-l': !!copy, 'digi-index-header__nav-container--mt-xl': !copy }">
          <nav class="digi-index-header__nav">
            <router-link v-if="showBack" :to="link('magazine.digi-index')" class="digi-index-header__nav__tab digi-index-header__nav__tab--back">
              <svg-icon icon="app/icon-arrow" />
              Übersicht
            </router-link>
            <router-link v-for="label in labels" :key="label.id" :to="link('magazine.digi-index.detail', {slug: label.slug})" class="digi-index-header__nav__tab">{{ label.name }}</router-link>
            <router-link :to="link('magazine.digi-index.archive')" class="digi-index-header__nav__tab digi-index-header__nav__tab--archive">Archiv</router-link>
          </nav>
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

  name: 'DigiIndexHeader',

  props: {
    showBack: {type: Boolean, default: true},
    title: '',
    subtitle: '',
    copy: '',
    image: '',
    alt: '',
    labels: { type: Array, default() { return []; } },
  },

  data() {
    return {};
  },

  computed: {},


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {

  },

  mounted() {

  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {},

} // end export

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



