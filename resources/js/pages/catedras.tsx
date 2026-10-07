import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, GraduationCap } from 'lucide-react';

const catedras = [
    {
        slug: 'ayed',
        code: 'ayed',
        title: 'Algoritmos y Estructuras de Datos',
        subtitle: '1° cuatrimestre · UNaB · Cátedra completa',
        desc: 'Trayecto interactivo de 12 unidades en el orden en que se cursan. Cada unidad tiene su teoría, código ejecutable en el navegador, un laboratorio con tests automáticos, sus materiales de la cátedra y un quiz.',
        stats: [
            { value: '12', label: 'unidades' },
            { value: '180', label: 'preguntas' },
            { value: '48', label: 'tests automáticos' },
            { value: '11', label: 'visualizadores' },
        ],
        features: [
            'Editor de Python en el navegador (Pyodide)',
            '4 trabajos prácticos con tests y solución',
            'Examen integrador de 40 preguntas',
            'Progreso y borradores guardados en el navegador',
        ],
        site: '/materias/algoritmos/',
        repo: 'https://github.com/alyohara/algoritmos-y-estructuras-de-datos',
    },
    {
        slug: 'edd',
        code: 'edd',
        title: 'Estructuras de Datos',
        subtitle: 'Material interactivo · Teoría y práctica',
        desc: 'Curso interactivo de Estructuras de Datos: teoría por unidad, visualizadores paso a paso, laboratorios de Python que corren en el navegador, trabajos prácticos y exámenes.',
        stats: [
            { value: '10', label: 'unidades' },
            { value: '7', label: 'visualizadores' },
            { value: '4', label: 'tipos de quiz' },
            { value: 'TP', label: 'y exámenes' },
        ],
        features: [
            'Pilas, colas, listas, árboles, montículos y grafos',
            'Laboratorios de Python con Pyodide',
            'Recursión, ordenamientos y grafos paso a paso',
            'Progreso, quizzes y exámenes en el navegador',
        ],
        site: '/materias/estructuras/',
        repo: 'https://github.com/alyohara/Estructuras_de_Datos_UNaB',
    },
] as const;

export default function Catedras() {
    return (
        <PublicLayout>
            <Head title="Cátedras — Angel Leonardo Bianco" />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                            <Badge variant="default">Docencia · UNaB</Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-display text-fg mb-6"
                        >
                            <span className="prompt">~/</span>cátedras
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-h3 text-fg-muted mb-8 max-w-2xl"
                        >
                            Índice de las materias que dicto. Los dos sitios son material estático alojado dentro de esta misma web.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button asChild size="lg">
                                <a href="/materias/algoritmos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    Algoritmos y Estructuras de Datos
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="/materias/estructuras/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    Estructuras de Datos
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Índice de cátedras */}
            <Section variant="muted">
                <SectionHeader
                    title="Índice de cátedras"
                    description="Entrá a cada sitio en una pestaña nueva. El progreso de cada uno se guarda en tu navegador."
                />
                <div className="grid gap-8 lg:grid-cols-2">
                    {catedras.map((c, i) => (
                        <motion.div
                            key={c.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="panel panel-hover flex h-full flex-col p-6 pt-7"
                        >
                            <span className="box-title">[ {c.code} ]</span>

                            <div className="mb-4 flex items-start justify-between gap-3">
                                <div className="text-accent flex items-center gap-2">
                                    <GraduationCap className="size-5" aria-hidden="true" />
                                    <span className="text-label font-semibold uppercase">{c.subtitle}</span>
                                </div>
                            </div>

                            <h3 className="text-h2 mb-3">{c.title}</h3>
                            <p className="text-body-sm text-fg-muted mb-6">{c.desc}</p>

                            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {c.stats.map((stat) => (
                                    <div key={stat.label} className="border-border bg-bg-muted rounded-sm border px-3 py-2">
                                        <div className="text-prompt text-lg leading-tight font-bold">{stat.value}</div>
                                        <div className="text-fg-subtle text-[0.6875rem] tracking-wider uppercase">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <ul className="text-body-sm text-fg-muted mb-6 flex-1 space-y-1.5">
                                {c.features.map((f) => (
                                    <li key={f} className="flex gap-2">
                                        <span className="text-prompt select-none">&gt;</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-border flex flex-wrap items-center gap-3 border-t pt-4">
                                <Button asChild size="sm">
                                    <a href={c.site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                        Entrar al sitio
                                        <ExternalLink className="size-3" aria-hidden="true" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={c.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                        <Github className="size-3" aria-hidden="true" />
                                        Repositorio
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Notas técnicas */}
            <Section>
                <SectionHeader
                    title="Cómo están armados"
                    description="Los dos sitios viajan dentro de esta web, sin build ni dependencias externas."
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: 'Sitio estático',
                            body: 'HTML, CSS y JavaScript puro servidos desde /materias/. Sin framework y sin proceso de compilación.',
                        },
                        { title: 'Progreso local', body: 'Cada sitio guarda el avance y los borradores en localStorage: nada viaja a un servidor.' },
                        {
                            title: 'Python en el navegador',
                            body: 'Los laboratorios corren con Pyodide, con respaldo automático desde CDN si falta la copia local.',
                        },
                    ].map((item) => (
                        <div key={item.title} className="panel p-6">
                            <h4 className="text-h3 text-accent mb-2">{item.title}</h4>
                            <p className="text-body-sm text-fg-muted">{item.body}</p>
                        </div>
                    ))}
                </div>

                <div className="border-border mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8">
                    <p className="text-body-sm text-fg-muted">¿Te interesa el material o querés colaborar? Escribime.</p>
                    <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline" size="sm">
                            <Link href="/contact" prefetch className="flex items-center gap-1">
                                Contacto
                                <ArrowRight className="size-3" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/projects" prefetch>
                                Ver proyectos
                            </Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </PublicLayout>
    );
}
