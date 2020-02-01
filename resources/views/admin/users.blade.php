@extends('admin.layouts.master')

@section('styles')
@stop


@section('scripts')
<script src="{{ asset('js/admin/users.js') }}"></script>
@stop


@section('content')
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Admin users
        <small>Manage all admin users</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{route('dashboard')}}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Manage all admin users</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">

    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <section class="col-lg-12 connectedSortable">

            <!-- TO DO List -->
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Users</h3>
                    <div class="box-tools pull-right">
                        <a id="btn_create" type="button" class="btn btn-sm btn-primary" href="{{ route('register') }}"><i
                                class="fa fa-calculator"></i>&nbsp; Create User</a>
                        <button id="btn_delete" disabled type="button" class="btn btn-sm btn-danger"><i
                                class="fa fa-trash"></i>&nbsp; Delete User</button>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    @if (session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @elseif(session('error'))
                        <div class="alert alert-danger">
                            {{ session('error') }}
                        </div>
                    @endif
                    <table id="users" class="cell-border hover" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($users as $user)
                            <tr>
                                <td>{{$user['id']}}</td>
                                <td>{{$user['name']}}</td>
                                <td>{{$user['email']}}</td>
                            </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>№</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

        </section>

    </div>
    <!-- /.row (main row) -->
    <div id="dialog_confirm_delete" style="display:none;" title="Confirmation is needed!">
        <p><span class="ui-icon ui-icon-alert" style="float:left; margin:2px 6px 6px 0px;"></span>Do you confirm?</p>
    </div>
</section>
<!-- /.content -->
@stop