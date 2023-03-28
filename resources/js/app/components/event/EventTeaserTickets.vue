<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="event-teaser-tickets">
    <section v-if="headline" class="inner no-spacing">
      <div class="col-100">
        <h3 v-if="headline" class="event-teaser-tickets__headline">
          {{ headline }}
          <span v-if="headline_tag" class="event-teaser-tickets__headline__tag">{{ headline_tag }}</span>
        </h3>
        <div v-if="text" class="event-teaser-tickets__intro" v-html="text"></div>
      </div>
    </section>

    <section class="inner no-spacing">
      <div class="col-100">
        <div class="event-teaser-tickets__grid">
          <div v-for="item in items" :key="item.id" class="event-teaser-tickets__tile" :class="'event-teaser-tickets__tile__' + item.color">
            <div v-if="item.image" class="event-teaser-tickets__image">
              <img class="lazy" :data-src="item.image" :src="item.image" :alt="item.title">
            </div>
            <div class="event-teaser-tickets__content">
              <div class="event-teaser-tickets__body">
                <div class="event-teaser-tickets__title">
                  {{ item.title }}
                </div>
                <div class="event-teaser-tickets__text">
                  {{ item.text }}
                </div>
              </div>
              <div class="event-teaser-tickets__bottom">
                <div v-if="item.image_desktop || item.image_desktop2" class="event-teaser-tickets__image-desktop">
                  <div v-if="item.image_desktop">
                    <a v-if="item.url_desktop" :href="item.url_desktop" target="_blank">
                      <img class="lazy" :data-src="item.image_desktop" :src="item.image_desktop" :alt="item.title">
                    </a>
                    <img v-else class="lazy" :data-src="item.image_desktop" :src="item.image_desktop" :alt="item.title">
                  </div>
                  <div v-if="item.image_desktop2">
                    <a v-if="item.url_desktop2" :href="item.url_desktop2" target="_blank">
                      <img class="lazy" :data-src="item.image_desktop2" :src="item.image_desktop2" :alt="item.title">
                    </a>
                    <img v-else class="lazy" :data-src="item.image_desktop2" :src="item.image_desktop2" :alt="item.title">
                  </div>
                </div>
                <div v-if="item.image_mobile || item.image_mobile2" class="event-teaser-tickets__image-mobile">
                  <div v-if="item.image_mobile">
                    <a v-if="item.url_mobile" :href="item.url_mobile" target="_blank">
                      <img class="lazy" :data-src="item.image_mobile" :src="item.image_mobile" :alt="item.title">
                    </a>
                    <img v-else class="lazy" :data-src="item.image_mobile" :src="item.image_mobile" :alt="item.title">
                  </div>
                  <div v-if="item.image_mobile2">
                    <a v-if="item.url_mobile2" :href="item.url_mobile2" target="_blank">
                      <img class="lazy" :data-src="item.image_mobile2" :src="item.image_mobile2" :alt="item.title">
                    </a>
                    <img v-else class="lazy" :data-src="item.image_mobile2" :src="item.image_mobile2" :alt="item.title">
                  </div>
                </div>
                <a
                  v-if="item.button && item.url"
                  :href="item.url"
                  class="event-teaser-tickets__button icon-left btn"
                  :class="'event-teaser-tickets__button--' + item.color"
                >
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ item.button }}</span>
                </a>
              </div>
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

  name: 'EventTeaserTickets',

  props: {
    headline: String,
    headline_tag: String,
    text: String,
    items: Array,
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
