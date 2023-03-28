<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="search-results__item">
    <h3 class="search-results__item__title">
      <span class="search-results__item__tag">{{ $t("pagesearchresultsItem.tag." + item.category) }}</span>
      <span v-html="item.keyword"></span>
    </h3>
    <p class="search-results__item__description">
      {{item.meta_description}}
    </p>
    <router-link :to="link(linkTarget,linkParams)" class="search-results__item__link"><strong>{{ $t("pagesearchresultsItem.readMore") }}</strong></router-link>
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

  name: 'SearchResultsItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    linkTarget() 	{
      switch(this.item.category) {
        case 'article': 	  return 'magazine.article.detail';
        case 'podcast': 	  return 'magazine.podcast.detail';
        case 'video': 		  return 'magazine.video.detail';
        case 'partner': 	  return 'partner.detail';
        case 'speaker': 	  return 'speaker.detail';
        case 'digi': 	return 'magazine.digi-index.detail';
      }
    },

    linkParams() {
      const slug = this.$i18n.locale === 'en' ? this.item.slug_en : this.item.slug_de;
      const group = this.$i18n.locale === 'en' ? this.item.group_en : this.item.group_de;
      switch(this.item.category) {
        case 'article': 	  return { slug: slug, group: group };
        case 'podcast': 	  return { slug: slug, group: group };
        case 'video': 		  return { slug: slug, group: group };
        case 'partner': 	  return { slug: slug };
        case 'speaker': 	  return { slug: slug };
        case 'digi':	return { slug: slug };
      }
    }
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
    "pagesearchresultsItem.readMore": "Weiterlesen...",
    "pagesearchresultsItem.tag.article": "Artikel",
    "pagesearchresultsItem.tag.video": "Video",
    "pagesearchresultsItem.tag.podcast": "Podcast",
    "pagesearchresultsItem.tag.speaker": "Speaker",
    "pagesearchresultsItem.tag.partner": "Partner",
    "pagesearchresultsItem.tag.digi-index": "Digitalisierungsindex"
  },
  "en": {
    "pagesearchresultsItem.readMore":  "Read more...",
    "pagesearchresultsItem.tag.article": "Article",
    "pagesearchresultsItem.tag.video": "Video",
    "pagesearchresultsItem.tag.podcast": "Podcast",
    "pagesearchresultsItem.tag.speaker": "Speaker",
    "pagesearchresultsItem.tag.partner": "Partner",
    "pagesearchresultsItem.tag.digi-index": "Digitalisierungsindex"
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


