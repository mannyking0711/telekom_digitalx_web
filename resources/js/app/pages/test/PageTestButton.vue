<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>
			<section>
				<div class="col-100">
					<h1>Design Components - Buttons</h1>
				</div>
			</section>

			<!-- BUTTON NORMAL -->
			<section>
				<div class="col-100">
					<h2>Normal</h2>

					<h3>Default</h3>
					<div class="test-content">
						<a href="#0" class="btn">a.btn</a>
						<button class="btn">button.btn</button>
						<input type="submit" class="btn" value="input[type='submit'].btn"/>
						<a href="#0" class="btn blue">a.btn.blue</a>
						<a href="#0" class="btn blue icon-left">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>a.btn.blue.icon-left</span>
						</a>
					</div>

					<h3>Active</h3>
					<div class="test-content">
						<a href="#0" class="btn active">a.btn</a>
						<button class="btn active">button.btn</button>
						<input type="submit" class="btn active" value="input[type='submit'].btn"/>
						<a href="#0" class="btn blue active">a.btn.blue</a>
						<a href="#0" class="btn blue active icon-left">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>a.btn.blue.icon-left</span>
						</a>
					</div>

					<h3>Disabled</h3>
					<div class="test-content">
						<a href="#0" class="btn disabled">a.btn</a>
						<button class="btn disabled">button.btn</button>
						<input type="submit" class="btn disabled" value="input[type='submit'].btn"/>
						<a href="#0" class="btn blue disabled">a.btn.blue</a>
						<a href="#0" class="btn blue disabled icon-left">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>a.btn.blue.icon-left</span>
						</a>
					</div>
				</div>
			</section>

			<!-- BUTTON SECONDARY -->
			<section>
				<div class="col-100">
					<h2>Secondary</h2>

					<h3>Default</h3>
					<div class="test-content">
						<a href="#0" class="btn secondary">a.btn.secondary</a>
						<button class="btn secondary">button.btn.secondary</button>
						<input type="submit" class="btn secondary" value="input[type='submit'].btn.secondary"/>
						<a href="#0" class="btn secondary blue">a.btn.secondary.blue</a>
						<a href="#0" class="btn secondary blue icon-left">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>a.btn.blue.icon-left</span>
						</a>
					</div>

					<h3>Active</h3>
					<div class="test-content">
						<a href="#0" class="btn secondary active">a.btn.secondary</a>
						<button class="btn secondary active">button.btn.secondary</button>
						<input type="submit" class="btn secondary active" value="input[type='submit'].btn.secondary"/>
						<a href="#0" class="btn secondary blue active">a.btn.secondary.blue</a>
						<a href="#0" class="btn secondary blue active icon-left">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>a.btn.blue.icon-left</span>
						</a>
					</div>

					<h3>Disabled</h3>
					<div class="test-content">
						<a href="#0" class="btn secondary disabled">a.btn.secondary</a>
						<button class="btn secondary disabled">button.btn.secondary</button>
						<input type="submit" class="btn secondary disabled" value="input[type='submit'].btn.secondary"/>
						<a href="#0" class="btn secondary blue disabled">a.btn.secondary.blue</a>
						<a href="#0" class="btn secondary blue disabled icon-left">
							<svg-icon icon="app/icon-arrow"></svg-icon>
							<span>a.btn.blue.icon-left</span>
						</a>
					</div>
				</div>
			</section>


			<!-- BUTTON SMALL -->
			<section>
				<div class="col-100">
					<h2>Small</h2>

					<h3>Default</h3>
					<div class="test-content">
						<a href="#0" class="btn small">a.btn.small</a>
						<button class="btn small">button.btn.small</button>
						<input type="submit" class="btn small" value="input[type='submit'].btn.small"/>
						<a href="#0" class="btn blue small">a.btn.blue.small</a>
					</div>

					<h3>Active</h3>
					<div class="test-content">
						<a href="#0" class="btn small active">a.btn.small</a>
						<button class="btn small active">button.btn.small</button>
						<input type="submit" class="btn small active" value="input[type='submit'].btn.small"/>
						<a href="#0" class="btn blue small active">a.btn.blue.small</a>
					</div>

					<h3>Disabled</h3>
					<div class="test-content">
						<a href="#0" class="btn small disabled">a.btn.small</a>
						<button class="btn small disabled">button.btn.small</button>
						<input type="submit" class="btn small disabled" value="input[type='submit'].btn.small"/>
						<a href="#0" class="btn blue small disabled">a.btn.blue.small</a>
					</div>
				</div>
			</section>


			<!-- BUTTON SMALL SECONDARY -->
			<section>
				<div class="col-100">
					<h2>Small Secondary</h2>

					<h3>Default</h3>
					<div class="test-content">
						<a href="#0" class="btn small secondary">a.btn.small.secondary</a>
						<button class="btn small secondary">button.btn.small.secondary</button>
						<input type="submit" class="btn small secondary" value="input[type='submit'].btn.small.secondary"/>
						<a href="#0" class="btn small secondary blue">a.btn.small.secondary.blue</a>
					</div>

					<h3>Active</h3>
					<div class="test-content">
						<a href="#0" class="btn small secondary active">a.btn.small.secondary</a>
						<button class="btn small secondary active">button.btn.small.secondary</button>
						<input type="submit" class="btn small secondary active" value="input[type='submit'].btn.small.secondary"/>
						<a href="#0" class="btn small secondary blue active">a.btn.small.secondary.blue</a>
					</div>

					<h3>Disabled</h3>
					<div class="test-content">
						<a href="#0" class="btn small secondary disabled">a.btn.small.secondary</a>
						<button class="btn small secondary disabled">button.btn.small.secondary</button>
						<input type="submit" class="btn small secondary disabled" value="input[type='submit'].btn.small.secondary"/>
						<a href="#0" class="btn small secondary blue disabled">a.btn.small.secondary.blue</a>
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

			name: 'PageTestButton',

			metaInfo: {
        title: 'title',
				titleTemplate: 	'%s | Test Button'
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



