import AppLayout from '@/layouts/app-layout';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
    summary: string;
    slug: string;
    published_at: string;
}

interface Props {
    posts: Post[];
}

export default function Blog({ posts }: Props) {
    const [language, setLanguage] = useState<'en' | 'es'>('en');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

    const content = {
        en: {
            title: 'Contact Me',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            about: 'About',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            statusSuccess: 'Message sent successfully!',
            statusError: 'Failed to send the message.',
        },
        es: {
            title: 'Contáctame',
            name: 'Nombre',
            email: 'Correo Electrónico',
            message: 'Mensaje',
            send: 'Enviar',
            about: 'Sobre mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
            statusSuccess: '¡Mensaje enviado con éxito!',
            statusError: 'No se pudo enviar el mensaje.',
        },
    };

    const handleLanguageChange = (lang: 'en' | 'es') => {
        setLanguage(lang);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/messages', formData);
            setStatus(language === 'es' ? 'Mensaje enviado correctamente.' : 'Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus(language === 'es' ? 'No se pudo enviar el mensaje.' : 'Failed to send the message.');
        }
    };
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus('');
                setStatusType('');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);
    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="mb-6 text-3xl font-bold">Blog</h1>
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div key={post.id} className="border-b pb-4">
                            <h2 className="text-2xl font-semibold">
                                <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </a>
                            </h2>
                            <p className="text-gray-600">{post.summary}</p>
                            <p className="text-sm text-gray-500">Publicado el {new Date(post.published_at).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
