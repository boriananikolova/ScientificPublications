<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publication;
use Illuminate\Support\Facades\Storage;

class PublicationsController extends Controller
{
    public function index()
    {
        $publications = Publication::orderBy('id', 'desc')->get();
        return view('admin.publications')->with(array('publications'=>$publications));
    }

    public function showPublication($id = null)
    {
        if(isset($id))
        {
            $publication = Publication::where('id', $id)->first();
            return view('admin.publication')->with(array('publication'=>$publication));
        }
        else
        {   
            $publication = [
                'id' => 0,
                'title' => '', 
                'author' => '', 
                'type' => '', 
                'publication' => '', 
                'categoryId' => 0,
                'imgurl' => '',
            ];
            return view('admin.publication')->with(array('publication'=>$publication));
        }
    }

    public function savePublication(Request $request)
    {
        if($request->isMethod('POST')){
            
            if($request->input('id') == 0){
                
                // Validating data
                $request->validate([
                    'title' => 'required|min:3',
                    'author' => 'required|min:3',
                    'publication' => 'required|min:10',
                ]);
                
                $imageName = '';
                if($request->hasFile('image')){
                    
                    $blabla = $request->validate([
                        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:5000',
                    ]);
                    
                    $saveImg = $request->image->store('img', 'public');

                    $imageName = $request->image->hashName();
                }
                // Adding new publication
                $publication = new Publication;
                $publication->title = $request->input('title');
                $publication->author = $request->input('author');
                $publication->type = $request->input('type');
                $publication->publication = $request->input('publication');
                $publication->categoryId = $request->input('categoryId');
                $publication->imgurl = $imageName;

                if($publication->save()) {
                    return redirect()->route('publications')->with('success', 'Publication successfully added!');
                }
                else{
                    return redirect()->route('publications')->with('error', 'Publication was not added!');
                }
            }
            else{
                
                //Validating new data
                $request->validate([
                    'title' => 'required|min:3',
                    'author' => 'required|min:3',
                    'publication' => 'required|min:10',
                ]);

                $imageName = '';
                if($request->hasFile('image')){
                    $request->validate([
                        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:5000',
                    ]);
                    $saveImg = $request->image->store('img', 'public');
                    $imageName = $request->image->hashName();
                }

                //Changing existing publication
                $publication = Publication::findOrFail($request->input('id'));
                $oldImg = $publication->imgurl;
                $publication->title = $request->input('title');
                $publication->author = $request->input('author');
                $publication->type = $request->input('type');
                $publication->publication = $request->input('publication');
                $publication->categoryId = $request->input('categoryId');
                $publication->imgurl = $imageName;
                if ($publication->save()) {
                    // if(Storage::disk('local')->exists($oldImg)){
                    //     Storage::delete($oldImg);
                    // }
                    return redirect()->back()->with('success', 'Publication successfully updated!');
                }
                else{
                    return redirect()->back()->with('error', 'Publication was not updated!');
                }
            }
        }
        else{
            return redirect()->route('publications')->with('error', 'Wrong request method!');
        }
    }

    public function deletePublication(Request $request)
    {
        if($request->isMethod('POST')){
            if (!empty($request->input('id'))){
                $publication = Publication::where(['id' => $request->input('id')])->first();
                if (!empty($publication)){
                    $publication->delete();
                    return response()->json(['result' => 'del']);
                }else{
                    return response()->json(['result' => 'not']);
                }
            }    
        }
    }
}
