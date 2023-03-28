<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;

class SetLocale
{
    /**
     * Sets the locale based on the current url.
     *
     * Diese Middleware ist notwendig. Laravel setzt normalerweise locale auf die im Browser
     * eingestellt Sprache (accept-language). Siehe auch routes/api.php.
     *
     * In diesem Projekt soll die Sprache aber auf Basis der URL Pfade gesetzt werden.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
      $urlSegment = request()->segment(1);

      if (in_array($urlSegment, Config::get('app.available_locales', []))) {
        App::setLocale($urlSegment);
      } else {
        App::setLocale(Config::get('app.fallback_locale', 'de'));
      }

      return $next($request);
    }
}
