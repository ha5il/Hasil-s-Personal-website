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

    public function quote($id, $urlSlug)
    {
        $quotes = Mixin::where('type', 'quote')
            ->get();

        foreach ($quotes as $quote) {
            $quote = json_decode($quote->data);

            // get the quote from database
            if ($quote->id == $id) {
                // correct url slug if incorrect
                if ($quote->urlSlug != $urlSlug) {
                    return redirect()
                        ->route('amp.quote', [
                            'id' => $quote->id,
                            'urlSlug' => $quote->urlSlug,
                        ]);
                }
                // everythings fine
                return view('amp.quote', [
                    'quote' => $quote,
                ]);
            }
        }

        abort(404);
    }

    public function project($id, $urlSlug)
    {
        $projects = Mixin::where('type', 'project')
            ->get();

        foreach ($projects as $project) {
            $project = json_decode($project->data);

            // get the project from database
            if ($project->id == $id) {
                // correct url slug if incorrect
                if ($project->urlSlug != $urlSlug) {
                    return redirect()
                        ->route('amp.project', [
                            'id' => $project->id,
                            'urlSlug' => $project->urlSlug,
                        ]);
                }

                // everythings fine
                return view('amp.project', [
                    'project' => $project,
                ]);
            }
        }

        abort(404);
    }

    public function poems()
    {
        $poems = Mixin::where('type', 'poem')
            ->get();

        $poems->transform(function ($poem) {
            $poem->data = json_decode($poem->data);
            $poem->title = $poem->data->name;
            $poem->content = '';
            $poem->href = str_replace(url('/amp'), '', route('amp.poem', ['id' => $poem->data->id, 'urlSlug' => $poem->data->urlSlug]));
            foreach ($poem->data->poemParas[0]->paraLines as $index => $paraLine) {
                if ($index < 3) {
                    $poem->content .= $paraLine . '<br>';
                } elseif ($index == 3) {
                    $poem->content .= '...';
                }
            }
            return $poem;
        });

        return view('amp.listing', [
            'title' => "Poems | Hasil's Personal Site",
            'description' => 'Collection of poems by Hasil Paudyal.',
            'data' => $poems,
        ]);
    }

    public function quotes()
    {
        $quotes = Mixin::where('type', 'quote')
            ->get();

        $quotes->transform(function ($quote) {
            $quote->data = json_decode($quote->data);
            $quote->content = '';
            $quote->href = str_replace(url('/amp'), '', route('amp.quote', ['id' => $quote->data->id, 'urlSlug' => $quote->data->urlSlug]));
            foreach ($quote->data->quoteLines as $index => $quoteLine) {
                $quote->content .= $quoteLine . '<br>';
            }
            return $quote;
        });

        return view('amp.listing', [
            'title' => "Quotes | Hasil's Personal Site",
            'description' => 'Collection of quotes by Hasil Paudyal.',
            'data' => $quotes,
        ]);
    }

    public function projects()
    {
        $projects = Mixin::where('type', 'project')
            ->get();

        $projects->transform(function ($project) {
            $project->data = json_decode($project->data);
            $project->title = $project->data->name;
            $project->content = $project->data->tagLine;
            $project->href = str_replace(url('/amp'), '', route('amp.project', ['id' => $project->data->id, 'urlSlug' => $project->data->urlSlug]));
            return $project;
        });

        return view('amp.listing', [
            'title' => "Projects | Hasil's Personal Site",
            'description' => 'List of Electrical, Electronics and IT projects by Hasil and his team. Know more to team up and create something amazing...',
            'data' => $projects,
        ]);
    }

    public function update_firebase()
    {
        if (!is_dir('firebase')) mkdir('firebase');
        if (!is_dir('firebase/amp')) mkdir('firebase/amp');
        if (!is_dir('firebase/amp/public')) mkdir('firebase/amp/public');

        // poem listing page download
        if (!is_dir('firebase/amp/public/poems')) mkdir('firebase/amp/public/poems');
        file_put_contents(
            'firebase/amp/public/poems/index.html',
            file_get_contents(route('amp.poems'))
        );

        // poems download
        $poems = Mixin::where('type', 'poem')->get();
        foreach ($poems as $poem) {
            $poem = json_decode($poem->data);
            if (!is_dir('firebase/amp/public/poem')) mkdir('firebase/amp/public/poem');
            if (!is_dir('firebase/amp/public/poem/' . $poem->id)) mkdir('firebase/amp/public/poem/' . $poem->id);
            if (!is_dir('firebase/amp/public/poem/' . $poem->id . '/' . $poem->urlSlug)) mkdir('firebase/amp/public/poem/' . $poem->id . '/' . $poem->urlSlug);

            file_put_contents(
                'firebase/amp/public/poem/' . $poem->id . '/' . $poem->urlSlug . '/index.html',
                file_get_contents(route('amp.poem', [
                    'id' => $poem->id,
                    'urlSlug' => $poem->urlSlug
                ]))
            );
        }

        // quote listing page download
        if (!is_dir('firebase/amp/public/quotes')) mkdir('firebase/amp/public/quotes');
        file_put_contents(
            'firebase/amp/public/quotes/index.html',
            file_get_contents(route('amp.quotes'))
        );

        // quotes download
        $quotes = Mixin::where('type', 'quote')->get();
        foreach ($quotes as $quote) {
            $quote = json_decode($quote->data);
            if (!is_dir('firebase/amp/public/quote')) mkdir('firebase/amp/public/quote');
            if (!is_dir('firebase/amp/public/quote/' . $quote->id)) mkdir('firebase/amp/public/quote/' . $quote->id);
            if (!is_dir('firebase/amp/public/quote/' . $quote->id . '/' . $quote->urlSlug)) mkdir('firebase/amp/public/quote/' . $quote->id . '/' . $quote->urlSlug);

            file_put_contents(
                'firebase/amp/public/quote/' . $quote->id . '/' . $quote->urlSlug . '/index.html',
                file_get_contents(route('amp.quote', [
                    'id' => $quote->id,
                    'urlSlug' => $quote->urlSlug
                ]))
            );
        }

        // projects download
        $projects = Mixin::where('type', 'project')->get();
        foreach ($projects as $project) {
            $project = json_decode($project->data);
            if (!is_dir('firebase/amp/public/project')) mkdir('firebase/amp/public/project');
            if (!is_dir('firebase/amp/public/project/' . $project->id)) mkdir('firebase/amp/public/project/' . $project->id);
            if (!is_dir('firebase/amp/public/project/' . $project->id . '/' . $project->urlSlug)) mkdir('firebase/amp/public/project/' . $project->id . '/' . $project->urlSlug);

            file_put_contents(
                'firebase/amp/public/project/' . $project->id . '/' . $project->urlSlug . '/index.html',
                file_get_contents(route('amp.project', [
                    'id' => $project->id,
                    'urlSlug' => $project->urlSlug
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
        $quotes = Mixin::where('type', 'quote')->get();
        $projects = Mixin::where('type', 'project')->get();

        return view('amp.sitemap', [
            'poems' => $poems,
            'quotes' => $quotes,
            'projects' => $projects,
        ]);
    }
}
