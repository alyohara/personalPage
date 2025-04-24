import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

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

export default function Projects() {
    return (
        <>
            <Head title="Projects">
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

            {/* Header */}
            <div className="flex min-h-screen flex-col bg-black text-green-400">
                <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                    <Link
                        href={route('welcome')}
                        className={`text-green-400 hover:text-white ${route().current('welcome') ? 'font-bold text-white' : ''}`}
                    >
                        [Home]
                    </Link>
                    <Link
                        href={route('about')}
                        className={`text-green-400 hover:text-white ${route().current('about') ? 'font-bold text-white' : ''}`}
                    >
                        [About Me]
                    </Link>
                    <Link
                        href={route('projects')}
                        className={`text-green-400 hover:text-white ${route().current('projects') ? 'font-bold text-white' : ''}`}
                    >
                        [Projects]
                    </Link>
                    <Link
                        href={route('contact')}
                        className={`text-green-400 hover:text-white ${route().current('contact') ? 'font-bold text-white' : ''}`}
                    >
                        [Contact]
                    </Link>
                </nav>

                {/* Main Content */}
                <div className="mx-auto w-full max-w-6xl px-6 py-8">
                    <h1 className="mb-6 text-2xl font-bold text-white">Projects</h1>
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
        </>
    );
}
