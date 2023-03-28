<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="eventmap" v-if="data">

        <section class="eventmap__section eventmap__textBox" v-if="event_map">
            <div class="eventmap__inner" v-html="getLangOfString('introtext')">
            </div>
        </section>

        <!--
        <section class="eventmap__section eventmap__imageBox" :style="imageStyle">
            <div class="eventmap__quartiers">
                <ul>
                    <li v-for="(q, index) in quartiers" :key="index" class="eventmap__quartiers-quartier">
                        <h3 class="eventmap__quartiers-quartier-title">{{ getLangOfString(q.title) }}</h3>
                        <div class="eventmap__quartiers-quartier-colorbar" :style="`background: ${q.colorbar}`"></div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="eventmap__section eventmap__quartierBoxes">
                <div class="eventmap__quartierBoxes-quartier" v-for="(q, index) in quartiers" :key="index">
                    <h3 class="eventmap__quartierBoxes-quartier-title">{{ getLangOfString(q.title) }}</h3>

                    <div class="eventmap__quartierBoxes-quartier-colorbar" :style="`background: ${q.colorbar}`"></div>

                    <p class="eventmap__quartierBoxes-quartier-content">{{ getLangOfString(q.content) }}</p>
                </div>
        </section>
        -->

    </div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


    <script>
        import { mapGetters } from 'vuex'
        export default {


            /////////////////////////////////
            // INIT
            /////////////////////////////////

            name: 'EventMap',

            props: {
                data: {
                    type:Object,
                    required: true
                }
            },

            data() {
                return {
                    "quartiers": [
                        {
                            "title" : "box1_title",
                            "content" : "box1_content",
                            "colorbar" : "#E70D7E"
                        },
                        {
                            "title" : "box2_title",
                            "content" : "box2_content",
                            "colorbar" : "#A9DD4E"
                        },
                        {
                            "title" : "box3_title",
                            "content" : "box3_content",
                            "colorbar" : "#FFC039"
                        },
                        {
                            "title" : "box4_title",
                            "content" : "box4_content",
                            "colorbar" : "#3AC0E6"
                        },

                    ],
                };
            },

            computed: {
                ...mapGetters([
                    'nextEvent',
                ]),

                event_map(){
                    return this.nextEvent.event_map
				},

                imageStyle(){
                    const desktopImage = this.event_map.image_desktop.url;
                    const mobileImage = this.event_map.image_mobile.url;

                    return `
                    --desktopImage: url('`+ desktopImage +`');
                    --mobileImage: url('`+ mobileImage +`');
                    `
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
                // get correct lang variable out of string
                getLangOfString(stringVar){
                    if(!this.alphaNumericOnly(stringVar)) {
                        return false;
                    }

                    const interpretedString =  eval(`this.event_map.${stringVar+this.langType()}`);

                    return interpretedString === undefined ? stringVar : interpretedString;
                },

                alphaNumericOnly(aString){
                    if(!aString.match(/^[0-9a-zA-Z_]+$/)) {
                        console.log("ERROR - field naming should be alpha numeric only");
                        return false;
                    }

                    return true;
                },

                langType(){
                    return this.$i18n.locale === 'de' ? '_de' : '_en'
                }
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



