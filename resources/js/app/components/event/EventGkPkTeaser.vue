<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <section class="event-gk-pk-teaser inner no-spacing">
    <div class="col-100">
      <div class="event-gk-pk-teaser__grid">
        <div class="event-gk-pk-teaser__column event-gk-pk-teaser__column--gk">
          <div v-if="image1" class="event-gk-pk-teaser__image">
            <img class="lazy" :data-src="image1" :src="image1" :alt="title1">
          </div>
          <div class="event-gk-pk-teaser__container">
            <div>
              <div class="event-gk-pk-teaser__headline">
                <h3 class="event-gk-pk-teaser__title">
                  {{ title1 }}
                </h3>
                <h4 v-if="subtitle1" class="event-gk-pk-teaser__subtitle">
                  {{ subtitle1 }}
                </h4>
              </div>
              <div v-if="text1" class="event-gk-pk-teaser__text">
                {{ text1 }}
              </div>
              <div v-if="content1" class="event-gk-pk-teaser__content" v-html="content1" />
            </div>
            <div class="event-gk-pk-teaser__buttons">
              <a v-if="button1_1 && url1_1" :href="url1_1" target="_blank" class="event-gk-pk-teaser__button btn">
                {{ button1_1 }}
              </a>
              <a v-if="button1_2 && url1_2" :href="url1_2" target="_blank" class="event-gk-pk-teaser__button btn">
                {{ button1_2 }}
              </a>
              <a v-if="button1_3 && url1_3" :href="url1_3" target="_blank" class="event-gk-pk-teaser__button btn">
                {{ button1_3 }}
              </a>
            </div>
          </div>
        </div>

        <div class="event-gk-pk-teaser__column event-gk-pk-teaser__column--pk">
          <div v-if="image2" class="event-gk-pk-teaser__image">
            <img class="lazy" :data-src="image2" :src="image2" :alt="title2">
          </div>
          <div class="event-gk-pk-teaser__container">
            <div>
              <div class="event-gk-pk-teaser__headline">
                <h3 class="event-gk-pk-teaser__title">
                  {{ title2 }}
                </h3>
                <h4 v-if="subtitle2" class="event-gk-pk-teaser__subtitle">
                  {{ subtitle2 }}
                </h4>
              </div>
              <div v-if="text2" class="event-gk-pk-teaser__text">
                {{ text2 }}
              </div>
              <div v-if="content2" class="event-gk-pk-teaser__content" v-html="content2" />
            </div>
            <div class="event-gk-pk-teaser__buttons">
              <a v-if="button2_1 && url2_1" :href="url2_1" target="_blank" class="event-gk-pk-teaser__button btn">
                {{ button2_1 }}
              </a>
              <a v-if="button2_2 && url2_2" :href="url2_2" target="_blank" class="event-gk-pk-teaser__button btn">
                {{ button2_2 }}
              </a>
              <a v-if="button2_3 && url2_3" :href="url2_3" target="_blank" class="event-gk-pk-teaser__button btn">
                {{ button2_3 }}
              </a>
            </div>
          </div>
        </div>
      </div>
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

  name: 'EventGkPkTeaser',

  props: {
    title1: String,
    subtitle1: String,
    text1: String,
    content1: String,
    image1: String,
    button1_1: String,
    url1_1: String,
    button1_2: String,
    url1_2: String,
    button1_3: String,
    url1_3: String,
    title2: String,
    subtitle2: String,
    text2: String,
    content2: String,
    image2: String,
    button2_1: String,
    url2_1: String,
    button2_2: String,
    url2_2: String,
    button2_3: String,
    url2_3: String,
  },

}; // end export

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






