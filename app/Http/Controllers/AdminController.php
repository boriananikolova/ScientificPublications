<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;

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

    public function showAllUsers()
    {
        $users = User::orderBy('id', 'desc')->get();
        return view('admin.users')->with(array('users'=>$users));
    }

    public function deleteUser(Request $request)
    {
        if($request->isMethod('POST')){
            if (!empty($request->input('id'))){
                $user = User::where(['id' => $request->input('id')])->first();
                if (!empty($user)){
                    $user->delete();
                    return response()->json(['result' => 'del']);
                }else{
                    return response()->json(['result' => 'not']);
                }
            }    
        }
    }
}
