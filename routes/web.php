<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::group(['middleware' => 'auth'], function()
{
    Route::get('/logout', 'AdminController@logoutUser')->name('logout');

    Route::get('/dashboard', 'AdminController@dashboard')->name('dashboard');

    Route::get('/categories', 'CategoriesController@index')->name('categories');

    Route::get('/category/{id?}', 'CategoriesController@showCategory')->name('category');

    Route::post('/category', 'CategoriesController@saveCategory')->name('saveCategory');
});

