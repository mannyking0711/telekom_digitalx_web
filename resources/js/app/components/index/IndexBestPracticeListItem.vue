<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="index-best-practice-list-item">

    <!-- IMAGE -->
    <router-link :to="link(linkTarget,linkParams)" class="image">
      <img class="lazy" alt="" :data-src="imageUrl" />
      <div v-if="item.type == 'podcast'" class="list-item-podcast-icon"><svg-icon icon="app/icon-podcast"></svg-icon></div>
      <div v-if="item.type == 'video'" class="list-item-duration">{{ item. duration }}</div>
      <div v-if="item.type == 'video'" class="list-item-play"><svg-icon icon="app/icon-play"></svg-icon></div>
    </router-link>

    <!-- CONTENT -->
    <div class="content">

      <!-- HEADLINE -->
      <router-link :to="link(linkTarget,linkParams)">
        <h4 class="headline" v-html="itemTitle"></h4>
      </router-link>

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

  name: 'IndexBestPracticeListItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
    highlight: false,
  },

  data() {
    return {
    };
  },

  computed: {
    authorName() 	{ return this.item && this.item.author ? this.item.author.fullname : ''; },
    imageUrl() 		{ return this.item.img_highlight ? this.item.img_highlight : this.item.img_list; },

    itemTitle() 	{

      switch(this.item.type) {
        case 'article': 	return this.item.title;
        case 'podcast': 	return `${this.item.podcast_group.title} #${this.item.episode_number}<br>${this.item.title}`;
        case 'video': 		return this.item.title;
      }
    },

    linkTarget() 	{

      switch(this.item.type) {
        case 'article': 	return 'magazine.article.detail';
        case 'podcast': 	return 'magazine.podcast.detail';
        case 'video': 		return 'magazine.video.detail';
      }
    },

    linkParams() {

      switch(this.item.type) {
          //case 'article': 	return { slug: this.localeSlug(this.item) };
        case 'article': 	return { slug: this.localeSlug(this.item), group: this.localeSlug(this.item.articles_group) };
        case 'podcast': 	return { slug: this.localeSlug(this.item), group: this.localeSlug(this.item.podcast_group) };
          //case 'video': 		return { slug: this.localeSlug(this.item) };
        case 'video': 		return { slug: this.localeSlug(this.item), group: this.localeSlug(this.item.videos_group) };
      }
    }

  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {

  },

  mounted() {

  },


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

  }

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


