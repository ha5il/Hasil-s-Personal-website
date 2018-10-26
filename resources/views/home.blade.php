@extends('includes.master')

@section('head')
<meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
<title>Hasil's Personal Site | Hasil Paudyal</title>
<style>
    .cool-words {
        display: inline-block;
        min-width: 350px;
        text-align: left;
        text-shadow: -3px 3px #343a40
    }

    .cool-words span {
        position: absolute;
        font-weight: 700;
        top: 0;
        opacity: 0;
        animation: rotateWord 10s linear infinite 0s
    }

    .cool-words span:nth-child(2) {
        animation-delay: 2s
    }

    .cool-words span:nth-child(3) {
        animation-delay: 4s
    }

    .cool-words span:nth-child(4) {
        animation-delay: 6s
    }

    .cool-words span:nth-child(5) {
        animation-delay: 8s
    }

    .cool-words span:nth-child(6) {
        animation-delay: 10s
    }

    @keyframes rotateWord {
        0%,
        100%,
        80% {
            opacity: 0
        }
        2% {
            opacity: 0;
            transform: translateY(-30px)
        }
        17%,
        5% {
            opacity: 1;
            transform: translateY(0)
        }
        20% {
            opacity: 0;
            transform: translateY(30px)
        }
    }
</style>
@endsection

@section('main')

<section class="spotlight parallax bg-cover bg-size--cover" data-spotlight="fullscreen" style="background-image: url({{asset('img/cover.jpg')}})">
    <div class="spotlight-holder py-lg pt-lg-xl">
        <div class="container d-flex align-items-center no-padding">
            <div class="col">
                <div class="row cols-xs-space align-items-center text-center text-md-left justify-content-center">
                    <div class="col-7">
                        <div class="text-center mt-5">
                            <h2 class="heading display-4 font-weight-700 text-white mt-5 animated" data-animation-in="fadeInUp"
                                data-animation-delay="2000">
                                <!--div class="col">

                      <span class="cool-words">I am a <span>Engineer</span><span>Developer</span><span>Desiger</span><span>Poet</span><span>Lover</span></span>
                      </div-->
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-4">
            <div class="card" style="margin-top:14px">
                <div class="card-body">
                    <p class="card-text" style="text-align:center;font-size: larger;">
                        <strong class="text-primary">H</strong>ere I am<br>
                        <strong class="text-primary">A</strong> cut above you all<br>
                        <strong class="text-primary">S</strong>ilent as a grave<br>
                        <strong class="text-primary">I</strong>n favour of your death<br><br>
                        <strong class="text-primary">L</strong>ethal is my pen<br>
                        <strong class="text-success">P</strong>erfect would be again<br>
                        <strong class="text-success">A</strong> fortune is with me<br>
                        <strong class="text-success">U</strong>nbeatable this shall be<br><br>
                        <strong class="text-success">D</strong>are you come near<br>
                        <strong class="text-success">Y</strong>ell you out there<br>
                        <strong class="text-success">A</strong>nd who is this me<br>
                        <strong class="text-success">L</strong>inks the first letters to me<br>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="border-bottom" style="margin-block-start: 35px;margin-block-end: 25px;"></div>
    <div class="col-lg-12">
        <h3>My Work</h3>
        <div class="card">
            <div class="card-body">
                <p class="card-text" style="font-size: larger;">
                    Since 2016 end, I am handling Technical Service and Sales of industrial laundry machines and
                    accessories. I know the process involved in laundry business setup, marketing and its growth. I am
                    one of the authorised service Engineer for Danube International (France), Pony(Italy) and SEKO
                    (USA). Beside these, I am involved in other brands like Electrolux (Sweden), Maytag (USA),
                    Speedqueen (USA), Hydrosystems (USA), SEITZ (Germany) and Sunrise (India).
                </p>
            </div>
        </div>
    </div>
    <div class="border-bottom" style="margin-block-start: 35px;margin-block-end: 25px;"></div>
    <div class="col-lg-12">
        <h3>Projects</h3>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="heading heading-5 strong-600">Electrical Performance Analyser</h5>
                        <ul class="list-inline mb-4">
                            <li class="list-inline-item pr-2">
                                <a><i class="fas fa-heart mr-1"></i>63</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fas fa-eye text-muted mr-1"></i>509
                            </li>
                        </ul>
                        <p class="card-text">An Arduino UNO based project for realtime data recording and analysis.</p>
                        <a href="{{route('project1')}}" class="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="heading heading-5 strong-600">Pickup and Delivery App</h5>
                        <ul class="list-inline mb-4">
                            <li class="list-inline-item pr-2">
                                <a><i class="fas fa-heart mr-1"></i> 14</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fas fa-eye text-muted mr-1"></i> 325
                            </li>
                        </ul>
                        <p class="card-text">Android app for fixolla.com for their pickup and delivery service.</p>
                        <a href="{{route('project2')}}" class="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="heading heading-5 strong-600">Achievements unlocker</h5>
                        <ul class="list-inline mb-4">
                            <li class="list-inline-item pr-2">
                                <a><i class="fas fa-heart mr-1"></i> 98</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fas fa-eye text-muted mr-1"></i> 856
                            </li>
                        </ul>
                        <p class="card-text">PHP based script for unlocking achievements of any game based on Google
                            api services. Additionally it is capable to push fake highscore to Google's leaderboard.</p>
                        <a href="{{route('project3')}}" class="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="heading heading-5 strong-600">RABC Analyser</h5>
                        <ul class="list-inline mb-4">
                            <li class="list-inline-item pr-2">
                                <a><i class="fas fa-heart mr-1"></i> 43</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fas fa-eye text-muted mr-1"></i> 337
                            </li>
                        </ul>
                        <p class="card-text">Windows console based app for extracting the total washes done in Danube
                            Washer. Also C# based GUI app is partially developed!</p>
                        <a href="{{route('project4')}}" class="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="heading heading-5 strong-600">Electrical Thief Eliminator</h5>
                        <ul class="list-inline mb-4">
                            <li class="list-inline-item pr-2">
                                <a><i class="fas fa-heart mr-1"></i> 35</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fas fa-eye text-muted mr-1"></i> 634
                            </li>
                        </ul>
                        <p class="card-text">This device detects, locates and terminates the electricity thief from the
                            supply line.</p>
                        <a href="{{route('project5')}}" class="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="heading heading-5 strong-600">RFID Limitor</h5>
                        <ul class="list-inline mb-4">
                            <li class="list-inline-item pr-2">
                                <a><i class="fas fa-heart mr-1"></i> 21</a>
                            </li>
                            <li class="list-inline-item">
                                <i class="fas fa-eye text-muted mr-1"></i> 253
                            </li>
                        </ul>
                        <p class="card-text">An Arduino UNO based project for limiting the RFID Scans.</p>
                        <a href="{{route('project6')}}" class="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="border-bottom" style="margin-block-start: 35px;margin-block-end: 25px;"></div>
    <div class="col-lg-9">
        <h3>Published Book</h3>
        <div class="card card-body">
            <div class="row">
                <div class="col-lg-3">
                    <img src="{{asset('img/book.jpg')}}" class="img-fluid">
                </div>
                <div class="col-lg-9">
                    <div class="card-body">
                        <p class="card-text">Blended Words - containing the mix of thoughts and ideas that begin coming
                            to the Author when he was 16. Seven poems on clear language, how he motivates himself after
                            failure, his view on the world and people, and much more.</p>
                        <a href="https://www.amazon.com/dp/B01M99C005?tag=hasil-21" class="btn btn-icon-label btn-dark"
                            target="_blank">
                            <span class="btn-inner--icon"><i class="fas fa-shopping-cart"></i></span>
                            <span class="btn-inner--text">Buy on Amazon</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</div>
@endsection