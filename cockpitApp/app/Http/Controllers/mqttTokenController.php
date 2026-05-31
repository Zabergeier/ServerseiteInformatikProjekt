<?php

namespace App\Http\Controllers;

use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Pail\ValueObjects\Origin\Console;

class mqttTokenController extends Controller
{
    public function requestToken(Request $request){
        $user = $request->user();
        
        $key = '65fc37f81ad60c9c72fd7ccd227ab6dd50c1a287d1b5a1070f36714395ea2e35';//config('mqtt.mqtt_secret');
        
        $acl = [
            [
                "permission" => "allow",
                
                "action" => "publish",
                "topics" => ["test/#"],
                
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

    

}
