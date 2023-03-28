<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
    <div class="mediaGallery">
        <div v-if="video" class="mediaGallery__row mediaGallery__row--video">
            <svg-icon class="mediaGallery__play" icon="app/icon-play" />
            <img src="https://placeimg.com/1200/670/people" alt="" />
        </div>
        <div class="mediaGallery__row">
            <img class="mediaGallery__col-8" src="https://placeimg.com/790/440/people" alt="" />
            <div class="mediaGallery__col-4">
                <div class="mediaGallery__teaser">
                    <h4 class="mediaGallery__teaser-headline">Lorem ipsum dolor sit</h4>
                    <p class="mediaGallery__teaser-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur perferendis asperiores labore.</p>
                    <router-link v-if="button" to="" class="btn small secondary yellow icon-left mediaGallery__teaser-btn">
                        <svg-icon icon="app/icon-arrow" />
                        <span>Zur Mediathek</span>
                    </router-link>
                </div>
                <img src="https://placeimg.com/370/440/people" alt="" />
            </div>
        </div>
        <div class="mediaGallery__row">
            <img class="mediaGallery__col-4" src="https://placeimg.com/370/440/people" alt="" />
            <img class="mediaGallery__col-8" src="https://placeimg.com/790/440/people" alt="" />
        </div>
        <div class="mediaGallery__row">
            <img class="mediaGallery__col-4" src="https://placeimg.com/370/440/people" alt="" />
            <img class="mediaGallery__col-4" src="https://placeimg.com/370/440/people" alt="" />
            <img class="mediaGallery__col-4" src="https://placeimg.com/370/440/people" alt="" />
        </div>
    </div>
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

		name: 'MediaGallery',

		props: {
            video: Boolean,
            button: Boolean
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


