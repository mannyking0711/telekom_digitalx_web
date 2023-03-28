 <!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div>

			<h1>Design Components - Form</h1>

			<!-- TEXT -->
			<section class="section-test">
				<h2>Input Text</h2>
				<input-text label="label for default state" v-model="form.text1"></input-text>
				<input-text label="label for default state with placeholder" placeholder="Please fill out ..." v-model="form.text1"></input-text>
				<input-text label="label for prefilled input" v-model="form.text2"></input-text>
				<input-text label="label with error" v-model="form.text3" :error="true"></input-text>
				<input-text class="dark-input" label="label for default state" v-model="form.text1"></input-text>
				<input-text class="dark-input" label="label for default state with placeholder" placeholder="Please fill out ..." v-model="form.text1"></input-text>
				<input-text class="dark-input" label="label for prefilled input" v-model="form.text2"></input-text>
				<input-text class="dark-input" label="label with error" v-model="form.text3" :error="true"></input-text>
			</section>

			<!-- TEXTAREA -->
			<section class="section-test">
				<h2>Textarea</h2>
				<input-textarea label="label for default state" v-model="form.textarea1"></input-textarea>
				<input-textarea label="label for prefilled input" v-model="form.textarea2"></input-textarea>
				<input-textarea label="label with error" v-model="form.textarea3" :error="true"></input-textarea>
			</section>

			<!-- SELECTBOX -->
			<section class="section-test">
				<h2>Selectbox</h2>
				<input-select label="label for default state" v-model="form.select1" :items="itemsSelect"></input-select>
				<input-select label="label for prefilled input" v-model="form.select2" :items="itemsSelect"></input-select>
				<input-select label="label with error" v-model="form.select3" :items="itemsSelect" :error="true"></input-select>
			</section>

			<!-- RADIO -->
			<section class="section-test">
				<h2>Radio</h2>
				<input-radio label="label for default state" id="radio-test-1" v-model="form.radio1" :items="itemsSelect"></input-radio>
				<input-radio label="label for prefilled input" id="radio-test-2" v-model="form.radio2" :items="itemsSelect"></input-radio>
				<input-radio label="label with error" id="radio-test-3" :items="itemsSelect" :error="true"></input-radio>
			</section>

			<!-- CHECKBOX -->
			<section class="section-test">
				<h2>Checkbox</h2>
				<input-checkbox label="label for default state" id="checkbox-test-1" v-model="form.checkbox1" :items="itemsSelect"></input-checkbox>
				<input-checkbox label="label for prefilled input" id="checkbox-test-2" v-model="form.checkbox2" :items="itemsSelect"></input-checkbox>
				<input-checkbox label="label with error" id="checkbox-test-3" v-model="form.checkbox3"  :items="itemsSelect" :error="true"></input-checkbox>
				<input-checkbox label="label for single select" id="checkbox-test-4" v-model="form.checkbox4" :items="[{'checkLabel':'value'}]"></input-checkbox>

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

			name: 'PageTestForm',

			metaInfo: {
				title: 'tilte',
				titleTemplate: 	'%s | Test Form'
			},

			props: {

			},

			data() {
				return {
					itemsSelect: [ {'label1':'value1'},{'label2':'value2'},{'label3':'value3'}, ],
					form: {
						text1: '',
						text2: 'a prefilled text',
						textarea1: '',
						textarea2: 'a prefilled textarea',
						textarea3: "wrong textarea input",
						select1: "",
						select2: 'value1',
						radio2: "value2",
						checkbox1: "",
						checkbox2: "value2",
						checkbox3: "",
					},
					radioValue: false,
					radioValuePrefilled: 'value2',
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



