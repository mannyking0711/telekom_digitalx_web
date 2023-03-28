<!DOCTYPE html>

<html lang="{{ $lang }}">

<head>
	<!-- META -->
	<title>Sitemap</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	@if ($lang == 'de')
		<meta data-vmid="description" name="description" content="Die DIGITAL X ist die Antwort auf die Frage „Was bedeutet Digitalisierung? Im Community-Netzwerk finden Unternehmen und Experten zusammen und erhalten konkrete Lösungen und Impulse auf Ihrem Weg in die Digitalisierung.">
	@else
		<meta data-vmid="description" name="description" content="DIGITAL X is the answer to the question of “What does digitalization mean?” The community network brings businesses and experts together, offering them concrete solutions and ideas as they go digital.">
	@endif
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="X5gRfRe1auApDTVjAwMiyGaXr9WXFZ5Ta3orkHyF">
	<meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
	<meta HTTP-EQUIV="Expires" CONTENT="-1">
	<meta name="version" content="2104252246">
	@if($noindex)
		<meta name="robots" content="noindex, nofollow" />
		<meta HTTP-EQUIV="Pragma" CONTENT="no-cache">
		<meta HTTP-EQUIV="Expires" CONTENT="-1">
	@endif

<!-- ICONS -->
	<!-- https://realfavicongenerator.net -->
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<!-- CSS -->
	<link href="/css/vendor.css?id=bdf83471e99296199bce?version=2104252246" rel="stylesheet">
	<link href="/css/app.css?id=f873e667edff0419e374?version=2104252246" rel="stylesheet">

	<style>
		#page-sitemap * {
			color: whitesmoke;
		}
		#page-sitemap {
		    padding: 0 10rem 5rem;
			margin-top: 5rem;
		}

		#page-sitemap p {
			font-size: 1.4rem;
		}

		#page-sitemap h3 {
			text-transform: uppercase;
		}

		#page-sitemap p > a {
			font-size: 1.5rem;
		}


	</style>
</head>

<body>

	<div id="app" data-server-rendered="true" data-v-a0e6c9f2>
		<div class="default-layout" data-v-429e0229 data-v-a0e6c9f2>

			<!-- header -->
			<header data-v-3f6d57eb data-v-429e0229>
				<div class="header-lightbox" data-v-3f6d57eb></div>
				<div class="header-background" data-v-3f6d57eb>
					<div class="header-navi-button" data-v-3f6d57eb>
					</div>
				</div>
				@if ($lang == 'de')
					<div class="header-metanavi" data-v-3f6d57eb>
            <a href="https://geschaeftskunden.telekom.de" target="_blank" class="header-metanavi-item header-metanavi-telekom" data-v-3f6d57eb><svg class="sprite" data-v-5f906637 data-v-3f6d57eb>
								<use xlink:href="/svg/app/sprite.svg#sprite-telekom-logo-2022" data-v-5f906637></use>
							</svg></a>
            <a href="/de/social" class="header-metanavi-item" data-v-3f6d57eb>Social</a>
            <a href="/de/presse" class="header-metanavi-item" data-v-3f6d57eb>Presse</a>
					</div>
				@else
					<div class="header-metanavi" data-v-256263fa>
            <a href="https://geschaeftskunden.telekom.de" target="_blank" class="header-metanavi-item header-metanavi-telekom" data-v-256263fa><svg class="sprite" data-v-eb4041c0 data-v-256263fa><use xlink:href="/svg/app/sprite.svg#sprite-telekom-logo-2022" data-v-eb4041c0></use></svg></a>
            <a href="/en/social" class="header-metanavi-item" data-v-256263fa>Social</a>
          </div>
				@endif

				<div class="header-logo" data-v-3f6d57eb><a href="/de/" class="router-link-active" data-v-3f6d57eb><svg class="sprite" data-v-5f906637 data-v-3f6d57eb>
							<use xlink:href="/svg/app/sprite.svg#sprite-digitalx-logo" data-v-5f906637></use>
						</svg></a></div>

				<!-- header-navi -->
				@if ($lang == 'de')
				<div class="header-navi" data-v-3f6d57eb>
					<div class="header-navi-item" data-v-3f6d57eb><a href="/de/magazin" class="header-navi-label" data-v-3f6d57eb>Magazin</a></div>
					<div class="header-navi-item" data-v-3f6d57eb><a href="/de/events" class="header-navi-label" data-v-3f6d57eb>Events</a></div>
					<div class="header-navi-item" data-v-3f6d57eb><a href="/de/award/2021" class="header-navi-label" data-v-3f6d57eb>Award</a></div>
					<div class="header-navi-item" data-v-3f6d57eb><a href="/de/partner" class="header-navi-label" data-v-3f6d57eb>Partner</a></div>
					<div class="header-navi-item" data-v-3f6d57eb><a href="/de/initiative" class="header-navi-label" data-v-3f6d57eb>Initiative</a></div>
				</div>
				@else
					<div class="header-navi" data-v-256263fa>
						<div class="header-navi-item" data-v-256263fa><a href="/en/magazine" class="header-navi-label" data-v-256263fa>Magazine</a></div>
						<div class="header-navi-item" data-v-256263fa><a href="/en/events/digital-x-2021" class="header-navi-label" data-v-256263fa>Event</a></div>
						<div class="header-navi-item" data-v-256263fa><a href="/en/award/2021" class="header-navi-label" data-v-256263fa>Award</a></div>
                        <div class="header-navi-item" data-v-256263fa><a href="/en/partner" class="header-navi-label" data-v-256263fa>Partner</a></div>
                        <div class="header-navi-item" data-v-256263fa><a href="/en/initiative" class="header-navi-label" data-v-256263fa>Initiative</a></div>
					</div>
				@endif
				<!-- END header-navi -->

				<!-- header-toolnavi -->
				<div class="header-toolnavi" data-v-3f6d57eb>
					<div class="header-navi-item header-toolnavi-mydigitalx" data-v-3f6d57eb>
						<div data-v-3f6d57eb><a href="/{{ $lang }}/my-digital-x" class="mydigitalxBtn header-navi-label" data-v-3f6d57eb>My DIGITAL X</a>
							<!---->
						</div>
						<div data-v-3f6d57eb>
							<!---->
						</div>
					</div>
					<div class="header-navi-item language-select header-navi-item" data-v-3d52e39f data-v-3f6d57eb>
						<div class="language-select-item @if($lang =='de') language-select-active @endif" data-v-3d52e39f>
							<a href="/de/sitemap.html">DE</a>
						</div>
						@if ($lang == 'en')
							<div class="language-select-item language-select-separator" data-v-3d52e39f></div>
							<div class="language-select-item @if($lang =='en') language-select-active @endif" data-v-3d52e39f>
								<a href="/en/sitemap.html">EN</a>
							</div>
						@endif
					</div>
				</div>
				<!-- END header-toolnavi -->

			</header>
			<!-- end header -->

			<!-- body -->
			{{-- <div id="page-sitemap" class="sitemapPage page" data-v-02315312 data-v-a0e6c9f2 data-v-38eb2e6f data-v-429e0229 style="height: 54rem; background: none;"> --}}
			<div id="page-sitemap" class="errorPage page" data-v-02315312 data-v-a0e6c9f2 data-v-38eb2e6f data-v-429e0229>

				{{-- headline --}}
				<h2>Sitemap</h2>

				{{-- link loop --}}
				@foreach ($links as $link)

					{{-- category label --}}
					<h3>
						{{ $link['label'] }}
					</h3>

					{{-- links --}}
					@foreach ($link['links'] as $l)
						<p>
							<a href="{{ $l['url'] }}"@if ($l['nofollow']) rel="nofollow"@endif>{{ $l['title'] }}</a>
						</p>
						@endforeach

					<br><br><br>
				@endforeach

				{{-- mainbar link loop --}}
				@foreach ($staticLinks as $slink)

					{{-- category label --}}
					<h3>
						{{ $slink['label'] }}
					</h3>

					{{-- links --}}
					@foreach ($slink['links'] as $l)
						<p>
							<a href="{{ $l['url'] }}">{{ $l['title'] }}</a>
						</p>

						@isset($l['sublinks'])
							@foreach ($l['sublinks'] as $sl)
								<p class="sublinks" style="margin-left: 50px;">

									@isset($l['title'])
										<a href="{{ $sl['url'] }}">{{ $sl['title'] }}</a>
									@endisset
								</p>
							@endforeach
						@endisset

					@endforeach

					<br><br><br>
				@endforeach

			</div>
			<!-- end body -->

			<!-- footer -->
			@if ($lang == 'de')
			<footer data-v-65932bab data-v-429e0229>
        <div class="footer-bottom">
				  <section data-v-65932bab>
					  <div class="col-100" data-v-65932bab><a href="/de/" class="footer-logo router-link-active" data-v-65932bab><svg class="sprite" data-v-5f906637 data-v-65932bab>
								<use xlink:href="/svg/app/sprite.svg#sprite-digitalx-logo" data-v-5f906637></use>
							</svg></a></div>
				  </section>
				  <section data-v-65932bab>
					<div class="col-100 footer-content" data-v-65932bab>
						<div class="footer-teaser" data-v-65932bab>
						</div>
            <div class="footer-newsletter" data-v-65932bab>
            </div>
						<div class="footer-social" data-v-65932bab>
							<h3 data-v-65932bab>Social Media</h3>
              <a href="https://www.linkedin.com/showcase/telekom-business/" target="_blank" class="footer-social-link" data-v-65932bab><svg class="icon" data-v-5f906637 data-v-65932bab>
									<use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-linkedin" data-v-5f906637>
									</use>
								</svg></a> <a href="https://twitter.com/digimittelstand" target="_blank" class="footer-social-link" data-v-65932bab><svg class="icon" data-v-5f906637 data-v-65932bab>
									<use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-twitter" data-v-5f906637>
									</use>
								</svg></a> <a href="https://www.facebook.com/DigitalXMagazin" target="_blank" class="footer-social-link" data-v-65932bab><svg class="icon" data-v-5f906637 data-v-65932bab>
									<use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-facebook" data-v-5f906637>
									</use>
								</svg></a> <a href="https://www.youtube.com/channel/UC8x4BJWPde2uE4-LsFUG8oA" target="_blank" class="footer-social-link" data-v-65932bab><svg class="icon" data-v-5f906637 data-v-65932bab>
									<use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-youtube" data-v-5f906637>
									</use>
								</svg></a> <a href="https://www.instagram.com/deutschetelekom/" target="_blank" class="footer-social-link" data-v-65932bab><svg class="icon" data-v-5f906637 data-v-65932bab>
									<use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-instagram" data-v-5f906637>
									</use>
								</svg></a>
						</div>
						<div class="footer-navi" data-v-65932bab>
              <a href="/de/faq" class="footer-navi-item" data-v-65932bab>FAQ</a>
              <a href="/de/kontakt" class="footer-navi-item" data-v-65932bab>Kontakt</a>
              <a href="/de/datenschutzbestimmungen" class="footer-navi-item" data-v-65932bab>Datenschutz</a>
              <a href="/de/impressum" class="footer-navi-item" data-v-65932bab>Impressum</a>
              <a href="/de/agbs" class="footer-navi-item" data-v-65932bab>AGB</a>
              <a href="/de/sitemap.html" class="footer-navi-item router-link-exact-active router-link-active" data-v-65932bab="">Sitemap</a>
            </div>
					</div>
				</section>
        </div>
			</footer>
			@else
			<footer data-v-25251df5 data-v-7b49ae8e>
          <div class="footer-bottom">
            <section data-v-65932bab>
              <div class="col-100" data-v-25251df5>
                <a href="/en/" aria-current="page" class="footer-logo router-link-exact-active router-link-active" data-v-25251df5><svg class="sprite" data-v-eb4041c0 data-v-25251df5><use xlink:href="/svg/app/sprite.svg#sprite-digitalx-logo" data-v-eb4041c0></use></svg></a>
              </div>
            </section>
            <section data-v-25251df5>
              <div class="col-100 footer-content" data-v-25251df5>
              <div class="footer-teaser" data-v-25251df5>
              </div>
              <div class="footer-newsletter" data-v-25251df5>
              </div>
              <div class="footer-social" data-v-25251df5><h3 data-v-25251df5>Social Media</h3> <a href="https://www.linkedin.com/showcase/telekom-business/" target="_blank" class="footer-social-link" data-v-25251df5><svg class="icon" data-v-eb4041c0 data-v-25251df5><use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-linkedin" data-v-eb4041c0></use></svg></a> <a href="https://twitter.com/digimittelstand" target="_blank" class="footer-social-link" data-v-25251df5><svg class="icon" data-v-eb4041c0 data-v-25251df5><use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-twitter" data-v-eb4041c0></use></svg></a> <a href="https://www.facebook.com/DigitalXMagazin" target="_blank" class="footer-social-link" data-v-25251df5><svg class="icon" data-v-eb4041c0 data-v-25251df5><use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-facebook" data-v-eb4041c0></use></svg></a> <a href="https://www.youtube.com/channel/UC8x4BJWPde2uE4-LsFUG8oA" target="_blank" class="footer-social-link" data-v-25251df5><svg class="icon" data-v-eb4041c0 data-v-25251df5><use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-youtube" data-v-eb4041c0></use></svg></a> <a href="https://www.instagram.com/deutschetelekom/" target="_blank" class="footer-social-link" data-v-25251df5><svg class="icon" data-v-eb4041c0 data-v-25251df5><use xlink:href="/svg/app/sprite-icons.svg#sprite-icon-instagram" data-v-eb4041c0></use></svg></a>
              </div>
              <div class="footer-navi" data-v-25251df5>
                <a href="/en/faq" class="footer-navi-item" data-v-25251df5>FAQ</a> <a href="/en/contact" class="footer-navi-item" data-v-25251df5>Contact</a> <a href="/en/privacy-policy" class="footer-navi-item" data-v-25251df5>Privacy policy</a> <a href="/en/imprint" class="footer-navi-item" data-v-25251df5>Imprint</a> <a href="/en/general-terms-and-conditions" class="footer-navi-item" data-v-25251df5>GT&amp;C</a><a href="/en/sitemap.html" class="footer-navi-item router-link-exact-active router-link-active" data-v-65932bab="">Sitemap</a>
              </div>
            </section>
          </div>
			</footer>
			@endif
			<!-- end footer -->

		</div>
	</div>

</body>

</html>
