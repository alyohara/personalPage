<?php

use App\Http\Controllers\PageController;
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
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

// routes/web.php
Route::get('/deploy', 'DeployController@deploy');
