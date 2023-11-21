<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Categories;
class CategoriesController extends Controller

{public function show($id)
{
$categories = Categories::find($id);
return view('category.detail', ['categories' =>
$categories]);
}
}
