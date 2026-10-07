import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { CalendarDays, MessageSquareText, TrendingUp, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Attendance {
    id: number;
    name: string;
    email: string;
    subject: string;
    attended_at: string;
}

const subjectMap: Record<string, string> = {
    AyED: 'Algoritmos y Estructuras de Datos',
    ED: 'Estructuras de Datos',
    PC: 'Programación Concurrente',
};

type Stats = {
    today: { total: number; AyED: number; ED: number; PC: number };
    unreadMessages: number;
    topAttendees?: Array<{ user_key: string; name: string | null; email: string | null; total: number }>;
    last7days?: Array<{ date: string; total: number }>;
};

interface Props {
    attendances: Attendance[];
    stats: Stats;
}

export default function Dashboard({ attendances, stats }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Accesos rápidos */}
                <div className="mb-4 flex flex-wrap gap-4">
                    <a
                        href="/dashboard/attendances"
                        className="pixel-font rounded border-2 border-[#222] bg-blue-700 px-4 py-2 font-bold text-white shadow transition-colors duration-150 hover:bg-blue-800"
                    >
                        Ver todas las asistencias
                    </a>
                    <a
                        href="/dashboard/attendances/export"
                        className="pixel-font rounded border-2 border-[#222] bg-green-700 px-4 py-2 font-bold text-white shadow transition-colors duration-150 hover:bg-green-800"
                    >
                        Exportar asistencias (CSV)
                    </a>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Hoy */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white/80 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-[#222] p-2 text-white">
                                <CalendarDays className="size-5" />
                            </div>
                            <div>
                                <div className="text-sm text-neutral-500">Asistencias de hoy</div>
                                <div className="text-2xl font-bold">{stats?.today.total ?? 0}</div>
                            </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="rounded border border-[#222] bg-[#fffbe6] p-2">
                                <div className="font-bold">AyED</div>
                                <div>{stats?.today.AyED ?? 0}</div>
                            </div>
                            <div className="rounded border border-[#222] bg-[#fffbe6] p-2">
                                <div className="font-bold">ED</div>
                                <div>{stats?.today.ED ?? 0}</div>
                            </div>
                            <div className="rounded border border-[#222] bg-[#fffbe6] p-2">
                                <div className="font-bold">PC</div>
                                <div>{stats?.today.PC ?? 0}</div>
                            </div>
                        </div>
                    </div>
                    {/* No leidos */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white/80 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-[#222] p-2 text-white">
                                <MessageSquareText className="size-5" />
                            </div>
                            <div>
                                <div className="text-sm text-neutral-500">Mensajes sin leer</div>
                                <div className="text-2xl font-bold">{stats?.unreadMessages ?? 0}</div>
                            </div>
                        </div>
                        <a
                            href="/dashboard/messages"
                            className="pixel-font mt-3 inline-block rounded border-2 border-[#222] bg-[#ff0080] px-3 py-2 text-xs font-bold text-white shadow hover:bg-[#ff5ec3]"
                        >
                            Ver mensajes
                        </a>
                    </div>
                    {/* Accesos */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex flex-col overflow-hidden rounded-xl border bg-white/80 p-4">
                        <div className="mb-2 flex items-center gap-3">
                            <div className="rounded-md bg-[#222] p-2 text-white">
                                <Users className="size-5" />
                            </div>
                            <div>
                                <div className="text-sm text-neutral-500">Accesos rápidos</div>
                                <div className="text-lg font-bold">Asistencias</div>
                            </div>
                        </div>
                        <div className="mt-auto flex flex-wrap gap-2">
                            <a
                                href="/dashboard/attendances"
                                className="pixel-font rounded border-2 border-[#222] bg-blue-700 px-3 py-2 text-xs font-bold text-white shadow hover:bg-blue-800"
                            >
                                Ver todas
                            </a>
                            <a
                                href="/dashboard/attendances/export"
                                className="pixel-font rounded border-2 border-[#222] bg-green-700 px-3 py-2 text-xs font-bold text-white shadow hover:bg-green-800"
                            >
                                Exportar CSV
                            </a>
                        </div>
                    </div>
                </div>
                {/* Resumen últimos 7 días y Top asistentes */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white/80 p-4 md:col-span-2">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="rounded-md bg-[#222] p-2 text-white">
                                <TrendingUp className="size-5" />
                            </div>
                            <div>
                                <div className="text-sm text-neutral-500">Asistencias últimos 7 días</div>
                                <div className="text-lg font-bold">Tendencia</div>
                            </div>
                        </div>
                        <div className="flex h-32 items-end gap-2">
                            {(stats?.last7days ?? []).map((d) => (
                                <div key={d.date} className="flex-1">
                                    <div
                                        className="border-2 border-[#222] bg-[#ff0080]"
                                        style={{ height: Math.max(4, Math.min(100, d.total * 8)) }}
                                    />
                                    <div className="mt-1 text-center text-[10px]">
                                        {new Date(d.date).toLocaleDateString(undefined, { day: '2-digit' })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border bg-white/80 p-4">
                        <div className="text-sm text-neutral-500">Top asistentes</div>
                        <ul className="mt-2 space-y-2 text-sm">
                            {(stats?.topAttendees ?? []).map((u) => (
                                <li
                                    key={u.user_key}
                                    className="flex items-center justify-between rounded border border-[#222] bg-[#fffbe6] px-2 py-1"
                                >
                                    <span className="max-w-[70%] truncate">{u.name || u.email}</span>
                                    <span className="font-bold">{u.total}</span>
                                </li>
                            ))}
                            {(!stats?.topAttendees || stats.topAttendees.length === 0) && (
                                <li className="text-neutral-500">Sin datos suficientes.</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border bg-white/80 p-6 md:min-h-min">
                    <h2 className="pixel-font mb-4 text-xl font-bold">Últimas asistencias registradas</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-[#222] text-sm">
                            <thead>
                                <tr className="bg-[#f8f8e8] text-[#222]">
                                    <th className="border border-[#222] px-2 py-1">#</th>
                                    <th className="border border-[#222] px-2 py-1">Nombre</th>
                                    <th className="border border-[#222] px-2 py-1">Email</th>
                                    <th className="border border-[#222] px-2 py-1">Materia</th>
                                    <th className="border border-[#222] px-2 py-1">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendances && attendances.length > 0 ? (
                                    attendances.map((a) => (
                                        <tr key={a.id} className="odd:bg-[#fffbe6] even:bg-[#f8f8e8]">
                                            <td className="border border-[#222] px-2 py-1">{a.id}</td>
                                            <td className="border border-[#222] px-2 py-1">{a.name}</td>
                                            <td className="border border-[#222] px-2 py-1">{a.email}</td>
                                            <td className="border border-[#222] px-2 py-1">{subjectMap[a.subject] || a.subject}</td>
                                            <td className="border border-[#222] px-2 py-1">{new Date(a.attended_at).toLocaleString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="py-4 text-center">
                                            No hay asistencias registradas.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
