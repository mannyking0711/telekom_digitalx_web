<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="event-streams">
    <div v-if="currentStream" class="event-streams__header">
      <div class="event-streams__name">
        {{ currentStream.name }}
      </div>
      <div v-if="currentStream.uuid_accessibility" class="event-streams__accessibility">
        <div class="event-streams__button btn blue icon-left" :class="{ 'active': accessibility }" @click="toggleAccessibility()">
          <svg-icon icon="app/icon-accessibility"></svg-icon>
          <span>{{ $t('event-streams.toggleAccessibility') }}</span>
        </div>
      </div>
    </div>
    <div class="event-streams__player">
      <div id="player1"></div>
    </div>

    <div v-if="streams && streams.length" class="event-streams__streams">
      <div
        v-for="stream in streams"
        :key="stream.id"
        class="event-streams__stream"
        @click="selectStream(stream)"
      >
        <div class="event-streams__stream__image" :class="{ 'event-streams__stream__image--active': stream === currentStream }">
          <img :data-src="stream.image" :src="stream.image" class="lazy" :alt="stream.name" />
        </div>
        <div class="event-streams__stream__name">
          {{ stream.name }}
        </div>
      </div>
    </div>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import ClientOnly from "../utils/ClientOnly";
import {IS_SSR} from "../../plugins/ssrSwitch";
export default {
  name: 'EventStreams',
  components: {ClientOnly},
  props: {
    streams: Array,
  },

  data() {
    return {
      currentStream: null,
      accessibility: false,
      js3q: null,
    }
  },

  mounted() {
    this.currentStream = (this.streams && this.streams.length) ? this.streams[0] : null;
    let playerScript = document.createElement('script');
    playerScript.setAttribute('src', 'https://player.3qsdn.com/js3q.latest.js');
    playerScript.onload = this.waitForJS3Q;
    document.head.appendChild(playerScript);
  },

  methods: {
    selectStream(stream) {
      if (this.currentStream !== stream) {
        this.currentStream = stream;
        this.updateStream();
      }
    },

    toggleAccessibility() {
      this.accessibility = !this.accessibility;
      this.updateStream();
    },

    updateStream() {
      if (
        this.js3q &&
        typeof this.js3q.destroy() === 'function'
      ) {
        this.js3q.pause()
        this.js3q.destroy()
      }

      this.js3q = new window.js3q({
        dataid: (this.accessibility && this.currentStream.uuid_accessibility) ? this.currentStream.uuid_accessibility : this.currentStream.uuid,
        container: 'player1',
        autoplay: true,
      })
    },

    waitForJS3Q() {
      if (window.js3q) {
        this.js3q = new window.js3q({
          // set default stream
          dataid: this.currentStream ? this.currentStream.uuid : null,
          container: 'player1',
          autoplay: true,
        })
      } else {
        window.setTimeout(this.waitForJS3Q, 300);
      }
    },
  },

  watch: {
    streams: {
      handler: function (streams) {
        this.selectStream((streams && streams.length) ? streams[0] : null)
      },
      immediate: false
    }
  },
} // end export

</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "event-streams.toggleAccessibility": "Gebärdensprache"
  },
  "en": {
    "event-streams.toggleAccessibility": "Sign language"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<style lang="scss">

</style>


<style lang="scss" scoped>

</style>



