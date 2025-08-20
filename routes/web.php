<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

// Google Auth
Route::get('/auth/google', function () {
    return Socialite::driver('google')->redirect();
})->name('google.login');

Route::get('/auth/google/callback', function () {
    $googleUser = Socialite::driver('google')->stateless()->user();
    // Aquí puedes manejar el login o registro del usuario
    // Por simplicidad, puedes guardar los datos en sesión y redirigir
    session([
        'google_user' => [
            'email' => $googleUser->getEmail(),
            'name' => $googleUser->getName(),
        ]
    ]);
    return redirect()->route('attendance.form');
});

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
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/projects', function () {
    return Inertia::render('projects');
})->name('projects');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

// Rutas de asistencia públicas
Route::get('/attendance', [AttendanceController::class, 'showForm'])->name('attendance.form');
Route::post('/attendance', [AttendanceController::class, 'submit'])->name('attendance.submit');

// Blog routes
Route::get('/blog', [PostController::class, 'indexPublic'])->name('blog');
Route::get('/blog/{post:slug}', [PostController::class, 'show'])->name('blog.show');

// Rutas protegidas por autenticación
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $attendances = AttendanceController::getLatestAttendances(10);

        $todayTz = now('America/Argentina/Buenos_Aires')->toDateString();
        $totalToday = \App\Models\Attendance::whereDate('attended_at', $todayTz)->count();
        $ayedToday = \App\Models\Attendance::where('subject', 'AyED')->whereDate('attended_at', $todayTz)->count();
        $edToday = \App\Models\Attendance::where('subject', 'ED')->whereDate('attended_at', $todayTz)->count();
        $pcToday = \App\Models\Attendance::where('subject', 'PC')->whereDate('attended_at', $todayTz)->count();
        $unreadMessages = \App\Models\Message::where('is_read', false)->count();

        return Inertia::render('dashboard', [
            'attendances' => $attendances,
            'stats' => [
                'today' => [
                    'total' => $totalToday,
                    'AyED' => $ayedToday,
                    'ED' => $edToday,
                    'PC' => $pcToday,
                ],
                'unreadMessages' => $unreadMessages,
            ],
        ]);
    })->name('dashboard');
    
    Route::get('/dashboard/messages', [MessageController::class, 'index'])->name('dashboard.messages');
    Route::get('/dashboard/messages/{id}', [MessageController::class, 'show'])->name('dashboard.messages.show');
});

// Rutas de mensajes públicas
Route::post('/messages', [MessageController::class, 'store']);

// Rutas de posts (requieren autenticación)
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/dashboard/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/dashboard/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/dashboard/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::post('/dashboard/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/dashboard/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/dashboard/posts/{post}/publish', [PostController::class, 'publish'])->name('posts.publish');
    Route::post('/dashboard/posts/{post}/unpublish', [PostController::class, 'unpublish'])->name('posts.unpublish');
    
    // Rutas de asistencias dentro del dashboard
    Route::get('/dashboard/attendances', [AttendanceController::class, 'index'])->name('attendances.index');
    Route::get('/dashboard/attendances/export', [AttendanceController::class, 'exportCsv'])->name('attendances.export');
});

// Deploy route
Route::get('/deploy', [App\Http\Controllers\DeployController::class, 'deploy']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
