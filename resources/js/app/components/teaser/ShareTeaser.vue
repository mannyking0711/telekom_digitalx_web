<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="share-teaser">

        <span>{{ $t('shareteaser.text', { subject: $t(subject) }) }}</span>

		<a :href="linkedinUrl" target="_blank"><svg-icon icon="app/icon-linkedin"></svg-icon></a>
		<a :href="xingUrl" target="_blank"><svg-icon icon="app/icon-xing"></svg-icon></a>
		<a :href="twitterUrl" target="_blank"><svg-icon icon="app/icon-twitter"></svg-icon></a>
		<a :href="facebookUrl" target="_blank"><svg-icon icon="app/icon-facebook"></svg-icon></a>
		<a :href="mailUrl" target="_blank"><svg-icon icon="app/icon-mail"></svg-icon></a>

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

		name: `ShareTeaser`,

		props: {
			subject: { type: String, default: 'Artikel' }
		},

		data() {
			return {
			};
		},

		computed: {
			linkedinUrl: function() {
				return `https://www.linkedin.com/shareArticle?mini=true&url=${this.ogUrl}&title=&summary=&source=`;
			},
			xingUrl: function() {
				return `https://www.xing.com/social/share/spi?url=${this.ogUrl}`;
			},
			twitterUrl: function() {
				return `https://twitter.com/intent/tweet?url=${this.ogUrl}`;
			},
			facebookUrl: function() {
				return `https://www.facebook.com/sharer/sharer.php?u=${this.ogUrl}`;
			},
			mailUrl: function() {
				return `mailto:info@example.com?&subject=&body=${this.ogUrl}`;
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


