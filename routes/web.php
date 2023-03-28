<?php

use App\Http\Controllers\App\AppController;
use App\Http\Controllers\App\ContactMetaController;
use App\Http\Controllers\App\ContactSalesController;
use App\Http\Controllers\App\SitemapController;
use Illuminate\Support\Facades\Route;

// app routes
// Contact Meta - the contact form at de/kontakt or en/contact sends the formdata to this route
Route::post('/contact-meta', [ContactMetaController::class, 'store'])->name('contact-meta');

// Contact Sales - the contact form at de/beratung or en/contact sends the formdata to this route
Route::post('/contact-sales', [ContactSalesController::class, 'store'])->name('contact-sales');

// Sitemap
Route::controller(SitemapController::class)->group(function () {
    Route::get('/sitemap.html', 'index')->name('sitemap');
    Route::get('/de/sitemap.html', 'de')->name('sitemap-de');
    Route::get('/en/sitemap.html', 'en')->name('sitemap-en');
});

// Force all routes to Vue
Route::get('/{vue_capture?}', [AppController::class, 'showIndex'])->where('vue_capture', '[\/\w\.-]*')->name('index');
