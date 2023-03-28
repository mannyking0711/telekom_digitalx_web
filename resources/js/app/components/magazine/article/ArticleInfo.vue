<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

  <div class="articleinfo">

    <!-- COLORBOX -->
    <span :class="['colorbox',colorbox, 'articleinfo__colorbox']"></span>

    <div class="articleinfo__content">

      <!-- TAGS -->
      <div class="articleinfo__tags">

        <div v-show="item_tags.length != 0">

          <router-link v-show="item_tags[0]" :to="linkMagazineSearch(item_tags[0])" class="articleinfo__tag">
            {{ item_tags[0] }}
          </router-link>
          <router-link v-show="item_tags[1]" :to="linkMagazineSearch(item_tags[1])" class="articleinfo__tag">
            {{ item_tags[1] }}
          </router-link>
          <router-link v-show="item_tags[2]" :to="linkMagazineSearch(item_tags[2])" class="articleinfo__tag">
            {{ item_tags[2] }}
          </router-link>
          <router-link v-show="item_tags[3]" :to="linkMagazineSearch(item_tags[3])" class="articleinfo__tag">
            {{ item_tags[3] }}
          </router-link>
          <router-link v-show="item_tags[4]" :to="linkMagazineSearch(item_tags[4])" class="articleinfo__tag">
            {{ item_tags[4] }}
          </router-link>
          <router-link v-show="item_tags[5]" :to="linkMagazineSearch(item_tags[5])" class="articleinfo__tag">
            {{ item_tags[5] }}
          </router-link>
          <router-link v-show="item_tags[6]" :to="linkMagazineSearch(item_tags[6])" class="articleinfo__tag">
            {{ item_tags[6] }}
          </router-link>
          <router-link v-show="item_tags[7]" :to="linkMagazineSearch(item_tags[7])" class="articleinfo__tag">
            {{ item_tags[7] }}
          </router-link>


        </div>





        <!--  :key="tag" -->
        <!--
        <router-link v-for="tag in tags" :key="tag" :to="linkMagazineSearch(tag)" class="articleinfo__tag">
          {{ tag }}
        </router-link>
        -->
      </div>

      <!-- METADATA -->
      <div class="articleinfo__metadata">

        <!-- BOOKMARK -->
        <client-only>
          <div class="articleinfo__bookmark" :class="{ active: isBookmarked }">
            <router-link :to="link('dashboard')" v-if="!isAuthenticated">
              <svg-icon sprite="app/bookmark"></svg-icon>
            </router-link>
            <a href @click.prevent="toggleBookmark" v-if="isAuthenticated">
              <svg-icon sprite="app/bookmark"></svg-icon>
            </a>
          </div>
        </client-only>

        <!-- DATE -->
        <div class="articleinfo__date">{{ published }}</div>

        <!-- AUTHOR -->
        <div class="articleinfo__author">{{ author }}</div>
      </div>

    </div>

  </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import {mapGetters} from "vuex";
import {postItem} from "../../../services/api";
import ClientOnly from "../../utils/ClientOnly";

export default {

  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'ArticleInfo',
  components: {ClientOnly},
  props: {
    item_id: Number,
    item_type: String,
    published: String,
    author: String,
    item_tags: {
      type: Array,
      default: () => []
    },
    colorbox: {type: String, default: 'green'},
  },

  data() {
    return {};
  },

  computed: {

    ...mapGetters('oidcStore', [
      'oidcIsAuthenticated',
      'oidcUser',
      'oidcAccessToken'
    ]),

    isBookmarked() {
      const userProfile = this.$store.state.userProfile;
      if (this.item_id && this.item_type && userProfile.bookmarks) {
        return userProfile.bookmarks[this.item_type].includes(this.item_id);
      } else {
        return false;
      }
    },

    isAuthenticated() {
      return this.oidcIsAuthenticated;
    },

    linkTarget() 	{
      switch(this.item_type) {
        case 'article': 	return 'magazine.article';
        case 'podcast': 	return 'magazine.podcast';
        case 'video': 		return 'magazine.video';
      }
    },
  },


  /////////////////////////////////
  // EVENTS
  /////////////////////////////////


  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    toggleBookmark() {
      const apicall = !!this.isBookmarked ? 'delete' : 'add';
      const payload = {
        item_id: '' + this.item_id,
        item_type: this.item_type,
        user_profile: this.oidcUser.sub,
        user_access_token: this.oidcAccessToken,
      }
      postItem(this.$store.getters.env.content_url + 'bookmarks/' + apicall, {
        body: JSON.stringify(payload),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => {
        this.$store.dispatch('loadUserProfile', {id: this.oidcUser.sub, access_token: this.oidcAccessToken});
      }).catch(error => {
        console.log(error.message);
      });
    },

    linkMagazineSearch(tag) {
      let linkTarget = this.link(this.linkTarget);
      linkTarget.query = {q: tag};
      return linkTarget;
    },
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


