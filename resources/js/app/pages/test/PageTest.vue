<template>

  <div>

    <section>
      <div class="col-100">
        <h1>Design Components</h1>
        <p>
          <router-link class="textlink" :to="link('test.grid')">Grid</router-link><br>
          <router-link class="textlink" :to="link('test.button')">Button</router-link><br>
          <router-link class="textlink" :to="link('test.typo')">Typo</router-link><br>
          <router-link class="textlink" :to="link('test.form')">Form</router-link><br>
          <router-link class="textlink" :to="link('test.video')">Video</router-link><br>
          <router-link class="textlink" :to="link('test.slider')">Slider</router-link><br>
        </p>
        <h1>Misc</h1>
        <p>
          <router-link class="textlink" :to="link('test.cookies')">Cookies</router-link><br>
          <router-link class="textlink" :to="link('test.user')">User</router-link><br>
          <router-link class="textlink" :to="link('test.protected')">Protected</router-link><br>
        </p>
      </div>

    </section>

  </div>

</template>

	<script>

		export default {

			name: 'PageTest',

			metaInfo: {
				title: 'title',
				titleTemplate: '%s | Visual Tests',
			},

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

			}

		} // end export

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



