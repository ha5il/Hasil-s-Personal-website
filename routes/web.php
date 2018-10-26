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

Route::get('/backend', [
    'as' => 'backend',
    'uses' => 'AdminController@backend',
]);