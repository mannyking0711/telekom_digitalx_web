<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<section class="no-spacing dashboardProfile">
    <div class="container-fluid">
      <section class="inner">
        <div class="col-33 dashboardProfile__mydx">
          <h3 class="dashboardProfile__caption">My DIGITAL X</h3>
          <a class="dashboardProfile__image-link" href="https://secure.digital-x.eu/DX/UserProfile/UserProfile" target="_blank">
            <img class="dashboardProfile__image" v-bind:src="this.oidcUser.picture" alt="profile picture" @error="noPicture"/>
            <svg-icon class="dashboardProfile__image-icon" icon="app/icon-pencil"></svg-icon>
          </a>
          <p class="dashboardProfile__fullname">
            {{ this.oidcUser.given_name + ' ' + this.oidcUser.family_name }}
          </p>
          <p class="dashboardProfile__company">
            {{ this.oidcUser.company_name }}
          </p>
          <p class="dashboardProfile__email">
            {{ this.oidcUser.email }}
          </p>
          <a href="https://secure.digital-x.eu/DX/UserProfile/UserProfile" target="_blank" class="btn blue icon-left dashboardProfile__btn">
            <svg-icon icon="app/icon-arrow"></svg-icon>
            <span>{{ $t('dashboardprofile.manageaccount') }}</span>
          </a>
        </div>

        <div class="col-33">
          <h3 class="dashboardProfile__caption">My DIGITAL X Features</h3>
          <div class="dashboardProfile__panelstack">

            <!--  newdxcontent -->
            <a class="dashboardProfile__clickpanel" href="https://secure.digital-x.eu/DX/OrderHistory">
              <div class="container">
                <div class="dashboardProfile__logo">
                        <span class="dashboardProfile__premiumIcon">My DIGITAL X</span>
                </div>
                <span class="icontext">{{ $t('dashboardprofile.newdxcontent') }}</span>
              </div>
            </a>

            <!-- stream -->
  <!--					<router-link class="dashboardProfile__clickpanel" :to="{ hash: '#eventStream', ...link('events.detail', { slug: 'digital-x-2022' }) }">-->
  <!--						<div class="container">-->
  <!--							<svg-icon class="icon stream" icon="app/icon-stream"></svg-icon>-->
  <!--							<span class="icontext">{{ $t('dashboardprofile.livestream') }}</span>-->
  <!--						</div>-->
  <!--					</router-link>-->

            <!-- dashboard-interests -->
            <a class="dashboardProfile__clickpanel" href="#dashboard-interests">
              <div class="container">
                <svg-icon class="icon star" icon="app/icon-newcontent"></svg-icon>
                <span class="icontext">{{ $t('dashboardprofile.newcontentforyou') }}</span>
              </div>
            </a>

            <!-- bookmarktedcontent -->
            <a
              class="dashboardProfile__clickpanel"
              :class="{linkDeactivate: !hasBookmarks}"
              :href="hasBookmarks ? '#dashboard-bookmarks' : '#'"
            >
              <div class="container">
                <svg-icon class="icon bookmark" icon="app/icon-bookmark"></svg-icon>
                <span class="icontext">{{ $t('dashboardprofile.bookmarktedcontent') }}</span>
              </div>
            </a>
          </div>
        </div>

        <div class="col-33 dashboardProfile__interesting">
          <h3 class="dashboardProfile__caption">{{ $t('dashboardProfile.interesting') }}</h3>

          <div class="dashboardProfile__interesting-item" v-if="firstInterestingArticle">

            <!-- CONTENT -->
            <div class="content">

              <div>
                <router-link v-if="imageUrl" :to="link(linkTarget,linkParams)" class="image">
                  <img class="lazy" alt="" :src="imageUrl"/>
                </router-link>

                <!-- HEADLINE -->
                <router-link :to="link(linkTarget,linkParams)">
                  <h3 class="headline" v-html="itemTitle"></h3>
                </router-link>

                <!-- TAGS -->
                <article-info :item_id="firstInterestingArticle.id"
                        :item_type="firstInterestingArticle.type"
                        :published="firstInterestingArticle.published"
                        :author="firstInterestingArticle.author.fullname"
                        :tags="firstInterestingArticle.tags"/>

                <!-- BUTTON -->
                <a href="https://secure.digital-x.eu/DX/UserProfile/UserProfile" class="btn blue icon-left dashboardProfile__btn">
                  <svg-icon icon="app/icon-arrow"></svg-icon>
                  <span>{{ $t('dashboardProfileInterests.button') }}</span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>

	</section>
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {mapGetters} from 'vuex';
import Fuse from "fuse.js";
import ArticleInfo from "../magazine/article/ArticleInfo";
import {postItem} from "../../services/api";
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'DashboardAuthenticatedProfile',

	props: {
		userProfile: {},
		items: Array
	},

	components: {
		ArticleInfo
	},

	data() {
		return {
			userInterests: [],
			firstInterestingArticle: {
				author: {},
			},
			fuse: null,
			fuseSettings: {
				keys: [
					{name: 'tags', weight: 1},
				],
				threshold: 0.3,
				ignoreLocation: true,
				sortFn: (a, b) => {

					if (a > b) {
						return -1;
					} else if (a < b) {
						return 1;
					} else {
						return 0;
					}
				}
			},
		};
	},

	computed: {

		...mapGetters('oidcStore', [
			'oidcIsAuthenticated',
			'oidcUser',
			'oidcAccessToken'
		]),

		hasBookmarks() {
			const userProfile = this.$store.state.userProfile;

			if (typeof userProfile !== 'undefined' && userProfile.bookmarks) {
				let bookmarks = userProfile.bookmarks;
				let counter = 0;

				Object.entries(bookmarks).forEach(i => {
					counter += i[1].length;
				})

				return counter > 0;
			}

			console.log('error: bookmarkLength');
			return false;
		},

		isBookmarked() {
			const userProfile = this.$store.state.userProfile;
			if (this.firstInterestingArticle.id && this.firstInterestingArticle.type && userProfile.bookmarks) {
				return userProfile.bookmarks[this.firstInterestingArticle.type].includes(this.firstInterestingArticle.id);
			} else {
				return false;
			}
		},

		imageUrl() {
			let imgHighlight = this.firstInterestingArticle.img_highlight ? this.firstInterestingArticle.img_highlight : this.firstInterestingArticle.img_list
			return this.firstInterestingArticle.img_detail ? this.firstInterestingArticle.img_detail : imgHighlight;
		},

		itemTitle() {

			switch (this.firstInterestingArticle.type) {
				case 'article':
					return this.firstInterestingArticle.title;
				case 'podcast':
					return `${this.firstInterestingArticle.podcast_group.title} #${this.firstInterestingArticle.episode_number}<br>${this.firstInterestingArticle.title}`;
				case 'video':
					return this.firstInterestingArticle.title;
			}
		},

		linkTarget() {

			switch (this.firstInterestingArticle.type) {
				case 'article':
					return 'magazine.article.detail';
				case 'podcast':
					return 'magazine.podcast.detail';
				case 'video':
					return 'magazine.video.detail';
			}
		},

		linkParams() {

			switch (this.firstInterestingArticle.type) {
				case 'article':
					return {
						slug: this.localeSlug(this.firstInterestingArticle),
						group: this.localeSlug(this.firstInterestingArticle.articles_group)
					};
				case 'podcast':
					return {
						slug: this.localeSlug(this.firstInterestingArticle),
						group: this.localeSlug(this.firstInterestingArticle.podcast_group)
					};
				case 'video':
					return {
						slug: this.localeSlug(this.firstInterestingArticle),
						group: this.localeSlug(this.firstInterestingArticle.videos_group)
					};
			}
		},

		tags() {
			return this.firstInterestingArticle.tags ? this.firstInterestingArticle.tags : [];
		},

	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////
	mounted() {
		this.getUserTags();
	},
	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {

		initFuse() {
			this.fuse = new Fuse(this.items, this.fuseSettings);
			this.onSearch(this.userInterests);
		},

		onSearch(terms) {
			if (terms.length > 1) {
				let items = [];
				terms.forEach(term => {
					items.push(this.fuse.search(term));
				})

				if (items[0] !== undefined && items[0][0] !== undefined) {
					this.firstInterestingArticle = items[0][0].item;
					this.$nextTick(() => {
						window.lazyload.update();
					})
				}
			} else {
				this.firstInterestingArticle = this.items[0];
			}
		},

		getUserTags() {
			if (this.userProfile.tags) {
				this.userProfile.tags.forEach(element => {
					if (this.$i18n.locale === 'de') {
						this.userInterests.push(element.name_de);
					} else {
						this.userInterests.push(element.name_en);
					}
				})

				this.initFuse();
			}
		},

		noPicture(e) {
			e.target.src = "https://telekom-digitalx-content-develop.s3.amazonaws.com/dx_avatar_user_dummy.png";
		},
	}
	,

	watch: {
		items() {
			this.initFuse();
		},
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
		"dashboardprofile.manageaccount": "Account verwalten",
		"dashboardprofile.livestream": "Livestream",
		"dashboardprofile.newcontentforyou": "Neue Inhalte für Sie",
		"dashboardprofile.newdxcontent": "Meine Tickets",
		"dashboardprofile.bookmarktedcontent": "Gemerkte Inhalte",
		"dashboardProfile.interesting": "Interessant für Sie?",
		"dashboardProfileInterests.button": "Interessen Verwalten"
	},
	"en": {
		"dashboardprofile.manageaccount": "Manage account",
		"dashboardprofile.livestream": "Livestream",
		"dashboardprofile.newcontentforyou": "New items for you",
		"dashboardprofile.newdxcontent": "My tickets",
		"dashboardprofile.bookmarktedcontent": "Bookmarks",
		"dashboardProfile.interesting": "Interesting for you?",
		"dashboardProfileInterests.button": "Manage Interests"
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
	.linkDeactivate {
	    color: darkslategray;
		cursor: default;
	}
</style>
