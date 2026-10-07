<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

        // Usar datos del usuario autenticado, si no, del flujo de Google en sesión
        if (auth()->check()) {
            $name = auth()->user()->name;
            $email = auth()->user()->email;
        } elseif (session()->has('google_user')) {
            $userData = session('google_user');
            $name = $userData['name'] ?? 'Invitado';
            $email = $userData['email'] ?? null;
        } else {
            $name = 'Invitado';
            $email = null;
        }

        // Hora de Buenos Aires (GMT-3)
        $nowBuenosAires = now('America/Argentina/Buenos_Aires');

        // Evitar duplicados por usuario (email) + materia en el mismo día (BA)
        $alreadyExists = Attendance::query()
            ->when($email, function ($q) use ($email) {
                $q->where('email', $email);
            }, function ($q) use ($name) {
                // En caso extremo sin email, caer por nombre
                $q->where('name', $name);
            })
            ->where('subject', $request->subject)
            ->whereDate('attended_at', $nowBuenosAires->toDateString())
            ->exists();

        if ($alreadyExists) {
            return redirect()->route('attendance.form')
                ->withErrors(['subject' => 'Ya registraste asistencia para esta materia hoy.']);
        }

        Attendance::create([
            'name' => $name,
            'email' => $email,
            'subject' => $request->subject,
            'attended_at' => $nowBuenosAires,
        ]);

        return redirect()->route('attendance.form')->with('success', '¡Asistencia registrada!');
    }

    /**
     * Exporta las asistencias a un archivo CSV (respeta filtros).
     */
    public function exportCsv(Request $request)
    {
        $attendances = Attendance::filtered($request->only(['subject', 'date', 'date_from', 'date_to']))
            ->latest('attended_at')
            ->get();

        $filename = 'attendances_' . date('Ymd_His') . '.csv';

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
     * Devuelve las últimas asistencias para el dashboard.
     */
    public static function getLatestAttendances($limit = 10)
    {
        return Attendance::latest('attended_at')->limit($limit)->get();
    }

    /**
     * Muestra la lista de asistencias en el dashboard (paginada).
     */
    public function index(Request $request)
    {
        $attendances = Attendance::filtered($request->only(['subject', 'date', 'date_from', 'date_to']))
            ->latest('attended_at')
            ->paginate(25)
            ->withQueryString();

        // Obtener lista de materias únicas para el filtro
        $subjects = Attendance::distinct()->pluck('subject');

        return Inertia::render('dashboard/attendances', [
            'attendances' => $attendances,
            'subjects' => $subjects,
            'filters' => [
                'subject' => $request->subject,
                'date' => $request->date,
                'date_from' => $request->date_from,
                'date_to' => $request->date_to,
            ],
        ]);
    }
}