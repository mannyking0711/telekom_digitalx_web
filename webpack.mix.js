/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	INCLUDES
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	const mix 					= require('laravel-mix');
    const webpack               = require("webpack");
	const LiveReloadPlugin 		= require('webpack-livereload-plugin');
	const SVGSpritemapPlugin 	= require('svg-spritemap-webpack-plugin');
	const BundleAnalyzerPlugin 	= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    const MixMergeManifest 	    = require('laravel-mix-merge-manifest')


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	WEBPACK
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	/////////////////////////////////
	// CONFIG
	/////////////////////////////////

	mix.webpackConfig({

		plugins: [

			// combine app svgs to on svg sprite with <symbol>
			new SVGSpritemapPlugin('./resources/svg/app/**/icon-*.svg',{
				output: {
					filename: './svg/app/sprite-icons.svg',
					svgo: {cleanupIDs: false},							// change SvgOptimizer options
					chunk: {keep: true}
				}
			}),

			// combine backend svgs to on svg sprite with <symbol>
			new SVGSpritemapPlugin('./resources/svg/backend/**/icon-*.svg',{
				output: {
					filename: './svg/backend/sprite-icons.svg',
					svgo: {cleanupIDs: false},							// change SvgOptimizer options
					chunk: {keep: true}
				}
			}),

			// combine app svgs to on svg sprite with <symbol>
			new SVGSpritemapPlugin('./resources/svg/app/**/!(icon-)*.svg',{
				output: {
					filename: './svg/app/sprite.svg',
					svgo: {cleanupIDs: false},							// change SvgOptimizer options
					chunk: {keep: true}
				}
			}),

			// combine backend svgs to on svg sprite with <symbol>
			new SVGSpritemapPlugin('./resources/svg/backend/**/!(icon-)*.svg',{
				output: {
					filename: './svg/backend/sprite.svg',
					svgo: {cleanupIDs: false},							// change SvgOptimizer options
					chunk: {keep: true}
				}
			}),

			// webpack bundle analyzer
			// new BundleAnalyzerPlugin({}),
		],

		module: {
			rules: [

				// use <i18n> in single file component
				{
					resourceQuery: /blockType=i18n/,
					type: 'javascript/auto',
					loader: '@intlify/vue-i18n-loader',
				}
			]
		},

		resolve: {
			alias: {
				'@resources': __dirname + '/resources',
				'@components': __dirname + '/resources/js/components'
			}
		}

	});


	/////////////////////////////////
	// DEBUG
	/////////////////////////////////

	// only in development environment
	if (!mix.inProduction()) {

		mix.sourceMaps();
		//mix.webpackConfig({	plugins: [ new LiveReloadPlugin() ]	});
	}



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	STATIC ASSETS
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	//mix.setResourceRoot('../');
	//mix.copyDirectory('resources/assets/svg', 'public/svg');



/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	JAVASCRIPT
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


	/**
	*	Extract all js libraries into one file for caching.
	*/

// DX107 ToDo: build von vendor.js wird erstmal deaktiviert.
// Muss später wieder eingeführt werden.
// Macht aber beim Debuggen Probleme.
	// mix.extract([
	// 	'vue',						// 96kb
	// 	'vue-router',				// 27kb
	// 	'vue-axios',				// 0.6kb
	// 	'vue-meta',					// 20kb
	// 	'vue-i18n',					// 25kb
	// 	'vue-inline-svg',			// 1.6kb
	// 	'vuex',						// 11kb
	// 	'axios',					// 15kb
	// 	'gsap',						// 58kb
	// 	'umbrellajs',				// 8.1kb
	// 	'intersection-observer',	// 8.6kb
	// 	'svg4everybody',			// 1.9kb
	// 	'vanilla-lazyload',			// 5.4kb
	// 	'js-cookie',				// 1.7kb
    //
	// 	// [OPTIONAL]
	// 	'tiny-slider',				// 63kb - required by Slider.vue
	// 	'plyr',						// 117kb – required by VideoPlayer.vue
	// 	//'@websanova/vue-auth',	// 13kb – if required by backend and frontend
	// 	//'sortablejs',
	// 	'simplebar',				// 20kb
	// 	'countdown',
	// 	'fuse.js'
	// ]);

    // SSR builds for entry-server.js and client-server.js
// Split build for entry-server.js and client-server.js (SSR)
    if (process.env.npm_config_section === 'server') {

        // Build entry-server.js

        mix.js('resources/js/app/entry-server.js', 'public/js/server').vue()
            .webpackConfig({

                target: 'node',
                // This tells the server bundle to use Node-style exports
                output: {
                    libraryTarget: 'commonjs2'
                },

                // Prevent code-splitting for server-build
                plugins: [
                    new webpack.optimize.LimitChunkCountPlugin({
                        maxChunks: 1,
                    }),
                ],
            })
            // merge manifest is a package for merging manifests,
            // otherwise they'll get overwritten by each other
            // https://github.com/kabbouchi/laravel-mix-merge-manifest
            .mergeManifest()
            .version();

    } else {

        // Assume to build entry-client.js

        mix.js('resources/js/app/entry-client.js', 'public/js/client')
			.vue({
				processCssUrls: false,
				version: 2
			})
            .webpackConfig({

                target: 'web',

                // Rewrite pathes for lazy loaded js chunks via manifest.js - available with webpack 5
                output: {
                    publicPath: process.env.MIX_URL,
                    chunkFilename: 'js/[name].js?id=[chunkhash]',
                },
            })
            .mergeManifest()
            .version();

    }



	// Cache Busting in production mode
	if (mix.inProduction()) {
		mix.version();
	}
