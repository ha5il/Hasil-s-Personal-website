<!doctype html>
<html ⚡ lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1">
    <meta name="keywords" content="Hasil, Paudyal, AMP, Personal Site">
    @php
    $description = '';
    $description = $project->details[0]->paragraphs[0]->text;
    if(strlen($description) > 158) {
        $description = substr($description, 0, 155) . "...";
    }
    @endphp
    <meta name="description" content="{{$description}}">
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
    <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com/" crossorigin>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Kalam" rel="stylesheet">
    <link href="//hasilpaudyal.com.np/img/icon.png" rel="shortcut icon">
    <title>{{"Project - " . substr($description, 0, 40) . "..."}}</title>
    <style amp-custom>
        body {
            font-family: 'Kalam', cursive;
            width: 96%;
            padding-left: 2%;
            color: #2d2a2a;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .bg {
            animation: slide 3s ease-in-out infinite alternate;
            background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
            bottom: 0;
            left: -50%;
            opacity: .5;
            position: fixed;
            right: -50%;
            top: 0;
            z-index: -1
        }

        .bg2 {
            animation-direction: alternate-reverse;
            animation-duration: 4s
        }

        .bg3 {
            animation-duration: 5s
        }

        @keyframes slide {
            0% {
                transform: translateX(-25%)
            }

            100% {
                transform: translateX(25%)
            }
        }

        .hasil-card {
            text-align: justify;
            padding: 20px 10px;
            letter-spacing: 1px;
            font-size: 16px;
            line-height: 24px;
            margin: 20px auto;
            box-shadow: 2px 3px 4px 1px #464646;
            border-radius: 20px
        }

        @media only screen and (min-width: 600px) {
            .hasil-card {
                width: 850px;
            }
        }

        .hasil-card h2 {
            text-align: left;
            color: #b90000;
        }

        h2 {
            text-align: center;
        }

        h2 a {   
                color: #b90000;
        }

        footer {
            text-align: center;
            font-size: 12px;
            padding: 20px;
            clear: both
        }
    </style>
    <style amp-boilerplate>
        body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both
        }

        @-webkit-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-moz-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-ms-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-o-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }
    </style><noscript>
        <style amp-boilerplate>
            body {
                -webkit-animation: none;
                -moz-animation: none;
                -ms-animation: none;
                animation: none
            }
        </style>
    </noscript>
    <link rel="canonical" href=".">
</head>

<body>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <h2><a href="//hasilpaudyal.com.np">Hasil Paudyal</a></h2>
    <div class="hasil-card">
    @foreach($project->details as $detail)
    @if(isset($detail->paragraphs))
    <h2>Overview</h2>
    @foreach($detail->paragraphs as $paraLine)
    <p>{{$paraLine->text}}</p>
    @endforeach
    @endif
    @if(isset($detail->lists))
    <h2>My Task</h2>
    <ul>
    @foreach($detail->lists as $list)
    <li>{{$list->category}} - {{$list->text}}</li>
    @endforeach
    </ul>
    @endif
    @endforeach
    </div>
    <footer>
        <p>Oh great! I never recognized Sunshine shining me, within me.</p>
    </footer>
    <amp-analytics type="gtag" data-credentials="include">
        <script type="application/json">
            {
                "vars": {
                    "gtag_id": "UA-72808058-1",
                    "config": {
                        "UA-72808058-1": {
                            "groups": "default"
                        }
                    }
                }
            }
        </script>
    </amp-analytics>
</body>

</html>