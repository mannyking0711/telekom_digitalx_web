<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="content-tiles-stages">
    <section v-if="headline" class="inner no-spacing">
      <div class="col-100">
        <h3 v-if="headline" class="content-tiles-stages__headline">{{ headline }}</h3>
        <p v-if="text" class="content-tiles-stages__intro">{{ text }}</p>
      </div>
    </section>

    <section class="inner no-spacing">
      <div class="col-100">
        <div class="content-tiles-stages__grid">
          <div v-for="stage in stages" :key="stage.id" class="content-tiles-stages__tile" :class="'content-tiles-stages__tile__' + stage.color">
            <div class="content-tiles-stages__title">
              {{ stage.name }}
            </div>
            <div class="content-tiles-stages__address">
              <div class="content-tiles-stages__address__icon">
                <svg viewBox="0 0 48 48" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>
              </div>
              {{ stage.address }}
            </div>
            <div class="content-tiles-stages__text">
              {{ stage.description }}
            </div>
            <router-link
              v-if="button && event"
              :to="link('events.detail.agenda', { slug: localeSlug(event) })"
              class="content-tiles-stages__button icon-left btn"
              :class="'content-tiles-stages__button--' + stage.color"
            >
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

  name: 'ContentTilesStages',

  props: {
    headline: String,
    text: String,
    stages: Array,
    button: String,
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent
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
