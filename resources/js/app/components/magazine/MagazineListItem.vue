<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="article-list-item" v-if="item">

    <div class="row">
      <div class="position-relative " :class="rowMode">
        <!-- IMAGE -->
        <router-link :to="link(linkTarget,linkParams)" class="image">

          <div class="" :class="imageMode">
            <img class="lazy" :alt="itemTitle" :src="imageUrl" :data-src="imageUrl"/>
          </div>

          <div v-if="item.type === 'podcast'" class="list-item-podcast-icon">
            <svg-icon icon="app/icon-podcast"></svg-icon>
          </div>
          <div v-if="item.type === 'video'" class="list-item-duration">{{ item.duration }}</div>
          <div v-if="item.type === 'video'" class="list-item-play">
            <svg-icon icon="app/icon-play"></svg-icon>
          </div>
        </router-link>
      </div>

      <div :class="rowMode">
        <!-- CONTENT -->
        <div class="content">
          <div>
            <span class="premiumIcon" v-if="itemIsPremium">My DIGITAL X</span>
            <!-- HEADLINE -->
            <router-link :to="link(linkTarget,linkParams)" class="__headlineComplete">

              <h3 :class="headlineStyle">
                <span v-html="itemTitle"></span>
              </h3>
            </router-link>

            <!-- ARTICLE INFO -->
            <article-info :item_id="item.id" :item_type="item.type" :published="item.published" :author="authorName"
                          :item_tags="item.tags"/>
          </div>

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

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'MagazineListItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
    highlight: false,
    headlineStyle: String,

  },

  data() {
    return {
      user: Object,
    };
  },

  computed: {
    authorName() {
      return this.item && this.item.author ? this.item.author.fullname : '';
    },

    imageUrl() {
      return this.highlight && this.item.img_highlight ? this.item.img_highlight : this.item.img_list;
    },

    itemIsPremium() {
      return this.item && this.item.premium ? this.item.premium : false
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

    linkTarget() {
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
        case 'article':
          return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.articles_group)};
        case 'podcast':
          return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.podcast_group)};
        case 'video':
          return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.videos_group)};
      }
    },

    rowMode() {
      switch (this.highlight) {
        case true:
          return 'col-lg-6';
        default:
          return 'col-12';
      }
    },
    imageMode() {
      switch (this.highlight) {
        case true:
          return 'image-wrapper';
        default:
          return 'image-wrapper-square';
      }
    }

  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {}

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


