<template></template>

<script>
import { mapActions } from 'vuex'
import { getAuthenticateOidcPayload } from '../../services/oidc-helpers'

export default {
  /////////////////////////////////
  // INIT
  /////////////////////////////////

  name: 'LoginRedirect',

  props: {},

  data() {
    return {}
  },

  computed: {},

  /////////////////////////////////
  // EVENTS
  /////////////////////////////////

  created() {
    this.signIn()
  },

  /////////////////////////////////
  // METHODS
  /////////////////////////////////

  methods: {
    ...mapActions('oidcStore', ['authenticateOidc']),

    signIn() {
      try {
        this.authenticateOidc(
          getAuthenticateOidcPayload(
            this.$i18n.locale,
            this.$store.getters.env.origin,
            this.$router.currentRoute.path
          )
        )
      } catch (e) {
        console.error(e)
      }
    },
  },
} // end export
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    CSS
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss"></style>

<style lang="scss" scoped></style>
