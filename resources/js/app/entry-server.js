import createApp from './App'
import renderVueComponentToString from 'vue-server-renderer/basic'

const {app, router} = createApp(context)

// Wait for the router to be ready
new Promise((resolve, reject) => {
    router.push(context.url)
    router.onReady(() => {
        if (router.getMatchedComponents().find(c => c.name === 'PageError')) {
            app.statusCode = 404;
        }

        resolve(app);
    }, reject)
})
    .then(app => {
        renderVueComponentToString(app, (err, res) => {
            if (err) {
                throw new Error(err)
            }

            let state = app.$store.state;

            // Simplifies access to state variables in blade
            const notFound = state.notFound ?? false;
            const redirect = state.redirect ?? false;

            // state.oidcStore is not created server-side, so we created a stub here for client-side
            state['oidcStore'] = {
                access_token: null,
                id_token: null,
                refresh_token: null,
                user: null,
                scopes: null,
                is_checked: false,
                events_are_bound: false,
                error: null
            };
            state = JSON.stringify(state);

            // Return meta data for use in app.blade.php
            const meta = app.$meta().inject();
            const vueMeta = {
                htmlAttrs: (typeof meta.htmlAttrs !== 'undefined' && meta.htmlAttrs) ? meta.htmlAttrs.text(true): '',
                headAttrs: (typeof meta.headAttrs !== 'undefined' && meta.headAttrs) ? meta.headAttrs.text(): '',
                head: (typeof meta.head !== 'undefined' && meta.head) ? meta.head(true): '',
                bodyAttrs: (typeof meta.bodyAttrs !== 'undefined' && meta.bodyAttrs) ? meta.bodyAttrs.text(): '',
                bodyPrepend: (typeof meta.bodyPrepend !== 'undefined' && meta.bodyPrepend) ? meta.bodyPrepend(true): '',
                bodyAppend: (typeof meta.bodyAppend !== 'undefined' && meta.bodyAppend) ? meta.bodyAppend(true): '',
            };

            dispatch({
                html: res + `<script>window.__INITIAL_STATE__ = ${state}</script>\n\r`,
                vueMeta,
                statusCode: app.statusCode,
                notFound,
                redirect,
            });
        });
    });
