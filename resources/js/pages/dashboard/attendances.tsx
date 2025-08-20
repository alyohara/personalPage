// resources/js/pages/dashboard/attendances.tsx
import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

interface Attendance {
    id: number;
    name: string;
    email: string;
    subject: string;
    attended_at: string;
}

interface Props {
    attendances: Attendance[];
}

const subjectMap: Record<string, string> = {
    AyED: 'Algoritmos y Estructuras de Datos',
    ED: 'Estructuras de Datos',
    PC: 'Programación Concurrente',
};

export default function Attendances({ attendances }: Props) {
    return (
        <AppLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Listado de Asistencias</h1>
                    <a
                        href="/dashboard/attendances/export"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150"
                    >
                        Exportar CSV
                    </a>
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
