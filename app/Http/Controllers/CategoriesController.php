<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();
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
                $category->save();
                $insert = Category::insert(['category'=>$category]);
                if($insert){
                    return redirect('/categories')->with('message', 'Успешно записахте новата категория!');
                }
                else{
                    return redirect('/categories')->with('message', 'Грешка при записване на категория!');
                }
            }
            else{
                //Changing existing category
                $category = $request->input('category');
                $update = Category::where(['id'=>$request->input('category')])->update(['category'=>$category]);
                if($update){
                    return redirect('/categories')->with('message', 'Успешно променихте категорията!');
                }
                else{
                    return redirect('/categories')->with('message', 'Грешка при промяната на категорията!');
                }
            }

            return redirect('/categories');
        }
    }
}
