<?php

namespace App\Http\Controllers;

use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use App\Models\User;

class mqttTokenController extends Controller
{
    public function requestToken(User $user){

        $key = "secret"; //ich liebe Sicherheit 
        $acl = [
            [
                "permit" => "allow",
                "username" => $user->name,
                "action" => "publish",
                "topics" => ["users/{$user->name}/robots/#"]
            ]
        ];
        $payload = [
            'username' => $user->name,
            'iss' => 'EMQX Broker',
            'aud' => 'laravel',
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + 3600, // Token ist 1 Stunde gült
            'client_attrs' => [
                'role' => 'client',
                'sn' => $user->id,
            ],
            'acl'=> $acl, 
        ];

        $jwt = JWT::encode($payload,$key,'HS256');

        return [$jwt];

    }

    

}
