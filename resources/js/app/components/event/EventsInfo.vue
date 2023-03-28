<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <section class="eventsinfo no-spacing">
        <div class="col-100">

            <h2 class="eventsinfo__headline">{{ headline }}</h2>

            <div class="eventsinfo__events">
                <div class="eventsinfo__event">
                    <div class="eventsinfo__event-number">{{ fact1_number }}</div>
                    <p class="eventsinfo__event-desc" v-html="fact1_text" />
                </div>
                <div class="eventsinfo__event">
                    <div class="eventsinfo__event-number">{{ fact2_number }}</div>
                    <p class="eventsinfo__event-desc" v-html="fact2_text" />
                </div>
                <div class="eventsinfo__event">
                    <div class="eventsinfo__event-number">{{ fact3_number }}</div>
                    <p class="eventsinfo__event-desc" v-html="fact3_text" />
                </div>
                <div class="eventsinfo__event">
                    <div class="eventsinfo__event-number">{{ fact4_number }}</div>
                    <p class="eventsinfo__event-desc" v-html="fact4_text" />
                </div>
            </div>

            <p class="eventsinfo__desc">{{ text }}</p>

        </div>
    </section>

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

            name: 'EventsInfo',

            props: {
                headline: String,
                text: String,
                fact1_number: String,
                fact1_text: String,
                fact2_number: String,
                fact2_text: String,
                fact3_number: String,
                fact3_text: String,
                fact4_number: String,
                fact4_text: String
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
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


    <style lang="scss">

    </style>


    <style lang="scss" scoped>

    </style>



