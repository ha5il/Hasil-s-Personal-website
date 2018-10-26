@if(Session::has('message'))
<div class="col-lg-12">
    <div class="alert alert-success alert-dismissable animation-slideUp">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <p>{{ Session::get('message') }} <strong> <i class="fa fa-check"></i></strong></p>
    </div>
</div>
@endif
@if (count($errors) > 0)
<div class="col-lg-12">
    <div class="alert alert-danger alert-dismissable animation-slideUp">
        <strong><i class="fa fa-exclamation-triangle"></i> Error : </strong>
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        @foreach($errors->all() as $error)
        <p> {{ $error }} </p>
        @endforeach
    </div>
</div>
@endif