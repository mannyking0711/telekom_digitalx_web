<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pagepod" v-if="itemData">

		<!-- PODCAST PANEL -->
		<podcast-panel :item="itemData"></podcast-panel>

		<!-- CONTENT SECTION -->
		<section class="inner no-spacing">

      <div class="container-fluid">
        <div class="row">
          <!-- MAIN CONTENT -->
          <main class="col-lg-8 col-xl-9 pagepod__main">

            <!-- SEARCH -->
            <search-field @search="search" :placeholder="$t('pagepodcast.searchInput')"/>

            <!-- MOST PLAYED -->
            <h3 class="pagepod__headline">{{ $t('pagepodcast.moreHeadline') }}</h3>
            <podcast-series
                v-for="podGroup in podcast_groups"
                :key="podGroup.id"
                :series="podGroup"/>

            <!-- SHARE -->
            <share-teaser subject="Podcast" class="share-teaser_dark pagepod__share-teaser"/>

          </main>

          <!-- SIDEBAR -->
          <aside class="col-lg-4 col-xl-3 pagepod__sidebar">

            <!-- SHARE -->
            <share-teaser subject="Podcast"
                    class="sidebar-teaser pagepod__share-teaser pagepod__share-teaser--sidebar"/>

            <!-- MOST PLAYED -->

            <podcast-favorite :group="itemData.podcast_group"/>


          </aside>
        </div>
      </div>
		</section>

		<!-- RELATED CONTENT -->
		<div class="container-fluid">
			<h2 class="pagepod__headline pagepod__headline--related">{{ $t('pagearticle.related') }}</h2>
			<magazine-recommendations :item="itemData"/>
		</div>

	</div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import fetchItemMixin from '../../../mixins/fetchItem.js';
import fetch from "node-fetch";
import {IS_SSR} from "../../../plugins/ssrSwitch";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PagePodcast',

	mixins: [fetchItemMixin],

	metaInfo() {
		const metaData = this.findMetaData();
    let metaInfo = {
			title: this.$store.getters.env.app_name,
			titleTemplate: metaData.meta_title ? metaData.meta_title : metaData.title,
			meta: [
				{
					name: 'description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{
					property: 'og:title',
					content: metaData.meta_title ? metaData.meta_title : metaData.title
				},
				{
					property: 'og:description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{property: 'og:image', content: metaData.img_social_set || this.imgSocial},
				{property: 'og:type', content: 'podcast'},
				{property: 'og:url', content: this.ogUrl},
				{
					property: 'og:site_name',
					content: metaData.meta_title ? metaData.meta_title : metaData.title
				},
				{
					property: 'og:description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				{
					property: 'twitter:title',
					content: metaData.meta_title ? metaData.meta_title : metaData.title
				},
				{
					property: 'twitter:description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{property: 'twitter:image', content: metaData.img_social_set || this.imgSocial}
			],
			link: [this.canonical]
		};
    if (this.$i18n.locale !== 'de') {
      metaInfo.meta.push({name: 'robots', content: 'noindex, nofollow'})
    }
    return metaInfo;
  },

	props: {},

	data() {
		return {
			ENDPOINT: 'podcasts/' + this.$route.params.group + '/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'title',
      SET_AS_CURRENT_ITEM: true,
			metaData: null
		};
	},

	computed: {
		podcast_groups() {
			return this.$store.state.content.podcast_groups;
		}
	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	created() {
		if (IS_SSR === true) {
			this.fetchSyncMetadata();
		}
	},

	mounted() {
	},

	beforeRouteLeave(to, from, next) {
		// if the route changed due to a language change, we need to translate the slug
		this.translateSlugIfLanguageChanged(to, next, this.itemData, {group: this.localeSlug(this.itemData.podcast_group)});
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
		// redirect to podcast listing page with search term as query param
		search(term) {
			let link = this.link('magazine.podcast');

			this.$router.push({...link, query: {q: term}});
		},

		fetchSyncMetadata() {
			fetch(this.$store.getters.env.content_url + this.ENDPOINT)
					.then(response => response.json())
					.then(data => {
						this.metaData = this.setImageData(data);
					})
					.catch(err => console.log(err))
		},

		findMetaData() {
			if (IS_SSR === true && this.metaData) {
				return this.metaData;
			}

			if (IS_SSR === false && typeof this.itemData !== 'undefined') {
				return this.setImageData(this.itemData);
			}

			return {};
		},

    setImageData(data) {
      if (data.img_social) {
        if (data.img_social.formats.large === null || !data.img_social.formats.large) {
          data.img_social_set = data.img_detail;
        } else {
          data.img_social_set = data.img_social.formats.large['url'];
        }
      } else {
        data.img_social_set = 'https://telekom-digitalx-content-develop.s3.amazonaws.com/digital-x-sc.jpg';
      }
      return data;
    },

  },
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


<style lang="scss">

</style>


<style lang="scss" scoped>

</style>



