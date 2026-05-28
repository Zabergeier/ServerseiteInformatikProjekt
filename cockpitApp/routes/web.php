<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\robotController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

Route::inertia('/', 'welcome')->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('/robots',[robotController::class,'index'])->name('robots.index');
    Route::get('/robots/create',[robotController::class,'create'])->name('robots.create');
});

require __DIR__.'/settings.php';
