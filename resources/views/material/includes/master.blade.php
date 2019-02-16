<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Hasil Paudyal, hasilpaudyal@gmail.com">
    <meta name="keywords" content="Hasil, Paudyal, Google Games Hack, Personal Site">
    <link href="{{URL::asset('/img/icon.png')}}" rel="shortcut icon">
    @yield('head')
</head>

<body class="teal">
    <div class="myloader teal"
        style="background: url('//hasilpaudyal.com.np/img/preloader.gif') center center no-repeat;bottom: 0;height: 100%;left: 0;overflow: hidden;right: 0;top: 0;z-index: 99999">
    </div>
    <div id="hiddenbody" style="display:none;">
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large waves-effect waves-light teal" id="changecolourbtn"><i
                    class="material-icons">format_color_fill</i></a>
        </div>
        @include('material.includes.navbar')
        @yield('body')
        @include('material.includes.footer')
    </div>
    <link href="https://fonts.googleapis.com/css?family=Paprika" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="{{URL::asset('/css/materialstyle.css')}}">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.6/firebase.js"></script>
    <script src="{{URL::asset('/js/materialjqueryinit.js')}}"></script>
</body>

</html>