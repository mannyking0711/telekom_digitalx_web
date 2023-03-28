/**
 * This plugin exposes the route object of the previous route for Vue Router under this.$router.referer.
 */
export default function install(Vue, options) {
    Vue.mixin({
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                if (vm.$router) {
                    vm.$router.referer = from;
                }
            });
        },

        beforeRouteUpdate(to, from, next) {
            if (this.$router) {
                this.$router.referer = from;
            }
            next();
        },
    });
}
