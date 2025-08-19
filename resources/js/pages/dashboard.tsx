
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

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

export default function Dashboard() {
    const { attendances } = usePage().props as { attendances: Attendance[] };
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
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
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
