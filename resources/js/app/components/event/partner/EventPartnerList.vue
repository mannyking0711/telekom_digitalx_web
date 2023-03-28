<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="event-partner-list" :class="'event-partner-list--' + listStyle">
    <div v-if="partners.length" class="event-partner-list">
      <h3 class="event-partner-list__title">{{ headline }}</h3>
      <div class="event-partner-list__grid">
        <div class="event-partner-list__item" v-for="partner in partners" :key="partner.id">
          <router-link v-if="partner.use_detail" class="event-partner-list__link" :to="link('partner.detail',{slug: localeSlug(partner)})">
            <img class="event-partner-list__logo" :class="'event-partner-list__logo--' + type" :src="logo(partner)" alt="partner.name">
          </router-link>
          <div v-else class="event-partner-list__link">
            <img class="event-partner-list__logo" :class="'event-partner-list__logo--' + type" :src="logo(partner)" alt="partner.name">
          </div>
          <div class="event-partner-list__name">{{ name(partner) }}</div>
        </div>
      </div>
    </div>
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

  name: "EventPartnerList",

  props: {
    headline: {type: String, required: false, default: null},
    partners: {type: Array, required: false, default: null},
    type: {type: String, required: false, default: 'partner'},
    listStyle: {type: String, required: false, default: 'normal'},
  },

  methods: {
    logo(partner) {
      return this.type === 'partner' ? partner.logo : (partner.brandhouse_image ? partner.brandhouse_image : partner.logo);
    },
    name(partner) {
      return this.type === 'partner' ? partner.name : (partner.brandhouse_name ? partner.brandhouse_name : partner.name);
    },
  },
}; // end export
</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
