<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="event-megatrends">
    <section class="container-fluid">
      <div class="col-100">
        <div class="row gx-5">
          <div v-if="image" class="col-md-6">
            <img class="lazy" :data-src="image" :src="image" :alt="title" style="width: 100%">
          </div>
          <div class="col-md-6">
            <h3 class="event-megatrends__headline">
              {{ title }}
              <span v-if="title_tag" class="event-megatrends__headline__tag">{{ title_tag }}</span>
            </h3>

            <div class="partner-detail__megatrends">
              <div v-for="(megatrend, key) in megatrends" :key="key" class="partner-detail__megatrends__btn" @click="onClickMegatrend(megatrend)">
                <img v-if="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="lazy">
                {{ megatrend.name }}
              </div>
            </div>

            <div v-if="text" class="event-megatrends__text" v-html="text"></div>

            <div class="event-megatrends__button">
              <router-link
                v-if="button"
                :to="link('events.detail.megatrends', { slug: localeSlug(event) })"
                class="btn blue icon-left event-megatrends__btn"
              >
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ button }}</span>
              </router-link>
            </div>
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

  name: 'EventMegatrends',

  props: {
    title: String,
    title_tag: String,
    text: String,
    image: String,
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



