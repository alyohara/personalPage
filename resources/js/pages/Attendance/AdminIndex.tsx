import React from 'react';
import { PageProps } from '@inertiajs/inertia';

interface Attendance {
  id: number;
  name: string;
  email: string;
  subject: string;
  attended_at: string;
}

interface Props extends PageProps {
  attendances: {
    data: Attendance[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

const subjectMap: Record<string, string> = {
  AyED: 'Algoritmos y Estructuras de Datos',
  ED: 'Estructuras de Datos',
  PC: 'Programación Concurrente',
};

const AdminIndex: React.FC<Props> = ({ attendances }) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg font-mono">
      <h1 className="text-2xl font-bold mb-6 pixel-font">Asistencias Registradas</h1>
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
            {attendances.data.map((a) => (
              <tr key={a.id} className="odd:bg-[#fffbe6] even:bg-[#f8f8e8]">
                <td className="border border-[#222] px-2 py-1">{a.id}</td>
                <td className="border border-[#222] px-2 py-1">{a.name}</td>
                <td className="border border-[#222] px-2 py-1">{a.email}</td>
                <td className="border border-[#222] px-2 py-1">{subjectMap[a.subject] || a.subject}</td>
                <td className="border border-[#222] px-2 py-1">{new Date(a.attended_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Paginación simple */}
      <div className="mt-4 flex justify-between text-xs">
        <span>Página {attendances.current_page} de {attendances.last_page}</span>
        <span>Total: {attendances.total}</span>
      </div>
    </div>
  );
};

export default AdminIndex;
