import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { useI18n } from '@/i18n';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code, Database, GraduationCap, Layers, Server } from 'lucide-react';

const specialtyIcons = [Server, Database, Layers, Code, Briefcase, GraduationCap] as const;

const highlightValues = ['15+', '50+', '10+', '500+'] as const;

export default function Welcome() {
    const { t } = useI18n();

    return (
        <PublicLayout>
            <Head title={t.home.head.title} />

            {/* Hero */}
            <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-30" aria-hidden="true">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:48px_48px]" />
                </div>

                {/* Accent glow */}
                <div className="bg-accent/10 pointer-events-none absolute top-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl" aria-hidden="true" />

                <div className="container-main relative z-10 py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_7rem] xl:grid-cols-[minmax(0,1fr)_7rem]">
                        {/* Portrait */}
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                            className="panel mx-auto w-full max-w-[5.5rem] p-2 lg:order-2 lg:mx-0 lg:max-w-[7rem]"
                        >
                            <div className="border-border overflow-hidden rounded-sm border">
                                <img src="/imgs/perfil-256.png" alt={t.home.hero.image.alt} width={256} height={256} className="h-auto w-full" />
                            </div>
                            <figcaption className="text-fg-subtle mt-2 text-center font-mono text-[0.625rem] leading-tight">
                                {t.home.hero.image.caption}
                            </figcaption>
                        </motion.figure>

                        <div className="max-w-4xl lg:order-1">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="bg-accent-muted border-accent-border text-accent mb-8 inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-sm font-medium"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="bg-accent absolute inset-0 h-full w-full animate-ping rounded-full opacity-75" />
                                    <span className="bg-accent relative h-full w-full rounded-full" />
                                </span>
                                {t.home.hero.badge}
                            </motion.div>

                            {/* Name + Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                                className="text-display text-fg mb-6"
                            >
                                {t.home.hero.name}
                            </motion.h1>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                                className="text-h3 text-fg-muted mb-8 max-w-2xl"
                            >
                                {t.home.hero.tagline}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                                className="mb-16 flex flex-wrap items-center gap-4"
                            >
                                <Button asChild size="lg" className="group">
                                    <Link href="/projects" prefetch>
                                        {t.home.hero.cta.viewProjects}
                                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/contact" prefetch>
                                        {t.home.hero.cta.getInTouch}
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" size="lg">
                                    <Link href="/docs/resume.pdf" download>
                                        {t.home.hero.cta.downloadCv}
                                    </Link>
                                </Button>
                            </motion.div>

                            {/* Highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                                className="flex flex-wrap gap-8 md:gap-12"
                            >
                                {highlightValues.map((value, idx) => (
                                    <div key={value} className={`stagger-${idx + 1}`}>
                                        <div className="text-display font-display text-accent font-bold">{value}</div>
                                        <div className="text-body-sm text-fg-muted">{t.home.highlights[idx]}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-fg-subtle absolute bottom-8 left-1/2 -translate-x-1/2"
                    aria-hidden="true"
                >
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>
            </section>

            {/* Specialties */}
            <Section size="lg" variant="muted">
                <SectionHeader title={t.home.specialties.title} description={t.home.specialties.description} />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {specialtyIcons.map((Icon, i) => (
                        <motion.div
                            key={t.home.specialties.items[i].label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <Card variant="interactive" className="h-full">
                                <CardContent className="p-6">
                                    <div className="bg-accent-muted text-accent mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                                        <Icon className="size-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-h3 mb-2">{t.home.specialties.items[i].label}</h3>
                                    <p className="text-body-sm text-fg-muted">{t.home.specialties.items[i].desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Tech Stack */}
            <Section size="lg">
                <SectionHeader title={t.home.techStack.title} description={t.home.techStack.description} />
                <div className="space-y-12">
                    {[
                        {
                            icon: Server,
                            color: 'text-blue-400',
                            tech: ['Laravel', 'PHP', 'Node.js', 'Go', 'REST APIs', 'GraphQL', 'gRPC'],
                        },
                        {
                            icon: Code,
                            color: 'text-cyan-400',
                            tech: ['React', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Next.js', 'Vite'],
                        },
                        {
                            icon: Database,
                            color: 'text-emerald-400',
                            tech: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'SQLite'],
                        },
                        {
                            icon: Layers,
                            color: 'text-orange-400',
                            tech: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitLab CI', 'Terraform'],
                        },
                        {
                            icon: Layers,
                            color: 'text-purple-400',
                            tech: ['Microservices', 'DDD', 'Event Sourcing', 'CQRS', 'Message Queues'],
                        },
                        {
                            icon: Code,
                            color: 'text-rose-400',
                            tech: ['PHPUnit', 'Pest', 'Vitest', 'Playwright', 'Static Analysis', 'Code Review'],
                        },
                    ].map((group, i) => (
                        <motion.div
                            key={t.home.techStack.categories[i]}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className={cn('bg-accent-muted inline-flex h-10 w-10 items-center justify-center rounded-lg', group.color)}>
                                    <group.icon className="text-accent size-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-h3">{t.home.techStack.categories[i]}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.tech.map((tech, idx) => (
                                    <Badge key={tech} variant="outline" className={`stagger-${idx + 1}`}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Featured Projects */}
            <Section size="lg" variant="muted">
                <SectionHeader
                    title={t.home.projects.title}
                    description={t.home.projects.description}
                    action={
                        <Button asChild variant="outline">
                            <Link href="/projects" prefetch>
                                {t.home.projects.allProjects} <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                            </Link>
                        </Button>
                    }
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            tech: ['Python', 'pygame-ce', 'pygbag', 'WebAssembly'],
                            url: 'https://alyohara.github.io/woz-exe/',
                            featured: true,
                        },
                        {
                            tech: ['Laravel', 'PHP', 'Zend Framework', 'MySQL', 'REST API'],
                            featured: true,
                        },
                        {
                            tech: ['Laravel', 'Vue.js', 'MariaDB', 'REST API'],
                            url: 'https://gestion.unab.edu.ar',
                        },
                        {
                            tech: ['Laravel', 'Vue.js', 'Chart.js', 'Data Processing', 'REST API'],
                            url: 'https://prospectiva.site',
                        },
                        {
                            tech: ['Laravel', 'CodeIgniter', 'Moodle', 'Leaflet'],
                            url: 'http://www.sosma.com.ar',
                        },
                        {
                            tech: ['TypeScript', 'Tauri', 'Svelte 5', 'Rust'],
                            url: 'https://github.com/alyohara/DevSlides',
                            featured: true,
                        },
                    ].map((project, i) => (
                        <motion.div
                            key={t.home.projects.items[i].title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <Card variant={project.featured ? 'bordered' : 'interactive'} className="flex h-full flex-col">
                                {project.featured && (
                                    <div className="bg-accent text-accent-fg absolute -top-3 -right-3 rounded px-2 py-0.5 text-[0.625rem] font-medium">
                                        {t.home.projects.featured}
                                    </div>
                                )}
                                <CardContent className="flex flex-1 flex-col p-6">
                                    <h3 className="text-h3 mb-2">{t.home.projects.items[i].title}</h3>
                                    <p className="text-body-sm text-fg-muted mb-4 flex-1">{t.home.projects.items[i].desc}</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="muted">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    {project.url && (
                                        <Button asChild variant="link" className="mt-auto">
                                            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                {t.home.projects.viewProject}
                                                <ArrowRight className="size-3" aria-hidden="true" />
                                            </Link>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section size="lg">
                <div className="container-narrow text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-bg-elevated border-border rounded-2xl border p-12 md:p-16"
                    >
                        <h2 className="text-h1 mb-4">{t.home.cta.title}</h2>
                        <p className="text-body text-fg-muted mx-auto mb-8 max-w-xl">{t.home.cta.description}</p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild size="xl">
                                <Link href="/contact" prefetch>
                                    {t.home.cta.startConversation}
                                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="xl">
                                <Link href="/docs/resume.pdf" download>
                                    {t.home.cta.downloadCv}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </PublicLayout>
    );
}
