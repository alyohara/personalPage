// resources/js/pages/dashboard/attendances.tsx
import AppLayout from '@/layouts/app-layout';
import { paginationLabel } from '@/lib/sanitize';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Attendance {
    id: number;
    name: string;
    email: string;
    subject: string;
    attended_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedAttendances {
    data: Attendance[];
    current_page: number;
    last_page: number;
    total: number;
    links: PaginationLink[];
}

interface Filters {
    subject?: string;
    date?: string;
    date_from?: string;
    date_to?: string;
}

interface Props {
    attendances: PaginatedAttendances;
    subjects: string[];
    filters: Filters;
}

const subjectMap: Record<string, string> = {
    AyED: 'Algoritmos y Estructuras de Datos',
    ED: 'Estructuras de Datos',
    PC: 'Programación Concurrente',
};

export default function Attendances({ attendances, subjects, filters }: Props) {
    const [localFilters, setLocalFilters] = useState<Filters>(filters);

    const handleFilterChange = (key: keyof Filters, value: string) => {
        const newFilters = { ...localFilters, [key]: value || undefined };
        setLocalFilters(newFilters);

        // Remover filtros vacíos antes de enviar
        const cleanFilters = Object.fromEntries(Object.entries(newFilters).filter(([, v]) => v));

        router.get('/dashboard/attendances', cleanFilters, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setLocalFilters({});
        router.get(
            '/dashboard/attendances',
            {},
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const handlePageChange = (url: string | null) => {
        if (url) {
            router.visit(url, { preserveState: true, preserveScroll: true });
        }
    };

    return (
        <AppLayout>
            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Listado de Asistencias</h1>
                        {Object.values(localFilters).some((v) => v) && (
                            <p className="mt-1 text-sm text-gray-600">Filtros activos: {Object.values(localFilters).filter((v) => v).length}</p>
                        )}
                    </div>
                    <a
                        href={`/dashboard/attendances/export?${new URLSearchParams(
                            Object.fromEntries(Object.entries(localFilters).filter(([, v]) => v)),
                        ).toString()}`}
                        className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-150 hover:bg-blue-700"
                    >
                        Exportar CSV
                    </a>
                </div>

                {/* Filtros */}
                <div className="mb-6 rounded-lg bg-white p-4 shadow">
                    <h3 className="mb-4 text-lg font-semibold">Filtros</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {/* Filtro por materia */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">Materia</label>
                            <select
                                value={localFilters.subject || ''}
                                onChange={(e) => handleFilterChange('subject', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option value="">Todas las materias</option>
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>
                                        {subjectMap[subject] || subject}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Filtro por fecha específica */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">Fecha específica</label>
                            <input
                                type="date"
                                value={localFilters.date || ''}
                                onChange={(e) => handleFilterChange('date', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {/* Filtro desde fecha */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">Desde</label>
                            <input
                                type="date"
                                value={localFilters.date_from || ''}
                                onChange={(e) => handleFilterChange('date_from', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {/* Filtro hasta fecha */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">Hasta</label>
                            <input
                                type="date"
                                value={localFilters.date_to || ''}
                                onChange={(e) => handleFilterChange('date_to', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Filtros rápidos y botón para limpiar filtros */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm font-medium text-gray-700">Filtros rápidos:</span>
                            <button
                                onClick={() => handleFilterChange('date', new Date().toISOString().split('T')[0])}
                                className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 transition-colors duration-150 hover:bg-green-200"
                            >
                                Hoy
                            </button>
                            <button
                                onClick={() => {
                                    const yesterday = new Date();
                                    yesterday.setDate(yesterday.getDate() - 1);
                                    handleFilterChange('date', yesterday.toISOString().split('T')[0]);
                                }}
                                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 transition-colors duration-150 hover:bg-blue-200"
                            >
                                Ayer
                            </button>
                            <button
                                onClick={() => {
                                    const today = new Date();
                                    const weekAgo = new Date();
                                    weekAgo.setDate(today.getDate() - 7);
                                    handleFilterChange('date_from', weekAgo.toISOString().split('T')[0]);
                                    handleFilterChange('date_to', today.toISOString().split('T')[0]);
                                }}
                                className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 transition-colors duration-150 hover:bg-purple-200"
                            >
                                Última semana
                            </button>
                        </div>

                        <button
                            onClick={clearFilters}
                            className="rounded bg-gray-500 px-4 py-2 font-bold text-white transition-colors duration-150 hover:bg-gray-700"
                        >
                            Limpiar Filtros
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Nombre</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Materia</th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {attendances.data.map((attendance) => (
                                <tr key={attendance.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">{attendance.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{attendance.name}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{attendance.email}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                        {subjectMap[attendance.subject] || attendance.subject}
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                        {new Date(attendance.attended_at).toLocaleString('es-ES', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {attendances.data.length === 0 && <div className="py-8 text-center text-gray-500">No hay asistencias registradas</div>}
                </div>

                {attendances.last_page > 1 && (
                    <div className="mt-4 flex justify-center gap-2">
                        {attendances.links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(link.url)}
                                disabled={!link.url}
                                className={`rounded-lg border px-4 py-2 text-sm ${
                                    link.active
                                        ? 'border-blue-600 bg-blue-600 text-white'
                                        : link.url
                                          ? 'bg-white text-gray-700 hover:bg-blue-50'
                                          : 'cursor-not-allowed bg-gray-100 text-gray-400'
                                }`}
                            >
                                {paginationLabel(link.label)}
                            </button>
                        ))}
                    </div>
                )}

                <div className="mt-4 text-sm text-gray-600">Total de asistencias: {attendances.total}</div>
            </div>
        </AppLayout>
    );
}
