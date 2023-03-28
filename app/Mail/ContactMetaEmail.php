<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMetaEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $formdata;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $formdata)
    {
        $this->formdata = $formdata;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('DIGITAL X Kontaktformular')
            ->markdown('emails.contact.meta');
    }
}
