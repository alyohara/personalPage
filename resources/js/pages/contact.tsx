import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';

export default function Contact() {
    const [language, setLanguage] = useState<'en' | 'es'>('en');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

    const content = {
        en: {
            title: 'Contact Me',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            about: 'About',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            statusSuccess: 'Message sent successfully!',
            statusError: 'Failed to send the message.',
        },
        es: {
            title: 'Contáctame',
            name: 'Nombre',
            email: 'Correo Electrónico',
            message: 'Mensaje',
            send: 'Enviar',
            about: 'Sobre mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
            statusSuccess: '¡Mensaje enviado con éxito!',
            statusError: 'No se pudo enviar el mensaje.',
        },
    };

    const handleLanguageChange = (lang: 'en' | 'es') => {
        setLanguage(lang);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/messages', formData);
            setStatus(language === 'es' ? 'Mensaje enviado correctamente.' : 'Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus(language === 'es' ? 'No se pudo enviar el mensaje.' : 'Failed to send the message.');
        }
    };
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus('');
                setStatusType('');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <>
            <Head title={content[language].title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="/imgs/perfil2.png" />
                <style>
                    {`
                        body {
                            font-family: 'Courier New', Courier, monospace;
                        }
                    `}
                </style>
            </Head>
            <div className="flex min-h-screen items-center justify-center bg-black">
                <div className="w-full max-w-4xl rounded-2xl border border-green-600 bg-black shadow-lg">
                    <div className="flex w-full items-center justify-between border-b border-green-600 bg-black px-4 py-2 text-sm font-bold text-green-400">
                        <span>Bianco(R) Angel Leonardo</span>
                        <div className="flex gap-1">
                            <button className="text-green-400 hover:text-white" onClick={() => handleLanguageChange('en')}>
                                [En]
                            </button>
                            <button className="text-green-400 hover:text-white" onClick={() => handleLanguageChange('es')}>
                                [Sp]
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                        <Link
                            href={route('home')}
                            className={`text-green-400 hover:text-white ${route().current('home') ? 'font-bold text-white' : ''}`}
                        >
                            [Home]
                        </Link>
                        <Link
                            href={route('about')}
                            className={`text-green-400 hover:text-white ${route().current('about') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].about}]
                        </Link>
                        <Link
                            href={route('projects')}
                            className={`text-green-400 hover:text-white ${route().current('projects') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].projects}]
                        </Link>
                        <Link
                            href={route('blog')}
                            className={`text-green-400 hover:text-white ${route().current('blog') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].blog}]
                        </Link>
                        <Link
                            href={route('contact')}
                            className={`text-green-400 hover:text-white ${route().current('contact') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].contact}]
                        </Link>
                    </nav>

                    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 font-mono text-sm leading-relaxed text-green-400">
                        <div className="mx-auto w-full max-w-4xl p-6">
                            <h1 className="text-2xl font-bold text-white">{content[language].title}</h1>
                            <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
                                <div>
                                    <label className="block text-sm">{content[language].name}</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full rounded border border-green-600 bg-black p-2 text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm">{content[language].email}</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full rounded border border-green-600 bg-black p-2 text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm">{content[language].message}</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full rounded border border-green-600 bg-black p-2 text-white"
                                        required
                                    />
                                </div>
                                <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500">
                                    {content[language].send}
                                </button>
                            </form>
                            {status && (
                                <p className={`mt-4 text-sm ${statusType === 'success' ? 'text-green-400' : 'text-green-400'}`}>{status}</p>
                            )}{' '}
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-green-600 bg-black px-6 py-4 text-center font-mono text-sm text-green-400">
                        <p className="font-bold text-white">Angel Leonardo Bianco</p>
                        <p className="mt-2">
                            Emails:
                            <a href="mailto:angel.leonardo.bianco@gmail.com" className="ml-1 text-green-300 underline hover:text-white">
                                angel.leonardo.bianco@gmail.com
                            </a>
                            ,{' '}
                            <a href="mailto:angelleonardobianco@outlook.com" className="text-green-300 underline hover:text-white">
                                angelleonardobianco@outlook.com
                            </a>
                            ,{' '}
                            <a href="mailto:angel.bianco@unab.edu.ar" className="text-green-300 underline hover:text-white">
                                angel.bianco@unab.edu.ar
                            </a>
                        </p>
                        <p className="mt-2">
                            LinkedIn:
                            <a
                                href="https://www.linkedin.com/in/angel-leonardo-bianco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-green-300 underline hover:text-white"
                            >
                                https://www.linkedin.com/in/angel-leonardo-bianco/
                            </a>
                        </p>
                        <p className="mt-2">
                            GitHub:
                            <a
                                href="https://github.com/alyohara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-green-300 underline hover:text-white"
                            >
                                https://github.com/alyohara
                            </a>
                        </p>
                        <p className="mt-4 text-xs text-green-600">&copy; {new Date().getFullYear()} Angel Leonardo Bianco</p>
                    </footer>
                </div>
            </div>
            <style>
                {`
                    .blinking-cursor {
                        display: inline-block;
                        width: 10px;
                        height: 1rem;
                        background-color: white;
                        margin-left: 5px;
                        animation: blink 1s steps(1) infinite;
                    }

                    @keyframes blink {
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </>
    );
}
