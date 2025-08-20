
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Users, MessageSquareText, CalendarDays } from 'lucide-react';

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
};

export default function Dashboard() {
    const { attendances, stats } = usePage().props as { attendances: Attendance[]; stats?: Stats };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Accesos rápidos */}
                <div className="flex flex-wrap gap-4 mb-4">
                    <a
                        href="/admin/attendances"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded border-2 border-[#222] shadow pixel-font transition-colors duration-150"
                    >
                        Ver todas las asistencias
                    </a>
                    <a
                        href="/admin/attendances/export"
                        className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded border-2 border-[#222] shadow pixel-font transition-colors duration-150"
                    >
                        Exportar asistencias (CSV)
                    </a>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Hoy */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white/80 p-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#222] text-white rounded-md p-2"><CalendarDays className="size-5" /></div>
                            <div>
                                <div className="text-sm text-neutral-500">Asistencias de hoy</div>
                                <div className="text-2xl font-bold">{stats?.today.total ?? 0}</div>
                            </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="bg-[#fffbe6] border border-[#222] rounded p-2"><div className="font-bold">AyED</div><div>{stats?.today.AyED ?? 0}</div></div>
                            <div className="bg-[#fffbe6] border border-[#222] rounded p-2"><div className="font-bold">ED</div><div>{stats?.today.ED ?? 0}</div></div>
                            <div className="bg-[#fffbe6] border border-[#222] rounded p-2"><div className="font-bold">PC</div><div>{stats?.today.PC ?? 0}</div></div>
                        </div>
                    </div>
                    {/* No leidos */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white/80 p-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#222] text-white rounded-md p-2"><MessageSquareText className="size-5" /></div>
                            <div>
                                <div className="text-sm text-neutral-500">Mensajes sin leer</div>
                                <div className="text-2xl font-bold">{stats?.unreadMessages ?? 0}</div>
                            </div>
                        </div>
                        <a href="/dashboard/messages" className="mt-3 inline-block bg-[#ff0080] hover:bg-[#ff5ec3] text-white font-bold py-2 px-3 rounded border-2 border-[#222] shadow pixel-font text-xs">Ver mensajes</a>
                    </div>
                    {/* Accesos */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white/80 p-4 flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-[#222] text-white rounded-md p-2"><Users className="size-5" /></div>
                            <div>
                                <div className="text-sm text-neutral-500">Accesos rápidos</div>
                                <div className="text-lg font-bold">Asistencias</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <a href="/dashboard/attendances" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded border-2 border-[#222] shadow pixel-font text-xs">Ver todas</a>
                            <a href="/dashboard/attendances/export" className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-3 rounded border-2 border-[#222] shadow pixel-font text-xs">Exportar CSV</a>
                        </div>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min p-6 bg-white/80">
                    <h2 className="text-xl font-bold mb-4 pixel-font">Últimas asistencias registradas</h2>
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
                                {attendances && attendances.length > 0 ? attendances.map((a) => (
                                    <tr key={a.id} className="odd:bg-[#fffbe6] even:bg-[#f8f8e8]">
                                        <td className="border border-[#222] px-2 py-1">{a.id}</td>
                                        <td className="border border-[#222] px-2 py-1">{a.name}</td>
                                        <td className="border border-[#222] px-2 py-1">{a.email}</td>
                                        <td className="border border-[#222] px-2 py-1">{subjectMap[a.subject] || a.subject}</td>
                                        <td className="border border-[#222] px-2 py-1">{new Date(a.attended_at).toLocaleString()}</td>
                                    </tr>
                                )) : (
                                    <tr><td colSpan={5} className="text-center py-4">No hay asistencias registradas.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
