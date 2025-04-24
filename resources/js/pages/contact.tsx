import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
    const [language, setLanguage] = useState('en');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const content = {
        en: {
            title: 'Contact Me',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
        },
        es: {
            title: 'Contáctame',
            name: 'Nombre',
            email: 'Correo Electrónico',
            message: 'Mensaje',
            send: 'Enviar',
        },
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/messages', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Failed to send the message.');
        }
    };

    return (
        <>
            <Head title={content[language].title} />
            <div className="min-h-screen bg-black text-green-400">
                <div className="mx-auto max-w-4xl p-6">
                    <h1 className="text-2xl font-bold text-white">{content[language].title}</h1>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                            <label className="block text-sm">{content[language].name}</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full rounded border border-green-600 bg-black p-2 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm">{content[language].email}</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full rounded border border-green-600 bg-black p-2 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm">{content[language].message}</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full rounded border border-green-600 bg-black p-2 text-white"
                                required
                            />
                        </div>
                        <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500">
                            {content[language].send}
                        </button>
                    </form>
                    {status && <p className="mt-4 text-sm">{status}</p>}
                </div>
            </div>
        </>
    );
}
