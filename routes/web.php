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

Route::get('/', [
    'as' => 'home',
    'uses' => 'PageController@home',
]);

Route::get('/about-hasil', [
    'as' => 'aboutMe',
    'uses' => 'PageController@aboutMe',
]);

Route::get('/hire-hasil', [
    'as' => 'hireMe',
    'uses' => 'PageController@hireMe',
]);

Route::post('/hire-hasil', [
    'as' => 'hireMeForm',
    'uses' => 'PageController@hireMeForm',
]);

Route::group(['prefix' => 'project'], function () {
    Route::get('/Electrical-Performance-Analyser', [
        'as' => 'project1',
        'uses' => 'ProjectController@project1',
    ]);
    Route::get('/Pickup-Delivery-App', [
        'as' => 'project2',
        'uses' => 'ProjectController@project2',
    ]);
    Route::get('/Achievements-unlocker', [
        'as' => 'project3',
        'uses' => 'ProjectController@project3',
    ]);
    Route::get('/RABC-Analyser', [
        'as' => 'project4',
        'uses' => 'ProjectController@project4',
    ]);
    Route::get('/Electrical-Thief-Eliminator', [
        'as' => 'project5',
        'uses' => 'ProjectController@project5',
    ]);
    Route::get('/RFID-Limitor', [
        'as' => 'project6',
        'uses' => 'ProjectController@project6',
    ]);
});

// Admin Routes
Route::group(['prefix' => 'backend'], function () {

    Route::get('/', [
        'as' => 'backend',
        'uses' => 'AdminController@backend',
    ]);

    Route::get('/detailed/{id}', [
        'as' => 'detailed',
        'uses' => 'AdminController@detailed',
    ]);

    Route::get('/hideit/{id}', [
        'as' => 'hideit',
        'uses' => 'AdminController@hideit',
    ]);

    Route::get('/unhideit/{id}', [
        'as' => 'unhideit',
        'uses' => 'AdminController@unhideit',
    ]);

    Route::get('/markfake/{id}', [
        'as' => 'markfake',
        'uses' => 'AdminController@markfake',
    ]);

    Route::get('/savecomment/{id}/{my_comment}', [
        'as' => 'savecomment',
        'uses' => 'AdminController@my_comment',
    ]);

});

// material theme routes
Route::group(['prefix' => 'material'], function () {

    Route::get('/', [
        'as' => 'material.home',
        'uses' => 'PageController@materialhome',
    ]);

});

// amp generator for https://amp.hasilpaudyal.com.np

Route::group(['prefix' => 'amp'], function () {

    Route::get('/', [
        'as' => 'amp.home',
        'uses' => 'AmpController@index',
    ]);

    Route::get('/poem/{id}/{urlSlug}', [
        'as' => 'amp.poem',
        'uses' => 'AmpController@poem',
    ]);

    Route::get('/quote/{id}/{urlSlug}', [
        'as' => 'amp.quote',
        'uses' => 'AmpController@quote',
    ]);

    Route::get('/project/{id}/{urlSlug}', [
        'as' => 'amp.project',
        'uses' => 'AmpController@project',
    ]);

    Route::get('/poems', [
        'as' => 'amp.poems',
        'uses' => 'AmpController@poems',
    ]);

    Route::get('/quotes', [
        'as' => 'amp.quotes',
        'uses' => 'AmpController@quotes',
    ]);

    Route::get('/projects', [
        'as' => 'amp.projects',
        'uses' => 'AmpController@projects',
    ]);

    Route::get('/sitemap.xml', [
        'as' => 'amp.sitemap',
        'uses' => 'AmpController@sitemap',
    ]);

    Route::get('/update-firebase', [
        'uses' => 'AmpController@update_firebase',
    ]);
});