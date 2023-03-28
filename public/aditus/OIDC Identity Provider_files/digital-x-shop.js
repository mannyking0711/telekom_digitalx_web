/*globals $, console, jQuery, gsap */

/**
 * Author: joerg.pfeifer@egplusww.com
 * Created: 03.03.2021
 * Modified: 14.03.2021 19:35
 */

(function () {

    'use strict';

    var language = '',
        isConfirmation = false,
        isHelpContactOverview = false,
        isOrderhistory = false,
        isLostPassword = false,
        isLogon = false,
        isCart = false,
        isAuthenticate = false,
        isHelpPayment = false,
        isHelpSupport = false,
        isRegister = false,
        isChangepassword = false,
        isViewDeleteUserAccount = false,
        isBuyerdata = false,
        isImprint = false,
        isPayment = false,
        isSummary = false,
        isUserAccount = false,
        isUserProfile = false,
        isOrder = false,
        isShop = false,
        isOrderVerify = false,
        isRegistertickets = false,
        isOrderDetail = false,
        isNewsletter = false,
        isFairevents = false,
        isLegitimations = false,
        isEvidenceValidation = false,
        userprofileFormCtrl = {
            fields: []
        },
        buyerDataFormCtrl = {
            fields: []
        },
        benutzerkontoFormCtrl = {
            fields: []
        };
    //https://geschaeftskunden.telekom.de/ 
    function getLogoTKNode(lang) {
        lang = 'de';
        return '<div class="header-logo-tk col-6 col-sm-4"><a class="logo-wrapper-tk-' + lang + '" href="https://geschaeftskunden.telekom.' + lang + '/" target="_blank"></a></div>';
    }
    
    function getLostPasswordNode(lang) {
        if (lang === 'de') {
            return '<a class="btn btn-dark btn-block btn-sm mt-3" href="https://secure.digital-x.eu/DX/Account/LostPassword?ui_locales=DE-de" role="button">Passwort vergessen</a>';
        }
        return '<a class="btn btn-dark btn-block btn-sm mt-3" href="https://secure.digital-x.eu/DX/Account/LostPassword?ui_locales=en-us" role="button">Forgot password</a>';
    }

    //https://www.digital-x.eu/en
    function getBackLabel(lang) {
        if (lang === 'de') {
            return 'ZURÜCK ZUR WEBSEITE';
        }
        return 'BACK TO WEBSITE';
    }
    function getBackMobileNode(lang) {
        return '<div class="header-back col-12"><a class="btn btn-secondary btn-block" href="https://www.digital-x.eu/' + lang + '">' + getBackLabel(lang) + '</a></div>';
    }
    function getBackDesktopNode(lang) {
        return '<div class="header-back col-sm-4"><a class="btn btn-secondary" href="https://www.digital-x.eu/' + lang + '">' + getBackLabel(lang) + '</a></div>';
    }
    
    function getLogoNode(lang) {
        return '<div class="header-logo col-6 col-sm-4"><a class="logo-wrapper" href="https://www.digital-x.eu/' + lang + '" target="_blank"></a></div>';
    }
    
    function checkWarenkorb() {
        //console.log("checkWarenkorb");
        var $shopWrapper = $('#ContentChooseArticles'),
            $rows = $shopWrapper.find('>.row'),
            $rowWeiterSubmit = $rows.find('a.pull-right.m-b-md.layOpt-2').removeClass('pull-right m-b-md layOpt-2'),
            $rowWeiter = $rowWeiterSubmit.parent().parent(),
            $infoWarenkorb = $('label.info-circle.info-cart');
        if ($infoWarenkorb.hasClass('ng-hide')) {
            //console.log("checkWarenkorb", "hasClass('ng-hide')");
            //console.log("checkWarenkorb", "hasClass('ng-hide')", $infoWarenkorb);
            $rowWeiter.removeClass('hidden');
        }
    }
    
    function addHeader(lang) {
        var header = '';
        if (isUserProfile || isBuyerdata || isRegister || isRegistertickets) {
            header = '<div id="header"><div class="header row justify-space-between gutters-all">' + getLogoNode(lang) + getBackDesktopNode(lang) + getLogoTKNode(lang) + '</div><div class="header sub row justify-center gutters">' + getBackMobileNode(lang) + '</div></div>';
        } else {
            header = '<div id="header"><div class="header row justify-space-between gutters-all">' + getLogoNode(lang) + getLogoTKNode(lang) + '</div></div>';
        }
        $(".navbar-wrapper").after(header);
    }

    function header() {
        // check for login or register
        var slug = window.location.pathname.toLowerCase().split("/"),
            $navbar = $("#navbar"),
            $langIconNode = $navbar.find('.adi-languagechooser-langSelected i'),
            languageTitle = $langIconNode.attr('title');
        //get language via class and make availlable for inside functions
        language = $langIconNode.attr('class').split(' ')[1].split('flag_')[1];
        //
        console.log("+ header +");
        //console.log("+ header +", "$navbar:", $navbar);
        //console.log("+ header +", "languageTitle:", languageTitle);
        //console.log("+ header +", "language:", language);
        console.log("+ header +", "slug:", slug);
        isShop = slug[slug.length - 1] === 'shop';
        isConfirmation = slug[slug.length - 1] === 'confirmation';
        isHelpContactOverview = slug[slug.length - 1] === 'helpcontactoverview';
        isOrderhistory = slug[slug.length - 1] === 'orderhistory';
        isOrderDetail = slug[slug.length - 2] === 'orderdetail';
        isOrder = slug[slug.length - 2] === 'order' || isOrderDetail;
        isOrderVerify = slug[slug.length - 2] === 'orderverifyuser';
        isLostPassword = slug[slug.length - 1] === 'lostpassword';
        isLogon = slug[slug.length - 1] === 'logon';
        isCart = slug[slug.length - 1] === 'cart';
        isAuthenticate = slug[slug.length - 1] === 'authenticate';
        isRegister = slug[slug.length - 1] === 'register';
        isChangepassword = slug[slug.length - 1] === 'viewchangepassword';
        isViewDeleteUserAccount = slug[slug.length - 1] === 'viewdeleteuseraccount';
        isHelpPayment = slug[slug.length - 2] === 'helpcontacttopics' || slug[slug.length - 2] === 'helpcontactoverview';
        isHelpSupport = slug[slug.length - 1] === 'helpcontactsupport' || slug[slug.length - 2] ===  'helpcontactsupport';
        isBuyerdata = slug[slug.length - 1] === 'buyerdata';
        isImprint = slug[slug.length - 1] === 'imprint';
        isPayment = slug[slug.length - 1] === 'payment';
        isSummary = slug[slug.length - 1] === 'summary';
        isUserAccount = slug[slug.length - 1] === 'useraccount';
        isUserProfile = slug[slug.length - 1] === 'userprofile';
        isNewsletter = slug[slug.length - 1] === 'newsletter' || slug[slug.length - 1] === 'top_mailing';
        isFairevents = slug[slug.length - 1] === 'fairevents';
        isLegitimations = slug[slug.length - 1] === 'legitimations';
        isEvidenceValidation = slug[slug.length - 1] === 'evidencevalidation';
        //only LIVE
        isRegistertickets = slug[slug.length - 1] === 'registertickets';
        
        // fix nav top submenus
        $navbar.find('ul.dropdown-menu li').addClass('row justify-space-between gutters-sm-all').find('.navbar-dropdown-container').addClass('col-12 background-white');

        // NAVIGATION TOP
        // .logo-wrapper .logo-wrapper-tk-de .logo-wrapper-tk-en 
        addHeader(language);
        
        setTimeout(function () {
            checkWarenkorb();
            //console.log("header $infoWarenkorb:", $infoWarenkorb);
        });
    }

    function togglePlaceholderUserProfile() {
        var i, field, fields = userprofileFormCtrl.fields,
            l = fields.length;
        for (i = 0; i < l; i++) {
            field = fields[i];
            field.spanText = field.$spanInput.text();
            //console.log("togglePlaceholderUserProfile field.spanText:", field.spanText);
            if (field.spanText === '') {
                field.$spanInput.addClass('placeholder').text(field.label);
            } else {
                field.$spanInput.removeClass('placeholder');
            }
        }
    }

    function togglePlaceholderBuyerData() {
        var i, field, fields = buyerDataFormCtrl.fields,
            l = fields.length;
        for (i = 0; i < l; i++) {
            field = fields[i];
            field.spanText = field.$spanInput.text();
            //console.log("togglePlaceholderBuyerData field.spanText:", field.spanText);
            if (field.spanText === '') {
                field.$spanInput.addClass('placeholder').text(field.label);
            } else {
                field.$spanInput.removeClass('placeholder');
            }
        }
    }
    
    function userProfile() {
        // UserProfile - get all labels
        var imageSrc, $ProfileAddressFormGroups, $userPhotoBlock,
            $rows = $('#wrap .row'),
            $formUserProfile = $('.form-horizontal.userProfile'),
            $userProfileLabels = $formUserProfile.find('.base-form-control-label'),
            $listItems = $('.k-list-container .k-list-scroller .k-list'),
            $cols = $formUserProfile.find('.col-md-6'),
            $notificationContainer = $formUserProfile.find('.checkboxlist-container'),
            $checkboxesNotification = $('#NotificationViewModel_TERPOnlineBuyersInfo17-container label.checkbox'),
            $adiQuestions = $formUserProfile.find('.adi-questioncatalog'),
            $adiInfoAkzept = $adiQuestions.find('.col-sm-8.col-sm-push-4.p-w-xs'),
            $adiQuestionsProfileData = $formUserProfile.find('#Profile_Data .adi-questionlist'),
            $adiQuestionsProfileAddress = $formUserProfile.find('#Profile_Address .address-form'),
            $formProfileAddress = $('#Profile_Address'),
            $formProfilePicture = $('#Profile_Picture'),
            $formProfileData = $('#Profile_Data'),
            $formProfileContacs = $('#Profile_Contacts');
        // #Profile_Data
        /*console.log("userProfile", "$rows:", $rows);
        console.log("userProfile", "$rows row m-b-md:", $('#wrap .row.m-b-md'));
        console.log("userProfile", "$cols:", $cols);
        console.log("userProfile", "$adiQuestionsProfileData:", $adiQuestionsProfileData);*/

        $rows.addClass('gutters-all');
        $adiQuestionsProfileData.addClass('row gutters-sm-all').find('.form-group').addClass('col-12').find('.base-form-controls.col-sm-8').removeClass('col-sm-8');
        $ProfileAddressFormGroups = $adiQuestionsProfileData.find('.form-group.col-12');
        $userPhotoBlock = $ProfileAddressFormGroups.eq($ProfileAddressFormGroups.length - 1).removeClass('col-12').addClass('col-4');
        $userPhotoBlock.addClass('col-12 col-sm-4').detach();
        $adiQuestionsProfileData.parent().addClass('col-12 col-sm-8').parent().addClass('row');
        $adiQuestionsProfileData.parent().before($userPhotoBlock);
        $('.picture-preview.m-t-xs.mt-5').addClass('hidden');
        // #Profile_Notification unten links
        //$('#Profile_Notification .adi-questionlist .base-form-control-group.form-group').addClass('row gutters-sm-all');
        $('#Profile_Notification .adi-questionlist .base-form-control-group.form-group').addClass('row');
        $('.picture-remove.text-muted.m-t-xs.mt-5').removeClass('btn-default btn-xs m-t-xs').addClass('btn-secondary btn-block');
        $('.qc-picture-upload.btn-theme.btn-success').removeClass('m-t-xs').addClass('btn-block');
        // #Profile_Address rechte seite
        $adiQuestionsProfileAddress.addClass('row gutters-sm-all').find('.form-group').addClass('col-12').find('.base-form-controls.col-sm-8').removeClass('col-sm-8');
        //console.log("userProfile", "$adiInfoAkzept:", $adiInfoAkzept);
        $adiInfoAkzept.removeClass('col-sm-8 col-sm-push-4').css({
            'margin-top': 0,
            'margin-left': 0,
            'padding': 0,
        });
        $notificationContainer.removeClass('col-sm-8').addClass('row gutters-sm-all');
        $checkboxesNotification.addClass('col-12 col-sm-6 col-md-4');
        //$checkboxesNotification.addClass('col-auto').find('input').before('<span></span>');
        $cols.addClass('col-12 col-sm-6');
        $cols.find('label.base-form-control-label.control-label').removeClass('col-sm-4');
        $cols.eq(0).removeClass('col-md-6 col-sm-6').addClass('col-md-7 col-sm-7').find('.adi-questionpage.row').addClass('gutters-sm');
        $cols.eq(1).removeClass('col-md-6 col-sm-6').addClass('col-md-5 col-sm-5');
        $('#wrap .row.m-b-md').removeClass('m-b-md  gutters-all').find('.col-md-12').removeClass('col-md-12').addClass('margin-top btn-block').find('.save.btn-theme').addClass('btn-block');
        $cols.find('.gutters-sm-all').removeClass('gutters-sm-all');
        $cols.eq(2).find('.adi-questionlist-0').addClass('row gutters-sm-all').find('.adi-questionlist').addClass('col-12');
        //$cols.eq(2).find('.base-form-control-group.form-group').eq(0).addClass('margin-top');
        $cols.eq(3).find('.base-form-controls.col-sm-8').removeClass('col-sm-8');
        $('#wrap .row.m-t-md').removeClass('m-t-md').addClass('justify-space-between').find('.col-md-6.col-12.col-sm-6').addClass('background-white margin-top');


        $formProfileContacs.find('fieldset').css('margin-top', '15px');
        $formProfileAddress.find('div.row > div.col-xs-12').addClass('no-vertical-padding');
        $formProfilePicture.attr('class', '').addClass('col-12 col-md-6');
        $formProfileData.attr('class', '').addClass('col-12 col-md-6');
        $formProfilePicture.find('> div.row > div').attr('class', '').addClass('col-12');
        $formProfileData.find('div.adi-questionlist-0.col-12.col-sm-8').attr('class', '').addClass('adi-questionlist-0 col-12');

        //delay because of angular ctrl
        setTimeout(function () {
            $listItems = $('.k-list-container .k-list-scroller .k-list');
            $listItems.bind('click', function (e) {
                //console.log("userProfile", "li.k-item click:", e);
                //console.log("userProfile", "li.k-item click:", $(e.target).data('offsetIndex'));
                setTimeout(togglePlaceholderUserProfile);
            });
            //get base64
            imageSrc = $formUserProfile.find('#PersonViewModel_Passfoto').attr('value');
            //finde .base-form-controls inside $userPhotoBlock
            $userPhotoBlock.find('.base-form-controls').before('<div class="preview-user-photo"><img class="img-responsive" src="' + imageSrc + '" alt="user preview" /></div>');
            //console.log("userProfile", "imageSrc:", imageSrc);
            $userProfileLabels.each(function (index, item) {
                var $item = $(item),
                    $baseFormCtrl = $item.next('.base-form-controls'),
                    $input = $baseFormCtrl.find('input.form-control'),
                    $spanInput = $baseFormCtrl.find('span.k-widget.k-dropdown span.k-input'),
                    spanText = $spanInput.text(),
                    field = {
                        index: index,
                        //$item: $item,
                        //$input: $input,
                        label: item.innerText.split(','),
                        //$baseFormCtrl: $baseFormCtrl,
                        //combobox
                        $spanInput: $spanInput,
                        spanText: spanText
                    };
                //set placeholders
                $input.each(function (num, elem) {
                    $(elem).attr('placeholder', field.label[num]);
                });
                userprofileFormCtrl.fields.push(field);
                //console.log("userProfile", "field:", field);
            });
            // toggle placeholders
            togglePlaceholderUserProfile();
            //console.log("userProfile", "userprofileFormCtrl.fields:", userprofileFormCtrl.fields);
        });
    }
    
    function userAccount() {
        //console.log("userAccount");
        var $rows = $('#wrap .row'),
            $content = $('.container_12.row.m-t-lg.m-b-lg'),
            $baseDocCopy = $content.find('.base-document-copy').addClass('col-12 user-account'),
            $baseDocDiv = $baseDocCopy.find('>div'),
            $baseFormControls = $baseDocDiv.find('.base-form-controls'),
            $baseFormGroups = $baseDocDiv.find('.base-form-actions.form-group');
        //console.log("userAccount", "$rows:", $rows);
        $baseDocCopy.find('.base-form-horizontal.form-horizontal').addClass('row gutters-all').find('>div').addClass('col-12');
        $baseFormGroups.find('div').removeClass('col-sm-offset-4 col-sm-8');
        $baseFormControls.removeClass('col-md-8');
        $content.removeClass('container_12 m-t-lg m-b-lg').addClass('main-content');
        $baseDocDiv.eq(0).removeClass('grid_5 col-md-5').addClass('row justify-space-between gutters-all');
        $baseDocDiv.eq(1).remove();
        $baseDocDiv.eq(2).removeClass('grid_6 col-md-6').addClass('row justify-space-between gutters-all');
        $baseDocDiv.eq(3).remove();
        $rows.eq(3).find('.table-responsive.row').removeClass('table-responsive');
        $baseDocCopy.find('.fieldsetAlone').wrap('<div class="col-12 col-sm-6 background-white"></div>');
        benutzerkontoFormCtrl.$content = $content;
        //benutzerkontoFormCtrl
        //console.log("userAccount $rows:", $rows);
        //console.log("userAccount $baseFormGroups:", $baseFormGroups);
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function startSeite() {
        var $colMds, last,
            $FaireventIndex = $('#FaireventIndex'),
            $cards = $FaireventIndex.find('.card'),
            $colMd10Push1 = $FaireventIndex.find('.col-md-10.col-md-push-1'),
            labelsDE = ['Tickets', 'Einlösen', 'Anmelden', 'Anmelden', 'Anmelden', 'Bestellungen'],
            labelsEN = ['Tickets', 'Redeem', 'Sign in', 'Sign in', 'Sign in', 'Order history'];
        //console.log("startSeite", "$cards:", $cards);
        //console.log("startSeite", "language:", language);
        $colMd10Push1.removeClass('col-md-10 col-md-push-1').addClass('col-12').find('>.row').addClass('justify-start gutters-all');
        $colMds = $FaireventIndex.find('.row .col-md-6');
        // background-white
        $colMds.removeClass('col-md-6').addClass('col-12 col-sm-6 col-md-4 col-lg-3');
        $FaireventIndex.find('.row.m-t-md.m-b-md').removeClass('m-t-md m-b-md');
        $FaireventIndex.find('.row').eq(0).css('visibility', 'hidden');
        last = $colMds.length - 1;
        if ($colMds.eq(last).children().length === 0) {
            $colMds.eq(last).addClass('hidden');
        }
        // card buttons
        $cards.find('.card-content').addClass('col-auto grow-1');
        $cards.each(function (index, elem) {
            var $elem = $(elem),
                label = (language === "de") ? labelsDE[index] : labelsEN[index],
                href = $elem.find('.card-image a').attr('href'),
                $cardFooter = $('<div class="card-footer"><a class="btn btn-theme btn-block" href="' + href + '"><span></span>' + label + '</a></div>');
            //$button = $('<button>' + label + '</button>');
            $elem.append($cardFooter);
            //$cardFooter.append($button);
            /*$button.on('click', function (e) {
              
            });*/
        });
        
    }

    function shop() {
        var $shopWrapper = $('#ContentChooseArticles'),
            $rows = $shopWrapper.find('>.row').addClass('gutters-all'),
            $rowWeiterSubmit = $rows.find('a.pull-right.m-b-md.layOpt-2').removeClass('m-b-md layOpt-2'),
            $rowWeiter = $rowWeiterSubmit.parent().parent(),
            $rowLast = $rows.eq($rows.length - 1),
            $card = $('#Cart');
        /*console.log("shop", "$card:", $card);
        console.log("shop", "$shopWrapper:", $shopWrapper);
        console.log("shop", "$rows:", $rows);
        console.log("shop", "$rowLast:", $rowLast);
        console.log("shop", "$rowWeiterSubmit:", $rowWeiterSubmit);
        console.log("shop", "$rowWeiterSubmit.hasClass('invisible'):", $rowWeiterSubmit.hasClass('invisible'));*/
        $rowLast.find('.col-md-3.col-md-offset-1.col-md-push-8').removeClass('col-md-3 col-md-offset-1 col-md-push-8').addClass('col-md-4');
        $rowLast.addClass('justify-space-between').find('.col-md-pull-8').removeClass('col-md-pull-8');
        $rowLast.find('>.col-md-4').addClass('col-12 col-sm-4 background-white gutter');
        $rows.addClass('padding-top');
        //if ($shopWrapper.length) {}
        setTimeout(function () {
            var $div = $card.find('.col-sm-4.col-md-3.col-sm-push-4.col-md-push-6').removeClass('col-sm-4 col-md-3 col-sm-push-4 col-md-push-6 col-lg-push-6').parent().addClass('col-sm-4');
            //console.log("shop setTimeout", "$div:", $div);
            $div.next().attr('ng-class', '').removeClass('col-md-3 col-sm-push-8 col-md-push-9');
            $card.removeClass('justify-space-between gutters-all padding-top').addClass('margin-top').find('.col-md-12').addClass('background-white');
            $card.find('.row').eq(2).addClass('gutters-all background-white margin-top').find('.col-sm-4.col-md-3.hidden-xs').removeClass('col-md-3');
        }, 10);
    }

    function footer() {
        //grap left ADITUS logo
        var $secondFooter = $('#footer .container.secondFooter'),
            $footerCols = $('footer .col-xs-6'),
            $list = $footerCols.eq(1).find('ul.list-inline');
        //second footer
        $footerCols.eq(0).append($list);
        $footerCols.eq(1).remove();
        $secondFooter.find('>.row').addClass('justify-center gutters-all').find('.col-sm-4').removeClass('col-sm-4 col-xs-6 col-xs-12 text-right').addClass('col-auto').eq(1).remove();
        $('footer .row').addClass('justify-center gutters-all').find('.col-xs-6').removeClass('col-xs-6').addClass('col-auto');
        $('hr').remove();
        //console.log("footer", "$secondFooter:", $secondFooter);
        //console.log("footer", "$footerCols:", $footerCols);
        //console.log("footer", "$list:", $list);
    }

    function confirmation() {
        //console.log("confirmation");
        $('#wrap .row.confirmation-sold-ticket-information').addClass('justify-space-between gutters-all');
        $('#wrap .row .col-md-12').addClass('background-white').css('overflow', 'hidden');
        $('#wrap .row .col-md-6').addClass('gutter background-white margin-top').removeClass('col-md-push-6 col-md-pull-6').css('overflow', 'hidden');
    }

    function contactOverview() {
        //console.log("contactOverview");
        $('#wrap .row').addClass('justify-space-between margin-top gutters-all');
        $('#wrap .row .col-md-12').addClass('background-white');
        $('#wrap .row .col-md-6').removeClass('col-md-6').addClass('col-sm-6 gutter background-white');
        $('#wrap .row .col-md-3').removeClass('col-md-3').addClass('col-sm-3 gutter background-white');
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function orderHistory() {
        //console.log("orderHistory");
        $('#wrap .row').addClass('justify-space-between margin-top gutters-all');
        $('#wrap .row .col-md-12').addClass('background-white');
        $('#wrap .row .col-md-6').removeClass('col-md-6').addClass('col-sm-6 gutter background-white');
        $('#wrap .row .col-md-3').removeClass('col-md-3').addClass('col-sm-3 gutter background-white');
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function authenticate() {
        //console.log("authenticate");
        var $ContentAuthenticate = $('#ContentAuthenticate');
        $ContentAuthenticate.removeClass('m-t-xl m-b-md').find('.col-md-9').removeClass('col-md-9').addClass('col-12 background-white');
        $ContentAuthenticate.find('.col-md-3').removeClass('col-md-3').addClass('col-12 background-white margin-top');
        $ContentAuthenticate.find('.row.m-l-none.m-r-none').removeClass('m-l-none m-r-none').addClass('justify-space-between gutters-sm');
    }

    function cart() {
        console.log("cart");
        var $rows = $('#wrap .row'),
            $cart = $('#Cart'),
            $buttonHolder = $rows.eq(6).addClass('background-white margin-top').find('>div');
        $rows.addClass('justify-space-between gutters-all');
        $rows.eq(2).addClass('background-white');
        $rows.eq(3).addClass('background-white margin-top');
        $cart.find('>.row').addClass('background-white margin-top').find('.col-md-12').removeClass('col-md-12').addClass('col-12');
        $cart.find('.row .col-md-6.col-md-push-3').removeClass('col-md-6 col-md-push-3').addClass('col-8');
        $('.hr-short-line.layOpt-1').addClass('hidden');

        $('#btnNext').parent()
            .removeAttr('ng-class')
            .attr('ng-class', "showExpressCheckoutButtons() ? 'col-xs-12 col-sm-3' : 'col-sm-4 col-md-3 col-sm-push-4 col-md-push-6'");

        setTimeout(function () {
            $buttonHolder.eq(1).attr('ng-class', '').removeClass('col-sm-push-4 col-md-push-6');
        });
        // console.log("cart", "$rows:", $rows);
        // console.log("cart", "$cart:", $cart);
        // console.log("cart", "$buttonHolder:", $buttonHolder);
    }

    function helpPayment() {
        //console.log("helpPayment");
        $('#wrap .row').addClass('justify-space-between margin-top gutters-all');
        $('#wrap .row .col-md-12').removeClass('col-md-12').addClass('col-12 background-white');
        $('#wrap .row .col-md-4').removeClass('col-md-4').addClass('col-12 background-white');
        $('#wrap .row .col-md-8').removeClass('col-md-8').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-6').removeClass('col-md-6').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-3').removeClass('col-md-3').addClass('col-12 background-white margin-top');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function register() {
        //console.log("register");
        $('#wrap .row').addClass('justify-space-between gutters-all');
        $('#wrap .row .col-md-12').removeClass('col-md-12').addClass('col-12 background-white');
        $('#wrap .row .col-md-4').removeClass('col-md-4').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-8').removeClass('col-md-8').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-6').removeClass('col-md-6').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-3').removeClass('col-md-3').addClass('col-12 background-white margin-top');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function registertickets() {
        // console.log("registertickets");
        var $rows = $('#wrap .row');
        $rows.addClass('justify-space-between gutters-all');
        $('#wrap .row .col-md-12').removeClass('col-md-12').addClass('col-12 background-white');
        $('#wrap .row .col-md-4').removeClass('col-md-4').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-8').removeClass('col-md-8').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-6').removeClass('col-md-6').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-3').removeClass('col-md-3').addClass('col-12 background-white margin-top');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
        $rows.eq(3).addClass('margin-top');
        $rows.eq(4).css('min-height', '100px');
        $rows.eq(5).addClass('background-white margin-top');

        $rows.find('button.btn-checkbox > span[class*="fa-"]').addClass('no-before');
        $rows.find('.assign-tickets')
            .addClass('background-white')
            .attr('ng-class', "form.tickets.length > 1 || (form.currentTicket == null && isPersonalizationComplete()) ? 'col-md-12' : 'col-md-12'");

        $('#header .header-back').addClass('hidden');
        // console.log("registertickets", "$rows", $rows);
        // console.log("registertickets", "row.m-b-xl", $rows.eq(4));
        setTimeout(function () {
            $rows.eq(4).find('.assign-tickets.col-md-12').removeClass('col-md-12').addClass('col-12 background-white margin-top');
            $rows.eq(4).find('#ticketForm').addClass('justify-space-between gutters-all');
            $rows.eq(4).find('#ticketForm .base-form-actions.m-t-md').addClass('col-12 margin-top');
            // console.log("registertickets", "assign-tickets", $rows.eq(4).find('.assign-tickets.col-md-12'));
            // console.log("registertickets", "#ticketForm", $rows.eq(4).find('#ticketForm'));
            // console.log("registertickets", ".base-form-actions.m-t-md", $rows.eq(4).find('#ticketForm .base-form-actions.m-t-md'));
        });
    }

    function viewdeleteuseraccount() {
        // console.log("viewdeleteuseraccount");
        $('#wrap .row').addClass('justify-center items-center gutters-all');
        $('section.base-document-copy').addClass('col-sm-6 col-md-5 background-white');
        $('form.base-form-horizontal').addClass('full-width');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
        $('.grid_8.col-md-4.col-md-offset-1').removeClass('col-md-offset-1');
        $('.base-form-actions').addClass('btn-margin-top');
    }

    function viewchangepassword() {
        //console.log("viewchangepassword");
        $('#wrap .row').addClass('justify-center items-center gutters-all');
        $('section.base-document-copy').addClass('col-sm-6 col-md-5 background-white');
        $('form.base-form-horizontal').addClass('full-width');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function lostPassword() {
        //console.log("lostPassword");
        $('.container_12.m-b-md .clear').remove();
        $('#wrap .row').addClass('justify-center margin-top gutters-all');
        $('section.base-document-copy').addClass('col-12 col-sm-6 col-md-5 background-white').find('.grid_12.col-md-4.col-md-offset-1').removeClass('grid_12 col-md-4 col-md-offset-1').addClass('col-12');
        $('.row.m-b-md .grid_12.col-md-offset-1').removeClass('grid_12 col-md-4 col-md-offset-1').addClass('col-12 col-sm-6 col-md-5 background-white');
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function logon() {
        //console.log("logon");
        $('.container_12.m-t-lg').removeClass('container_12 m-t-lg').find('.clear').remove();
        var $rows = $('#wrap .row');
        //.addClass('row justify-center margin-top gutters-all')
        $rows.eq($rows.length - 1).removeClass('row').find('section.base-document-copy');
        //console.log("logon", "$rows:", $rows);
        $rows.eq($rows.length - 1).find('.grid_4.col-md-offset-1').removeClass('grid_4 col-md-4 col-md-offset-1 m-b-lg').addClass('col-12 col-sm-6 col-md-5 background-white').wrap('<div class="row justify-center margin-top gutters-all"></div>');
        $rows.eq($rows.length - 1).find('.grid_6.col-md-offset-2').removeClass('grid_6 col-md-4 col-md-offset-2 m-b-lg').addClass('col-12 col-sm-6 col-md-5 background-white margin-top').wrap('<div class="row justify-center gutters-all"></div>');
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function newsletter() {
        console.log("newsletter");
        $('.container_12.m-t-lg').removeClass('container_12 m-t-lg').find('.clear').remove();
        var $rows = $('#wrap .row').addClass('justify-space-between gutters-all'),
            $regcodeInputRows = $('#regcodeInput .row');
        //
        console.log("logon", "$rows:", $rows);
        console.log("logon", "$regcodeInputRows:", $regcodeInputRows);
        console.log("logon", "$regcodeInputRows.eq(0).find('>div'):", $regcodeInputRows.eq(0).find('>div'));
        //
        $rows.eq(2).removeClass('m-b-md').addClass('background-white');
        $rows.eq(2).find('.col-md-12').removeClass('col-md-12').addClass('col-12');
        //
        $regcodeInputRows.eq(0).find('>div').removeClass('m-b-md').addClass('col-12 background-white margin-top gutter');
        $regcodeInputRows.eq(1).addClass('background-white margin-top').find('.col-md-8.m-b-sm.text-right').removeClass('col-md-8 m-b-sm').addClass('col-12');
        
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function buyerData() {
        var $rows = $('#wrap .row').addClass('justify-space-between gutters-all'),
            $addressForm = $rows.find('.address-form'),
            //first col pack inside form
            $adiQuestioncatalog = $rows.eq(5).find('>div').removeClass('col-sm-6').find('.adi-questioncatalog'),
            $addressFormWrapper = $addressForm.parent(),
            $questionList = $adiQuestioncatalog.find('.adi-questionlist'),
            $pageNav = $('.row.pageNav'),
            $rowBuyerData = $pageNav.next(),
            $formBuyerData = $('form.form-horizontal.buyerData'),
            //.addClass('justify-space-between padding-top')
            $formBuyerDataRows = $formBuyerData.find('.row'),
            $fieldsetRow = $formBuyerDataRows.find('#WrapBuyerAddress'),
            $wrapBillingAddr = $rows.find('#WrapBillingAddress'),
            //unused
            $rowMtLgBMd = $('.row.m-t-lg.m-b-md'),
            $formDivCols = $rowMtLgBMd.find('>form>div'),
            $colPaymentMethods = $('#PaymentMethods').addClass('col-12 col-sm-8 background-white gutter'),
            $formBillingData = $('#FormFieldsetBillingData'),
            $rowMtMd = $('.row.m-t-md');
        // console.log("buyerData");
        // console.log("buyerData", "$rows:", $rows);
        // console.log("buyerData", "$pageNav:", $pageNav);
        // console.log("buyerData", "$formBuyerData:", $formBuyerData);
        // console.log("buyerData", "$formBuyerDataRows:", $formBuyerDataRows);
        // console.log("buyerData", "$rowBuyerData:", $rowBuyerData);
        // console.log("buyerData", "$adiQuestioncatalog:", $adiQuestioncatalog);
        // console.log("buyerData", "$addressFormWrapper:", $addressFormWrapper);
        // console.log("buyerData", "$questionList:", $questionList);
        // console.log("buyerData", "$addressForm:", $addressForm);
        // //unused
        // console.log("buyerData", "$colPaymentMethods:", $colPaymentMethods);
        // console.log("buyerData", "$rowMtLgBMd:", $rowMtLgBMd);
        // console.log("buyerData", "$formDivCols:", $formDivCols);
        // console.log("buyerData", "$rowMtMd:", $rowMtMd);
        //
        $('#header .header-back').addClass('hidden');

        $wrapBillingAddr.parent().addClass('col-12');
        
        $rows.eq(2).addClass('background-white');
        $rows.eq(2).find('.col-md-12').removeClass('col-md-12').addClass('col-12');
        $rows.eq(3).removeClass('m-b-md').addClass('padding-top').find('.col-md-12').removeClass('col-md-12').addClass('col-12 background-white');
        //
        $formBuyerDataRows.eq(0).addClass('background-white margin-top').children().eq(0).addClass('col-12');
        $fieldsetRow.addClass('row gutters').children().eq(1).removeClass('row justify-space-between gutters-all').addClass('col-12').find('.col-sm-offset-4').removeClass('col-sm-offset-4 col-sm-8');
        
        $adiQuestioncatalog.addClass('col-12 col-md-6');
        $addressFormWrapper.addClass('col-12 col-md-6');
        $addressFormWrapper.next().addClass('col-12');
        
        $formBuyerDataRows.eq(2).addClass('background-white margin-top').find('.col-sm-12').removeClass('col-sm-12').addClass('col-12');
        $formBuyerDataRows.eq(2).find('.col-sm-6').removeClass('col-sm-6').addClass('col-12');
        $formBuyerDataRows.eq(2).find('.col-sm-4').removeClass('col-sm-4');
        $formBuyerDataRows.eq(2).find('.col-sm-8').removeClass('col-sm-8');
        $formBuyerDataRows.eq(2).find('.col-sm-push-4').removeClass('col-sm-push-4');
        
        $formBuyerDataRows.eq(3).removeClass('gutters-all');
        $formBuyerDataRows.eq(3).find('.adi-questionlist').addClass('row').find('>div').addClass('col-12');
        $formBuyerDataRows.eq(3).find('.base-form-control-label.control-label').removeClass('base-form-control-label control-label').addClass('legend');
        $formBuyerDataRows.eq(3).find('.p-w-xs').css('margin', '0');
        
        $formBuyerDataRows.eq(4).addClass('background-white margin-top').find('.col-sm-12.m-t-md.m-b-lg').removeClass('col-sm-12 m-t-md m-b-lg').addClass('col-12');
        
        $('.hr-short-line.layOpt-1').addClass('hidden');

        $formBillingData.addClass('row');
        $formBillingData.find('> [class*=col-]').css('padding', '0 16px');

        //unused
        /*$rowMtMd.eq(0).find('.col-sm-12').removeClass('col-sm-12').addClass('col-12 background-white');
        $rowMtMd.eq(1).addClass('gutters-all').find('.col-sm-4').addClass('col-12 background-white gutter');
        $rowMtLgBMd.removeClass('row m-t-lg m-b-md').addClass('margin-top').find('>form').addClass('row gutters-all background-white');
        $formDivCols.eq(0).removeClass('col-sm-12').addClass('col-12 no-padding');
        $colPaymentMethods.next().addClass('col-12 background-white gutter');*/
    }

    function imprint() {
        //console.log("imprint");
        $('.container_12.m-t-lg').removeClass('container_12 m-t-lg').find('.clear').remove();
        var $rows = $('#wrap .row');
        console.log("imprint", "$rows:", $rows);
        $rows.eq(2).addClass('justify-space-between gutters-all').find('.col-md-12').addClass('col-12 background-white');
        $rows.eq(3).addClass('justify-space-between gutters-all').find('.col-md-6').addClass('col-12 col-sm-6 background-white margin-top');
        $rows.eq(4).addClass('justify-space-between gutters-all margin-top').find('.col-md-12').addClass('col-12 background-white');
        $rows.eq(5).addClass('justify-space-between gutters-all').find('.col-md-6').addClass('col-12 col-sm-6 background-white margin-top');
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function payment() {
        //console.log("payment");
        $('.container_12.m-t-lg').removeClass('container_12 m-t-lg').find('.clear').remove();
        var $rows = $('#wrap .row');
        console.log("payment", "$rows:", $rows);
        $rows.addClass('justify-space-between gutters-all');
        $rows.eq(2).addClass('background-white margin-top');
        $rows.eq(3).removeClass('m-b-md').addClass('background-white margin-top').find('.col-md-12').removeClass('col-md-12').addClass('col-12');
        $rows.eq(4).find('.col-md-8').addClass('col-12 background-white margin-top gutter');
        $rows.eq(4).find('.col-sm-4').removeClass('col-sm-4').addClass('col-12 col-md-4 background-white margin-top gutter');
        $rows.eq(4).find('.btn.btn-theme.col-xs-12').removeClass('col-xs-12').addClass('btn-block');
        $rows.eq(4).find('.hidden-sm.hidden-md.hidden-lg').removeClass('hidden-sm hidden-md hidden-lg').addClass('hidden');
        //
        //$rows.find('.col-sm-5.col-xs-12.pull-right').removeClass('col-sm-5 col-xs-12 pull-right').addClass('col-12').parent().addClass('row justify-space-between gutters-all');
        //$rows.find('.col-xs-12-rermoved').removeClass('col-xs-12-rermoved').addClass('btn-block');
        //
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function summary() {
        console.log("summary");
        $('.container_12.m-t-lg').removeClass('container_12 m-t-lg').find('.clear').remove();
        var $rows = $('#wrap .row');
        console.log("summary", "$rows:", $rows);
        $rows.addClass('justify-space-between gutters-all');
        $rows.eq(2).addClass('background-white margin-top');
        $rows.eq(3).addClass('background-white margin-top').find('.col-sm-12').removeClass('col-sm-12').addClass('col-12');
        $rows.eq(4).addClass('background-white margin-top').find('>div').addClass('col-12');
        $rows.eq(5).addClass('hidden');
        $rows.eq(6).addClass('background-white margin-top');
        $rows.eq(7).removeClass('m-t-md').addClass('background-white margin-top');
        $rows.eq(8).removeClass('m-t-md').addClass('background-white margin-top');
        $rows.eq(9).removeClass('row justify-space-between background-white margin-top gutters-all m-t-lg m-b-md').find('form.form-summary-bottom').addClass('row justify-space-between background-white margin-top gutters-all').find('.col-sm-12').remove();
        //$rows.eq(9);
        //$rows.eq(5).addClass('hidden');
        //$rows.eq(7).removeClass('m-t-md').addClass('margin-top');
        //$rows.eq(8).removeClass('m-t-md').find('.col-sm-4.col-12.background-white').addClass('margin-top');
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function helpSupport() {
        //console.log("helpSupport");
        var $rows = $('#wrap .row');
        //console.log("helpSupport", "$rows:", $rows);
        $rows.eq(2).removeClass('m-b-md').addClass('justify-space-between gutters-all').find('.col-md-12').addClass('col-12 background-white');
        $rows.eq(3).addClass('justify-space-between gutters-all').find('.col-md-8').addClass('col-12 col-sm-7 gutter background-white margin-top');
        $rows.eq(3).addClass('justify-space-between gutters-all').find('.col-md-4').addClass('col-12 col-sm-5 gutter background-white margin-top');
        $rows.eq(3).find('.col-sm-offset-4.col-sm-6').removeClass('col-sm-offset-4 col-sm-6').addClass('margin-top');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
    }

    function order() {
        //console.log("order");
        $('#wrap .row').addClass('justify-space-between margin-top gutters-all');
        $('#wrap .row .col-sm-12').removeClass('col-sm-12').addClass('col-12 background-white');
        $('#wrap .row .col-md-12').removeClass('col-md-12').addClass('col-12 background-white');
        $('#wrap .row .col-md-4').removeClass('col-md-4').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-8').removeClass('col-md-8').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-6').removeClass('col-md-6').addClass('col-12 background-white margin-top');
        $('#wrap .row .col-md-3').removeClass('col-md-3').addClass('col-12 background-white margin-top');
        $('#wrap .row').eq(4).removeClass('margin-top');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
        //console.log("order", "rows:", $('#wrap .row'));
    }

    function orderVerify() {
        //console.log("orderVerify");
        $('#wrap .row').addClass('justify-space-between margin-top gutters-all');
        $('#wrap .row .col-xs-12').removeClass('col-xs-12').addClass('col-12 background-white');
        $('.row .clear').remove();
        $('.hr-short-line.layOpt-1').addClass('hidden');
        //console.log("order", "rows:", $('#wrap .row'));
    }

    function start() {
        $('#wrap,#footer').addClass('fade-in');
    }

    function fairevents() {
    }

    function legitimations() {
        $('#wrap .row.m-b-md > [class*=col-]').addClass('background-white');
        $('#wrap .row m-b-lg > [class*=col-]').addClass('background-white');
        $('#wrap .registerTickets > .row > [class*=col-]').addClass('background-white');
        $('#documentUpload span.fa-left').addClass('no-before').find('> i.fa').css('left', 'auto');
    }

    function evidencevalidation() {
        $('#wrap .row.m-b-md')
            .addClass('background-white')
            .addClass('margin-top')
            .css('padding', '16px 16px')
            .attr('id', 'evidenceVlidationDescription');
        $('#wrap .row.m-b-md').append($('.img-responsive.evidence-image'));
        $('.col-xs-4.evidenceOr')
            .addClass('background-white')
            .addClass('margin-top');
        $('#evdPrivacyContainer')
            .css('margin-left', 'auto')
            .addClass('margin-top');
        $('#evdFaqContainer')
            .css('margin-left', 'auto')
            .addClass('background-white');
        $('#evdUploadBtn .fa-left').addClass('no-before').css('width', '60px');
        $('#evdCameraBtn .fa-left').addClass('no-before').css('width', '60px');
        $('#evdNoApprovalBtn .fa-left').addClass('no-before').css('width', '60px');
    }

    // ENTRY
    function ready() {
        start();
        header();
        if (isOrder) {
            order();
        } else if (isOrderVerify) {
            orderVerify();
        } else if (isConfirmation) {
            confirmation();
        } else if (isHelpContactOverview) {
            contactOverview();
        } else if (isHelpSupport) {
            helpSupport();
        } else if (isOrderhistory) {
            orderHistory();
        } else if (isLostPassword) {
            lostPassword();
        } else if (isLogon) {
            logon();
        } else if (isAuthenticate) {
            authenticate();
        } else if (isRegister) {
            register();
        } else if (isChangepassword) {
            viewchangepassword();
        } else if (isViewDeleteUserAccount) {
            viewdeleteuseraccount();
        } else if (isImprint) {
            imprint();
        } else if (isShop) {
            shop();
        } else if (isCart) {
            cart();
        } else if (isHelpPayment) {
            helpPayment();
        } else if (isBuyerdata) {
            buyerData();
        } else if (isPayment) {
            payment();
        } else if (isSummary) {
            summary();
        } else if (isUserAccount) {
            userAccount();
        } else if (isUserProfile) {
            userProfile();
        } else if (isRegistertickets) {
            registertickets();
        } else if (isNewsletter) {
            newsletter();
        } else if (isFairevents) {
            fairevents();
        } else if (isLegitimations) {
            legitimations();
        } else if (isEvidenceValidation) {
            evidencevalidation();
        }
        startSeite();
        footer();
        console.log("+ ENTRY +");
        
        console.log("header isShop                :", isShop);
        console.log("header isConfirmation        :", isConfirmation);
        console.log("header isHelpContactOverview :", isHelpContactOverview);
        console.log("header isOrderhistory        :", isOrderhistory);
        console.log("header isLostPassword        :", isLostPassword);
        console.log("header isLogon               :", isLogon);
        console.log("header isLogon               :", isLogon);
        console.log("header isOrder               :", isOrder);
        console.log("header isOrderVerify         :", isOrderVerify);
        console.log("header isRegister            :", isRegister);
        console.log("header isCart                :", isCart);
        console.log("header isAuthenticate        :", isAuthenticate);
        console.log("header isHelpPayment         :", isHelpPayment);
        console.log("header isHelpSupport         :", isHelpSupport);
        console.log("header isChangepassword      :", isChangepassword);
        console.log("header isBuyerdata           :", isBuyerdata);
        console.log("header isImprint             :", isImprint);
        console.log("header isPayment             :", isPayment);
        console.log("header isSummary             :", isSummary);
        console.log("header isUserAccount         :", isUserAccount);
        console.log("header isUserProfile         :", isUserProfile);
        console.log("header isFairevents          :", isFairevents);
        console.log("header isLegitimations       :", isLegitimations);
        console.log("- LIVE -");
        console.log("header isRegistertickets     :", isRegistertickets);
        console.log("header isOrderDetail         :", isOrderDetail);
        console.log("header isNewsletter          :", isNewsletter);
        console.log("header isEvidenceValidation  :", isEvidenceValidation);
        //console.log("+ ENTRY +", "$rows:", $('#wrap .row'));
    }

    document.addEventListener("DOMContentLoaded", ready);

}());
