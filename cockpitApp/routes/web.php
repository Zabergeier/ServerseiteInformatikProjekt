<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\mqttTokenController;
use App\Http\Controllers\robotController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;


Route::inertia('/', 'welcome')->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/robots/index',[robotController::class,'index'])->name('robots.index');
    Route::get('/robots/create',[robotController::class,'create'])->name('robots.create');
    Route::get('/robots/register',[robotController::class,'registerRobot'])->name('robots.register');


    Route::get('/robots/{robot}/cockpit',[robotController::class,'activateCockpit'])->name('robots.cockpit');
    Route::get('/robots/{robot}/edit',[robotController::class,'edit'])->name('robots.edit');
    Route::put('/robots/{robot}/saveEdit',[robotController::class,'saveEdit'])->name('robots.saveEdit');

    Route::put('/robots/{robot}/resetPsw',[robotController::class,'resetPsw'])->name('robots.resetPsw');
    Route::delete('/robots/{robot}',[robotController::class,'delete'])->name('robots.delete');
    
    Route::post('/mqtt/token',[mqttTokenController::class,'issueTokenForBrowserClient']) ->name('mqtt.token');
});


require __DIR__.'/settings.php';
