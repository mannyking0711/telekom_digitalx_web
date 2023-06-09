<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Password Reset Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are the default lines which match reasons
    | that are given by the password broker for a password update attempt
    | has failed, such as for an invalid token or invalid new password.
    |
    */
    'reset' => 'Your password has been reset!',
    'sent' => 'We have emailed your password reset link!',
    'throttled' => 'Please wait before retrying.',
    'token' => 'This password reset token is invalid.',
    'user' => "We can't find a user with that email address.",

    "reset_mail"                => 'A verification link has been sent to your email address.',
    "reset_mail_subject"        => "Reset Password Notification",
    "reset_mail_text"           => "You are receiving this email because we received a password reset request for your account.",
    "reset_mail_button"         => "Reset Password",
    "reset_mail_text_expire"    => "This password reset link will expire in :minutes minutes.",
    "reset_mail_text_wrong"     => "If you did not request a password reset, no further action is required.",
];
