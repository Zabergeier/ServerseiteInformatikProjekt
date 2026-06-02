<?php

use App\Http\Controllers\mqttTokenController;
use App\Http\Controllers\robotController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
})->middleware('auth:sanctum');

Route::post('/mqtt/token',[mqttTokenController::class,'issueTokenForRobotClient'])->middleware('auth:sanctum');

Route::post('/login',[robotController::class,'login']);