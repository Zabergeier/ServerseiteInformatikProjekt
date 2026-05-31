<?php

namespace App\Http\Controllers;
use App\Models\Robot;
use App\Models\User;
use Illuminate\Container\Attributes\CurrentUser;
use Illuminate\Http\Request;
use Inertia\Inertia;
use phpDocumentor\Reflection\Types\Nullable;
use SpomkyLabs\Pki\X509\GeneralName\IPAddress;

class robotController extends Controller
{
    public function index(){
        $robots = auth()->user()->robots()->get();
        return Inertia::render('Robots/Index',['robots'=>$robots]);

    }

    public function create(){
        return Inertia::render('Robots/Create');
    }
    public function registerRobot(Request $request){
        $data = $request->validate([
            'nam'=>['string','max:100','required'],
            'adr'=>['string','required'],
            'bez'=>['string','required'],

        ]);

        $Robot = $request->user()->robots()->create($data);
        
        return redirect()
        ->route('robots.index')
        ->with('success','Roboter registriert');

    }

    public function activateCockpit(int $id){
        $roboter = Robot::findOrFail($id);
        $user = $roboter -> user();
        return Inertia::render('Robots/Cockpit',['user'=> $user,'roboter'=> $roboter]);
    }
}
