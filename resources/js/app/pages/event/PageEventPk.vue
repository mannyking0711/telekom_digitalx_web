<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="page-event-pk">
    <event-hero
      :hero="hero"
      :eventTickets="eventTickets"
      :showColorbox="false"
      :button="button"
    />

    <event-locations
      v-if="itemData && itemData.event_locations && itemData.event_locations.items && itemData.event_locations.items.length > 0"
      :data="itemData.event_locations"
      :nowrap="false"
      color="magenta"
    />

    <template v-if="itemData">
      <component
        v-for="(component, key) in itemData.content"
        :key="key"
        v-bind="component"
        :is="component.__component"
      />
    </template>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import fetchItemMixin from '../../mixins/fetchItem.js';
import fetch from "node-fetch";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageEventPk',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [{name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'event-pk-page/',
      metaData: null,
    };
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },

    button() {
      return this.itemData && this.itemData.header_button && this.itemData.link_register
        ? {text: this.itemData.header_button, link: this.itemData.link_register, css: 'magenta'}
        : null
    },

    eventTickets() {
      return this.itemData && this.event && this.event.logo
        ? {
          title: this.itemData.tickets_title ? this.itemData.tickets_title : (this.itemData.tickets_text ? '' : null),
          text: this.itemData.tickets_text ? this.itemData.tickets_text : null,
          button: this.itemData.tickets_button ? this.itemData.tickets_button : null,
          logo: this.event.logo ? this.event.logo : null,
          link_register: this.itemData.link_register ? this.itemData.link_register : null,
          css: 'blue',
        }
        : null
    },

    hero() {
      return this.itemData && this.itemData.header_title && this.itemData.header_image
        ? {
          title: this.itemData.header_title,
          image: this.itemData.header_image,
          button: {
            text: this.itemData.header_button,
            link: this.itemData.link_register,
            class: 'pink'
          },

        }
        : null
    },
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    fetchSyncMetadata() {
      fetch(this.$store.getters.env.content_url + this.ENDPOINT)
        .then(response => response.json())
        .then(data => {
          this.metaData = data;
        })
        .catch(err => console.log(err))
    },

    findMetaData() {
      if (IS_SSR === true && this.metaData) {
        return this.metaData;
      }

      if (IS_SSR === false && typeof this.itemData !== 'undefined') {
        return this.itemData;
      }

      return {};
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



