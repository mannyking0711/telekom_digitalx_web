<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <section class="event-pk-highlights inner no-spacing" :class="'event-pk-highlights--' + color">
    <div class="col-100">
      <div class="event-pk-highlights__headline">
        <h2 class="event-pk-highlights__title" v-html="title"></h2>
        <h3 v-if="subtitle" class="event-pk-highlights__subtitle">{{ subtitle }}</h3>
      </div>
      <div v-if="items.length" class="event-pk-highlights__items">
        <div class="event-pk-highlights__item" v-for="item in items" :key="item.id">
          <div v-if="item.image" class="event-pk-highlights__item__image">
            <img class="lazy" :src="item.image" :alt="item.title">
          </div>
          <div class="event-pk-highlights__item__content">
            <img v-if="item.icon" class="event-pk-highlights__item__icon" :src="item.icon" :alt="item.title"/>
            <h3 v-if="item.title" class="event-pk-highlights__item__title">{{ item.title }}</h3>
            <div v-if="item.text" class="event-pk-highlights__item__text" v-html="item.text"/>
          </div>
        </div>
        <div v-if="button && url" class="event-pk-highlights__item">
          <div class="event-pk-highlights__item__image">
            &nbsp;
          </div>
          <div class="event-pk-highlights__item__content">
            <a :href="url" target="_blank" class="event-pk-highlights__item__button btn" :class="'white-' + color">
              <span>{{ button }}</span>
            </a>
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

  name: 'EventPkHighlights',

  props: {
    title: String,
    subtitle: String,
    items: {type: Array, required: false, default: null},
    button: String,
    url: String,
    color: {type: String, required: false, default: 'blue'},
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






