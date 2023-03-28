<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="podseries" v-if="itemData">
		
		<div class="podseries__intro">

			<div class="podseries__intro-mood">
				<img class="podseries__image" :src="itemData.img_list" alt="" />
				<svg-icon class="podseries__podlogo" icon="app/icon-podcast"></svg-icon>
				<svg-icon class="podseries__digitallogo" sprite="app/digitalx-logo-white"></svg-icon>
				<h4 class="podseries__title">{{ itemData.title }}</h4>
			</div>

			<div class="podseries__intro-detail">
				<p class="podseries__desc">{{ itemData.label }}</p>
				<p class="podseries__desc-detail">{{ itemData.subline }}</p>
				<router-link :to="link('magazine.podcast.group', {group: localeSlug(itemData)})" class="btn secondary blue icon-left podseries__btn">
					<svg-icon icon="app/icon-arrow"></svg-icon>
					<span>{{ $t('pagepodcast.episodesButton') }}</span>
				</router-link>
			</div>
			
		</div>

		<div v-if="itemData.podcasts" class="podseries__episodes">
			<router-link
				v-for="podcast in itemData.podcasts"
				:to="link('magazine.podcast.detail',{group: localeSlug(itemData), slug: localeSlug(podcast)})"
				class="podseries__episode"
				:key="podcast.id">
				<svg-icon class="podseries__play" icon="app/icon-play"></svg-icon>
				<div>
					<h5 class="podseries__episode-title"><span>{{ itemData.title }} #{{ podcast.episode_number }}</span> {{ podcast.title }}</h5>
					<p class="podseries__episode-desc">{{ podcast.description }}</p>
				</div>
			</router-link>
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

		export default {


			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'PodcastSeries',

			mixins: [fetchItemMixin],

			props: {
				series: {
					type: Object,
					required: true
				}
			},

			data() {
				return {
					ENDPOINT: 'podcast-groups/' + this.localeSlug(this.series) + '?limit=4'
				};
			},

			computed: {
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



