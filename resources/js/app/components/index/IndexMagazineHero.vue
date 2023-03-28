<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>

  <div class="index-magazine-hero" :class="{loading: isLoading}" v-if="item && item.image">

    <!-- IMAGE -->
    <div class="image" v-if="item.type === 'article'" :style="imageGradient">

      <!-- CONTENT -->
      <div class="content">

        <div>
          <!-- BUTTON Event
          <a :href="$router.resolve(link('events.detail', {slug: 'digital-x-2021'})).href"
             class="btn blue">{{ $t('indexMagazineHero.button1') }}</a> -->

          <!-- BUTTON Magazin -->
          <router-link :to="link('magazine')" class="btn blue">
            <!--<router-link :to="link(linkTargetMagazineDetail,linkParams)" class="btn blue">-->
            {{ $t('indexMagazineHero.button2') }}
          </router-link>

          <!-- HEADLINE -->
          <router-link :to="link(linkTargetMagazineDetail,linkParams)">
            <h3 class="headline" v-html="itemTitle"></h3>
          </router-link>

          <!-- COLORBOX -->
          <div class="colorbox"></div>

          <!-- TAGS -->
          <div class="tags">
            <router-link class="tag" v-for="(tag, index) in tags" :key="tag" :to="linkMagazineSearch(tag)">
              {{ tag }}
            </router-link>
          </div>

        </div>

      </div>

    </div>

    <!-- EVENT COUNTDOWN DESKTOP -->
<!--    <event-countdown-->
<!--      v-if="eventCountdown"-->
<!--      :start-timestamp="eventCountdown.start_timestamp"-->
<!--      :title="eventCountdown.title" :text="''" :logo="eventCountdown.logo"-->
<!--      :labelDay="eventCountdown.day" :labelDays="eventCountdown.days"-->
<!--      :button="eventCountdown.button" :link-register="eventCountdown.link_register" btn-class="blue"/>-->

    <!-- EVENT TICKETS DESKTOP -->
    <event-tickets
      v-if="eventTickets"
      :title="eventTickets.title" :text="eventTickets.text" :logo="eventTickets.logo"
      :button="eventTickets.button" :link-register="eventTickets.link_register" css="blue" />

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

  name: "IndexMagazineHero",

  props: {
    articleHero: {type: Object, required: false},
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
      let image = this.item.img_detail ? this.item.img_detail : (this.item.img_highlight ? this.item.img_highlight : this.item.img_list);

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

      return imageStyle;
    },

    itemTitle() {

      switch (this.item.type) {
        case 'article':
          return this.item.title;
        case 'podcast':
          return `${this.item.podcast_group.title} #${this.item.episode_number}<br>${this.item.title}`;
        case 'video':
          return this.item.title;
      }
    },

    linkTargetMagazine() {
      switch (this.item.type) {
        case 'article':
          return 'magazine.article';
        case 'podcast':
          return 'magazine.podcast';
        case 'video':
          return 'magazine.video';
      }
    },

    linkTargetMagazineDetail() {
      switch (this.item.type) {
        case 'article':
          return 'magazine.article.detail';
        case 'podcast':
          return 'magazine.podcast.detail';
        case 'video':
          return 'magazine.video.detail';
      }
    },

    linkParams() {

      switch (this.item.type) {
        //case 'article': 	return { slug: this.localeSlug(this.item) };
        case 'article':
          return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.articles_group)};
        case 'podcast':
          return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.podcast_group)};
        //case 'video': 		return { slug: this.localeSlug(this.item) };
        case 'video':
          return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.videos_group)};
      }
    },

    tags() {

      return this.item.tags ? this.item.tags : [];

    }

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
      if (this.articleHero) {
        this.item = this.articleHero;
        this.isLoading = false;
      }
    },

    linkMagazineSearch(tag) {
      let linkTarget = this.link(this.linkTargetMagazine);
      linkTarget.query = {q: tag};
      return linkTarget;
    },
  },

  /////////////////////////////////
  // WATCH
  /////////////////////////////////

  watch: {
    articleHero(newValue, oldValue) {
      this.initItem();
    },
  },
}; // end export
</script>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
{
  "de": {
    "indexMagazineHero.button1": "Zum Event",
    "indexMagazineHero.button2": "Aktuelle News"
  },
  "en": {
    "indexMagazineHero.button1": "To the event",
    "indexMagazineHero.button2": "Latest News"
  }
}
</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
