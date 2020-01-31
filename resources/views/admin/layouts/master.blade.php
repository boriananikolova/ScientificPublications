<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>My Web Site</title>

        @include('admin.layouts.style')
    </head>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
            @include('admin.layouts.header')
            @include('admin.layouts.leftmenu')
            <div class="content-wrapper">
                @yield('content')
            </div>
            @include('admin.layouts.footer')
        </div>
        @include('admin.layouts.script')
    </body>

</html>