<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<template>

		<div class="datalist">


			<!-- ITEM -->
			<div class="datalist-item" v-if="items.length>0" v-for="item in items">

				<!-- CONTENT WITH LINK-->
				<router-link class="datalist-content" :to="link(optionsMerged.contentRoute)" v-if="optionsMerged.contentRoute">
					<slot>
						<p class="datalist-content-label">{{ getCleanLabel(item) }}</p>
					</slot>
				</router-link>

				<!-- CONTENT WITHOUT LINK -->
				<div class="datalist-content" v-else>
					<slot v-bind:item="item">
						<p class="datalist-content-label">{{ getCleanLabel(item) }}</p>
					</slot>
				</div>


				<!-- CONTROL -->
				<div class="datalist-control">

					<!-- DELETE ITEM -->
					<div class="datalist-control-icon" v-if="optionsMerged.deleteRoute">
						<svg-icon sprite="backend/icon-trash"></svg-icon>
					</div>
				</div>

			</div>


			<!-- EMPTY ITEM -->
			<div class="datalist-item empty" v-if="items.length==0">

				<!-- CONTENT -->
				<div class="datalist-content">
					<p class="datalist-content-label">{{ $t('Noch keine Einträge vorhanden.') }}</p>
				</div>

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

			name: 'DataList',

			props: {
				items: 		{ type: Array, default() { return []; } }, 					// data of list
				options: 	{ type: Object, default() { return {}; } }
			},

			data() {
				return {
					optionsMerged: {},						// default options merged with user input

					optionsDefault: {
						labelProperty: 		'name', 		// with property of item should by used for the label. Example: "item.name", "item.title"
						contentRoute: 		undefined,		// Route name for content of list item. Example: "item.show", "item.edit"
						contentProperty: 	'id',			// Property of item used as param for content route
						editRoute: 			undefined,		// set route to enable deletion
						editProperty: 		'id',			// Property of item used as param for deleta route
						deleteRoute: 		undefined,		// set route to enable deletion
						deleteProperty: 	'id',			// Property of item used as param for deleta route
						sortRoute: 			undefined,		// set route to enable deletion
						sortProperty: 		'id',			// Property of item used as param for deleta route
					}
				};
			},

			computed: {

			},


			/////////////////////////////////
			// EVENTS
			/////////////////////////////////

			created() {

				// merge default options with user input
				Object.assign(this.optionsMerged,this.optionsDefault,this.options);
			},

			mounted() {


			},


			/////////////////////////////////
			// METHODS
			/////////////////////////////////

			methods: {

				getCleanLabel(item) {

					// remove <br> from text
					var label = item[this.optionsMerged.labelProperty]
					return label ? label.replace(/<br ?\/?>/g, " ") : '__item_label_not_found__';
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


