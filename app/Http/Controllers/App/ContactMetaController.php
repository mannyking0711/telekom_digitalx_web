<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Mail\ContactMetaEmail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;

class ContactMetaController extends Controller
{
    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'locale' => 'nullable',
            'referer' => 'nullable',
            'salutation' => 'required',
            'title' => 'nullable',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        Mail::to(config('mail.to.contact.meta.address'))->send(new ContactMetaEmail($data));
        return response()->json(['sent' => true], Response::HTTP_OK);
    }
}
