import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { useI18n } from '@/i18n';
import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Projects() {
    const { t } = useI18n();
    const projects = [
        {
            title: t.projects.items[0].title,
            role: t.projects.items[0].role,
            tech: t.projects.items[0].tech,
            desc: t.projects.items[0].desc,
            url: 'https://alyohara.github.io/woz-exe/',
            featured: true,
            category: t.projects.categories[0],
        },
        {
            title: t.projects.items[1].title,
            role: t.projects.items[1].role,
            tech: t.projects.items[1].tech,
            desc: t.projects.items[1].desc,
            url: null,
            featured: true,
            category: t.projects.categories[1],
        },
        {
            title: t.projects.items[2].title,
            role: t.projects.items[2].role,
            tech: t.projects.items[2].tech,
            desc: t.projects.items[2].desc,
            url: 'https://gestion.unab.edu.ar',
            featured: true,
            category: t.projects.categories[2],
        },
        {
            title: t.projects.items[3].title,
            role: t.projects.items[3].role,
            tech: t.projects.items[3].tech,
            desc: t.projects.items[3].desc,
            url: 'https://prospectiva.site',
            featured: false,
            category: t.projects.categories[3],
        },
        {
            title: t.projects.items[4].title,
            role: t.projects.items[4].role,
            tech: t.projects.items[4].tech,
            desc: t.projects.items[4].desc,
            url: 'http://www.sosma.com.ar',
            featured: false,
            category: t.projects.categories[4],
        },
        {
            title: t.projects.items[5].title,
            role: t.projects.items[5].role,
            tech: t.projects.items[5].tech,
            desc: t.projects.items[5].desc,
            url: null,
            featured: false,
            category: t.projects.categories[4],
        },
        {
            title: t.projects.items[6].title,
            role: t.projects.items[6].role,
            tech: t.projects.items[6].tech,
            desc: t.projects.items[6].desc,
            url: null,
            featured: false,
            category: t.projects.categories[4],
        },
        {
            title: t.projects.items[7].title,
            role: t.projects.items[7].role,
            tech: t.projects.items[7].tech,
            desc: t.projects.items[7].desc,
            url: null,
            featured: false,
            category: t.projects.categories[5],
        },
        {
            title: t.projects.items[8].title,
            role: t.projects.items[8].role,
            tech: t.projects.items[8].tech,
            desc: t.projects.items[8].desc,
            url: null,
            featured: false,
            category: t.projects.categories[1],
        },
        {
            title: t.projects.items[9].title,
            role: t.projects.items[9].role,
            tech: t.projects.items[9].tech,
            desc: t.projects.items[9].desc,
            url: 'https://agence-du-midi.com',
            featured: false,
            category: t.projects.categories[6],
        },
        {
            title: t.projects.items[10].title,
            role: t.projects.items[10].role,
            tech: t.projects.items[10].tech,
            desc: t.projects.items[10].desc,
            url: 'https://github.com/alyohara/DevSlides',
            featured: true,
            category: t.projects.categories[0],
        },
        {
            title: t.projects.items[11].title,
            role: t.projects.items[11].role,
            tech: t.projects.items[11].tech,
            desc: t.projects.items[11].desc,
            url: 'https://github.com/alyohara/DevSlidesOnline',
            featured: true,
            category: t.projects.categories[0],
        },
        {
            title: t.projects.items[12].title,
            role: t.projects.items[12].role,
            tech: t.projects.items[12].tech,
            desc: t.projects.items[12].desc,
            url: '/materias/algoritmos/',
            featured: true,
            category: t.projects.categories[2],
        },
        {
            title: t.projects.items[13].title,
            role: t.projects.items[13].role,
            tech: t.projects.items[13].tech,
            desc: t.projects.items[13].desc,
            url: '/materias/estructuras/',
            featured: true,
            category: t.projects.categories[2],
        },
        {
            title: t.projects.items[14].title,
            role: t.projects.items[14].role,
            tech: t.projects.items[14].tech,
            desc: t.projects.items[14].desc,
            url: 'https://github.com/alyohara/form-input-detector',
            featured: false,
            category: t.projects.categories[7],
        },
        {
            title: t.projects.items[15].title,
            role: t.projects.items[15].role,
            tech: t.projects.items[15].tech,
            desc: t.projects.items[15].desc,
            url: 'https://github.com/alyohara/figma-plugin-ux-smell',
            featured: false,
            category: t.projects.categories[7],
        },
        {
            title: t.projects.items[16].title,
            role: t.projects.items[16].role,
            tech: t.projects.items[16].tech,
            desc: t.projects.items[16].desc,
            url: 'https://github.com/alyohara/simple-smells-detector',
            featured: false,
            category: t.projects.categories[7],
        },
        {
            title: t.projects.items[17].title,
            role: t.projects.items[17].role,
            tech: t.projects.items[17].tech,
            desc: t.projects.items[17].desc,
            url: 'https://github.com/alyohara/smells-detector',
            featured: false,
            category: t.projects.categories[7],
        },
        {
            title: t.projects.items[18].title,
            role: t.projects.items[18].role,
            tech: t.projects.items[18].tech,
            desc: t.projects.items[18].desc,
            url: 'https://github.com/alyohara/call-records-management-system',
            featured: false,
            category: t.projects.categories[1],
        },
        {
            title: t.projects.items[19].title,
            role: t.projects.items[19].role,
            tech: t.projects.items[19].tech,
            desc: t.projects.items[19].desc,
            url: 'https://github.com/alyohara/UNaBSYSv3',
            featured: false,
            category: t.projects.categories[2],
        },
        {
            title: t.projects.items[20].title,
            role: t.projects.items[20].role,
            tech: t.projects.items[20].tech,
            desc: t.projects.items[20].desc,
            url: 'https://github.com/alyohara/Femeba-Drupal',
            featured: false,
            category: t.projects.categories[1],
        },
        {
            title: t.projects.items[21].title,
            role: t.projects.items[21].role,
            tech: t.projects.items[21].tech,
            desc: t.projects.items[21].desc,
            url: 'https://github.com/alyohara/aulagen',
            featured: true,
            category: t.projects.categories[5],
        },
    ] as const;
    const categories = [t.projects.filter.all, ...Array.from(new Set(projects.map((p) => p.category)))] as const;
    return (
        <PublicLayout>
            <Head title={t.projects.head.title} />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                            <Badge variant="default">{t.projects.hero.badge}</Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-display text-fg mb-6"
                        >
                            {t.projects.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-h3 text-fg-muted"
                        >
                            {t.projects.hero.subtitle}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <Section variant="muted" size="default">
                <div className="flex flex-wrap justify-center gap-2" role="group" aria-label={t.projects.filter.aria}>
                    {categories.map((cat) => (
                        <Button key={cat} variant={cat === t.projects.filter.all ? 'primary' : 'outline'} size="sm" className="transition-colors">
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
                                        {t.projects.badges.featured}
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
                                        {project.tech.slice(0, 6).map((tech: string) => (
                                            <Badge key={tech} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.tech.length > 6 && <Badge variant="muted">{t.projects.badges.more(project.tech.length - 6)}</Badge>}
                                    </div>
                                    <div className="border-border mt-auto flex items-center gap-3 border-t pt-4">
                                        {project.url && (
                                            <Button asChild variant="link" size="sm" className="flex-1 justify-center">
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                    {t.projects.actions.viewProject}
                                                    <ExternalLink className="size-3" aria-hidden="true" />
                                                </a>
                                            </Button>
                                        )}
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href="/contact" prefetch className="flex items-center gap-1">
                                                {t.projects.actions.inquire}
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
                        <p className="text-body text-fg-muted mx-auto mb-6 max-w-xl">{t.projects.cta.text}</p>
                        <Button asChild size="lg">
                            <Link href="/contact" prefetch>
                                {t.projects.cta.getInTouch}
                                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </PublicLayout>
    );
}
