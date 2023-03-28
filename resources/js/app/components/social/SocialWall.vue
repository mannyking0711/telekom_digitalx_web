<template>
    <div ref="social">
        <iframe
            :id="f_frameid"
            :src="this.f_eventurl + '?' + this.f_frameid + '&amp;allowmessaging'"
            class="flypsiteFrame"
            frameborder="0"
            height="1200px"
            width="100%"
            scrolling="no"
            seamless="seamless"
            webkitallowfullscreen="webkitAllowFullScreen"
            mozallowfullscreen="mozallowfullscreen"
            allowfullscreen="allowfullscreen"
            allowtransparency="true"
            title="DIGITAL X"
        ></iframe>
    </div>
</template>

<script>
import { IS_SSR } from "../../plugins/ssrSwitch";

export default {
	name: 'SocialWall',
    props: {
        f_frameid: String
    },
    data() {
        return {
            f_eventurl: "https://live.flyp.tv/telekom/digitalx/index.html",
            f_body: undefined,
            f_html: undefined,
            f_allowed: false,
            f_orientat: 0,
            noautoload: true
        };
    },
    mounted() {
		if (!IS_SSR) {
            this.f_body = document.body;
            this.f_html = document.documentElement;

            window.addEventListener('message', this.onmessage);
            window.addEventListener("orientationchange", this.onorientationchange, false);
            window.addEventListener('scroll', this.onscroll);

            document.getElementById(this.f_frameid).style.height = '1200px';
            document.getElementById(this.f_frameid).contentWindow.postMessage('load-more', '*');
        }
    },

    destroyed() {
		if (!IS_SSR) {
            window.removeEventListener('message', this.onmessage);
            window.removeEventListener('orientationchange', this.onorientationchange);
            window.removeEventListener('scroll', this.onscroll);
        }
    },

    methods: {
        onscroll: function (e) {
            var f_height = Math.max( this.f_body.scrollHeight, this.f_body.offsetHeight, this.f_html.clientHeight, this.f_html.scrollHeight, this.f_html.offsetHeight );
            document.getElementById(this.f_frameid).contentWindow.postMessage('frame-top:' + document.getElementById(this.f_frameid).getBoundingClientRect().top, '*');
            if (window.pageYOffset > f_height - window.innerHeight - 130 && this.f_allowed) {
                if (!this.noautoload) {
                    document.getElementById(this.f_frameid).contentWindow.postMessage('load-more', '*');
                    this.f_allowed = false;
                }
            }
        },
        onorientationchange: function() {
            // reload iframe
            var el = document.getElementById(this.f_frameid);
            this.f_orientat = (this.f_orientat + 1) % 2;
            el.setAttribute('src', this.f_eventurl +'?'+ this.f_frameid +'&allowmessaging&' + this.f_orientat);
            window.location.hash = '#top';
            window.scroll(0,0);
        },
        onmessage: function(e) {
            var message = e.data;
            if (message && (typeof message === 'string')) {
                var marr = message.split(':');
                var el = document.getElementById(this.f_frameid);
                el.style.height = (marr[1]) + "px";
                this.f_allowed = true;
            } else {
                var el = document.getElementById(this.f_frameid);
                el.style.height = "1200px";
                this.f_allowed = true;
            }
        }
    }
}
</script>
