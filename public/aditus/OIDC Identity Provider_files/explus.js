// ?ui_locales=DE-de
// ?ui_locales=en-us

var urlParam = function (name) {
    'use strict';
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results === null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
};

var param = urlParam('ui_locales'),
    paramLocale,
    lang = 'de',
    fgPswd = '<a class="btn btn-dark btn-block btn-sm mt-3" href="https://secure.digital-x.eu/DX/Account/LostPassword?ui_locales=DE-de" role="button">Passwort vergessen</a>',
    fgPswdEn = '<a class="btn btn-dark btn-block btn-sm mt-3" href="https://secure.digital-x.eu/DX/Account/LostPassword?ui_locales=en-us" role="button">Forgot password</a>',
    //tkLogo = '<a class="navbar-brand logo-wrapper-tk-' + lang + '"></a>';
    tkLogo = '<a class="navbar-brand logo-wrapper-tk-' + lang + '" href="https://geschaeftskunden.telekom.de/" target="_blank"></a>';

if (param) {
    paramLocale = param.split("-");
    lang = paramLocale[0].toLowerCase();
    // tkLogo = '<a class="navbar-brand logo-wrapper-tk-' + lang + '"></a>';
    tkLogo = '<a class="navbar-brand logo-wrapper-tk-' + lang + '" href="https://geschaeftskunden.telekom.de/" target="_blank"></a>';

    if (lang === "en") {
        fgPswd = fgPswdEn;
    }
}


var modalTest = '<a type="button" class="" data-toggle="modal" data-target="#modalProducts">Modal Test</a><div class="modal fade" id="modalProducts" tabindex="-1" role="dialog" aria-labelledby="modalProductsLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="modalProductsLabel">Products and services </h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">Products and services comprise the sectors Fixed Network & Internet, Mobile Communications, Cloud & IT, Magenta TV, Smart Home and Telekom Energy.</div></div></div></div>';


function ready() {
    'use strict';

    $(".navbar").append(tkLogo);

    // check for login or register
    var form = window.location.pathname.toLowerCase().split("/");
    //console.log("slug = ", form);

    switch (form[3]) {
        case "register":
            $('main').addClass('custom-register');
            $('.card-body').before('<a class="btn-link text-danger btn btn-sm close-button" href="/DX_Identity/Account/Login" role="button"></a>');
            $('a[value=cancel]').empty();
            //$('button[type=submit]').before(modalTest);
            //console.log("register");
            break;
        case "login":
            $('button[value=login]').removeClass('btn-primary').addClass('btn-secondary');
            $('button[value=cancel]').removeClass("bg-transparent btn btn-block btn-outline-dark btn-sm text-dark").addClass('btn btn-link btn-sm text-danger close-button');
            $('button[value=cancel]').empty();
            // forgot password
            $('button[value=login]').after(fgPswd);

            //console.log("login");
            break;
    }
    
    //$(".close-button").attr("href", "https://www.digital-x.eu/");
    $(".close-button").click(function(){
        //window.location = "https://www.digital-x.eu/";
        window.open("https://www.digital-x.eu/", "_blank");
    });

    $(".logo-wrapper").attr("href", "https://www.digital-x.eu/").attr('target','_blank');

}


document.addEventListener("DOMContentLoaded", ready);