<?php

namespace App\Http\Controllers;

use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Pail\ValueObjects\Origin\Console;
use App\Models\Robot;
use Number;

class mqttTokenController extends Controller
{
    public function issueTokenForBrowserClient(Request $request){
        $user = $request->user();
        
        
        $key = config('mqtt.mqtt_secret');
        
        $acl = [
            [
                "permission" => "allow",
                "username" => $user->name,
                "action" => "publish",
                "topics" => ["user/". $user->getKey() . "/roboter/#"],
            ]
        ];
        $payload = [
            
            'sub' => $user->name,
            'clientid' => 'emqx_react_1',
            'iss' => 'EMQX Broker',
            'aud' => 'laravel',
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + 3600, // Token ist 1 Stunde gült
            'client_attrs' => [
                'role' => 'client',
                'sn' => 'emqx_react_1',
            ],
            'acl'=> $acl, 
        ];
        
        $jwt = JWT::encode($payload,$key,'HS256');
        
        
        return ['token'=>$jwt];

    }

    public function issueTokenForRobotClient(Request $request)
    {
        $user = $request->user();

        $key = config('mqtt.mqtt_secret');
        
        $acl = [
            [
                "permission" => "allow",
                "username" => $user->nam,
                "action" => "subscribe",
                "topics" => ["user/". $user->user_id . "/roboter/" . $user -> getKey() . "#"],
            ]
        ];
        $payload = [
            
            'sub' => $user->nam,
            'clientid' => 'emqx_react_1',
            'iss' => 'EMQX Broker',
            'aud' => 'laravel',
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + 3600, // Token ist 1 Stunde gült
            'client_attrs' => [
                'role' => 'client',
                'sn' => 'emqx_react_1',
            ],
            'acl'=> $acl, 
        ];
        
        $jwt = JWT::encode($payload,$key,'HS256');
        
        
        return ['token'=>$jwt];

    }

    

}
