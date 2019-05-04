<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/',function(){

    return response()-> json(["nombre"=>"Hola mundo"]);
});

Route::prefix('user')->group(function(){
    Route::post('login','AuthController@login');
});

//Rutas Proyecto
Route::middleware('auth:api')->prefix('proyecto')->group(function(){
   Route::post('/','ProyectosController@store');
});