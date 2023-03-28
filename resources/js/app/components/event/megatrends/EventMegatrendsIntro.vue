<template>
  <section class="event-megatrends-intro inner no-spacing">
    <div class="col-100">
      <div class="">
        <div class="">
          <div class="event-megatrends-intro__headline">
            <h1 class="event-megatrends-intro__title">
              {{ title }}
            </h1>
            <h3 v-if="subtitle" class="event-megatrends-intro__subtitle">
              {{ subtitle }}
            </h3>
          </div>
          <p v-if="text" class="event-megatrends-intro__text" v-html="text"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventMegatrendsIntro",
  props: {
    title: {type: String, required: false, default: null},
    subtitle: {type: String, required: false, default: null},
    text: {type: String, required: false, default: null},
  },
};
</script>
