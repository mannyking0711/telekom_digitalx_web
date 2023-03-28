

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<section class="awardNominees">
        <div class="col-100">
            <h2 class="pageaward__headline awardNominees__headline">{{ headline }} <span>{{ year }}</span></h2>
            <div class="awardNominees__categories">
                <div class="awardNominees__category" v-for="(category, key) in categorizedNominees" :key="key">
                    <h3 class="awardNominees__title">{{ $store.getters.getAwardCategoryById(category.id).name  }}</h3>
                    <ul class="awardNominees__nominees">
                        <li class="awardNominees__nominee" v-for="(nominee, idx) in category.nominees" :key="idx">
                            <div class="awardNominees__nominee-logo">
                                <img :src="nominee.logo" alt="" />
                            </div>
                            <svg-icon  class="awardNominees__nominee-icon" icon="app/icon-arrow"></svg-icon>
                            <div class="awardNominees__nominee-title">{{ nominee.name }}</div>
                        </li>
                    </ul>
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

		name: 'AwardCategories',

		props: {
            headline: String,
            year: Number
		},

		data() {
			return {

			};
		},

		computed: {
            categorizedNominees: function() {
				const award = this.$store.getters.getAwardByYear(this.year);
                let categories = {};
                let nominees = award && award.nominees ? award.nominees : [];

                nominees.forEach(nominee => {
                    if (!nominee.entry) return;

                    if (!categories[nominee.entry.category]) {
                        categories[nominee.entry.category] = {
                            id: nominee.entry.category,
                            nominees: []
                        };
                    }

                    categories[nominee.entry.category].nominees.push(nominee.entry);
                });

                return categories;
            }
		},


		/////////////////////////////////
		// EVENTS
		/////////////////////////////////

		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		methods: {

		}

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






