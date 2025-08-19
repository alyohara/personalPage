<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AttendanceController extends Controller
{

    public function showForm()
    {
        $subjects = ['AyED', 'ED', 'PC'];
        $googleUser = session('google_user');
        $user = auth()->user();
        return Inertia::render('Attendance/Form', [
            'subjects' => $subjects,
            'googleUser' => $googleUser,
            'user' => $user ? [
                'name' => $user->name,
                'email' => $user->email,
            ] : null,
        ]);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'subject' => 'required|in:AyED,ED,PC',
        ]);

        $now = now();
        $date = $now->format('Y-m-d');
        $time = $now->format('H:i:s');
        $filename = "attendance_{$date}.txt";

        // Usar datos de Google si están en sesión, si no, del usuario autenticado
        if (session()->has('google_user')) {
            $userData = session('google_user');
            $email = $userData['email'];
            $name = $userData['name'];
        } else {
            $user = Auth::user();
            $email = $user ? $user->email : 'anonimo';
            $name = $user ? $user->name : 'anonimo';
        }
        $line = $email . "," . $name . "," . $request->subject . "," . $date . "," . $time . "\n";
        Storage::disk('local')->append($filename, $line);

        return redirect()->back()->with('success', 'Asistencia registrada correctamente.');
    }
}
