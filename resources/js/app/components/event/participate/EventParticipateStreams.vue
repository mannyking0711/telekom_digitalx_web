<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <lib-section-header
    class="event-participate-streams"
    :headline="headline"
    :headline_tag="headline_tag"
    :subheadline="subheadline"
    :text="text"
  >
    <event-streams v-if="streams && streams.length" :streams="streams" />
  </lib-section-header>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import LibSectionHeader from "../../lib/LibSectionHeader";
import EventStreams from "../EventStreams";
export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'EventParticipateStreams',
  components: {EventStreams, LibSectionHeader},
  props: {
    headline: String,
    headline_tag: String,
    subheadline: String,
    text: String,
    streams: Array,
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






