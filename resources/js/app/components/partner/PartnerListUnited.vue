<template>
  <section v-if="partners.length > 0" class="eventpartnerunited">
    <div class="eventpartner__wrapper">
      <h3 class="eventpartnerunited__headline">
        {{ title }}
      </h3>

      <div class="eventpartnerunited__logolist">
        <div
          :id="index"
          :class="{
            'eventpartnerunited__logolist-item--hidden':
              index >= logosCount && logosHidden,
          }"
          class="eventpartnerunited__logolist-item"
          v-for="(partner, index) in partners"
          :key="partner.id"
        >
          <router-link
            class="logolist__item"
            :to="link('partner.detail', { slug: localeSlug(partner) })"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
        </div>
      </div>

      <button
        @click="toggleLogos()"
        class="btn icon-left eventpartnerunited__btn"
      >
        <svg-icon icon="app/icon-arrow"></svg-icon>
        <span v-if="logosHidden">{{ $t('pageevent.listButtonMore') }}</span>
        <span v-else>{{ $t('pageevent.listButtonLess') }}</span>
      </button>
    </div>
  </section>
</template>

<script>
/////////////////////////////////
// SCRIPT
/////////////////////////////////
export default {
  name: 'PartnerListUnited',

  props: {
    title: String,
    partners: Array,
  },

  data() {
    return {
      logosHidden: true,
      logosCount: 5, // how many logos to show on mobile,
      logos: null,
      debouncedResizeHandler: null,
    }
  },

  created() {
  },

  mounted() {
    // init events
    this.debouncedResizeHandler = this.debounce(this.resizeHandler, 250)
    window.addEventListener('resize', this.debouncedResizeHandler)
  },

  destroyed() {
    // remove events
    window.removeEventListener('resize', this.debouncedResizeHandler)
  },

  watch: {},

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    resizeHandler: function () {
      let windowWidth = document.querySelector('html').clientWidth

      // hide some logos on small screen
      windowWidth < 800 ? this.hideLogos() : this.showLogos()
    },

    toggleLogos() {
      return (this.logosHidden = !this.logosHidden)
    },
  },

  /////////////////////////////////
  // COMPUTED
  /////////////////////////////////
  computed: {},
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped></style>
