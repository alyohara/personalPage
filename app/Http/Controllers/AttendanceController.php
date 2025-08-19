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

        return Inertia::render('Admin/Attendances', [
            'attendances' => $attendances,
        ]);
    }
}

// ¡IMPORTANTE! Elimina la definición de rutas de aquí.
// Las rutas deben ir en routes/web.php, no en el controlador.

import React from "react";
import { PageProps } from "@/types";

interface Attendance {
  id: number;
  name: string;
  email: string;
  subject: string;
  attended_at: string;
}

interface Props extends PageProps {
  attendances: Attendance[];
}

export default function Attendances({ attendances }: Props) {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto" }}>
      <h1>Asistencias registradas</h1>
      <a
        href={route("admin.attendances.export")}
        className="btn btn-primary"
        style={{ marginBottom: 16, display: "inline-block" }}
      >
        Exportar a CSV
      </a>
      <table className="table table-bordered" style={{ width: "100%", background: "#fff" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Materia</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.subject}</td>
              <td>{a.attended_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Ejemplo de cómo agregar accesos en el menú lateral del dashboard
// filepath: resources/js/Layouts/AdminLayout.tsx
import { Link } from '@inertiajs/react';

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link href={route('dashboard')}>Dashboard</Link>
            </li>
            <li>
              <Link href={route('admin.attendances')}>Asistencias</Link>
            </li>
            <li>
              <a href={route('admin.attendances.export')}>Exportar Asistencias</a>
            </li>
            {/* ...otros accesos... */}
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
