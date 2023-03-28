<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="podteaser" :class="[variant === 'large' ? 'podteaser--large' : '']" v-if="itemData">

		<!-- LEFT COLUMN -->
		<router-link class="podteaser__intro" :to="link('magazine.podcast.detail',{group: localeSlug(itemData.podcast_group), slug: localeSlug(itemData)})">
			<div class="podteaser__headline">
				<div class="podteaser__logo"><svg-icon icon="app/icon-podcast"></svg-icon></div>
				<h3 class="podteaser__logo-text">DIGITAL X <span>PODCAST</span></h3>
			</div>

			<!-- IMAGE AND ICON -->
			<div class="podteaser__image-wrap">
				<div class="podteaser__duration">{{ itemData.duration }}</div>
				<img class="podteaser__image" :src="imageUrl" alt="" />
			</div>
			<div v-if="variant === 'large'" class="podteaser__logo"><svg-icon icon="app/icon-podcast"></svg-icon></div>

			<!-- PLAY ICON -->
			<svg-icon v-if="variant === 'large'" class="podteaser__big-play" icon="app/icon-play"></svg-icon>

			<!-- EPISODE LABEL -->
			<div class="podteaser__latest" >
				<div>
					<h4 class="podteaser__latest-title">
						<div class="podteaser__latest-episode">{{ itemData.podcast_group.title }} #{{ itemData.episode_number }}</div>
						<div>{{ itemData.title }}</div>
					</h4>
					<p class="podteaser__latest-desc">{{ podcastGroup.subline }}</p>
				</div>
			</div>
		</router-link>

		<div class="podteaser__content-wrap">
			<div class="podteaser__content">
				<h3 v-if="variant === 'large'" class="podteaser__logo-text">
					{{ podcastGroup.label }} <span>PODCAST</span>
				</h3>

				<p v-if="variant === 'large'" class="podteaser__desc">
					{{ itemData.description }}
				</p>

				<div class="podteaser__btn-group">
					<!--
					<button v-if="variant == 'large'" class="btn blue icon-left podteaser__btn">
						<svg-icon icon="app/icon-arrow"></svg-icon>
						<span>{{ $t('podcastteaser.button1') }}</span>
					</button>
					-->

					<router-link :to="link('magazine.podcast.group', {group: localeSlug(itemData.podcast_group)})" class="btn blue secondary icon-left podteaser__btn">
						<svg-icon icon="app/icon-arrow"></svg-icon>
						<span>{{ $t('podcastteaser.button2') }}</span>
					</router-link>
				</div>

				<div v-if="variant === 'large'" class="podteaser__services">
					<a :href="itemData.link_spotify" target="_blank" v-if="itemData.link_spotify" class="btn small blue icon-left">
						<svg-icon icon="app/icon-spotify"></svg-icon>
						<span>SPOTIFY</span>
					</a>
					<a :href="itemData.link_apple" target="_blank" v-if="itemData.link_apple" class="btn small blue icon-left">
						<svg-icon icon="app/icon-apple"></svg-icon>
						<span>APPLE</span>
					</a>
					<a :href="itemData.link_deezer" target="_blank" v-if="itemData.link_deezer" class="btn small blue icon-left">
						<svg-icon icon="app/icon-deezer"></svg-icon>
						<span>DEEZER</span>
					</a>
					<a :href="itemData.link_amazon" target="_blank" v-if="itemData.link_amazon" class="btn small blue icon-left">
						<svg-icon icon="app/icon-amazon"></svg-icon>
						<span>AMAZON</span>
					</a>
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
	import fetchItemMixin from '../../mixins/fetchItem.js';

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'PodcastTeaser',

		mixins: [fetchItemMixin],

		props: {
			variant: String,
			item: { type: Object, required: true },
		},

		data() {
			return {
				ENDPOINT: 'podcasts/' + this.item.podcast_group.slug_de + '/' + this.item.slug_de
			};
		},

		computed: {
			imageUrl()  { return this.itemData.img_highlight ? this.itemData.img_highlight : this.itemData.img_list; },
			podcastGroup() {
				return this.$store.getters.getPodcastGroupByPodcastId(this.itemData.podcast_group.id);
			}
		},


		/////////////////////////////////
		// EVENTS
		/////////////////////////////////

		created() {},

		mounted() {},


		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		methods: {}

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


