<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Message;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
        $today = now('America/Argentina/Buenos_Aires')->toDateString();

        $stats = [
            'today' => [
                'total' => $this->countAttendance($today),
                'AyED' => $this->countAttendance($today, 'AyED'),
                'ED' => $this->countAttendance($today, 'ED'),
                'PC' => $this->countAttendance($today, 'PC'),
            ],
            'unreadMessages' => Message::where('is_read', false)->count(),
            'topAttendees' => Attendance::selectRaw('COALESCE(email, name) as user_key, name, email, COUNT(*) as total')
                ->groupBy('user_key', 'name', 'email')
                ->orderByDesc('total')
                ->limit(5)
                ->get(),
            'last7days' => collect(range(0, 6))
                ->map(fn ($i) => now('America/Argentina/Buenos_Aires')->copy()->subDays(6 - $i)->toDateString())
                ->map(fn ($date) => [
                    'date' => $date,
                    'total' => Attendance::whereDate('attended_at', $date)->count(),
                ]),
        ];

        return Inertia::render('dashboard', [
            'attendances' => Attendance::latest('attended_at')->limit(10)->get(),
            'stats' => $stats,
        ]);
    }

    private function countAttendance(string $date, ?string $subject = null): int
    {
        return Attendance::query()
            ->whereDate('attended_at', $date)
            ->when($subject, fn ($q) => $q->where('subject', $subject))
            ->count();
    }
}