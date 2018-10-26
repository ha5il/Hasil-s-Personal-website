@extends('includes.master')

@section('head')
<meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
<title>Hasil's Dashboard</title>
@endsection

@section('main')
<div class='container' style="margin-top:5rem">
    @if($joboffers->count() == 0)
    <strong>No job offer</strong>
    @else
    <div class="col-lg-12">
        <div class="block">
            <div class="block-title">
                <h2 class="text-muted">Job offers</h2>
            </div>
        </div>
        <table class="table table-striped table-borderless table-vcenter">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Job For</th>
                    <th>Shift For</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                @foreach($joboffers as $joboffer)
                <tr>
                    <td>{{ $joboffer->name }}</td>
                    <td>{{ $joboffer->email }}</td>
                    <td>{{ $joboffer->city }}</td>
                    <td>{{ $joboffer->country }}</td>
                    <td>{{ $joboffer->jobFor }}</td>
                    <td>{{ $joboffer->timeFor }}</td>
                    <td>{{ $joboffer->message }}</td>
                    <td>{{ $joboffer->created_at }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @endif
</div>
@endsection