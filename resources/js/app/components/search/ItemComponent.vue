<template>
  <span>
    <span v-if="item.category!=='word'" class="category">{{ item.category }}</span>
    <span v-html="item.keyword"></span>
  </span>
</template>

<script>
export default {
  props: {
    item: {required: true},
  },

};
</script>