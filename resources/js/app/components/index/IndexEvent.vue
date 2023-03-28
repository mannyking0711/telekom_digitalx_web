<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<section class="index-event inner">

		<!-- COUNTDOWN -->
		<div class="col-30">
<!--			<h2 class="index-event-mobile">{{ $t('Veranstaltung') }}</h2>-->
			<div ref="countdown">
				<event-countdown
          v-if="eventCountdown"
          :start-timestamp="eventCountdown.start_timestamp"
          :title="eventCountdown.title" :text="eventCountdown.text" :logo="eventCountdown.logo"
          :labelDay="eventCountdown.day" :labelDays="eventCountdown.days"
          :button="eventCountdown.button" :link-register="eventCountdown.link_register"/>
			</div>
		</div>

		<!-- CONTENT -->
		<div class="col-70" v-if="eventContent">
			<h2 v-if="eventContent.title" class="index-event-desktop">{{ eventContent.title }}</h2>
			<h3 v-if="eventContent.subtitle" class="index-event-name">{{ eventContent.subtitle }}</h3>

			<!-- COPY -->
			<div v-if="eventContent.text1" class="index-event-copy" v-html="eventContent.text1"></div>

      <!-- GALLERY -->
      <div class="index-event-gallery">
        <div class="index-event-gallery__left">
          <div class="index-event-gallery__image">
            <img v-if="eventContent.gallery_image_left" class="lazy" :data-src="eventContent.gallery_image_left" :src="eventContent.gallery_image_left">
          </div>
          <a v-if="eventContent.gallery_button && eventContent.slug" :href="$router.resolve(link('events.detail', {slug: eventContent.slug})).href" class="btn blue index-event-gallery__button">
            {{ eventContent.gallery_button }}
          </a>
        </div>
        <div class="index-event-gallery__right">
          <div class="index-event-gallery__right__content">
            <div v-if="eventContent.gallery_title" class="index-event-gallery__title">{{ eventContent.gallery_title }}</div>
            <div v-if="eventContent.gallery_subtitle" class="index-event-gallery__subtitle">{{ eventContent.gallery_subtitle }}</div>
          </div>
          <div class="index-event-gallery__image">
            <img v-if="eventContent.gallery_image_right" class="lazy" :data-src="eventContent.gallery_image_right" :src="eventContent.gallery_image_right">
          </div>
        </div>
      </div>

      <!-- COPY -->
      <div v-if="eventContent.text2" class="index-event-copy" v-html="eventContent.text2"></div>

<!--			&lt;!&ndash; GALLERY TOP &ndash;&gt;-->
<!--			<div class="index-event-gallery-top">-->
<!--				<div class="event-gallery-left">-->
<!--					<img class="lazy" :data-src="basePath+'img/app/index/'+$t('index-event-01-de.jpg')">-->
<!--					<p class="event-gallery-speakerinfo">-->
<!--						{{ $t('indexEvent.galleryTopText2') }}-->
<!--					</p>-->
<!--				</div>-->
<!--				<div class="event-gallery-right">-->
<!--					<p class="event-gallery-speaker">{{ $t('indexEvent.galleryTopHeadline') }}</p>-->
<!--					<p class="event-gallery-subline">{{ $t('indexEvent.galleryTopText1') }}</p>-->
<!--					<img class="event-gallery-image lazy" :data-src="basePath+'img/app/index/index-event-02.jpg'"></img>-->
<!--				</div>-->
<!--			</div>-->

<!--			&lt;!&ndash; GALLERY BOTTOM &ndash;&gt;-->
<!--			<div class="index-event-gallery-bottom">-->
<!--				<div class="event-gallery-left">-->
<!--					<div class="event-gallery-image lazy" :data-src="basePath+'img/app/index/'+$t('index-event-03-de.jpg')"></div>-->
<!--					<router-link :to="'/' + $i18n.locale + '/my-digital-x'" class="btn blue index-event-speaker-btn">{{ $t('indexEvent.speakerButton') }}</router-link>-->
<!--				</div>-->
<!--				<div class="event-gallery-right">-->
<!--					<img class="lazy" :data-src="basePath+'img/app/index/'+$t('index-event-05-de.jpg')">-->
<!--				</div>-->

<!--				<div class="event-gallery-left" v-if="localeSlug(event) && $te('indexEvent.galleryBottomButton')">-->
<!--					<div class="index-event-buttonrow">-->
<!--						<router-link :to="link('events.detail.speaker', {slug: localeSlug(event)})" class="btn">{{ $t('indexEvent.galleryBottomButton') }}</router-link>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
		</div>

	</section>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		import gsap from "gsap";
		import { ScrollTrigger } from "gsap/ScrollTrigger";
		gsap.registerPlugin(ScrollTrigger);


		export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'IndexEvent',

			props: {
        eventCountdown: { type: Object, required: false },
        eventContent: { type: Object, required: false },
			},

			data() {
				return {
					anim: undefined
				};
			},

			computed: {

				event() {
					return this.$store.getters.nextEvent;
				}
			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {

			},

			mounted() {
                if (this.eventCountdown) {
                    this.$nextTick(() => {
                        this.initAnimation();
                    });
                }
			},

			destroyed() {

			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				initAnimation() {

					var scrollTrigger = {
						trigger: '.index-event .index-event-counter',
						start: "top 10%",
						endTrigger: ".index-event",
            end: () => {
                if (this.$refs && this.$refs.countdown) {
                    return "bottom 140px+=" + this.$refs.countdown.offsetHeight + "px";
                }
            },
						//markers: true,
						pinSpacing:false,
						pin: true,
						invalidateOnRefresh: true
					};

					if(this.anim) { this.anim.kill(); }

					ScrollTrigger.matchMedia({
						"(min-width:1050px)": () => {
							this.anim = gsap.timeline({paused: true, scrollTrigger });
							this.anim.to('.index-event-counter-digits',{duration:0.4, scale: 1.1});
							this.anim.to('.index-event-counter-digits',{duration:0.2, scale: 1});
						}
					});

				}
			},


            /////////////////////////////////
            // WATCH
            /////////////////////////////////

            watch: {

                eventCountdown(to, from) {
                    this.$nextTick(() => {
                        this.initAnimation();
                    });
                }
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
				"indexEvent.eventName": "DIGITAL X 2022 – Digitalisierung im Herzen von Köln",
				"indexEvent.copyText1": "It’s a wrap! Vielen Dank für Ihre Teilnahme an der DIGITAL X 2021. Dank Ihnen wurde die Sehnsucht nach echten Live-Erlebnissen endlich wieder zur Realität. Zwei spannende Tage liegen hinter uns – mit inspirierenden Keynotes, zahlreichen Highlights und befruchtenden Gesprächen.",
				"indexEvent.copyText2": "Doch ohne Abschied fing nie jet Neues aan: Wir freuen uns Ihnen schon jetzt mitteilen zu können, dass wir Sie zur DIGITAL X 2022 erneut im Herzen Kölns empfangen werden.",
				"indexEvent.copyText3": "Atemberaubende Indoor- und Outdoor-Bühnen, noch mehr Brandhouses, Markplätze sowie die relevantesten Themen & Speaker. Wir verwandeln gemeinsam mit Ihnen die Stadt Köln erneut zur Weltausstellung der Digitalisierung – dezentral, agil und innovativ. Neben geballter, inhaltlicher Power erwarten Sie wie gewohnt zahlreiche Entertainment-Highlights. Ob Netzwerken während der Kölschen Nacht oder gemeinsames Feiern auf der After-Show-Party – wir versprechen Ihnen zwei unvergessliche Tage in der schönsten Stadt am Rhein!",
				"indexEvent.copyText4": "Um keine News oder Updates zu verpassen, registrieren Sie sich unter „My DIGITAL X“ für unserer Community. Wenn Sie bereits Besucher der DIGITAL X 2021 waren oder registriertes Mitglied sind, erhalten Sie automatisch alle Neuigkeiten! Stay tuned!",
				"indexEvent.galleryTopHeadline": "13. und 14. September 2022",
				"indexEvent.galleryTopText1": "Köln",
				"indexEvent.galleryTopText2": "Die DIGITAL X macht Digitalisierung wieder anfassbar – live und in Farbe. Die Kölner Innenstadt erstrahlt in einer neuen und unglaublichen Dimension.",
				"indexEvent.galleryBottomButton": "",
				"indexEvent.speakerButton": "My Digital X"
			},


			"en": {
				"indexEvent.eventName": "DIGITAL X 2022 – Digitalization in the heart of Cologne",
				"indexEvent.copyText1": "It’s a wrap! Thank you for taking part in DIGITAL X 2021. You have helped to finally make the desire for true live events a reality again. We’ve just experienced two exciting days of inspiring keynotes, numerous highlights and productive discussions.",
				"indexEvent.copyText2": "But let this farewell be the start of great things to come! Today we’re thrilled to announce DIGITAL X 2022 – and we look forward to welcoming you to the heart of Cologne again next year.",
				"indexEvent.copyText3": "Breathtaking indoor and outdoor stages, even more brand houses, marketplaces and the most relevant topics and speakers. Together with you, we will once again transform the city of Cologne into a decentralised, agile and innovative world exhibition of digitalisation. Alongside concentrated, powerful content, a whole range of entertainment highlights await you, as you’ve come to expect. From networking during the Kölsche Nacht to celebrating together at the aftershow party – we promise you two unforgettable days in the most beautiful city on the Rhine!",
				"indexEvent.copyText4": "Don’t miss any updates – register at ‘My DIGITAL X’ to become part of our community. If you visited DIGITAL X 2021 or are already a registered member, you’ll automatically receive all news and announcements! Stay tuned!",
				"indexEvent.galleryTopHeadline": "September 13th and 14th, 2022",
				"indexEvent.galleryTopText1": "Cologne",
				"indexEvent.galleryTopText2": "DIGITAL X is once again making digitalization a hands-on experience—live and in color, adding an incredible new dimension to downtown Cologne.",
				"indexEvent.galleryBottomButton": "",
				"index-event-01-de.jpg": "index-event-01-en.jpg",
				"index-event-03-de.jpg": "index-event-03-en.jpg",
				"index-event-04-de.jpg":  "index-event-04-en.jpg",
				"index-event-05-de.jpg":  "index-event-05-en.jpg",
				"indexEvent.speakerButton": "My Digital X"
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


