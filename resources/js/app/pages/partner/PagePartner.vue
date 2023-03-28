<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="pagePartner">

    <lib-hero
        :title="'Die Partner'"
        :text="''"
        :logo="'app/digitalx-logo'"
        :bgImage="'../img/app/initiative/background.jpg'"
        :bgImageDarken="'0'"
    />

    <!--
    <div class="pagePartner__intro">
      <div class="pagePartner__mobile-background"></div>
      <section class="no-spacing pagePartner__intro-background">
        <div class="col-100" v-if="partner">
          <div v-if="partner.signups_allowed" class="pagePartner__intro-text">
            <h2 class="pagePartner__intro-headline">{{ partner.signup_title }}</h2>
            <p class="pagePartner__intro-desc">{{ partner.signup_description }}</p>
            <h3 class="pagePartner__intro-subheadline">{{ partner.signup_bullets_headline }}</h3>
            <ul class="pagePartner__list">
              <li v-for="bullet in partner.signup_bullets" :key="bullet.id">{{ bullet.bullet }}</li>
            </ul>
            <a class="btn blue icon-left pagePartner__intro-btn" :href="partner.signup_button_link">
              <svg-icon icon="app/icon-arrow"></svg-icon>
              <span>{{ partner.signup_button_text }}</span>
            </a>
          </div>
          <div v-else class="pagePartner__intro-text">
            <h2 class="pagePartner__intro-headline">{{ partner.info_title }}</h2>
            <p class="pagePartner__intro-desc">{{ partner.info_description }}</p>
            <h3 class="pagePartner__intro-subheadline">{{ partner.info_bullets_headline }}</h3>
            <ul class="pagePartner__list">
              <li v-for="bullet in partner.info_bullets" :key="bullet.id">{{ bullet.bullet }}</li>
            </ul>
            <a class="btn blue icon-left pagePartner__intro-btn" :href="partner.info_button_link">
              <svg-icon icon="app/icon-arrow"></svg-icon>
              <span>{{ partner.info_button_text }}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    -->


      <div class="container-fluid">
        <div class="col-100" v-if="partner">

          <div class="hero-section__content bg-white">
            <div class="content content-center">
              <h2>{{ $t('pagePartner.signupTitle') }}</h2>
              <p>{{ partner.signup_description }}</p>
            </div>
          </div>

          <div class="section section-signup-intro">
            <div class="row">
              <div class="col-lg-6 content__signup-text__wrapper">
                <div class="content__signup-text">
                  <h3 class="h2">{{ partner.signup_title }}</h3>
                  <p>{{ partner.info_secondary_description }}</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-light box-large">
                  <h3 class="">{{ partner.signup_bullets_headline }}</h3>
                  <ul class="list-checkmark">
                    <li v-for="bullet in partner.signup_bullets" :key="bullet.id">{{ bullet.bullet }}</li>
                  </ul>
                  <p>
                    <a class="btn blue" :href="partner.signup_advantages_button2_link">
                      <span>{{ partner.signup_advantages_button2_text }}</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="partner.signups_allowed" class="section section-signup">
            <div v-if="partner.signups_allowed" class="row">
              <div v-for="advantage in partner.signup_advantages" :key="advantage.id"
                   class="col">
                <div class="box-card">
                  <h3 class="pagePartner__bundle-headline h6">{{ advantage.headline }}</h3>
                  <ul class="pagePartner__list pagePartner__list--bundle">
                    <li v-for="bullet in advantage.bullets" :key="bullet.id">{{ bullet.bullet }}</li>
                  </ul>
                  <p class="pagePartner__bundle-desc">{{ advantage.text }}</p>
                </div>
              </div>
            </div>
            <div v-if="partner.signups_allowed" class="box-light content__contact-box">
              <div class="row">
                <div class="col-lg-3">
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-md-8">
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                    </div>
                    <div class="col-auto">
                      <a class="btn blue" :href="partner.signup_advantages_button1_link">
                        <span>{{ partner.signup_advantages_button1_text }}</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <!-- PARTNER -->
          <div class="section section-partner">
            <!-- PARTNER FOCUS -->
            <div class="pagePartner__focus">
              <partner-focus
                v-if="itemData && itemData.partner_focus"
                :partners="itemData.partner_focus"
                :partnerlink="partner.signup_button_link"
              />
            </div>

            <!-- PARTNER LIST -->
            <partner-list
              v-if="itemData"
              :support="itemData.partners_support"
              :regular="itemData.partners_regular"
              :premium="itemData.partners_premium"
              :coop="itemData.partners_coop"
              :mobility="itemData.partners_mobility"
              :digitalization="itemData.partners_digitalization"
              :media="itemData.partners_media"
              :startup="itemData.partners_startup"
              :partner="itemData.partners_partner"
            />
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
import fetchItemMixin from '../../mixins/fetchItem.js';
import fetch from "node-fetch";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {


  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PagePartner',

  mixins: [fetchItemMixin],

  metaInfo() {
    const metaData = this.findMetaData();
    return {
      title: metaData.signups_allowed ? metaData.signup_metatitle : metaData.info_metatitle,
      titleTemplate: metaData.signups_allowed ? metaData.signup_metatitle : metaData.info_metatitle,
      meta: [
        {
          name: 'description',
          content: metaData.signups_allowed ? metaData.signup_metadescription : metaData.info_metadescription
        },
        {
          property: 'og:title',
          content: metaData.signups_allowed ? metaData.signup_metatitle : metaData.info_metatitle
        },
        {
          property: 'og:description',
          content: metaData.signups_allowed ? metaData.signup_metadescription : metaData.info_metadescription
        },
        {property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-partner.jpg'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: this.ogUrl},
        {
          property: 'og:site_name',
          content: metaData.signups_allowed ? metaData.signup_metatitle : metaData.info_metatitle
        },
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:creator', content: 'Telekom'},
        {
          property: 'twitter:title',
          content: metaData.signups_allowed ? metaData.signup_metatitle : metaData.info_metatitle
        },
        {
          property: 'twitter:description',
          content: metaData.signups_allowed ? metaData.signup_metadescription : metaData.info_metadescription
        },
        {property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-partner.jpg'}
      ],
      link: [this.canonical]
    };
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'partner-page/',
      metaData: null
    };
  },

  computed: {
    partner() {
      return this.itemData;
    }
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
  }
} // end export

</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<i18n>
{
  "de": {
    "pagePartner.signupTitle": "Partner werden"
    },
  "en": {
    "pagePartner.signupTitle": "Become a partner"
    }
}
</i18n>

<style lang="scss">

</style>


<style lang="scss" scoped>

</style>



