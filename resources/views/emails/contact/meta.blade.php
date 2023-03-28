@component('mail::message')
# Kontaktformular

<p>Sprache: {!! strtoupper(@$formdata['locale']) !!} </p>

<p>Referer: {{ @$formdata['referer'] }} </p>

<p>Anrede: {{ @$formdata['salutation'] }} </p>

<p>Titel: {{ @$formdata['title'] }} </p>

<p>Vorname: {{ @$formdata['firstname'] }} </p>

<p>Nachname: {{ @$formdata['lastname'] }} </p>

<p>E-Mail: {{ @$formdata['email'] }} </p>

<p>Nachricht:<br> {!! nl2br(@$formdata['message']) !!} </p>

@endcomponent
