export const contact = {
    head: {
        title: 'Contact — Angel Leonardo Bianco',
    },
    hero: {
        badge: "Let's work together",
        title: 'Get in Touch',
        subtitle: "Have a project in mind? Looking for a tech lead? Want to collaborate? I'd love to hear from you.",
    },
    info: {
        title: "Let's Talk",
        description: "I'm always open to discussing new opportunities, projects, or just chatting about technology.",
        items: {
            email: 'Email',
            academicEmail: 'Academic Email',
            location: 'Location',
        },
        connect: 'Connect',
    },
    form: {
        title: 'Send a Message',
        fields: {
            name: {
                label: 'Name',
                placeholder: 'Your name',
            },
            email: {
                label: 'Email',
                placeholder: 'your@email.com',
            },
            message: {
                label: 'Message',
                placeholder: 'Tell me about your project, idea, or question...',
            },
        },
        status: {
            success: "Message sent successfully! I'll get back to you soon.",
            error: 'Failed to send the message. Please try again or email me directly.',
        },
        sending: 'Sending...',
        submit: 'Send Message',
        preferEmail: 'Prefer email?',
    },
    cta: {
        title: "Let's Build Something Great",
        description:
            "Whether you need a technical co-founder, a senior engineer for your team, or a consultant for architecture decisions — let's start a conversation.",
        startConversation: 'Start a Conversation',
        viewWork: 'View My Work',
    },
};

export type ContactDict = typeof contact;
