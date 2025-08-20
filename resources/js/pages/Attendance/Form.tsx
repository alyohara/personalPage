
import React, { useState, useEffect } from 'react';
import { useForm, router } from '@inertiajs/react';

interface AttendanceFormProps {
  subjects: string[];
  googleUser?: { name: string; email: string } | null;
  user?: { name: string; email: string } | null;
}

const Form: React.FC<AttendanceFormProps> = ({ subjects, googleUser, user }) => {
  const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
    subject: '',
  });
  const [step, setStep] = useState<'login' | 'subject' | 'register' | 'done'>(
    googleUser || user ? 'subject' : 'login'
  );
  const currentUser = googleUser || user;
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setStep('login');
      setData('subject', '');
      setSuccess(false);
      clearErrors();
    }
  }, [googleUser, user]);

  const handleSubjectSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData('subject', e.target.value);
    clearErrors('subject');
    if (e.target.value) setStep('register');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('attendance.submit'), {
      onSuccess: () => {
        setSuccess(true);
        setStep('done');
        reset();
        clearErrors();
      },
    });
  };

  const handleLogout = () => {
    router.post(route('logout.all'), {}, {
      preserveState: false,
      replace: true,
      onFinish: () => {
        window.location.href = route('attendance.form');
      },
    });
  };

  const handleBackToSubject = () => {
    setSuccess(false);
    setStep('subject');
    clearErrors();
  };

  // Estilo retro tipo pixel-art
  const retroCard =
    'bg-[#f8f8e8] border-4 border-[#222] rounded-lg p-8 max-w-md mx-auto mt-16 shadow-[8px_8px_0_0_#222] font-mono';
  const retroTitle =
    'text-4xl font-bold text-center mb-6 text-[#222] drop-shadow-[2px_2px_0_#fff] tracking-widest pixel-font';
  const retroButton =
    'w-full bg-[#ff0080] hover:bg-[#ff5ec3] text-white font-bold py-3 px-6 rounded border-4 border-[#222] shadow-[4px_4px_0_0_#222] transition-all duration-150 mt-4 text-lg pixel-font';
  const retroSelect =
    'w-full border-4 border-[#222] rounded p-3 font-mono bg-[#fffbe6] text-[#222] text-lg focus:ring-2 focus:ring-[#ff0080] focus:outline-none pixel-font';
  const retroLabel = 'block mb-2 text-[#222] font-bold pixel-font';
  const retroWelcome = 'mb-6 text-center text-lg text-[#222] font-mono';
  const retroSuccess = 'text-center text-green-700 font-bold text-xl pixel-font mt-6';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e0d0] via-[#fffbe6] to-[#e0e0d0]">
      {currentUser && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full px-4 z-10">
          <div className="max-w-md mx-auto flex justify-end">
            <button
              type="button"
              onClick={handleLogout}
              className={retroButton}
              style={{ background: '#222', borderColor: '#222' }}
            >
              Salir
            </button>
          </div>
        </div>
      )}
      <div className={retroCard} style={{ boxShadow: '8px 8px 0 0 #222' }}>
        <h1 className={retroTitle} style={{ fontFamily: 'monospace, \"Press Start 2P\", \"VT323\", \"Courier New\", Courier, monospace' }}>
          Toma de Asistencia
        </h1>

        {!currentUser && (
          <a
            href="/auth/google"
            className={retroButton + ' flex items-center justify-center gap-2'}
            style={{ background: '#ff0080', borderColor: '#222', fontFamily: 'monospace, \"Press Start 2P\", \"VT323\", \"Courier New\", Courier, monospace' }}
          >
            <svg width="24" height="24" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.39 30.18 0 24 0 14.82 0 6.71 5.82 2.69 14.09l7.99 6.21C12.13 13.16 17.56 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.64 7.04l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M9.68 28.3c-1.13-3.36-1.13-6.94 0-10.3l-7.99-6.21C-1.13 17.09-1.13 30.91 1.69 39.21l7.99-6.21z"/><path fill="#EA4335" d="M24 44c6.18 0 11.64-2.39 15.85-6.55l-7.19-5.6c-2.01 1.35-4.6 2.15-8.66 2.15-6.44 0-11.87-3.66-14.32-8.8l-7.99 6.21C6.71 42.18 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
            Ingresar con Google
          </a>
        )}

        {step === 'subject' && currentUser && (
          <>
            <div className={retroWelcome}>
              Bienvenido, <span className="font-bold">{currentUser.name}</span>
              <br />
              <span className="text-sm text-[#555]">{currentUser.email}</span>
            </div>
            <label htmlFor="subject" className={retroLabel}>
              Selecciona la materia:
            </label>
            <select
              name="subject"
              id="subject"
              className={retroSelect}
              value={data.subject}
              onChange={handleSubjectSelect}
            >
              <option value="">Elige una materia</option>
              <option value="AyED">Algoritmos y Estructuras de Datos</option>
              <option value="ED">Estructuras de Datos</option>
              <option value="PC">Programación Concurrente</option>
            </select>
            {errors.subject && <div className="text-red-600 mt-2 pixel-font">{errors.subject}</div>}
          </>
        )}

        {step === 'register' && currentUser && (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4 text-center text-lg text-[#222] font-mono">
              Materia seleccionada: <span className="font-bold">
                {data.subject === 'AyED' && 'Algoritmos y Estructuras de Datos'}
                {data.subject === 'ED' && 'Estructuras de Datos'}
                {data.subject === 'PC' && 'Programación Concurrente'}
              </span>
            </div>
            {errors.subject && (
              <div className="text-red-600 mb-2 pixel-font text-center">{errors.subject}</div>
            )}
            {errors.subject ? (
              <button
                type="button"
                onClick={handleBackToSubject}
                className={retroButton}
                style={{ background: '#ffbf00', borderColor: '#222' }}
              >
                Volver
              </button>
            ) : (
              <button type="submit" className={retroButton} disabled={processing}>
                Registrar Asistencia
              </button>
            )}
          </form>
        )}

        {step === 'done' && (
          <div>
            <div className={retroSuccess}>¡Asistencia registrada correctamente!</div>
            <button
              type="button"
              onClick={handleBackToSubject}
              className={retroButton}
              style={{ background: '#ffbf00', borderColor: '#222' }}
            >
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
