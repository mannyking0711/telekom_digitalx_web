@component('mail::message')
# Kontaktformular Beratungswunsch

<p>Sprache: {!! strtoupper(@$formdata['locale']) !!} </p>

<p>Referer: {{ @$formdata['referer'] }} </p>

<p>Anrede: {{ @$formdata['salutation'] }} </p>

<p>Titel: {{ @$formdata['title'] }} </p>

<p>Vorname: {{ @$formdata['firstname'] }} </p>

<p>Nachname: {{ @$formdata['lastname'] }} </p>

<p>E-Mail: {{ @$formdata['email'] }} </p>

<p>Vorwahl: {{ @$formdata['areacode'] }} </p>

<p>Telefonnummer: {{ @$formdata['phone'] }} </p>

<p>Unternehmensgröße: {{ @$formdata['companySize'] }} </p>

<p>Unternehmen: {{ @$formdata['company'] }} </p>

<p>Straße: {{ @$formdata['street'] }} </p>

<p>Nr.: {{ @$formdata['number'] }} </p>

<p>PLZ: {{ @$formdata['zip'] }} </p>

<p>Stadt: {{ @$formdata['city'] }} </p>

<p>Beratungswunsch:<br> {!! nl2br(@$formdata['message']) !!} </p>

@endcomponent
