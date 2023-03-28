<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="search-input">
    <div class="form-row pageMagazine__search-category">
      <div class="input-select">
        <svg-icon icon="app/icon-select"></svg-icon>
        <select v-model="category">
          <option v-for="item in arrayOfCategories" :value="item" :key="item">
            {{ $t('pagesearchresultsItem.tag.' + item) }}
          </option>
        </select>
      </div>
    </div>

    <div class="search-input__input">
      <vue-suggestion
          ref="input"
          :items="candidates"
          :setLabel="setLabel"
          :itemTemplate="itemTemplate"
          :inputOptions="{placeholder: $t('headerSearch.placeholder')}"
          v-model="this.freeText"
          @changed="inputChange"
          @selected="itemSelected"
      />
      <div @click="onSearch()">
        <svg-icon icon="app/icon-search"></svg-icon>
      </div>

    </div>

    <button class="btn blue icon-left search-input__button" @click="onSearch()">
      <svg-icon icon="app/icon-arrow" />
      <span>{{ $t('headerSearch.button') }}</span>
    </button>
  </div>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import Dropdown from 'vue-dropdowns';
import ItemTemplate from './ItemComponent.vue';
import fetch from "node-fetch";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'SearchInput',

  props: {
    searchTerm: String,
    searchCategory: String,
  },

  components: {
    'Dropdown': Dropdown
  },

  data() {
    return {
      ENDPOINT: 'autocomplete/search?q=',

      category: 'all',
      suggest: [],
      freeText: '',
      candidates: [],
      itemTemplate: ItemTemplate,


      arrayOfCategories: [
        'all',
        "article",
        "digi",
        "partner",
        "speaker",
        "podcast",
        "video"
      ],
    };
  },

  watch: {
    searchTerm: {
      handler: function (value) {
        this.freeText = value;
      },
      immediate: false
    },
    searchCategory: {
      handler: function (value) {
        this.category = value;
      },
      immediate: false
    }
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    focus: function() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    onCategorySelected(payload) {
      this.category = payload.id;
    },

    itemSelected(item) {
      if (item.category === 'word') {
        const list = this.freeText.split(' ');
        list.pop();
        list.push(item.keyword);
        this.freeText = list.join(' ');

      } else {
        item.keyword = item.keyword.replace(/<[^>]+>/g, '');

        this.$router.push(
          this.link(
              this.getLinkTarget(item.category),
              this.getLinkParams(item)
          )
        );
      }
    },

    getLinkTarget(category) {
      switch(category) {
        case 'article': 	  return 'magazine.article.detail';
        case 'podcast': 	  return 'magazine.podcast.detail';
        case 'video': 		  return 'magazine.video.detail';
        case 'partner': 	  return 'partner.detail';
        case 'speaker': 	  return 'speaker.detail';
        case 'digi': 	return 'magazine.digi-index.detail';
      }
    },

    getLinkParams(item) {
      const slug = this.$i18n.locale === 'en' ? item.slug_en : item.slug_de;
      const group = this.$i18n.locale === 'en' ? item.group_en : item.group_de;
      switch(item.category) {
        case 'article': 	  return { slug: slug, group: group };
        case 'podcast': 	  return { slug: slug, group: group };
        case 'video': 		  return { slug: slug, group: group };
        case 'partner': 	  return { slug: slug };
        case 'speaker': 	  return { slug: slug };
        case 'digi':	return { slug: slug };
      }
    },

    setLabel(item) {
      return this.freeText;
    },
    inputChange(text) {
      this.freeText = text;

      fetch(this.$store.getters.env.content_url + this.ENDPOINT
          + encodeURIComponent(this.freeText)
          + "&c=" + this.category
          + '&lang=' + this.$i18n.locale)
          .then(response => response.json())
          .then(data => {
            this.candidates = data;
          })
          .catch(err => console.log(err))
    },


    onSearch() {
      if (this.$router.currentRoute.query.q !== this.freeText || this.$router.currentRoute.query.c !== this.category) {
        this.$store.commit('setSearchItemsOffset', 0);
        let linkTarget = this.link('search');
        linkTarget.query = { q: this.freeText, c: this.category };
        this.$router.push(linkTarget);
      }
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
    "headerSearch.placeholder": "Suchen Sie z.B. “Logistik”, “5G” oder “CEO”",
    "headerSearch.button": "Suchen",
    "pagesearchresultsItem.tag.all": "Alle",
    "pagesearchresultsItem.tag.article": "Artikel",
    "pagesearchresultsItem.tag.video": "Video",
    "pagesearchresultsItem.tag.podcast": "Podcast",
    "pagesearchresultsItem.tag.speaker": "Speaker",
    "pagesearchresultsItem.tag.partner": "Partner",
    "pagesearchresultsItem.tag.digi": "Digitalisierungsindex"
  },
  "en": {
    "headerSearch.placeholder": "Search for e.g. “Logistics”, “5G” or “CEO”",
    "headerSearch.button": "Search",
    "pagesearchresultsItem.tag.all": "All",
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
