<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>

  <div class="index-magazine-hero" :class="{loading: isLoading}" v-if="item">

    <!-- IMAGE -->
    <div class="image" :style="imageGradient">

      <!-- CONTENT -->
      <div class="container-fluid">

        <div>
          <!-- BUTTON Event -->
          <a v-if="item.button && item.slug" :href="$router.resolve(link('events.detail', {slug: item.slug})).href" class="btn blue">{{ item.button }}</a>

          <!-- HEADLINE -->
          <a v-if="item.button && item.slug" :href="$router.resolve(link('events.detail', {slug: item.slug})).href">
            <h3 class="headline">{{ item.title }}</h3>
          </a>
          <h3 v-else class="headline">{{ item.title }}</h3>

          <!-- COLORBOX -->
          <div class="colorbox"></div>

          <!-- TAGS -->
          <div class="tags">
            <router-link class="tag" v-for="(tag, index) in item.tags" :key="tag" :to="linkMagazineSearch(tag)">
              {{ tag }}
            </router-link>
          </div>

        </div>

      </div>

    </div>

    <div class="hero-overlay">
      <!-- EVENT COUNTDOWN DESKTOP -->
<!--      <event-countdown-->
<!--        v-if="eventCountdown"-->
<!--        :start-timestamp="eventCountdown.start_timestamp"-->
<!--        :title="eventCountdown.title" :text="''" :logo="eventCountdown.logo"-->
<!--        :labelDay="eventCountdown.day" :labelDays="eventCountdown.days"-->
<!--        :button="eventCountdown.button" :link-register="eventCountdown.link_register" btn-class="blue"-->
<!--      />-->

      <!-- EVENT PRESENTER DESKTOP -->
      <event-presenter
        v-if="item.presenter_active && eventPresenter"
        :title="eventPresenter.title"
        :text="eventPresenter.text"
        :image="eventPresenter.image"
      />

      <!-- EVENT TICKETS DESKTOP -->
      <event-tickets
        v-if="item.tickets_active && eventTickets"
        :title="eventTickets.title"
        :text="eventTickets.text"
        :logo="eventTickets.logo"
        :button="eventTickets.button"
        :link-register="eventTickets.link_register"
        css="blue"
      />
    </div>

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

  name: "IndexHero",

  props: {
    hero: {type: Object, required: false},
    eventPresenter: {type: Object, required: false},
    eventTickets: {type: Object, required: false},
    eventCountdown: {type: Object, required: false},
  },

  data() {
    return {
      isLoading: true,
      item: {
        type: Object,
      },
    };
  },

  computed: {
    imageGradient() {
      let image = this.item.image;

      let deg = '135deg'
      let color1 = '#000 0%'
      let color2 = 'rgba(255, 255, 255, 0) 50%'
      let color3 = 'rgba(255, 255, 255, 0) 100%)'

      let imageStyle = 'display: -webkit-box !important;'
      imageStyle += 'display: -ms-flexbox !important;'
      imageStyle += 'display: flex !important;'
      imageStyle += 'width: 100% !important;'

      imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ', ' + color3 + ', url("' + image + '");'
      imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ', ' + color3 + ', url("' + image + '");'

      imageStyle += 'background-size: cover !important;'
      imageStyle += 'background-repeat: no-repeat !important;'
      imageStyle += 'background-position: 50% !important;'

      return imageStyle;
    },

  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
  },

  mounted() {
    this.initItem();
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    initItem() {
      if (this.hero) {
        this.item = this.hero;
        this.isLoading = false;
      }
    },

    linkMagazineSearch(tag) {
      let linkTarget = this.link('magazine.article');
      linkTarget.query = {q: tag};
      return linkTarget;
    },
  },

  /////////////////////////////////
  // WATCH
  /////////////////////////////////

  watch: {
    hero(newValue, oldValue) {
      this.initItem();
    },
  },
}; // end export
</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
