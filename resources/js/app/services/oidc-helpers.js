export const getAuthenticateOidcPayload = (locale, origin, redirectPath) => {
    let payload = {
        options: {
            redirect_uri: origin + '/' + locale + '/callback',
            ui_locales: locale === 'en' ? 'en-US' : 'de-DE',
        }
    };
    if (redirectPath) {
        payload['redirectPath'] = redirectPath;
    }
    return payload
}

export const getProviderLogoutUri = (locale) => {
    return 'https://secure.digital-x.eu/DX_Identity/Account/Logout?ui_locales=' + (locale === 'en' ? 'en-US' : 'de-DE');
}
