<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['nam', 'adr', 'bez'])]
class Robot extends Model
{
    
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
