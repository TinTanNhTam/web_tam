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
    return 'Hello World';
});

 Route::any('/{slug}', function () {
         return File::get(public_path() . '/admin/index.html');
 })->where('slug', '([A-z\d-\/_.]+)?');







//  Route::group(['middleware' => []], function () {

//     Route::group(['prefix' => 'artisan'], function () {
//         Route::get('reset', 'ArtisanController@getCommandReset');
//     });

//     Route::group(['prefix' => 'file'], function () {
//         Route::get('import-export', 'TestController@getImportExport');
//         Route::get('download/{type}', 'TestController@getDownload');
//         Route::post('import', 'TestController@postImport');
//     });

//     Route::group(['prefix' => 'test'], function () {
//         Route::get('test', 'TestController@index');
//     });

   

    // Route::any('/{plus}', function () {
    //     return File::get(public_path() . '/admin/index.html');
    // })->where('admin', '([A-z\d-\/_.]+)?');
//  });
