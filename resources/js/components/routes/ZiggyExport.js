    var Ziggy = {
        namedRoutes: {"api.login":{"uri":"api\/login","methods":["POST"],"domain":null},"api.logout":{"uri":"api\/logout","methods":["POST"],"domain":null},"api.refresh":{"uri":"api\/refresh","methods":["GET","HEAD"],"domain":null},"api.password.reset":{"uri":"api\/password\/reset","methods":["POST"],"domain":null},"api.password.reset.confirm":{"uri":"api\/password\/reset\/confirm","methods":["POST"],"domain":null},"api.user":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null},"api.user.save":{"uri":"api\/user\/save","methods":["POST"],"domain":null},"api.user.password":{"uri":"api\/user\/password","methods":["POST"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"backend":{"uri":"backend\/{vue_capture?}","methods":["GET","HEAD"],"domain":null},"index":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"contact-meta":{"uri":"contact-meta","methods":["POST"],"domain":null},"contact-sales":{"uri":"contact-sales","methods":["POST"],"domain":null},"vue":{"uri":"{vue_capture?}","methods":["GET","HEAD"],"domain":null}},
        baseUrl: 'http://tk-digital-x-web.local:8000/',
        baseProtocol: 'http',
        baseDomain: 'tk-digital-x-web.local',
        basePort: 8000,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
