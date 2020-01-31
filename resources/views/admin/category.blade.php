@extends('admin.layouts.master')

@section('styles')
@stop


@section('scripts')
<script src="{{ asset('js/admin/category.js') }}"></script>
@stop

@section('content')
<section class="content-header">
    <h1>
        @if($category['id'] != 0)
        Edit category: <small>{{$category['category']}}</small>
        @else
        New category
        @endif
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{route('dashboard')}}"><i class="fa fa-dashboard"></i>Dashboard</a></li>
        @if($category['id'] != 0)
        <li class="active">{{$category['category']}}</li>
        @endif
    </ol>
</section>

<!-- Main content -->
<section class="content">

    <div id="dialog_confirm_delete" style="display:none;" title="Confirmation is needed!">
        <p><span class="ui-icon ui-icon-alert" style="float:left; margin:2px 6px 6px 0px;"></span>Do you confirm?</p>
    </div>

    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <section class="col-lg-12 connectedSortable">
            <div class="box box-primary box-solid">
                <div class="box-header">
                    <h3 id="box1_header" class="box-title">{{$category['category']}}</h3>
                </div>

                <form name="data_form" action="{{ route('saveCategory') }}"
                    method="POST">
                    @csrf
                    <input type="hidden" name="id" value="{{$category['id']}}">
                    <div class="box-body">
                        <div class="input-group" style="padding-bottom:5px;">
                            <span class="input-group-addon" style="min-width:300px;">Category name:</span>
                            <input type="text" name="category" maxlength="150" class="form-control"
                                value="{{$category['category']}}">
                        </div>
                    </div>
                    <div class="panel-footer">
                        <button id="btn_save" type="submit" class="btn btn-primary">
                            <i class="fa fa-floppy-o"></i>&nbsp;Save
                        </button>
                        <a href="{{route('categories')}}" id="btn_cancel" type="button" class="btn btn-warning">
                            <i class="fa fa-window-close-o"></i>&nbsp;Close
                        </a>
                    </div>

                </form>
                <div id="save_box" class="overlay" style="display:none;">
                    <i class="fa fa-refresh fa-spin"></i>
                </div>
                <!-- /.box-body -->
            </div>
        </section>

    </div>
    <!-- /.row (main row) -->

</section>
<!-- /.content -->

@stop