<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <div @click="onArrowClicked">
        <svg-icon class="scrollArrow" icon="app/icon-arrow" />
    </div>
</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<script>

    import gsap from "gsap";
    import ScrollToPlugin from "gsap/ScrollToPlugin";
    gsap.registerPlugin(ScrollToPlugin);

	export default {

		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: 'ScrollArrow',

		props: {

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

		created() {

		},

		mounted() {

		},


		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		methods: {
            onArrowClicked() {
                var height = window.innerHeight - 60; // 60 = header height after scroll
                gsap.to(window, {duration: 1, scrollTo: height});
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


