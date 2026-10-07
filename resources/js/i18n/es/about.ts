import type { AboutDict as EnAboutDict } from '../en/about';

export const about: EnAboutDict = {
    head: {
        title: 'Acerca de — Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Arquitecto de Software · Tech Lead · Ingeniero Full Stack · Docente Universitario',
        title: 'Acerca de mí',
        subtitle:
            'Profesional IT apasionado con sólida formación académica y amplia experiencia en desarrollo de software, análisis de sistemas y docencia universitaria.',
        cta: {
            viewProjects: 'Ver proyectos',
            getInTouch: 'Contacto',
            downloadCv: 'Descargar CV',
        },
        image: {
            alt: 'Angel Leonardo Bianco',
            caption: '~/angel.png',
        },
    },
    bio: {
        title: 'Biografía',
        description: 'Mi trayectoria en tecnología, educación y liderazgo.',
        paragraphs: [
            'Soy un profesional IT apasionado con sólida formación académica y amplia experiencia en desarrollo de software, análisis de sistemas y docencia universitaria.',
            'Actualmente estoy finalizando la Licenciatura en Sistemas de Información en la Universidad Nacional de La Plata, y trabajo como Analista de Software, Desarrollador Full Stack y Profesor Adjunto en la Universidad Nacional Guillermo Brown.',
            'Me especializo en la construcción de aplicaciones web robustas, tanto frontend como backend, utilizando tecnologías como Laravel, JavaScript, MySQL y APIs REST.',
            'En mi rol actual, combino habilidades analíticas con un enfoque colaborativo para resolver desafíos complejos y diseñar soluciones escalables.',
            'Uno de mis logros más importantes fue liderar el desarrollo de un CRM personalizado que mejoró significativamente la eficiencia de los flujos de trabajo en una organización de salud.',
            'Además de mi actividad principal, participo activamente en proyectos freelance de desarrollo web, QA y plataformas de criptomonedas.',
            'He contribuido a proyectos como sosma.com.ar y actualmente colaboro con diversas consultoras y organizaciones en el desarrollo de soluciones a medida con tecnologías modernas.',
            'Como docente, disfruto compartir mi experiencia y pasión por la programación con futuros profesionales IT.',
            'Dicto la materia Estructuras de Datos, fomentando el pensamiento algorítmico y el dominio de lenguajes como C++ y Python.',
            'Esta combinación de rigor académico, experiencia práctica y pasión por la enseñanza define mi perfil: comprometido, versátil y siempre abierto a nuevos desafíos en el mundo tecnológico.',
        ],
    },
    skills: {
        title: 'Habilidades técnicas',
        description: 'Organizadas por dominio para mayor claridad. Creo en usar la herramienta adecuada para cada tarea.',
        categories: {
            programmingLanguages: {
                category: 'Lenguajes de programación',
                items: ['PHP (Laravel, Zend Framework, Drupal)', 'C++', 'Java', 'Python', 'Spoon', 'TypeScript/JavaScript'],
            },
            databases: {
                category: 'Bases de datos',
                items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Microsoft SQL Server', 'Redis'],
            },
            webDevelopment: {
                category: 'Desarrollo web',
                items: ['HTML5', 'CSS3', 'JavaScript (React, Vue, jQuery)', 'PHP', 'RESTful APIs', 'GraphQL', 'AJAX'],
            },
            frameworksCms: {
                category: 'Frameworks y CMS',
                items: ['Laravel', 'CodeIgniter', 'Drupal', 'Moodle', 'WordPress', 'Next.js'],
            },
            devopsTools: {
                category: 'DevOps y herramientas',
                items: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'FLUIG', 'GitLab CI'],
            },
            cloudServices: {
                category: 'Servicios en la nube',
                items: ['AWS (EC2, S3, RDS)', 'Azure', 'Google Cloud Platform'],
            },
            testingQuality: {
                category: 'Testing y calidad',
                items: ['PHPUnit', 'Pest', 'Selenium', 'Playwright', 'Postman', 'Chrome DevTools', 'Static Analysis'],
            },
            other: {
                category: 'Otros',
                items: ['Leaflet (mapas interactivos)', 'Integración de APIs', 'Agile/Scrum', 'Documentación de software'],
            },
        },
    },
    experience: {
        title: 'Experiencia profesional',
        description: 'Resumen cronológico de mi trayectoria en ingeniería de software y docencia.',
        items: [
            { role: 'Desarrollador y Analista de Software (Freelance)', period: '2022 — Presente', org: 'Diversos clientes' },
            {
                role: 'Desarrollador Full Stack',
                period: '2021 — 2022',
                org: 'SOSMA / Ministerio de Desarrollo Productivo / Withmenetworks SL',
            },
            { role: 'Analista Desarrollador', period: '2019 — 2021', org: 'FEMEBA' },
            { role: 'Desarrollador Full Stack Laravel', period: '2018 — 2019', org: 'Universidad Nacional Guillermo Brown' },
            { role: 'Jefe de Equipo y Responsable de Mesa de Ayuda', period: '2015 — 2018', org: 'FEMEBA' },
            { role: 'Analista de Mesa de Ayuda y Tester', period: '2013 — 2015', org: 'FEMEBA' },
            { role: 'Profesor Adjunto y Ayudante de Cátedra (Algoritmos y Estructuras de Datos)', period: '2016 — Presente', org: 'UNaB' },
            { role: 'Profesor (Informática y NTICS)', period: '2014 — Presente', org: 'Instituto Superior FEMEBA' },
            { role: 'Desarrollador Web Freelance y QA Engineer', period: '2010 — 2014', org: 'Varios' },
        ],
    },
    education: {
        title: 'Formación académica y certificaciones',
        description: 'Formación académica y aprendizaje continuo.',
        items: [
            { degree: 'Licenciatura en Sistemas de Información', org: 'UNLP (en curso)', iconText: 'GraduationCap' },
            { degree: 'Analista Programador Universitario', org: 'UNLP', iconText: 'GraduationCap' },
            { degree: 'Certificaciones profesionales en Desarrollo Web y QA', org: 'Varios', iconText: 'Award' },
        ],
    },
    resume: {
        title: 'Descargar mi CV',
        description: 'Descarga el detalle completo de mi experiencia, formación y habilidades técnicas en formato PDF.',
        downloadCv: 'Descargar CV',
        aria: {
            downloadIcon: 'Ícono de descarga',
        },
    },
};

export type AboutDict = typeof about;
