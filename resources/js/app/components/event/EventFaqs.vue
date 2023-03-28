<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="eventfaqs">

        <section class="inner no-spacing">
            <div class="col-100">

                <h3 class="eventfaqs__headline" v-if="data.faq_title">{{ data.faq_title }}</h3>
                <p class="eventfaqs__desc" v-if="data.faq_text">{{ data.faq_text }}</p>

                <div class="eventfaqs__items">
                    <div v-for="(item, index) in data.faq_items" :key="item.id" class="eventfaqs__item">
                        <div class="eventfaqs__item__border">
<!--                            <svg-icon icon="app/icon-arrow" class="eventfaqs__item__icon"></svg-icon>-->
                            <div class="eventfaqs__item__index">{{ index+1 }}.</div>
                            <h4 class="eventfaqs__item__title" v-if="item.title">{{ item.title }}</h4>
                            <p class="eventfaqs__item__text" v-if="item.text">{{ item.text }}</p>
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

            name: 'EventFaqs',

            props: {
                data: {type:Object, required: true }
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



