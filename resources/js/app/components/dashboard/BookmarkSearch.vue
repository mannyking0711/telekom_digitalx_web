<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

    <div class="dashboardBookmarks__search-section" v-if="userTags && items">

        <!-- SEARCH -->
        <span class="form-row dashboardBookmarks__search">
			<label class="dashboardBookmarks__search-category-label" for="bookmarkSearchSelectCategory">{{ $t('bookmarkSearch.category.label') }}</label>
			<div class="input-select" id="bookmarkSearchSelectCategory">
				<svg-icon icon="app/icon-select2"></svg-icon>
				<select v-model="contentCategory">
					<option disabled value="">{{ $t('bookmarkSearch.category.none') }}</option>
					<option v-for="category in categories" :value="category" :key="category">
						{{ $t('bookmarkSearch.category.' + category) }}
					</option>
					<option v-for="tag in userTags" :value="tag" :key="tag">
						{{ tag }}
					</option>
				</select>
			</div>
		</span>

        <!-- ORDER BY -->
        <span class="form-row dashboardBookmarks__order">
            <label class="dashboardBookmarks__order-category-label" for="bookmarkSearchSelectOrderBy">{{ $t('bookmarkSearch.orderBy.label') }}</label>
            <div class="input-select" id="bookmarkSearchSelectOrderBy">
                <svg-icon icon="app/icon-select2"></svg-icon>
                <select v-model="orderBy">
                    <option disabled value="">{{ $t('bookmarkSearch.category.none') }}</option>
                    <option v-for="item in orderByItems" :value="item" :key="item">
                        {{ $t('bookmarkSearch.orderBy.' + item) }}
                    </option>
                </select>
            </div>
        </span>
    </div>

</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>
import Fuse from 'fuse.js';
import {IS_SSR} from "../../plugins/ssrSwitch";

export default {

	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'BookmarkSearch',

	props: {
		category: String,
		tags: Array,
		items: Array
	},

	data() {
		return {
			term: '',
			fuse: null,
			fuseSettings: {
				keys: [
					{name: 'type', weight: 1},
					{name: 'tags', weight: 1},
					{name: 'published', weight: 1},
				],
				threshold: 0.3,
				ignoreLocation: true,
				sortFn: (a, b) => {
					let dateStringA = a.item[2].v.split(".");
					let dateStringB = b.item[2].v.split(".");
					let date1 = new Date().setFullYear(parseInt(dateStringA[2]), parseInt(dateStringA[1]), parseInt(dateStringA[0]));
					let date2 = new Date().setFullYear(parseInt(dateStringB[2]), parseInt(dateStringB[1]), parseInt(dateStringB[0]));

					if (date1 > date2) {
						return -1;
					} else if (date1 < date2) {
						return 1;
					} else {
						return 0;
					}
				}
			},
			categories: ['all', 'article', 'video', 'podcast'],
			contentCategory: '',
			orderBy: '',
			orderByItems: ['published', 'lastAdded'],
		};
	},

	computed: {
		userTags() {
			if (IS_SSR === true) {
				return
			}
			if (this.tags) {
				let tagList = [];
				if (this.$i18n.locale === 'de') {
					this.tags.forEach(item => {
						tagList.push(item.name_de)
					})
					return tagList;
				} else {
					this.tags.forEach(item => {
						tagList.push(item.name_en)
					})
					return tagList;
				}
			}
		},
	},

	watch: {
		contentCategory() {
			this.initFuse(this.contentCategory);
		},
		orderBy() {
			this.initFuse(this.contentCategory);
		}
	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
		initFuse(term) {
			this.fuse = new Fuse(this.items, this.fuseSettings);
			this.onSearch(term);
		},
		onSearch(term) {
			if (term && term !== 'all') {
				const items = this.fuse.search(term);
				this.$emit('search', items.map(i => i.item));
			} else {
				this.$emit('search', null);
			}
		},
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
		"bookmarkSearch.category.label": "Filtern nach",
		"bookmarkSearch.orderBy.label": "Sortieren nach",
		"bookmarkSearch.category.none": "Bitte auswählen",
		"bookmarkSearch.category.all": "Alle Medien",
		"bookmarkSearch.category.article": "Artikel",
		"bookmarkSearch.category.video": "Videos",
		"bookmarkSearch.category.podcast": "Podcasts",
		"bookmarkSearch.orderBy": "Sortiert nach",
		"bookmarkSearch.orderBy.lastAdded": "Zuletzt hinzugefügt",
		"bookmarkSearch.orderBy.published": "Veröffentlicht am"
	},
	"en": {
		"bookmarkSearch.category.label": "Filter by",
		"bookmarkSearch.orderBy.label": "Sort by",
		"bookmarkSearch.category.none": "Please choose",
		"bookmarkSearch.category.all": "All media",
		"bookmarkSearch.category.article": "Articles",
		"bookmarkSearch.category.video": "Videos",
		"bookmarkSearch.category.podcast": "Podcasts",
		"bookmarkSearch.orderBy": "Ordered by",
		"bookmarkSearch.orderBy.lastAdded": "last added",
		"bookmarkSearch.orderBy.published": "published at"
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






