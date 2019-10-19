<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mixin extends Model
{
    protected $fillable = ['type', 'data'];
}
