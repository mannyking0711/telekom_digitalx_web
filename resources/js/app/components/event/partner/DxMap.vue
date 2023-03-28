<template>

  <div id="map-container">
    <div id="map"></div>
    <div id="map-overlay"><img src="/img/app/map/dx-overlay-ecke.png"/></div>
    <div id="sidebar-legend">
      <!-- img src="./img/streamline-icon-question-help-square@48x48.svg" style="width: 1.5rem; height: 1.5rem;"/ -->
      <p id="sidebar-legend-inspiration">
        <b>Inspiration Quartier</b><br/>
        Das Quartier für mitreißende Erfolgsstorys und Impulse von erfolgreichen Machern der Digitalisierung.
      </p>
      <p id="sidebar-legend-interactive">
        <b>Interactive Quartier</b><br/>
        Im Interactive-Quartier steht Kollaboration im Vordergrund.
      </p>
      <p id="sidebar-legend-future">
        <b>Future Quartier</b><br/>
        Das Future-Quartier bietet vor allem für Start-ups und junge, innovative Unternehmen eine Plattform.
      </p>
      <p id="sidebar-legend-disruption">
        <b>Disruption Quartier</b><br/>
        Die radikale Veränderung von Märkten, Prozessen und Geschäftsmodellen findet sich im Disruption-Quartier.
      </p>
    </div>
    <div id="sidebar" :class="{open: showOverlay}">
      <div id="sidebar-close-container">
        <a id="sidebar-close-button" @click="closeOverlay" ><img id="sidebar-close-icon" src="/img/app/map/streamline-icon-close@48x48.svg"/></a>
      </div>
      <div id="sidebar-location-content">
        <img id="sidebar-location-image" :src="currentLocation.brandhouse_image" v-if="currentLocation.brandhouse_image"/>
        <h3 id="sidebar-location-name" v-if="currentLocation.brandhouse_name">{{ currentLocation.brandhouse_name }}</h3>
        <h3 id="sidebar-location-name" v-if="currentLocation.map_name">{{ currentLocation.map_name }}</h3>
        <p>
          <span id="sidebar-location-category" v-if="currentLocation.location_name"><br/></span>
          <span id="sidebar-location-block" v-if="currentLocation.brandhouse_address">{{ currentLocation.brandhouse_address }}</span>
        </p>
        <p id="sidebar-location-description"></p>

        <!-- DO NOT UPDATE FROM dx-website-widgets - START -->
        <p v-if="currentLocation.brandhouse_link">
          <a class="btn" id="sidebar-location-link" :href="currentLocation.brandhouse_link">Mehr erfahren</a>
        </p>
        <p v-else-if="currentLocation[`slug_${$i18n.locale}`]">
          <router-link class="btn" id="sidebar-location-link" :to="link('partner.detail',{slug: localeSlug(currentLocation)})">Mehr erfahren</router-link>
        </p>

      </div>
    </div>

    <div id="lightbox-background"></div>
    <div id="lightbox-container">
      <div id="lightbox-content">
        <div id="lightbox-close-container">
          <a id="lightbox-close" href="#close"><img src="/img/app/map/streamline-icon-close-black@48x48.svg"/></a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {Loader, LoaderOptions} from 'google-maps';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import {OverlappingMarkerSpiderfier} from 'ts-overlapping-marker-spiderfier';

const options = {
  libraries: ['places','geometry']
};

const ClusterIcon = color => window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".9" r="70" />
    <circle cx="120" cy="120" opacity=".5" r="95" />
    <circle cx="120" cy="120" opacity=".3" r="120" />
  </svg>`);

const svg_pinDisruption = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pinInteractive = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pinFuture = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pinInspiration = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';

const svg_pinDisruptionHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pinInteractiveHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pinFutureHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pinInspirationHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';

const svg_pinDisruptionStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
const svg_pinInteractiveStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
const svg_pinFutureStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
const svg_pinInspirationStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

const svg_pinDisruptionTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
const svg_pinInteractiveTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
const svg_pinFutureTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
const svg_pinInspirationTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

const svg_pinDisruptionAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
const svg_pinInteractiveAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
const svg_pinFutureAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
const svg_pinInspirationAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';

const mapStyles = [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": "14"
        },
        {
          "gamma": "1.00"
        },
        {
          "saturation": "0"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#bde6b9"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": 17
        },
        {
          "color": "#cbe5fd"
        }
      ]
    }
  ]

export default {
  name: 'DxMap',
  data: function() {
    return {
      google: null,
      map: null,
      oms: null,

      map_icon_pinInspiration:null,
      map_icon_pinInteractive:null,
      map_icon_pinFuture:null,
      map_icon_pinDisruption:null,

      map_icon_pinInspirationHighlight:null,
      map_icon_pinInteractiveHighlight:null,
      map_icon_pinFutureHighlight:null,
      map_icon_pinDisruptionHighlight:null,

      map_icon_pinInspirationStage:null,
      map_icon_pinInteractiveStage:null,
      map_icon_pinFutureStage:null,
      map_icon_pinDisruptionStage:null,

      map_icon_pinInspirationTest:null,
      map_icon_pinInteractiveTest:null,
      map_icon_pinFutureTest:null,
      map_icon_pinDisruptionTest:null,

      map_icon_pinInspirationAccreditation:null,
      map_icon_pinInteractiveAccreditation:null,
      map_icon_pinFutureAccreditation:null,
      map_icon_pinDisruptionAccreditation:null,

      markers:{
        'stage':[],
        'inspiration_cluster':[],
        'interactive_cluster':[],
        'disruption_cluster':[],
        'future_cluster':[],
        'inspiration_stage':[],
        'interactive_stage':[],
        'disruption_stage':[],
        'future_stage':[]
      },

      inspiration_cluster:null,
      inspiration_stage:null,
      interactive_cluster:null,
      interactive_stage:null,
      disruption_cluster:null,
      disruption_stage:null,
      future_cluster:null,
      future_stage:null,

      currentLocation: {},
      showOverlay: false,

      updatedLocations: []
    }
  },
  props: {
    locations: Array,
  },
  computed:{
    currentLocations: function(){
      if(this.updatedLocations.length){
        return this.updatedLocations;
      }else{
        return this.locations;
      }
    }
  },
  methods:{
    closeOverlay: function (){
      this.showOverlay = false;
    },

    initMarkerOptions: function (location){
      let icon_location = '';
      let icon_cluster_cat = '';

      if(location.quarter.name == "INSPIRATION QUARTIER"){

        if(location['type'] == 'Highlight'||location['map_type'] == 'X'){
          icon_location = this.map_icon_pinInspirationHighlight;
          icon_cluster_cat = 'inspiration_stage';
        }
        else if(location['type'] == 'Buehne'||location['map_type'] == 'B'){
          icon_location = this.map_icon_pinInspirationStage;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Testzentrum'||location['map_type'] == 'T'){
          icon_location = this.map_icon_pinInspirationTest;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Akkreditierung'||location['map_type'] == 'A'){
          icon_location = this.map_icon_pinInspirationAccreditation;
          icon_cluster_cat = 'stage';
        }
        else{
          icon_location = this.map_icon_pinInspiration;
          icon_cluster_cat = 'inspiration_cluster';
        }

      }else if(location.quarter.name == "INTERACTIVE QUARTIER"){

        if(location['type'] == 'Highlight' || location['map_type'] == 'X'){
          icon_location = this.map_icon_pinInteractiveHighlight;
          icon_cluster_cat = 'interactive_stage';
        }
        else if(location['type'] == 'Buehne' || location['map_type'] == 'B'){
          icon_location = this.map_icon_pinInteractiveStage;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Testzentrum' || location['map_type'] == 'T'){
          icon_location = this.map_icon_pinInteractiveTest;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Akkreditierung' || location['map_type'] == 'A'){
          icon_location = this.map_icon_pinInteractiveAccreditation;
          icon_cluster_cat = 'stage';
        }
        else{
          icon_location = this.map_icon_pinInteractive;
          icon_cluster_cat = 'interactive_cluster';
        }

      }else if(location.quarter.name == "DISRUPTION QUARTIER"){

        if(location['type'] == 'Highlight'||location['map_type'] == 'X'){
          icon_location = this.map_icon_pinDisruptionHighlight;
          icon_cluster_cat = 'disruption_stage';
        }
        else if(location['type'] == 'Buehne'||location['map_type'] == 'B'){
          icon_location = this.map_icon_pinDisruptionStage;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Testzentrum'||location['map_type'] == 'T'){
          icon_location = this.map_icon_pinDisruptionTest;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Akkreditierung'||location['map_type'] == 'A'){
          icon_location = this.map_icon_pinDisruptionAccreditation;
          icon_cluster_cat = 'stage';
        }
        else{
          icon_location = this.map_icon_pinDisruption;
          icon_cluster_cat = 'disruption_cluster';
        }

      }else if(location.quarter.name == "FUTURE QUARTIER"){

        if(location['type'] == 'Highlight'||location['map_type'] == 'X'){
          icon_location = map_icon_pinFutureHighlight;
          icon_cluster_cat = 'future_stage';
        }
        else if(location['type'] == 'Buehne'||location['map_type'] == 'B'){
          icon_location = this.map_icon_pinFutureStage;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Testzentrum'||location['map_type'] == 'T'){
          icon_location = this.map_icon_pinFutureTest;
          icon_cluster_cat = 'stage';
        }
        else if(location['type'] == 'Akkreditierung'||location['map_type'] == 'A'){
          icon_location = this.map_icon_pinFutureAccreditation;
          icon_cluster_cat = 'stage';
        }
        else{
          icon_location = this.map_icon_pinFuture;
          icon_cluster_cat = 'future_cluster';
        }
      }

      return {
        icon_location: icon_location,
        icon_cluster_cat: icon_cluster_cat
      }
    },
    initMarkerIcons: function (){
      this.map_icon_pinInspiration = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspiration),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinInteractive = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractive),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinFuture = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFuture),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinDisruption = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruption),
        scaledSize: new this.google.maps.Size(40, 40)
      }

      this.map_icon_pinInspirationHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinInteractiveHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinFutureHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinDisruptionHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }

      this.map_icon_pinInspiration = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspiration),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinInteractive = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractive),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinFuture = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFuture),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinDisruption = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruption),
        scaledSize: new this.google.maps.Size(40, 40)
      }

      this.map_icon_pinInspirationHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinInteractiveHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinFutureHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinDisruptionHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }

      this.map_icon_pinInspiration = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspiration),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinInteractive = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractive),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinFuture = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFuture),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinDisruption = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruption),
        scaledSize: new this.google.maps.Size(40, 40)
      }

      this.map_icon_pinInspirationHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinInteractiveHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinFutureHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinDisruptionHighlight = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionHighlight),
        scaledSize: new this.google.maps.Size(48, 48)
      }

      this.map_icon_pinInspirationStage = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationStage),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinInteractiveStage = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveStage),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinFutureStage = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureStage),
        scaledSize: new this.google.maps.Size(48, 48)
      }
      this.map_icon_pinDisruptionStage = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionStage),
        scaledSize: new this.google.maps.Size(48, 48)
      }

      this.map_icon_pinInspirationTest = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationTest),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinInteractiveTest = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveTest),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinFutureTest = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureTest),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinDisruptionTest = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionTest),
        scaledSize: new this.google.maps.Size(40, 40)
      }

      this.map_icon_pinInspirationAccreditation = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationAccreditation),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinInteractiveAccreditation = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveAccreditation),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinFutureAccreditation = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureAccreditation),
        scaledSize: new this.google.maps.Size(40, 40)
      }
      this.map_icon_pinDisruptionAccreditation = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionAccreditation),
        scaledSize: new this.google.maps.Size(40, 40)
      }
    },
    initMarkerCluster: function (){

      const renderer = (color)=>{
        return {
          render: ({ count, position }) =>{

            let size = (count + 5) * 4;
            if(size <= 40){
              size = 40;
            }
            if(size >= 80){
              size = 80;
            }
            return new google.maps.Marker({
              position,
              icon: {
                url: `data:image/svg+xml;base64,${ClusterIcon(color)}`,
                scaledSize: new this.google.maps.Size(size, size),
              },
              label: {
                text: String(count),
                color: "white",
                fontSize: "12px",
              },
              title: `Cluster of ${count} markers`,
              // adjust zIndex to be above other markers
              zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
            })
          },
        }
      };

      this.inspiration_cluster = new MarkerClusterer({
        map: this.map,
        markers: this.markers.inspiration_cluster,
        renderer:renderer(`#E6007E`)
      });
      this.inspiration_stage = new MarkerClusterer({
        map: this.map,
        markers: this.markers.inspiration_stage,
        renderer:renderer(`#E6007E`)
      });
      this.interactive_cluster = new MarkerClusterer({
        map: this.map,
        markers: this.markers.interactive_cluster,
        renderer: renderer(`#39A935`)
      });
      this.interactive_stage = new MarkerClusterer({
        map:this.map,
        markers:this.markers.interactive_stage,
        renderer: renderer(`#39A935`)
      });
      this.disruption_cluster = new MarkerClusterer({
        map:this.map,
        markers:this.markers.disruption_cluster,
        renderer: renderer(`#4CB4E7`)
      });
      this.disruption_stage = new MarkerClusterer({
        map:this.map,
        markers:this.markers.disruption_stage,
        renderer: renderer(`#4CB4E7`)
      });
      this.future_cluster = new MarkerClusterer({
        map:this.map,
        markers:this.markers.future_cluster,
        renderer: renderer(`#FFDE14`)
      });
      this.future_stage = new MarkerClusterer({
        map:this.map,
        markers:this.markers.future_stage,
        renderer:renderer(`#FFDE14`)
      });
    },

    updateLocations: function (locations = []){

      if(locations.length > 0){
        this.updatedLocations = locations;
      }

      this.markers = {
        'stage':[],
        'inspiration_cluster':[],
        'interactive_cluster':[],
        'disruption_cluster':[],
        'future_cluster':[],
        'inspiration_stage':[],
        'interactive_stage':[],
        'disruption_stage':[],
        'future_stage':[]
      };

      this.inspiration_stage.clearMarkers();
      this.interactive_stage.clearMarkers();
      this.disruption_stage.clearMarkers();
      this.future_stage.clearMarkers();

      this.inspiration_cluster.clearMarkers();
      this.interactive_cluster.clearMarkers();
      this.disruption_cluster.clearMarkers();
      this.future_cluster.clearMarkers();

      this.currentLocations.forEach((location)=> {

        if(!location['brandhouse_latitude'] | !location['brandhouse_latitude'] | !location.quarter)
          return;

        let locationLatlng = new this.google.maps.LatLng(location['brandhouse_latitude'],location['brandhouse_longitude']);

        const options = this.initMarkerOptions(location)

        let marker = new this.google.maps.Marker({
          position: locationLatlng,
          title: location.name,
          icon: options.icon_location,
          optimized: false
        });


        marker.addListener("spider_click", () => {
          this.showOverlay = true;
          this.currentLocation = location;
        });
        location['marker'] = marker;

        this.oms.addMarker(marker)

        if(this.markers[options.icon_cluster_cat]){
          this.markers[options.icon_cluster_cat].push(marker);
        }else{
        }

        this.markers.stage.forEach((element)=>{
          element.setMap(this.map);
        });

      });

      this.inspiration_stage.addMarkers(this.markers.inspiration_stage);
      this.interactive_stage.addMarkers(this.markers.interactive_stage);
      this.disruption_stage.addMarkers(this.markers.disruption_stage);
      this.future_stage.addMarkers(this.markers.future_stage);

      this.inspiration_cluster.addMarkers(this.markers.inspiration_cluster);
      this.interactive_cluster.addMarkers(this.markers.interactive_cluster);
      this.disruption_cluster.addMarkers(this.markers.disruption_cluster);
      this.future_cluster.addMarkers(this.markers.future_cluster);
    }
  },
  mounted: function() {
    const loader = new Loader('AIzaSyAehMEaVXtuA-WaIWIS3HNIn7RH3CYZ7Wk', options);
    loader.load().then( (newGoogle)=> {
      this.google = newGoogle;

      let styledMap = new this.google.maps.StyledMapType(mapStyles,{name: "Styled Map"});
      let isDraggable = window.innerWidth > 480 ? true : false;
      let isScrollable = window.innerWidth > 480 ? true : false;

      this.initMarkerIcons();

      this.map = new this.google.maps.Map(document.getElementById("map"), {

        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: isDraggable,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        center: { lat: 50.941632, lng: 6.9385706 },
        zoom: 15,
        minZoom: 12
      });
      this.map.mapTypes.set('map_style', styledMap);
      this.map.setMapTypeId('map_style');

      this.oms = new OverlappingMarkerSpiderfier(this.map, { legWeight: 3 });

      this.initMarkerCluster();
      this.updateLocations();

    });



  },

  watch: {
    locations: {
      handler: function () {
        this.updateLocations();
      },
      immediate: false
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map-container{
    position: relative;
    overflow: hidden;
    max-width: 1260px;
    margin: 40px auto 0 auto;
  }
  #map {
    height: calc(70vh);
  }

  #sidebar-legend{
    position: absolute;
    top: 0;
    right: -325px;/*-285px;*/
    height: calc(70vh);
    width: calc(400px - 4rem - 1px);
    background: #ffffff;
    padding: 2rem;
    border-right: 1px solid #dddddd;
    transition: 0.5s ease-in-out;

  }
  #sidebar-legend.animate{
    animation-name: sidebar-legend-pulse;
    animation-duration: 8s;
    animation-iteration-count: 2;
  }
  #sidebar-legend:after{
    content:' ';
    position: absolute;
    height: 0;
    bottom: 0;
    right: 0;
    width: 2rem;
    background: linear-gradient(to left, #ffffff, transparent);
  }

  #sidebar-legend:hover{
    transform: translate3d(-320px,0,0) !important;
    animation-name:unset;
  }

  @keyframes sidebar-legend-pulse{
  0   {transform: translate3d(0px,0,0)}
  50% {transform: translate3d(0px,0,0)}
  56% {transform: translate3d(-6px,0,0)}
  72% {transform: translate3d(0px,0,0)}
  80% {transform: translate3d(0px,0,0)}
  86% {transform: translate3d(-6px,0,0)}
  92% {transform: translate3d(0px,0,0)}
  100% {transform: translate3d(0px,0,0)}
  }

  #sidebar-legend-inspiration,
  #sidebar-legend-interactive,
  #sidebar-legend-future,
  #sidebar-legend-disruption{
    margin-left: 0rem;
    padding-left: 2rem;
    height: 5rem;
  }

  #sidebar-legend b{
    font-size: 1rem;
  }
  #sidebar-legend p{
    font-size: 0.875rem;
  }

  #sidebar-legend-inspiration:before,
  #sidebar-legend-interactive:before,
  #sidebar-legend-future:before,
  #sidebar-legend-disruption:before {
    content: ' ';
    height: 2rem;
    width: 2rem;
    margin-left: -4rem;
    position: absolute;
  }

  #sidebar-legend-inspiration{
    border-left: 1rem solid #E6007E;
  }

  #sidebar-legend-interactive{
    border-left: 1rem solid #39A935;

  }

  #sidebar-legend-future{
    border-left: 1rem solid #FFDE14;
  }

  #sidebar-legend-disruption{

    border-left: 1rem solid #4CB4E7;
  }

  #sidebar{
    position: absolute;
    top: 0;
    left: -464px;
    height: calc(100vh - 9rem);
    width: calc(400px - 4rem - 1px);
    background: #121c2d;
    padding: 2rem 4rem;
    border-right: 1px solid #121c2d;
    transition: 0.3s all;
    color: #ffffff;
  }
  #sidebar.open{
    transform: translate3d(100%,0,0);
  }

  #sidebar-close-container{
    text-align: right;
  }
  #sidebar-close-icon{
    height: 1.5rem;
    width: 1.5rem;
  }
  #sidebar-location-content{
    margin-top: 1rem;
  }
  #sidebar-location-image{
    max-width: 100%;
  }
  #sidebar-location-block{
    font-weight: bold;
  }
  #sidebar-location-category{
    font-weight: bold;
  }

  #sidebar-location-content .btn{
    background: #ffffff;
    color: #121c2d;
    padding: 0.75rem 1.5rem;
    margin-top: 2rem;
    display: inline-block;
  }

  #map-overlay{
    position: absolute;
    right: 0;
    bottom: -7px;
    z-index: 10;
  }
  #map-overlay img{
    width: 200px;
  }

  #buttonbar{
    display: flex;
    flex-direction: row;
    border-top: 1px solid #dddddd;
  }
  #buttonbar a{
    margin: auto;
    font-size: 1.125rem;
    line-height: 5rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    text-align: center;
    border-right: 1px solid #dddddd;
    flex-grow: 1;
    transition: 0.3s;
  }
  #buttonbar a:hover{
    background: #f5f5f5;
  }
  #buttonbar a span{
    margin: 0 auto 0 1rem;
  }
  #buttonbar a img{
    margin: 0 1rem 0 auto;
    height: 1.75rem;
  }

  /* Optional: Makes the sample page fill the window. */
  html,
  body {
    line-height: 150%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  a, a:hover{
    text-decoration: none;
    color:#000000;
  }
  a:visited{
    color:#000000;
  }

  /*Video*/
  #video-keyvisual{
    background: #0d1f30;
    display: flex;
    flex-direction: column;
  }
  #video-keyvisual *{
    color: #ffffff
  }
  #video-container video{
    object-fit: cover;
  }
  #video-container{
    width: 100vw;
    height: 100vh;
    display: flex;

  }
  #video-intro{
    object-fit: cover;
    width: 100%;
  }
  #video-content{
    position: relative;
    max-width: 600px;
    display: flex;
    align-items: center;
    padding: 4rem;
    display: none !important;
  }
  #video-content h1{
    line-height: 120%;
    font-size: 3rem;
  }
  #video-content p{
    line-height: 175%;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  #video-content .btn{
    background: #ffc014;
    padding: 0.75rem 2rem;
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1024px) {
    #video-content{
      padding: 0;
    }
    #video-container{
      height: auto;
    }
    #video-keyvisual{
      display: block;
      padding: 0rem;
    }
    #video-container video{
      object-fit: contain;
    }
    #video-container, #video-content{
      max-width: 100%;
      width: 100%;
    }
    #video-content h1{
      font-size: 2rem;
    }
  }

  /* Lightbox */
  #lightbox-background{
    background: #121c2d;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    transition: 0.3s;
    display: none;
    opacity: 0;
  }
  #lightbox-background.opening{
    display: block;
  }
  #lightbox-background.open{
    opacity: 0.8;
  }

  #lightbox-container{
    background: #ffffff;
    position: fixed;
    top: 6rem;
    left: 6rem;
    bottom: 6rem;
    right: 6rem;
    z-index: 101;
    transition: 0.5s;
    display: none;
    opacity: 0;
    transform: translate3d(0,4rem,0);
    padding:2rem 2rem 2rem 4rem;
    overflow: auto;
  }
  #lightbox-container.opening{
    display: block;
  }
  #lightbox-container.open {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  #lightbox-close-container{
    text-align: right;
  }
  #lightbox-close img{
    height: 2rem;
  }

  #brandhouse-container{
    display: flex;
  }
  #brandhouse-container .brandhouse-column{
    margin-right: 6rem;
  }
  #brandhouse-container .brandhouse-column h3{
    font-size: 1.25rem;
  }
  #brandhouse-container .brandhouse-column ul{
    padding: 0 0 0 0rem;
    list-style-type: none;
  }

  #brandhouse-headline-interactive{

    color: #FFDE14;
    text-transform: uppercase;
  }
  #brandhouse-headline-future{
    color: #39A935;

    text-transform: uppercase;
  }
  #brandhouse-headline-disruption{
    color: #4CB4E7;
    text-transform: uppercase;
  }
  #brandhouse-headline-inspiration{
    color: #E6007E;
    text-transform: uppercase;
  }

  #lightbox-container, #lightbox-background{
    position: absolute !important;
  }

  #lightbox-btn-close{
    color:#ffffff;
    background: #ffc014;
    margin: .7rem .5rem .7rem 0;
    padding: 1.1rem 2rem 1rem;
    border-radius: .3rem;
    border: 0;
    cursor: pointer;
    outline: 0;
    font: 700 .9rem/.9rem Source Sans Pro,sans-serif;
    display: inline-block;
  }


  @media (max-width: 1200px) {
    #lightbox-container{
      top: 2rem;
      left: 2rem;
      bottom: 2rem;
      right: 2rem;
      padding:2rem;
    }
  }

  @media (max-width: 768px) {
    #lightbox-container{
      top: 1rem;
      left: 1rem;
      bottom: 1rem;
      right: 1rem;
      padding:2rem;
    }
  }

</style>
