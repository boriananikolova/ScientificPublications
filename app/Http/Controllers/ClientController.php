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

    public function search(Request $request)
    {
        if ($request->isMethod('POST')) {

            if ($request->input('typeSearch') == 'byAuthor') {
                $publications = Publication::where(['author' => $request->input('search')])->get();
                if(!empty($publications)){
                    return view('index')->with(array('publications' => $publications));
                }
                else{
                    return redirect()->route('index')->with('error', 'There are no publications from this author!');
                }
            } 
            else if ($request->input('typeSearch') == 'byType') {
                $publications = Publication::where(['type' => $request->input('search')])->get();
                if(!empty($publications)){
                    return view('index')->with(array('publications' => $publications));
                }
                else{
                    return redirect()->route('index')->with('error', 'There are no publications from this type!');
                }
            } 
            else {
                $publications = Publication::where(['title' => $request->input('search')])->get();
                if(!empty($publications)){
                    return view('index')->with(array('publications' => $publications));
                }
                else{
                    return redirect()->route('index')->with('error', 'There are no publications from this title!');
                }
            }
        } else {
            return redirect()->route('index')->with('error', 'Wrong request method!');
        }
    }
}
