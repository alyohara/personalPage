
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

interface AttendanceFormProps {
  subjects: string[];
  googleUser?: { name: string; email: string } | null;
  user?: { name: string; email: string } | null;
}

const Form: React.FC<AttendanceFormProps> = ({ subjects, googleUser, user }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    subject: '',
  });
  const [step, setStep] = useState<'login' | 'subject' | 'register' | 'done'>(
    googleUser || user ? 'subject' : 'login'
  );
  const currentUser = googleUser || user;
  const [success, setSuccess] = useState(false);

  const handleSubjectSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData('subject', e.target.value);
    if (e.target.value) setStep('register');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('attendance.submit'), {
      onSuccess: () => {
        setSuccess(true);
        setStep('done');
        reset();
      },
    });
  };

  // Estilos inspirados en la página principal
  const cardClass =
    'bg-white/80 shadow-xl rounded-xl p-8 max-w-md mx-auto mt-16 border border-gray-200';
  const titleClass = 'text-3xl font-bold text-center text-blue-900 mb-6';
  const buttonClass =
    'w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4';
  const selectClass =
    'w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className={cardClass}>
        <h1 className={titleClass}>Toma de Asistencia</h1>

        {step === 'login' && (
          <a
            href="/auth/google"
            className={buttonClass + ' flex items-center justify-center gap-2'}
            style={{ background: '#ea4335', color: 'white' }}
          >
            <svg width="24" height="24" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.39 30.18 0 24 0 14.82 0 6.71 5.82 2.69 14.09l7.99 6.21C12.13 13.16 17.56 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.64 7.04l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M9.68 28.3c-1.13-3.36-1.13-6.94 0-10.3l-7.99-6.21C-1.13 17.09-1.13 30.91 1.69 39.21l7.99-6.21z"/><path fill="#EA4335" d="M24 44c6.18 0 11.64-2.39 15.85-6.55l-7.19-5.6c-2.01 1.35-4.6 2.15-8.66 2.15-6.44 0-11.87-3.66-14.32-8.8l-7.99 6.21C6.71 42.18 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
            Ingresar con Google
          </a>
        )}

        {step === 'subject' && currentUser && (
          <>
            <div className="mb-6 text-center text-lg text-gray-700">
              Bienvenido, <span className="font-semibold">{currentUser.name}</span>
              <br />
              <span className="text-sm text-gray-500">{currentUser.email}</span>
            </div>
            <label htmlFor="subject" className="block mb-2 text-gray-800 font-medium">
              Selecciona la materia:
            </label>
            <select
              name="subject"
              id="subject"
              className={selectClass}
              value={data.subject}
              onChange={handleSubjectSelect}
            >
              <option value="">Elige una materia</option>
              <option value="AyED">Algoritmos y Estructuras de Datos</option>
              <option value="ED">Estructuras de Datos</option>
              <option value="PC">Programación Concurrente</option>
            </select>
            {errors.subject && <div className="text-red-600 mt-2">{errors.subject}</div>}
          </>
        )}

        {step === 'register' && currentUser && (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4 text-center text-lg text-gray-700">
              Materia seleccionada: <span className="font-semibold">
                {data.subject === 'AyED' && 'Algoritmos y Estructuras de Datos'}
                {data.subject === 'ED' && 'Estructuras de Datos'}
                {data.subject === 'PC' && 'Programación Concurrente'}
              </span>
            </div>
            <button type="submit" className={buttonClass} disabled={processing}>
              Registrar Asistencia
            </button>
          </form>
        )}

        {step === 'done' && (
          <div className="text-center text-green-700 font-semibold text-lg">
            ¡Asistencia registrada correctamente!
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
