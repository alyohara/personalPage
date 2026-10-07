import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'WOZ.exe — Data Structures Adventure',
        role: 'Author / Game Designer',
        tech: ['Python', 'pygame-ce', 'pygbag', 'WebAssembly', 'GitHub Pages'],
        desc: 'SCUMM-style point-and-click adventure that teaches stacks, queues, graphs, heaps and more. Playable in the browser via WebAssembly.',
        url: 'https://alyohara.github.io/woz-exe/',
        featured: true,
        category: 'Open Source',
    },
    {
        title: 'FEMEBA — CRM and Internal Systems',
        role: 'Analyst and Developer',
        tech: ['Laravel', 'PHP', 'Zend Framework', 'MySQL', 'REST API', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        desc: 'Development and implementation of customized CRM solutions for FEMEBA healthcare organization. Significantly improved workflow efficiency.',
        url: null,
        featured: true,
        category: 'Enterprise',
    },
    {
        title: 'Teacher Management System — UNaB',
        role: 'Full Stack Developer',
        tech: ['Laravel', 'Vue.js', 'MariaDB', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'REST API'],
        desc: 'Institutional system for teacher management and attendance tracking at Universidad Nacional Guillermo Brown.',
        url: 'https://gestion.unab.edu.ar',
        featured: true,
        category: 'Education',
    },
    {
        title: 'Prospectiva.site',
        role: 'Full Stack Developer',
        tech: ['Laravel', 'Data Processing', 'REST API', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Chart.js', 'Bootstrap', 'Vue.js'],
        desc: 'Platform for analyzing and visualizing large volumes of data with interactive dashboards and charts.',
        url: 'https://prospectiva.site',
        featured: false,
        category: 'Data & Analytics',
    },
    {
        title: 'SOSMA — SIS Integrated System',
        role: 'Full Stack Developer',
        tech: ['PHP', 'CodeIgniter', 'Laravel', 'Moodle'],
        desc: 'Development of internal systems, landing page, and virtual campus (Moodle) for Ministry of Productive Development.',
        url: 'http://www.sosma.com.ar',
        featured: false,
        category: 'Government',
    },
    {
        title: 'Ministry of Tourism and Sports — Argentina',
        role: 'Frontend Developer',
        tech: ['Laravel', 'Blade', 'Jetstream', 'Leaflet', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        desc: 'System for managing tourism data, statistics, and the PUNA platform with geolocation features.',
        url: null,
        featured: false,
        category: 'Government',
    },
    {
        title: 'Ministry of Productive Development — Argentina',
        role: 'Full Stack Developer',
        tech: ['Laravel', 'Leaflet', 'PDF Export'],
        desc: 'System for managing geolocation and business rules for productive development programs.',
        url: null,
        featured: false,
        category: 'Government',
    },
    {
        title: 'Withmenetworks SL',
        role: 'Full Stack Developer',
        tech: ['CodeIgniter', 'PHP', 'HTML5'],
        desc: 'Development of a web platform for managing and selling online courses.',
        url: null,
        featured: false,
        category: 'EdTech',
    },
    {
        title: 'TOTVS — Fluig',
        role: 'Frontend Developer',
        tech: ['JavaScript', 'FLUIG'],
        desc: 'Development of a web platform inside the company for the implementation of digital signature with ENCORE.',
        url: null,
        featured: false,
        category: 'Enterprise',
    },
    {
        title: 'AiVONi Agence du Midi — France',
        role: 'Frontend Developer',
        tech: ['WordPress', 'HTML5', 'CSS'],
        desc: 'Development of real estate websites for companies in France.',
        url: 'https://agence-du-midi.com',
        featured: false,
        category: 'Real Estate',
    },
    {
        title: 'DevSlides',
        role: 'Maintainer / Contributor',
        tech: ['TypeScript', 'Tauri', 'Svelte 5', 'Rust', 'MIT License'],
        desc: 'Free, open-source, offline desktop app for creating animated code presentations: Magic Move transitions, 16 syntax themes, highlight steps and autoplay.',
        url: 'https://github.com/alyohara/DevSlides',
        featured: true,
        category: 'Open Source',
    },
    {
        title: 'DevSlidesOnline',
        role: 'Full Stack Developer',
        tech: ['TypeScript', 'SQLite', 'FTS5', 'Shiki', 'WebSockets'],
        desc: 'Browser-based, multi-user port of DevSlides: slide rail, selection-driven highlight steps, live preview, stacks and full-text search, isolated per account on your own server.',
        url: 'https://github.com/alyohara/DevSlidesOnline',
        featured: true,
        category: 'Open Source',
    },
    {
        title: 'Algoritmos y Estructuras de Datos — UNaB',
        role: 'Author & Lecturer',
        tech: ['JavaScript', 'Pyodide', 'Jupyter', 'HTML5', 'CSS3'],
        desc: 'Interactive study path for the UNaB course: 12 units, 60 theory sections, in-browser Python labs with 48 automated tests, 180 quiz questions and 11 visualizers.',
        url: '/materias/algoritmos/',
        featured: true,
        category: 'Education',
    },
    {
        title: 'Estructuras de Datos — UNaB',
        role: 'Author & Lecturer',
        tech: ['JavaScript', 'Pyodide', 'Visualizers', 'HTML5', 'CSS3'],
        desc: 'Interactive course site: theory per unit, step-by-step visualizers for lists, trees, heaps and graphs, Python labs in the browser, quizzes and exams.',
        url: '/materias/estructuras/',
        featured: true,
        category: 'Education',
    },
    {
        title: 'Form Input Detector',
        role: 'Creator',
        tech: ['TypeScript', 'Figma Plugin', 'Accessibility', 'UI Design'],
        desc: 'Figma plugin that automatically detects and classifies form input types in a design, with accessibility and form-design feedback.',
        url: 'https://github.com/alyohara/form-input-detector',
        featured: false,
        category: 'Developer Tools',
    },
    {
        title: 'UX Smells Detector',
        role: 'Creator',
        tech: ['TypeScript', 'Figma Plugin', 'UX Research'],
        desc: 'Figma plugin that detects UX and usability smells, categorizes them by type and severity, and proposes recommendations with optional auto-fixes.',
        url: 'https://github.com/alyohara/figma-plugin-ux-smell',
        featured: false,
        category: 'Developer Tools',
    },
    {
        title: 'Simple Smells Detector',
        role: 'Creator',
        tech: ['JavaScript', 'Figma Plugin', 'Usability'],
        desc: 'Extensible Figma plugin that automatically detects usability smells in UI prototypes and returns actionable feedback early in the design process.',
        url: 'https://github.com/alyohara/simple-smells-detector',
        featured: false,
        category: 'Developer Tools',
    },
    {
        title: 'Smells Detector — Research',
        role: 'Author',
        tech: ['JavaScript', 'Static Analysis', 'Research'],
        desc: 'Research work on smell detection: rules, catalog and reporting of detectable design and code smells.',
        url: 'https://github.com/alyohara/smells-detector',
        featured: false,
        category: 'Developer Tools',
    },
    {
        title: 'Call Records Management System',
        role: 'Full Stack Developer',
        tech: ['Laravel 11', 'PHP', 'MySQL', 'Roles & Permissions', 'Exports'],
        desc: 'Web application for managing call logs, phone records, people and geographic data, with authentication, role management and structured exports.',
        url: 'https://github.com/alyohara/call-records-management-system',
        featured: false,
        category: 'Enterprise',
    },
    {
        title: 'UNaBSYSv3 — Academic Staff Management',
        role: 'Full Stack Developer',
        tech: ['Laravel 10', 'Blade', 'MariaDB', 'RBAC'],
        desc: 'Academic staff platform for Universidad Nacional Guillermo Brown: teacher records, user administration, academic structures and position assignment workflows.',
        url: 'https://github.com/alyohara/UNaBSYSv3',
        featured: false,
        category: 'Education',
    },
    {
        title: 'FEMEBA — Drupal Multisite',
        role: 'Developer',
        tech: ['Drupal', 'PHP', 'Multisite', 'Zeropoint Theme'],
        desc: 'Drupal multisite installation for FEMEBA primary entities, based on the Zeropoint theme. Released under GPLv2.',
        url: 'https://github.com/alyohara/Femeba-Drupal',
        featured: false,
        category: 'Enterprise',
    },
] as const;

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))] as const;

export default function Projects() {
    return (
        <PublicLayout>
            <Head title="Projects — Angel Leonardo Bianco" />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                            <Badge variant="default">Featured Work & Open Source</Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-display text-fg mb-6"
                        >
                            Projects
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-h3 text-fg-muted"
                        >
                            A selection of production systems, open-source work, and client projects across various domains.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <Section variant="muted" size="default">
                <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
                    {categories.map((cat) => (
                        <Button key={cat} variant={cat === 'All' ? 'primary' : 'outline'} size="sm" className="transition-colors">
                            {cat}
                        </Button>
                    ))}
                </div>
            </Section>

            {/* Projects Grid */}
            <Section>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                        >
                            <Card variant={project.featured ? 'bordered' : 'interactive'} className="relative flex h-full flex-col">
                                {project.featured && (
                                    <div className="bg-accent text-accent-fg absolute -top-3 -right-3 rounded px-2 py-0.5 text-[0.625rem] font-medium">
                                        Featured
                                    </div>
                                )}
                                <CardContent className="flex flex-1 flex-col p-6">
                                    <div className="mb-3 flex items-start justify-between gap-2">
                                        <Badge variant="muted">{project.category}</Badge>
                                    </div>
                                    <h3 className="text-h3 mb-2">{project.title}</h3>
                                    <p className="text-body-sm text-accent mb-4">{project.role}</p>
                                    <p className="text-body-sm text-fg-muted mb-4 flex-1">{project.desc}</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tech.slice(0, 6).map((tech) => (
                                            <Badge key={tech} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.tech.length > 6 && <Badge variant="muted">+{project.tech.length - 6} more</Badge>}
                                    </div>
                                    <div className="border-border mt-auto flex items-center gap-3 border-t pt-4">
                                        {project.url && (
                                            <Button asChild variant="link" size="sm" className="flex-1 justify-center">
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                    View Project
                                                    <ExternalLink className="size-3" aria-hidden="true" />
                                                </a>
                                            </Button>
                                        )}
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href="/contact" prefetch className="flex items-center gap-1">
                                                Inquire
                                                <ArrowRight className="size-3" aria-hidden="true" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="text-body text-fg-muted mx-auto mb-6 max-w-xl">
                            Interested in working together? I'm open to freelance projects, consulting, and full-time opportunities.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact" prefetch>
                                Get in Touch
                                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </PublicLayout>
    );
}
