<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="podpanel" v-if="item.file">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-8 col-lg-8">

        <div class="">

          <!-- IMAGE AND TITLE -->
          <div class="podpanel__intro">
            <div class="podpanel__image-wrap">
              <div class="podpanel__logo">
                <svg-icon icon="app/icon-podcast"></svg-icon>
              </div>
              <img class="podpanel__image" :src="item.img_detail" alt=""/>
            </div>

            <div>
              <div class="podpanel__date">{{ item.published }}</div>
              <h1 class="podpanel__headline">
                <span>{{ item.podcast_group ? item.podcast_group.title : '' }} #{{
                    item.episode_number
                  }}</span>
                {{ item.title }}
              </h1>
              <div class="podpanel__authors">{{ item.podcast_group ? item.podcast_group.subline : '' }}</div>
            </div>
          </div>

          <!-- PLAYER -->
          <div v-if="!item.premium || (item.premium && userLoggedIn)">
            <audio-player :source="item.file.url"/>
          </div>
          <div v-else>
            <div class="podpanel__loginteaser-background"></div>
            <login-teaser class="podpanel__loginteaser" />
          </div>

          <!-- CONTENT -->
          <div v-if="descriptionOpen" class="podpanel__desc">
            <div v-html="item.shownotes"></div>
            <div class="podpanel__more-btn" @click="descriptionOpen = !descriptionOpen">
              {{ $t('podcastpanel.less') }}
            </div>
          </div>
          <div v-if="!descriptionOpen" class="podpanel__desc">
            <div v-html="truncatedShownotes"></div>
            <div class="podpanel__more-btn" @click="descriptionOpen = !descriptionOpen">
              {{ $t('podcastpanel.more') }}
            </div>
          </div>

          <!-- AUTHORS -->
          <div v-if="item.appearances.length > 0" class="podpanel__persons">
            <h3 class="podpanel__subheadline podpanel__subheadline--persons">{{
                $t('podcastpanel.people')
              }}</h3>
            <div v-for="appearance in item.appearances" :key="appearance.id" class="podpanel__person">
              <img class="podpanel__person-image" :src="appearance.image" alt=""/>
              <div class="podpanel__person-name">{{ appearance.name }}</div>
            </div>
          </div>

          <!-- SERVICES -->
          <div class="podpanel__services">
            <a :href="item.link_spotify" target="_blank" v-if="item.link_spotify" class="btn blue icon-left">
              <svg-icon icon="app/icon-spotify"></svg-icon>
              <span>SPOTIFY</span>
            </a>
            <a :href="item.link_apple" target="_blank" v-if="item.link_apple" class="btn blue icon-left">
              <svg-icon icon="app/icon-apple"></svg-icon>
              <span>APPLE</span>
            </a>
            <a :href="item.link_deezer" target="_blank" v-if="item.link_deezer" class="btn blue icon-left">
              <svg-icon icon="app/icon-deezer"></svg-icon>
              <span>DEEZER</span>
            </a>
            <a :href="item.link_amazon" target="_blank" v-if="item.link_amazon" class="btn blue icon-left">
              <svg-icon icon="app/icon-amazon"></svg-icon>
              <span>AMAZON</span>
            </a>
          </div>

        </div>

        <!-- ALL EPISODES -->
        <div class="" v-if="filteredEpisodes">

          <h3 class="podpanel__subheadline podpanel__subheadline--episodes">{{ $t('podcastpanel.episodes') }}</h3>

          <slider
              v-if="filteredEpisodes.length > 4"
              :items="filteredEpisodes"
              :itemsPerPage="4"
              pageClass="podpanel__episodes"
              class="podpanel__slider">
            <template slot-scope="item">
              <router-link
                  :to="link('magazine.podcast.detail',{group: localeSlug(item.podcast_group), slug: localeSlug(item)})"
                  class="podpanel__episode">
                <div class="podpanel__logo-episode">
                  <svg-icon icon="app/icon-podcast"></svg-icon>
                </div>
                <div>
                  <h4 class="podpanel__episode-title">{{ itemData.title }} #{{ item.episode_number }}</h4>
                  <p class="podpanel__episode-desc">{{ item.title }}</p>
                </div>
              </router-link>
            </template>
          </slider>

        </div>

        <share-teaser subject="Podcast" class="share-teaser_dark podpanel__share"/>

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

import fetchItemMixin from '../../../mixins/fetchItem.js';
import LoginTeaser from "../../teaser/LoginTeaser";
import {mapGetters} from "vuex";
import {IS_SSR} from "../../../plugins/ssrSwitch";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PodcastPanel',
	mixins: [fetchItemMixin],
	components: {LoginTeaser},
	props: {
		item: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			ENDPOINT: 'podcast-groups/' + this.$route.params.group,
			descriptionOpen: false,
			filteredEpisodes: undefined,
			truncatedShownotes: ''
		};
	},

	computed: {


		// limit the number of recommended podcasts to 12
		// and don'#'t recommend the current podcast

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
	beforeMount() {
		this.truncatedShownotes = this.setTruncatedShownotes();

	},

	mounted() {
		this.filteredEpisodes = this.setFilteredEpisodes();
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
		setFilteredEpisodes() {
			if (!this.itemData || !this.itemData.podcasts) return [];
			return this.itemData.podcasts
					.filter(p => p.episode_number !== this.item.episode_number)
					.slice(0, 16)
		},
		// don't show all shownotes by default
		setTruncatedShownotes() {
			return this.item.shownotes ? this.item.shownotes.substring(0, 150) : '';
		}

	},

} // end export

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



