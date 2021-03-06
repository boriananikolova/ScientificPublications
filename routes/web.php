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

Route::get('/', 'ClientController@index')->name('index');

Route::post('/search', 'ClientController@search')->name('search');

Auth::routes();


Route::group(['middleware' => 'auth'], function()
{
    Route::get('/logout', 'AdminController@logoutUser')->name('logout');

    Route::get('/dashboard', 'AdminController@dashboard')->name('dashboard');

    Route::get('/categories', 'CategoriesController@index')->name('categories');

    Route::get('/category/{id?}', 'CategoriesController@showCategory')->name('category');

    Route::post('/category', 'CategoriesController@saveCategory')->name('saveCategory');

    Route::post('/del-category', 'CategoriesController@deleteCategory')->name('deleteCategory');

    Route::get('/publications', 'PublicationsController@index')->name('publications');

    Route::get('/publication/{id?}', 'PublicationsController@showPublication')->name('publication');

    Route::post('/publication', 'PublicationsController@savePublication')->name('savePublication');

    Route::post('/del-publication', 'PublicationsController@deletePublication')->name('deletePublication');

    Route::get('/users', 'AdminController@showAllUsers')->name('users');

    Route::post('/del-user', 'AdminController@deleteUser')->name('deleteUser');

});

