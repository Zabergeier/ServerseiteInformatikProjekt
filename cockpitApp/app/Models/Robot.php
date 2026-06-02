<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['psw', 'bez','nam'])]

class Robot extends Model
{
    
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
