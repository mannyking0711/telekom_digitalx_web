<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="event-advertising" v-if="advertising && advertising.title && advertising.image">
    <section class="no-spacing ">
      <div class="event-advertising__bg-image-container">
        <img class="event-advertising__bg-image lazy" :src="advertising.image" alt="advertising.title">
      </div>
      <section class="inner no-spacing">
        <div class="col-100">
          <div class="event-advertising__container ">
            <div class="event-advertising__content">
              <div class="event-advertising__logo">
                <img v-if="advertising.logo" class="lazy" :src="advertising.logo" alt="advertising.title">
              </div>
              <div v-if="advertising.subtitle" class="event-advertising__subtitle">{{ advertising.subtitle }}</div>
              <h2 class="event-advertising__title" v-html="advertising.title"></h2>
              <a v-if="advertising.button && advertising.link" :href="advertising.link" target="_blank" class="event-advertising__button btn secondary">
                {{ advertising.button }}
              </a>
            </div>
          </div>
        </div>
      </section>
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

  name: 'EventAdvertising',

  props: {
    data: {type: Object, required: false},
  },

  computed: {
    advertising() {
      return this.data && this.data.event_advertising ? this.data.event_advertising : null
    },
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
