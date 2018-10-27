@extends('includes.master')

@section('head')
<meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
<title>Hasil's Dashboard</title>
@endsection

@section('main')
<div class='container' style="margin-top:5rem">
    @include('includes.messages')
    <div class="col-lg-12">
        <div class="block">
            <div class="block-title">
                <h2 class="text-muted">Detail of Job offered</h2>
            </div>
        </div>
        <table class="table table-striped table-borderless table-vcenter">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $joboffer->name }}</td>
                    <td>{{ $joboffer->city }}</td>
                    <td>{{ $joboffer->country }}</td>
                    <td>{{ $joboffer->created_at }}</td>
                </tr>
                <tr>
                    <td>{{ $joboffer->email }}</td>
                    <td>{{ $joboffer->jobFor }}</td>
                    <td>{{ $joboffer->timeFor }}</td>
                    <td>{{ $joboffer->message }}</td>
                </tr>
            </tbody>
        </table>
        <div class="row justify-content-center">
            <div class="col-lg-3">
                @if($joboffer->is_fake)
                <a class="btn btn-sm btn-light" disabled>Fake</a>
                @else
                <a href="{{route('markfake', $joboffer->id)}}" class="btn btn-sm btn-dark">Mark Fake</a>
                @endif
            </div>
            <div class="col-lg-3">

                @if($joboffer->is_hidden)
                <a href="{{route('unhideit', $joboffer->id)}}" class="btn btn-sm btn-dark">Unhide it</a>
                @else
                <a href="{{route('hideit', $joboffer->id)}}" class="btn btn-sm btn-dark">Hide it</a>
                @endif
            </div>
        </div>
        <h3>My update</h3>
        <form action="{{route('hireMeForm')}}" method="POST">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <div class="form-row">
                <div class="col-md-9">
                    <div class="form-group">
                        <textarea class="form-control textarea-autosize" rows="3" value="{{$joboffer->my_comment}}"></textarea>
                    </div>
                </div>
                <div class="col-lg-3">
                    <a href="#" class="btn btn-sm btn-dark">Save</a>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection