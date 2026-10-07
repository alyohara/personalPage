export const about = {
    head: {
        title: 'About — Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Software Architect · Tech Lead · Full Stack Engineer · University Lecturer',
        title: 'About Me',
        subtitle:
            'Passionate IT professional with strong academic background and extensive experience in software development, systems analysis, and university-level teaching.',
        cta: {
            viewProjects: 'View Projects',
            getInTouch: 'Get in Touch',
            downloadCv: 'Download CV',
        },
        image: {
            alt: 'Angel Leonardo Bianco',
            caption: '~/angel.png',
        },
    },
    bio: {
        title: 'Biography',
        description: 'My journey in technology, education, and leadership.',
        paragraphs: [
            "I'm a passionate IT professional with a strong academic background and extensive experience in software development, systems analysis, and university-level teaching.",
            "I'm currently completing a Bachelor's degree in Systems Engineering at the National University of La Plata, while working as a Software Analyst, Full Stack Developer, and Adjunct Professor at the National University Guillermo Brown.",
            'I specialize in building robust web applications, both front-end and back-end, using technologies such as Laravel, JavaScript, MySQL, and RESTful APIs.',
            'In my current role, I combine analytical skills with a collaborative approach to solve complex challenges and design scalable solutions.',
            'One of my key achievements includes leading the development of a custom CRM system that significantly improved workflow efficiency in a healthcare organization.',
            'In addition to my main role, I actively participate in freelance projects involving web development, QA, and cryptocurrency platforms.',
            "I've contributed to projects like sosma.com.ar, and I'm currently working with various consulting firms and organizations to develop tailored solutions using modern technologies.",
            'As an educator, I enjoy sharing my experience and passion for programming with future IT professionals.',
            'I teach Data Structures, encouraging algorithmic thinking and mastery of languages like C++ and Python.',
            'This blend of academic rigor, hands-on experience, and a passion for teaching defines my profile: committed, versatile, and always looking for new challenges in the tech world.',
        ],
    },
    skills: {
        title: 'Technical Skills',
        description: 'Organized by domain for clarity. I believe in using the right tool for the job.',
        categories: {
            programmingLanguages: {
                category: 'Programming Languages',
                items: ['PHP (Laravel, Zend Framework, Drupal)', 'C++', 'Java', 'Python', 'Spoon', 'TypeScript/JavaScript'],
            },
            databases: {
                category: 'Databases',
                items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Microsoft SQL Server', 'Redis'],
            },
            webDevelopment: {
                category: 'Web Development',
                items: ['HTML5', 'CSS3', 'JavaScript (React, Vue, jQuery)', 'PHP', 'RESTful APIs', 'GraphQL', 'AJAX'],
            },
            frameworksCms: {
                category: 'Frameworks & CMS',
                items: ['Laravel', 'CodeIgniter', 'Drupal', 'Moodle', 'WordPress', 'Next.js'],
            },
            devopsTools: {
                category: 'DevOps & Tools',
                items: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'FLUIG', 'GitLab CI'],
            },
            cloudServices: {
                category: 'Cloud Services',
                items: ['AWS (EC2, S3, RDS)', 'Azure', 'Google Cloud Platform'],
            },
            testingQuality: {
                category: 'Testing & Quality',
                items: ['PHPUnit', 'Pest', 'Selenium', 'Playwright', 'Postman', 'Chrome DevTools', 'Static Analysis'],
            },
            other: {
                category: 'Other',
                items: ['Leaflet (interactive maps)', 'API Integration', 'Agile/Scrum', 'Software Documentation'],
            },
        },
    },
    experience: {
        title: 'Professional Experience',
        description: 'Chronological overview of my career in software engineering and education.',
        items: [
            { role: 'Software Developer & Analyst (Freelance)', period: '2022 — Present', org: 'Various clients' },
            { role: 'Full Stack Developer', period: '2021 — 2022', org: 'SOSMA / Ministerio de Desarrollo Productivo / Withmenetworks SL' },
            { role: 'Developer Analyst', period: '2019 — 2021', org: 'FEMEBA' },
            { role: 'FullStack Laravel Developer', period: '2018 — 2019', org: 'Universidad Nacional Guillermo Brown' },
            { role: 'Team Leader & Help Desk Manager', period: '2015 — 2018', org: 'FEMEBA' },
            { role: 'Help Desk Analyst & Tester', period: '2013 — 2015', org: 'FEMEBA' },
            { role: 'Adjunct Professor & Teaching Fellow (Algorithms & Data Structures)', period: '2016 — Present', org: 'UNaB' },
            { role: 'Professor (Informatics & NTICS)', period: '2014 — Present', org: 'Instituto Superior FEMEBA' },
            { role: 'Freelance Web Developer & QA Engineer', period: '2010 — 2014', org: 'Various' },
        ],
    },
    education: {
        title: 'Education & Certifications',
        description: 'Academic background and continuous learning.',
        items: [
            { degree: "Bachelor's in Systems Engineering", org: 'UNLP (in progress)', iconText: 'GraduationCap' },
            { degree: 'Analista Programador Universitario', org: 'UNLP', iconText: 'GraduationCap' },
            { degree: 'Professional Certifications in Web Development & QA', org: 'Various', iconText: 'Award' },
        ],
    },
    resume: {
        title: 'Download My Resume',
        description: 'Get the full details of my experience, education, and technical skills in PDF format.',
        downloadCv: 'Download CV',
        aria: {
            downloadIcon: 'Download icon',
        },
    },
};

export type AboutDict = typeof about;
