@php
    use App\Category;
@endphp
@extends('admin.layouts.master')

@section('styles')
@stop


@section('scripts')
<script src="{{ asset('js/admin/publications.js') }}"></script>
@stop


@section('content')
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Publications
        <small>Manage all publications</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{route('dashboard')}}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Manage all publications</li>
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
                    <h3 class="box-title">Publications</h3>
                    <div class="box-tools pull-right">
                        <button id="btn_edit" disabled type="button" class="btn btn-sm btn-primary"><i
                                class="fa fa-pencil"></i>&nbsp; Edit Publication</button>
                        <button id="btn_create" type="button" class="btn btn-sm btn-primary"><i
                                class="fa fa-calculator"></i>&nbsp; Create Publication</button>
                        <button id="btn_delete" disabled type="button" class="btn btn-sm btn-danger"><i
                                class="fa fa-trash"></i>&nbsp; Delete Publication</button>
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
                    <table id="publications" class="cell-border hover" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Type</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($publications as $publication)
                                @php
                                    $category = Category::where(['id' => $publication->categoryId])->first();
                                @endphp                                
                                    <tr>
                                        <td>{{$publication['id']}}</td>
                                        <td>{{$publication['title']}}</td>
                                        <td>{{$publication['author']}}</td>
                                        <td>{{$publication['type']}}</td>
                                        <td>{{!empty($category) ? $category->category : "Uncategorized"}}</td>
                                    </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>№</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Type</th>
                                <th>Category</th>
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