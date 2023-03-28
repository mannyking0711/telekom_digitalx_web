<template>
  <div class="eventApp">
    <div class="eventApp__column">
      <div class="eventApp__headline-container">
        <h3 class="eventApp__headline">{{ data[`headline_${lang}`] }}</h3>
        <p class="eventApp__subheadline">{{ data[`subheadline_${lang}`] }}</p>
      </div>
      <div class="eventApp__image-container eventApp__image-container--mobile">
        <img
          v-if="data.image && data.image.url"
          :src="data.image.url"
          alt="DIGITAL X App"
          class="eventApp__image" />
      </div>
      <div class="eventApp__text-container">
        <div v-html="data[`text_${lang}`]" class="eventApp__text" />
        <div class="eventApp__button-container">
          <a v-if="data[`playstore_link_${lang}`]" :href="data[`playstore_link_${lang}`]" class="eventApp__button">
            <img :src="`${basePath}../img/app/event/playstore_${lang}.svg`" :alt="$t('eventApp.playstoreButton')" />
          </a>
          <a v-if="data[`appstore_link_${lang}`]" :href="data[`appstore_link_${lang}`]" class="eventApp__button">
            <img :src="`${basePath}../img/app/event/appstore_${lang}.svg`" :alt="$t('eventApp.appstoreButton')" />
          </a>
        </div>
      </div>
    </div>
    <div class="eventApp__column">
      <div class="eventApp__image-container eventApp__image-container--desktop">
        <img
          v-if="data.image && data.image.url"
          :src="data.image.url"
          alt="DIGITAL X App"
          class="eventApp__image" />
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
      "eventApp.playstoreButton": "Zum PlayStore",
      "eventApp.appstoreButton": "Zum AppStore"
    },
    "en": {
      "eventApp.playstoreButton": "PlayStore",
      "eventApp.appstoreButton": "AppStore"
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

  name: 'EventApp',

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
    lang() {
      return this.$i18n.locale === 'de' ? 'de' : 'en'
    },
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
