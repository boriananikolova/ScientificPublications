@php
    use App\Category;
@endphp
@extends('admin.layouts.master')

@section('styles')
@stop


@section('scripts')
<script src="{{ asset('js/admin/publication.js') }}"></script>
@stop

@section('content')
<section class="content-header">
    <h1>
        @if($publication['id'] != 0)
        Edit publication: <small>{{$publication['title']}}</small>
        @else
        New publication
        @endif
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{route('dashboard')}}"><i class="fa fa-dashboard"></i>Dashboard</a></li>
        @if($publication['id'] != 0)
        <li class="active">{{$publication['title']}}</li>
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
            @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
            @elseif(session('error'))
                <div class="alert alert-danger">
                    {{ session('error') }}
                </div>
            @endif
            <div class="box box-primary box-solid">
                <div class="box-header">
                    <h3 id="box1_header" class="box-title">{{$publication['title']}}</h3>
                </div>
                <form name="data_form" action="{{ route('savePublication') }}"
                    method="POST" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="id" value="{{$publication['id']}}">
                    <div class="box-body">
                        <div class="input-group" style="padding-bottom:5px;">
                            <span class="input-group-addon" style="min-width:300px;">Title:</span>
                            <input type="text" name="title" maxlength="150" class="form-control"
                                value="{{$publication['title']}}">
                            <div>{{ $errors->first('title') }}</div>
                        </div>
                        <div class="input-group" style="padding-bottom:5px;">
                            <span class="input-group-addon" style="min-width:300px;">Author:</span>
                            <input type="text" name="author" maxlength="150" class="form-control"
                                value="{{$publication['author']}}">
                            <div>{{ $errors->first('author') }}</div>
                        </div>
                        <div class="input-group" style="padding-bottom:5px;">
                            <span class="input-group-addon" style="min-width:300px;">Type:</span>
                            <select name="type" class="form-control">
                                <option value="article" <?php if ($publication['type'] == 'article'){echo 'selected';}  ?> > Article </option>
                                <option value="report" <?php if ($publication['type'] == 'report'){echo 'selected';}  ?> > Report </option>
                                <option value="book" <?php if ($publication['type'] == 'book'){echo 'selected';}  ?> > Book </option>
                            </select>
                        </div>
                        <div class="input-group" style="padding-bottom:5px;">
                            <span class="input-group-addon" style="min-width:300px;">Publication:</span>
                            <textarea name="publication" class="form-control" rows="5" cols="100%" >{{$publication['publication']}}</textarea>
                            <div>{{ $errors->first('publication') }}</div>
                        </div>
                        <div class="input-group" style="padding-bottom:5px;">
                            <span class="input-group-addon" style="min-width:300px;">Category:</span>
                            <select name="categoryId" class="form-control">
                                @php
                                    $categories = Category::orderBy('id', 'desc')->get();
                                @endphp
                                @foreach ($categories as $category)
                                    <option value="{{$category['id']}}" <?php if ($publication['categoryId'] == $category['id']){echo 'selected';}  ?> > {{$category['category']}} </option>
                                @endforeach
                            </select>
                        </div>
                        @if (!empty($publication['imgurl']))
                            <img src="{{asset('storage/img/'.$publication['imgurl'])}}" style="vertical-align:bottom;max-height:240px;border:1px solid #dcdcdc;">
                        @else
                            <img src="{{asset('img/noimg.png')}}" style="vertical-align:bottom;max-height:240px;border:1px solid #dcdcdc;">
                        @endif
                        <input type="file" class="btn btn-default" accept="image/*" name="image" />
                        <div>{{ $errors->first('image') }}</div>
                    </div>
                    <div class="panel-footer">
                        <button id="btn_save" type="submit" class="btn btn-primary">
                            <i class="fa fa-floppy-o"></i>&nbsp;Save
                        </button>
                        <a href="{{route('publications')}}" id="btn_cancel" type="button" class="btn btn-warning">
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