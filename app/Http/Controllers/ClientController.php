<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publication;

class ClientController extends Controller
{
    public function index()
    {
        $publications = Publication::orderBy('id', 'desc')->get();
        return view('index')->with(array('publications' => $publications));
    }
}
