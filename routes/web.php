<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProfileController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [NewsController::class, 'index'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
//Create Data Category
Route::get('/categories/categories',[CategoriesController::class,
'create'])->name('category.create');
Route::post('/categories', [CategoriesController::class,
'store'])->name('category.store');
Route::get('/categories', [CategoriesController::class,
'index'])->name('category.index');
Route::delete('/categories/{id}', [CategoriesController::class,
'destroy'])->name('category.destroy');
Auth::routes();
Route::get('/categories/{id}', [CategoriesController::class,
'show'])->name('category.show');
Route::get('/news/detail/{id}', [NewsController::class,
'detail'])->name('news.detail');
