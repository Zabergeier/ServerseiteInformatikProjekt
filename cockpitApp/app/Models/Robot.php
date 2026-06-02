<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

#[Fillable(['psw', 'bez','nam'])]

class Robot extends Authenticatable
{
    use HasApiTokens;

    protected $hidden = [
        'psw'
    ];
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
