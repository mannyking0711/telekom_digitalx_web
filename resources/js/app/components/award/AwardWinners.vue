<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<section class="awardWinners">
        <div class="container-fluid">
            <h2 class="pageaward__headline awardWinners__headline">{{ headline }} <span>{{ year }}</span></h2>
            <div class="awardWinners__winners">
                <div v-for="(winner, idx) in winners" :key="idx" class="awardWinners__winner">
                    <div v-if="winner.category_override" class="awardWinners__winner-category">{{ winner.category_override }}</div>
                    <div v-else class="awardWinners__winner-category">{{ $store.getters.getAwardCategoryById(winner.entry.category).name }}</div>
                    <img class="awardWinners__winner-logo" :src="winner.entry.logo" alt="" />
                    <div class="awardWinners__winner-title">{{ winner.entry.name }}</div>
                    <div class="awardWinners__winner-desc">{{ winner.entry.description }}</div>
                    <a class="awardWinners__winner-btn btn icon-left" :href="winner.entry.url">
                        <svg-icon icon="app/icon-arrow"></svg-icon>
                        <span>{{ $t('pageaward.winnersButton') }}</span>
                    </a>
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

		name: 'awardWinners',

		props: {
			headline: String,
            year: Number
		},

		data() {
			return {

			};
		},

		computed: {
			winners: function() {
				const award = this.$store.getters.getAwardByYear(this.year);

				return (award && award.winners) ? award.winners : []
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






