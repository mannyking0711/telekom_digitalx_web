<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="nlteaser" :class="[variant == 'large' ? 'nlteaser--large' : '']">

		<div class="nlteaser__form">

			<h3 class="nlteaser__headline">{{ $t('newsletterteaser.headline1') }}</h3>

			<p class="nlteaser__text">{{ $t('newsletterteaser.text1') }}</p>

			<!--<input-text class="dark-input" :placeholder="$t('newsletterteaser.maillabel')"></input-text>-->

			<router-link :to="link('meta.newsletter')" class="btn blue nlteaser__btn">{{ $t('newsletterteaser.button') }}</router-link>

		</div>

		<div v-if="variant == 'large'" class="nlteaser__social">

			<h3 class="nlteaser__headline">{{ $t('newsletterteaser.headline2') }}</h3>

			<p class="nlteaser__text">{{ $t('newsletterteaser.text2') }}</p>

			<div class="nlteaser__icons">
				<a class="nlteaser__icon" target="_blank" href="https://www.linkedin.com/showcase/telekom-business/"><svg-icon icon="app/icon-linkedin"></svg-icon></a>
				<a class="nlteaser__icon" target="_blank" href="https://www.xing.com/communities/groups/telekom-business-1086249"><svg-icon icon="app/icon-xing"></svg-icon></a>
				<a class="nlteaser__icon" target="_blank" href="https://twitter.com/digimittelstand"><svg-icon icon="app/icon-twitter"></svg-icon></a>
				<a class="nlteaser__icon" target="_blank" href="https://www.facebook.com/DigitalXMagazin"><svg-icon icon="app/icon-facebook"></svg-icon></a>
				<a class="nlteaser__icon" target="_blank" href="https://www.youtube.com/user/telekombusiness"><svg-icon icon="app/icon-youtube"></svg-icon></a>
				<a class="nlteaser__icon" target="_blank" href="https://www.instagram.com/deutschetelekom/"><svg-icon icon="app/icon-instagram"></svg-icon></a>
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

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'NewsletterTeaser',

		props: {
			variant: String
		},

		data() {
			return {
			};
		},

		computed: {

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
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<i18n>
		{
			"de": {
				"newsletterteaser.headline1": 	"VERPASSEN SIE NICHTS",
				"newsletterteaser.text1": 		"Abonnieren Sie jetzt unseren Newsletter und erleben Sie alle Beiträge aus der digitalen Welt der DIGITAL X – Europas führender Digitalisierungsinitiative!",
				"newsletterteaser.textMagazin":	"Abonnieren Sie jetzt unseren Newsletter und verpassen Sie keinen Beitrag",
				"newsletterteaser.maillabel": 	"Ihre Mailadresse",
				"newsletterteaser.button": 		"NEWSLETTER BESTELLEN",
				"newsletterteaser.headline2": 	"SOCIAL MEDIA",
				"newsletterteaser.text2": 		"Vernetzen Sie sich mit uns: Folgen Sie der DIGITAL X auf Social Media"
			},
			"en": {
				"newsletterteaser.headline1": 	"DON’T MISS A THING",
				"newsletterteaser.text1": 		"Subscribe to our newsletter now to receive all the articles from the digital world of DIGITAL X – Europe’s leading digitalization initiative!",
				"newsletterteaser.textMagazin":	"Subscribe to our newsletter now and don’t miss a single article",
				"newsletterteaser.maillabel": 	"Your email address",
				"newsletterteaser.button": 		"SUBSCRIBE TO NEWSLETTER",
				"newsletterteaser.headline2": 	"SOCIAL MEDIA",
				"newsletterteaser.text2": 		"Get in touch: Follow DIGITAL X on social media"
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


