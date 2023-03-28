<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div v-if="itemData" class="partner-detail">

    <partner-hero
      :name="name"
      :brandhouseName="brandhouseName"
      :brandhouseAddress="brandhouseAddress"
      :bgImage="bgImage"
      :companyImage="companyImage" />

    <section class="section">
      <div class="container-fluid">
        <div class="partner-detail__container">
          <div class="partner-detail__grid">
            <div class="partner-detail__col1">
              <!-- Megatrends -->
              <div v-if="hasMegatrends" class="partner-detail__section1">
                <h3>
                  {{ itemData.megatrends_headline }}
                </h3>
                <div v-html="itemData.megatrends_text"/>
                <h4>
                  {{ itemData.megatrends_subheadline }}
                </h4>
                <div class="partner-detail__megatrends">
                  <div v-for="(megatrend, key) in itemData.megatrends" :key="key" class="partner-detail__megatrends__btn" @click="onClickMegatrend(megatrend)">
                    <img v-if="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="lazy">
                    {{ megatrend.name }}
                  </div>
                </div>
              </div>

              <!-- Quarter -->
              <div v-if="hasQuarter" class="partner-detail__section1">
                <h3>
                  {{ itemData.quarter_headline }}
                </h3>
                <div v-html="itemData.quarter_text"/>
                <h4>
                  {{ itemData.quarter_subheadline }}
                </h4>
                <div class="partner-detail__quarter">
                  <div class="partner-detail__quarter__btn" :class="'partner-detail__quarter__btn--' + itemData.quarter.color" @click="onClickQuarter(itemData.quarter)">
                    {{ itemData.quarter.name }}
                  </div>
                </div>
              </div>

              <!-- Company -->
              <div v-if="hasCompany" class="partner-detail__section1">
                <h3>
                  {{ itemData.company_headline }}
                </h3>
                <div v-html="itemData.content"/>
              </div>

              <!-- Share -->
              <div class="partner-detail__share partner-detail__section1">
                <share-teaser></share-teaser>
              </div>
            </div>
            <div class="partner-detail__col2">
              <!-- map -->
              <partner-map
                v-if="hasMap"
                class="partner-detail__section2"
                :latitude="brandhouseLatitude"
                :longitude="brandhouseLongitude"
                :address="brandhouseAddress"
                :name="brandhouseName"
                :color="itemData.quarter.color"
              />

              <!-- socials -->
              <div v-if="hasSocial" class="partner-detail__section2">
                <div class="partner-detail__title">
                  {{ $t('partnerpage.follow_us') }}
                </div>
                <div class="partner-detail__socials">
                  <a v-if="itemData.website" class="partner-detail__social-link" :href="itemData.website" target="_blank">
                    <svg-icon icon="app/icon-link"></svg-icon>
                  </a>
                  <a v-if="itemData.linkedin" class="partner-detail__social-link" :href="itemData.linkedin" target="_blank">
                    <svg-icon icon="app/icon-linkedin"></svg-icon>
                  </a>
                  <a v-if="itemData.xing" class="partner-detail__social-link" :href="itemData.xing" target="_blank">
                    <svg-icon icon="app/icon-xing"></svg-icon>
                  </a>
                  <a v-if="itemData.twitter" class="partner-detail__social-link" :href="itemData.twitter" target="_blank">
                    <svg-icon icon="app/icon-twitter"></svg-icon>
                  </a>
                  <a v-if="itemData.facebook" class="partner-detail__social-link" :href="itemData.facebook" target="_blank">
                    <svg-icon icon="app/icon-facebook"></svg-icon>
                  </a>
                  <a v-if="itemData.youtube" class="partner-detail__social-link" :href="itemData.youtube" target="_blank">
                    <svg-icon icon="app/icon-youtube"></svg-icon>
                  </a>
                  <a v-if="itemData.instagram" class="partner-detail__social-link" :href="itemData.instagram" target="_blank">
                    <svg-icon icon="app/icon-instagram"></svg-icon>
                  </a>
                </div>
              </div>

              <!-- LOCATIONS -->
              <div v-if="hasLocationImages" class="partner-detail__locations partner-detail__section2">
                <div v-if="itemData.location_image1" class="partner-detail__location">
                  <img :src="itemData.location_image1" :alt="itemData.location_image1_caption" class="lazy">
                  <p v-if="itemData.location_image1_caption">{{ itemData.location_image1_caption }}</p>
                </div>
                <div v-if="itemData.location_image2" class="partner-detail__location">
                  <img :src="itemData.location_image2" :alt="itemData.location_image2_caption" class="lazy">
                  <p v-if="itemData.location_image2_caption">{{ itemData.location_image2_caption }}</p>
                </div>
                <div v-if="itemData.location_image3" class="partner-detail__location">
                  <img :src="itemData.location_image3" :alt="itemData.location_image3_caption" class="lazy">
                  <p v-if="itemData.location_image3_caption">{{ itemData.location_image3_caption }}</p>
                </div>
                <div v-if="itemData.location_image4" class="partner-detail__location">
                  <img :src="itemData.location_image4" :alt="itemData.location_image4_caption" class="lazy">
                  <p v-if="itemData.location_image4_caption">{{ itemData.location_image4_caption }}</p>
                </div>
              </div>

              <!-- WEBSITE -->
              <div v-if="hasWebsite" class="partner-detail__website partner-detail__section2">
                <a :href="itemData.website" target="_blank" class="btn yellow icon-left">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ itemData.company_website }}</span>
                </a>
              </div>

              <!-- EVENT TICKETS -->
              <div v-if="eventTickets" class="partner-detail__section2">
                <event-tickets
                  :title="eventTickets.title" :text="eventTickets.text" :logo="eventTickets.logo"
                  :button="eventTickets.button" :link-register="eventTickets.link_register" css="blue" />
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
import fetchItemMixin from '../../mixins/fetchItem.js';
import fetch from "node-fetch";
import {IS_SSR} from "../../plugins/ssrSwitch";
import PartnerMap from "../../components/partner/PartnerMap";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PagePartnerDetail',
  components: {PartnerMap},
  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.meta_title,
      titleTemplate: null,
      meta: [
        {name: 'description', content: metaData.meta_description},
        {property: 'og:title', content: metaData.meta_title},
        {property: 'og:description', content: metaData.meta_description},
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-speaker-detail.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:site_name', content: metaData.meta_title},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {property: 'twitter:title', content: metaData.meta_title},
        {property: 'twitter:description', content: metaData.meta_description},
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-events-speaker-detail.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'partners/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'name',
      SET_AS_CURRENT_ITEM: true,
      metaData: null
    };
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata();
    }
  },

  mounted() {
  },

  beforeRouteLeave(to, from, next) {
    // if the route changed due to a language change, we need to translate the slug
    this.translateSlugIfLanguageChanged(to, next, this.itemData);
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

    onClickQuarter(quarter) {
      this.$store.commit('setFilterQuarters', [quarter.id]);
      let link = this.link('events.detail.partner', {slug: this.localeSlug(this.event)});
      link.hash = '#scrolltop';
      this.$router.push(link);
    },

    // get correct lang variable out of string
    getLangOfString(stringVar) {
      if (!this.alphaNumericOnly(stringVar)) {
        return false;
      }

      const interpretedString = eval(`this.itemData.${stringVar + this.langType()}`);

      return interpretedString === undefined ? stringVar : interpretedString;
    },

    alphaNumericOnly(aString) {
      if (!aString.match(/^[0-9a-zA-Z_]+$/)) {
        console.log("ERROR - field naming should be alpha numeric only");
        return false;
      }

      return true;
    },

    langType() {
      return this.$i18n.locale === 'de' ? '_de' : '_en'
    },

    fetchSyncMetadata() {
      fetch(this.$store.getters.env.content_url + this.ENDPOINT, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest', 'Accept-Language': this.$i18n.locale
        }
      })
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

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },

    name() {
      if (this.itemData) {
        return this.itemData.name ? this.itemData.name : ''
      }
    },

    brandhouseName() {
      if (this.itemData) {
        return this.itemData.brandhouse_name ? this.itemData.brandhouse_name : ''
      }
    },

    brandhouseAddress() {
      if (this.itemData) {
        return this.itemData.brandhouse_address ? this.itemData.brandhouse_address : ''
      }
    },

    brandhouseLatitude() {
      if (this.itemData) {
        return this.itemData.brandhouse_latitude ? this.itemData.brandhouse_latitude : null
      }
    },

    brandhouseLongitude() {
      if (this.itemData) {
        return this.itemData.brandhouse_longitude ? this.itemData.brandhouse_longitude : null
      }
    },

    bgImage() {
      if (this.itemData) {
        return this.itemData.img_detail2 ? this.itemData.img_detail2 : null
      }
    },

    hasMegatrends() {
      return (this.itemData.megatrends !== null) && (this.itemData.megatrends.length > 0)
    },

    hasQuarter() {
      return (this.itemData.quarter !== null)
    },

    hasCompany() {
      return (this.itemData.company_headline && this.itemData.content)
    },

    hasSocial() {
      return this.itemData.website || this.itemData.linkedin || this.itemData.xing || this.itemData.twitter || this.itemData.facebook || this.itemData.youtube || this.itemData.instagram
    },

    hasLocationImages() {
      return this.itemData.location_image1 || this.itemData.location_image2 || this.itemData.location_image3 || this.itemData.location_image4
    },

    hasWebsite() {
      return this.itemData.website
    },

    hasMap() {
      return this.itemData && this.itemData.brandhouse_latitude && this.itemData.brandhouse_longitude && this.itemData.brandhouse_address && this.itemData.quarter && this.itemData.quarter.color;
    },

    companyImage() {
      let image = null;

      if (this.itemData.image) {
        image = this.itemData.image;
      }

      if (this.itemData.img_detail && this.itemData.img_detail.url) {
        image = this.itemData.img_detail.url;
      }

      return image;
    },

    companyImage2() {
      let image = null;

      if (this.itemData.image2) {
        image = this.itemData.image2;
      }

      if (this.itemData.img_detail2 && this.itemData.img_detail2.url) {
        image = this.itemData.img_detail2.url;
      }

      return image;
    },

    isBrandhouse() {
      return !this.itemData.brandhouse_name && !this.itemData.brandhouse_address;
    },

    eventTickets() {
      if (this.itemData) {
        return this.itemData.tickets ? this.itemData.tickets : null
      }
    },
  }

} // end export

</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "partnerpage.follow_us": "Folgen Sie uns:"
  },
  "en": {
    "partnerpage.follow_us": "Follow us:"
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
