import type { HomeDict } from '../en/home';

export const home: HomeDict = {
    head: {
        title: 'Angel Leonardo Bianco — Arquitecto de Software y Tech Lead',
    },
    hero: {
        badge: 'Arquitecto de Software · Tech Lead · Ingeniero Full Stack · Docente Universitario',
        name: 'Angel Leonardo Bianco',
        tagline: 'Construyendo sistemas de software robustos, liderando equipos de ingeniería y formando a la próxima generación de desarrolladores.',
        image: {
            alt: 'Angel Leonardo Bianco',
            caption: '~/angel.png',
        },
        cta: {
            viewProjects: 'Ver proyectos',
            getInTouch: 'Hablemos',
            downloadCv: 'Descargar CV',
        },
    },
    highlights: ['Años de Experiencia', 'Proyectos Entregados', 'Sistemas en Producción', 'Alumnos Formados'],
    specialties: {
        title: 'Áreas de Especialización',
        description: 'Amplio conocimiento técnico en todo el stack, con foco en arquitectura backend, sistemas de datos e infraestructura escalable.',
        items: [
            { label: 'Backend & APIs', desc: 'Laravel, Node.js, REST, GraphQL' },
            { label: 'Datos y Almacenamiento', desc: 'MySQL, PostgreSQL, Redis, MongoDB' },
            { label: 'Arquitectura', desc: 'Microservicios, DDD, Orientado a eventos' },
            { label: 'Frontend', desc: 'React, Vue, TypeScript, Tailwind' },
            { label: 'Liderazgo', desc: 'Tech Lead, Code Review, Mentoría' },
            { label: 'Docencia', desc: 'Docente Universitario, Talleres' },
        ],
    },
    techStack: {
        title: 'Stack Tecnológico',
        description: 'Herramientas y tecnologías con las que trabajo a diario. Agrupadas por dominio para mayor claridad.',
        categories: ['Backend', 'Frontend', 'Bases de Datos', 'Infraestructura', 'Arquitectura', 'Testing y Calidad'],
    },
    projects: {
        title: 'Proyectos Destacados',
        description: 'Una selección de sistemas en producción y trabajos de código abierto.',
        allProjects: 'Todos los Proyectos',
        featured: 'Destacado',
        viewProject: 'Ver Proyecto',
        items: [
            {
                title: 'WOZ.exe',
                desc: 'Aventura al estilo SCUMM para enseñar estructuras de datos (pilas, colas, grafos, montones). Jugable en el navegador mediante WebAssembly.',
            },
            {
                title: 'FEMEBA CRM',
                desc: 'CRM a medida y sistemas internos para una organización de salud. Mejoró significativamente la eficiencia de los flujos de trabajo.',
            },
            {
                title: 'Gestión de Docentes UNaB',
                desc: 'Sistema institucional para la gestión de docentes y el control de asistencia en la Universidad Nacional Guillermo Brown.',
            },
            {
                title: 'Prospectiva.site',
                desc: 'Plataforma para analizar y visualizar grandes volúmenes de datos con gráficos interactivos y paneles de control.',
            },
            {
                title: 'Sistema Integrado SOSMA',
                desc: 'Sistemas internos, landing page y campus virtual (Moodle) para el Ministerio de Desarrollo Productivo.',
            },
            {
                title: 'DevSlides',
                desc: 'Aplicación de escritorio libre y de código abierto para presentaciones de código animadas: transiciones Magic Move, temas de sintaxis, pasos destacados y reproducción automática (Tauri + Svelte 5).',
            },
        ],
    },
    cta: {
        title: '¿Listos para trabajar juntos?',
        description: 'Siempre estoy dispuesto a hablar sobre nuevos proyectos, oportunidades de consultoría o conferencias.',
        startConversation: 'Conversemos',
        downloadCv: 'Descargar CV',
    },
};
