import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Award, Code, Database, GraduationCap, Layers, NotebookText, Server } from 'lucide-react';

const skillsCategories = [
    {
        category: 'Programming Languages',
        icon: Code,
        color: 'text-blue-400',
        items: ['PHP (Laravel, Zend Framework, Drupal)', 'C++', 'Java', 'Python', 'Spoon', 'TypeScript/JavaScript'],
    },
    {
        category: 'Databases',
        icon: Database,
        color: 'text-emerald-400',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Microsoft SQL Server', 'Redis'],
    },
    {
        category: 'Web Development',
        icon: Layers,
        color: 'text-cyan-400',
        items: ['HTML5', 'CSS3', 'JavaScript (React, Vue, jQuery)', 'PHP', 'RESTful APIs', 'GraphQL', 'AJAX'],
    },
    {
        category: 'Frameworks & CMS',
        icon: Server,
        color: 'text-purple-400',
        items: ['Laravel', 'CodeIgniter', 'Drupal', 'Moodle', 'WordPress', 'Next.js'],
    },
    {
        category: 'DevOps & Tools',
        icon: Award,
        color: 'text-orange-400',
        items: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'FLUIG', 'GitLab CI'],
    },
    {
        category: 'Cloud Services',
        icon: Database,
        color: 'text-rose-400',
        items: ['AWS (EC2, S3, RDS)', 'Azure', 'Google Cloud Platform'],
    },
    {
        category: 'Testing & Quality',
        icon: Code,
        color: 'text-amber-400',
        items: ['PHPUnit', 'Pest', 'Selenium', 'Playwright', 'Postman', 'Chrome DevTools', 'Static Analysis'],
    },
    {
        category: 'Other',
        icon: Layers,
        color: 'text-slate-400',
        items: ['Leaflet (interactive maps)', 'API Integration', 'Agile/Scrum', 'Software Documentation'],
    },
] as const;

const experience = [
    { role: 'Software Developer & Analyst (Freelance)', period: '2022 — Present', org: 'Various clients' },
    { role: 'Full Stack Developer', period: '2021 — 2022', org: 'SOSMA / Ministerio de Desarrollo Productivo / Withmenetworks SL' },
    { role: 'Developer Analyst', period: '2019 — 2021', org: 'FEMEBA' },
    { role: 'FullStack Laravel Developer', period: '2018 — 2019', org: 'Universidad Nacional Guillermo Brown' },
    { role: 'Team Leader & Help Desk Manager', period: '2015 — 2018', org: 'FEMEBA' },
    { role: 'Help Desk Analyst & Tester', period: '2013 — 2015', org: 'FEMEBA' },
    { role: 'Adjunct Professor & Teaching Fellow (Algorithms & Data Structures)', period: '2016 — Present', org: 'UNaB' },
    { role: 'Professor (Informatics & NTICS)', period: '2014 — Present', org: 'Instituto Superior FEMEBA' },
    { role: 'Freelance Web Developer & QA Engineer', period: '2010 — 2014', org: 'Various' },
] as const;

const education = [
    { degree: "Bachelor's in Systems Engineering", org: 'UNLP (in progress)', icon: GraduationCap },
    { degree: 'Analista Programador Universitario', org: 'UNLP', icon: GraduationCap },
    { degree: 'Professional Certifications in Web Development & QA', org: 'Various', icon: Award },
] as const;

export default function About() {
    return (
        <PublicLayout>
            <Head title="About — Angel Leonardo Bianco" />

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
                                <Badge variant="default">Software Architect · Tech Lead · Full Stack Engineer · University Lecturer</Badge>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-display text-fg mb-6"
                            >
                                About Me
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-h3 text-fg-muted mb-8 max-w-2xl"
                            >
                                Passionate IT professional with strong academic background and extensive experience in software development, systems
                                analysis, and university-level teaching.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Button asChild size="lg">
                                    <Link href="/projects" prefetch>
                                        View Projects
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/contact" prefetch>
                                        Get in Touch
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" size="lg">
                                    <Link href="/docs/resume.pdf" download>
                                        Download CV
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
                                <img src="/imgs/perfil-256.png" alt="Angel Leonardo Bianco" width={256} height={256} className="h-auto w-full" />
                            </div>
                            <figcaption className="text-fg-subtle mt-2 text-center font-mono text-[0.625rem] leading-tight">~/angel.png</figcaption>
                        </motion.figure>
                    </div>
                </div>
            </section>

            {/* Bio */}
            <Section variant="muted">
                <SectionHeader title="Biography" description="My journey in technology, education, and leadership." />
                <div className="prose max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-body text-fg-muted space-y-6"
                    >
                        <p>
                            I'm a passionate IT professional with a strong academic background and extensive experience in software development,
                            systems analysis, and university-level teaching.
                        </p>
                        <p>
                            I'm currently completing a Bachelor's degree in Systems Engineering at the National University of La Plata, while working
                            as a Software Analyst, Full Stack Developer, and Adjunct Professor at the National University Guillermo Brown.
                        </p>
                        <p>
                            I specialize in building robust web applications, both front-end and back-end, using technologies such as Laravel,
                            JavaScript, MySQL, and RESTful APIs.
                        </p>
                        <p>
                            In my current role, I combine analytical skills with a collaborative approach to solve complex challenges and design
                            scalable solutions.
                        </p>
                        <p>
                            One of my key achievements includes leading the development of a custom CRM system that significantly improved workflow
                            efficiency in a healthcare organization.
                        </p>
                        <p>
                            In addition to my main role, I actively participate in freelance projects involving web development, QA, and
                            cryptocurrency platforms.
                        </p>
                        <p>
                            I've contributed to projects like sosma.com.ar, and I'm currently working with various consulting firms and organizations
                            to develop tailored solutions using modern technologies.
                        </p>
                        <p>As an educator, I enjoy sharing my experience and passion for programming with future IT professionals.</p>
                        <p>I teach Data Structures, encouraging algorithmic thinking and mastery of languages like C++ and Python.</p>
                        <p>
                            This blend of academic rigor, hands-on experience, and a passion for teaching defines my profile: committed, versatile,
                            and always looking for new challenges in the tech world.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Skills */}
            <Section>
                <SectionHeader
                    title="Technical Skills"
                    description="Organized by domain for clarity. I believe in using the right tool for the job."
                />
                <div className="space-y-10">
                    {skillsCategories.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className={cn('bg-accent-muted inline-flex h-10 w-10 items-center justify-center rounded-lg', group.color)}>
                                    <group.icon className="text-accent size-5" aria-hidden="true" />
                                </div>
                                <h3 className="text-h3">{group.category}</h3>
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
                <SectionHeader
                    title="Professional Experience"
                    description="Chronological overview of my career in software engineering and education."
                />
                <div className="space-y-4">
                    {experience.map((item, i) => (
                        <motion.div
                            key={item.role}
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
                <SectionHeader title="Education & Certifications" description="Academic background and continuous learning." />
                <div className="grid gap-6 md:grid-cols-3">
                    {education.map((item, i) => (
                        <motion.div
                            key={item.degree}
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
                        <h2 className="text-h1 mb-4">Download My Resume</h2>
                        <p className="text-body text-fg-muted mx-auto mb-8 max-w-xl">
                            Get the full details of my experience, education, and technical skills in PDF format.
                        </p>
                        <Button asChild size="xl">
                            <Link href="/docs/resume.pdf" download>
                                Download CV
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
