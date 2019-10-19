<?php

namespace App\Http\Controllers;

use App\Mixin;
use Illuminate\Http\Request;

class AmpController extends Controller
{
    public function index()
    {
        return view('amp.index');
    }

    public function poem($id, $urlSlug)
    {
        $poems = Mixin::where('type', 'poem')
            ->get();

        foreach ($poems as $poem) {
            $poem = json_decode($poem->data);

            // get the poem from database
            if ($poem->id == $id) {
                // correct url slug if incorrect
                if ($poem->urlSlug != $urlSlug) {
                    return redirect()
                        ->route('amp.poem', [
                            'id' => $poem->id,
                            'urlSlug' => $poem->urlSlug,
                        ]);
                }
                // everythings fine
                return view('amp.poem', [
                    'poem' => $poem,
                ]);
            }
        }

        abort(404);
    }

    public function update_firebase()
    {
        if (!is_dir('firebase')) mkdir('firebase');
        if (!is_dir('firebase/amp')) mkdir('firebase/amp');
        if (!is_dir('firebase/amp/public')) mkdir('firebase/amp/public');

        // poems download
        $poems = Mixin::where('type', 'poem')->get();
        foreach ($poems as $poem) {
            $poem = json_decode($poem->data);
            if (!is_dir('firebase/amp/public/poem')) mkdir('firebase/amp/public/poem');
            if (!is_dir('firebase/amp/public/poem/' . $poem->id)) mkdir('firebase/amp/public/poem/' . $poem->id);
            if (!is_dir('firebase/amp/public/poem/' . $poem->id . '/' . $poem->urlSlug)) mkdir('firebase/amp/public/poem/' . $poem->id . '/' . $poem->urlSlug);
            dd('next line loops');
            file_get_contents(route('amp.poem', [
                'id' => $poem->id,
                'urlSlug' => $poem->urlSlug
                ]));
            file_put_contents(
                'firebase/amp/public/poem/' . $poem->id . '/' . $poem->urlSlug . '/index.html',
                file_get_contents(route('amp.poem', [
                    'id' => $poem->id,
                    'urlSlug' => $poem->urlSlug
                ]))
            );
        }

        // sitemap download
        file_put_contents('firebase/amp/public/sitemap.xml', file_get_contents(route('amp.sitemap')));
        dd('Done!');
    }

    public function sitemap()
    {
        $poems = Mixin::where('type', 'poem')->get();

        return view('amp.sitemap', [
            'poems' => $poems,
        ]);
    }
}
