<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
	<magazine-list :showFirst="3" :items="itemData" />
</template>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

import fetchItemMixin from "../../mixins/fetchItem";

export default {

	/////////////////////////////////
	// INIT
	/////////////////////////////////

	name: 'MagazineRecommendations',

	mixins: [fetchItemMixin],

	props: {
		item: {
			type: Object,
			required: true,
		}
	},

	data() {
		return {
			ENDPOINT: 'recommendations?' + [this.item.id, this.item.tags]
		};
	},

	/////////////////////////////////
	// EVENTS
	/////////////////////////////////


	/////////////////////////////////
	// METHODS
	/////////////////////////////////

	methods: {}

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


