<?php

namespace App\Http\Controllers;

use App\Joboffer;
use Illuminate\Http\Request;

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

    public function hireMeForm(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:30',
            'email' => 'required|max:30',
            'city' => 'required',
            'country' => 'required',
            'jobFor' => 'required',
            'timeFor' => 'required',
        ]);

        $joboffer = new Joboffer();
        $joboffer->name = $request['name'];
        $joboffer->email = $request['email'];
        $joboffer->city = $request['city'];
        $joboffer->country = $request['country'];
        $joboffer->jobFor = $request['jobFor'];
        $joboffer->timeFor = $request['timeFor'];
        $joboffer->message = $request['message'];
        $joboffer->save();

        return redirect()->route('hireMe')
            ->with(['message' => 'Thanks ' . $request['name'] . ', we shall get in touch asap :)']);
    }

    public function materialhome()
    {
        return view('material.home');
    }

}