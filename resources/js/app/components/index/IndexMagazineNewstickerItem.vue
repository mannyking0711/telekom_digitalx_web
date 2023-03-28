<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="index-magazine-newsticker-item">

        <!-- CONTENT -->
        <div class="content">

            <!-- METADATA -->
            <div class="metadata">
                <div class="date" v-if="date" v-html="date"></div>
                <div class="author" v-if="authorName" v-html="authorName"></div>
            </div>

            <!-- HEADLINE -->
            <router-link :to="link(linkTarget,linkParams)">
                <h4 class="headline" v-html="itemTitle"></h4>
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

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'IndexMagazineListItem',

		props: {
			item: {
				type: Object,
				required: true,
			},
			highlight: false,
		},

		data() {
			return {
			};
		},

		computed: {
			authorName() 	{ return this.item && this.item.author ? this.item.author.fullname : ''; },
            date() 	        { return this.item && this.item.published ? this.item.published : ''; },

			itemTitle() 	{

				switch(this.item.type) {
					case 'article': 	return this.item.title;
					case 'podcast': 	return `${this.item.podcast_group.title} #${this.item.episode_number}<br>${this.item.title}`;
					case 'video': 		return this.item.title;
				}
			},

			linkTarget() 	{

				switch(this.item.type) {
					case 'article': 	return 'magazine.article.detail';
					case 'podcast': 	return 'magazine.podcast.detail';
					case 'video': 		return 'magazine.video.detail';
				}
			},

			linkParams() {

				switch(this.item.type) {
					//case 'article': 	return { slug: this.localeSlug(this.item) };
					case 'article': 	return { slug: this.localeSlug(this.item), group: this.localeSlug(this.item.articles_group) };
					case 'podcast': 	return { slug: this.localeSlug(this.item), group: this.localeSlug(this.item.podcast_group) };
					//case 'video': 		return { slug: this.localeSlug(this.item) };
					case 'video': 		return { slug: this.localeSlug(this.item), group: this.localeSlug(this.item.videos_group) };
				}
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



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<style lang="scss">

</style>


<style lang="scss" scoped>

</style>


