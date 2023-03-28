<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div>

		<!-- INTRO -->
<!--		<keyvisual :data="{}" />-->

		<!-- HEADER INTRO -->
		<index-intro
      :eventCountdown="eventCountdown"
      :eventPresenter="eventPresenter"
      :eventTickets="eventTickets"
      :hero="hero"
      :articleHero="articleHero"
      :show-article-hero="showArticleHero"
      :event-locations="eventLocations"
    ></index-intro>

		<!-- NEWSLETTER EVENT TEASER -->
<!--		<section v-if="this.$i18n.locale === 'de'" class="newsletter-event-section">-->
<!--			<div class="col-100">-->
<!--				<newsletter-event-teaser />-->
<!--			</div>-->
<!--		</section>-->


    <lib-section>

      <!-- EVENT INTRO -->
      <event-intro
          v-if="itemData && itemData.event_intro"
          :title="itemData.event_intro.title"
          :subtitle="itemData.event_intro.subtitle"
          :image="itemData.event_intro.image"
          :text="itemData.event_intro.text"
          :button="itemData.event_intro.button"
          :url="itemData.event_intro.url"
      />
      <!-- EVENT INTRO (WITH COUNTDOWN) -->
      <index-event
          v-else
          :eventCountdown="eventCountdown"
          :eventContent="eventContent"
      />

    </lib-section>



    <lib-section v-if="itemData && itemData.content_slider_quotes && itemData.content_slider_quotes.quotes">

      <!-- SLIDER QUOTES -->
      <content-slider-quotes
        :headline="itemData.content_slider_quotes.title"
        :headline_tag="itemData.content_slider_quotes.title_tag"
        :subheadline="itemData.content_slider_quotes.subtitle"
        :text="itemData.content_slider_quotes.text"
        :quotes="itemData.content_slider_quotes.quotes"
      />

    </lib-section>

    <!-- GK PK TEASER -->
<!--    <event-gk-pk-teaser-->
<!--      v-if="event && event.gk_pk_teaser"-->
<!--      class="event-pk-teaser"-->
<!--      :title1="event.gk_pk_teaser.title1"-->
<!--      :subtitle1="event.gk_pk_teaser.subtitle1"-->
<!--      :text1="event.gk_pk_teaser.text1"-->
<!--      :content1="event.gk_pk_teaser.content1"-->
<!--      :image1="event.gk_pk_teaser.image1"-->
<!--      :button1_1="event.gk_pk_teaser.button1_1"-->
<!--      :url1_1="event.gk_pk_teaser.url1_1"-->
<!--      :button1_2="event.gk_pk_teaser.button1_2"-->
<!--      :url1_2="event.gk_pk_teaser.url1_2"-->
<!--      :button1_3="event.gk_pk_teaser.button1_3"-->
<!--      :url1_3="event.gk_pk_teaser.url1_3"-->
<!--      :title2="event.gk_pk_teaser.title2"-->
<!--      :subtitle2="event.gk_pk_teaser.subtitle2"-->
<!--      :text2="event.gk_pk_teaser.text2"-->
<!--      :content2="event.gk_pk_teaser.content2"-->
<!--      :image2="event.gk_pk_teaser.image2"-->
<!--      :button2_1="event.gk_pk_teaser.button2_1"-->
<!--      :url2_1="event.gk_pk_teaser.url2_1"-->
<!--      :button2_2="event.gk_pk_teaser.button2_2"-->
<!--      :url2_2="event.gk_pk_teaser.url2_2"-->
<!--      :button2_3="event.gk_pk_teaser.button2_3"-->
<!--      :url2_3="event.gk_pk_teaser.url2_3"-->
<!--    />-->

    <lib-section v-if="itemData && itemData.content_teaser_cards && itemData.content_teaser_cards.active" >
      <!-- TEASER CARDS (USPs) -->
      <content-teaser-cards
        :title="itemData.content_teaser_cards.title"
        :text="itemData.content_teaser_cards.text"
        :image="itemData.content_teaser_cards.image"
        :cards="itemData.content_teaser_cards.cards"
      />
    </lib-section>

    <!-- TOP SPEAKER -->
<!--    <event-speaker-->
<!--      v-if="itemData && itemData.event_top_speaker"-->
<!--      :title="itemData.event_top_speaker.title"-->
<!--      :title_tag="itemData.event_top_speaker.title_tag"-->
<!--      :text="itemData.event_top_speaker.text"-->
<!--      :button="itemData.event_top_speaker.button"-->
<!--      :speakers="itemData.event_top_speaker.speakers"-->
<!--    />-->

    <!-- AGENDA HIGHLIGHTS -->
<!--    <event-highlights-->
<!--      v-if="itemData && itemData.event_agenda_highlights"-->
<!--      :title="itemData.event_agenda_highlights.title"-->
<!--      :title_tag="itemData.event_agenda_highlights.title_tag"-->
<!--      :text="itemData.event_agenda_highlights.text"-->
<!--      :button="itemData.event_agenda_highlights.button"-->
<!--      :events="itemData.event_agenda_highlights.events"-->
<!--    />-->

    <lib-section v-if="companiesInFokusHighlight && companiesInFokusHighlight.length">
      <!-- BEST PRACTICE TEASER ARTICLE -->
      <lib-section-header v-if="companiesInFokusTitle && companiesInFokusHighlight && companiesInFokusHighlight.length" :headline="companiesInFokusTitle"></lib-section-header>
      <article-best-practice-list v-if="companiesInFokusHighlight && companiesInFokusHighlight.length" :articles="companiesInFokusHighlight"/>
      <!-- BEST PRACTICE ARTICLES -->
      <magazine-best-practice-list v-if="companiesInFokus && companiesInFokus.length" :items="companiesInFokus"></magazine-best-practice-list>
    </lib-section>

    <lib-section v-if="videosInFokusHighlight && videosInFokusHighlight.length">
      <!-- BEST PRACTICE TEASER VIDEO -->
      <lib-section-header v-if="videosInFokusTitle && videosInFokusHighlight && videosInFokusHighlight.length" :headline="videosInFokusTitle"></lib-section-header>
      <article-best-practice-list v-if="videosInFokusHighlight && videosInFokusHighlight.length" :articles="videosInFokusHighlight"/>
      <!-- BEST PRACTICE VIDEOS -->
      <magazine-best-practice-list
        v-if="videosInFokus && videosInFokus.length"
        :items="videosInFokus"
        :button="videosInFokusButton"
      ></magazine-best-practice-list>
    </lib-section>

		<!-- PODCAST TEASER -->
<!--		<section v-if="podcastHighlights && podcastHighlights.length>0 && this.$i18n.locale === 'de'" class="podcast-section">-->
<!--			<div class="col-100">-->
<!--				<podcast-teaser v-if="podcastHighlights && podcastHighlights.length" variant="large" :item="podcastHighlights[0]"/>-->
<!--			</div>-->
<!--		</section>-->

    <lib-section>
      <!-- HERO ARTICLES -->
      <div class="text-center">
        <h2>{{ $t('pageindex.headlineHeroArticle') }}</h2>
      </div>
      <article-hero-list :articles="articleHighlights"></article-hero-list>

      <!-- ARTICLES -->
      <magazine-list :items="newContent" :show-first="3">
        <router-link :to="link('magazine')" class="btn blue">{{
            $t("pageindex.btnAllArticles")
          }}
        </router-link>
      </magazine-list>
    </lib-section>

    <lib-section>

      <!-- PARTNER FOCUS -->
      <partner-focus
        v-if="itemData && itemData.partner_focus && itemData.partner_focus.length"
        :partners="itemData.partner_focus"
      />

      <!-- PARTNER LIST -->
      <partner-list
        v-if="itemData"
        :support="itemData.partners_support"
        :regular="itemData.partners_regular"
        :premium="itemData.partners_premium"
        :coop="itemData.partners_coop"
        :mobility="itemData.partners_mobility"
        :digitalization="itemData.partners_digitalization"
        :media="itemData.partners_media"
        :startup="itemData.partners_startup"
        :partner="itemData.partners_partner"
      />

    </lib-section>

    <!-- NEWSLETTER TEASER -->
<!--    <section>-->
<!--      <div class="col-100">-->
<!--        <newsletter-teaser variant="large"/>-->
<!--      </div>-->
<!--    </section>-->

    <!-- AWARD -->
<!--    <h2>{{ $t('pageindex.headlineAward') }}</h2>-->
<!--    <index-award></index-award>-->

    <!-- SOCIAL HUB -->
<!--    <index-social></index-social>-->

    <div class="section">
      <!-- INITIATIVE -->
      <index-initiative></index-initiative>
    </div>

	</div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import fetchItemMixin from '../mixins/fetchItem.js';
import LibSection from "../components/lib/LibSection";

export default {


	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'PageIndex',
  components: {LibSection},
  mixins: [fetchItemMixin],

	metaInfo() {

		return {
			title: this.$store.getters.env.app_name,
			titleTemplate: this.$t('pageindex.metaTitle'),
			meta: [
				{name: 'description', content: this.$t('pageindex.metaDescription')},
				{property: 'og:title', content: this.$t('pageindex.metaTitle')},
				{property: 'og:description', content: this.$t('pageindex.metaDescription')},
				{property: 'og:image', content: this.$t('aws.bucket') + 'digital-x-sc.jpg'},
				{property: 'og:type', content: 'website'},
				{property: 'og:url', content: this.ogUrl},
				{property: 'og:site_name', content: this.$t('pageindex.metaTitle')},
				{property: 'twitter:card', content: 'summary'},
				{property: 'twitter:creator', content: 'Telekom'},
				{property: 'twitter:title', content: this.$t('pageindex.metaTitle')},
				{property: 'twitter:description', content: this.$t('pageindex.metaDescription')},
				{property: 'twitter:image', content: this.$t('aws.bucket') + 'digital-x-sc.jpg'}
			],
			link: [this.canonical]
		};
	},

	props: {},

	data() {
		return {
			ENDPOINT: 'index/'
		};
	},

	computed: {
    event() {
      return this.$store.getters.nextEvent;
    },
		newContent() {
			return this.$store ? this.$store.getters.newContent : [];
		},
		articles() {
			return this.$store.state.content.articles.list;
		},
		articleHighlights() {
			return this.$store.state.content.articles.highlights;
		},
    companiesInFokusTitle() {
      const companiesInFokus = this.$store.state.content.companiesInFokus;
      return companiesInFokus ? companiesInFokus.title : '';
    },
    companiesInFokusHighlight() {
      const companiesInFokus = this.$store.state.content.companiesInFokus;
      if (companiesInFokus.highlight) {
        return this.$store.state.content.articles.list.filter((item) => item.id === companiesInFokus.highlight);
      }
    },
    companiesInFokus() {
      let articles = [];
      const companiesInFokus = this.$store.state.content.companiesInFokus;
      if (companiesInFokus.articles && companiesInFokus.articles.length > 0) {
        companiesInFokus.articles.forEach(element => {
          articles.push(...this.$store.state.content.articles.list.filter(item => item.id === element));
        });
      }
      return articles;
    },
    videosInFokusTitle() {
      const videosInFokus = this.$store.state.content.videosInFokus;
      return videosInFokus ? videosInFokus.title : '';
    },
    videosInFokusHighlight() {
      const videosInFokus = this.$store.state.content.videosInFokus;
      if (videosInFokus.highlight) {
        return this.$store.state.content.videos.list.filter((item) => item.id === videosInFokus.highlight);
      }
    },
    videosInFokus() {
      let videos = [];
      const videosInFokus = this.$store.state.content.videosInFokus;
      if (videosInFokus.videos && videosInFokus.videos.length > 0) {
        videosInFokus.videos.forEach(element => {
          videos.push(...this.$store.state.content.videos.list.filter(item => item.id === element));
        });
      }
      return videos;
    },
    videosInFokusButton() {
      const videosInFokus = this.$store.state.content.videosInFokus;
      return videosInFokus && videosInFokus.button ? videosInFokus.button : null;
    },
    videosInFokusUrl() {
      const videosInFokus = this.$store.state.content.videosInFokus;
      return videosInFokus && videosInFokus.url ? videosInFokus.url : null;
    },
		podcasts() {
			return this.$store.state.content.podcasts.list;
		},
		podcastHighlights() {
			return this.$store.state.content.podcasts.highlights;
		},
    eventPresenter() {
			if (this.event) {
				return this.event.presenter ? this.event.presenter : null
			}
		},
		eventTickets() {
			if (this.itemData) {
				return this.itemData.tickets ? this.itemData.tickets : null
			}
		},
		hero() {
			if (this.itemData) {
				return this.itemData.hero ? this.itemData.hero : null
			}
		},
		eventCountdown() {
			if (this.itemData) {
				return this.itemData.countdown ? this.itemData.countdown : null
			}
		},
		eventContent() {
			if (this.itemData) {
				return this.itemData.event_content ? this.itemData.event_content : null
			}
		},
		articleHero() {
			if (this.itemData) {
				return this.$store.state.content.articles.list.find(item => item.id === this.itemData.article_hero);
			}
		},
		showArticleHero() {
			return !(this.itemData && this.itemData.hero);
		},
    eventLocations() {
      if (this.itemData) {
        return this.itemData.event_locations ? this.itemData.event_locations : null
      }
    },
	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	created() {
	},

	mounted() {
		window.dispatchEvent(new Event('resize'));
	},


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {},

	/////////////////////////////////
	// WATCH
	/////////////////////////////////

	watch: {

		articles(newValue, oldValue) {

			this.$nextTick(() => {
				window.dispatchEvent(new Event('resize'));
			});
		}
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
		"pageindex.headlineHeroArticle": "DIGITAL X MAGAZIN",
		"pageindex.btnAllArticles": "ALLE BEITRÄGE UND MEDIEN",
		"pageindex.btnBestPracticeArticles": "> AKTUELLES AUS DER PRAXIS",
		"pageindex.headlineAward": "Was ist der DIGITAL CHAMPIONS AWARD?",
		"pageindex.headlineSocial": "Digitalisierungs-Trends von der Community für die Community",
		"pageindex.metaTitle": "Digitalisierung in der Praxis – die DIGITAL X-Community",
		"pageindex.metaDescription": "Die DIGITAL X ist die Antwort auf die Frage „Was bedeutet Digitalisierung? Im Community-Netzwerk finden Unternehmen und Experten zusammen und erhalten konkrete Lösungen und Impulse auf Ihrem Weg in die Digitalisierung."
	},
	"en": {
		"pageindex.headlineHeroArticle": "DIGITAL X MAGAZINE",
		"pageindex.btnAllArticles": "ALL ARTICLES AND MEDIA",
		"pageindex.btnBestPracticeArticles": "> LATEST NEWS BEST PRACTICE",
		"pageindex.headlineAward": "What is the DIGITAL CHAMPIONS AWARD?",
		"pageindex.headlineSocial": "Digitalization trends by the community for the community",
		"pageindex.metaTitle": "Digitalization in practice - the DIGITAL X community",
		"pageindex.metaDescription": "DIGITAL X is the answer to the question of “What does digitalization mean?” The community network brings businesses and experts together, offering them concrete solutions and ideas as they go digital."
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



