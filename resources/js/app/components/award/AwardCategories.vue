<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="awardCategories">
    <section class="container-fluid">
      <div class="col-100">
        <h2 v-if="headline" class="pageaward__headline awardCategories__headline">
          {{ headline }}
          <span v-if="currentYear">{{ currentYear }}</span>
        </h2>
        <div class="awardCategories__categories">
          <div class="awardCategories__category" :class="categoryCss(index-1, categories)" v-for="(category, index) in categories" :key="category.id">
            <img v-if="category.icon" class="awardCategories__icon" :src="category.icon" :alt="category.name"/>
            <svg-icon v-else class="awardCategories__icon-arrow" icon="app/icon-arrow"></svg-icon>
            <h3 class="awardCategories__title">{{ category.name }}</h3>
            <p class="awardCategories__desc">{{ category.description }}</p>
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

  name: 'AwardCategories',

  props: {
    headline: String,
    currentYear: Number,
  },

  data() {
    return {};
  },

  computed: {
    categories() {
      return this.$store.state.content.awardCategories;
    }
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    /**
     * 'fullwidth' if last element and odd
     * @param index
     * @param categories
     * @returns {string}
     */
    categoryCss(index, categories) {
      if (typeof categories !== 'undefined') {
        const length = typeof categories === 'object' ? Object.keys(categories).length : categories.length;
        if ((parseInt(index) === length) && (index % 2 === 1)) {
          return 'awardCategories__category--fullwidth';
        }
      }
      return '';
    },
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






