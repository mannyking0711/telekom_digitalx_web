<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pageMagazine">

		<!-- HIGHLIGHTS -->
		<section class="pageMagazine no-spacing">

			<!-- FEATURED -->
			<magazine-highlight v-if="highlight" :highlight="highlight" :highlights="highlights" :contentType="contentType" :impressions="impressions"/>

			<!-- MOST READ -->
			<div class="pageMagazine__sidebar">
			</div>
		</section>

    <!-- SEO CONTENT -->
    <section class="pageMagazine__header">
      <div class="container-fluid">
        <div class="bg-white hero-section__content">
          <div class="row">
            <div class="col-12">
              <h1 v-if="seoTitle">{{ seoTitle }}</h1>
              <p v-if="seoText">{{ seoText }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

		<!-- NEWSLETTER EVENT TEASER
		<section v-if="this.$i18n.locale === 'de'" class="newsletter-event-section">
			<div class="col-100">
				<newsletter-event-teaser />
			</div>
		</section>
		-->

    <div class="section">
      <div class="container-fluid">
        <!-- CONTENT LIST -->
        <magazine-list v-if="itemsList" :contentType="contentType" :items="itemsList" :show-search="true" :show-seo-pagination="true"/>
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

import fetchItemMixin from "../../mixins/fetchItem";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PageMagazine',

	mixins: [fetchItemMixin],

	metaInfo() {
		let metaInfo = {
			title: this.$store.getters.env.app_name,
			// titleTemplate: this.$t('pageindex.metaTitle'),
			meta: [
				// {name: 'description', content: this.$t('pageindex.metaDescription')},
				// {property: 'og:title', content: this.$t('pageindex.metaTitle')},
				// {property: 'og:description', content: this.$t('pageindex.metaDescription')},
				{property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc-magazined-article.jpg'},
				{property: 'og:type', content: 'website'},
				{property: 'og:url', content: this.ogUrl},
				// {property: 'og:site_name', content: this.$t('pageindex.metaTitle')},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				// {property: 'twitter:title', content: this.$t('pageindex.metaTitle')},
				// {property: 'twitter:description', content: this.$t('pageindex.metaDescription')},
				{property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc-magazined-article.jpg'},
        {name: 'robots', content: this.$route.query[this.pageParameter] ? 'noindex,follow' : 'index,follow'}
			],
			link: [this.canonical]
		};
		if (this.$i18n.locale !== 'de') {
			metaInfo.meta.push({name: 'robots', content: 'noindex, nofollow'})
		}
		switch (this.contentType){
			case "article": {
				metaInfo.titleTemplate = this.$t('pageindex.article.metaTitle')
				metaInfo.meta.push({name: 'description', content: this.$t('pageindex.article.metaDescription')})
				metaInfo.meta.push({property: 'og:title', content: this.$t('pageindex.article.metaTitle')})
				metaInfo.meta.push({property: 'og:description', content: this.$t('pageindex.article.metaDescription')})
				metaInfo.meta.push({property: 'og:site_name', content: this.$t('pageindex.article.metaTitle')})
				metaInfo.meta.push({property: 'twitter:title', content: this.$t('pageindex.article.metaTitle')})
				metaInfo.meta.push({property: 'twitter:description', content: this.$t('pageindex.article.metaDescription')})
				break;
			}
			case "video":{
				metaInfo.titleTemplate = this.$t('pageindex.video.metaTitle')
				metaInfo.meta.push({name: 'description', content: this.$t('pageindex.video.metaDescription')})
				metaInfo.meta.push({property: 'og:title', content: this.$t('pageindex.video.metaTitle')})
				metaInfo.meta.push({property: 'og:description', content: this.$t('pageindex.video.metaDescription')})
				metaInfo.meta.push({property: 'og:site_name', content: this.$t('pageindex.video.metaTitle')})
				metaInfo.meta.push({property: 'twitter:title', content: this.$t('pageindex.video.metaTitle')})
				metaInfo.meta.push({property: 'twitter:description', content: this.$t('pageindex.video.metaDescription')})
				break;
			}
			case "podcast": {
				metaInfo.titleTemplate = this.$t('pageindex.podcast.metaTitle')
				metaInfo.meta.push({name: 'description', content: this.$t('pageindex.podcast.metaDescription')})
				metaInfo.meta.push({property: 'og:title', content: this.$t('pageindex.podcast.metaTitle')})
				metaInfo.meta.push({property: 'og:description', content: this.$t('pageindex.podcast.metaDescription')})
				metaInfo.meta.push({property: 'og:site_name', content: this.$t('pageindex.podcast.metaTitle')})
				metaInfo.meta.push({property: 'twitter:title', content: this.$t('pageindex.podcast.metaTitle')})
				metaInfo.meta.push({property: 'twitter:description', content: this.$t('pageindex.podcast.metaDescription')})
				break;
			}

		}
		return metaInfo;
	},

	props: {
    pageParameter: {
      type: String,
      default: 'p',
    },
  },

	data() {
		return {
			ENDPOINT: 'magazine-pages/' + this.contentType,
		};
	},

	computed: {

		contentType() {
			switch (this.$route.name.substr(3)) {
				case 'magazine.article':
					return 'article';
				case 'magazine.podcast':
					return 'podcast';
				case 'magazine.video':
					return 'video';
				default:
					return 'all';
			}
		},

		itemsList() {
			switch (this.contentType) {
				case 'article':
					return this.$store.state.content.articles.list;
				case 'podcast':
					return this.$store.state.content.podcasts.list;
				case 'video':
					return this.$store.state.content.videos.list;
				default:
					return this.$store.getters.newContent;
			}
		},

    impressions() {
      return (this.itemData && this.itemData.impressions) ? this.itemData.impressions : null;
    },

    seoTitle() {
      return (this.itemData && this.itemData.title) ? this.itemData.title : '';
    },

    seoText() {
      return (this.itemData && this.itemData.text) ? this.itemData.text : '';
    },

		highlight() {
			switch (this.contentType) {
				case 'article':
					return this.$store.state.content.articles.highlights[0];
				case 'podcast':
					return this.$store.state.content.podcasts.highlights[0];
				case 'video':
					return this.$store.state.content.videos.highlights[0];
				default:
					return this.$store.getters.newHighlights[0];
			}
		},

    highlights() {
		  return this.$store.getters.newHighlights;
    },
	},

	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	created() {
		this.ENDPOINT = 'magazine-pages/' + this.contentType;
	},

	mounted() {
		if (IS_SSR === true) {
			return;
		}
		window.lazyload.update();
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {}

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
		"pageindex.metaDescription": "Das DIGITAL X Magazin zeigt die Chancen der digitalen Transformation für Wirtschaft, Bildung und Verwaltung – informativ, unterhaltsam, sehenswert & hörenswert. Finden Sie das passende Format für sich!",
		"pageindex.article.metaTitle": "Digitale Transformation: Vielfalt zum Nachlesen",
		"pageindex.article.metaDescription": "Die DIGITAL X Beiträge bündeln die Themen der digitalen Transformation: Profitieren Sie von konkretem Wissen aus der Praxis, Hintergrund-Informationen und neuesten Studienerkenntnissen. Nachlesen, informieren und inspirieren!Die DIGITAL X Beiträge bündeln die Themen der digitalen Transformation: Profitieren Sie von konkretem Wissen aus der Praxis, Hintergrund-Informationen und neuesten Studienerkenntnissen. Nachlesen, informieren und inspirieren!",
		"pageindex.podcast.metaTitle": "DIGITAL X Podcast: Digitalisierung zum Nachhören",
		"pageindex.podcast.metaDescription": "Jederzeit in den DIGITAL X Kanälen abrufbar: unsere Podcasts zur Digitalisierung. Fachleute und Digitalisierungsexperten gehen auf aktuelle Digital-Themen ein und geben Ein- und Ausblicke. Ein Thema, viele Stimmen – hören Sie rein!",
		"pageindex.video.metaTitle": "Digitalisierung einfach erklärt: die DIGITAL X Videos",
		"pageindex.video.metaDescription": "In den DIGITAL X Videos werden die Themen der Digitalisierung einfach erklärt. Information und Inspiration treffen in Experteninterviews und Best Practice Beispielen aufeinander. Hier sehen Sie die Gesichter der Digitalisierung."
	},
	"en": {
		"pageindex.metaTitle": "Digital transformation in magazine format",
		"pageindex.metaDescription": "The DIGITAL X magazine highlights the opportunities offered by the digital transformation for business, education and administration – informative, entertaining and worth a read and listen. Find the right format for you!",
		"pageindex.article.metaTitle": "Digital Transformation: Read up on digital topics",
		"pageindex.article.metaDescription": "The DIGITAL X articles are a collection of all topics around digital transformation: Benefit from our concrete practical knowledge, background information and the latest study findings. Read up, get informed, be inspired!",
		"pageindex.podcast.metaTitle": "DIGITAL X Podcast: The sound of digitalization",
		"pageindex.podcast.metaDescription": "Available anytime on the DIGITAL X channels: our podcasts on digitalization. Industry professionals and digitalization experts address current topics from the digital world and provide insights and outlooks. One mission, many voices - listen in!",
		"pageindex.video.metaTitle": "Digitalization explained simply: the DIGITAL X videos",
		"pageindex.video.metaDescription": "Digitalization is explained simply in the DIGITAL X videos. Information and inspiration meet interviews with digital experts and best practice cases. Meet the faces of digitalization. "

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



