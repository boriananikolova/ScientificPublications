<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Scientific Publications</title>

        @include('layouts.style')
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @include('layouts.header')
            <div class="content">
                @yield('content')
            </div>
        </div>
        @include('layouts.footer')
        @include('layouts.script')
    </body>
</html>
