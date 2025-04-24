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
            description: [
                "I'm a passionate IT professional with a strong academic background and extensive experience in software development, systems analysis, and university-level teaching.",
                "I'm currently completing a Bachelor's degree in Systems Engineering at the National University of La Plata, while working as a Software Analyst, Full Stack Developer, and Adjunct Professor at the National University Guillermo Brown.",
                'I specialize in building robust web applications, both front-end and back-end, using technologies such as Laravel, JavaScript, MySQL, and RESTful APIs.',
                'In my current role, I combine analytical skills with a collaborative approach to solve complex challenges and design scalable solutions.',
                'One of my key achievements includes leading the development of a custom CRM system that significantly improved workflow efficiency in a healthcare organization.',
                'In addition to my main role, I actively participate in freelance projects involving web development, QA, and cryptocurrency platforms.',
                "I've contributed to projects like sosma.com.ar, and I’m currently working with various consulting firms and organizations to develop tailored solutions using modern technologies.",
                'As an educator, I enjoy sharing my experience and passion for programming with future IT professionals.',
                'I teach Data Structures, encouraging algorithmic thinking and mastery of languages like C++ and Python.',
                'This blend of academic rigor, hands-on experience, and a passion for teaching defines my profile: committed, versatile, and always looking for new challenges in the tech world.',
            ],
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
            description: [
                'Soy un profesional de IT apasionado, con una sólida formación académica y una amplia experiencia en desarrollo de software, análisis de sistemas y docencia universitaria.',
                'Actualmente me encuentro finalizando la carrera de Ingeniería en Sistemas en la Universidad Nacional de La Plata, mientras trabajo como Analista de Software, Desarrollador Full Stack y Profesor Adjunto en la Universidad Nacional Guillermo Brown.',
                'Me especializo en el desarrollo de aplicaciones web robustas, tanto en el frontend como en el backend, utilizando tecnologías como Laravel, JavaScript, MySQL y APIs REST.',
                'En mi rol actual, combino habilidades analíticas con un enfoque colaborativo para resolver problemas complejos y diseñar soluciones escalables.',
                'Entre mis logros se encuentra el liderazgo en el desarrollo de un CRM personalizado que optimizó los flujos de trabajo en una organización de salud.',
                'Además de mi trabajo principal, participo en proyectos freelance de desarrollo web, QA y criptomonedas.',
                'He contribuido a plataformas como sosma.com.ar, entre otras, y actualmente colaboro con consultoras y organizaciones externas, desarrollando soluciones a medida con tecnologías modernas.',
                'Como docente, tengo la oportunidad de compartir mi experiencia y pasión por la programación con nuevas generaciones de profesionales.',
                'Enseño Estructuras de Datos, promoviendo el pensamiento algorítmico y el dominio de lenguajes como C++ y Python.',
                'Esta combinación de rigor académico, experiencia práctica y vocación por la enseñanza define mi perfil: comprometido, versátil y siempre en búsqueda de nuevos desafíos en el mundo de la tecnología.',
            ],
        },
    };

    const currentContent = content[language] || content[fallbackLanguage];

    const handleLanguageChange = (lang) => {
        setLanguage(content[lang] ? lang : fallbackLanguage);
    };
    const projects = [
        {
            title: 'FEMEBA – CRM y Sistemas Internos',
            role: 'Analista y Desarrollador',
            tech: ['Laravel', 'PHP', 'ZendFramework', 'BBDD'],
            description: 'Desarrollo e implementación de soluciones personalizadas para FEMEBA.',
            url: null,
        },
        {
            title: 'Sistema de Gestión Docente – UNaB',
            role: 'Full Stack Developer',
            tech: ['Laravel', 'Vue.js', 'BBDD'],
            description: 'Sistema institucional de gestión docente y asistencias.',
            url: 'https://gestion.unab.edu.ar',
        },
        {
            title: 'Prospectiva.site',
            role: 'Full Stack Developer',
            tech: ['Laravel', 'Procesamiento de Datos'],
            description: 'Plataforma de análisis y visualización de grandes volúmenes de datos.',
            url: 'https://prospectiva.site',
        },
        {
            title: 'SOSMA',
            role: 'Full Stack Developer',
            tech: ['PHP', 'CodeIgniter', 'Laravel', 'Moodle'],
            description: 'Desarrollo de sistemas internos, landing page y campus virtual.',
            url: 'http://www.sosma.com.ar',
        },
        {
            title: 'Ministerio de Turismo y Deportes',
            role: 'Frontend Developer',
            tech: ['Laravel', 'Blade', 'Jetstream'],
            description: 'Sistema de datos estadísticos y PUNA.',
            url: null,
        },
        {
            title: 'Ministerio de Desarrollo Productivo',
            role: 'Full Stack Developer',
            tech: ['Laravel', 'Leaflet', 'PDF Export'],
            description: 'Sistema con geolocalización y reglas de negocio.',
            url: null,
        },
        {
            title: 'Withmenetwork SL',
            role: 'Full Stack Developer',
            tech: ['CodeIgniter', 'PHP', 'HTML5'],
            description: 'Desarrollo de múltiples sitios web comerciales.',
            url: null,
        },
        {
            title: 'TOTVS',
            role: 'Frontend Developer',
            tech: ['Javascript', 'FLUIG'],
            description: 'Implementación de firma digital.',
            url: null,
        },
        {
            title: 'AiVONi',
            role: 'Frontend Developer',
            tech: ['WordPress', 'HTML5', 'CSS'],
            description: 'Desarrollo de sitios inmobiliarios en Francia.',
            url: 'https://agence-du-midi.com',
        },
    ];
    const currentContent = content[language] || content[fallbackLanguage];

    const handleLanguageChange = (lang) => {
        setLanguage(content[lang] ? lang : fallbackLanguage);
    };

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
                                        <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                                        <p className="text-sm text-green-400">{project.role}</p>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            {project.tech.map((tech, idx) => (
                                                <Badge key={idx} variant="outline">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="mt-2 text-sm text-green-300">{project.description}</p>
                                        {project.url && (
                                            <Button asChild variant="link" className="mt-4 h-auto p-0">
                                                <a href={project.url} target="_blank" rel="noopener noreferrer">
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
