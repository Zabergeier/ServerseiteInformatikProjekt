<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\mqttTokenController;
use App\Http\Controllers\robotController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;


Route::inertia('/', 'welcome')->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('/robots',[robotController::class,'index'])->name('robots.index');
    Route::get('/robots/create',[robotController::class,'create'])->name('robots.create');
    Route::get('/robots/register',[robotController::class,'registerRobot'])->name('robots.register');
    Route::get('/robots/{robot}',[robotController::class,'activateCockpit'])->name('robots.cockpit');
    Route::post('/mqtt/token',[mqttTokenController::class,'issueTokenForBrowserClient']) ->name('mqtt.token');
});


require __DIR__.'/settings.php';
