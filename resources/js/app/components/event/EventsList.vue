<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="eventslist">

        <section class="no-spacing">
            <div class="col-100">

                <div class="eventslist__event" v-for="event in events" :key="event.id" :class="'eventslist__event--preview-' + event.preview_position">
                    <div class="eventslist__event-intro" :style="{top: `${(Math.random()-0.5)*200}px`}">
                        <div v-if="event.is_review" class="eventslist__event-dateplace">{{ $t('eventslist.historyHeadline') }}</div>
                        <!--<div v-else class="eventslist__event-dateplace">{{ event.event.start }} · {{ event.event.location }}</div>-->
                        <img class="eventslist__event-img eventslist__event-img--desktop" :src="event.event.img_list" alt="" />
                        <img class="eventslist__event-img eventslist__event-img--mobile" :src="event.event.img_list_mobile" alt="" />
                        <img class="eventslist__event-logo" :src="event.event.logo" />
                        <div v-if="event.is_review" class="eventslist__event-countdown eventslist__event-countdown--past">
                            {{ $t('eventslist.historyBadge') }}
                        </div>
                        <div class="eventslist__event-countdown" v-if="event.event.show_counter && event.event.countdown">
                            <event-countdown
                              :start-timestamp="event.event.start_timestamp"
                              :title="event.event.countdown.title" :logo="event.event.logo"
                              :labelDay="event.event.countdown.day" :labelDays="event.event.countdown.days"
                              :button="event.event.countdown.button" :link-register="event.event.link_register" btn-class="blue" />
                        </div>
                    </div>

                    <div class="eventslist__event-info">
                        <h3 class="eventslist__info-headline">{{ event.headline }}</h3>
                        <p class="eventslist__info-text">{{ event.text }}</p>
                        <a v-if="event.is_review" :href="event.review_url" class="btn blue icon-left eventslist__event-btn--desktop">
                            <svg-icon icon="app/icon-arrow" />
                            <span>{{ $t('eventslist.historyLink') }}</span>
                        </a>
                        <router-link v-else :to="link('events.detail', {slug: localeSlug(event.event)})" class="btn icon-left yellow eventslist__event-btn--desktop">
                            <svg-icon icon="app/icon-arrow" />
                            <span>{{ $t('eventslist.eventLink') }}</span>
                        </router-link>
                    </div>

                    <div class="eventslist__event-preview">
                        <h4 class="eventslist__preview-headline">{{ event.preview_headline }}</h4>
                        <div v-if="event.preview_images.length === 3" class="eventslist__preview-content eventslist__preview-content--triple">
                            <div class="eventslist__dual-images">
                                <img :src="event.preview_images[0]" alt="" />
                                <img :src="event.preview_images[1]" alt="" />
                            </div>
                            <img :src="event.preview_images[2]" alt="" />
                        </div>
                        <div v-else-if="event.preview_images.length === 2" class="eventslist__preview-content eventslist__preview-content--double">
                            <img :src="event.preview_images[0]" alt="" />
                            <img :src="event.preview_images[1]" alt="" />
                        </div>
                        <div v-else-if="event.preview_images.length === 1" class="eventslist__preview-content eventslist__preview-content--quote">
                            <img :src="event.preview_images[0]" alt="" />
                            <!--
                            <div class="eventslist__quote">
                                <div class="eventslist__quote-text">„I think technology can be the answer to climate change, but we have to hurry.“</div>
                                <div class="eventslist__quote-author">Josef Adelsberger</div>
                                <div class="eventslist__quote-title">Goingsoft - Geschäftsführer</div>
                            </div>
                            -->
                        </div>
                        <div class="eventslist__btn-wrap">
                            <router-link v-if="event.is_review" :to="link('events.detail', {slug: localeSlug(event)})" class="btn blue icon-left eventslist__event-btn--mobile">
                                <svg-icon icon="app/icon-arrow" />
                                <span>{{ $t('eventslist.historyLink') }}</span>
                            </router-link>
                            <router-link v-else :to="link('events.detail', {slug: localeSlug(event)})" class="btn icon-left yellow eventslist__event-btn--mobile">
                                <svg-icon icon="app/icon-arrow" />
                                <span>{{ $t('eventslist.eventLink') }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </section>

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

            name: 'EventsList',

            props: {
                events: Array
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
                "eventslist.eventLink": "Zum Event",
                "eventslist.historyLink": "Zum Rückblick",
                "eventslist.historyHeadline": "Rückblick",
                "eventslist.historyBadge": "Event Highlights"
			},
			"en": {
                "eventslist.eventLink": "View Event",
                "eventslist.historyLink": "View Highlights",
                "eventslist.historyHeadline": "Highlights",
                "eventslist.historyBadge": "Event Highlights"
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



