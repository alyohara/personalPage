<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return inertia('about');
})->name('about');

Route::get('/projects', function () {
    return inertia('projects');
})->name('projects');

Route::get('/blog', function () {
    return inertia('blog');
})->name('blog');

Route::get('/contact', function () {
    return inertia('contact');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::post('/messages', [MessageController::class, 'store']);
Route::get('/dashboard/messages', [MessageController::class, 'index'])->name('dashboard.messages');
//Route::post('/messages/{id}/toggle-read', [MessageController::class, 'toggleReadStatus']);
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard/messages/{id}', [MessageController::class, 'show'])->name('dashboard.messages.show');
});


Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/dashboard/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/dashboard/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/dashboard/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/dashboard/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/dashboard/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/dashboard/posts/{post}/publish', [PostController::class, 'publish'])->name('posts.publish');
    Route::post('/dashboard/posts/{post}/unpublish', [PostController::class, 'unpublish'])->name('posts.unpublish');
});
Route::get('/blog', [PostController::class, 'indexPublic'])->name('blog');
Route::get('/blog/{post:slug}', [PostController::class, 'show'])->name('blog.show');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// routes/web.php
Route::get('/deploy', 'DeployController@deploy');
