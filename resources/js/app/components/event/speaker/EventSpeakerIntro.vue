<template>
  <section class="event-speaker-intro inner no-spacing">
    <div class="col-100">
      <div class="event-speaker-intro__container">
        <div class="event-speaker-intro__content">
          <div class="event-speaker-intro__headline">
            <h1 id="scrolltop" class="event-speaker-intro__title">
              {{ title }}
            </h1>
            <h3 v-if="subtitle" class="event-speaker-intro__subtitle">
              {{ subtitle }}
            </h3>
          </div>
          <p v-if="text" class="event-speaker-intro__text" v-html="text"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventSpeakerIntro",
  props: {
    title: {type: String, required: false, default: null},
    subtitle: {type: String, required: false, default: null},
    text: {type: String, required: false, default: null},
  },
};
</script>
