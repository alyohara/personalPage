export const home = {
    head: {
        title: 'Angel Leonardo Bianco — Software Architect & Tech Lead',
    },
    hero: {
        badge: 'Software Architect · Tech Lead · Full Stack Engineer · University Lecturer',
        name: 'Angel Leonardo Bianco',
        tagline: 'Building robust software systems, leading engineering teams, and teaching the next generation of developers.',
        image: {
            alt: 'Angel Leonardo Bianco',
            caption: '~/angel.png',
        },
        cta: {
            viewProjects: 'View Projects',
            getInTouch: 'Get in Touch',
            downloadCv: 'Download CV',
        },
    },
    highlights: ['Years Experience', 'Projects Delivered', 'Production Systems', 'Students Taught'],
    specialties: {
        title: 'Areas of Expertise',
        description: 'Deep technical knowledge across the full stack, with focus on backend architecture, data systems, and scalable infrastructure.',
        items: [
            { label: 'Backend & APIs', desc: 'Laravel, Node.js, REST, GraphQL' },
            { label: 'Data & Storage', desc: 'MySQL, PostgreSQL, Redis, MongoDB' },
            { label: 'Architecture', desc: 'Microservices, DDD, Event-driven' },
            { label: 'Frontend', desc: 'React, Vue, TypeScript, Tailwind' },
            { label: 'Leadership', desc: 'Tech Lead, Code Review, Mentoring' },
            { label: 'Teaching', desc: 'University Lecturer, Workshops' },
        ],
    },
    techStack: {
        title: 'Technology Stack',
        description: 'Tools and technologies I work with daily. Grouped by domain for clarity.',
        categories: ['Backend', 'Frontend', 'Databases', 'Infrastructure', 'Architecture', 'Testing & Quality'],
    },
    projects: {
        title: 'Featured Projects',
        description: 'A selection of production systems and open-source work.',
        allProjects: 'All Projects',
        featured: 'Featured',
        viewProject: 'View Project',
        items: [
            {
                title: 'WOZ.exe',
                desc: 'SCUMM-style adventure teaching data structures (stacks, queues, graphs, heaps). Playable in browser via WebAssembly.',
            },
            {
                title: 'FEMEBA CRM',
                desc: 'Custom CRM and internal systems for healthcare organization. Improved workflow efficiency significantly.',
            },
            {
                title: 'UNaB Teacher Management',
                desc: 'Institutional system for teacher management and attendance tracking at Universidad Nacional Guillermo Brown.',
            },
            {
                title: 'Prospectiva.site',
                desc: 'Platform for analyzing and visualizing large volumes of data with interactive charts and dashboards.',
            },
            {
                title: 'SOSMA Integrated System',
                desc: 'Internal systems, landing page, and virtual campus (Moodle) for Ministry of Productive Development.',
            },
            {
                title: 'DevSlides',
                desc: 'Free, open-source desktop app for animated code presentations: Magic Move transitions, syntax themes, highlight steps and autoplay (Tauri + Svelte 5).',
            },
        ],
    },
    cta: {
        title: 'Ready to work together?',
        description: "I'm always open to discussing new projects, consulting opportunities, or speaking engagements.",
        startConversation: 'Start a Conversation',
        downloadCv: 'Download CV',
    },
};

export type HomeDict = typeof home;
