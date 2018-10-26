@if(route('home'))
<nav class="navbar navbar-expand-lg navbar-dark bg-tertiary fixed-top">
    <a class="navbar-brand" href="{{route('home')}}"><strong>Hasil Paudyal</strong></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_example_1" aria-controls="navbar_example_1"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar_example_1">
        <ul class="navbar-nav ml-auto">
            <li @if(Route::currentRouteName()==='home' ) class="nav-item active" ; else class="nav-item" @endif>
                <a class="nav-link" href="{{route('home')}}">Home</a>
            </li>
            <!--li @if(Route::currentRouteName()==='aboutMe' ) class="nav-item active" ; else class="nav-item" @endif>
                <a class="nav-link" href="{{route('aboutMe')}}">About Me</a>
            </li-->
            <li @if(Route::currentRouteName()==='hireMe' ) class="nav-item active" ; else class="nav-item" @endif>
                <a class="nav-link text-white" href="{{route('hireMe')}}" style="background-color: #ff3b00;"><strong>Hire
                        Me!</strong></a>
            </li>
        </ul>
    </div>
</nav>
@endif