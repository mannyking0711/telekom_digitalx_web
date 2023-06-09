/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	const mix 					= require('laravel-mix');
	const LiveReloadPlugin 		= require('webpack-livereload-plugin');



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	WEBPACK
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	/////////////////////////////////
	// CONFIG
	/////////////////////////////////

	mix.webpackConfig({

	});


	/////////////////////////////////
	// OPTIONS
	/////////////////////////////////

	mix.options({
		processCssUrls: false
	});


	/////////////////////////////////
	// DEBUG
	/////////////////////////////////

	// only in development environment
	if (!mix.inProduction()) {
		mix.webpackConfig({	plugins: [ new LiveReloadPlugin() ]	});
	}



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	CSS
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	/*
	*	Extract all css libraries into one file for caching.
	*/

	mix.styles([
		'node_modules/plyr/dist/plyr.css',
		'node_modules/tiny-slider/dist/tiny-slider.css',
		'node_modules/simplebar/dist/simplebar.css'
	], 'public/css/vendor.css');


	mix.sass('resources/sass/app/app.scss', 'public/css');
	mix.sass('resources/sass/backend/backend.scss', 'public/css');

