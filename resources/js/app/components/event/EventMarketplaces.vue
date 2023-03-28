<template>
  <div class="eventMarketplaces">
    <div class="container">
      <h3 class="eventMarketplaces__headline">{{ marketplace[`headline`] }}</h3>
      <p class="eventMarketplaces__desc">{{ marketplace[`description`] }}</p>
      <div class="eventMarketplaces__places">
        <div v-for="place in marketplace.marketplaces" :key="place.id" class="eventMarketplaces__place">
          <div :class="`eventMarketplaces__place-text-wrap eventMarketplaces__place-text-wrap--${place['color']}`">
            <div class="eventMarketplaces__place-text">
              <h4 class="eventMarketplaces__place-headline">{{ place[`title`] }}</h4>
              <h5 class="eventMarketplaces__place-subheadline">{{ place[`subtitle`] }}</h5>
              <a
                v-if="place[`link`]"
                :href="place[`link`]"
                class="btn secondary eventMarketplaces__btn">
                {{ $t('eventMarketplaces.button') }}
              </a>
            </div>
          </div>
          <img
            v-if="place.image"
            :src="place.image" :alt="place[`title`]"
            class="eventMarketplaces__place-image" />
        </div>
      </div>
      <section class="inner no-spacing">
        <div class="col-100">
          <div class="eventMarketplaces__descriptions">
            <div v-for="place in marketplace.marketplaces" :key="place.id" class="eventMarketplaces__description">
              <div v-if="place.title" :class="`eventMarketplaces__description__title eventMarketplaces__description__title--${place['color']}`">
                {{ place.title }}
              </div>
              <p v-if="place.text" class="eventMarketplaces__description__text">{{ place.text }}</p>
            </div>
          </div>
        </div>
      </section>
      <p v-if="marketplace[`text`]" class="eventMarketplaces__text">{{ marketplace[`text`] }}</p>
      <div v-if="marketplace[`button`] && event.link_register" class="eventMarketplaces__button">
        <a :href="event.link_register" target="_blank" class="btn blue icon-left">
          <svg-icon icon="app/icon-arrow"></svg-icon>
          <span>{{ marketplace[`button`] }}</span>
        </a>
      </div>
    </div>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<i18n>
  {
    "de": {
      "eventMarketplaces.button": "Mehr erfahren"
    },
    "en": {
      "eventMarketplaces.button": "Learn more"
    }
  }
</i18n>


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

  name: 'EventMarketplaces',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {}
  },

  computed: {
    marketplace() { return this.data && this.data.event_marketplaces ? this.data.event_marketplaces : null },

    event() { return this.data ? this.data : null },
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {},

  mounted() {},

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

<style lang="scss"></style>

<style lang="scss" scoped></style>
