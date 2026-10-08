export const catedras = {
    head: {
        title: 'Courses - Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Teaching - UNaB',
        title: {
            prefix: '~/',
            suffix: 'courses',
        },
        description: 'Index of the courses I teach. All four sites are static material hosted within this website.',
        buttons: {
            ayed: 'Data Structures and Algorithms',
            edd: 'Data Structures',
            ntics: 'Informatics and ICTs',
            progc: 'Concurrent Programming',
        },
    },
    index: {
        title: 'Course index',
        description: 'Open each site in a new tab. Progress for each is saved in your browser.',
        courses: {
            ayed: {
                title: 'Data Structures and Algorithms',
                subtitle: '1st semester - UNaB - Full course',
                desc: 'Interactive path with 12 units in the order they are taught. Each unit has theory, executable code in the browser, a lab with automatic tests, course materials, and a quiz.',
                stats: ['units', 'questions', 'automatic tests', 'visualizers'],
                features: [
                    'Python editor in the browser (Pyodide)',
                    '4 practical assignments with tests and solutions',
                    '40-question integrative exam',
                    'Progress and drafts saved in the browser',
                ],
                actions: {
                    enter: 'Go to site',
                    repo: 'Repository',
                },
            },
            edd: {
                title: 'Data Structures',
                subtitle: 'Interactive material - Theory and practice',
                desc: 'Interactive Data Structures course: theory per unit, step-by-step visualizers, Python labs running in the browser, practical assignments, and exams.',
                stats: ['units', 'visualizers', 'quiz types', 'assignments and exams'],
                features: [
                    'Stacks, queues, lists, trees, heaps, and graphs',
                    'Python labs with Pyodide',
                    'Recursion, sorting, and graphs step by step',
                    'Progress, quizzes, and exams in the browser',
                ],
                actions: {
                    enter: 'Go to site',
                    repo: 'Repository',
                },
            },
            ntics: {
                title: 'Informatics and ICTs',
                subtitle: 'Full course - UNaB - Theory and assignments',
                desc: 'Interactive Informatics and ICTs course: theory per unit with self-assessments, practical assignments (GIS, telemedicine, cybersecurity), and the full course material to download.',
                stats: ['units', 'questions', 'assignments', 'files'],
                features: [
                    '8 units with theory and self-assessments',
                    '5 practical assignments with their briefs',
                    '360 downloadable files organized by unit',
                    'Progress and answers saved in the browser',
                ],
                actions: {
                    enter: 'Go to site',
                    repo: 'Repository',
                },
            },
            progc: {
                title: 'Concurrent Programming',
                subtitle: 'Full course - UNaB - Theory and assignments',
                desc: 'Interactive Concurrent and Parallel Programming course: theory, Python labs running in the browser, practical assignments, an incremental project and the full course material to download.',
                stats: ['units', 'labs', 'assignments', 'files'],
                features: [
                    '4 units with theory and self-assessments',
                    '8 Pyodide labs with automatic tests',
                    'Practical assignments and 4 project milestones',
                    '283 downloadable course files',
                ],
                actions: {
                    enter: 'Go to site',
                    repo: 'Repository',
                },
            },
        },
    },
    tech: {
        title: 'How they are built',
        description: 'All four sites are served within this website, with no build process or external dependencies.',
        cards: [
            {
                title: 'Static site',
                body: 'Pure HTML, CSS, and JavaScript served from /materias/. No framework and no compilation.',
            },
            {
                title: 'Local progress',
                body: 'Each site saves progress and drafts in localStorage: nothing is sent to a server.',
            },
            {
                title: 'Python in the browser',
                body: 'The Algorithms, Data Structures and Concurrent Programming sites run their labs with Pyodide, with automatic fallback to CDN if the local copy is missing.',
            },
        ],
    },
    footer: {
        note: 'Interested in the material or want to collaborate? Get in touch.',
        cta: {
            contact: 'Contact',
            projects: 'See projects',
        },
    },
};

export type CatedrasDict = typeof catedras;
