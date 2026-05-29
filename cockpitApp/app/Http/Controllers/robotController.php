<?php

namespace App\Http\Controllers;
use App\Models\Robot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use phpDocumentor\Reflection\Types\Nullable;

class robotController extends Controller
{
    public function index(){
        return Inertia::render('Robots/Index');
    }

    public function create(){
        return Inertia::render('Robots/Create');
    }
    public function registerRobot(Request $request){
        $data = $request->validate([
            'nam'=>['string','max:100','required'],
            'adr'=>['string','required'],
            'bez'=>['string'],

        ]);

        $Robot = $request->user()->robots()->create($data);

        return redirect()
        ->route('robots.index')
        ->with('success','Roboter registriert');

    }
}
