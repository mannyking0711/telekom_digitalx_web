<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li v-for="(crumb, index) in crumbs"
          class="breadcrumb-item"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem">
        <router-link :to="crumb.to" target="_self" itemprop="item">
          <span itemprop="name">{{ crumb.label }}</span>
        </router-link>
        <meta itemprop="position" :content="index+1">
      </li>
    </ol>
  </nav>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {IS_SSR} from "../../app/plugins/ssrSwitch";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'Breadcrumb',

  props: {},

  data() {
    return {};
  },

  computed: {

    /**
     * Build breadcrumbs from $route.name
     * The hierarchy results from the splitting of $route.name
     * Example:
     * de.foo.bar => Home / Foo / Bar
     *
     * Vue router API: https://router.vuejs.org/api/
     *
     * @returns {*[]}
     */
    crumbs: function () {
      if (IS_SSR) return;
      let breadcrumbArray = [];
      // console.debug("Breadcrumb this.$route.name", this.$route.name);
      // console.debug("Breadcrumb this.$route.path", this.$route.path);
      let pathArray = this.$route.name.split(".")
      pathArray.shift();
      // console.debug("Breadcrumb pathArray", pathArray);
      for (let index = 0; index < pathArray.length; ++index) {
        let search = pathArray.slice(0, index + 1).join('.');
        // skip index and events
        if (search && !['index', 'events'].includes(search)) {
          search = this.$i18n.locale + '.' + search;
          const l = this.$router.resolve({
            name: search,
          });
          if (l.route.matched.length > 0) {
            let breadcrumbLabel = null;
            if (l.route.meta.hasOwnProperty('breadcrumb') && l.route.meta.breadcrumb.hasOwnProperty(this.$i18n.locale)) {
              // Get breadcrumb label from route meta.
              // console.debug("Breadcrumb A / Get breadcrumb label from route meta");
              breadcrumbLabel = l.route.meta.breadcrumb[this.$i18n.locale];
            } else {
              // Get dynamic breadcrumb label (:slug) from store (CLIENT-SIDE)
              // console.debug("Breadcrumb B / Get dynamic breadcrumb label (:slug) from store", this.$router.currentRoute.path);
              breadcrumbLabel = this.$store.getters.getBreadcrumbTitle(this.$router.currentRoute.path);
              if (!breadcrumbLabel) {
                // SSR
                // console.debug("Breadcrumb B / Get latest breadcrumb label from store", this.$store.getters.getLatestBreadcrumbTitle);
                breadcrumbLabel = this.$store.getters.getLatestBreadcrumbTitle;
              }
            }
            // console.debug("Breadcrumb breadcrumbLabel", breadcrumbLabel);
            if (breadcrumbLabel) {
              breadcrumbArray.push({
                to: l.route.path,
                label: breadcrumbLabel
              });
            } else {
              console.warn("Label for breadcrumb not found: " + l.route.name);
            }
          } else {
            console.warn("Route for breadcrumb not found: " + search);
          }
        }
      }

      if (breadcrumbArray.length > 0) {
        // Insert default home
        breadcrumbArray.unshift({
          to: this.link('index'),
          label: this.$t('breadcrumb.home')
        });
      }

      return breadcrumbArray;
    }

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
    "breadcrumb.home": "Startseite"
  },
  "en": {
    "breadcrumb.home": "Home"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss">

</style>


<style lang="scss" scoped>

</style>


