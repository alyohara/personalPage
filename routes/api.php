<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('/api/messages/{id}/toggle-read', [MessageController::class, 'toggleReadStatus']);

