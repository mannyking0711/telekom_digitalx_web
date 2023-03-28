<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactSalesEmail extends Mailable
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
            ->subject('DIGITAL X Kontaktformular Beratungswunsch')
            ->markdown('emails.contact.sales');
    }
}
