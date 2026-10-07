import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { useI18n } from '@/i18n';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Award, Code, Database, GraduationCap, Layers, NotebookText, Server } from 'lucide-react';

const getIcon = (name: string) => {
    switch (name) {
        case 'Code':
            return Code;
        case 'Database':
            return Database;
        case 'Layers':
            return Layers;
        case 'Server':
            return Server;
        case 'Award':
            return Award;
        case 'GraduationCap':
            return GraduationCap;
        default:
            return Code;
    }
};

export default function About() {
    const { t } = useI18n();
    const skillsCategories = [
        {
            key: 'programmingLanguages',
            icon: Code,
            color: 'text-blue-400',
            items: t.about.skills.categories.programmingLanguages.items,
        },
        {
            key: 'databases',
            icon: Database,
            color: 'text-emerald-400',
            items: t.about.skills.categories.databases.items,
        },
        {
            key: 'webDevelopment',
            icon: Layers,
            color: 'text-cyan-400',
            items: t.about.skills.categories.webDevelopment.items,
        },
        {
            key: 'frameworksCms',
            icon: Server,
            color: 'text-purple-400',
            items: t.about.skills.categories.frameworksCms.items,
        },
        {
            key: 'devopsTools',
            icon: Award,
            color: 'text-orange-400',
            items: t.about.skills.categories.devopsTools.items,
        },
        {
            key: 'cloudServices',
            icon: Database,
            color: 'text-rose-400',
            items: t.about.skills.categories.cloudServices.items,
        },
        {
            key: 'testingQuality',
            icon: Code,
            color: 'text-amber-400',
            items: t.about.skills.categories.testingQuality.items,
        },
        {
            key: 'other',
            icon: Layers,
            color: 'text-slate-400',
            items: t.about.skills.categories.other.items,
        },
    ] as const;

    const experience = t.about.experience.items;
    const education = t.about.education.items.map((item) => ({
        ...item,
        icon: getIcon(item.iconText),
    }));

    return (
        <PublicLayout>
            <Head title={t.about.head.title} />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_7rem]">
                        <div className="max-w-3xl lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <Badge variant="default">{t.about.hero.badge}</Badge>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-display text-fg mb-6"
                            >
                                {t.about.hero.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-h3 text-fg-muted mb-8 max-w-2xl"
                            >
                                {t.about.hero.subtitle}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Button asChild size="lg">
                                    <Link href="/projects" prefetch>
                                        {t.about.hero.cta.viewProjects}
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/contact" prefetch>
                                        {t.about.hero.cta.getInTouch}
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" size="lg">
                                    <Link href="/docs/resume.pdf" download>
                                        {t.about.hero.cta.downloadCv}
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                        <motion.figure
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="panel mx-auto w-full max-w-[5.5rem] p-2 lg:order-2 lg:mx-0 lg:max-w-[7rem]"
                        >
                            <div className="border-border overflow-hidden rounded-sm border">
                                <img src="/imgs/perfil-256.png" alt={t.about.hero.image.alt} width={256} height={256} className="h-auto w-full" />
                            </div>
                            <figcaption className="text-fg-subtle mt-2 text-center font-mono text-[0.625rem] leading-tight">
                                {t.about.hero.image.caption}
                            </figcaption>
                        </motion.figure>
                    </div>
                </div>
            </section>

            {/* Bio */}
            <Section variant="muted">
                <SectionHeader title={t.about.bio.title} description={t.about.bio.description} />
                <div className="prose max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-body text-fg-muted space-y-6"
                    >
                        {t.about.bio.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* Skills */}
            <Section>
                <SectionHeader title={t.about.skills.title} description={t.about.skills.description} />
                <div className="space-y-10">
                    {skillsCategories.map((group, i) => (
                        <motion.div
                            key={group.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className={cn('bg-accent-muted inline-flex h-10 w-10 items-center justify-center rounded-lg', group.color)}>
                                    <group.icon className="text-accent size-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-h3">{t.about.skills.categories[group.key].category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item, idx) => (
                                    <Badge key={item} variant="outline" className={`stagger-${idx + 1}`}>
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Experience */}
            <Section variant="muted">
                <SectionHeader title={t.about.experience.title} description={t.about.experience.description} />
                <div className="space-y-4">
                    {experience.map((item, i) => (
                        <motion.div
                            key={item.role + i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="group"
                        >
                            <Card variant="interactive" className="relative overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-h3 text-fg pr-4">{item.role}</h4>
                                            <p className="text-body text-fg-muted mt-1">{item.org}</p>
                                        </div>
                                        <div className="flex-shrink-0 text-right">
                                            <Badge variant="muted" className="whitespace-nowrap">
                                                {item.period}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Education */}
            <Section>
                <SectionHeader title={t.about.education.title} description={t.about.education.description} />
                <div className="grid gap-6 md:grid-cols-3">
                    {education.map((item, i) => (
                        <motion.div
                            key={item.degree + i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <Card variant="interactive" className="h-full">
                                <CardContent className="p-6">
                                    <div className="bg-accent-muted text-accent mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                                        <item.icon className="size-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-h3 mb-2">{item.degree}</h3>
                                    <p className="text-body-sm text-fg-muted">{item.org}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Resume Download */}
            <Section variant="muted">
                <div className="container-narrow text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-bg-elevated border-border rounded-2xl border p-12 md:p-16"
                    >
                        <NotebookText className="text-accent mx-auto mb-4 size-12" aria-hidden="true" />
                        <h2 className="text-h1 mb-4">{t.about.resume.title}</h2>
                        <p className="text-body text-fg-muted mx-auto mb-8 max-w-xl">{t.about.resume.description}</p>
                        <Button asChild size="xl">
                            <Link href="/docs/resume.pdf" download>
                                {t.about.resume.downloadCv}
                                <svg className="ml-2 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </PublicLayout>
    );
}
