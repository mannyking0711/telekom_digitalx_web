<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <slider :items="quotes" :itemsPerPage="1" class="quotesSlider slider--large">
        <template slot-scope="item">
			<quote-section-headlines v-if="withHeadlines" :image="item.image" :quote="item.quote" :tagline="item.tagline" :headline="item.headline" :footline="item.footline" />
			<quote-section v-else :image="item.image" :quote="item.quote" :name="item.name" :description="item.description" />
		</template>
    </slider>
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

		name: 'QuotesSlider',

		props: {
            quotes: Array,
			withHeadlines: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
			};
		},

		computed: {

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


