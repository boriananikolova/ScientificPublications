@php
use App\Category;
@endphp
@extends('layouts.client_master')

@section('styles')
@stop

@section('scripts')
@stop

@section('content')
<div class="container" style="padding-top:100px;">
    <div class="row">
        @foreach ($publications as $publication)
        @php
        $category = Category::where(['id' => $publication->categoryId])->first();
        @endphp
        <div class="col-md-4">
            <div class="card">
                <h2>{{$publication['title']}}</h2>
                <h5>{{$publication['author']}}</h5>
                <div class="fakeimg" style="height:200px;">
                    @if (!empty($publication['imgurl']))
                    <img src="{{asset('storage/img/'.$publication['imgurl'])}}"
                        style="vertical-align:bottom;max-height:180px;border:1px solid #dcdcdc;">
                    @else
                    <img src="{{asset('img/noimg.png')}}"
                        style="vertical-align:bottom;max-height:180px;border:1px solid #dcdcdc;">
                    @endif
                </div>
                @php
                    if (strlen($publication['publication']) < 30){
                        $excerpt = $publication['publication']; 
                    } 
                    else{
                        $excerpt = wordwrap($publication['publication'], 500); 
                        $excerpt = explode("\n", $excerpt);
                        $excerpt = $excerpt[0] . '...' ;
                    } 
                    
                @endphp 
                <p>{{$excerpt}}</p>
            </div>
        </div>
        @endforeach
    </div>
</div>
@stop