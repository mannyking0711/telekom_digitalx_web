<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <section id="eventpartner" class="eventpartner">
    <div class="eventpartner__wrapper">
      <template v-if="coop.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline1') }}</h3>
        <div class="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in coop"
            :key="partner.id"
            class="logolist__item coop"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item coop">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="premium.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline2') }}</h3>
        <div class="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in premium"
            :key="partner.id"
            class="logolist__item"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="regular.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline3') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in regular"
            :key="partner.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>



      <template v-if="support.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline4') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in support"
            :key="partner.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="mobility.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline5') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in mobility"
            :key="partner.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="digitalization.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline6') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in digitalization"
            :key="partner.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="media.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline7') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in media"
            :key="partner.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="startup.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline8') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partner.use_detail"
            v-for="partner in startup"
            :key="partner.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partner.logo" alt="partner.name">
          </div>
        </div>
      </template>

      <template v-if="partner.length > 0">
        <h3 class="h4">{{ $t('pageevent.listHeadline9') }}</h3>
        <div class="logolist" ref="logolist">
          <router-link
            v-if="partnerItem.use_detail"
            v-for="partnerItem in partner"
            :key="partnerItem.id"
            class="logolist__item small"
            :to="link('partner.detail',{slug: localeSlug(partnerItem)})"
          >
            <img class="logolist__logo lazy" :src="partnerItem.logo" alt="partnerItem.name">
          </router-link>
          <div v-else class="logolist__item small">
            <img class="logolist__logo lazy" :src="partnerItem.logo" alt="partnerItem.name">
          </div>
        </div>
      </template>

      <!--
      <button v-if="regular && regular.length > logosCount" @click="toggleLogos()"
              class="btn icon-left eventpartner__btn">
        <svg-icon icon="app/icon-arrow"></svg-icon>
        <span v-if="logosHidden">{{ $t('pageevent.listButtonMore') }}</span>
        <span v-else>{{ $t('pageevent.listButtonLess') }}</span>
      </button>
      -->
    </div>
  </section>

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

  name: 'PartnerList',

  props: {
    mobility: Array,
    digitalization: Array,
    media: Array,
    support: Array,
    regular: Array,
    premium: Array,
    coop: Array,
    startup: Array,
    partner: Array,
  },

  data() {
    return {
      logosHidden: true,   // are the logos currently hidden
      logosCount: 10,       // how many logos to show on mobile,
      logos: null,
      debouncedResizeHandler: null
    };
  },

  computed: {},


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {

  },

  mounted() {
    // setup
    this.setupToggleLogos();

    // init events
    this.debouncedResizeHandler = this.debounce(this.resizeHandler, 250);
    window.addEventListener('resize', this.debouncedResizeHandler);
  },

  destroyed() {

    // remove events
    window.removeEventListener('resize', this.debouncedResizeHandler);
  },

  watch: {
    regular() {
      this.$nextTick(() => this.setupToggleLogos());
    }
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    resizeHandler: function () {
      let windowWidth = document.querySelector('html').clientWidth;

      // hide some logos on small screen
      (windowWidth < 800) ? this.hideLogos() : this.showLogos();
    },

    setupToggleLogos: function () {
      // setup to show and hide some logos based on click and window width
      if (this.$refs.logolist) {
        this.logos = this.$refs.logolist.children;
        this.resizeHandler();
      }
    },

    toggleLogos: function () {
      this.logosHidden ? this.showLogos() : this.hideLogos();
    },


    showLogos: function () {
      if (this.logos) {
        for (let i = this.logosCount; i < this.logos.length; i++) {
          this.logos[i].style.display = 'list-item';
        }
        this.logosHidden = false;
      }
    },

    hideLogos: function () {
      for (let i = this.logosCount; i < this.logos.length; i++) {
        this.logos[i].style.display = 'none';
      }
      this.logosHidden = true;
    }
  }

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






