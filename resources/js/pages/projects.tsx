import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
    const [language, setLanguage] = useState('en');

    const fallbackLanguage = 'en';
    const content = {
        en: {
            title: 'Projects',
            biography: 'Projects',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            skills: 'Skills',
            experience: 'Experience',
            education: 'Education',
        },
        es: {
            title: 'Proyectos',
            biography: 'Proyectos',
            options: 'Selecciona una opción:',
            about: 'Acerca de mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
            skills: 'Habilidades',
            experience: 'Experiencia',
            education: 'Educación',
        },
    };

    const currentContent = content[language] || content[fallbackLanguage];

    const handleLanguageChange = (lang) => {
        setLanguage(content[lang] ? lang : fallbackLanguage);
    };
    const projects = [
        {
            title: {
                en: 'FEMEBA – CRM and Internal Systems',
                es: 'FEMEBA – CRM y Sistemas Internos',
            },
            role: {
                en: 'Analyst and Developer',
                es: 'Analista y Desarrollador',
            },
            tech: ['Laravel', 'PHP', 'ZendFramework', 'BBDD', 'API REST', 'MySQL', 'HTML5', 'CSS3', 'Javascript', 'JQuery'],
            description: {
                en: 'Development and implementation of customized solutions for FEMEBA.',
                es: 'Desarrollo e implementación de soluciones personalizadas para FEMEBA.',
            },
            url: null,
        },
        {
            title: {
                en: 'Teacher Management System – UNaB',
                es: 'Sistema de Gestión Docente – UNaB',
            },
            role: {
                en: 'Full Stack Developer',
                es: 'Desarrollador Full Stack',
            },
            tech: ['Laravel', 'Vue.js', 'MariaDB', 'HTML5', 'CSS3', 'Javascript', 'JQuery', 'API REST'],
            description: {
                en: 'Institutional system for teacher management and attendance.',
                es: 'Sistema institucional de gestión docente y asistencias.',
            },
            url: 'https://gestion.unab.edu.ar',
        },
        {
            title: {
                en: 'Prospectiva.site',
                es: 'Prospectiva.site',
            },
            role: {
                en: 'Full Stack Developer',
                es: 'Desarrollador Full Stack',
            },
            tech: ['Laravel', 'Data Processing', 'API REST', 'MySQL', 'HTML5', 'CSS3', 'Javascript', 'JQuery', 'Chart.js', 'Bootstrap', 'Vue.js'],
            description: {
                en: 'Platform for analyzing and visualizing large volumes of data.',
                es: 'Plataforma de análisis y visualización de grandes volúmenes de datos.',
            },
            url: 'https://prospectiva.site',
        },

        {
            title: {
                en: 'SOSMA - SIS Integrated System',
                es: 'SOSMA - Sistema de Gestión de Proyectos',
            },
            role: 'Full Stack Developer',
            tech: ['PHP', 'CodeIgniter', 'Laravel', 'Moodle'],
            description: {
                en: 'Development of internal systems, landing page, and virtual campus.',
                es: 'Desarrollo de sistemas internos, landing page y campus virtual.',
            },
            url: 'http://www.sosma.com.ar',
        },
        {
            title: {
                en: 'Ministerio de Turismo y Deportes - Argentina',
                es: 'Ministerio de Turismo y Deportes',
            },
            role: 'Frontend Developer',
            tech: ['Laravel', 'Blade', 'Jetstream', 'leaflet', 'HTML5', 'CSS3', 'Javascript', 'JQuery'],
            description: {
                en: 'System for managing tourism data and statistics and PUNA',
                es: 'Sistema de gestión de datos turísticos y estadísticas; y PUNA',
            },
            url: null,
        },
        {
            title: {
                en: 'Ministerio de Desarrollo Productivo - Argentina',
                es: 'Ministerio de Desarrollo Productivo',
            },
            role: 'Full Stack Developer',
            tech: ['Laravel', 'Leaflet', 'PDF Export'],
            description: {
                en: 'System for managing geolocation and business rules.',
                es: 'Sistema con geolocalización y reglas de negocio.',
            },
            url: null,
        },
        {
            title: {
                en: 'Withmenetwork SL',
                es: 'Withmenetwork SL',
            },
            role: 'Full Stack Developer',
            tech: ['CodeIgniter', 'PHP', 'HTML5'],
            description: {
                en: 'Development of a web platform for managing and selling courses.',
                es: 'Desarrollo de una plataforma web para la gestión y venta de cursos.',
            },
            url: null,
        },
        {
            title: {
                en: 'TOTVS - Fluig',
                es: 'TOTVS - Fluig',
            },
            role: 'Frontend Developer',
            tech: ['Javascript', 'FLUIG'],
            description: {
                en: 'Development of a web platform inside the company for the implementation of digital signature with ENCORE.',
                es: 'Desarrollo de una plataforma web dentro de la empresa para la implemenatción de firma digital junto a ENCORE.',
            },
            url: null,
        },
        {
            title: {
                en: 'AiVONi Agence du Midi - France',
                es: 'AiVONi Agence du Midi - Francia',
            },
            role: 'Frontend Developer',
            tech: ['WordPress', 'HTML5', 'CSS'],
            description: {
                en: 'Development of a web sites for a real estate companies in France.',
                es: 'Desarrollo de sitios inmobiliarios en Francia.',
            },
            url: 'https://agence-du-midi.com',
        },
    ];

    return (
        <>
            <Head title={currentContent.title}>
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
                        <h1 className="mb-4 text-xl font-bold text-white">C:\{currentContent.biography}&gt;</h1>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                    <div className="rounded-lg border border-green-600 bg-black p-4 shadow-md">
                                        <h2 className="text-lg font-semibold text-white">{project.title[language]}</h2>
                                        <p className="text-sm text-green-400">{project.role[language]}</p>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            {project.tech.map((tech, idx) => (
                                                <Badge key={idx} variant="outline" className="text-green-200">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="mt-2 text-sm text-green-300">{project.description[language]}</p>{' '}
                                        {project.url && (
                                            <Button asChild variant="link" className="mt-4 h-auto p-0">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-green-400 hover:text-white"
                                                >
                                                    Visit Project ↗
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
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
        </>
    );
}
