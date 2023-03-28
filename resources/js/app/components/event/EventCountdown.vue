<template>
  <div class="index-event-counter">
    <div v-if="logo" class="index-event-counter-logo">
      <img :src="logo" :alt="title"/>
    </div>
    <div class="index-event-counter-digits">
      <svg viewBox="0 0 100 70">
        <defs>
          <linearGradient id="gradient-digit" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse">
            <stop stop-color="#91d0ec" offset="0%"/>
            <stop stop-color="#38abdf" offset="100%"/>
          </linearGradient>
        </defs>
        <text fill="url(#gradient-digit)" x="50" y="65" text-anchor="middle" class="event-counter-digits-text">
          {{ Math.max(days, 0) }}
        </text>
      </svg>
    </div>
    <p class="index-event-counter-daysleft">{{ days === 1 ? labelDay : labelDays }}<br>{{ title }}</p>
    <p v-if="text" class="index-event-counter-text">
      {{ text }}
    </p>
    <div class="index-event-register-btn">
      <a v-if="button && linkRegister" :href="linkRegister" target="_blank" class="btn" :class="btnClass">{{
          button
        }}</a>
    </div>
  </div>
</template>

<script>
import countdown from '../../services/countdown';

export default {
  name: 'EventCountdown',
  props: {
    startTimestamp: {type: Number, required: true},
    logo: {type: String, required: true},
    labelDay: {type: String, required: true},
    labelDays: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: false},
    button: {type: String, required: false},
    linkRegister: {type: String, required: false},
    btnClass: {type: String, required: false, default: 'yellow'},
  },

  data() {
    return {
      days: 0,
      timer: null
    };
  },

  watch: {
    startTimestamp(value) {
      this.initCounter(value);
    }
  },

  mounted() {
    this.initCounter(this.startTimestamp);
  },

  destroyed() {
    this.destroyCounter();
  },

  methods: {
    initCounter(eventStartTimestamp) {
      if (!eventStartTimestamp) return;

      this.destroyCounter();
      
      // init countdown.js
      var eventStartDate = new Date(eventStartTimestamp);
      eventStartDate.setHours(0, 0, 0, 0);
      this.timer = countdown(
          eventStartDate,
          (ts) => {
            this.days = Math.ceil(ts.hours / 24);
            if (ts.start < ts.end) {
              this.days = this.days * -1;
            }
          },
          countdown.HOURS
      );
    },

    destroyCounter() {
      if (this.timer) {
        window.clearInterval(this.timer);
      }
    }
  }
}

</script>
