<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// get locale from http header

$locale = request()->headers->get('accept-language');

if ($locale) {
    $locale = explode('-', $locale)[0];
}  // 'de-de' to 'de'

// check for supported language
$available_locales = Config::get('app.available_locales');
$fallback_locale = Config::get('app.fallback_locale');
if ($locale != $fallback_locale && in_array($locale, $available_locales)) {
    App::setLocale($locale);
}
