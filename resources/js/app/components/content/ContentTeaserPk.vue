<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="content-teaser-pk">
    <section v-if="headline" class="inner no-spacing">
      <div class="col-100">
        <h3 v-if="headline" class="content-teaser-pk__headline">{{ headline }}</h3>
        <p v-if="text" class="content-teaser-pk__intro">{{ text }}</p>
      </div>
    </section>

    <event-gk-pk-teaser
      v-if="event && event.gk_pk_teaser"
      :title1="event.gk_pk_teaser.title1"
      :subtitle1="event.gk_pk_teaser.subtitle1"
      :text1="event.gk_pk_teaser.text1"
      :content1="event.gk_pk_teaser.content1"
      :image1="event.gk_pk_teaser.image1"
      :button1_1="event.gk_pk_teaser.button1_1"
      :url1_1="event.gk_pk_teaser.url1_1"
      :button1_2="event.gk_pk_teaser.button1_2"
      :url1_2="event.gk_pk_teaser.url1_2"
      :button1_3="event.gk_pk_teaser.button1_3"
      :url1_3="event.gk_pk_teaser.url1_3"
      :title2="event.gk_pk_teaser.title2"
      :subtitle2="event.gk_pk_teaser.subtitle2"
      :text2="event.gk_pk_teaser.text2"
      :content2="event.gk_pk_teaser.content2"
      :image2="event.gk_pk_teaser.image2"
      :button2_1="event.gk_pk_teaser.button2_1"
      :url2_1="event.gk_pk_teaser.url2_1"
      :button2_2="event.gk_pk_teaser.button2_2"
      :url2_2="event.gk_pk_teaser.url2_2"
      :button2_3="event.gk_pk_teaser.button2_3"
      :url2_3="event.gk_pk_teaser.url2_3"
    />
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>


import EventGkPkTeaser from "../event/EventGkPkTeaser";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'ContentTeaserPk',
  components: {EventGkPkTeaser},
  props: {
    headline: String,
    text: String,
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },
  },

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






