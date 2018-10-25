<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Hasil Paudyal, hasilpaudyal@gmail.com">
    <meta name="keywords" content="Hasil, Paudyal, Google Games Hack, Personal Site">
    <link href="{{ URL::asset('/img/icon.png') }}" rel="shortcut icon">
    @yield('head')
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800|Roboto:400,500,700" rel="stylesheet"> 
    <link type="text/css" href="{{ URL::asset('/css/theme.css') }}" rel="stylesheet">
</head>
<body>
    @include('includes.navbar')
    <main class="main">
    @yield('main')
    @include('includes.footer')
    </main>
    <script src="{{ URL::asset('/js/jquery.min.js') }}"></script>
    <script src="{{ URL::asset('/js/popper.min.js') }}"></script>
    <script src="{{ URL::asset('/js/bootstrap.min.js') }}"></script>
    <script src="{{ URL::asset('/js/fontawesome-all.min.js') }}"></script>
    <script src="{{ URL::asset('/js/theme.js') }}"></script>
</body>
</html>