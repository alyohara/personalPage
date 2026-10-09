import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';
import { useI18n } from '@/i18n';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, GraduationCap } from 'lucide-react';

const courses = [
    {
        slug: 'ayed',
        code: 'ayed',
        stats: ['12', '180', '48', '11'],
        site: '/materias/algoritmos/',
        repo: 'https://github.com/alyohara/algoritmos-y-estructuras-de-datos',
    },
    {
        slug: 'edd',
        code: 'edd',
        stats: ['10', '7', '4', 'TP'],
        site: '/materias/estructuras/',
        repo: 'https://github.com/alyohara/Estructuras_de_Datos_UNaB',
    },
    {
        slug: 'ntics',
        code: 'ntics',
        stats: ['8', '80', '5', '360'],
        site: '/materias/Informatica_y_NTICs/',
        repo: 'https://github.com/alyohara/personalPage',
    },
    {
        slug: 'progc',
        code: 'progc',
        stats: ['4', '10', '2', '283'],
        site: '/materias/ProgConcurrente/',
        repo: 'https://github.com/alyohara/personalPage',
    },
] as const;

export default function Catedras() {
    const { t } = useI18n();

    return (
        <PublicLayout>
            <Head title={t.catedras.head.title} />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                            <Badge variant="default">{t.catedras.hero.badge}</Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-display text-fg mb-6"
                        >
                            <span className="prompt">{t.catedras.hero.title.prefix}</span>
                            {t.catedras.hero.title.suffix}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-h3 text-fg-muted mb-8 max-w-2xl"
                        >
                            {t.catedras.hero.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button asChild size="lg">
                                <a href="/materias/algoritmos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    {t.catedras.hero.buttons.ayed}
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="/materias/estructuras/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    {t.catedras.hero.buttons.edd}
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a
                                    href="/materias/Informatica_y_NTICs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    {t.catedras.hero.buttons.ntics}
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="/materias/ProgConcurrente/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    {t.catedras.hero.buttons.progc}
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Índice de cátedras */}
            <Section variant="muted">
                <SectionHeader title={t.catedras.index.title} description={t.catedras.index.description} />
                <div className="grid gap-8 lg:grid-cols-2">
                    {courses.map((c, i) => {
                        const course = t.catedras.index.courses[c.slug];

                        return (
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
                                        <span className="text-label font-semibold uppercase">{course.subtitle}</span>
                                    </div>
                                </div>

                                <h3 className="text-h2 mb-3">{course.title}</h3>
                                <p className="text-body-sm text-fg-muted mb-6">{course.desc}</p>

                                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {c.stats.map((value, idx) => (
                                        <div key={course.stats[idx]} className="border-border bg-bg-muted rounded-sm border px-3 py-2">
                                            <div className="text-prompt text-lg leading-tight font-bold">{value}</div>
                                            <div className="text-fg-subtle text-[0.6875rem] tracking-wider uppercase">{course.stats[idx]}</div>
                                        </div>
                                    ))}
                                </div>

                                <ul className="text-body-sm text-fg-muted mb-6 flex-1 space-y-1.5">
                                    {course.features.map((feature) => (
                                        <li key={feature} className="flex gap-2">
                                            <span className="text-prompt select-none">&gt;</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-border flex flex-wrap items-center gap-3 border-t pt-4">
                                    <Button asChild size="sm">
                                        <a href={c.site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                            {course.actions.enter}
                                            <ExternalLink className="size-3" aria-hidden="true" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="sm">
                                        <a href={c.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                            <Github className="size-3" aria-hidden="true" />
                                            {course.actions.repo}
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Notas técnicas */}
            <Section>
                <SectionHeader title={t.catedras.tech.title} description={t.catedras.tech.description} />
                <div className="grid gap-6 md:grid-cols-3">
                    {t.catedras.tech.cards.map((item) => (
                        <div key={item.title} className="panel p-6">
                            <h4 className="text-h3 text-accent mb-2">{item.title}</h4>
                            <p className="text-body-sm text-fg-muted">{item.body}</p>
                        </div>
                    ))}
                </div>

                <div className="border-border mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8">
                    <p className="text-body-sm text-fg-muted">{t.catedras.footer.note}</p>
                    <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline" size="sm">
                            <Link href="/contact" prefetch className="flex items-center gap-1">
                                {t.catedras.footer.cta.contact}
                                <ArrowRight className="size-3" aria-hidden="true" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/projects" prefetch>
                                {t.catedras.footer.cta.projects}
                            </Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </PublicLayout>
    );
}
