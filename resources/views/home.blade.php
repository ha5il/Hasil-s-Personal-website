@extends('includes.master')

@section('head')
<meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
<title>Hasil's Personal Site | Hasil Paudyal</title>
<style>.cool-words{display:inline-block;min-width:350px;text-align:left;text-shadow:-3px 3px #343a40}.cool-words span{position:absolute;font-weight:700;top:0;opacity:0;animation:rotateWord 10s linear infinite 0s}.cool-words span:nth-child(2){animation-delay:2s}.cool-words span:nth-child(3){animation-delay:4s}.cool-words span:nth-child(4){animation-delay:6s}.cool-words span:nth-child(5){animation-delay:8s}.cool-words span:nth-child(6){animation-delay:10s}@keyframes rotateWord{0%,100%,80%{opacity:0}2%{opacity:0;transform:translateY(-30px)}17%,5%{opacity:1;transform:translateY(0)}20%{opacity:0;transform:translateY(30px)}}</style>
@endsection

@section('main')
<section class="spotlight parallax bg-cover bg-size--cover" data-spotlight="fullscreen" style="background-size: cover; background-image: url('{{ URL::asset('https://i.imgur.com/jLbIGOR.jpg') }}')">
<span class="bg-primary alpha-7"></span>
<div class="spotlight-holder py-lg pt-lg-xl">
<div class="container d-flex align-items-center no-padding">
<div class="col">
<div class="row cols-xs-space align-items-center text-center text-md-left justify-content-center">
<div class="col-7">
<div class="text-center">
 <h2 class="heading display-4 font-weight-200 text-white animated" data-animation-in="fadeInUp" data-animation-delay="2000">
<span class="cool-words">I am a <span>Engineer</span><span>Developer</span><span>Desiger</span><span>Poet</span><span>Lover</span></span>
</h2>
<p class="lead text-white mt-3 lh-180 c-white animated" data-animation-in="fadeInUp" data-animation-delay="2500" style="text-shadow:-3px 3px #343a40">
 Oh great! I never recognized Sunshine shining me, within me.
 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-6">
                <div class="card" style="margin-top:14px">
                    <div class="card-body">
                        <p class="card-text" style="text-align:center;font-size: larger;">
                            Here I am<br>
                            A cut above you all<br>
                            Silent as a grave<br>
                            In favour of your death<br><br>
                            Lethal is my pen<br>
                            Perfect would be again<br>
                            A fortune is with me<br>
                            Unbeatable this shall be<br><br>
                            Dare you come near<br>
                            Yell you out there<br>
                            And who is this me<br>
                            Links the first letters to me<br>
                        </p>
                    </div>
                </div>
        </div>
    </div>
<div class="col">
<h3 style="margin-top: 14px;">Education History</h3>
    <table class="table table-hover table-cards align-items-center">
    <thead>
        <tr>
            <th scope="col" style="font-size: larger;">Institute</th>
            <th scope="col" style="font-size: larger;">Class</th>
            <th scope="col" style="font-size: larger;">Location</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/kvm.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Koshi Vidya Mandir</h6>
                        <span class="font-weight-normal text-muted">1998 - 1999</span>
                    </div>                </div>
            </th>
            <td>Nursery</td>
            <td>Biratnagar, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/arniko.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Arniko H. S. School</h6>
                        <span class="font-weight-normal text-muted">1999 - 2002</span>
                    </div>
                </div>
            </th>
            <td>LKG - 1</td>
            <td>Biratnagar, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/dpsebs.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Devkota Public Secondary English Boarding School</h6>
                        <span class="font-weight-normal text-muted">2002 - 2007</span>
                    </div>                </div>
            </th>
            <td>2 - 6</td>
            <td>Biratnagar, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/saurdeep.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Saurdeep Boarding School</h6>
                        <span class="font-weight-normal text-muted">2007 - 2009</span>
                    </div>                </div>
            </th>
            <td>7 - 8</td>
            <td>Kathmandu, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/svi.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Siddhartha Vanasthali Institute</h6>
                        <span class="font-weight-normal text-muted">2009 - 2010</span>
                    </div>                </div>
            </th>
            <td>9</td>
            <td>Kathmandu, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/mebs.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Marvellous English Boarding School</h6>
                        <span class="font-weight-normal text-muted">2010 - 2011</span>
                    </div>                </div>
            </th>
            <td>10</td>
            <td>Kathmandu, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/nss.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">Nation School of Sciences</h6>
                        <span class="font-weight-normal text-muted">2011 - 2013</span>
                    </div>                </div>
            </th>
            <td>11 - 12</td>
            <td>Kathmandu, NP</td>
        </tr>
        <tr class="table-divider"></tr>
        <tr class="table-divider"></tr>
        <tr class="bg-white">
            <th scope="row">
                <div class="media align-items-center">
                    <img src="{{ URL::asset('/img/institute-logos/nhce.jpg') }}" class="avatar avatar-lg mr-3">
                    <div class="media-body">
                        <h6 class="h5 font-weight-normal mb-0">New Horizon College of Engineering</h6>
                        <span class="font-weight-normal text-muted">2013 - 2017</span>
                    </div>
                </div>
            </th>
            <td>Bachelor of Electrical and Electronics Engineering</td>
            <td>Bangalore, IN</td>
        </tr>
        <tr class="table-divider"></tr>
    </tbody>
</table>
</div>
<div class="col">
   <h3 style="margin-top: 14px;">Work Experience</h3>
   <div class="col-lg-6">
      <div class="card" style="margin-top:14px">
         <div class="card-body">
            <p class="card-text" style="font-size: larger;">
               Here I am
            </p>
         </div>
      </div>
   </div>
</div>
</div>
@endsection
