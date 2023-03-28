<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div :class="['form-row', id ? 'row-'+id : '']">
			<label :class="{error:error}">{{ $t(label) }}</label>
			<div v-for="(item,index) in items" :class="['input-checkbox',{'error':error}]">
				<input
					:id="id+'-'+index"
					:name="id+'[]'"
					type="checkbox"
					:value="getItemValue(item)"
					v-model="value"
					@change="updateInput"
				>
				<label :for="id+'-'+index">{{ $t(getItemLabel(item)) }}</label>
				<svg-icon path="app/icon-checkbox"></svg-icon>
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

			name: 'InputCheckbox',

			model: {
				prop: 'propValue',
				event: 'change'
			},

			props: {
				label: 		{ type: String },
				id: 		{ type: String, required: true },
				propValue:  { default: undefined },
				items: 		{ type: Array, default() { return []; } },
				error: 		undefined
			},

			data() {
				return {
					value: ""
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
				this.setInitialState();
			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				getItemValue(item) {

					return Object.values(item)[0];
				},

				getItemLabel(item) {

					return Object.keys(item)[0];
				},

				setInitialState() {

					// set initial internal value
					if(this.propValue) {

						// if more than one item, convert value to array
						if(this.items.length > 0) {
							this.value = Array.isArray( this.propValue ) ? this.propValue : [this.propValue] ;
						}
						else {
							this.value = Array.isArray( this.propValue ) ? this.propValue[0] : this.propValue;
						}

					}
					else {
						this.value = this.items.length > 0 ? [] : undefined;
					}

					this.updateInput();
				},

				updateInput(e) {

					// if only one item, remove item
					var newValue = this.items.length == 1 ? this.value[0] : this.value;

					// update parent model binding
					this.$emit('change',newValue);
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


