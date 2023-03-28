<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>

    <div class="index-magazine-newsticker" :class="{loading: isLoading}" v-if="items.length > 0">

<!--        <div class="title">-->
<!--            {{ $t('newsticker.text') }}-->
<!--        </div>-->

<!--        <div class="content" v-on:mouseenter="mouseEnter" v-on:mouseleave="mouseLeave">-->

<!--            <div class="left" @click="previous">&lt;</div>-->

<!--            <div class="middle">-->
<!--                <div class="items" :style="styleItems">-->
<!--                    <index-magazine-newsticker-item-->
<!--                        v-for="(item) in itemsVisible"-->
<!--                        :key="item.id"-->
<!--                        :item="item"-->
<!--                        :style="styleItem"-->
<!--                    />-->
<!--                </div>-->
<!--            </div>-->

<!--            <div class="right" @click="next">&gt;</div>-->

<!--        </div>-->

    </div>

</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
	import {IS_SSR} from "../../plugins/ssrSwitch";

  export default {
		/////////////////////////////////
		// INIT
		/////////////////////////////////

		name: "IndexMagazineList",

		props: {
			items: {
				type: Array,
				default() {
					return [];
				},
			},
		},

		data() {
			return {
                isLoading: true,
                itemsVisible: [],
                itemsOffset: 0,
                sliderPosition: 0,
                timer: 0,
                duration: 3500,
                autoplay: true,
			};
		},

		computed: {
            styleItems () {
                return {
                    transform: 'translate3d(' + ((100 / this.itemsVisible.length) * this.sliderPosition * -1) + '%, 0px, 0px)',
                    width: 'calc(' + (this.itemsVisible.length * 100) + '%)',
                }
            },

            styleItem () {
                return {
                    width: 'calc(' + (100 / this.itemsVisible.length) + '%)',
                }
            },
        },

		/////////////////////////////////
		// EVENTS
		/////////////////////////////////

		created() {
      if (IS_SSR === true) {
        return;
      }

            this.play();
        },

		mounted() {
            this.initItems();
		},

		/////////////////////////////////
		// METHODS
		/////////////////////////////////

		methods: {
			initItems() {
                if (this.items.length > 0) {
                    this.itemsOffset = this.items.findIndex(item => item.type === 'article') + 3;
                    this.itemsVisible = this.items.slice(this.itemsOffset, this.itemsOffset + 10);
                    this.isLoading = false;
                }
			},

            previous() {
			    if (this.sliderPosition > 0) {
                    this.sliderPosition--;
                } else {
                    this.sliderPosition = this.itemsVisible.length - 1;
                }
            },

            next() {
                if (this.sliderPosition < (this.itemsVisible.length - 1)) {
                    this.sliderPosition++;
                } else {
                    this.sliderPosition = 0;
                }
            },

            play: function() {
                if (this.autoplay) {
                    this.timer = setInterval(() => this.next(), this.duration);
                }
            },

            mouseEnter: function () {
                clearInterval(this.timer);
            },

            mouseLeave: function () {
                this.play();
            }
		},

		/////////////////////////////////
		// WATCH
		/////////////////////////////////

		watch: {
			items(newValue, oldValue) {
				this.initItems();
			},
		},
	}; // end export
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    LANG
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<i18n>
		{
			"de": {
                "newsticker.text": "Aktuelles"
			},
			"en": {
                "newsticker.text": "News"
			}
		}
	</i18n>


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
