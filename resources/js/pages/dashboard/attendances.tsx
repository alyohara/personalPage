// resources/js/pages/dashboard/attendances.tsx
import AppLayout from '@/layouts/app-layout';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

interface Attendance {
    id: number;
    name: string;
    email: string;
    subject: string;
    attended_at: string;
}

interface Filters {
    subject?: string;
    date?: string;
    date_from?: string;
    date_to?: string;
}

interface Props {
    attendances: Attendance[];
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
        const cleanFilters = Object.fromEntries(
            Object.entries(newFilters).filter(([_, v]) => v)
        );
        
        router.get('/dashboard/attendances', cleanFilters, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setLocalFilters({});
        router.get('/dashboard/attendances', {}, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <AppLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Listado de Asistencias</h1>
                        {Object.values(localFilters).some(v => v) && (
                            <p className="text-sm text-gray-600 mt-1">
                                Filtros activos: {Object.values(localFilters).filter(v => v).length}
                            </p>
                        )}
                    </div>
                    <a
                        href={`/dashboard/attendances/export?${new URLSearchParams(
                            Object.fromEntries(Object.entries(localFilters).filter(([_, v]) => v))
                        ).toString()}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150"
                    >
                        Exportar CSV
                    </a>
                </div>

                {/* Filtros */}
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Filtros</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Filtro por materia */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Materia
                            </label>
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Fecha específica
                            </label>
                            <input
                                type="date"
                                value={localFilters.date || ''}
                                onChange={(e) => handleFilterChange('date', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {/* Filtro desde fecha */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Desde
                            </label>
                            <input
                                type="date"
                                value={localFilters.date_from || ''}
                                onChange={(e) => handleFilterChange('date_from', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {/* Filtro hasta fecha */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Hasta
                            </label>
                            <input
                                type="date"
                                value={localFilters.date_to || ''}
                                onChange={(e) => handleFilterChange('date_to', e.target.value)}
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Filtros rápidos y botón para limpiar filtros */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm font-medium text-gray-700">Filtros rápidos:</span>
                            <button
                                onClick={() => handleFilterChange('date', new Date().toISOString().split('T')[0])}
                                className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm transition-colors duration-150"
                            >
                                Hoy
                            </button>
                            <button
                                onClick={() => {
                                    const yesterday = new Date();
                                    yesterday.setDate(yesterday.getDate() - 1);
                                    handleFilterChange('date', yesterday.toISOString().split('T')[0]);
                                }}
                                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm transition-colors duration-150"
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
                                className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm transition-colors duration-150"
                            >
                                Última semana
                            </button>
                        </div>
                        
                        <button
                            onClick={clearFilters}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150"
                        >
                            Limpiar Filtros
                        </button>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Materia
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {attendances.map((attendance) => (
                                <tr key={attendance.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {attendance.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {attendance.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {attendance.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {subjectMap[attendance.subject] || attendance.subject}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(attendance.attended_at).toLocaleString('es-ES', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    {attendances.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            No hay asistencias registradas
                        </div>
                    )}
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                    Total de asistencias: {attendances.length}
                </div>
            </div>
        </AppLayout>
    );
}
