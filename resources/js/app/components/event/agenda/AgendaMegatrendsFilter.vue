<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <section class="agenda-megatrends-filter inner no-spacing">
    <div class="col-100">
      <div class="agenda-megatrends-filter__grid">
        <div class="agenda-megatrends-filter__label">
          {{ $t('agenda-megatrends-filter.filter') }}
        </div>
        <div class="agenda-megatrends-filter__buttons">
          <div
            v-for="(megatrend, key) in megatrends"
            :key="megatrend.id"
            class="agenda-megatrends-filter__button"
            :class="{'agenda-megatrends-filter__button--active': isActiveMegatrend(megatrend.id)}"
            @click="toggleMegatrend(megatrend.id)"
          >
            <img v-if="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="lazy">
            {{ megatrend.name }}
          </div>
        </div>
        <div class="agenda-megatrends-filter__clear">
          <div @click="clearMegatrends()" class="agenda-megatrends-filter__clear__button">
            <span>{{ $t('agenda-megatrends-filter.clear') }}</span>
            <div class="agenda-megatrends-filter__clear__button__icon">
              <svg-icon class="svg-icon" icon="app/icon-close"></svg-icon>
            </div>
          </div>
        </div>
      </div>
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

  name: "AgendaMegatrendsFilter",

  props: {
    megatrends: Array,
  },

  computed: {
    filterMegatrends: {
      get() {
        return this.$store.getters.getFilterMegatrends
      },
      set(megatrends) {
        this.$store.commit('setFilterMegatrends', megatrends);
      }
    },
  },

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

  methods: {
    toggleMegatrend(id) {
      let index = this.filterMegatrends.indexOf(id);
      index === -1 ? this.filterMegatrends.push(id) : this.filterMegatrends.splice(index, 1);
    },

    clearMegatrends() {
      this.filterMegatrends = [];
    },

    isActiveMegatrend(id) {
      return this.filterMegatrends.indexOf(id) !== -1;
    },
  },
}; // end export
</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "agenda-megatrends-filter.filter": "Filtern nach Megatrends",
    "agenda-megatrends-filter.clear": "Filter löschen"
  },
  "en": {
    "agenda-megatrends-filter.filter": "Filter by megatrends",
    "agenda-megatrends-filter.clear": "Clear filter"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<style lang="scss"></style>


<style lang="scss" scoped></style>
