<?php

namespace App\Http\Controllers;
use App\Models\Robot;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Container\Attributes\CurrentUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Number;
use Inertia\Inertia;
use Mockery\Undefined;
use phpDocumentor\Reflection\Types\Nullable;
use SpomkyLabs\Pki\X509\GeneralName\IPAddress;
use function Illuminate\Support\weeks;

class robotController extends Controller
{
    public function login(Request $Request){
        $data = $Request -> validate([
            'robot_id' => ['required','string'],
            'psw' => ['required','string'],
        ]);

        
        $tmp = explode('_',$data['robot_id']);
        $id = (int)$tmp[1];
        $robot = Robot::find($id);

        if(!$robot || !HASH::check($data['psw'],$robot->psw)){
            abort(401);
        }

        $token = $robot->createToken('robot-token',['*'],now()->add(weeks(1)))->plainTextToken;
        return response() -> json([
            'token' => $token,
            'roboter' => $robot,
        ]);

    }

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
            'bez'=>['string','required'],

        ]);

        
        $psw = bin2hex(random_bytes(10));
        
        
        $data['psw'] =  Hash::make($psw);
        
        $Robot = $request->user()->robots()->create($data);
       

        return Inertia::render('Robots/Cockpit',['robot'=> $Robot,'user'=> $Robot->user(),'psw' => $psw]);
        
        
        
        
        
    }

    public function activateCockpit(Request $request, Robot $robot){
        return Inertia::render('Robots/Cockpit',[
        'user'=> $request-> user(),
        'robot'=> $robot,
        'psw'=> null
        ]);
    }
}
