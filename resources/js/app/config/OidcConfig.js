// Production setup login with Aditus:
export default function createOidcSettings(origin, locale) {
    return {
        authority: 'https://secure.digital-x.eu/DX_Identity/',
        client_id: 'F53C3871-5521-48C7-A603-071A8BF0A31E.aditus.de',
        response_type: 'code',
        scope: 'company email openid profile',
        redirect_uri: origin + '/' + locale + '/callback',
        post_logout_redirect_uri: origin + '/logout',

        loadUserInfo: true,
        ui_locales: locale === 'en' ? 'en-US' : 'de-DE',

        automaticSilentRenew: false,
        automaticSilentSignin: false,
        silentRedirectUri: origin + '',
    }
}
