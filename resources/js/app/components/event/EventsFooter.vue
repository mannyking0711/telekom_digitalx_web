<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="eventsfooter">

        <section class="no-spacing">
            <div class="col-100">

                <div class="eventsfooter__content">
                    <h2 class="eventsfooter__title">{{ headline }}</h2>
                    <p class="eventsfooter__desc">{{ text }}</p>
                    <div v-for="event in events" :key="event.slug_de" class="eventsfooter__event">
                        <div>
                            <div class="eventsfooter__event-title">{{ event.title }}</div>
                            <div class="eventsfooter__event-date">{{ event.start }} · {{ event.location }}</div>
                        </div>
                        <router-link :to="link('events.detail', {slug: localeSlug(event)})" class="btn small icon-left eventsfooter__event-link">
                            <svg-icon icon="app/icon-arrow" />
                            <span>{{ $t('eventsfooter.eventLink') }}</span>
                        </router-link>
                    </div>
                </div>

            </div>
        </section>

        <div class="eventsfooter__maps eventsfooter__maps--mobile">
            <img class="eventsfooter__map eventsfooter__map--flags" :src="basePath + '../img/app/event/map_flags_mobile.svg'" alt="map" />
            <img class="eventsfooter__map eventsfooter__map--germany" :src="basePath + '../img/app/event/map_germany_mobile.png'" alt="map" />
            <img class="eventsfooter__map eventsfooter__map--europe" :src="basePath + '../img/app/event/map_europe_mobile.png'" alt="map" />
        </div>
        <div class="eventsfooter__maps eventsfooter__maps--desktop">
            <img class="eventsfooter__map eventsfooter__map--flags" :src="basePath + '../img/app/event/map_flags_desktop.svg'" alt="map" />
            <img class="eventsfooter__map eventsfooter__map--germany" :src="basePath + '../img/app/event/map_germany_desktop.png'" alt="map" />
            <img class="eventsfooter__map eventsfooter__map--europe" :src="basePath + '../img/app/event/map_europe_desktop.png'" alt="map" />
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

            name: 'EventsFooter',

            props: {
                headline: String,
                text: String,
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
                "eventsfooter.eventLink": "Zur Veranstaltung"
			},
			"en": {
                "eventsfooter.eventLink": "View Event"
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



