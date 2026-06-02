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
        error_log($user->id);
        $acl = [
            [
                "permission" => "allow",
                "username" => $user->name,
                "action" => "publish",
                "topics" => ["user/". $user->getKey() . "/roboter/#"],
            ]
        ];
        $payload = [
            'iss' => 'EMQX Broker',
            'aud' => 'laravel',
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + 3600, // Token ist 1 Stunde gült
            'client_attrs' => [
                'role' => 'client',
                'sn' => "emqx_2" . $user -> getKey(),
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
            'iss' => 'EMQX Broker',
            'aud' => 'laravel',
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + 3600, // Token ist 1 Stunde gült
            'client_attrs' => [
                'role' => 'client',
                'sn' => 'emqx_' . $user->getKey(),
            ],
            'acl'=> $acl, 
        ];
        
        $jwt = JWT::encode($payload,$key,'HS256');
        
        
        return ['token'=>$jwt];

    }

    

}
