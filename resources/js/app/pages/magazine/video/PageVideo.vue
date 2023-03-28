<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pagevid" v-if="video">

		<section class="">

      <div class="container-fluid">

        <div class="pagevid__intro">

          <!-- MAIN VIDEO AND INFO -->
          <div class="pagevid__intro-main">
            <div v-if="video.premium && !userLoggedIn" class="pagevid__loginteaser">
              <img :src="video.img_detail" :alt="video.title" class="pagevid__loginteaser-image" />
              <login-teaser class="pagevid__loginteaser-teaser" />
            </div>

            <video-player v-else-if="video.video" class="pagevid__player pagevid__full-width" :source="video.video" :options="video.img_detail ? {poster: video.img_detail} : {}" />

            <h1 class="pagevid__headline">{{ video.title }}</h1>

            <article-info class="pagevid__articleinfo articleinfo--large" :item_id="video.id"
                    :item_type="video.type" :published="video.published" :author="author"
                    :tags="video.tags"/>
          </div>

          <!-- DESKTOP RECOMMENDATIONS -->
          <!--					<video-recommendations :recommendations="recommendations" class="pagevid__intro-recommendations" />-->

        </div>

        <div clsss="row">
          <div class="col-lg-8">
            <!-- MAIN CONTENT -->
            <main class="pagevid__main">

              <!-- APPEARANCES -->
              <h3 class="pagevid__subheadline">{{ $t('pagevideo.persons') }}</h3>
              <ul class="pagevid__persons">
                <li v-for="appearance in video.appearances" :key="appearance.id" class="pagevid__person">
                  <img class="pagevid__person-image" :src="appearance.image" alt=""/>
                  <div class="pagevid__person-name">{{ appearance.name }}</div>
                </li>
              </ul>

              <!-- DESCRIPTION -->
              <div class="pagevid__desc" v-html="video.description"/>

              <!-- SHARE TEASER -->
              <share-teaser subject="Video" class="share-teaser_dark pagevid__share"/>

            </main>

            <!-- MOBILE RECOMMENDATIONS -->
            <!--
            <video-recommendations :recommendations="recommendations" class="pagevid__mobile-recommendations" />
            -->
          </div>
          <div class="col-lg-8">
            <!-- SIDEBAR -->
            <aside class="pagevid__sidebar">

              <!-- BONUS CONTENT -->
              <!--
              <bonus-teaser class="pagevid__full-width" />
              -->

            </aside>
          </div>
        </div>

      </div>

		</section>

		<!-- RELATED CONTENT -->
		<div v-if="video.id">
      <div class="container-fluid">
        <h2 class="pagepod__headline pagepod__headline--related">{{ $t('pagearticle.related') }}</h2>
        <magazine-recommendations :item="video"/>
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

import {mapGetters} from "vuex";
import fetchItemMixin from '../../../mixins/fetchItem.js';
import fetch from "node-fetch";
import {IS_SSR} from "../../../plugins/ssrSwitch";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PageVideo',

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
				{property: 'og:title', content: metaData.meta_title ? metaData.meta_title : metaData.title},
				{
					property: 'og:description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{property: 'og:image', content: metaData.img_social_set},
				{property: 'og:type', content: 'video'},
				{property: 'og:url', content: this.ogUrl},
				{property: 'og:site_name', content: metaData.meta_title ? metaData.meta_title : metaData.title},
				{
					property: 'og:description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				{property: 'twitter:title', content: metaData.meta_title ? metaData.meta_title : metaData.title},
				{
					property: 'twitter:description',
					content: metaData.meta_description ? metaData.meta_description : metaData.description
				},
				{property: 'twitter:image', content: metaData.img_social_set}
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
			ENDPOINT: 'videos/' + this.$route.params.group + '/' + this.$route.params.slug,
      BREADCRUMB_TITLE: 'title',
      SET_AS_CURRENT_ITEM: true,
			metaData: null,
			recommendations: [
				{
					'title': 'Cloud statt Messehalle - Wie Corona die Messewelt verändert',
					'image': 'https://placeimg.com/600/400/arch',
					'duration': '9:44'
				},
				{
					'title': 'Cloud statt Messehalle - Wie Corona die Messewelt verändert',
					'image': 'https://placeimg.com/600/400/arch',
					'duration': '9:44'
				},
				{
					'title': 'Cloud statt Messehalle - Wie Corona die Messewelt verändert',
					'image': 'https://placeimg.com/600/400/arch',
					'duration': '9:44'
				},
				{
					'title': 'Cloud statt Messehalle - Wie Corona die Messewelt verändert',
					'image': 'https://placeimg.com/600/400/arch',
					'duration': '9:44'
				}
			]
		};
	},

	computed: {
		video_groups() {
			return this.$store.state.content.video_groups;
		},
		author: function () {
			return this.video?.author?.fullname;
		},
		video() {
			return this.itemData;
		},

		...mapGetters('oidcStore', [
			'oidcIsAuthenticated',
			'oidcAuthenticationIsChecked',
			'oidcUser',
			'oidcIdToken',
			'oidcIdTokenExp'
		]),

		userLoggedIn: function () {
			return (IS_SSR === false) ? (!!this.oidcUser) : false;
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
		//this.translateSlugIfLanguageChanged(to, next, this.video);
		this.translateSlugIfLanguageChanged(to, next, this.video, {group: this.localeSlug(this.video.videos_group)});
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
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
			if (typeof data.img_social === 'undefined' || !data.img_social) {
				if (data.img_detail) {
					data.img_social_set = data.img_detail;
				} else {
					data.img_social_set = 'https://telekom-digitalx-content-develop.s3.amazonaws.com/digital-x-sc.jpg';
				}
			} else {
				data.img_social_set = data.img_social.formats.large['url'];
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



