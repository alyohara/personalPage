import React from 'react';
import { PageProps } from '@/types';

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

const subjectMap: Record<string, string> = {
  AyED: 'Algoritmos y Estructuras de Datos',
  ED: 'Estructuras de Datos',
  PC: 'Programación Concurrente',
};

const AdminIndex: React.FC<Props> = ({ attendances }) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg font-mono">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold pixel-font">Asistencias Registradas</h1>
        <a
          href="/admin/attendances/export"
          className="bg-[#ff0080] hover:bg-[#ff5ec3] text-white font-bold py-2 px-4 rounded border-2 border-[#222] shadow-[2px_2px_0_0_#222] transition-all duration-150 text-sm pixel-font"
        >
          Exportar CSV
        </a>
      </div>
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
            {attendances.map((a) => (
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
      {/* Total de asistencias */}
      <div className="mt-4 text-xs text-center">
        <span>Total de asistencias: {attendances.length}</span>
      </div>
    </div>
  );
};

export default AdminIndex;
