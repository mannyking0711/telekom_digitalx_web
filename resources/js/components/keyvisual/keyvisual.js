import locations from '../../data/locations'
import checkins from '../../data/checkins'
import mapStyles from '../../data/mapStyles'
import { MarkerClusterer } from "@googlemaps/markerclusterer"

export default function initMap() {
  let styledMap = new google.maps.StyledMapType(mapStyles,{name: "Styled Map"});

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 50.941632, lng: 6.9385706 },
    mapTypeControl: false,
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  /*
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://dx-previews.tbs80projects.com/map/DIGITAL-X_v3-001.kml?v=2",
    map: map,
  });
  */

  //checkin
  let map_icon_pinArrowsInwards = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinArrowsInwards), scaledSize: new google.maps.Size(32, 32) }

  checkins.forEach(function(checkin) {
    let checkinLatlng = new google.maps.LatLng(checkin['lat'],checkin['lng']);
    let marker = new google.maps.Marker({
        position: checkinLatlng,
        title: checkin['title'],
        icon: map_icon_pinArrowsInwards,
        optimized: false
    });
    checkin['marker'] = marker;
    //marker.setMap(map);
  });

  let map_icon_pinInspiration = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspiration), scaledSize: new google.maps.Size(40, 40) }
  let map_icon_pinInteractive = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractive), scaledSize: new google.maps.Size(40, 40) }
  let map_icon_pinFuture = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFuture), scaledSize: new google.maps.Size(40, 40) }
  let map_icon_pinDisruption = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruption), scaledSize: new google.maps.Size(40, 40) }

  let map_icon_pinInspirationHighlight = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationHighlight), scaledSize: new google.maps.Size(48, 48) }
  let map_icon_pinInteractiveHighlight = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveHighlight), scaledSize: new google.maps.Size(48, 48) }
  let map_icon_pinFutureHighlight = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureHighlight), scaledSize: new google.maps.Size(48, 48) }
  let map_icon_pinDisruptionHighlight = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionHighlight), scaledSize: new google.maps.Size(48, 48) }

    let map_icon_pinInspirationStage = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationStage), scaledSize: new google.maps.Size(48, 48) }
    let map_icon_pinInteractiveStage = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveStage), scaledSize: new google.maps.Size(48, 48) }
    let map_icon_pinFutureStage = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureStage), scaledSize: new google.maps.Size(48, 48) }
    let map_icon_pinDisruptionStage = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionStage), scaledSize: new google.maps.Size(48, 48) }

    let map_icon_pinInspirationTest = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationTest), scaledSize: new google.maps.Size(40, 40) }
    let map_icon_pinInteractiveTest = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveTest), scaledSize: new google.maps.Size(40, 40) }
    let map_icon_pinFutureTest = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureTest), scaledSize: new google.maps.Size(40, 40) }
    let map_icon_pinDisruptionTest = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionTest), scaledSize: new google.maps.Size(40, 40) }

    let map_icon_pinInspirationAccreditation = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInspirationAccreditation), scaledSize: new google.maps.Size(40, 40) }
    let map_icon_pinInteractiveAccreditation = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinInteractiveAccreditation), scaledSize: new google.maps.Size(40, 40) }
    let map_icon_pinFutureAccreditation = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinFutureAccreditation), scaledSize: new google.maps.Size(40, 40) }
    let map_icon_pinDisruptionAccreditation = { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg_pinDisruptionAccreditation), scaledSize: new google.maps.Size(40, 40) }

  let markers = {
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

  locations.forEach(function(location) {
    let locationLatlng = new google.maps.LatLng(location['latitude'],location['longitude']);

    let icon_location = '';
    let icon_cluster_cat = '';
    if(location['block'] == "Inspiration"){

        if(location['highlight'] == 'X'){
            icon_location = map_icon_pinInspirationHighlight;
            icon_cluster_cat = 'inspiration_stage';
        }else if(location['highlight'] == 'B'){
            icon_location = map_icon_pinInspirationStage;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'T'){
            icon_location = map_icon_pinInspirationTest;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'A'){
            icon_location = map_icon_pinInspirationAccreditation;
            icon_cluster_cat = 'stage';
        }else{
            icon_location = map_icon_pinInspiration;
            icon_cluster_cat = 'inspiration_cluster';
        }

    }else if(location['block'] == "Interactive"){

        if(location['highlight'] == 'X'){
            icon_location = map_icon_pinInteractiveHighlight;
            icon_cluster_cat = 'interactive_stage';
        }else if(location['highlight'] == 'B'){
            icon_location = map_icon_pinInteractiveStage;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'T'){
            icon_location = map_icon_pinInteractiveTest;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'A'){
            icon_location = map_icon_pinInteractiveAccreditation;
            icon_cluster_cat = 'stage';
        }else{
            icon_location = map_icon_pinInteractive;
            icon_cluster_cat = 'interactive_cluster';
        }

    }else if(location['block'] == "Disruption"){

        if(location['highlight'] == 'X'){
            icon_location = map_icon_pinDisruptionHighlight;
            icon_cluster_cat = 'disruption_stage';
        }else if(location['highlight'] == 'B'){
            icon_location = map_icon_pinDisruptionStage;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'T'){
            icon_location = map_icon_pinDisruptionTest;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'A'){
            icon_location = map_icon_pinDisruptionAccreditation;
            icon_cluster_cat = 'stage';
        }else{
            icon_location = map_icon_pinDisruption;
            icon_cluster_cat = 'disruption_cluster';
        }

    }else if(location['block'] == "Future"){

        if(location['highlight'] == 'X'){
            icon_location = map_icon_pinFutureHighlight;
            icon_cluster_cat = 'future_stage';
        }else if(location['highlight'] == 'B'){
            icon_location = map_icon_pinFutureStage;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'T'){
            icon_location = map_icon_pinFutureTest;
            icon_cluster_cat = 'stage';
        }else if(location['highlight'] == 'A'){
            icon_location = map_icon_pinFutureAccreditation;
            icon_cluster_cat = 'stage';
        }else{
            icon_location = map_icon_pinFuture;
            icon_cluster_cat = 'future_cluster';
        }
    }

    let marker = new google.maps.Marker({
        position: locationLatlng,
        title: location.name,
        icon: icon_location,
        optimized: false
    });
    marker.addListener("click", () => {
        document.getElementById('sidebar').classList.add('open')
        document.getElementById('sidebar-location-name').textContent = location.headline;
        document.getElementById('sidebar-location-category').textContent = location.name;
        document.getElementById('sidebar-location-block').textContent = location.address;
        document.getElementById('sidebar-location-description').textContent = location.text_de;
        if(location.link_de != ""){
            document.getElementById('sidebar-location-link').setAttribute('href', location.link_de);
            document.getElementById('sidebar-location-link').style.display = 'inline';
        }else{
            document.getElementById('sidebar-location-link').setAttribute('href', location.link_de);
            document.getElementById('sidebar-location-link').style.display = 'none';
        }
        if(location.image != "") {
            document.getElementById('sidebar-location-image').setAttribute('src', location.image);
            document.getElementById('sidebar-location-image').style.display = 'inline';
            document.getElementById('sidebar-location-image').style.backgroundColor = '#ffffff';
        }else{
            document.getElementById('sidebar-location-image').setAttribute('src', location.image);
            document.getElementById('sidebar-location-image').style.display = 'none';
        }


    });
    location['marker'] = marker;
    //
    if(markers[icon_cluster_cat]){
        markers[icon_cluster_cat].push(marker);
    }else{
        //console.log(location.name);
        //console.log('categroy '+icon_cluster_cat+' not found');
    }

  });

    const ClusterIcon = color => window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".9" r="70" />
    <circle cx="120" cy="120" opacity=".5" r="95" />
    <circle cx="120" cy="120" opacity=".3" r="120" />
  </svg>`)

    markers.stage.forEach(function(element){
        element.setMap(map);
    });

    let inspiration_cluster = new MarkerClusterer(map, markers.inspiration_cluster, {
        styles: [48, 72, 156].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#E6007E`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let inspiration_stage = new MarkerClusterer(map, markers.inspiration_stage, {
        styles: [48, 72, 156].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#E6007E`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let interactive_cluster = new MarkerClusterer(map, markers.interactive_cluster, {
        styles: [48, 72, 156].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#39A935`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let interactive_stage = new MarkerClusterer(map, markers.interactive_stage, {
        styles: [48, 72, 156].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#39A935`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let disruption_cluster = new MarkerClusterer(map, markers.disruption_cluster, {
        styles: [48, 72, 156].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#4CB4E7`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let disruption_stage = new MarkerClusterer(map, markers.disruption_stage, {
        styles: [48, 72, 156].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#4CB4E7`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let future_cluster = new MarkerClusterer(map, markers.future_cluster, {
        styles: [48, 64, 128].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#FFDE14`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });
    let future_stage = new MarkerClusterer(map, markers.future_stage, {
        styles: [48, 64, 128].map(size => ({
            url: `data:image/svg+xml;base64,${ClusterIcon(`#FFDE14`)}`,
            height: size,
            width: size,
            textColor: `white`,
        })),
    });

    //UI
    document.getElementById('sidebar-close-button').addEventListener("click",function(event){
        document.getElementById('sidebar').classList.remove('open');
        event.preventDefault();
    });

    // document.getElementById('button-brandhouses').addEventListener("click",function(event){
    //     openPopup();
    //     event.preventDefault();
    // });
    document.getElementById('lightbox-background').addEventListener("click",function(event){
        closePopup();
        event.preventDefault();
    });
    document.getElementById('lightbox-close').addEventListener("click",function(event){
        closePopup();
        event.preventDefault();
    });
    document.getElementById('lightbox-btn-close').addEventListener("click",function(event){
        closePopup();
        event.preventDefault();
    });

    openPopup();
}

let openPopup = function(){
  document.getElementById('lightbox-background').classList.add('opening');
  document.getElementById('lightbox-container').classList.add('opening');
  setTimeout(function(){
      document.getElementById('lightbox-background').classList.add('open');
  },50);
  setTimeout(function(){

      document.getElementById('lightbox-container').classList.add('open');
  },200);
}

let closePopup = function (){
  document.getElementById('lightbox-background').classList.remove('open');
  document.getElementById('lightbox-container').classList.remove('open');
  setTimeout(function(){
      document.getElementById('lightbox-background').classList.remove('opening');
      document.getElementById('lightbox-container').classList.remove('opening');
  },400);
}

let svg_pinArrowsInwards = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0C6.21,0,1.5,4.262,1.5,9.5c0,5.747,7.3,12.285,9.54,14.152a1.5,1.5,0,0,0,1.921,0C15.2,21.784,22.5,15.246,22.5,9.5,22.5,4.262,17.79,0,12,0ZM10.5,15.75a.75.75,0,0,1-1.5,0V14.664a.25.25,0,0,0-.427-.177L6.78,16.28a.75.75,0,0,1-1.06-1.06l1.793-1.793A.25.25,0,0,0,7.336,13H6.25a.75.75,0,0,1,0-1.5h3.5a.754.754,0,0,1,.75.75Zm0-8a.753.753,0,0,1-.75.75H6.25a.75.75,0,0,1,0-1.5H7.336a.25.25,0,0,0,.177-.427L5.72,4.78A.75.75,0,0,1,6.78,3.72L8.573,5.513A.25.25,0,0,0,9,5.336V4.25a.75.75,0,0,1,1.5,0Zm1.5,3.5A1.25,1.25,0,1,1,13.25,10,1.252,1.252,0,0,1,12,11.25Zm6.28,3.97a.75.75,0,1,1-1.06,1.06l-1.793-1.793a.25.25,0,0,0-.427.177V15.75a.75.75,0,0,1-1.5,0v-3.5a.754.754,0,0,1,.75-.75h3.5a.75.75,0,0,1,0,1.5H16.664a.25.25,0,0,0-.177.427ZM17.75,7a.75.75,0,0,1,0,1.5h-3.5a.753.753,0,0,1-.75-.75V4.25a.75.75,0,0,1,1.5,0V5.336a.25.25,0,0,0,.427.177L17.22,3.72a.75.75,0,1,1,1.06,1.06L16.487,6.573A.25.25,0,0,0,16.664,7Z" fill="#666666" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path></g></svg>';
let svg_pinDisruption = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
let svg_pinInteractive = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
let svg_pinFuture = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
let svg_pinInspiration = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,0A8.009,8.009,0,0,0,4,8c0,3.51,5,12.025,7.148,15.524A1,1,0,0,0,12,24a.991.991,0,0,0,.852-.477C15,20.026,20,11.514,20,8A8.009,8.009,0,0,0,12,0Zm0,11.5A3.5,3.5,0,1,1,15.5,8,3.5,3.5,0,0,1,12,11.5Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';

let svg_pinDisruptionHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
let svg_pinInteractiveHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
let svg_pinFutureHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';
let svg_pinInspirationHighlight = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M16.726,18.285a1,1,0,0,0-.168,1.993,29.747,29.747,0,0,1,3.776.523.25.25,0,0,1,0,.488A40,40,0,0,1,12,22a40.006,40.006,0,0,1-8.333-.711.25.25,0,0,1,0-.488,29.551,29.551,0,0,1,3.736-.52,1,1,0,0,0-.17-1.992C0,18.9,0,20.4,0,21.044,0,23.712,8.317,24,12,24s12-.288,12-2.956C24,20.4,24,18.9,16.726,18.285Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12,21.6a1,1,0,0,0,.842-.461c1.958-3.063,6.512-10.536,6.512-13.786a7.355,7.355,0,1,0-14.71,0c0,3.25,4.554,10.724,6.513,13.786A.993.993,0,0,0,12,21.6ZM8.5,7A3.5,3.5,0,1,1,12,10.5,3.5,3.5,0,0,1,8.5,7Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path></g></svg>';

let svg_pinDisruptionStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
let svg_pinInteractiveStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
let svg_pinFutureStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
let svg_pinInspirationStage = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M21,10.063c0,6.227-7.122,12.059-8.695,13.27a.5.5,0,0,1-.61,0C10.121,22.121,3,16.29,3,10.063c0-5.246,3.753-9.5,9-9.5S21,4.817,21,10.063Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M12.589,4.794l1.282,2.769h2.495A.612.612,0,0,1,16.8,8.632l-2.166,2.136,1.2,2.761a.654.654,0,0,1-.931.818L12,12.713,9.1,14.347a.654.654,0,0,1-.931-.818l1.2-2.761L7.2,8.632a.612.612,0,0,1,.429-1.069h2.5l1.285-2.769A.662.662,0,0,1,12.589,4.794Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

let svg_pinDisruptionTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
let svg_pinInteractiveTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
let svg_pinFutureTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';
let svg_pinInspirationTest = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)"><path d="M12,.574a11.38,11.38,0,0,1,6.112,1.77c4.75,3.011,5.1,9.23,1.315,13.777a59.3,59.3,0,0,1-7.106,7.188.5.5,0,0,1-.642,0,59.333,59.333,0,0,1-7.106-7.189C.789,11.574,1.138,5.355,5.888,2.344A11.38,11.38,0,0,1,12,.574Z" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"></path><path d="M7.000 6.574 L17.000 6.574 L17.000 14.574 L7.000 14.574 Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14,6.574v-1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.074L12 12.074" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 10.574L13.5 10.574" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>';

let svg_pinDisruptionAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#4CB4E7" stroke="#31a8ca" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
let svg_pinInteractiveAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#39A935" stroke="#94c234" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
let svg_pinFutureAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#FFDE14" stroke="#d5a113" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
let svg_pinInspirationAccreditation = '<svg viewBox="0 0 48 48" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2,0,0,2,0,0)" fill="#E6007E" stroke="#ce0272" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"><path  d="M21,10c0,7-9,13.5-9,13.5S3,17,3,10c0-5.2,3.8-9.5,9-9.5S21,4.8,21,10z"/></g><g transform="matrix(2,0,0,2,0,0)"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M17.7,13.2c0.2,0.2,0.2,0.5,0,0.7l-3.4,3.4c-0.2,0.2-0.5,0.2-0.7,0l-6.5-6.5c-0.1-0.1-0.1-0.2-0.1-0.3l0-3.4 c0-0.3,0.2-0.5,0.5-0.5h3.4c0.1,0,0.3,0.1,0.3,0.1L17.7,13.2z"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"  d="M8.6,9c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0,0,0,0,0,0c0-0.4-0.3-0.7-0.7-0.7C8.9,8.2,8.6,8.6,8.6,9 C8.6,9,8.6,9,8.6,9z"/></g></svg>';
