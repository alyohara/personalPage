import type { BlogDict } from '../en/blog';

export const blog: BlogDict = {
    head: {
        title: 'Blog — Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Artículos y tutoriales técnicos',
        title: 'Blog',
        subtitle: 'Reflexiones sobre arquitectura de software, ingeniería backend, bases de datos y docencia.',
    },
    search: {
        placeholder: 'Buscar artículos...',
        ariaLabel: 'Buscar artículos',
    },
    sort: {
        newest: 'Más recientes',
        oldest: 'Más antiguos',
    },
    list: {
        readMore: 'Leer más',
        empty: {
            title: 'No se encontraron artículos',
            description: 'Intenta ajustar los criterios de búsqueda o de filtrado.',
        },
    },
    show: {
        nav: {
            home: 'Inicio',
            about: 'Acerca de mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
        },
        backToBlog: '← Volver al Blog',
        byAuthor: (author: string) => `Por ${author}`,
        emails: 'Correos:',
        linkedin: 'LinkedIn:',
        github: 'GitHub:',
    },
};
