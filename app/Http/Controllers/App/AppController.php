<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class AppController extends Controller
{
    public function showIndex(Request $request)
    {
        // Environment for both client and server (SSR)
        $env = $this->getEnvVars();

        // Fetch SSR content via a Node server
        $ssr = ssr('js/server/entry-server.js')
            ->enabled($this->ssrEnabled())
            ->fallback('<div id="app"></div>')
            ->context(['env' => $env])
            ->render();

        // DX155: DEV // Magazin / Weiterleitung bei EN Inhalten n/a
        if (isset($ssr['notFound']) && $ssr['notFound']) {
            return response()->view('app.pages.404', [], 404);
        }

        // DX112: DEV // Magazin / Weiterleitung bei EN Inhalten n/a.
        if (isset($ssr['redirect']) && $ssr['redirect']) {
            return redirect($env['origin'] . $ssr['redirect']);
        }

        // Don't cache dev domains
        $noindex = $this->noindex($request);
        $headers = $noindex ? [] : ['Cache-Control' => 'max-age=6000, public'];

        // Data needed in the template
        $data = array(
            'env' => $env,
            'ssr' => $ssr,
            'noindex' => $noindex,
        );

        // The result of the SSR might need a different status code (e.g. 404)
        $status = isset($ssr['statusCode']) ? $ssr['statusCode'] : 200;

        return response()->view('app.layout.app', $data, $status, $headers);
    }



    /*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

    /**
     * Disable SSR for certain urls
     */
    private function ssrEnabled()
    {
        // Disabling SSR via .env has precedence
        if (!config('ssr.enabled')) {
            return false;
        }

        // Also check following urls if SSR must be disabled
        if ($uri = strtolower(parse_url(@$_SERVER['REQUEST_URI'], PHP_URL_PATH))) {
            $patterns = [
                '/^\/[a-z]{2}\/my-digital-x$/',
                '/^\/[a-z]{2}\/callback$/',
                '/^\/[a-z]{2}\/popup-callback$/',
                '/^\/[a-z]{2}\/callback-error$/',
                '/^\/callback$/',
                '/^\/popup-callback$/',
                '/^\/callback-error$/',
                '/^\/[a-z]{2}\/test\/cookies$/',
                '/^\/[a-z]{2}\/test\/user$/',
                '/^\/[a-z]{2}\/test\/protected$/',
            ];
            foreach ($patterns as $pattern) {
                if (preg_match($pattern, $uri)) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Check domain if 'noindex' must be active
     */
    private function noindex(Request $request)
    {
        if ($test = $request->getHost()) {
            $patterns = [
                '/^www.digital-x.eu$/'
            ];
            foreach ($patterns as $pattern) {
                if (preg_match($pattern, $test)) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Checks if request is https
     *
     * @param Request $request
     * @return bool
     */
    private function requestIsSecure(Request $request): bool
    {
        return ($request->getPort() == '443' || $request->header('x-forwarded-port') == '443');
    }

    /**
     * Returns environment variables for both client and server (SSR)
     *
     * @return array
     */
    private function getEnvVars()
    {
        return [
            'active_locale' => app()->getLocale(),
            'available_locales' => json_encode(config('app.available_locales')),
            'fallback_locale' => config('app.fallback_locale'),
            'base_url' => parse_url(config('app.env') == 'testing' ? 'http://localhost/starter/laravel-default/public/' : config('app.url'))['path'],
            'content_url' => config('app.content_url'),
            'origin' => ($this->requestIsSecure(request())) ? secure_url('/') : URL::to('/'),
            'app_name' => config('app.name'),
            'app_cookie_name' => config('cookie-consent.cookie_name'),
            'app_cookie_expires' => config('cookie-consent.cookie_lifetime'),
            'app_cookie_domain' => config('session.domain') ?? request()->getHost(),
        ];
    }

}
