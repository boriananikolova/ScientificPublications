<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view('admin.dashboard');
    }

    public function logoutUser(Request $request){
        Auth::logout();
        $request->session()->flush();
        return redirect('/');
    }
}
