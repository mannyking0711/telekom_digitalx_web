<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="bookmark-list-item">

		<!-- IMAGE -->
		<router-link :to="link(linkTarget,linkParams)" class="image">
			<img class="lazy" alt="" :src="imageUrl"/>
			<div v-if="item.type === 'podcast'" class="list-item-podcast-icon">
				<svg-icon icon="app/icon-podcast"></svg-icon>
			</div>
			<div v-if="item.type === 'video'" class="list-item-duration">{{ item.duration }}</div>
			<div v-if="item.type === 'video'" class="list-item-play">
				<svg-icon icon="app/icon-play"></svg-icon>
			</div>
		</router-link>

		<!-- CONTENT -->
		<div class="content">

			<span v-if="item.type === 'podcast'" class="bookmark-list-item__item-type">
				Podcast
				<a href @click.prevent="deleteBookmark" class="btn-delete">
					<svg-icon class="icon-delete " icon="app/icon-trash"></svg-icon>
				</a>
			</span>
			<span v-if="item.type === 'video'" class="bookmark-list-item__item-type">
				Video
				<a href @click.prevent="deleteBookmark" class="btn-delete">
					<svg-icon class="icon-delete " icon="app/icon-trash"></svg-icon>
				</a>
			</span>
			<span v-if="item.type === 'article' && this.$i18n.locale === 'de'" class="bookmark-list-item__item-type">
				Artikel
				<a href @click.prevent="deleteBookmark" class="btn-delete">
					<svg-icon class="icon-delete " icon="app/icon-trash"></svg-icon>
				</a>
			</span>
			<span v-if="item.type === 'article' && this.$i18n.locale === 'en'" class="bookmark-list-item__item-type">
				Article
				<a href @click.prevent="deleteBookmark" class="btn-delete">
					<svg-icon class="icon-delete " icon="app/icon-trash"></svg-icon>
				</a>
			</span>


			<!-- HEADLINE -->
			<router-link class="bookmark-list-item__headlineComplete" :to="link(linkTarget,linkParams)">
				<h3 class="headline">
					<span class="premiumIcon" v-if="itemIsPremium">My DIGITAL X</span>
					<span v-html="itemTitle"></span>
				</h3>
			</router-link>


			<!-- ARTICLE INFO -->
			<div class="bookmark-list-item__articleinfo-content">

				<!-- METADATA -->
				<div class="bookmark-list-item__articleinfo-metadata">

					<!-- DATE -->
					<div class="bookmark-list-item__articleinfo-date">{{ item.published }}</div>

					<!-- AUTHOR -->
					<div class="bookmark-list-item__articleinfo-author">{{ authorName }}</div>
				</div>
			</div>

            <!-- ARTICLE FOOTER -->
            <div class="bookmark-list-item__articleinfo-footer">

                <!-- TAGS -->
                <div class="articleinfo__tags">
                    <span class="articleinfo__tag" v-for="(tag, index) in item.tags" :key="index">{{ tag }}</span>
                </div>

                <!-- SHARE -->
                <bookmark-share-teaser :itemUrl="linkParams" :itemType="item.type"/>
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
import {postItem} from "../../services/api";

export default {

	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'BookmarkListItem',

	props: {
		item: {
			type: Object,
			required: true,
		},
		highlight: false,
	},

	data() {
		return {
			user: Object
		};
	},

	computed: {
		...mapGetters('oidcStore', [
			'oidcIsAuthenticated',
			'oidcUser',
			'oidcAccessToken'
		]),

		authorName() {
			return this.item && this.item.author ? this.item.author.fullname : '';
		},
		imageUrl() {
			return this.highlight && this.item.img_highlight ? this.item.img_highlight : this.item.img_list;
		},
		itemIsPremium() {
			return this.item && this.item.premium ? this.item.premium : false
		},
		itemTitle() {

			switch (this.item.type) {
					//case 'article': 	return this.item.title;
				case 'article':
					return this.item.title;
				case 'podcast':
					return `${this.item.podcast_group.title} #${this.item.episode_number}<br>${this.item.title}`;
					//case 'video': 		return this.item.title;
				case 'video':
					return this.item.title;
			}
		},

		linkTarget() {
			switch (this.item.type) {
				case 'article':
					return 'magazine.article.detail';
				case 'podcast':
					return 'magazine.podcast.detail';
				case 'video':
					return 'magazine.video.detail';
			}
		},

		linkParams() {

			switch (this.item.type) {
					//case 'article': 	return { slug: this.localeSlug(this.item) };
				case 'article':
					return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.articles_group)};
				case 'podcast':
					return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.podcast_group)};
					//case 'video': 		return { slug: this.localeSlug(this.item) };
				case 'video':
					return {slug: this.localeSlug(this.item), group: this.localeSlug(this.item.videos_group)};
			}
		},

	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
		deleteBookmark() {
			const payload = {
				item_id: '' + this.item.id,
				item_type: this.item.type,
				user_profile: this.oidcUser.sub,
				user_access_token: this.oidcAccessToken,
			}
			postItem(this.$store.getters.env.content_url + 'bookmarks/delete', {
				body: JSON.stringify(payload),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
			}).then(res => {
				this.$store.dispatch('loadUserProfile', {id: this.oidcUser.sub, access_token: this.oidcAccessToken});
			}).catch(error => {
				console.log(error.message);
			});

		},
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


