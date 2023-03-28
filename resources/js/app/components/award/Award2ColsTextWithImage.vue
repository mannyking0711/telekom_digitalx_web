<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="award2ColsTextWithImage">
    <section class="container-fluid">
      <div class="col-100">
        <div class="award2ColsTextWithImage__grid">
          <div class="award2ColsTextWithImage__col">
            <img v-if="image_col1 && image_col1.url" class="award2ColsTextWithImage__image" :src="image_col1.url" :alt="headline_col1"/>
            <div class="award2ColsTextWithImage__container--headline">
              <div v-if="quote_col1" class="award2ColsTextWithImage__quote">„{{ quote_col1 }}“</div>
              <h2 class="award2ColsTextWithImage__headline">{{ headline_col1 }}</h2>
              <h3 v-if="subheadline_col1" class="award2ColsTextWithImage__subheadline">{{ subheadline_col1 }}</h3>
            </div>
            <div v-if="text_col1" class="award2ColsTextWithImage__text" v-html="text_col1"/>
          </div>
          <div class="award2ColsTextWithImage__col">
            <img v-if="image_col2 && image_col2.url" class="award2ColsTextWithImage__image" :src="image_col2.url" :alt="headline_col2"/>
            <div class="award2ColsTextWithImage__container--headline">
              <div v-if="quote_col2" class="award2ColsTextWithImage__quote">„{{ quote_col2 }}“</div>
              <h2 class="award2ColsTextWithImage__headline">{{ headline_col2 }}</h2>
              <h3 v-if="subheadline_col2" class="award2ColsTextWithImage__subheadline">{{ subheadline_col2 }}</h3>
            </div>
            <div v-if="text_col2" class="award2ColsTextWithImage__text" v-html="text_col2"/>
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

  name: 'Award2ColsTextWithImage',

  props: {
    image_col1: Object,
    quote_col1: String,
    subheadline_col1: String,
    headline_col1: String,
    text_col1: String,
    image_col2: Object,
    quote_col2: String,
    subheadline_col2: String,
    headline_col2: String,
    text_col2: String,
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

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






