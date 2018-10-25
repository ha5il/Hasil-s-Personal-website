<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function aboutMe()
    {
        return view('aboutMe');
    }

    public function hireMe()
    {
        return view('hireMe');
    }
}