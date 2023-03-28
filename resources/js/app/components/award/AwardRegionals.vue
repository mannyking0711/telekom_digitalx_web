<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<section class="awardRegionals">
		<div class="col-100" v-if="regionalNominees">
			<h2 class="pageaward__headline awardRegionals__headline">{{ headline }} <span>{{ year }}</span></h2>
			<div class="awardRegionals__desc" v-html="text"/>
			<slider v-if="regionalNominees.length" :items="regionalNominees" class="slider--large">
				<template slot-scope="region">
					<div class="awardRegionals__region">
						<div class="awardRegionals__logos">
							<div v-for="(winner, idx) in region.winners" :key="idx" class="awardRegionals__logo">
								<img :src="winner.logo" alt=""/>
							</div>
						</div>
						<div class="awardRegionals__region-info">
							<h3 class="awardRegionals__region-title">
								{{ $store.getters.getAwardRegionById(region.id).name }}</h3>
							<ul class="awardRegionals__winners">
								<li v-for="(winner, idx) in region.winners" :key="idx" class="awardRegionals__winner">
									<div class="awardRegionals__winner-title">
										<span>{{ winner.name }}</span>
										<span v-if="winner.location">, {{ winner.location }}</span>
									</div>
									<div class="awardRegionals__winner-category">{{
											$t('pageaward.winnerCategory', {category: $store.getters.getAwardCategoryById(winner.category).name})
										}}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</template>
			</slider>
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

	name: 'awardRegionals',

	props: {
		headline: String,
		year: Number,
		text: String
	},

	data() {
		return {
			regionalNominees: undefined
		};
	},

	computed: {
		award() {
			return this.$store.getters.getAwardByYear(this.year);
		},
	},


	/////////////////////////////////
	// EVENTS
	/////////////////////////////////

	mounted() {
		this.regionalNominees = this.setRegionalNominees();
		window.lazyload.update();
	},

	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {
		setRegionalNominees() {
			let regions = {};
			let nominees = this.award && this.award.nominees ? this.award.nominees : [];

			nominees.forEach(nominee => {
				if (!nominee.entry) return;

				if (!regions[nominee.entry.region]) {
					regions[nominee.entry.region] = {
						id: nominee.entry.region,
						winners: []
					};
				}

				regions[nominee.entry.region].winners.push(nominee.entry);
			});
			return Object.values(regions);
		}
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






