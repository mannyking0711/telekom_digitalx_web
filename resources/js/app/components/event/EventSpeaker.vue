<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="eventspeaker" id="eventspeaker" v-if="title && speakers && speakers.length">

    <section class="inner no-spacing">
      <div class="col-100">

        <h3 class="eventspeaker__headline">
          <span v-if="title_tag" class="eventspeaker__headline__tag">{{ title_tag }}</span>
          {{ title }}
        </h3>

        <p v-if="text" class="eventspeaker__text" v-html="text"></p>

        <router-link v-if="button" :to="link('events.detail.speaker', { slug: localeSlug(event) })" class="btn yellow icon-left eventspeaker__btn">
          <svg-icon icon="app/icon-arrow"></svg-icon>
          <span>{{ button }}</span>
        </router-link>

        <ul class="eventspeaker__list">
          <li v-for="speaker in speakers" :key="speaker.id" class="eventspeaker__speaker">
            <img :src="speaker.img_list" class="eventspeaker__speaker-image"/>
            <div class="eventspeaker__speaker-name">{{ speaker.fullname }}</div>
            <div class="eventspeaker__speaker-desc">
              {{ speaker.company }}
              <span v-if="speaker.company && speaker.subline"> - </span>
              {{ speaker.subline }}
            </div>
          </li>
        </ul>
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

  name: 'EventSpeaker',

  props: {
    title: String,
    title_tag: String,
    text: String,
    button: String,
    speakers: Array,
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
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



