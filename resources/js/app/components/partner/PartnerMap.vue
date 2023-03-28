<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<template>
  <div class="partner-map">
    <div class="partner-map__title">
      {{ $t('partner-map.title') }}
    </div>
    <div class="partner-map__map">
      <div id="partner-map"></div>
    </div>
    <div class="partner-map__footer">
      <div class="partner-map__address">
        <div class="partner-map__address__icon">
          <svg viewBox="0 0 48 48" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>
        </div>
        {{ address }}
      </div>
      <a :href="planRouteUri" target="_blank" class="partner-map__route">
        <div class="partner-map__route__icon">
          <svg viewBox="0 0 576 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z"/></svg>
        </div>
        {{ $t('partner-map.route') }}
      </a>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
import {Loader} from 'google-maps';

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

const svg_pin_blue = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pin_green = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pin_yellow = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
const svg_pin_pink = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: "PartnerMap",

  props: {
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    name: {type: String, required: false, default: ''},
    address: {type: String, required: true},
    color: {type: String, required: true},
  },

  data: function() {
    return {
      google: null,
      map: null,
    }
  },

  computed: {
    planRouteUri() {
      const address = encodeURI(this.address);
      return `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}/${address}`;
    }
  },

  mounted: function() {
    const options = {
      libraries: ['places','geometry']
    };

    const loader = new Loader('AIzaSyAehMEaVXtuA-WaIWIS3HNIn7RH3CYZ7Wk', options);
    loader.load().then(google => {
      this.google = google;
      let styledMap = new this.google.maps.StyledMapType(mapStyles,{name: "Styled Map"});
      this.map = new this.google.maps.Map(document.getElementById('partner-map'), {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: 16,
        minZoom: 12,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        gestureHandling: 'cooperative',
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
      });
      this.map.mapTypes.set('map_style', styledMap);
      this.map.setMapTypeId('map_style');

      let marker = new this.google.maps.Marker({
        map: this.map,
        position: new this.google.maps.LatLng(this.latitude, this.longitude),
        title: this.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pin_blue),
          scaledSize: new this.google.maps.Size(40, 40)
        },
        optimized: false
      });
    });
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
    "partner-map.title": "DIGITAL X LOCATION",
    "partner-map.route": "Route planen"
  },
  "en": {
    "partner-map.title": "DIGITAL X LOCATION",
    "partner-map.route": "Plan route"
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
