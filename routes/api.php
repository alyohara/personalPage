<?php

use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;

Route::post('/messages/{id}/toggle-read', [MessageController::class, 'toggleRead']);
