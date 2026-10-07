<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

// Google OAuth: registra la identidad en una sesión (sin otorgar acceso al dashboard privado)
Route::get('/auth/google', function () {
    return Socialite::driver('google')->redirect();
})->name('google.login');

Route::get('/auth/google/callback', function () {
    $googleUser = Socialite::driver('google')->stateless()->user();

    // Registra o recupera la identidad para poder rastrear asistencias por email
    if ($email = $googleUser->getEmail()) {
        User::firstOrCreate(
            ['email' => $email],
            [
                'name' => $googleUser->getName() ?? $email,
                'password' => Str::password(),
                'email_verified_at' => now(),
            ]
        );
    }

    session([
        'google_user' => [
            'email' => $googleUser->getEmail(),
            'name' => $googleUser->getName(),
        ],
    ]);

    return redirect()->route('attendance.form');
})->name('google.callback');

// Cerrar sesión (Google y/o Laravel auth)
Route::post('/auth/logout-all', function (Request $request) {
    if (session()->has('google_user')) {
        session()->forget('google_user');
    }

    if (Auth::check()) {
        Auth::guard('web')->logout();
    }

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect()->route('attendance.form');
})->name('logout.all');

// Rutas públicas
Route::get('/', fn () => Inertia::render('welcome'))->name('home');
Route::get('/about', fn () => Inertia::render('about'))->name('about');
Route::get('/projects', fn () => Inertia::render('projects'))->name('projects');
Route::get('/catedras', fn () => Inertia::render('catedras'))->name('catedras');
Route::get('/contact', fn () => Inertia::render('contact'))->name('contact');

// Rutas de asistencia públicas (con límite de intentos anti-spam)
Route::get('/attendance', [AttendanceController::class, 'showForm'])->name('attendance.form');
Route::post('/attendance', [AttendanceController::class, 'submit'])->middleware('throttle:20,1')->name('attendance.submit');

// Blog público
Route::get('/blog', [PostController::class, 'indexPublic'])->name('blog');
Route::get('/blog/{post:slug}', [PostController::class, 'show'])->name('blog.show');

// Mensajes públicos (con límite de intentos anti-spam)
Route::post('/messages', [MessageController::class, 'store'])->middleware('throttle:10,1');

// Rutas protegidas por autenticación
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/messages', [MessageController::class, 'index'])->name('dashboard.messages');
    Route::get('/dashboard/messages/{id}', [MessageController::class, 'show'])->name('dashboard.messages.show');
});

// Gestión de posts (requieren autenticación)
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/dashboard/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/dashboard/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/dashboard/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/dashboard/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/dashboard/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/dashboard/posts/{post}/publish', [PostController::class, 'publish'])->name('posts.publish');
    Route::post('/dashboard/posts/{post}/unpublish', [PostController::class, 'unpublish'])->name('posts.unpublish');

    // Asistencias dentro del dashboard
    Route::get('/dashboard/attendances', [AttendanceController::class, 'index'])->name('attendances.index');
    Route::get('/dashboard/attendances/export', [AttendanceController::class, 'exportCsv'])->name('attendances.export');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
