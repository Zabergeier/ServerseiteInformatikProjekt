<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Tabel(key:'VID',keyType:'string',incrementing:false)]
#[Connection('pgsql')]

class vehicle extends Model
{
    use HasFactory;
    //
    public $timestamps = false;

    protected $table = 'vehicles';
    
}
