<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

<div class="awardProcess">
	<section>
        <div class="col-100">
			<h2 class="pageaward__headline awardProcess__headline">{{ headline }}</h2>
			<div class="awardProcess__steps">
				<div class="awardProcess__step">
					<div class="awardProcess__step-number">1.</div>
					<h3 class="awardProcess__step-title">{{ step1headline }}</h3>
					<p class="awardProcess__step-desc">{{ step1text }}</p>
				</div>
				<svg-icon class="awardProcess__arrow" icon="app/icon-arrow"></svg-icon>
				<div class="awardProcess__step">
					<div class="awardProcess__step-number">2.</div>
					<h3 class="awardProcess__step-title">{{ step2headline }}</h3>
					<p class="awardProcess__step-desc">{{ step2text }}</p>
				</div>
				<svg-icon class="awardProcess__arrow" icon="app/icon-arrow"></svg-icon>
				<div class="awardProcess__step">
					<div class="awardProcess__step-number">3.</div>
					<h3 class="awardProcess__step-title">{{ step3headline }}</h3>
					<p class="awardProcess__step-desc">{{ step3text }}</p>
				</div>
				<svg-icon class="awardProcess__arrow" icon="app/icon-arrow"></svg-icon>
				<div class="awardProcess__step">
					<div class="awardProcess__step-number">4.</div>
					<h3 class="awardProcess__step-title">{{ step4headline }}</h3>
					<p class="awardProcess__step-desc">{{ step4text }}</p>
				</div>
			</div>

			<div class="awardProcess__register">
				<a class="awardProcess__register-btn btn icon-left" :href="buttonNationalRegistration_url" target="_blank">
					<svg-icon icon="app/icon-arrow"></svg-icon>
					<span>{{ buttonNationalRegistration }}</span>
				</a>
				<a class="awardProcess__register-btn btn icon-left" :href="buttonRegionalRegistration_url" target="_blank">
					<svg-icon icon="app/icon-arrow"></svg-icon>
					<span>{{ buttonRegionalRegistration }}</span>
				</a>
			</div>

        </div>
	</section>
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

		name: 'awardProcess',

		props: {
			headline: String,
			step1headline: String,
			step1text: String,
			step2headline: String,
			step2text: String,
			step3headline: String,
			step3text: String,
			step4headline: String,
			step4text: String,
			buttonNationalRegistration : String,
			buttonNationalRegistration_url: String,
			buttonRegionalRegistration: String,
			buttonRegionalRegistration_url: String,
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






