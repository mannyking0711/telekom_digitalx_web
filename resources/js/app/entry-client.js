import createApp from './App'

const {app, router, store} = createApp({url: '', env: window.env})

router.onReady(() => {
    app.$mount('#app')
})
