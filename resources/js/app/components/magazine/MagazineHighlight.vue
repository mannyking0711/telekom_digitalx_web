<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="hero-section" :style="imageGradient">

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-8">
          <router-link :to="link(linkTarget, linkParams)" class="">
            <h1>{{ highlight.title }}</h1>
          </router-link>
          <article-info
              class="pageMagazine__feature-articleinfo"
              :item_id="highlight.id"
              :item_type="highlight.type"
              :author="author"
              :published="highlight.published"
              :tags="highlight.tags" />
        </div>
        <div class="col-xl-4">
          <div v-if="impressions" class="box-blue">
            <div class="inhighlights">
              <h3 class="inhighlights__headline">
                <span v-if="contentType === 'article'">{{ $t('highlights.articleHeadline') }}</span>
                <span v-else-if="contentType === 'video'">{{ $t('highlights.videoHeadline') }}</span>
                <span v-else-if="contentType === 'podcast'">{{ $t('highlights.podcastHeadline') }}</span>
                <span v-else>{{ $t('highlights.allHeadline') }}</span>
              </h3>
              <div class="inhighlights__tabs" ref="nav">
                <div class="tns-nav-active">
                  <div class="inhighlights__tab">{{ $t('highlights.today') }}</div>
                  <div class="colorbox green inhighlights__colorbox"></div>
                </div>
                <div>
                  <div class="inhighlights__tab">{{ $t('highlights.week') }}</div>
                  <div class="colorbox green inhighlights__colorbox"></div>
                </div>
                <div>
                  <div class="inhighlights__tab">{{ $t('highlights.month') }}</div>
                  <div class="colorbox green inhighlights__colorbox"></div>
                </div>
              </div>
              <div ref="slider">
                <ol class="inhighlights__articles">
                  <li v-for="(item, j) in highlights.day" :key="j" class="inhighlights__article">
                    <router-link :to="link(linkTarget(item),linkParams(item))">{{ item.title }}</router-link>
                  </li>
                </ol>
                <ol class="inhighlights__articles">
                  <li v-for="(item, j) in highlights.week" :key="j" class="inhighlights__article">
                    <router-link :to="link(linkTarget(item),linkParams(item))">{{ item.title }}</router-link>
                  </li>
                </ol>
                <ol class="inhighlights__articles">
                  <li v-for="(item, j) in highlights.month" :key="j" class="inhighlights__article">
                    <router-link :to="link(linkTarget(item),linkParams(item))">{{ item.title }}</router-link>
                  </li>
                </ol>
              </div>
            </div>
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

		name: 'MagazineHighlight',

		props: {
      impressions: Object,
			highlight: Object,
      highlights: Array,
      bgImageDarken: {type: String, required: false, default: '0.5'},
      contentType: {type: String, required: false, default: 'all'}
		},

		data() {
			return {};
		},

		computed: {
      imageGradient() {
        const deg = '180deg'
        let imageStyle = 'display: -webkit-box !important;'
        imageStyle += 'display: -ms-flexbox !important;'
        imageStyle += 'display: flex !important;'
        imageStyle += 'width: 100% !important;'

        if (this.highlight.img_highlight) {
          const image = 'url("' + this.highlight.img_highlight + '")'
          const color1 = 'rgba(0, 0, 0, ' + this.bgImageDarken + ') 0%'
          const color2 = 'rgba(0, 0, 0, ' + this.bgImageDarken + ') 100%'
          imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ' center center no-repeat fixed;'
          imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ' center center no-repeat fixed;'
          imageStyle += 'background-size: cover;'
        } else if (this.highlight.img_list) {
          const image = 'url("' + this.highlight.img_list + '")'
          const color1 = 'rgba(0, 0, 0, ' + this.bgImageDarken + ') 0%'
          const color2 = 'rgba(0, 0, 0, ' + this.bgImageDarken + ') 100%'
          imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ' center center no-repeat fixed;'
          imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + '), ' + image + ' center center no-repeat fixed;'
          imageStyle += 'background-size: cover;'
        } else {
          const color1 = 'rgba(26, 60, 93, 1) 0%'
          const color2 = 'rgba(13, 31, 48, 1) 100%'
          imageStyle += 'background: -moz-linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ');'
          imageStyle += 'background: linear-gradient(' + deg + ', ' + color1 + ', ' + color2 + ');'
        }

        return imageStyle;
      },

			author() {
				if (this.highlight.author && this.highlight.author.fullname) {
					return this.highlight.author.fullname;
				}

				return '';
			},

			linkTarget() 	{
				return `magazine.${this.highlight.type}.detail`;
			},

			linkParams() {
				if (this.highlight.type === 'article') {
					return { slug: this.localeSlug(this.highlight), group: this.localeSlug(this.highlight.articles_group) };
				}

				if (this.highlight.type === 'podcast') {
					return { slug: this.localeSlug(this.highlight), group: this.localeSlug(this.highlight.podcast_group) };
				}

				if (this.highlight.type === 'video') {
					return { slug: this.localeSlug(this.highlight), group: this.localeSlug(this.highlight.videos_group) };
				}

				return { slug: this.localeSlug(this.highlight) };
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

<i18n>
{
  "de": {
    "highlights.articleHeadline": "Meistgelesene Artikel",
    "highlights.videoHeadline": "Meistgesehene Videos",
    "highlights.podcastHeadline": "Meistgehörte Podcasts",
    "highlights.allHeadline": "Meistgesehene Inhalte",
    "highlights.today": "Heute",
    "highlights.week": "Woche",
    "highlights.month": "Monat"
  },
  "en": {
    "highlights.articleHeadline": "Most read articles",
    "highlights.videoHeadline": "Most watched videos",
    "highlights.podcastHeadline": "Most listend podcasts",
    "highlights.allHeadline": "Most viewed content",
    "highlights.today": "Today",
    "highlights.week": "Week",
    "highlights.month": "Month"
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


