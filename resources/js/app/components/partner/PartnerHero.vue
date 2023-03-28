<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="partner-hero">
    <!-- IMAGE -->
    <div class="partner-hero__image" :style="imageGradient">
      <section class="container-fluid inner no-spacing">
        <div class="col-100">
          <div class="partner-hero__container">
            <div class="partner-hero__back btn icon-left" @click="$router.go(-1)">
              <svg-icon class="svg-icon" icon="app/icon-arrow"></svg-icon>
              <span>{{ $t('event-hero.back') }}</span>
            </div>
            <div class="partner-hero__grid">
              <div class="partner-hero__col1">
                <img v-if="companyImage" :src="companyImage" :alt="name"/>
              </div>
              <div class="partner-hero__col2">
                <h1 class="partner-hero__headline">
                  {{ name }}
                </h1>
                <div v-if="brandhouseName" class="partner-hero__brandhouse">
                  <h2 class="partner-hero__brandhouse__headline">
                    <div class="partner-hero__brandhouse__icon">
                      <svg viewBox="0 0 48 48" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#4CB4E7" stroke="#4CB4E7" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>
                    </div>
                    {{ brandhouseName }}<br>
                    <span>{{ brandhouseAddress }}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  name: "PartnerHero",

  props: {
    name: {type: String, required: false, default: null},
    bgImage: {type: String, required: false, default: null},
    companyImage: {type: String, required: false, default: null},
    brandhouseName: {type: String, required: false, default: null},
    brandhouseAddress: {type: String, required: false, default: null},
  },

  computed: {
    imageGradient() {
      const deg = '180deg'
      let imageStyle = 'display: -webkit-box !important;'
      imageStyle += 'display: -ms-flexbox !important;'
      imageStyle += 'display: flex !important;'
      imageStyle += 'width: 100% !important;'

      if (this.bgImage) {
        const image = 'url("' + this.bgImage + '")'
        const color1 = 'rgba(26, 60, 93, 0) 50%'
        const color2 = 'rgba(13, 31, 48, 1) 100%'
        imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ';'
        imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ';'
      } else {
        const color1 = 'rgba(26, 60, 93, 1) 0%'
        const color2 = 'rgba(13, 31, 48, 1) 100%'
        imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ');'
        imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ');'
      }

      return imageStyle;
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
    "event-hero.back": "Zurück"
  },
  "en": {
    "event-hero.back": "Back"
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
