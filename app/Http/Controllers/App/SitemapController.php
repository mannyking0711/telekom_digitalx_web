<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    private $baseUrl = "";

    private $cmsUrl = "";

    private $lang = "de";

    private $data = [
        "lang_de"       => "de",
        "lang_en"       => "en",
        "menu_de"       => "magazin",
        "menu_en"       => "magazine",
        "speaker_de"    => "speaker",
        "speaker_en"    => "speaker",
        "partner_de"    => "partner",
        "partner_en"    => "partner",
        "category_de"   => "artikel",
        "category_en"   => "article",
        "slug_de"       => "slug_de",
        "slug_en"       => "slug_en"
    ];

    private $labels = [
        "articles_de" => "artikel",
        "articles_en" => "articles",
        "podcasts_de" => "podcasts",
        "podcasts_en" => "podcasts",
        "videos_de" => "videos",
        "videos_en" => "videos",
        "speakers_de" => "event-speaker",
        "speakers_en" => "event speakers",
        "partner-page_de" => "partner",
        "partner-page_en" => "partners",
    ];

    public function __construct()
    {
        $this->initServers();
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
     * Used for articles, videos and podcasts, which are actually not indexed in EN
     * @return bool
     */
    private function nofollow($itemtype = '')
    {
        if ($this->lang == 'de') {
            return false;
        }

        if (in_array($itemtype, ['articles', 'podcasts', 'videos'])) {
            return true;
        }

        return false;
    }

    private function initServers() {
        $this->baseUrl = '';
        $this->cmsUrl = trim(config('app.content_url'), '/');
    }

    public function index(Request $request)
    {
        $links = [];

        $articles = $this->getLinks('articles');
        array_push($links, $articles);

        $videos = $this->getLinks('videos');
        array_push($links, $videos);

        if ($this->lang == 'de') {
            $podcasts = $this->getLinks('podcasts');
            array_push($links, $podcasts);
        }

        $speakers = $this->getLinks('speakers');
        array_push($links, $speakers);

        $partners = $this->getLinks('partner-page');
        array_push($links, $partners);

        $staticLinks = $this->getStaticLinks();
        $lang = $this->lang;
        $noindex = $this->noindex($request);

        return view('app.pages.sitemap')->with(compact('links', 'staticLinks', 'lang', 'noindex'));
    }

    public function de(Request $request)
    {
        $this->lang = "de";

        return $this->index($request);
    }

    public function en(Request $request)
    {
        $this->lang = "en";

        return $this->index($request);
    }

    public function getStaticLinks()
    {
        return $items = [
            [
                'label' => 'Navigation',
                'links' => [
                    [
                        'title' => $this->lang == 'de' ? 'Magazin' : 'Magazine',
                        'url' => '/' . $this->lang  . '/' . ($this->lang == 'de' ? 'magazin' : 'magazine'),
                        'sublinks' => [
                            [
                                'title' => ($this->lang == 'de' ? 'Alle Medien' : 'All media'),
                                'url' => '/' . $this->lang  . '/' . ($this->lang == 'de' ? 'magazin' : 'magazine'),
                            ],
                            [
                                'title' => ($this->lang == 'de' ? 'Beiträge' : 'Articles'),
                                'url' => '/' . $this->lang  . '/' . ($this->lang == 'de' ? 'magazin/artikel' : 'magazine/article'),
                            ],
                            [
                                'title' => ($this->lang == 'de' ? 'Podcast' : null),
                                'url' => '/' . $this->lang  . '/magazin/podcast',
                            ],
                            [
                                'title' => 'Video',
                                'url' => '/' . $this->lang  . '/' . ($this->lang == 'de' ? 'magazin/video' : 'magazine/video'),
                            ],
                        ]
                    ],
                    [
                        'title' => 'Event',
                        'url' => '/' . $this->lang . '/events/digital-x-2021',
                        'sublinks' => [
                            [
                                'title' => ($this->lang == 'de' ? 'Speaker' : 'Speakers'),
                                'url' => '/' . $this->lang  . '/events/digital-x-2021/speaker',
                            ],
                            [
                                'title' => ($this->lang == 'de' ? 'Teilnehmen' : 'Participate'),
                                'url' => '/' . $this->lang  . '/' . ($this->lang == 'de' ? 'events/digital-x-2021/teilnehmen' : 'events/digital-x-2021/participate'),
                            ],
                            [
                                'title' => ($this->lang == 'de' ? 'Mediathek' : 'Media Library'),
                                'url' => '/' . $this->lang  . '/' . ($this->lang == 'de' ? 'events/mediathek' : 'events/media-library'),
                            ],
                            [
                                'title' => 'Agenda',
                                'url' => '/' . $this->lang  . '/events/digital-x-2021/agenda',
                            ]
                        ]
                    ],
                    [
                        'title' => 'Award',
                        'url' => '/' . $this->lang . '/award/2021',
                        'sublinks' => [
                            [
                                'title' => 'Award 2019',
                                'url' => '/' . $this->lang  . '/award/2019',
                            ],
                            [
                                'title' => 'Award 2020',
                                'url' => '/' . $this->lang  . '/award/2020',
                            ],
                            [
                                'title' => 'Award 2021',
                                'url' => '/' . $this->lang  . '/award/2021',
                            ]
                        ]
                    ],
                    [
                        'title' => 'Partner',
                        'url' => '/' . $this->lang . '/partner'
                    ],
                    [
                        'title' => 'Initiative',
                        'url' => '/' . $this->lang . '/initiative'
                    ],
                ],
            ],
            [
                'label' => 'Metanavigation',
                'links' => [
                    [
                        'title' => 'Newsletter',
                        'url' => '/' . $this->lang . '/newsletter'
                    ],
                    [
                        'title' => 'FAQ',
                        'url' => '/' . $this->lang . '/faq'
                    ],
                    [
                        'title' => ($this->lang == 'de' ? 'Kontakt' : 'Contact'),
                        'url' => '/' . $this->lang . '/' . ($this->lang == 'de' ? 'kontakt' : 'contact'),
                    ],
                    [
                        'title' => ($this->lang == 'de' ? 'Datenschutz' : 'Privacy policy'),
                        'url' => '/' . $this->lang . '/' . ($this->lang == 'de' ? 'datenschutzbestimmungen' : 'privacy-policy'),
                    ],
                    [
                        'title' => ($this->lang == 'de' ? 'Impressum' : 'Imprint'),
                        'url' => '/' . $this->lang . '/' . ($this->lang == 'de' ? 'impressum' : 'imprint'),
                    ],
                    [
                        'title' => ($this->lang == 'de' ? 'AGB' : 'GT&C'),
                        'url' => '/' . $this->lang . '/' . ($this->lang == 'de' ? 'agbs' : 'general-terms-and-conditions'),
                    ],
                    [
                        'title' => 'Social',
                        'url' => '/' . $this->lang . '/social'
                    ],
                    [
                        'title' => ($this->lang == 'de' ? 'Presse' : 'Press'),
                        'url' => '/' . $this->lang . '/' . ($this->lang == 'de' ? 'presse' : 'press'),
                    ],
                    [
                        'title' => ($this->lang == 'de' ? 'Beratung' : 'Consultation'),
                        'url' => '/' . $this->lang . '/' . ($this->lang == 'de' ? 'beratung' : 'consulting'),
                    ]
                ]
            ]
        ];
    }

    public function getLinks($item)
    {
        $items = [];

        $result = file_get_contents($this->cmsUrl.'/'.$item, false, stream_context_create(array(
            'http' => array(
                'method' => 'GET',
                'header' => "Accept-Language: {$this->lang}\r\n"
            )
        )));
        $resultJson = json_decode($result, true);
        if ($item == 'partner-page') {
            $resultJson = $resultJson['partners_united'];
        }

        // get items
        $items_links = $this->itemLinks($item, $resultJson);
        array_push($items, $items_links);

        return $items[0];
    }


    public function itemLinks($item, $json)
    {
        $itemLink = ['title' => '', 'url' => '', 'nofollow' => false];
        $link = [];

        foreach ($json as $field => $value) {
            if ($item === 'articles') {
                $itemLink = $this->articles_links($value);
            }

            if ($item === 'podcasts') {
                $itemLink = $this->podcasts_links($value);
            }

            if ($item === 'videos') {
                $itemLink = $this->videos_links($value);
            }

            if ($item === 'speakers') {
                $itemLink = $this->speakers_links($value);
            }

            if ($item === 'partner-page') {
                $itemLink = $this->partners_links($value);
            }

            array_push(
                $link,
                [
                    'title' => $itemLink['title'],
                    'url' => $itemLink['url'],
                    'nofollow' => $itemLink['nofollow']
                ]
            );
        }

        ${$item}['links'] = $link;
        ${$item}['label'] = $this->labels[$item . '_' . $this->lang];

        return ${$item};
    }

    public function articles_links($v)
    {
        if (array_key_exists("articles_group", $v)) {
            $lang = $this->lang;
            $title = $v['title'];

            $url = $this->baseUrl . "/" . $this->data['lang_' . $lang] . "/" . $this->data['menu_' . $lang] . "/" . $this->data['category_' . $lang] . "/" . $v['articles_group']['slug_' . $lang] . "/" . $v['slug_' . $lang];

            return [
                'title' => $title,
                'url' => $url,
                'nofollow' => $this->nofollow('articles')
            ];
        }

        return false;
    }

    public function podcasts_links($v)
    {
        $lang = $this->lang;
        $title = $v['title'];

        $url = $this->baseUrl . "/" . $this->data['lang_' . $lang] . "/" . $this->data['menu_' . $lang] . "/podcast/" . $v['podcast_group']['slug_' . $lang] . "/" . $v['slug_' . $lang];

        return [
            'title' => $title,
            'url' => $url,
            'nofollow' => $this->nofollow('podcasts')
        ];
    }

    public function videos_links($v)
    {
        if (array_key_exists("videos_group", $v)) {
            $lang = $this->lang;
            $title = $v['title'];

            $url = $this->baseUrl . "/" . $this->data['lang_' . $lang] . "/" . $this->data['menu_' . $lang] . "/video/" . $v['videos_group']['slug_' . $lang] . "/" . $v[$this->data['slug_' . $lang]];

            return [
                'title' => $title,
                'url' => $url,
                'nofollow' => $this->nofollow('videos')
            ];
        }

        return false;
    }

    public function speakers_links($v)
    {
        $lang = $this->lang;
        $title = "$v[name] $v[surname]";

        $url = $this->baseUrl . "/" . $this->data['lang_' . $lang] . "/" . $this->data['speaker_' . $lang] . "/" . $v['slug_' . $lang];

        return [
            'title' => $title,
            'url' => $url,
            'nofollow' => $this->nofollow('speakers')
        ];
    }

    public function partners_links($v)
    {
        $lang = $this->lang;
        $title = "$v[name]";

        $url = $this->baseUrl . "/" . $this->data['lang_' . $lang] . "/" . $this->data['partner_' . $lang] . "/" . $v['slug_' . $lang];

        return [
            'title' => $title,
            'url' => $url,
            'nofollow' => $this->nofollow('partner-page')
        ];
    }
}
