<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="event-banner2">
    <section v-if="headline" class="inner no-spacing">
      <div class="col-100">
        <h3 v-if="headline" class="event-banner2__headline">
          <span v-if="headline_tag" class="event-banner2__headline__tag">{{ headline_tag }}</span>
          {{ headline }}
        </h3>
        <div v-if="text" class="event-banner2__intro" v-html="text"></div>
      </div>
    </section>

    <section v-if="image" class="inner no-spacing">
      <div class="col-100">
        <div class="event-banner2__image">
          <a v-if="url" :href="url" target="_blank">
            <img class="lazy" :src="image" :alt="headline_tag + ' ' + headline">
          </a>
          <img v-else class="lazy" :src="image" :alt="headline_tag + ' ' + headline">
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

  name: 'EventBanner2',

  props: {
    headline_tag: String,
    headline: String,
    text: String,
    image: String,
    url: String,
  },

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






