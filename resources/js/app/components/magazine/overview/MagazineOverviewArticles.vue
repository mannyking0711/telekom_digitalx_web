<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div>

      <div class="pageMagazineOverview__flat pageMagazineOverview__rounded magOverArticles__list">
          <h2 class="pageMagazineOverview__headline magOverArticles__headline">{{ $t('magOverArticles.headline') }}</h2>
          <magazine-list v-if="articles.length" :items="articles" contentType="article" :showFirst="3" :showLoadMore="false" />
      </div>

			<!--
            <router-link :to="link('magazine.article')" class="btn blue icon-left pageMagazineOverview__btn">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('magOverArticles.buttonAll') }}</span>
            </router-link>
			-->

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

		name: 'MagazineOverviewArticles',

		props: {

		},

		data() {
			return {};
		},

		computed: {
			articles() {
                return this.$store.state.content.articles.list;
            },
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
			"magOverArticles.headline": "AKTUELLE BEITRÄGE",
			"magOverArticles.reccommendationHeadline": "Empfehlung der Redaktion",
			"magOverArticles.editor": "Gunnar Sohn",
			"magOverArticles.editorTitle": "Chefredakteur",
			"magOverArticles.articleHeadline": "Trickle Up - Lars P. Feld im DIGITAL X AdHoc – Kurz Clip",
			"magOverArticles.articleIntro": "Eine neue Führungsmannschaft müsse nach der Bundestagswahl die großen Herausforderungen wie Digitalisierung, Klimaschutz und Demografie anpacken, ...",
			"magOverArticles.buttonAll": "Alle Beiträge"
		},
		"en": {
			"magOverArticles.headline": "LATEST ARTICLES",
			"magOverArticles.reccommendationHeadline": "Editors reccomendation",
			"magOverArticles.editor": "Gunnar Sohn",
			"magOverArticles.editorTitle": "Chief editor",
			"magOverArticles.articleHeadline": "Trickle Up - Lars P. Feld im DIGITAL X AdHoc – Kurz Clip",
			"magOverArticles.articleIntro": "Eine neue Führungsmannschaft müsse nach der Bundestagswahl die großen Herausforderungen wie Digitalisierung, Klimaschutz und Demografie anpacken, ...",
			"magOverArticles.buttonAll": "All Articles"
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


