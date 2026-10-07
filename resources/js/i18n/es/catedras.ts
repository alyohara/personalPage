import type { CatedrasDict as EnCatedrasDict } from '../en/catedras';

export const catedras: EnCatedrasDict = {
    head: {
        title: 'Cátedras - Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Docencia - UNaB',
        title: {
            prefix: '~/',
            suffix: 'cátedras',
        },
        description: 'Índice de las materias que dicto. Los dos sitios son material estático alojado dentro de esta misma web.',
        buttons: {
            ayed: 'Algoritmos y Estructuras de Datos',
            edd: 'Estructuras de Datos',
        },
    },
    index: {
        title: 'Índice de cátedras',
        description: 'Entrá a cada sitio en una pestaña nueva. El progreso de cada uno se guarda en tu navegador.',
        courses: {
            ayed: {
                title: 'Algoritmos y Estructuras de Datos',
                subtitle: '1er cuatrimestre - UNaB - Cátedra completa',
                desc: 'Trayecto interactivo de 12 unidades en el orden en que se cursan. Cada unidad tiene su teoría, código ejecutable en el navegador, un laboratorio con tests automáticos, sus materiales de la cátedra y un quiz.',
                stats: ['unidades', 'preguntas', 'tests automáticos', 'visualizadores'],
                features: [
                    'Editor de Python en el navegador (Pyodide)',
                    '4 trabajos prácticos con tests y solución',
                    'Examen integrador de 40 preguntas',
                    'Progreso y borradores guardados en el navegador',
                ],
                actions: {
                    enter: 'Entrar al sitio',
                    repo: 'Repositorio',
                },
            },
            edd: {
                title: 'Estructuras de Datos',
                subtitle: 'Material interactivo - Teoría y práctica',
                desc: 'Curso interactivo de Estructuras de Datos: teoría por unidad, visualizadores paso a paso, laboratorios de Python que corren en el navegador, trabajos prácticos y exámenes.',
                stats: ['unidades', 'visualizadores', 'tipos de quiz', 'TP y exámenes'],
                features: [
                    'Pilas, colas, listas, árboles, montículos y grafos',
                    'Laboratorios de Python con Pyodide',
                    'Recursión, ordenamientos y grafos paso a paso',
                    'Progreso, quizzes y exámenes en el navegador',
                ],
                actions: {
                    enter: 'Entrar al sitio',
                    repo: 'Repositorio',
                },
            },
        },
    },
    tech: {
        title: 'Cómo están armados',
        description: 'Los dos sitios viajan dentro de esta web, sin build ni dependencias externas.',
        cards: [
            {
                title: 'Sitio estático',
                body: 'HTML, CSS y JavaScript puro servidos desde /materias/. Sin framework y sin proceso de compilación.',
            },
            {
                title: 'Progreso local',
                body: 'Cada sitio guarda el avance y los borradores en localStorage: nada viaja a un servidor.',
            },
            {
                title: 'Python en el navegador',
                body: 'Los laboratorios corren con Pyodide, con respaldo automático desde CDN si falta la copia local.',
            },
        ],
    },
    footer: {
        note: '¿Te interesa el material o querés colaborar? Escribime.',
        cta: {
            contact: 'Contacto',
            projects: 'Ver proyectos',
        },
    },
};

export type CatedrasDict = typeof catedras;
