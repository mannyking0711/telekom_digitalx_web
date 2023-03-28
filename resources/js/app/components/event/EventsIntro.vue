<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="eventsintro">

        <section class="inner no-spacing">
            <div class="col-100">
                <img class="eventsintro__logo" :src="basePath + 'img/app/event/digitalx-logo-white.svg'" />
                <h1 class="eventsintro__headline">{{ headline }}</h1>

                <div class="eventsintro__events">
                    <!--
                    <div v-if="mainEvent" class="eventsintro__event eventsintro__event--highlight">
                        <div class="eventsintro__highlight">{{ mainEvent.start }}</div>
                        <img class="eventsintro__event-logo" :src="mainEvent.logo" />
                        <div class="eventsintro__countdown">
					                  <event-countdown />
                        </div>
                        <router-link :to="link('events.detail', {slug: localeSlug(mainEvent)})" class="btn blue icon-left">
                            <svg-icon icon="app/icon-arrow" />
                            <span>{{ $t('eventsintro.eventLink') }}</span>
                        </router-link>
                    </div>
                    <div class="eventsintro__list">
                        <router-link v-for="event in events" :key="event.slug_de" :to="link('events.detail', {slug: localeSlug(event)})" class="eventsintro__event">
                            <div class="eventsintro__event-info">
                                <img class="eventsintro__event-logo" :src="event.logo" />
                                <div>
                                    <div>{{ event.start }}</div>
                                    <div class="eventsintro__highlight">{{ event.location }}</div>
                                </div>
                            </div>
                            <div class="eventsintro__textlink">
                                <svg-icon class="eventsintro__textlink-arrow" icon="app/icon-arrow" />
                                <span class="eventsintro__textlink-text">{{ $t('eventsintro.eventLink') }}</span>
                            </div>
                        </router-link>
                    </div>
                    -->
                    <!--
                    <div v-if="mainEvent" class="eventsintro__event eventsintro__event--highlight">
                        <div class="eventsintro__highlight">{{ mainEvent.id }}</div>
                        <div class="eventsintro__highlight">{{ mainEvent.start }}</div>
                        <img class="eventsintro__event-logo" :src="mainEvent.logo" />
                        <div class="eventsintro__countdown">
					                  <event-countdown />
                        </div>
                        <router-link :to="link('events.detail', {slug: localeSlug(mainEvent)})" class="btn blue icon-left">
                            <svg-icon icon="app/icon-arrow" />
                            <span>{{ $t('eventsintro.eventLink') }}</span>
                        </router-link>
                    </div>
                    -->
                    <!-- ONLY FOR TWO EVENTS
                    <div class="eventsintro__list-two">
                        <router-link v-for="event in events" :key="event.slug_de" :to="link('events.detail', {slug: localeSlug(event)})" class="eventsintro__event-two">
                            <div class="eventsintro__event-info">
                                <img class="eventsintro__event-logo" :src="event.logo" />
                                <div>
                                    <div>{{ event.start }}</div>
                                    <div class="eventsintro__highlight">{{ event.location }}</div>
                                </div>
                            </div>
                            <div class="eventsintro__textlink">
                                <svg-icon class="eventsintro__textlink-arrow" icon="app/icon-arrow" />
                                <span class="eventsintro__textlink-text">{{ $t('eventsintro.eventLink') }}</span>
                            </div>
                        </router-link>
                    </div>
                    -->
                    <!-- ONLY FOR ONE EVENTS -->
                    <div class="eventsintro__list-one">
                        <router-link v-for="event in events" :key="event.slug_de" :to="link('events.detail', {slug: localeSlug(event)})" class="eventsintro__event-two">
                            <div class="eventsintro__event-info">
                                <img class="eventsintro__event-logo" :src="event.logo" />
                                <div>
                                    <div>{{ event.title }}</div>
                                    <div class="eventsintro__highlight">{{ event.location }}</div>
                                </div>
                            </div>
                            <div class="eventsintro__textlink">
                                <svg-icon class="eventsintro__textlink-arrow" icon="app/icon-arrow" />
                                <span class="eventsintro__textlink-text">{{ $t('eventsintro.eventLink') }}</span>
                            </div>
                        </router-link>
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

            name: 'EventsIntro',

            props: {
                headline: String,
                mainEvent: Object,
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
                "eventsintro.eventHeadline": "DIGITAL-EVENTS & Live-Veranstaltungen ",
                "eventsintro.eventLink": "ZUM EVENT"
			},
			"en": {
                "eventsintro.eventHeadline": "DIGITAL EVENTS & live events ",
                "eventsintro.eventLink": "ABOUT EVENT"
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



