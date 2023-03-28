<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="event-megatrends2">
    <lib-section-header
      :headline="title"
      :headline_tag="title_tag"
      :subheadline="subtitle"
      :text="text"
    >
      <div class="event-megatrends2__megatrends">
        <div
          v-for="(megatrend, key) in megatrends"
          :key="key"
          class="event-megatrends2__megatrends__item"
          :class="megatrend.color"
          @click="onClickMegatrend(megatrend)"
        >
          <img v-if="megatrend.icon" :data-src="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="event-megatrends2__megatrends__item__icon lazy">
          <div class="event-megatrends2__megatrends__item__name">
            {{ megatrend.name }}
          </div>
        </div>
      </div>

      <div class="event-megatrends2__button">
        <router-link
          v-if="button"
          :to="link('events.detail.megatrends', { slug: localeSlug(event) })"
          class="btn yellow icon-left event-megatrends2__btn"
        >
          <svg-icon icon="app/icon-arrow"></svg-icon>
          <span>{{ button }}</span>
        </router-link>
      </div>
    </lib-section-header>
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

  name: 'EventMegatrends2',

  props: {
    title: String,
    title_tag: String,
    subtitle: String,
    text: String,
    button: String,
    megatrends: Array,
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    onClickMegatrend(megatrend) {
      let link = this.link('events.detail.megatrends', {slug: this.localeSlug(this.event)});
      link.hash = '#megatrend-' + megatrend.id;
      this.$router.push(link);
    },
  },
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



