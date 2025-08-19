import React from 'react';
import { useForm } from '@inertiajs/react';

interface AttendanceFormProps {
  subjects: string[];
  googleUser?: { name: string; email: string } | null;
  user?: { name: string; email: string } | null;
}

const Form: React.FC<AttendanceFormProps> = ({ subjects, googleUser, user }) => {
  const { data, setData, post, processing, errors } = useForm({
    subject: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('attendance.submit'));
  };

  const currentUser = googleUser || user;

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Toma de Asistencia</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2">Materia:</label>
          <select
            name="subject"
            id="subject"
            className="w-full border rounded p-2"
            required
            value={data.subject}
            onChange={e => setData('subject', e.target.value)}
          >
            <option value="">Seleccione una materia</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          {errors.subject && <div className="text-red-600 mt-1">{errors.subject}</div>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={processing}>
          Registrar Asistencia
        </button>
      </form>
      {currentUser && (
        <div className="mt-4 text-gray-600">
          Registrado como: <strong>{currentUser.name} ({currentUser.email})</strong>
        </div>
      )}
      {!currentUser && (
        <a href={route('google.login')} className="bg-red-600 text-white px-4 py-2 rounded mt-4 inline-block">Ingresar con Google</a>
      )}
    </div>
  );
};

export default Form;
