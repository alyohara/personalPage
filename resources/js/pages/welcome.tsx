import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    const [language, setLanguage] = useState('en'); // Estado para el idioma actual

    // Contenido en inglés y español
    const content = {
        en: {
            title: "Bianco's Personal Page",
            greeting: 'Welcome to my portfolio. Here you will find information about my projects, experience, and contact details.',
            options: 'Select an option:',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            biography: 'Biography',
            description: [
                "A passionate IT professional with a strong academic background, currently pursuing a Bachelor's degree in Systems Engineering (anticipated completion soon) while working as a Software Analyst and Full Stack Developer.",
                'At my current role, I tackle complex challenges and guide best practices aligned with quality metrics. I also help build and implement custom solutions.',
                'Since joining the team, we built a robust sector and a custom CRM system for streamlined workflows.',
                "I'm constantly learning — from website development to QA and crypto projects.",
                'I develop Laravel applications for various organizations and consulting firms.',
                'I also teach Data Structures at UNAB and NTICS at Instituto Superior FEMEBA.',
                'Academic rigor + dev experience + teaching = well-rounded IT profile.',
            ],
        },
        es: {
            title: 'Página Personal de Bianco',
            greeting: 'Bienvenido a mi portafolio. Aquí encontrarás información sobre mis proyectos, experiencia y detalles de contacto.',
            options: 'Selecciona una opción:',
            about: 'Acerca de mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
            biography: 'Biografía',
            description: [
                'Un profesional de IT apasionado con una sólida formación académica, actualmente cursando Licenciatura en  Sistemas (próxima finalización) mientras trabajo como Analista de Software y Desarrollador Full Stack.',
                'En mi rol actual, enfrento desafíos complejos y guío las mejores prácticas alineadas con métricas de calidad. También ayudo a construir e implementar soluciones personalizadas.',
                'Desde que me uní al equipo, construimos un sector sólido y un sistema CRM personalizado para flujos de trabajo optimizados.',
                'Estoy en constante aprendizaje: desde desarrollo web hasta QA y proyectos de criptomonedas.',
                'Desarrollo aplicaciones en Laravel para diversas organizaciones y consultoras.',
                'También enseño Algoritmos y Estructuras de Datos en la UNAB y NTICS en el Instituto Superior FEMEBA.',
                'Rigor académico + experiencia en desarrollo + enseñanza = perfil de IT integral.',
            ],
        },
    };

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
                {/* Terminal Window */}
                <div className="w-full max-w-4xl border border-green-600 bg-black">
                    {/* Top Bar */}
                    <div className="flex w-full items-center justify-between border-b border-green-600 bg-black px-4 py-2 text-sm font-bold text-green-400">
                        <span>Bianco(R) Angel Leonardo</span>
                        <div className="flex gap-1">
                            <button className="text-green-400 hover:text-white" onClick={() => setLanguage('en')}>
                                [En]
                            </button>
                            <button className="text-green-400 hover:text-white" onClick={() => setLanguage('es')}>
                                [Sp]
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                        <Link href={route('about')} className="text-green-400 hover:text-white">
                            [{content[language].about}]
                        </Link>
                        <Link href={route('projects')} className="text-green-400 hover:text-white">
                            [{content[language].projects}]
                        </Link>
                        <Link href={route('blog')} className="text-green-400 hover:text-white">
                            [{content[language].blog}]
                        </Link>
                        <Link href={route('contact')} className="text-green-400 hover:text-white">
                            [{content[language].contact}]
                        </Link>
                    </nav>

                    {/* Main Content */}
                    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 font-mono text-sm leading-relaxed text-green-400">
                        <h1 className="mb-4 text-xl font-bold text-white">C:\\{content[language].biography}&gt;</h1>

                        <img src="/imgs/perfil2.png" alt="Perfil" className="mt-6 mb-4 h-32 w-32 rounded-full border-4 border-green-400 shadow-lg" />
                        {content[language].description.map((paragraph, index) => (
                            <p key={index} className="mt-4 text-left" style={{ textAlign: 'left' }}>
                                {paragraph}
                                {index === content[language].description.length - 1 && <span className="blinking-cursor"></span>}
                            </p>
                        ))}
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

            {/* Blinking Cursor Style */}
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
