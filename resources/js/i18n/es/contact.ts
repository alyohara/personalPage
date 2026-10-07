import type { ContactDict } from '../en/contact';

export const contact: ContactDict = {
    head: {
        title: 'Contacto — Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Trabajemos juntos',
        title: 'Ponte en contacto',
        subtitle: '¿Tienes un proyecto en mente? ¿Buscas un tech lead? ¿Quieres colaborar? Me encantaría saber de ti.',
    },
    info: {
        title: 'Hablemos',
        description: 'Siempre estoy abierto a conversar sobre nuevas oportunidades, proyectos o simplemente a charlar sobre tecnología.',
        items: {
            email: 'Correo electrónico',
            academicEmail: 'Correo académico',
            location: 'Ubicación',
        },
        connect: 'Conectemos',
    },
    form: {
        title: 'Envía un mensaje',
        fields: {
            name: {
                label: 'Nombre',
                placeholder: 'Tu nombre',
            },
            email: {
                label: 'Correo electrónico',
                placeholder: 'tu@correo.com',
            },
            message: {
                label: 'Mensaje',
                placeholder: 'Cuéntame sobre tu proyecto, idea o pregunta...',
            },
        },
        status: {
            success: '¡Mensaje enviado con éxito! Te responderé pronto.',
            error: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo o escríbeme directamente por correo.',
        },
        sending: 'Enviando...',
        submit: 'Enviar mensaje',
        preferEmail: '¿Prefieres el correo?',
    },
    cta: {
        title: 'Construyamos algo increíble',
        description:
            'Ya sea que necesites un cofundador técnico, un ingeniero senior para tu equipo o un consultor para decisiones de arquitectura — empecemos una conversación.',
        startConversation: 'Iniciar una conversación',
        viewWork: 'Ver mi trabajo',
    },
};
