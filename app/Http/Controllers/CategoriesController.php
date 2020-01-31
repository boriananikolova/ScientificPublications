<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('id', 'desc')->get();
        return view('admin.categories')->with(array('categories'=>$categories));
    }

    public function showCategory($id = null)
    {
        if(isset($id))
        {
            $category = Category::where('id', $id)->first();
            return view('admin.category')->with(array('category'=>$category));
        }
        else
        {   
            $category = [
                'id' => 0,
                'category' => ''
            ];
            return view('admin.category')->with(array('category'=>$category));
        }
        
    }

    public function saveCategory(Request $request)
    {
        if($request->isMethod('POST')){

            if($request->input('id') == 0){
                //Adding new category
                $category = new Category;
                $category->category = $request->input('category');
                if($category->save()) {
                    return redirect()->route('categories')->with('success', 'Category successfully added!');
                }
                else{
                    return redirect()->route('categories')->with('error', 'Category was not added!');
                }
            }
            else{
                //Changing existing category
                $category = Category::findOrFail($request->input('id'));
                $category->category = $request->input('category');
                if ($category->save()) {
                    return redirect()->route('categories')->with('success', 'Category successfully updated!');
                }
                else{
                    return redirect()->route('categories')->with('error', 'Category was not updated!');
                }
            }
        }
        else{
            return redirect()->route('categories')->with('error', 'Wrong request method!');
        }
    }

    public function deleteCategory(Request $request)
    {
        if($request->isMethod('POST')){
            if (!empty($request->input('id'))){
                $category = Category::where(['id' => $request->input('id')])->first();
                if (!empty($category)){
                    $category->delete();
                    return response()->json(['result' => 'del']);
                }else{
                    return response()->json(['result' => 'not']);
                }
            }    
        }
    }
}
