<template>
  <section class="section">
    <div class="container-fluid">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "LibSection",
  props: {
    title: {type: String, required: false, default: null},
    subtitle: {type: String, required: false, default: null},
  },
};
</script>
