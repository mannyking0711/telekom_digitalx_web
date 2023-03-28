<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <section id="eventslider" class="no-spacing eventslider">

        <div class="col-100 headline">
            <h3 class="headline__title">DIGITAL X SIDE EVENTS</h3>
        </div>

        <div class="col-100 slider">
            <quotes-slider :withHeadlines="true" :quotes="sliderQuotes" class="slider--full-width" />
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

            name: 'EventSlider',

            props: {
                slides: {
                    type: Array,
                    required: true
                }
            },

            data() {
                return {};
            },

            computed: {
                // the quotes slider expects a slightly different format
                sliderQuotes: function() {
                    return this.slides.map(slides => {
                        return {
                            image: (slides.image && slides.image.url) ? slides.image.url : '',
                            quote: slides[`text_${this.$i18n.locale}`],
                            tagline: slides[`tagline_${this.$i18n.locale}`],
                            headline: slides[`title_${this.$i18n.locale}`],
                            footline: slides[`footline_${this.$i18n.locale}`],
                        };
                    });
                },
            },


            /////////////////////////////////
            // EVENTS
            /////////////////////////////////

            created() {

            },

            mounted() {
			    window.lazyload.update();
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



