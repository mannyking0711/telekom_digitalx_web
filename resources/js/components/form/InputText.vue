<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>


		<div :class="['form-row', id ? 'row-'+id : '']">
			<label v-if="label" :class="{error:error}">{{ $t(label) }}</label>
			<input
				:id="id"
				:name="id"
				:type="type"
				v-model="value"
				:class="{error:showError}"
				@input="updateInput"
				@focus="removeError"
				@keyup.enter="$emit('enter')"
				:placeholder="placeholder"
				:readonly="readonly"
				:autocomplete="autocomplete"
				ref="input"
			>
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

			name: 'InputText',

			model: {
				prop: 'propValue',
				event: 'change'
			},

			props: {
				label: 			{ type: String },
				type: 			{ type: String, default: 'text' },
				id: 			{ type: String },
				readonly: 		{ type: Boolean },
				propValue:  	{ type: String },
				placeholder: 	{ type: String },
				autocomplete:	{ type: String, default: 'on' },
				error: 			undefined
			},

			data() {
				return {
					value: "",
					showError: false,
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

				this.value = this.propValue;
				this.showError = this.error;
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				updateInput(e) {

					// update parent model binding
					this.$emit('change',e.target.value);
				},

				removeError(e) {
					this.showError = false;
				},

				focus() {
					this.$refs.input.focus();
				}
			},

			watch: {
				error(newValue) {
					this.showError = newValue;
				},
				propValue(newValue) {
					this.value = newValue;
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


