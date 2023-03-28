<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <section class="no-spacing magOverSubject" v-if="topicOfTheWeek && topicOfTheWeek.length > 0">
        <div class="col-100">
            <h2 class="pageMagazineOverview__headline magOverSubject__headline"><em>{{ topicOfTheWeek.topic }}</em></h2>
            <div class="magOverSubject__grid">
                <div class="magOverSubject__text-col">
					<div class="magOverSubject__text" v-html="topicOfTheWeek.desc"></div>
					<!-- ### 1 ### -->
					<router-link v-if="this.$i18n.locale === 'de'" :to="'magazin/' + this.topicOfTheWeek.content_de[2].slug" class="magOverSubject__item">
						<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_de[2].title }}</h4>
						<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_de[2].img_list.url" alt="" />
					</router-link>
					<router-link v-if="this.$i18n.locale === 'en'" :to="'magazine/' + this.topicOfTheWeek.content_en[2].slug" class="magOverSubject__item">
						<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_en[2].title }}</h4>
						<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_en[2].img_list.url" alt="" />
					</router-link>
				</div>
				<div class="magOverSubject__img-col">
					<div class="magOverSubject__grid-row">
						<!-- ### 2 ### -->
						<router-link v-if="this.$i18n.locale === 'de'" :to="'magazin/' + this.topicOfTheWeek.content_de[0].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_de[0].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_de[0].img_list.url" alt="" />
						</router-link>
						<router-link v-if="this.$i18n.locale === 'en'" :to="'magazine/' + this.topicOfTheWeek.content_en[0].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_en[0].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_en[0].img_list.url" alt="" />
						</router-link>
						<!-- ### 3 ### -->
						<router-link v-if="this.$i18n.locale === 'de'" :to="'magazin/' + this.topicOfTheWeek.content_de[1].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_de[1].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_de[1].img_list.url" alt="" />
						</router-link>
						<router-link v-if="this.$i18n.locale === 'en'" :to="'magazine/' + this.topicOfTheWeek.content_en[1].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_en[1].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_en[1].img_list.url" alt="" />
						</router-link>
					</div>
					<div class="magOverSubject__grid-row magOverSubject__grid-row--last">
						<!-- ### 4 ### -->
						<router-link v-if="this.$i18n.locale === 'de'" :to="'magazin/' + this.topicOfTheWeek.content_de[3].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_de[3].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_de[3].img_list.url" alt="" />
						</router-link>
						<router-link v-if="this.$i18n.locale === 'en'" :to="'magazine/' + this.topicOfTheWeek.content_en[3].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_en[3].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_en[3].img_list.url" alt="" />
						</router-link>
						<!-- ### 5 ### -->
						<router-link v-if="this.$i18n.locale === 'de'" :to="'magazin/' + this.topicOfTheWeek.content_de[4].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_de[4].title }}</h4>
							<img class="magOverSubject__item-image" :src="this.topicOfTheWeek.content_de[4].img_list.url" alt="" />
						</router-link>
						<router-link v-if="this.$i18n.locale === 'en'" :to="'magazine/' + this.topicOfTheWeek.content_en[4].slug" class="magOverSubject__item">
							<h4 class="magOverSubject__item-title">{{ this.topicOfTheWeek.content_en[4].title }}</h4>
							<img class="magOverSubject__item-image-last" :src="this.topicOfTheWeek.content_en[4].img_list.url" alt="" />
						</router-link>
					</div>
				</div>
            </div>
          <div class="text-center">
            <router-link :to="linkMagazineSearch(this.topicOfTheWeek.searchTerm)" class="btn blue icon-left pageMagazineOverview__btn">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ this.topicOfTheWeek.button }}</span>
            </router-link>
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

		name: 'MagazineOverviewSubject',

		props: {

		},

		data() {
			return {
			}
		},

		computed: {
			topicOfTheWeek() {
				return this.$store.getters.getItem(this.ENDPOINT);
			}
		},


		/////////////////////////////////
		// EVENTS
		/////////////////////////////////

		created() {
			this.ENDPOINT = 'topic-of-the-weeks/' + this.getCurrentWeek();
		},

		serverPrefetch() {
			return this.fetchTopicOfTheWeek();
		},

		mounted() {
			if(!this.topicOfTheWeek || (this.topicOfTheWeek.locale !== this.$i18n.locale)) {
				this.fetchTopicOfTheWeek();
			}
		},

		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		methods: {

			fetchTopicOfTheWeek() {
				return this.$store.dispatch('fetchItem', this.ENDPOINT);
			},

            linkMagazineSearch(subject) {
                let linkTarget = this.link('magazine.article');
                linkTarget.query = { q: subject };
                return linkTarget;
            },

            getCurrentWeek(){
				let date = new Date();

				let currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
				let yearOfThursday = currentThursday.getFullYear();
				let firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);

				return Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);
			},

		},

		watch: {
		}

	}; // end export

</script>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<i18n>
	{
		"de": {
		},
		"en": {
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


