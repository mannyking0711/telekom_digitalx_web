<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<footer>

    <award-partners
      v-if="awardPartners && awardPartners.enabled && awardPartners.logos.length"
      :title="awardPartners.title"
      :logos="awardPartners.logos"
      class="footer-top">
    </award-partners>

    <div class="footer-bottom">
      <div class="container-fluid">
        <router-link class="footer-logo" :to="link('index')">
          <svg-icon sprite="app/digitalx-logo"></svg-icon>
        </router-link>
      </div>

      <div class="footer-content">
        <div class="container-fluid">

          <div class="row">

            <!-- TEASER -->
            <div class="col-lg-3 footer-teaser" v-if="showPodcastTeaser && podcast">
              <h3 class="footer-teaser-type">Podcast</h3>
              <router-link class="footer-teaser-image" :to="link('magazine.podcast.detail',{group: localeSlug(podcast.podcast_group), slug: localeSlug(podcast)})">
                <img :src="podcast.img_list" alt="" />
              </router-link>
              <div class="footer-teaser-content">
                <router-link :to="link('magazine.podcast.detail',{group: localeSlug(podcast.podcast_group), slug: localeSlug(podcast)})" class="footer-teaser-icon">
                  <svg-icon icon="app/icon-play"></svg-icon>
                </router-link>
                <p class="footer-teaser-copy">
                  <span class="footer-podcast-title">{{ podcast.podcast_group.title }} #{{ podcast.episode_number }} {{ podcast.title }}</span>
                  <br>
                  {{ podcast.description }}
                </p>
              </div>
            </div>
            <div class="col-lg-3 footer-teaser" v-else-if="video">
              <p class="footer-teaser-type">Video</p>
              <router-link class="footer-teaser-image" :to="link('magazine.video.detail',{slug: localeSlug(video)})">
                <img :src="video.img_list" alt="" />
              </router-link>
              <div class="footer-teaser-content">
                <router-link :to="link('magazine.video.detail',{slug: localeSlug(video)})" class="footer-teaser-icon">
                  <svg-icon icon="app/icon-play"></svg-icon>
                </router-link>
                <p class="footer-teaser-copy">
                  <span class="footer-podcast-title">{{ video.title }}</span>
                </p>
              </div>
            </div>

            <!-- NEWSLETTER -->
  <!--          <div class="footer-newsletter">-->
  <!--            <h3>{{ $t('footer.newsletterHeadline') }}</h3>-->
  <!--            <p class="footer-newsletter-copy">{{ $t('footer.newsletterText') }}</p>-->
  <!--            <router-link class="btn blue icon-left" :to="link('meta.newsletter')">{{ $t('footer.newsletterButton') }}</router-link>-->
  <!--          </div>-->

            <!-- SOCIAL MEDIA -->
            <div class="col-lg-6 footer-social">
              <h3>Social Media</h3>
              <a class="footer-social-link" href="https://www.linkedin.com/showcase/telekom-business/" target="_blank"><svg-icon icon="app/icon-linkedin"></svg-icon></a>
              <a class="footer-social-link" href="https://twitter.com/digimittelstand" target="_blank"><svg-icon icon="app/icon-twitter"></svg-icon></a>
              <a class="footer-social-link" href="https://www.facebook.com/DigitalXMagazin" target="_blank"><svg-icon icon="app/icon-facebook"></svg-icon></a>
              <a class="footer-social-link" href="https://www.youtube.com/channel/UC8x4BJWPde2uE4-LsFUG8oA" target="_blank"><svg-icon icon="app/icon-youtube"></svg-icon></a>
              <a class="footer-social-link" href="https://www.instagram.com/deutschetelekom/" target="_blank"><svg-icon icon="app/icon-instagram"></svg-icon></a>
            </div>

            <!-- NAVI -->
            <div class="col-lg-3 footer-navi">
              <h3>Menü</h3>
  <!--            <router-link class="footer-navi-item" :to="link('meta.newsletter')">{{ $t('Newsletter') }}</router-link>-->
              <router-link class="footer-navi-item" :to="link('meta.faq')">{{ $t('FAQ') }}</router-link>
              <router-link class="footer-navi-item" :to="link('meta.contact')">{{ $t('Kontakt') }}</router-link>
              <router-link class="footer-navi-item" :to="link('meta.privacy')">{{ $t('Datenschutz') }}</router-link>
              <div class="footer-navi-item" @click="configureAppCookie">{{ $t('Cookie-Einstellungen') }}</div>
              <router-link class="footer-navi-item" :to="link('meta.imprint')">{{ $t('Impressum') }}</router-link>
              <router-link class="footer-navi-item" :to="link('meta.terms')">{{ $t('AGB') }}</router-link>
              <a v-if="!isLocalized()" :href="$t('footer.linkSitemap')" class="footer-navi-item" >{{ $t('Sitemap') }}</a>
            </div>

          </div>

        </div>
      </div>
    </div>
	</footer>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>


		import {Mixins} from "../../../components/Mixins";

    export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'FooterComponent',

      mixins: [Mixins],

			props: {

			},

			data() {
				return {

				};
			},

			computed: {
				showPodcastTeaser() {
					if (!this.$route || !this.$route.name || (this.$i18n.locale === 'en')) return false;
					return this.$route.name.indexOf('podcast.detail') === -1;
				},
				video() {
					if(this.$store.state.content.videos.highlights.length) {
						return this.$store.state.content.videos.highlights[0];
					}
					else if(this.$store.state.content.videos.list.length) {
						return this.$store.state.content.videos.list[0];
					}
					else {
						return undefined;
					}
				},
				video_group() {
					return this.$store.getters.getVideoGroupByVideoId(this.video.videos_group.id);
				},
				podcast() {
					if(this.$store.state.content.podcasts.highlights.length) {
						return this.$store.state.content.podcasts.highlights[0];
					}
					else if(this.$store.state.content.podcasts.list.length) {
						return this.$store.state.content.podcasts.list[0];
					}
					else {
						return undefined;
					}
				},
				podcastGroup() {
					return this.$store.getters.getPodcastGroupByPodcastId(this.podcast.podcast_group.id);
				},
				awardPartners() {
					return this.$store.state.content.awardPartners;
				}
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
			  isLocalized() {
			    return this.$i18n.locale !== 'de';
        },
			}

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
				"footer.newsletterHeadline": "Bleiben Sie dran",
				"footer.newsletterText": "Abonnieren Sie jetzt unseren DIGITAL X Newsletter und bleiben Sie auf dem Laufenden.",
				"footer.newsletterButton": "NEWSLETTER BESTELLEN",
				"footer.linkSitemap": "/de/sitemap.html"
			},
      "en": {
        "footer.newsletterHeadline": "Keep on it",
        "footer.newsletterText": "Sign up for our DIGITAL X newsletter and stay in the loop.",
        "footer.newsletterButton": "SUBSCRIBE TO NEWSLETTER",
        "footer.linkSitemap": "/en/sitemap.html"
      }
		}
	</i18n>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<style lang="scss">

	</style>


	<style lang="scss" scoped>

	</style>


