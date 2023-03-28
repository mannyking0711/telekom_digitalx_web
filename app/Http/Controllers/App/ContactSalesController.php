<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Mail\ContactSalesEmail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;

class ContactSalesController extends Controller
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
            'areacode' => 'nullable',
            'phone' => 'nullable',
            'companySize' => 'required',
            'company' => 'nullable',
            'street' => 'nullable',
            'number' => 'nullable',
            'zip' => 'required',
            'city' => 'required',
            'message' => 'required',
        ]);

        Mail::to(config('mail.to.contact.sales.address'))->send(new ContactSalesEmail($data));
        return response()->json(['sent' => true], Response::HTTP_OK);
    }
}
