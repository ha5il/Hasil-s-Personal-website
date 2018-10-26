<?php

namespace App\Http\Controllers;

use App\Joboffer;

class AdminController extends Controller
{
    public function backend()
    {

        $joboffers = Joboffer::orderBy('created_at', 'desc')->get();
        return view('admin.backend', array(
            'joboffers' => $joboffers,
        ));
    }
}