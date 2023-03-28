<template>
  <div class="dx-agenda">
    <div class="agenda-header">
      <div class="agenda-header-legend">
        <span>{{ $t('pageagenda.calenderViewLegend') }}:</span>
        <span class="text-highlights">Highlights  =</span> <img src="/img/app/agenda/highlights-check.svg"/>
        <span class="text-all-areas">All Areas  =</span> <img src="/img/app/agenda/all-areas-check.svg"/>
      </div>
      <div class="agenda-header-spacer">
        <hr>
      </div>
      <div class="agenda-header-zoom">
        <span>{{ $t('pageagenda.calenderView') }}</span>
        <a @click="increment"><img src="/img/app/agenda/plus_ag.svg"/> {{ $t('pageagenda.calenderViewLarger') }}</a>
        <a @click="decrement"><img src="/img/app/agenda/minus_ag.svg"/> {{ $t('pageagenda.calenderViewSmaller') }}</a>
      </div>
    </div>

    <div class="agenda-timeline" :style="{height: calcBoardHeight() + 'px'}">
      <div class="agenda-stage-title"> &#160; </div>
      <div class="agenda-special agenda-special-morning" :style="{top: positionMorning + 'px'}">
        <img src="/img/app/agenda/sun.svg"/>
      </div>
      <div class="agenda-special agenda-special-lunch" :style="{top: positionLunch + 'px'}">
        <img src="/img/app/agenda/besteck.svg"/>
      </div>
      <div class="agenda-special agenda-special-evening" :style="{top: positionEvening + 'px'}">
        <img src="/img/app/agenda/bier.svg"/>
      </div>
      <div class="agenda-session-list">
        <div class="agenda-time"  :style="{top: calcPositionInList(session) + 'px', height: calcHeightInList(session) + 'px', 'min-height': calcHeightInList(session) + 'px'}" v-for="session in timeline">
          <p>{{ session.title }} {{ $t('pageagenda.calenderViewOClock') }}</p>
        </div>
      </div>
    </div>
    <div class="agenda-board-wrapper">
      <div class="agenda-board">
        <div class="agenda-stage" v-for="stage in stagesDay1" :style="{height: calcBoardHeight() + 'px'}">
          <div :class="'agenda-stage-title stage-'+calcSessionStage(stage)"><h3>{{ stage.title }}</h3><p>{{ stage.subtitle }}</p></div>
          <div class="agenda-session-list">
            <div class="agenda-session" :class="'stage-'+calcSessionStage(stage)+' session-'+calcSessionType(session)" :style="{top: calcPositionInList(session) + 'px', height: calcHeightInList(session) + 'px', 'min-height': calcHeightInList(session) + 'px'}" v-for="session in stage.sessions">
              <p class="agenda-session-time">{{ session.from }} – {{ session.to }} {{ $t('pageagenda.calenderViewOClock') }} <img v-if="session.private_customer" class="agenda-highlights" src="/img/app/agenda/highlights-check.svg"><img class="agenda-all-areas" src="/img/app/agenda/all-areas-check.svg"></p>

              <div class="participants" v-if="session.participants.length">
                <a class="participant" v-for="participant in session.participants.slice().reverse()" :href="'/de/speaker/' + participant.slug_de">

                  <div class="participant-image">
                    <div class="participant-image-wrapper">
                      <img :src="participant.image" />
                    </div>
                  </div>
                  <div class="participant-info">
                    <p class="participant-name">{{ participant.name }} {{ participant.surname }}</p>
                    <p class="participant-company">{{ participant.company }} </p>
                  </div>

                </a>
              </div>

              <p class="agenda-session-title" v-html="session.title"></p>
              <p class="agenda-session-description" v-html="session.description_html"></p>
              <client-only>
                <div class="session-info" v-if="showDownloadToCalendar">
                  <div>
                    <a class="agenda-btn" :href="clickDownloadCalendar(session.title, session.description, stage.title, day1, session.from, session.to)">{{ $t('pageagenda.calenderViewAddToCalendar') }}</a>
                  </div>
                </div>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {icsDateTimeString, triggerDownload, generateIcsFile} from '../../../services/ics.js';
import {IS_SSR} from "../../../plugins/ssrSwitch";


export default {
  name: 'DxAgenda',
  data () {
    return {
      msg: 'DIGITAL X - Agenda',
      heightPerMin: 8.25,
      showDownloadToCalendar: true,
      slider: null,
    }
  },
  props: {
    day1: String,
    stagesDay1: Array,
  },
  computed:{
    positionMorning:function (){
      let datetimeStart = new Date('1970-01-01T10:00:00Z');
      let datetimeEnd = new Date('1970-01-01T10:05:00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);

      return diffMins * this.heightPerMin;
    },
    positionLunch:function (){
      let datetimeStart = new Date('1970-01-01T10:00:00Z');
      let datetimeEnd = new Date('1970-01-01T12:38:00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);

      return diffMins * this.heightPerMin;
    },
    positionEvening:function (){
      let datetimeStart = new Date('1970-01-01T10:00:00Z');
      let datetimeEnd = new Date('1970-01-01T17:47:00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);

      return diffMins * this.heightPerMin;
    },
    timeline: function (){
      let timeline = []

      let datetimeStart = new Date('1970-01-01T09:30:00Z');
      let datetimeEnd = new Date('1970-01-01T17:30:00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);

      for (let i = 0; i < diffMins;) {
        let itemStartDate = new Date(datetimeStart.getTime() + i*60000);
        let itemEndDate = new Date(datetimeStart.getTime() + (i + 15)*60000);
        let timelineEntry = {
          from: ("0" + itemStartDate.getHours()).slice(-2) + ':' + ("0" + itemStartDate.getMinutes()).slice(-2),
          to: ("0" + itemEndDate.getHours()).slice(-2) + ':' + ("0" + itemEndDate.getMinutes()).slice(-2),
          title: ("0" + itemStartDate.getHours()).slice(-2) + ':' + ("0" + itemStartDate.getMinutes()).slice(-2) + ' '
        }
        timeline.push(timelineEntry);
        i = i+15;
      }

      return timeline;
    }
  },
  methods: {
    initSlider (newAgenda){
      const { tns } = require('tiny-slider/src/tiny-slider');
      setTimeout(()=>{

        if(this.slider){
        }else{
          this.slider = tns({
            container: '.agenda-board',
            items: 1,
            nav: false,
            gutter: 10,
            edgePadding:6,
            mouseDrag:true,
            loop:false,
            responsive: {
              576: {
                items: 2
              },
              992: {
                items: 3
              },
              1200: {
                items: 5
              }
            }
          });
        }

      },100);

    },
    increment () {
      this.heightPerMin += 1;
    },
    decrement () {
      this.heightPerMin -= 1;
    },
    calcBoardHeight: function (){
      let datetimeStart = new Date('1970-01-01T10:30:00Z');
      let datetimeEnd = new Date('1970-01-01T18:45:00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);
      return diffMins * this.heightPerMin;
    },
    calcPositionInList: function (session){
      let datetimeStart = new Date('1970-01-01T10:30:00Z');
      let datetimeEnd = new Date('1970-01-01T' + session.from + ':00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);
      return (diffMins * this.heightPerMin) + 2;
    },
    calcHeightInList: function (session){
      let datetimeStart = new Date('1970-01-01T' + session.from + ':00Z');
      let datetimeEnd = new Date('1970-01-01T' + session.to + ':00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);
      return (diffMins * this.heightPerMin) - 30;
    },
    calcSessionType: function (session){
      let datetimeStart = new Date('1970-01-01T' + session.from + ':00Z');
      let datetimeEnd = new Date('1970-01-01T' + session.to + ':00Z');
      let diffMs = (datetimeEnd - datetimeStart);
      let diffMins = Math.floor((diffMs/1000)/60);

      if(diffMins < 10){
        return 'small';
      }else{
        return 'default';
      }
    },
    calcSessionStage: function (stage){
      let stageId = '';

      switch(stage.title) {
        case 'INSPIRATION STAGE':
          stageId = 'inspiration';
          break;
        case 'INTERACTIVE STAGE':
          stageId = 'interactive';
          break;
        case 'DISRUPTION STAGE':
          stageId = 'disruption';
          break;
        case 'FUTURE STAGE':
          stageId = 'future';
          break;
        case 'MAGENTA STAGE':
          stageId = 'magenta';
          break;
        case 'PioneerONE':
          stageId = 'pioneerone';
          break;
        case 'The PioneerOne':
          stageId = 'pioneerone';
          break;
        case 'EQUAL-ESPORTS':
          stageId = 'equal-esports';
          break;
        case 'EQUAL ESPORTS':
          stageId = 'equal-esports';
          break;
        default:
          stageId = 'default';
      }

      return stageId;
    },

    clickDownloadCalendar: function(title, description, location, date, startTime, endTime) {
      if (IS_SSR) return;
      let start = new Date(`${date}T${startTime}`);
      let end = new Date(`${date}T${endTime}`);
      let file = generateIcsFile('DIGITAL X: ' + title + '', description + '', location + '', start, end);

      return 'data:text/calendar;base64,' + btoa(unescape(encodeURIComponent(file)));
    },
  },
  mounted: function() {
    this.initSlider();
    // let that = this;
    //
    // this.day1 = this.agenda.day_raw;
    // this.agenda.subjects.forEach((item, index)=>{
    //   this.$set(this.stagesDay1, index, item);
    // });
  }

}
</script>


<i18n>
{
  "de": {
    "pageagenda.calenderView": "Kalenderansicht ändern:",
    "pageagenda.calenderViewLarger": "Größer",
    "pageagenda.calenderViewSmaller": "Kleiner",
    "pageagenda.calenderViewLegend": "Legende",
    "pageagenda.calenderViewOClock": "Uhr",
    "pageagenda.calenderViewAddToCalendar": "Zum Kalender hinzufügen"
  },
  "en": {
    "pageagenda.calenderView": "Change calendar view:",
    "pageagenda.calenderViewLarger": "Larger",
    "pageagenda.calenderViewSmaller": "Smaller",
    "pageagenda.calenderViewLegend": "Legend",
    "pageagenda.calenderViewOClock": "o'clock",
    "pageagenda.calenderViewAddToCalendar": "Add to calendar"
  }
}
</i18n>

<style>
.dx-agenda .agenda-board-wrapper{
  margin-left: 64px;
  width: calc(100% - 64px);
}


@media only screen and (min-width: 576px) {
  .dx-agenda .agenda-board-wrapper {
    margin-left: 96px;
    width: calc(100% - 96px);
  }
}

.dx-agenda .tns-controls{
  position: absolute;
  z-index: 1005;
  width: calc(100% - 64px);
}

@media only screen and (min-width: 576px) {
  .dx-agenda .tns-controls{
    width: calc(100% - 96px);
  }
}

.dx-agenda .tns-controls button:nth-child(1){
  position: absolute;
  left: 16px !important;
  top: 3rem;
  color: transparent;
  background: url('/img/app/agenda/arrow-left.svg');
  background-size: 20px;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  border: none;
}

.dx-agenda .tns-controls button[disabled]:nth-child(1){
  opacity: 0.5;
}
.dx-agenda .tns-controls button:nth-child(2){
  position: absolute;
  right: 16px !important;
  top: 3rem;
  color: transparent;
  background: url('/img/app/agenda/arrow-right.svg');
  background-size: 20px;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  border: none;
}
.dx-agenda .tns-controls button[disabled]:nth-child(2){
  opacity: 0.2;
}
.dx-agenda .tns-controls button[disabled]:nth-child(1){
  opacity: 0.2;
}

@media only screen and (min-width: 1200px) {
  .dx-agenda .agenda-board{
    margin-left: 4px;
  }
}

.agenda-session-description ul{
  margin: 4px 0 0 0;
  padding-left: 16px;
}

.tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>.tns-item{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-slide-active{position:relative;left:auto !important}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-autowidth{display:inline-block}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: #000000;
}

h3{
  margin: 0;
}

.dx-agenda{
  position: relative;
}

.agenda-header{
  font-size: 14px;
  margin-bottom: 30px;
}
@media only screen and (min-width: 576px) {
  .agenda-header{
    display: flex;
  }
}
.agenda-header-legend{
  border: 1px solid #4db3e6;
  padding: 5px 10px;
  border-radius: 5px;
  color: #4db3e6;
  display: flex;
}
.agenda-header-legend img{
  height: 18px;
  width: 18px;
  margin: auto 0;
}
.agenda-header-legend span{
  color: #000000;
  display: inline-block;
  margin: auto 20px auto 0;
}
.agenda-header-legend .text-highlights{
  color: #e5117e;
  display: inline-block;
  margin: auto 5px auto auto;
}
.agenda-header-legend .text-all-areas{
  color: #0d1f30;
  display: inline-block;
  margin: auto 5px auto 20px;
}
.agenda-header-spacer{
  flex-grow: 1;
  display: none;
}
@media only screen and (min-width: 576px) {
  .agenda-header-spacer{
    display: flex;
  }
}
.agenda-header-spacer hr{
  margin: auto 20px;
  width: 100%;
  height: 1px;
  border: none;
  background: #cccccc;
}

.agenda-header-zoom{
  padding: 6px 0px;
  display: flex;
}
.agenda-header-zoom span{
  margin-right: 10px;
}
.agenda-header-zoom a{
  display: flex;
  margin: auto 0;
  padding: 0 5px;
  color: #4db3e6;
  cursor: pointer;
}
.agenda-header-zoom img{
  margin: auto 5px auto 0;
}

.agenda-special{
  position: absolute;
  left: 24px;

  z-index: 1005;
}
.agenda-special-lunch img{
  transition: 0.3s all ease-in-out;
}
.agenda-special-lunch img:hover{
  transform: rotate(360deg) scale(1.5);
}

.agenda-special img{
  /*width: 24px;*/
}
.agenda-special-morning img{
  transition: 0.3s all ease-in-out;
}
.agenda-special-morning:hover img{
  transform: translate3d(25%,-50%, 30px) scale(0.75);
  opacity: 0;
}

.agenda-special-evening img{
  transition: 0.3s all ease-in-out;
  filter: saturate(50%);
}
.agenda-special-evening:hover img{
  filter: saturate(1);
  transform: scale(1.2);
}

.agenda-timeline{
  position: absolute;
  width: 100%;
}
.agenda-time{
  position: absolute;
  padding: 4px 4px 4px 0;
  font-size: 14px;
  width: calc(100% - 12px);
  border-top:1px dashed #cccccc;
  transform: translate3d(0,-4px,0);
}
.agenda-time p{
  transform: translate3d(0,-28px,0);
  display: inline-block;
  background: #ffffff;
  padding: 0 8px 0 0;
  color: #ADAFB1;
  font-size: 14px;
  line-height: 18px;
}


/*

.agenda-stage{
  min-width: calc(100% - 12px);
  margin: 0 5px;
}

@media only screen and (min-width: 576px) {
  .agenda-stage {
    min-width: calc(50% - 10px);
  }
}
@media only screen and (min-width: 992px) {
  .agenda-stage {
    min-width: calc(33% - 7px);
  }
}
@media only screen and (min-width: 1200px) {
  .agenda-stage {
    min-width: calc(20% - 10px);
  }
}
*/

.agenda-stage-title{
  position: sticky;
  top: 0px;
  z-index: 1000;
  color:#ffffff;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 96px;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 10px 0;
  flex-direction: column;
}
.agenda-stage-title h3{
  margin: auto auto 0.125rem auto;
}
.agenda-stage-title p{
  margin: 0 1rem auto 1rem;
  font-size: 13.5px;
  color: #ffffff;
}
.agenda-stage-title.stage-disruption{
  background: #4db3e6;
}
.agenda-stage-title.stage-interactive{
  background: #469309;
}
.agenda-stage-title.stage-future{
  background: #ffc014;
}
.agenda-stage-title.stage-inspiration{
  background: #e5117e;
}
.agenda-stage-title.stage-pioneerone{
  background: #5d2ebe;
}
.agenda-stage-title.stage-magenta{
  background: #ffffff;
  border: 3px solid #e5117e;
  color: #e5117e;
  height: 90px;
}
.agenda-stage-title.stage-magenta p{
  color: #e5117e;
}

.agenda-stage-title.stage-equal-esports{
  background: #ffffff;
  border: 3px solid #1CC99F;
  color: #1CC99F;
  height: 90px;
}
.agenda-stage-title.stage-equal-esports p{
  color: #1CC99F;
}
.agenda-stage-title.stage-equal-esports h3{
  color: #1CC99F;
}



.agenda-session-list{
  position: relative;
}
.agenda-session{
  position: absolute;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ffffff;
  padding: 10px;
  font-size: 14px;
  overflow: hidden;
  width: calc(100% - 22px);
  transition: 0.3s all;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.20);
}
.agenda-session::after {
  position: absolute;
  content: ' ';
  bottom: 0px;
  height: 10px;
  background: linear-gradient(to top, white, transparent);
  width: 100%;
  z-index: 10;
  left: 0;
}

.agenda-session.session-small{
  border: 1px solid #ADAFB1;
}
.agenda-session.session-small:after{
  display: none;
}

.agenda-session.session-small .agenda-session-time, .agenda-session.session-small .participants{
  display: none;
}

.agenda-session.session-small:hover .participants{
  display: block;
}

.agenda-session.session-small{
  max-height: 5px;
  min-height: 0px !important;
}

.agenda-session.session-small:hover{
  max-height: unset;
  min-height: unset !important;
}


.agenda-session.session-small .agenda-session-title{
  margin-top: -8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100%);
}
.agenda-session.session-small:hover .agenda-session-title{
  white-space: normal;
}
.agenda-session.session-small .agenda-session-title:before{
  content:'5 min.';
  border-right: 1px solid #ADAFB1;
  margin-right: 5px;
  padding-right: 5px;
  color: #ADAFB1;
  height: 12px;
  display: inline-block;
  line-height: 12px;
}

.agenda-session:hover{
  height: auto !important;
  z-index: 900;
  opacity: 1;
  box-shadow: 0px 2px 7px rgba(0,0,0,0.33);
}
.agenda-session:hover .session-info{
  opacity: 1;
}
.agenda-session-time{
  color: #ADAFB1;
  line-height: 1;
  margin: 0 0 8px 0;
}
.agenda-session-time img.agenda-all-areas{
  position: absolute;
  right: 10px;
}
.agenda-session-time img.agenda-highlights{
  position: absolute;
  right: 32px;
}

.agenda-session-title{
  overflow-wrap: break-word;
  margin: 0;
}
.agenda-session-description{
  overflow-wrap: break-word;
  margin: 0;
}
.session-info{
  opacity: 0;
  transition: 0.3s all;
}

.participants{
  margin: 12px 0 5px 0;
  height: 46px;
  overflow: hidden;
}
.participant{
  display: flex;
  margin-bottom: 3px;
  transition: 0.2s transform;
}
.participant:nth-child(2){
  transform: translate3d(0, calc(-40px - 3px),0);
  margin-left: 10px;
}
.participant:nth-child(2) .participant-info p{
  max-width: calc(100% - 10px);
}

.participant:nth-child(3){
  transform: translate3d(0, calc(-80px - 6px),0);
  margin-left: 20px;
}
.participant:nth-child(3) .participant-info p{
  max-width: calc(100% - 20px);
}

.participant:nth-child(4){
  transform: translate3d(0, calc(-120px - 9px),0);
  margin-left: 30px;
}
.participant:nth-child(4) .participant-info p{
  max-width: calc(100% - 30px);
}

.participant:nth-child(5){
  transform: translate3d(0, calc(-160px - 12px),0);
  margin-left: 40px;
}
.participant:nth-child(5) .participant-info p{
  max-width: calc(100% - 40px);
}
.agenda-session:hover .participants{
  height: auto;
}
.agenda-session:hover .participant{
  transform: none;
  margin-left: 0;
}
.agenda-session:hover .participant .participant-info p{
  max-width: 100%;
}
.participant-image{

}
.participant-image-wrapper{
  width: 40px;
  height: 40px;
  object-fit: cover;
  overflow:hidden;
  position: relative;
  border-radius: 40px;
  border: 1.5px solid #ffffff;
  background-color: #fff;
  box-sizing: border-box;
}
.participant-image-wrapper img{
  margin-top: -5px;
  max-width: 100%;
}
.participant-info{
  padding-left: 14px;
  background: #ffffff;
  width: calc(100% - 43px);
}
.participant-info p{
  margin: 0;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.participant-name{
  font-weight: bold;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 10px);
}
.participant-company{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 10px);
}

.agenda-btn{
  margin-top: 10px;
}

button,.agenda-btn{
  border: 0;
  color:#ffffff;
  font-weight: bold;
  background: #4db3e6;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  text-decoration: none !important;
}

/*
.ellipsis {
  overflow: hidden;
  position: relative;
  height: 40px;
}

.ellipsis:before {
  content: "";
  float: left;
  width: 5px;
  height: 200px;
}

.ellipsis>*:first-child {
  float: right;
  width: 100%;
  margin-left: -5px;
}

.ellipsis:after {
  content: "\2026";
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  position: absolute;
  position: absolute;
  top: 20px;
  left: 100%;
  width: 3em;
  margin-left: -3em;
  padding-right: 5px;
  text-align: right;
  background-size: 100% 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAABCAMAAACfZeZEAAAABGdBTUEAALGPC/xhBQAAAwBQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDWRdwAAAP90Uk5TgsRjMZXhS30YrvDUP3Emow1YibnM9+ggOZxrBtpRRo94gxItwLOoX/vsHdA2yGgL8+TdKUK8VFufmHSGgAQWJNc9tk+rb5KMCA8aM0iwpWV6dwP9+fXuFerm3yMs0jDOysY8wr5FTldeoWKabgEJ8RATG+IeIdsn2NUqLjQ3OgBDumC3SbRMsVKsValZplydZpZpbJOQco2KdYeEe36BDAL8/vgHBfr2CvTyDu8R7esU6RcZ5ecc4+Af3iLcJSjZ1ivT0S/PMs3LNck4x8U7wz7Bv0G9RLtHuEq1TbJQr1OtVqqnWqRdoqBhnmSbZ5mXapRtcJGOc4t2eYiFfH9AS7qYlgAAARlJREFUKM9jqK9fEGS7VNrDI2+F/nyB1Z4Fa5UKN4TbbeLY7FW0Tatkp3jp7mj7vXzl+4yrDsYoVx+JYz7mXXNSp/a0RN25JMcLPP8umzRcTZW77tNyk63tdprzXdmO+2ZdD9MFe56Y9z3LUG96mcX02n/CW71JH6Qmf8px/cw77ZvVzB+BCj8D5vxhn/vXZh6D4uzf1rN+Cc347j79q/zUL25TPrJMfG/5LvuNZP8rixeZz/mf+vU+Vut+5NL5gPOeb/sd1dZbTs03hBuvmV5JuaRyMfk849nEM7qnEk6IHI8/qn049hB35QGHiv0yZXuMdkXtYC3ebrglcqvYxoj1muvC1nDlrzJYGbpcdHHIMo2FwYv+j3QAAOBSfkZYITwUAAAAAElFTkSuQmCC);
  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(white), color-stop(50%, white));
  background: -moz-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
  background: -o-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
  background: -ms-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
}
*/

</style>
