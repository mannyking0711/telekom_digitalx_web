<template>
  <section class="lib-intro inner no-spacing">
    <div class="col-100">
      <div class="lib-intro__container">
        <div class="lib-intro__content">
          <div class="lib-intro__headline">
            <h1 class="lib-intro__title">
              {{ title }}
            </h1>
            <h3 v-if="subtitle" class="lib-intro__subtitle">
              {{ subtitle }}
            </h3>
          </div>
          <div v-if="text" class="lib-intro__text" v-html="text"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LibIntro",
  props: {
    title: {type: String, required: false, default: null},
    subtitle: {type: String, required: false, default: null},
    text: {type: String, required: false, default: null},
  },
};
</script>
