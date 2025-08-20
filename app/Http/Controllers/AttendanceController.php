<?php

namespace App\Http\Controllers;
use App\Models\Attendance;
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

        \App\Models\Attendance::create([
            'name' => $name,
            'email' => $email,
            'subject' => $request->subject,
            'attended_at' => now(),
        ]);

        return redirect()->route('attendance.form')->with('success', '¡Asistencia registrada!');
    }

    /**
     * Exporta todas las asistencias a un archivo CSV
     */
    public function exportCsv()
    {
        $filename = 'attendances_' . date('Ymd_His') . '.csv';
        $attendances = Attendance::orderByDesc('attended_at')->get();

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"$filename\"",
        ];

        $callback = function () use ($attendances) {
            $handle = fopen('php://output', 'w');
            // Encabezados
            fputcsv($handle, ['ID', 'Nombre', 'Email', 'Materia', 'Fecha']);
            foreach ($attendances as $a) {
                fputcsv($handle, [
                    $a->id,
                    $a->name,
                    $a->email,
                    $a->subject,
                    $a->attended_at,
                ]);
            }
            fclose($handle);
        };

        return response()->stream($callback, 200, $headers);
    }

    /**
     * Devuelve las últimas asistencias para el dashboard
     */
    public static function getLatestAttendances($limit = 10)
    {
        return Attendance::orderByDesc('attended_at')->limit($limit)->get();
    }

    /**
     * Muestra la lista de asistencias en el panel admin
     */
    public function adminIndex()
    {
        $attendances = Attendance::orderByDesc('attended_at')->get();

        return Inertia::render('Attendance/AdminIndex', [
            'attendances' => $attendances,
        ]);
    }
}
