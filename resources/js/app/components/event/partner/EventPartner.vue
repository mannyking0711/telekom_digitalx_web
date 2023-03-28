<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="event-partner">
    <section class="inner no-spacing">
      <div class="col-100">
        <!-- Filter Megatrends -->
        <div v-if="megatrends" class="event-partner__filter">
          <div class="event-partner__filter-label">
            {{ labelFilterMegatrends }}
          </div>
          <div class="event-partner__filter-buttons">
            <div
              v-for="(megatrend, key) in megatrends"
              :key="megatrend.id"
              class="event-partner__megatrend-button"
              :class="{'event-partner__megatrend-button--active': isActiveMegatrend(megatrend.id)}"
              @click="toggleMegatrend(megatrend.id)"
            >
              <img v-if="megatrend.icon" :src="megatrend.icon" alt="megatrend.name" class="lazy">
              {{ megatrend.name }}
            </div>
          </div>
          <div class="event-partner__filter-clear">
            <div @click="clearMegatrends()" class="event-partner__filter-clear__button">
              <span>{{ $t('event-partner.clear') }}</span>
              <div class="event-partner__filter-clear__button__icon">
                <svg-icon class="svg-icon" icon="app/icon-close"></svg-icon>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Partner -->
        <div class="event-partner__filter">
          <div class="event-partner__filter-label">
            {{ labelFilterQuarter }}
          </div>
          <div class="event-partner__filter-buttons">
            <div
              v-for="(quarter, key) in quarters"
              :key="quarter.id"
              class="event-partner__quarter-button"
              :class="['event-partner__quarter-button--' + quarter.color, isActiveQuarter(quarter.id) ? 'event-partner__quarter-button--' + quarter.color + '--active' : '']"
              @click="toggleQuarter(quarter.id)"
            >
              {{ quarter.name }}
            </div>
          </div>
          <div class="event-partner__filter-clear" style="margin-top: -5px">
            <div @click="clearQuarters()" class="event-partner__filter-clear__button">
              <span>{{ $t('event-partner.clear') }}</span>
              <div class="event-partner__filter-clear__button__icon">
                <svg-icon class="svg-icon" icon="app/icon-close"></svg-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="event-partner-map inner no-spacing">
      <div class="col-100">
        <client-only>
          <dx-map :locations="filteredPartnersMap" ref="locationsMap" />
        </client-only>
      </div>
    </section>

    <!-- Partner / Brandhouses -->
    <section class="inner no-spacing">
      <div class="col-100">
        <div class="event-partner__tab">
          <div class="event-partner__label">
            {{ labelTab }}
          </div>
          <div class="event-partner__select">
            <div class="event-partner__select__button" :class="{'event-partner__select__button--active': selectedTab === 'partner'}" @click="tab('partner')">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm0 18.75a8.694 8.694 0 0 1-4.969-1.556A3.743 3.743 0 0 1 8.75 13.75h2.5a3.743 3.743 0 0 1 3.719 3.444A8.709 8.709 0 0 1 10 18.75Zm6.082-2.473A5 5 0 0 0 11.25 12.5h-2.5a5 5 0 0 0-4.832 3.778 8.75 8.75 0 1 1 12.164 0ZM10 5a3.125 3.125 0 1 0 3.125 3.125A3.124 3.124 0 0 0 10 5Zm0 5a1.875 1.875 0 1 1 1.875-1.875A1.875 1.875 0 0 1 10 10Z"/></svg>
              </div>
              <div>
                Partner
              </div>
            </div>
            <div class="event-partner__select__button" :class="{'event-partner__select__button--active': selectedTab === 'brandhouse'}" @click="tab('brandhouse')">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.494" height="20"><path d="M10.836.156a.627.627 0 0 1 .828 0l10.625 9.375a.6.6 0 0 1 .02.883.557.557 0 0 1-.848.02L20 9.145v7.73A3.124 3.124 0 0 1 16.875 20H5.625A3.125 3.125 0 0 1 2.5 16.875v-7.73l-1.462 1.289a.6.6 0 0 1-.882-.02.623.623 0 0 1 .055-.883ZM3.75 8.074v8.8a1.875 1.875 0 0 0 1.875 1.876h11.25a1.875 1.875 0 0 0 1.875-1.875v-8.8l-7.5-6.616Z"/></svg>
              </div>
              <div>
                Brandhouses
              </div>
            </div>
          </div>
          <div class="event-partner__spacer">
            &nbsp;
          </div>
        </div>

        <event-partner-list :headline="$t('pageevent.focusHeadline')" :partners="filteredPartnersFocus" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline1')" :partners="filteredPartnersCoop" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline2')" :partners="filteredPartnersPremium" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline3')" :partners="filteredPartnersRegular" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline4')" :partners="filteredPartnersSupport" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline5')" :partners="filteredPartnersMobility" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline6')" :partners="filteredPartnersDigitalization" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline7')" :partners="filteredPartnersMedia" :type="selectedTab" />

        <event-partner-list :headline="$t('pageevent.listHeadline8')" :partners="filteredPartnersStartup" :type="selectedTab" list-style="small" />

        <event-partner-list :headline="$t('pageevent.listHeadline9')" :partners="filteredPartnersPartner" :type="selectedTab" list-style="small" />
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
import EventPartnerList from "./EventPartnerList";
import DxMap from "./DxMap";

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: "EventPartner",
  components: {DxMap, EventPartnerList},
  props: {
    labelFilterMegatrends: {type: String, required: false, default: null},
    labelFilterQuarter: {type: String, required: false, default: null},
    labelTab: {type: String, required: false, default: null},

    megatrends: {type: Array, required: false, default: null},
    quarters: {type: Array, required: false, default: null},
    partnersFocus: {type: Array, required: false, default: null},
    partnersMedia: {type: Array, required: false, default: null},
    partnersDigitalization: {type: Array, required: false, default: null},
    partnersMobility: {type: Array, required: false, default: null},
    partnersSupport: {type: Array, required: false, default: null},
    partnersRegular: {type: Array, required: false, default: null},
    partnersPremium: {type: Array, required: false, default: null},
    partnersCoop: {type: Array, required: false, default: null},
    partnersStartup: {type: Array, required: false, default: null},
    partnersPartner: {type: Array, required: false, default: null},
    mapLocations: {type: Array, required: false, default: null},
  },

  computed: {
    selectedTab: {
      get() {
        return this.$store.getters.getTabPartner
      },
      set(tab) {
        this.$store.commit('setTabPartner', tab);
      }
    },

    filterMegatrends: {
      get() {
        return this.$store.getters.getFilterMegatrends
      },
      set(megatrends) {
        this.$store.commit('setFilterMegatrends', megatrends);
      }
    },

    filterQuarters: {
      get() {
        return this.$store.getters.getFilterQuarters
      },
      set(quarters) {
        this.$store.commit('setFilterQuarters', quarters);
      }
    },

    filteredPartnersFocus() {
      return this.filterPartners(this.partnersFocus);
    },

    filteredPartnersMedia() {
      return this.filterPartners(this.partnersMedia);
    },

    filteredPartnersDigitalization() {
      return this.filterPartners(this.partnersDigitalization);
    },

    filteredPartnersMobility() {
      return this.filterPartners(this.partnersMobility);
    },

    filteredPartnersSupport() {
      return this.filterPartners(this.partnersSupport);
    },

    filteredPartnersRegular() {
      return this.filterPartners(this.partnersRegular);
    },

    filteredPartnersPremium() {
      return this.filterPartners(this.partnersPremium);
    },

    filteredPartnersCoop() {
      return this.filterPartners(this.partnersCoop);
    },

    filteredPartnersStartup() {
      return this.filterPartners(this.partnersStartup);
    },

    filteredPartnersPartner() {
      return this.filterPartners(this.partnersPartner);
    },

    filteredMapLocations() {
      return this.filterPartners(this.mapLocations);
    },

    filteredPartnersMap() {
      return [
        ...this.filteredPartnersFocus,
        ...this.filteredPartnersCoop,
        ...this.filteredPartnersPremium,
        ...this.filteredPartnersRegular,
        ...this.filteredPartnersSupport,
        ...this.filteredPartnersMobility,
        ...this.filteredPartnersDigitalization,
        ...this.filteredPartnersMedia,
        ...this.filteredPartnersStartup,
        ...this.filteredPartnersPartner,
        ...this.filteredMapLocations,
      ];
    },
  },

  methods: {
    tab(name) {
      this.selectedTab = name;
    },

    filterPartners(partners) {
      const result = [];
      partners.forEach(partner => {
        if (this.partnerHasMegatrend(partner) && this.partnerHasQuarter(partner)) {
          if ((this.selectedTab === 'partner') || (partner.use_detail)) {
            result.push(partner);
          }
        }
      })
      return result;
    },

    toggleMegatrend(id) {
      let index = this.filterMegatrends.indexOf(id);
      index === -1 ? this.filterMegatrends.push(id) : this.filterMegatrends.splice(index, 1);
    },

    clearMegatrends() {
      this.filterMegatrends = [];
    },

    isActiveMegatrend(id) {
      return this.filterMegatrends.indexOf(id) !== -1;
    },

    partnerHasMegatrend(partner) {
      if (!this.filterMegatrends.length) {
        return true;
      }

      let result = false;
      if (partner.megatrends) {
        for (const megatrend of partner.megatrends) {
          if (this.isActiveMegatrend(megatrend.id)) {
            result = true;
            break;
          }
        }
      }
      return result;
    },

    toggleQuarter(id) {
      let index = this.filterQuarters.indexOf(id);
      index === -1 ? this.filterQuarters.push(id) : this.filterQuarters.splice(index, 1);
    },

    clearQuarters() {
      this.filterQuarters = [];
    },

    isActiveQuarter(id) {
      return this.filterQuarters.indexOf(id) !== -1;
    },

    partnerHasQuarter(partner) {
      if (!this.filterQuarters.length) {
        return true;
      }

      return partner.quarter ? this.isActiveQuarter(partner.quarter.id) : false;
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
    "event-partner.clear": "Filter löschen"
  },
  "en": {
    "event-partner.clear": "Clear filter"
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
