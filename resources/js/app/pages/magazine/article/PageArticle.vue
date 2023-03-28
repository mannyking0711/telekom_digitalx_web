<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <div class="pagearticle" v-if="article">
    <!-- INTRO IMAGE -->
    <img
      v-if="article.img_detail_header && article.img_detail"
      :src="article.img_detail"
      alt=""
      class="pagearticle__intro pagearticle__intro--mobile"
    />
    <div
      :style="headerImageStyle"
      class="pagearticle__intro pagearticle__intro--desktop"
    ></div>

    <!-- CONTENT SECTION -->
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <!-- MAIN CONTENT -->
            <main ref="article" v-if="article" class="pagearticle__content">
              <!-- TITLE -->
              <h1 class="pagearticle__topline" v-if="article.topline">
                {{ article.topline }}
              </h1>
              <h3 class="pagearticle__headline">{{ article.title }}</h3>

              <article-info
                  :item_id="article.id"
                  :item_type="article.type"
                  :published="article.published"
                  :author="authorName"
                  :tags="article.tags"
                  class="pagearticle__articleinfo articleinfo--large"
              />

              <!-- READING DURATION -->
              <p class="pagearticle__read-estimate">
                <span>{{ $t('pagearticle.readingEstimate') }}</span>
                <b>{{ estimatedReadingDuration }} {{ $t('pagearticle.minutes') }}</b>
              </p>

              <!-- CONTENT -->
              <template v-if="!article.premium || (article.premium && userLoggedIn)">

                <!-- INTROTEXT -->
                <h2 v-if="article.introtext" class="pagearticle__introtext">
                  {{ article.introtext }}
                </h2>

                <div v-for="(item, index) in article.content" :key="index" class="singleItemWrapper">

                  <!-- ARTICLE-TEXT -->
                  <div
                      class="pagearticle__content-text"
                      v-if="item.__component === 'article.article-text'"
                      v-html="removeEmptyParagraphs(item.content)"
                  ></div>

                  <!-- ARTICLE-IMAGE -->
                  <div
                      class="pagearticle__content-image"
                      v-if="item.__component == 'article.article-image'"
                  >
                    <img
                        class="lazy"
                        :data-src="item.image ? item.image.url : ''"
                        :alt="item.alt_text ? item.alt_text : ''"
                    />
                    <p v-if="item.caption">{{ item.caption }}</p>
                  </div>

                  <!-- ARTICLE-TEXT-IMAGE -->
                  <div
                      class="pagearticle__content-text-image"
                      :class="
                'pagearticle__content-text-image-align-' +
                  item.image_alignment.toLowerCase()
              "
                      v-if="item.__component === 'article.article-text-image'"
                  >
                    <figure class="pagearticle__content-image">
                      <img
                          class="lazy"
                          :data-src="item.image ? item.image.url : ''"
                          :alt="item.alt_text ? item.alt_text : ''"
                      />
                      <p v-if="item.caption">{{ item.caption }}</p>
                    </figure>
                    <div
                        class="pagearticle__content-text"
                        v-html="removeEmptyParagraphs(item.content)"
                    ></div>
                  </div>

                  <!-- ARTICLE VIDEO -->
                  <video-player
                      class="pagearticle__content-video"
                      v-if="item.__component === 'article.article-video'"
                      :source="item.video ? item.video.url : ''"
                      :options="item.poster ? {poster: item.poster.url} : {}"
                      :caption="item.caption"
                  ></video-player>

                  <!-- ARTICLE-IFRAME -->
                  <div
                      class="pagearticle__content-iframe"
                      v-if="item.__component === 'article.article-i-frame'"
                  >
                    <div
                        v-if="item.type === 'facebook_video'"
                        class="fb-video"
                        :data-href="
                  'https://www.facebook.com/facebook/videos/' + item.url
                "
                        data-show-text="false"
                    ></div>
                    <div v-if="item.type === 'youtube_video'" class="yt-video">
                      <iframe
                          title=""
                          :src="
                    'https://www.youtube-nocookie.com/embed/' +
                      item.url +
                      '/&origin=https://localhost'
                  "
                          style="border: none"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div
                      class="pagearticle__content-iframe-twitter"
                      v-if="item.__component === 'article.article-i-frame-twitter'"
                  >
                    <span ref="twitter" v-html="loadTweet"></span>
                  </div>
                </div>
              </template>

              <div v-else class="pagearticle__content-premium">
                <login-teaser class="pagearticle__loginteaser" />

                <!-- ARTICLE-TEXT -->
                <div class="pagearticle__content-premium-text">
                  {{ replaceContent }}
                </div>
              </div>

              <share-teaser
                  class="share-teaser_dark pagearticle__shareteaser--main pagearticle__shareteaser--premium"
              ></share-teaser>
            </main>
          </div>
          <div class="col-lg-4 col-xl-3">
            <!-- SIDEBAR -->
            <aside class="pagearticle__sidebar">
              <!--AUTHOR INFO-->
              <router-link :to="'/de/author/' + authorSlug">
                <div
                    class="pagearticle__author-info"
                    :class="{ 'pagearticle__author-info--hidden': !article.author }"
                >
                  <div class="pagearticle__author-meta">
                    <img
                        class="pagearticle__author-image"
                        :src="authorImage"
                        alt=""
                    />
                    <div>
                      <div class="pagearticle__author-name">{{ authorName }}</div>
                      <div>{{ authorSubline }}</div>
                    </div>
                  </div>
                  <p class="pagearticle__author-desc">{{ authorDescription }}</p>
                </div>
              </router-link>

              <!--TEASER-->
              <share-teaser
                  class="pagearticle__teaser pagearticle__shareteaser--sidebar"
              ></share-teaser>
              <login-teaser
                  v-if="!article.premium"
                  class="pagearticle__teaser pagearticle__loginteaser--sidebar"
              ></login-teaser>
              <podcast-teaser
                  v-if="$i18n.locale === 'de' && podcastHighlights && podcastHighlights.length"
                  :item="podcastHighlights[0]"
                  class="pagearticle__teaser"
              />
              <contact-sales-teaser
                  v-if="this.$route.params.group === 'best-practice'"
                  class="pagearticle__teaser"
              ></contact-sales-teaser>
              <!--        <newsletter-teaser class="pagearticle__teaser"></newsletter-teaser>-->
            </aside>
          </div>
        </div>

      </div>



    </section>

    <!-- NEWSLETTER EVENT TEASER
		<section v-if="this.$i18n.locale === 'de' && article.id === 177" class="newsletter-event-section">
		  <div class="col-100">
			<newsletter-event-teaser />
		  </div>
		</section>
		-->

    <!-- RELATED CONTENT -->
    <div v-if="article.id">
      <div class="container-fluid">
        <h2 class="pagearticle__related">{{ $t('pagearticle.related') }}</h2>
        <magazine-recommendations :item="article" />
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
import LoginTeaser from '../../../components/teaser/LoginTeaser'
import { mapGetters } from 'vuex'
import { IS_SSR } from '../../../plugins/ssrSwitch'
import fetch from 'node-fetch'

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'PageArticle',

  components: { LoginTeaser },

  metaInfo() {
    const metaData = this.findMetaData()
    let metaInfo = {
      title: this.$store.getters.env.app_name,
      titleTemplate: metaData.meta_title ? metaData.meta_title : metaData.title,
      meta: [
        {
          name: 'description',
          content: metaData.meta_description
            ? metaData.meta_description
            : metaData.topline
        },
        {
          property: 'og:title',
          content: metaData.meta_title ? metaData.meta_title : metaData.title
        },
        {
          property: 'og:description',
          content: metaData.meta_description
            ? metaData.meta_description
            : metaData.topline
        },
        { property: 'og:image', content: metaData.img_social_set },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: this.ogUrl },
        {
          property: 'og:site_name',
          content: metaData.meta_title ? metaData.meta_title : metaData.title
        },
        {
          property: 'og:description',
          content: metaData.meta_description
            ? metaData.meta_description
            : metaData.topline
        },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:creator', content: 'Telekom' },
        {
          property: 'twitter:title',
          content: metaData.meta_title ? metaData.meta_title : metaData.title
        },
        {
          property: 'twitter:description',
          content: metaData.meta_description
            ? metaData.meta_description
            : metaData.topline
        },
        { property: 'twitter:image', content: metaData.img_social_set }
      ],
      link: [this.canonical]
    }
    if (this.$i18n.locale !== 'de') {
      metaInfo.meta.push({ name: 'robots', content: 'noindex, nofollow' })
    }
    return metaInfo
  },

  props: {},

  data() {
    return {
      ENDPOINT: 'articles/' + this.$route.params.group + '/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'title',
      SET_AS_CURRENT_ITEM: true,
      metaData: null,
      estimatedReadingDuration: undefined
    }
  },

  computed: {
    article() {
      return this.$store.getters.getItem(this.ENDPOINT)
    },
    article_groups() {
      return this.$store.state.content.article_groups
    },
    podcastHighlights() {
      return this.$store.state.content.podcasts.highlights
    },
    authorName() {
      return this.article && this.article.author
        ? this.article.author.fullname
        : ''
    },
    authorSubline() {
      return this.article && this.article.author
        ? this.article.author.subline
        : ''
    },
    authorDescription() {
      return this.article && this.article.author
        ? this.article.author.description
        : ''
    },
    authorImage() {
      return this.article && this.article.author
        ? this.article.author.img
        : ''
    },
    authorSlug() {
      return this.article && this.article.author
        ? this.article.author.slug
        : ''
    },
    headerImageStyle() {
      let style = ''

      // only display the image if it's allowed by the cms and there is a url
      if (this.article.img_detail_header && this.article.img_detail) {
        style = `height: 52.533vw; background-image: url(${this.article.img_detail});`
      }

      return style
    },

    ...mapGetters('oidcStore', [
      'oidcIsAuthenticated',
      'oidcAuthenticationIsChecked',
      'oidcUser',
      'oidcIdToken',
      'oidcIdTokenExp'
    ]),

    userLoggedIn: function() {
      return IS_SSR === false ? !!this.oidcUser : false
    },

    replaceContent() {
      return (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Cras vel neque et velit ullamcorper finibus nec in felis. Cras finibus lacus ut fringilla tincidunt. ' +
        'Fusce vestibulum leo condimentum, molestie felis vitae, euismod purus. ' +
        'Aliquam posuere lectus vel varius dictum. ' +
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ' +
        'Nullam in odio mauris. Aliquam tempor volutpat urna a semper. ' +
        'Morbi consequat, purus sit amet vehicula facilisis, turpis risus varius justo, rutrum accumsan nisl sem ut justo. ' +
        'Suspendisse sem felis, accumsan sed fermentum vel, tristique quis erat. ' +
        'Praesent ac est eros. Cras non sodales erat. ' +
        'Nullam diam leo, vehicula consequat bibendum ut, tristique et urna. ' +
        'Ut rutrum at mauris vitae tempor. ' +
        'Aliquam mattis, magna et tincidunt dapibus, diam ligula ultricies dui, id tristique dui leo sed risus. ' +
        'Donec nec diam eget leo condimentum bibendum quis ac ipsum.' +
        'Vestibulum ut suscipit ipsum. Donec in vestibulum elit. ' +
        'Maecenas hendrerit malesuada quam vel porttitor. ' +
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ' +
        'Mauris tincidunt a eros nec ullamcorper. ' +
        'Nam ac erat a lorem efficitur varius ut vehicula lorem. ' +
        'In consequat urna ac ultrices laoreet. ' +
        'Morbi tincidunt, ante quis commodo aliquet, dui ligula feugiat nisi, non sagittis mi lectus tristique risus. ' +
        'Vestibulum interdum velit ut metus blandit venenatis. ' +
        'Mauris tincidunt augue tortor, in dictum dui ultrices lobortis.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Cras vel neque et velit ullamcorper finibus nec in felis. Cras finibus lacus ut fringilla tincidunt. ' +
        'Fusce vestibulum leo condimentum, molestie felis vitae, euismod purus. ' +
        'Aliquam posuere lectus vel varius dictum. ' +
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ' +
        'Nullam in odio mauris. Aliquam tempor volutpat urna a semper. ' +
        'Morbi consequat, purus sit amet vehicula facilisis, turpis risus varius justo, rutrum accumsan nisl sem ut justo. ' +
        'Suspendisse sem felis, accumsan sed fermentum vel, tristique quis erat. ' +
        'Praesent ac est eros. Cras non sodales erat. ' +
        'Nullam diam leo, vehicula consequat bibendum ut, tristique et urna. ' +
        'Ut rutrum at mauris vitae tempor. ' +
        'Aliquam mattis, magna et tincidunt dapibus, diam ligula ultricies dui, id tristique dui leo sed risus. ' +
        'Donec nec diam eget leo condimentum bibendum quis ac ipsum.' +
        'Vestibulum ut suscipit ipsum. Donec in vestibulum elit. ' +
        'Maecenas hendrerit malesuada quam vel porttitor. ' +
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ' +
        'Mauris tincidunt a eros nec ullamcorper. ' +
        'Nam ac erat a lorem efficitur varius ut vehicula lorem. ' +
        'In consequat urna ac ultrices laoreet. ' +
        'Morbi tincidunt, ante quis commodo aliquet, dui ligula feugiat nisi, non sagittis mi lectus tristique risus. ' +
        'Vestibulum interdum velit ut metus blandit venenatis. ' +
        'Mauris tincidunt augue tortor, in dictum dui ultrices lobortis.'
      )
    },

    loadTweet() {
      if (this.IS_SSR === true) {
        return
      }
      if (this.article && this.article.content[0].html) {
        return this.article.content[0].html
      }
    }
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      this.fetchSyncMetadata()
    }
  },

  // Server-side only
  serverPrefetch() {
    if (!this.article) {
      return this.fetchArticle()
    }
  },

  // Client-side only
  beforeMount() {
    if (!this.article || (this.article.locale !== this.$i18n.locale)) {
      this.fetchArticle()
    }
  },

  mounted() {
    this.estimatedReadingDuration = this.calculateEstimateReadingDuration()
  },

  beforeRouteLeave(to, from, next) {
    // if the route changed due to a language change, we need to translate the slug
    //this.translateSlugIfLanguageChanged(to, next, this.article);
    this.translateSlugIfLanguageChanged(to, next, this.article, {
      group: this.localeSlug(this.article.articles_group)
    })
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    findMetaData() {
      if (IS_SSR === true && this.metaData) {
        return this.metaData
      }

      if (IS_SSR === false && typeof this.article !== 'undefined') {
        return this.setImageData(this.article)
      }

      return {}
    },

    setImageData(data) {
      if (data.img_social && data.img_social.formats) {
        if (
          data.img_social.formats.large === null ||
          !data.img_social.formats.large
        ) {
          data.img_social_set = data.img_detail
        } else {
          data.img_social_set = data.img_social.formats.large['url']
        }
      } else {
        data.img_social_set =
          'https://telekom-digitalx-content-develop.s3.amazonaws.com/digital-x-sc.jpg'
      }
      return data
    },

    fetchSyncMetadata() {
      fetch(this.$store.getters.env.content_url + this.ENDPOINT)
        .then(response => response.json())
        .then(data => {
          this.metaData = this.setImageData(data)
        })
        .catch(err => console.log(err))
    },

    /**
     * @returns {Promise<any>}
     */
    fetchArticle() {
      return this.$store
        .dispatch('fetchItem', {
          endpoint: this.ENDPOINT,
          breadcrumbTitle: this.BREADCRUMB_TITLE ?? null,
          setAsCurrentItem: this.SET_AS_CURRENT_ITEM ?? false,
          path: this.$router.currentRoute.path ?? null,
          previewSecret: this.$router.currentRoute.query.preview_secret ?? null,
        })
        .then(() => {
          if (IS_SSR === true) {
            return
          }

          this.estimatedReadingDuration = this.calculateEstimateReadingDuration()
          if (typeof FB !== 'undefined') {
            FB.XFBML.parse()
          }
          window.lazyload.update()
        })
        .catch(error => {
          console.log(error)
        })
    },

    calculateEstimateReadingDuration() {
      if (IS_SSR === true || !this.$refs.article) {
        return undefined
      }

      const text = this.$refs.article.textContent
      const wordsPerMinute = 220
      const totalWords = text.trim().split(/\s+/g).length

      return Math.ceil(totalWords / wordsPerMinute)
    },

    removeEmptyParagraphs(content) {
      // @todo: check why this causes a drom-tree-missmatching Error by ssr - probably markup fails
      //content = content.replaceAll(/<p><br><\/p>/gi,'');
      return content
    }
  },
  watch: {
    loadTweet() {
      this.$nextTick(() => {
        twttr.widgets.load()
      })
    }
  }
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
		"pageindex.metaTitle": "Digitale Transformation im Magazinformat",
		"pageindex.metaDescription": "Das DIGITAL X Magazin zeigt die Chancen der digitalen Transformation für Wirtschaft, Bildung und Verwaltung – informativ, unterhaltsam, sehenswert & hörenswert. Finden Sie das passende Format für sich!"
	},
	"en": {
		"pageindex.metaTitle": "Digital transformation in magazine format",
		"pageindex.metaDescription": "The DIGITAL X magazine highlights the opportunities offered by the digital transformation for business, education and administration – informative, entertaining and worth a read and listen. Find the right format for you!"
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
