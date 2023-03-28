<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    HTML
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<template>

	<div ref="root" class="header-navi-item language-select">

		<div :class="['language-select-item',{'language-select-active':currentLanguage == 'de'}]" @click="changeLanguage('de')">DE</div>
		<div class="language-select-item language-select-separator"></div>
		<div :class="['language-select-item',{'language-select-active':currentLanguage == 'en'}]" @click="changeLanguage('en')">EN</div>

	</div>

</template>



<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


	<script>

		import VueRouter from 'vue-router';
		const { isNavigationFailure, NavigationFailureType } = VueRouter;


		export default {

			/////////////////////////////////
			// INIT
			/////////////////////////////////

			name: 'LanguageSelect',

			props: {

			},

			data() {

				return {
					windowLocales: this.$store.getters.env.available_locales,
				};
			},

			computed: {

				currentLanguage() 		{ return this.$i18n.locale; },
				availableLanguages() 	{ return this.$store.getters.env.available_locales }
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

				changeLanguage(newLangKey) {

					// skip if already active language
					if(this.$i18n.locale == newLangKey) { return; }

          // get current name with new lang prefix
          let routeName = newLangKey + this.$route.name.replace(/^(de|en)./i,'.');

          // DX112: DEV // Magazin / Weiterleitung bei EN Inhalten n/a
          // Ausgangsszenario: User klickt auf Website auf den "EN" Umschalter, um die Seite auf Englisch anzeigen
          // zu lassen. Der gewünschte Inhalt existiert aber nur auf Deutsch.
          // Ziel: Der User soll in diesem Fall automatisch auf die nächsthöhere Navigationsebene ge-reroutet werden,
          // die ihm dann auf Englisch angezeigt wird. Das ist insbesondere relevant für alle Artikel, Podcasts und
          // Videos, die teilweise eben ausschließlich auf DE existieren. Hier wird also, je nachdem, ob es Artikel,
          // Podcast oder Video ist, für Artikel auf https://www.digital-x.eu/en/magazine/article und für Video auf
          // https://www.digital-x.eu/en/magazine/video verlinkt.
          // Da es keine Podcasts in EN Sprache gibt (zumindest nicht für DIGITAL X), ist die nächsthöhere Ebene hier
          // dementsprechend nicht die Podcast-Übersichtsseite, da es die ja auch nicht auf EN gibt,
          // sondern: https://www.digital-x.eu/en/magazine
          if (newLangKey !== 'de') {
            if (/\.magazine\.digi-index.*$/.test(this.$route.name)) {
              // Special handling for digi-index*
              routeName = this.$route.name.replace(/\.digi-index.*$/i,'');
            } else if (/\.detail$/.test(this.$route.name)) {
              // Redirect if item has no translation
              let item = this.$store.getters.getCurrentItem();
              if (item && (item.translation === false)) {
                routeName = routeName.replace('.detail','');
                // Special handling for podcast
                routeName = routeName.replace('.podcast','');
                // Special handling for digi-index
                routeName = routeName.replace('.digi-index','');
              }
            } else if (/\.magazine.podcast$/.test(this.$route.name)) {
              // Special handling for podcast
              routeName = routeName.replace('.podcast','');
            }
          }

          // update current route with new language
          this.$i18n.locale = newLangKey;
          document.querySelector('html').setAttribute('lang', newLangKey);
          this.$router
            .push({ name: routeName, params: { lang: newLangKey, langChanged: true } })
            .catch((e) => {
              // We might redirect to a different route based on this language change.
              // For example to update the de_slug to the en_slug.
              // This will cause the router to throw an error as it can't fulfill the
              // original navigation.
              // As this is redirect is intentional we catch that specific error.
              // Other errors will still be thrown.
              if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
                Promise.reject(e)
              }
            });
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


