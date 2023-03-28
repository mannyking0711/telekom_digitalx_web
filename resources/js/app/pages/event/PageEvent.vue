<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div class="pageevent">
    <!-- HERO -->
    <event-hero :hero="hero" :event="itemData" :eventCountdown="eventCountdown" :eventPresenter="eventPresenter" :eventTickets="eventTickets" />

		<!-- KEYVISUAL -->
<!--       	<keyvisual :data="itemData.keyvisual" v-if="itemData && itemData.event_parallax" class="no-spacing" />-->

		<!-- APP -->
<!--		<event-app :data="itemData.event_app" v-if="itemData && itemData.event_app" />-->

		<!-- PARALLAX -->
<!--		<event-parallax :data="itemData.event_parallax" v-if="itemData && itemData.event_parallax" />-->

		<!-- LIGHTBOX SLIDESHOW -->
    <event-locations :data="itemData.event_locations" v-if="itemData && itemData.event_locations && itemData.event_locations.items && itemData.event_locations.items.length > 0" :nowrap="false" color="magenta" />

    <div class="section">
      <div class="container-fluid">
        <!-- INTRO -->
        <event-intro
          v-if="itemData && itemData.event_intro"
          :title="itemData.event_intro.title"
          :subtitle="itemData.event_intro.subtitle"
          :image="itemData.event_intro.image"
          :text="itemData.event_intro.text"
          :button="itemData.event_intro.button"
          :url="itemData.event_intro.url"
        />
      </div>
    </div>

    <div class="container-fluid">
      <!-- INTRODUCTION -->
      <event-introduction :data="itemData" v-if="itemData && itemData.event_introduction" />

      <!-- MAIN STAGES -->
      <event-main-stages :data="itemData.event_mainstages" v-if="itemData && itemData.event_mainstages"/>

      <!-- SLIDER -->
      <event-slider :slides="itemData.event_slider" v-if="itemData && itemData.event_slider && itemData.event_slider.length" />

      <!-- MAP -->
      <event-map :data="itemData" v-if="itemData" />

      <!-- BEST PRACTICE TEASER VIDEO -->
      <lib-section-header v-if="videosInFokusHighlight && videosInFokusHighlight.length" :headline="videosInFokusTitle">
        <article-best-practice-list :articles="videosInFokusHighlight"/>
      </lib-section-header>

      <div class="section-spacer"></div>

      <!-- SLIDER QUOTES -->
      <content-slider-quotes
        v-if="itemData && itemData.content_slider_quotes && itemData.content_slider_quotes.quotes"
        :headline="itemData.content_slider_quotes.title"
        :headline_tag="itemData.content_slider_quotes.title_tag"
        :subheadline="itemData.content_slider_quotes.subtitle"
        :text="itemData.content_slider_quotes.text"
        :quotes="itemData.content_slider_quotes.quotes"
      />

      <div class="section-spacer"></div>

      <!-- MEGATRENDS2 -->
      <event-megatrends2
        v-if="itemData && itemData.event_megatrends2"
        :title="itemData.event_megatrends2.title"
        :title_tag="itemData.event_megatrends2.title_tag"
        :subtitle="itemData.event_megatrends2.subtitle"
        :text="itemData.event_megatrends2.text"
        :button="itemData.event_megatrends2.button"
        :megatrends="itemData.event_megatrends2.megatrends"
      />

      <div style="background-color: #fff">
        <section class="inner no-spacing">
          <!-- GK PK TEASER -->
          <event-gk-pk-teaser
            v-if="itemData && itemData.event_gk_pk_teaser"
            class="event-pk-teaser"
            :title1="itemData.event_gk_pk_teaser.title1"
            :subtitle1="itemData.event_gk_pk_teaser.subtitle1"
            :text1="itemData.event_gk_pk_teaser.text1"
            :content1="itemData.event_gk_pk_teaser.content1"
            :image1="itemData.event_gk_pk_teaser.image1"
            :button1_1="itemData.event_gk_pk_teaser.button1_1"
            :url1_1="itemData.event_gk_pk_teaser.url1_1"
            :button1_2="itemData.event_gk_pk_teaser.button1_2"
            :url1_2="itemData.event_gk_pk_teaser.url1_2"
            :button1_3="itemData.event_gk_pk_teaser.button1_3"
            :url1_3="itemData.event_gk_pk_teaser.url1_3"
            :title2="itemData.event_gk_pk_teaser.title2"
            :subtitle2="itemData.event_gk_pk_teaser.subtitle2"
            :text2="itemData.event_gk_pk_teaser.text2"
            :content2="itemData.event_gk_pk_teaser.content2"
            :image2="itemData.event_gk_pk_teaser.image2"
            :button2_1="itemData.event_gk_pk_teaser.button2_1"
            :url2_1="itemData.event_gk_pk_teaser.url2_1"
            :button2_2="itemData.event_gk_pk_teaser.button2_2"
            :url2_2="itemData.event_gk_pk_teaser.url2_2"
            :button2_3="itemData.event_gk_pk_teaser.button2_3"
            :url2_3="itemData.event_gk_pk_teaser.url2_3"
          />
        </section>
      </div>

      <!-- NOTE -->
      <content-note
        v-if="itemData && itemData.content_note"
        :type="itemData.content_note.type"
        :title="itemData.content_note.title"
        :subtitle="itemData.content_note.subtitle"
        :text="itemData.content_note.text"
      />

      <!-- TEASER TICKETS -->
      <event-teaser-tickets
        v-if="itemData && itemData.event_teaser_tickets"
        :headline="itemData.event_teaser_tickets.headline"
        :headline_tag="itemData.event_teaser_tickets.headline_tag"
        :text="itemData.event_teaser_tickets.text"
        :items="itemData.event_teaser_tickets.items"
      />

      <div class="section-spacer"></div>
    </div>

    <!-- MEGATRENDS -->
    <div class="bg-light">
      <div class="container-fluid">
        <event-megatrends
            v-if="itemData && itemData.event_megatrends"
            :title="itemData.event_megatrends.title"
            :title_tag="itemData.event_megatrends.title_tag"
            :image="itemData.event_megatrends.image"
            :text="itemData.event_megatrends.text"
            :button="itemData.event_megatrends.button"
            :megatrends="itemData.event_megatrends.megatrends"
        />
      </div>
    </div>


    <!-- TEASER CARDS (USPs) -->
    <content-teaser-cards
      v-if="itemData && itemData.content_teaser_cards && itemData.content_teaser_cards.active"
      :title="itemData.content_teaser_cards.title"
      :text="itemData.content_teaser_cards.text"
      :image="itemData.content_teaser_cards.image"
      :cards="itemData.content_teaser_cards.cards"
    />

    <!-- MARKETPLACES -->
    <event-marketplaces :data="itemData" v-if="itemData && itemData.event_marketplaces" />

    <div class="section-spacer"></div>


    <!-- TOP SPEAKER -->
    <event-speaker
      v-if="itemData && itemData.event_top_speaker"
      :title="itemData.event_top_speaker.title"
      :title_tag="itemData.event_top_speaker.title_tag"
      :text="itemData.event_top_speaker.text"
      :button="itemData.event_top_speaker.button"
      :speakers="itemData.event_top_speaker.speakers"
    />

    <!-- AGENDA HIGHLIGHTS -->
    <event-highlights
      v-if="itemData && itemData.event_agenda_highlights"
      :title="itemData.event_agenda_highlights.title"
      :title_tag="itemData.event_agenda_highlights.title_tag"
      :text="itemData.event_agenda_highlights.text"
      :button="itemData.event_agenda_highlights.button"
      :events="itemData.event_agenda_highlights.events"
    />

    <!-- BANNER 2 -->
    <event-banner2
      v-if="itemData && itemData.event_banner2"
      :headline="itemData.event_banner2.headline"
      :headline_tag="itemData.event_banner2.headline_tag"
      :text="itemData.event_banner2.text"
      :image="itemData.event_banner2.image"
      :url="itemData.event_banner2.url"
    />


    <!-- FAQs -->
    <event-faqs :data="itemData" v-if="showFaqs" />

    <div class="section">

      <div class="container-fluid">

        <div style="background-color: #fff">
          <section class="inner no-spacing">
            <!-- PARTNER FOCUS -->
            <partner-focus v-if="itemData && itemData.partner_focus.length" :partners="itemData.partner_focus" />
          </section>
        </div>

        <!-- PARTNER LIST -->
        <div style="background-color: #fff">
          <section class="inner no-spacing" style="background-color: #fff">
            <div class="col-100">
              <partner-list
                v-if="itemData && (itemData.partners_coop.length || itemData.partners_premium.length || itemData.partners_regular.length)"
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
            </div>
          </section>
        </div>

      </div>

    </div>

    <!-- MEMBER -->
<!--    <event-join-->
<!--      v-if="itemData && itemData.link_register && itemData.logo"-->
<!--      :linkRegister="itemData.link_register"-->
<!--      :logo="itemData.logo.url"-->
<!--    />-->

    <!-- ADVERTISING -->
    <event-advertising :data="itemData" v-if="itemData && itemData.event_advertising"></event-advertising>

		<!-- CAMPUS -->
<!--		<event-campus />-->

		<!-- RETROSPECT -->
<!--		<event-retrospect />-->

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

			name: 'PageEvent',
    mixins: [fetchItemMixin],

			metaInfo() {

				return {
					title: 			this.$store.getters.env.app_name,
					titleTemplate: 	this.$t('pageindex.metaTitle'),
					meta: [
						{ name: 	'description', 			content: this.$t('pageindex.metaDescription') },
						{ property: 'og:title', 			content: this.$t('pageindex.metaTitle') },
						{ property: 'og:description', 		content: this.$t('pageindex.metaDescription') },
						{ property: 'og:image', 			content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg' },
						{ property: 'og:type', 				content: 'website' },
						{ property: 'og:url', 				content: this.ogUrl },
						{ property: 'og:site_name', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:card', 		content: 'summary' },
						{ property: 'twitter:creator', 		content: 'Telekom' },
						{ property: 'twitter:title', 		content: this.$t('pageindex.metaTitle') },
						{ property: 'twitter:description', 	content: this.$t('pageindex.metaDescription') },
						{ property: 'twitter:image', 		content: this.$t('aws.bucket') + 'digital-x-sc-events.jpg' }
					],
					link: [	this.canonical ]
				};
			},

			props: {
			},

			data() {
				return {
					ENDPOINT: 'events/' + this.$route.params.slug,
          BREADCRUMB_TITLE: 'title',
          SET_AS_CURRENT_ITEM: true,
          previewSecret: this.$router.currentRoute.query.preview_secret ?? null,
				};
			},

      computed: {
        nextEvent() {
          return this.$store.getters.nextEvent;
        },

        showFaqs() {
          return this.itemData && (
            this.itemData.faq_title ||
            this.itemData.faq_text ||
            (this.itemData.faq_items && this.itemData.faq_items.length > 0)
          )
        },

        eventPresenter() {
          if (this.itemData) {
            return this.itemData.event_presenter ? this.itemData.event_presenter : null
          }
        },

        eventTickets() {
          return this.itemData && this.itemData.link_register && this.itemData.tickets
            ? {
              button: this.itemData.tickets.button ? this.itemData.tickets.button : null,
              text: this.itemData.tickets.text ? this.itemData.tickets.text : null,
              title: this.itemData.tickets.title ? this.itemData.tickets.title : null,
              logo: this.itemData.logo && this.itemData.logo.url ? this.itemData.logo.url : null,
              link_register: this.itemData.link_register ? this.itemData.link_register : null,
              css: 'blue',
            }
            : null
        },

        hero() {
          if (this.itemData) {
            return this.itemData.event_header ? this.itemData.event_header : null
          }
        },

        eventCountdown() {
          if (this.itemData) {
            return this.itemData.countdown ? this.itemData.countdown : null
          }
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
      },


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {},

			mounted() {},

			beforeRouteLeave (to, from, next) {
                // if the route changed due to a language change, we need to translate the slug
                this.translateSlugIfLanguageChanged(to, next, this.itemData);
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {},



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
				"pageindex.metaTitle": "DIGITAL X-Event: Weltausstellung der Digitalisierung",
				"pageindex.metaDescription": "Die DIGITAL X unterstützt Sie bei der digitalen Transformation. Alle Digital-Events, Live-Veranstaltungen und Konferenzen stehen unter dem Motto: „Vernetzen, austauschen und voneinander lernen“."
			},
			"en": {
				"pageindex.metaTitle": "DIGITAL X-Event: World Exhibition of Digitization",
				"pageindex.metaDescription": "DIGITAL X helps you with your digital transformation. All digital events, live events and conferences follow the motto of: “Network, exchange and learn from each other.”"
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



