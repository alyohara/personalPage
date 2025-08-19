    public function adminIndex()
    {
        $this->middleware('auth');
        $attendances = \App\Models\Attendance::orderByDesc('attended_at')->paginate(30);
        return inertia('Attendance/AdminIndex', [
            'attendances' => $attendances,
        ]);
    }
use App\Models\Attendance;
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

        // Usar datos de Google si están en sesión, si no, del usuario autenticado
        if (session()->has('google_user')) {
            $userData = session('google_user');
            $name = $userData['name'] ?? 'Invitado';
            $email = $userData['email'] ?? null;
        } elseif (auth()->check()) {
            $name = auth()->user()->name;
            $email = auth()->user()->email;
        } else {
            $name = 'Invitado';
            $email = null;
        }

        Attendance::create([
            'name' => $name,
            'email' => $email,
            'subject' => $request->subject,
            'attended_at' => now(),
        ]);

        return redirect()->route('attendance.form')->with('success', '¡Asistencia registrada!');
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
