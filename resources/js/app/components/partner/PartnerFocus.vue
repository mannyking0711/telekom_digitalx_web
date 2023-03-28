

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>
  <section class="eventfocus" id="eventfocus">
    <div class="col-100">
      <h2>{{ $t('pageevent.focusHeadline') }}</h2>

	  <!-- partner in focus loop -->
      <div class="eventfocus__sections">
        <div class="row">
          <router-link
            v-for="partner in partners" :key="partner.id"
            class="col-md-6 col-xl-4 gx-5"
            :to="link('partner.detail',{slug: localeSlug(partner)})"
          >
            <img class="eventfocus__image" :src="partner.logo"/>
            <p class="eventfocus__text">
              {{ partner.name }}
            </p>
          </router-link>

          <!-- become partner -->
          <div class="col-xl-4 gx-5">
            <div class="eventfocus__become-parter">
              <h4 class="">
                {{ $t('partnerfocus.actionheadline') }}
              </h4>
              <p class="">
                <b>{{ $t('partnerfocus.actionteaser') }}</b>
                {{ $t('partnerfocus.actiontext') }}
              </p>

              <a v-if="partnerlink" class="btn blue icon-left" :href="partnerlink">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('pageevent.focusButton') }}</span>
              </a>
              <a v-else class="btn blue icon-left" :href="becomePartnerLink">
                <svg-icon icon="app/icon-arrow"></svg-icon>
                <span>{{ $t('pageevent.focusButton') }}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
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

		name: 'PartnerFocus',

		props: {
      		partners: Array,
          partnerlink: String
		},

		data() {
			return {

			};
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

		},

		computed: {
			becomePartnerLink(){
				return '/' + this.$i18n.locale + '/partner';
			}
		},

	}; // end export

</script>


<i18n>
{
  "de": {
    "partnerfocus.actionheadline": "Im Schulterschluss für Ihre Digitalisierung",
    "partnerfocus.actionteaser": "Finden Sie passgenaue Lösungen für Ihre Business-Cases im Portfolio unserer DIGITAL X-Partner.",
    "partnerfocus.actiontext": "Technologieexperten beraten Sie gerne zu Ihren spezifischen Herausforderungen bei der digitalen Transformation."
  },
  "en": {
    "partnerfocus.actionheadline": "Working together for your digitalization",
    "partnerfocus.actionteaser": "Find tailored solutions for your business case in our DIGITAL X partner portfolio.",
    "partnerfocus.actiontext": "Technology experts will be happy to help you with your specific challenges in the digital transformation."
  }
}
</i18n>


<style lang="scss">

</style>


<style lang="scss" scoped>

</style>
