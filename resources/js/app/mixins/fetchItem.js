export default {
  serverPrefetch() {
    return this.fetchItem()
  },
  created() {
    if (!this.ENDPOINT) {
      throw new Error('Component needs to define an endpoint!');
    }
  },
  mounted() {
    if (!this.itemData || this.itemData.locale !== this.$i18n.locale) {
      this.fetchItem();
    }
  },
  computed: {
    itemData() {
      return this.$store.getters.getItem(this.ENDPOINT);
    }
  },
  methods: {
    fetchItem() {
      const args = {
        endpoint: this.ENDPOINT,
        breadcrumbTitle: this.BREADCRUMB_TITLE ?? null,
        setAsCurrentItem: this.SET_AS_CURRENT_ITEM ?? false,
        path: this.$router.currentRoute.path ?? null,
        previewSecret: this.$router.currentRoute.query.preview_secret ?? null,
      }
      return this.$store.dispatch('fetchItem', args);
    }
  },
};
