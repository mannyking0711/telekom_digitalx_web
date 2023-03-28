<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <section class="event-pk-intro inner no-spacing">
    <div class="col-100">
      <div v-if="showCountdown" class="event-pk-intro__grid">
        <div  class="event-pk-intro__grid__countdown">
          <event-countdown
            :start-timestamp="event.start_timestamp"
            :logo="event.logo"
            :title="countdown_title"
            :text="countdown_text"
            :labelDay="countdown_day"
            :labelDays="countdown_days"
            :button="countdown_button"
            :link-register="url"
            btnClass="magenta"
          />
        </div>
        <div class="event-pk-intro__grid__content">
          <div class="event-pk-intro__headline">
            <h1 class="event-pk-intro__title">{{ title }}</h1>
            <h3 v-if="subtitle" class="event-pk-intro__subtitle">{{ subtitle }}</h3>
          </div>
          <div v-html="text"/>
          <div v-if="image">
            <img class="lazy" :data-src="image" :src="image" :alt="title">
          </div>
          <div v-if="text2" class="event-pk-intro__text2" v-html="text2"/>
          <a v-if="button && url" :href="url" target="_blank" class="event-pk-intro__button btn magenta">
            <span>{{ button }}</span>
          </a>
        </div>
      </div>

      <div v-else>
        <div :class="image ? 'event-pk-intro__container' : ''">
          <div class="event-pk-intro__container__text">
            <div class="event-pk-intro__headline">
              <h1 class="event-pk-intro__title">{{ title }}</h1>
              <h3 v-if="subtitle" class="event-pk-intro__subtitle">{{ subtitle }}</h3>
            </div>
            <div v-html="text"/>
            <a v-if="button && url" :href="url" target="_blank" class="event-pk-intro__button btn magenta">
              <span>{{ button }}</span>
            </a>
          </div>
          <div v-if="image" class="event-pk-intro__container__image">
            <img class="lazy" :data-src="image" :src="image" :alt="title">
          </div>
        </div>
      </div>
    </div>
  </section>
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

  name: 'EventPkIntro',

  props: {
    title: String,
    subtitle: String,
    image: String,
    text: String,
    text2: String,
    button: String,
    url: String,
    countdown_show: Boolean,
    countdown_title: String,
    countdown_text: String,
    countdown_day: String,
    countdown_days: String,
    countdown_button: String,
  },

  computed: {
    event() {
      return this.$store.getters.nextEvent;
    },

    showCountdown() {
      return this.countdown_show &&
        this.event && this.event.start_timestamp && this.event.logo &&
        this.countdown_day && this.countdown_days
    }
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
