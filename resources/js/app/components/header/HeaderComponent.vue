<template>
  <header
    ref="root"
    :class="[
      { mobile: isMobile },
      { transparent: isTransparent && !isFixed },
      { open: isOpen }
    ]"
  >
    <!-- BACKGROUND -->
    <div v-if="showBackground" class="header-lightbox"></div>
    <div v-if="showBackground" class="header-background">
      <div class="header-navi-button" @click="toggleMobileNavi">
        <svg-icon path="app/icon-navi"></svg-icon>
      </div>
    </div>

    <!-- META NAVI -->
    <div ref="metanavi" class="header-metanavi">
      <a
        href="https://geschaeftskunden.telekom.de"
        target="_blank"
        class="header-metanavi-item header-metanavi-telekom"
      >
        <svg-icon sprite="app/telekom-logo-2022"></svg-icon>
      </a>
      <router-link v-if="showMetaNavi" class="header-metanavi-item" :to="link('social')">{{
        $t('Social')
      }}</router-link>
<!--      <router-link class="header-metanavi-item" :to="link('meta.newsletter')">{{
        $t('Newsletter')
      }}</router-link>-->
      <router-link
        v-if="showMetaNavi && this.$i18n.locale === 'de'"
        class="header-metanavi-item"
        :to="link('press')"
        >{{ $t('Presse') }}</router-link
      >
    </div>

    <!-- LOGO -->
    <div ref="logo" class="header-logo">
      <router-link ref="logo" :to="link('index')">
        <svg-icon
          v-if="isTransparent && !isFixed && (!isMobile || !isOpen)"
          sprite="app/digitalx-logo-white"
        ></svg-icon>
        <svg-icon v-else sprite="app/digitalx-logo"></svg-icon>
      </router-link>
    </div>

    <!-- MAIN NAVI -->
    <div v-if="showMainNavi" ref="navi" class="header-navi">
      <!-- MAGAZINE -->
      <div class="header-navi-item">
        <router-link class="header-navi-label" :to="link('magazine')">{{
          $t('Magazin')
        }}</router-link>
        <div class="header-subnavi-button">
          <svg-icon path="app/icon-subnavi"></svg-icon>
        </div>
        <div class="header-navi-content">
          <div class="header-subnavi">
            <router-link class="header-subnavi-item" :to="link('magazine')">{{
              $t('Alle Medien')
            }}</router-link>
            <router-link
              class="header-subnavi-item"
              :to="link('magazine.article')"
              >{{ $t('Beiträge') }}</router-link
            >
            <router-link
              v-if="$i18n.locale === 'de'"
              class="header-subnavi-item"
              :to="link('magazine.podcast')"
              >{{ $t('Podcast') }}</router-link
            >
            <router-link
              class="header-subnavi-item"
              :to="link('magazine.video')"
              >{{ $t('Video') }}</router-link
            >
            <router-link
              v-if="$i18n.locale === 'de'"
              class="header-subnavi-item"
              :to="link('magazine.digi-index')"
              >{{ $t('Digitalisierungsindex') }}</router-link
            >
          </div>
          <router-link
            v-if="article"
            :to="link('magazine.article.detail', { slug: localeSlug(article), group: localeSlug(article.articles_group) })"
            class="header-navi-preview"
            :style="'background-image:url(' + article.img_list + ')'"
          >
            <div class="navi-preview-label">{{ $t('Beliebt') }}</div>
            <p class="navi-preview-copy">{{ article.title }}</p>
          </router-link>
        </div>
      </div>

      <!-- EVENTS -->
      <div class="header-navi-item">
        <router-link
          class="header-navi-label"
          :to="localeSlug(event) ? link('events.detail', { slug: localeSlug(event) }) : link('events')"
        >
          {{ $t('Event') }}
        </router-link>
        <div class="header-subnavi-button">
          <svg-icon path="app/icon-subnavi"></svg-icon>
        </div>
        <div v-if="localeSlug(event)" class="header-navi-content">
          <div class="header-subnavi">
            <router-link
              class="header-subnavi-item"
              :to="localeSlug(event) ? link('events.detail', { slug: localeSlug(event) }) : link('events')"
              >{{ $t('Übersicht') }}</router-link
            >
            <router-link
                class="header-subnavi-item"
                :to="link('events.detail.megatrends', { slug: localeSlug(event) })"
            >{{ $t('Megatrends') }}</router-link
            >
            <!-- <router-link
              class="header-subnavi-item"
              :to="link('events.detail.agenda', { slug: localeSlug(event) })"
              >{{ $t('Agenda') }}</router-link
            > -->
            <!-- <router-link
              class="header-subnavi-item"
              :to="link('events.detail.speaker', { slug: localeSlug(event) })"
              >{{ $t('Speaker') }}</router-link
            > -->
            <!-- <router-link
              class="header-subnavi-item"
              :to="link('events.detail.partner', { slug: localeSlug(event) })"
              >{{ $t('Partner / Brandhouses') }}</router-link
            > -->
            <!-- <router-link
              class="header-subnavi-item"
              :to="
                link('events.detail.participate', { slug: localeSlug(event) })
              "
              >{{ $t('Teilnehmen / Livestreams') }}</router-link
            > -->
            <router-link
              class="header-subnavi-item"
              :to="link('events.medialibrary')"
              >{{ $t('Mediathek') }}</router-link
            >
          </div>
<!--          <router-link-->
<!--            :to="link('events.detail', { slug: localeSlug(event) })"-->
<!--            class="header-navi-preview navi-preview-event"-->
<!--            :style="'background-image:url(' + event.img_list + ')'"-->
<!--          >-->
<!--            <div class="navi-preview-label">{{ $t('Nächstes Event') }}</div>-->
<!--            <img class="navi-preview-logo" alt="" :src="event.logo_dark" />-->
<!--          </router-link>-->
          <div
            class="header-navi-preview navi-preview-event"
            :style="'background-image:url(' + event.img_list + ')'"
          >
            <svg-icon class="navi-preview-logo" sprite="app/digitalx-logo-white"></svg-icon>
          </div>
        </div>
      </div>

      <!-- AWARD -->
      <div class="header-navi-item">
        <router-link
          class="header-navi-label"
          :to="link('award', { year: awards.length ? awards[0].year : null })"
          >{{ $t('Award') }}</router-link
        >
        <div class="header-subnavi-button">
          <svg-icon path="app/icon-subnavi"></svg-icon>
        </div>
        <div class="header-navi-content header-navi-content--right">
          <div class="header-subnavi">
            <router-link
              v-for="award in awards"
              :key="award.id"
              class="header-subnavi-item"
              :to="link('award', { year: award.year })"
            >
              {{ award.name }}
            </router-link>
          </div>
          <div class="header-navi-preview navi-preview-award">
            <img
              v-if="awards.length"
              class="navi-preview-logo"
              :src="awards[0].image"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- PARTNER -->
      <div class="header-navi-item">
        <router-link class="header-navi-label" :to="link('partner')">{{
          $t('Partner')
        }}</router-link>
      </div>

      <!-- INITIATIVE -->
      <div class="header-navi-item">
        <router-link class="header-navi-label" :to="link('initiative')">{{
          $t('header.about')
        }}</router-link>
      </div>
    </div>

    <!-- TOOL NAVI -->
    <div v-if="showToolNavi" ref="toolnavi" class="header-toolnavi">
      <div class="header-navi-item header-search">
        <div class="header-search-button" @click="toggleSearch">
          <svg-icon icon="app/icon-search" />
        </div>
        <div class="header-search-input">
          <search-input></search-input>
        </div>
      </div>
      <div class="header-navi-item">
        <div class="header-toolnavi-mydigitalx">
          <div>
            <router-link
              :to="link('dashboard')"
              class="mydigitalxBtn header-navi-label"
            >{{ $t('My DIGITAL X') }}</router-link>
            <client-only>
              <a
                v-if="isUserId"
                @click="logout"
                class="header-metanavi-item logoutBtn"
              >{{ $t('dashboard.logout') }}</a
              >
            </client-only>
          </div>
          <client-only>
            <img
              v-if="oidcUser"
              :class="{ mobile: isMobile }"
              class="profileimage"
              :src="oidcUser.picture"
              @error="noPicture"
              alt="profile picture"
            />
          </client-only>
        </div>
      </div>
      <language-select class="header-navi-item"></language-select>
    </div>
    <!-- SEARCH -->
    <search-input v-if="showToolNavi" v-show="isSearch" ref="search"></search-input>
    <!-- BREADCRUMB -->
    <breadcrumb v-if="showBreadcrumb" v-show="!isSearch" class="header-breadcrumb"></breadcrumb>
  </header>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    JAVASCRIPT
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
import u from 'umbrellajs'
import gsap from 'gsap'
import SimpleBar from 'simplebar'
import { IS_SSR } from '../../plugins/ssrSwitch'
import { mapActions, mapGetters } from 'vuex'
import {getAuthenticateOidcPayload, getProviderLogoutUri} from "../../services/oidc-helpers";

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'HeaderComponent',

  props: {
    layout: {
      type: String,
      default: 'default'
    },
  },

  data() {
    return {
      isTransparent: false, // if page is index or starts with video intro, show transparent header
      isMobile: false,
      isOpen: false,
      isFixed: false,
      mobileBreakpoint: undefined,
      animContent: undefined,
      simplebar: undefined,
      isSearch: false,
    }
  },

  computed: {
    ...mapGetters('oidcStore', ['oidcUser']),

    isUserId() {
      return this.$store.state.userProfile.user_id ? true : false
    },

    article() {
      if (this.$store.state.content.articles.highlights) {
        return this.$store.state.content.articles.highlights[0]
      } else if (this.$store.state.content.articles.list) {
        return this.$store.state.content.articles.list[0]
      } else {
        return undefined
      }
    },

    event() {
      return this.$store.getters.nextEvent
    },

    awards() {
      return this.$store.state.content.awards
    },

    showBackground() {
      return this.layout === 'default';
    },

    showMetaNavi() {
      return this.layout === 'default';
    },

    showMainNavi() {
      return this.layout === 'default';
    },

    showToolNavi() {
      return this.layout === 'default';
    },

    showBreadcrumb() {
      return this.layout === 'default';
    },
  },

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    if (IS_SSR === true) {
      return
    }

    // init events
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  },

  mounted() {
    this.needTransparentHeader(this.$route.name)
    this.initNavi()

    // force update of navi type
    this.onResize(undefined)
    this.onScroll()
  },

  beforeRouteLeave (to, from, next) {
    this.isSearch = false;
  },

  destroyed() {
    // remove events
    u('.header-navi-item, .header-metanavi-item').off(
      'mouseenter',
      this.onDesktopOpen
    )
    u('.header-subnavi-button').off('click', this.toggleMobileSubnavi)
    u('.header-lightbox').off(['click', 'mouseenter'], this.onClose)
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {

    ...mapActions('oidcStore', ['removeOidcUser']),

    noPicture(e) {
      e.target.src =
        'https://telekom-digitalx-content-develop.s3.amazonaws.com/dx_avatar_user_dummy.png'
    },

    logout() {
      this.removeOidcUser().then(() => {
        window.location.href = getProviderLogoutUri(this.$i18n.locale);
      })
    },

    needTransparentHeader(routeName) {
      this.isTransparent = routeName == 'de.index' || routeName == 'en.index' || this.layout == 'landingpage' ? true : false

      // set a transparent header on index page
      u('header').toggleClass('transparent', this.isTransparent)
    },

    initNavi() {
      // init events
      u('.header-navi-item, .header-metanavi-item').on(
        'mouseenter',
        this.onDesktopOpen
      )
      u('.header-subnavi-button').on('click', this.toggleMobileSubnavi)
      u('.header-lightbox').on(['click', 'mouseenter'], this.onClose)
    },

    onResize(e) {
      var ww = window.innerWidth

      if (this.layout === 'landingpage') {
        if (!this.isMobile && ww < 800) {
          this.switchToMobile()
          this.isFixed = false
          this.onScroll()
        } else if (this.isMobile && ww > this.mobileBreakpoint) {
          this.switchToDesktop()
          this.isFixed = false
          this.onScroll()
        }
      } else {
        var headerHeight = this.outerHeight(this.$refs.root)
        var maxHeaderHeight

        if(this.$route.name.replace(/\./g,'-').substr(3) === 'index') {
          // Homepage
          maxHeaderHeight = 170
        } else {
          // Other pages
          if (this.isFixed) {
            maxHeaderHeight = 143
          } else {
            maxHeaderHeight = 169
          }
        }

        // switch to mobile
        if (!this.isMobile && headerHeight > maxHeaderHeight) {
          // console.log("maxHeaderHeight", maxHeaderHeight)
          // console.log("headerHeight", headerHeight)
          this.switchToMobile()
          this.isFixed = false
          this.onScroll()
        }
        // switch to desktop
        else if (this.isMobile && ww > this.mobileBreakpoint) {
          this.switchToDesktop()
          this.isFixed = false
          this.onScroll()
        }
      }
    },

    onScroll(e) {
      var height = u('.header-background').first().offsetHeight
      var t = gsap.timeline()
      var scrollY = window.scrollY

      // set fixed desktop header
      if (!this.isMobile && scrollY > 45 && !this.isFixed) {
        t.set('header', { position: 'fixed', top: -45 })
        t.set('.header-breadcrumb', { margin: '2px 0' })
        this.isFixed = true
        this.isTransparent = false
        return
      }

      // remove fixed on desktop header
      if (!this.isMobile && scrollY <= 45 && this.isFixed) {
        t.set('header', { position: 'absolute', top: 0 })
        t.set('.header-breadcrumb', { margin: '15px 0' })
        this.isFixed = false
        this.needTransparentHeader(this.$route.name)
      }

      // set fixed mobile header
      if (this.isMobile && !this.isTransparent) {
        t.set('header', { position: 'fixed' })
        this.isFixed
        return
      }

      // set to fixed on transparent mobile header
      if (this.isMobile && scrollY > height && !this.isFixed) {
        t.set('header', { position: 'fixed' })
        t.from('header', { top: height * -1 }, { duration: 1.2, top: 0 })
        this.isFixed = true
      }

      // remove fixed on transparent mobile header
      else if (this.isMobile && scrollY <= 0 && this.isFixed) {
        t.set('header', { position: 'top', top: scrollY >= 0 ? scrollY : 0 })
        this.isFixed = false
      }
    },

    switchToMobile() {
      // update status
      this.isMobile = true
      this.mobileBreakpoint = window.innerWidth

      // Disable search
      this.isSearch = false;

      // update navi
      if (this.$refs.navi) {
        this.simplebar = new SimpleBar(this.$refs.navi, {})
      }

      // reset gsap properties
      u('header').attr('style', '')

      this.onClose()
    },

    switchToDesktop() {
      this.isMobile = false

      // reset gsap properties
      // this.$refs.root.removeAttribute('style');
      // this.$refs.metanavi.removeAttribute('style');
      // this.$refs.navi.removeAttribute('style');
      // this.$refs.toolnavi.removeAttribute('style');

      // remove mobile navi scrolling
      if (this.simplebar) {
        this.simplebar.unMount()

        // custom detroy() for simplebar
        var original = u(this.simplebar.el)
          .find('.header-navi-item')
          .clone()
        this.simplebar.el.removeAttribute('data-simplebar')
        u(this.simplebar.el)
          .find('[class*="simplebar-"]')
          .remove()
        u(this.simplebar.el).append(original)
      }
    },

    onDesktopOpen(e) {
      // only on desktop navi
      if (e && this.isMobile) {
        return
      }

      // Hide search
      this.isSearch = false;

      // get event target
      if (e.target != e.currentTarget) {
        return
      }
      var naviContent = u(e.currentTarget)
        .find('.header-navi-content')
        .first()

      // is this item already opn
      if (this.animContent && this.animContent.data == naviContent) {
        return
      }

      // show navi content
      if (this.animContent) {
        this.animContent.kill()
      }
      this.animContent = gsap.timeline({ data: naviContent })
      this.animContent.to('.header-navi-content', {
        duration: 0.2,
        display: 'none',
        opacity: 0
      })
      if (naviContent) {
        var delay =
          document.querySelector('.header-background').offsetTop != 0
            ? '+=0.1'
            : ''
        this.animContent.to(
          naviContent,
          { duration: 0.6, display: 'flex', opacity: 1, ease: 'power2' },
          delay
        )
      }

      // background offset depending of sub items
      var backgroundOffset = naviContent ? 0 : -220

      // background animation
      var t = gsap.timeline()
      t.to('.header-background', {
        duration: 0.6,
        top: backgroundOffset,
        opacity: 1,
        ease: 'power2'
      })
      t.set('.header-lightbox', { display: 'block' })

      // update status
      this.isOpen = true
    },

    onMobileOpen(e) {
      // only on mobile navi
      if (e && !this.isMobile) {
        return
      }

      // prevent scrolling of page
      gsap.set('body', { overflow: 'hidden' })

      // animation
      var t = gsap.timeline()
      t.set('header', { height: window.innerHeight })
      t.fromTo(
        '.header-metanavi, .header-navi, .header-toolnavi',
        { x: '100%' },
        { duration: 0.5, x: 0, ease: 'power2' }
      )
      t.to(
        '.header-lightbox',
        { duration: 0.5, display: 'block', opacity: 1 },
        0
      )

      // update status
      this.isOpen = true
    },

    onClose(e) {
      if (this.isMobile && e && e.type == 'mouseenter') {
        return
      } // prevent mouseenter on mobile
      else if (e && e.target != e.currentTarget) {
        return
      }

      // close navi content
      if (this.animContent) {
        this.animContent.kill()
        this.animContent = undefined
      }
      gsap.set('.header-navi-content', { display: 'none', opacity: 0 })
      u('body').attr('style', '')

      // close mobile navi content
      if (this.isMobile && this.isOpen) {
        gsap.set('.header-subnavi-button svg', { rotation: 0 })
        u('.header-navi-item')
          .attr('style', '')
          .data('open', false)
      }

      // animation
      var t = gsap.timeline()
      t.to('.header-lightbox', { duration: 0.4, display: 'none', opacity: 0 })
      if (this.isMobile) {
        t.to(
          '.header-metanavi, .header-navi, .header-toolnavi',
          { duration: 0.5, x: '100%', ease: 'power2', clearProps: true },
          0
        )
        t.set('header', { clearProps: 'height' })
      } else {
        t.to('.header-background', {
          duration: 0.4,
          top: -340,
          opacity: 0,
          ease: 'power2',
          clearProps: true
        })
      }

      // update status after animation
      t.call(() => {
        this.isOpen = false
      })
    },

    toggleMobileNavi(e) {
      !this.isOpen ? this.onMobileOpen(e) : this.onClose()
    },

    toggleMobileSubnavi(e) {
      // get status of target
      var target = u(e.target).closest('.header-navi-item')
      var svg = target.find('.header-subnavi-button svg')
      var isOpen = target.data('open') == 'true' ? true : false

      // animation
      var t = gsap.timeline()
      gsap.set('.header-navi-content', { display: 'block', opacity: 1 })
      t.to(target.first(), {
        duration: 0.5,
        height: isOpen ? 50 : 'auto',
        ease: 'power2'
      })
      t.to(
        svg.first(),
        { duration: 0.5, rotation: isOpen ? 0 : 180, ease: 'power2' },
        0
      )

      // update status
      target.data('open', !isOpen)
    },

    toggleSearch() {
      this.isSearch = !this.isSearch;
      if (this.isSearch) {
        this.onClose(undefined);
        this.$refs.search.focus();
      }
    },

    //Prevent Dashboard,  redirect to login
    ...mapActions('oidcStore', ['authenticateOidc']),

    signIn() {
      try {
        this.authenticateOidc(getAuthenticateOidcPayload(
          this.$i18n.locale,
          this.$store.getters.env.origin,
          this.$router.currentRoute.path
        ))
      } catch (e) {
        console.error(e)
      }
    }
  },

  /////////////////////////////////
  // WATCH
  /////////////////////////////////

  watch: {
    $route(to, from) {
      this.needTransparentHeader(to.name)
      this.onClose(undefined)
      this.isSearch = false
    }
  }
} // end export
</script>

<i18n>
{
	"de": {
		"dashboard.logout": "Abmelden"
	},
	"en": {
		"dashboard.logout": "Logout"
	}
}
</i18n>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<!--
@todo: style-loader in node not universal - use vue-style-loader instead
@see: https://ssr.vuejs.org/guide/css.html#enabling-css-extraction -->
<!--	<style>-->
<!--		.testing-oidc {-->
<!--			display: block;-->
<!--		}-->
<!--	</style>-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
