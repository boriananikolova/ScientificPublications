@section('styles')
@stop
<header>
    @if (Route::has('login'))
        <div class="top-left links">
            <a href="/">Home</a>
        </div>
        <div class="top-right links">
            @auth
                <a href="{{ url('/dashboard') }}">Dashboard</a>
            @else
                <a href="{{ route('login') }}">Login</a>
            @endauth
        </div>
    @endif
</header>
