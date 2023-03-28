<!DOCTYPE html>
<?php

	// force https on private network http connection between aws load balancer and ec2 instance.
	//$useSecure = env('FORCE_HTTPS', true) == true ? true : false;
	$useSecure = true;

	$version = '2104252246';

	// Meta DE+EN
	$metaTags = '{
		"TitleDe" : "Digitalisierung in der Praxis – die DIGITAL X-Community",
		"TitleEn" : "Digitization in practice - the DIGITAL X community",
		"DescriptionDe" : "Die DIGITAL X ist die Antwort auf die Frage „Was bedeutet Digitalisierung?” Im Community-Netzwerk finden Unternehmen und Experten zusammen und erhalten konkrete Lösungen und Impulse auf Ihrem Weg in die Digitalisierung.",
		"DescriptionEn" : "DIGITAL X is the answer to the question of “What does digitalization mean?” The community network brings businesses and experts together, offering them concrete solutions and ideas as they go digital.",
		"ImageDe" : "https://telekom-digitalx-content-develop.s3.amazonaws.com/digital-x-sc-social.jpg",
		"ImageEn" : "https://telekom-digitalx-content-develop.s3.amazonaws.com/digital-x-sc-social.jpg"
	}';
	$meta = json_decode($metaTags);
?>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

	<head>
		<!-- META -->
        <?php if (isset($ssr['vueMeta']) && isset($ssr['vueMeta']['head'])): ?>
            <?php /* Render META from SSR */ ?>
            {!! $ssr['vueMeta']['head'] !!}
        <?php else: ?>
            <?php /* Fallback */ ?>
            <?php if ( app()->getLocale() == 'de' ): ?>
                <meta name="description" content="<?php echo $meta->DescriptionDe; ?>">
                <meta property="og:description" content="<?php echo $meta->DescriptionDe; ?>">
                <meta property="og:site_name" content="<?php echo $meta->TitleDe; ?>">
                <meta property="og:title" content="<?php echo $meta->TitleDe; ?>">
                <meta property="og:image" content="<?php echo $meta->ImageDe; ?>">
                <meta property="twitter:title" content="<?php echo $meta->TitleDe; ?>">
                <meta property="twitter:description" content="<?php echo $meta->DescriptionDe; ?>">
                <meta property="twitter:image" content="<?php echo $meta->ImageDe; ?>">
            <?php else: ?>
                <meta name="description" content="<?php echo $meta->DescriptionEn; ?>">
                <meta property="og:description" content="<?php echo $meta->DescriptionEn; ?>">
                <meta property="og:site_name" content="<?php echo $meta->TitleEn; ?>">
                <meta property="og:title" content="<?php echo $meta->TitleEn; ?>">
                <meta property="og:image" content="<?php echo $meta->ImageEn; ?>">
                <meta property="twitter:title" content="<?php echo $meta->TitleEn; ?>">
                <meta property="twitter:description" content="<?php echo $meta->DescriptionEn; ?>">
                <meta property="twitter:image" content="<?php echo $meta->ImageEn; ?>">
            <?php endif; ?>
        <?php endif ?>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta data-vmid="description" name="description" content="{{ __('meta.description') }}">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
        @if($noindex)
		    <meta name="robots" content="noindex, nofollow" />
		    <meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
		    <meta HTTP-EQUIV="Expires" CONTENT="-1">
		@endif
		<meta name="version" content="<?php echo $version ?>">

		<!-- ICONS -->
		<!-- https://realfavicongenerator.net -->
		<link rel="apple-touch-icon" sizes="180x180" href="//{{ Request::getHttpHost() }}{{ '/apple-touch-icon.png'}}">
		<link rel="icon" type="image/png" sizes="32x32" href="//{{ Request::getHttpHost() }}{{ '/favicon-32x32.png'}}">
		<link rel="icon" type="image/png" sizes="16x16" href="//{{ Request::getHttpHost() }}{{ '/favicon-16x16.png'}}">
		<link rel="manifest" href="//{{ Request::getHttpHost() }}{{ '/site.webmanifest'}}">
		<link rel="mask-icon" href="//{{ Request::getHttpHost() }}{{ '/safari-pinned-tab.svg'}}" color="#5bbad5">
		<meta name="msapplication-TileColor" content="#da532c">
		<meta name="theme-color" content="#ffffff">

		<!-- CSS -->
		<link href="//{{ Request::getHttpHost() }}{{ mixFile('css/vendor.css') }}<?php echo '?version=' . $version ?>" rel="stylesheet">
		<link href="//{{ Request::getHttpHost() }}{{ mixFile('css/app.css') }}<?php echo '?version=' . $version ?>" rel="stylesheet">
		@stack('styles')
	</head>


<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->


	<body>
		<!-- APP CONTENT -->
        {!! isset($ssr['html']) ? $ssr['html'] : $ssr !!}
		{{-- @yield('content') --}}

		<!-- COMPONENTS -->
		{{-- @component('app.components.google.google-analytics')@endcomponent --}}

		<!-- SCRIPTS -->
        <script>
            @php /* Share env with the client script through a JS variable */ @endphp
            window.env = @json($env);
        </script>
		@php /*	DX107 @todo: Wird das noch benötigt? <script src="//{{ Request::getHttpHost() }}{{ mixFile('manifest.js') }}<?php echo '?version=' . $version ?>"></script>  */ @endphp
        @php /*	DX107 @todo: vendor.js wieder nutzen wenn SSR grundsätzlich funktioniert	<script async src="//--><?//= $_SERVER['HTTP_HOST'] ?><!--{{ mixFile('js/client/vendor.js') }}--><?php //echo '?version=' . $version ?><!--"></script> */ @endphp
		<script defer src="//{{ Request::getHttpHost() }}{{ mixFile('js/client/entry-client.js') }}<?php echo '?version=' . $version ?>"></script>
		@stack('scripts')
		@if(config('app.env') == 'local' && config('app.livereload'))
			<script src="//{{ Request::getHttpHost() }}:35729/livereload.js"></script>
		@endif
	</body>

</html>
