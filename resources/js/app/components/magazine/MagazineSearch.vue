<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<section class="topics-searchbar">
    <div class="row">
      <div class="col-xl-8 col-lg-9">
        <div class="pageMagazine__search">
          <div class="form-row pageMagazine__search-category">
            <div class="input-select">
              <svg-icon icon="app/icon-select"></svg-icon>
              <select v-model="category">
                <option disabled value="">{{ $t('magazineSearch.category.none') }}</option>
                <option v-for="category in categories" :value="category" :key="category">
                  {{ $t('magazineSearch.category.' + category) }}
                </option>
              </select>
            </div>
          </div>
          <search-field
              :searchTerm="term"
              :placeholder="$t('magazineSearch.placeholder')"
              @search="onSearch"
              class="pageMagazine__search-field"
          />
        </div>
      </div>
      <div class="col-xl-4 col-lg-3">
        <div class="form-row pageMagazine__order">
          <div class="input-select">
            <svg-icon icon="app/icon-select"></svg-icon>
            <select v-model="orderBy">
              <option disabled value="">{{ $t('magazineSearch.category.none') }}</option>
              <option v-for="item in orderByItems" :value="item" :key="item">
                {{ $t('magazineSearch.orderBy.' + item) }}
              </option>
            </select>
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
	import Fuse from 'fuse.js';

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'MagazineSearch',

		props: {
			contentType: String,
		},

		data() {
			return {
				term: '',
				fuse: null,
				fuseSettings: {
					keys: [
						{ name: 'author.fullname', weight: 0.3 },
						{ name: 'podcast_group.title ', weight: 1 },
						{ name: 'title', weight: 1 },
						{ name: 'tags', weight: 0.4 },
						{ name: 'published', weight: 0.1 },
						{ name: 'id', weight: 0.1 }
					],
					threshold: 0.3,
					ignoreLocation: true,
					sortFn: (a, b) => {
						switch (this.orderBy) {
							case "date": {
								let dateStringA = a.item[4].v.split(".");
								let dateStringB = b.item[4].v.split(".");
								let date1 = new Date().setFullYear(parseInt(dateStringA[2]), parseInt(dateStringA[1]), parseInt(dateStringA[0]));
								let date2 = new Date().setFullYear(parseInt(dateStringB[2]), parseInt(dateStringB[1]), parseInt(dateStringB[0]));

								if ( date1 > date2 ) {
									return -1;
								} else if ( date1 < date2 ) {
									return 1;
								} else {
									return 0;
								}
							}
							case "views":
								let views1 = parseInt(a.item[5].v);
								let views2 = parseInt(b.item[5].v);
								if ( views1 > views2 ) {
									return -1;
								} else if ( views1 < views2 ) {
									return 1;
								} else {
									return 0;
								}
						}
					}
				},
				category: this.contentType,
				categories: ['all', 'article', 'video', 'podcast'],
				orderBy: '',
				orderByItems: ['date', 'views'],
			};
		},

		computed: {
			items() {
				switch(this.category) {
					case 'article': 	return this.$store.state.content.articles.list;
					case 'podcast': 	return this.$store.state.content.podcasts.list;
					case 'video': 		return this.$store.state.content.videos.list;
					default:  			return this.$store.getters.newContent;
				}
			},
		},

		watch: {
			category() {
				this.initFuse();
			},

			orderBy(){
				this.initFuse();
			},

      $route(to) {
        if (to.query.q !== this.term) {
          this.term = to.query.q;
          this.onSearch(this.term);
          this.$nextTick(() => {
            document.getElementById('app').scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      },
		},


		/////////////////////////////////
		// EVENTS
		/////////////////////////////////


		mounted() {

			this.initFuse();

		},


		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		methods: {
			initFuse() {

				this.fuse = new Fuse(this.items, this.fuseSettings);

				if (this.$router.currentRoute.query.q) {
					this.term = this.$router.currentRoute.query.q;
					this.onSearch(this.term);
				}
			},
			onSearch(term) {
				if (term) {
					// set search term as query param in url if it isn't set already
					if (this.$router.currentRoute.query.q !== term) {
            // We need to silently update the url without triggering route in vue-router
						// this.$router.push({ query: { q: term } })
            history.pushState(
              {},
              null,
              this.$route.path + '?q=' + encodeURIComponent(term)
            )
					}

					const items = this.fuse.search(term);
					this.$emit('search', items.map(i => i.item));
				} else {
					this.$emit('search', null);
				}
			},
		},
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
				"magazineSearch.category.none": "-- Bitte auswählen --",
				"magazineSearch.category.all": "Alle Medien",
				"magazineSearch.category.article": "Artikel",
				"magazineSearch.category.video": "Videos",
				"magazineSearch.category.podcast": "Podcasts",
				"magazineSearch.placeholder": "Suchen Sie z.B. “Logistik”, “5G” oder “CEO”",
				"magazineSearch.orderBy": "Sortiert nach",
				"magazineSearch.orderBy.date": "Datum",
				"magazineSearch.orderBy.views": "Views"
			},
			"en": {
				"magazineSearch.category.none": "-- Please choose --",
				"magazineSearch.category.all": "All media",
				"magazineSearch.category.article": "Articles",
				"magazineSearch.category.video": "Videos",
				"magazineSearch.category.podcast": "Podcasts",
				"magazineSearch.placeholder": "Search for e.g. “Logistics”, “5G” or “CEO”",
				"magazineSearch.orderBy": "Ordered by",
				"magazineSearch.orderBy.date": "Date",
				"magazineSearch.orderBy.views": "Views"
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






