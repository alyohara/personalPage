import type { ProjectsDict as EnProjectsDict } from '../en/projects';

export const projects: EnProjectsDict = {
    head: {
        title: 'Proyectos — Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Trabajos destacados y Código abierto',
        title: 'Proyectos',
        subtitle: 'Una selección de sistemas en producción, trabajos open source y proyectos para clientes en diversos dominios.',
    },
    filter: {
        aria: 'Filtrar proyectos por categoría',
        all: 'Todos',
    },
    badges: {
        featured: 'Destacado',
        more: (count: number) => `+${count} más`,
    },
    actions: {
        viewProject: 'Ver proyecto',
        inquire: 'Consultar',
    },
    cta: {
        text: '¿Interesado en trabajar juntos? Estoy abierto a proyectos freelance, consultoría y oportunidades a tiempo completo.',
        getInTouch: 'Contactar',
    },
    items: [
        {
            title: 'WOZ.exe — Aventura de Estructuras de Datos',
            role: 'Autor / Diseñador de juego',
            tech: ['Python', 'pygame-ce', 'pygbag', 'WebAssembly', 'GitHub Pages'],
            desc: 'Aventura point-and-click al estilo SCUMM que enseña pilas, colas, grafos, heaps y más. Jugable en el navegador vía WebAssembly.',
        },
        {
            title: 'FEMEBA — CRM y Sistemas Internos',
            role: 'Analista y Desarrollador',
            tech: ['Laravel', 'PHP', 'Zend Framework', 'MySQL', 'REST API', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
            desc: 'Desarrollo e implementación de soluciones CRM personalizadas para la organización sanitaria FEMEBA. Mejoró significativamente la eficiencia de los flujos de trabajo.',
        },
        {
            title: 'Sistema de Gestión de Docentes — UNaB',
            role: 'Desarrollador Full Stack',
            tech: ['Laravel', 'Vue.js', 'MariaDB', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'REST API'],
            desc: 'Sistema institucional para la gestión de docentes y el seguimiento de asistencia en la Universidad Nacional Guillermo Brown.',
        },
        {
            title: 'Prospectiva.site',
            role: 'Desarrollador Full Stack',
            tech: [
                'Laravel',
                'Procesamiento de datos',
                'REST API',
                'MySQL',
                'HTML5',
                'CSS3',
                'JavaScript',
                'jQuery',
                'Chart.js',
                'Bootstrap',
                'Vue.js',
            ],
            desc: 'Plataforma para analizar y visualizar grandes volúmenes de datos con tableros interactivos y gráficos.',
        },
        {
            title: 'SOSMA — Sistema Integrado SIS',
            role: 'Desarrollador Full Stack',
            tech: ['PHP', 'CodeIgniter', 'Laravel', 'Moodle'],
            desc: 'Desarrollo de sistemas internos, landing page y campus virtual (Moodle) para el Ministerio de Desarrollo Productivo.',
        },
        {
            title: 'Ministerio de Turismo y Deportes — Argentina',
            role: 'Desarrollador Frontend',
            tech: ['Laravel', 'Blade', 'Jetstream', 'Leaflet', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
            desc: 'Sistema para la gestión de datos turísticos, estadísticas y la plataforma PUNA con funcionalidades de geolocalización.',
        },
        {
            title: 'Ministerio de Desarrollo Productivo — Argentina',
            role: 'Desarrollador Full Stack',
            tech: ['Laravel', 'Leaflet', 'PDF Export'],
            desc: 'Sistema para la gestión de geolocalización y reglas de negocio para programas de desarrollo productivo.',
        },
        {
            title: 'Withmenetworks SL',
            role: 'Desarrollador Full Stack',
            tech: ['CodeIgniter', 'PHP', 'HTML5'],
            desc: 'Desarrollo de una plataforma web para la gestión y venta de cursos online.',
        },
        {
            title: 'TOTVS — Fluig',
            role: 'Desarrollador Frontend',
            tech: ['JavaScript', 'FLUIG'],
            desc: 'Desarrollo de una plataforma web interna para la implementación de firma digital con ENCORE.',
        },
        {
            title: 'AiVONi Agence du Midi — Francia',
            role: 'Desarrollador Frontend',
            tech: ['WordPress', 'HTML5', 'CSS'],
            desc: 'Desarrollo de sitios web inmobiliarios para empresas en Francia.',
        },
        {
            title: 'DevSlides',
            role: 'Mantenedor / Colaborador',
            tech: ['TypeScript', 'Tauri', 'Svelte 5', 'Rust', 'MIT License'],
            desc: 'Aplicación de escritorio offline y open source para crear presentaciones animadas de código: transiciones Magic Move, 16 temas de sintaxis, pasos destacados y reproducción automática.',
        },
        {
            title: 'DevSlidesOnline',
            role: 'Desarrollador Full Stack',
            tech: ['TypeScript', 'SQLite', 'FTS5', 'Shiki', 'WebSockets'],
            desc: 'Versión web multiusuario de DevSlides: carril de diapositivas, pasos destacados por selección, vista previa en vivo, pilas y búsqueda de texto completo, aislado por cuenta en tu propio servidor.',
        },
        {
            title: 'Algoritmos y Estructuras de Datos — UNaB',
            role: 'Autor y Docente',
            tech: ['JavaScript', 'Pyodide', 'Jupyter', 'HTML5', 'CSS3'],
            desc: 'Ruta de estudio interactiva para la asignatura de UNaB: 12 unidades, 60 secciones teóricas, laboratorios de Python en el navegador con 48 tests automatizados, 180 preguntas y 11 visualizadores.',
        },
        {
            title: 'Estructuras de Datos — UNaB',
            role: 'Autor y Docente',
            tech: ['JavaScript', 'Pyodide', 'Visualizadores', 'HTML5', 'CSS3'],
            desc: 'Sitio interactivo de la asignatura: teoría por unidad, visualizadores paso a paso para listas, árboles, heaps y grafos, laboratorios de Python en el navegador, quizzes y exámenes.',
        },
        {
            title: 'Form Input Detector',
            role: 'Creador',
            tech: ['TypeScript', 'Figma Plugin', 'Accesibilidad', 'Diseño UI'],
            desc: 'Plugin de Figma que detecta y clasifica automáticamente tipos de campos de formulario en un diseño, con feedback de accesibilidad y diseño de formularios.',
        },
        {
            title: 'UX Smells Detector',
            role: 'Creador',
            tech: ['TypeScript', 'Figma Plugin', 'UX Research'],
            desc: 'Plugin de Figma que detecta smells de UX y usabilidad, los clasifica por tipo y severidad, y propone recomendaciones con correcciones automáticas opcionales.',
        },
        {
            title: 'Simple Smells Detector',
            role: 'Creador',
            tech: ['JavaScript', 'Figma Plugin', 'Usabilidad'],
            desc: 'Plugin extensible de Figma que detecta automáticamente smells de usabilidad en prototipos UI y devuelve feedback accionable en las primeras etapas de diseño.',
        },
        {
            title: 'Smells Detector — Investigación',
            role: 'Autor',
            tech: ['JavaScript', 'Análisis estático', 'Investigación'],
            desc: 'Trabajo de investigación sobre detección de smells: reglas, catálogo y reporte de smells detectables en diseño y código.',
        },
        {
            title: 'Call Records Management System',
            role: 'Desarrollador Full Stack',
            tech: ['Laravel 11', 'PHP', 'MySQL', 'Roles & Permisos', 'Exportaciones'],
            desc: 'Aplicación web para la gestión de registros de llamadas, teléfonos, personas y datos geográficos, con autenticación, gestión de roles y exportaciones estructuradas.',
        },
        {
            title: 'UNaBSYSv3 — Gestión de Personal Académico',
            role: 'Desarrollador Full Stack',
            tech: ['Laravel 10', 'Blade', 'MariaDB', 'RBAC'],
            desc: 'Plataforma de personal académico para la Universidad Nacional Guillermo Brown: registros docentes, administración de usuarios, estructuras académicas y flujos de asignación de cargos.',
        },
        {
            title: 'FEMEBA — Multisitio Drupal',
            role: 'Desarrollador',
            tech: ['Drupal', 'PHP', 'Multisitio', 'Zeropoint Theme'],
            desc: 'Instalación multisite de Drupal para las entidades primarias de FEMEBA, basada en el tema Zeropoint. Publicado bajo GPLv2.',
        },
    ],
    categories: [
        'Código abierto',
        'Empresa',
        'Educación',
        'Datos y Analítica',
        'Gobierno',
        'EdTech',
        'Inmobiliaria',
        'Herramientas para desarrolladores',
    ],
};

export type ProjectsDict = typeof projects;
