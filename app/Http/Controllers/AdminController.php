<?php

namespace App\Http\Controllers;

use App\Joboffer;

class AdminController extends Controller
{
    public function backend()
    {

        $joboffers = Joboffer::where('is_hidden', 0)->orderBy('created_at', 'desc')->get();
        return view('admin.backend', array(
            'joboffers' => $joboffers,
        ));
    }

    public function detailed($id)
    {

        $joboffer = Joboffer::where('id', $id)->first();
        return view('admin.detailed', array(
            'joboffer' => $joboffer,
        ));
    }

    public function markfake($id)
    {

        $joboffer = Joboffer::where('id', $id)->first();
        $joboffer->is_fake = 1;
        $joboffer->save();
        return redirect()->route('detailed', $id)->with(['message' => $joboffer->name . ' request marked as fake']);
    }

    public function hideit($id)
    {

        $joboffer = Joboffer::where('id', $id)->first();
        $joboffer->is_hidden = 1;
        $joboffer->save();
        return redirect()->route('detailed', $id)->with(['message' => $joboffer->name . ' is now hidden']);
    }

    public function unhideit($id)
    {

        $joboffer = Joboffer::where('id', $id)->first();
        $joboffer->is_hidden = 0;
        $joboffer->save();
        return redirect()->route('detailed', $id)->with(['message' => $joboffer->name . ' is now visible']);
    }

    public function my_comment($id, $my_comment)
    {
        $joboffer = Joboffer::where('id', $id)->first();
        $joboffer->my_comment = $my_comment;
        $joboffer->save();
        return redirect()->route('detailed', $id)->with(['message' => 'Comment Saved!']);
    }
}