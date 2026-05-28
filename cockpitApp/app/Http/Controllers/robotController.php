<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class robotController extends Controller
{
    public function index(){
        return Inertia::render('Robots/Index');
    }

    public function create(){
        return Inertia::render('Robots/Create');
    }
}
