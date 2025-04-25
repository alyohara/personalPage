import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Mail, MailOpen } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Messages',
        href: '/dashboard/messages',
    },
];

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
    is_read: boolean;
    created_at: string;
}

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    messages: {
        data: Message[];
        current_page: number;
        last_page: number;
        links: PaginationLinks[];
    };
}

export default function Messages({ messages }: Props) {
    const [localMessages, setLocalMessages] = useState(messages.data);

    const toggleReadStatus = async (id: number) => {
        try {
            // Actualizar en el backend
            const response = await fetch(`/messages/${id}/toggle-read`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el estado en el servidor');
            }

            // Actualizar en el estado local solo si la solicitud fue exitosa
            setLocalMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.id === id
                        ? {
                              ...msg,
                              is_read: !msg.is_read,
                          }
                        : msg,
                ),
            );

            console.log(`Estado de lectura actualizado para el mensaje con ID ${id}`);
        } catch (error) {
            console.error('Error al actualizar el estado de lectura:', error);
        }
    };

    const handlePageChange = (url: string | null) => {
        if (url) {
            window.location.href = url; // fallback for no-Inertia navigation
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="p-6">
                    <h1 className="mb-4 text-2xl font-bold">Mensajes</h1>
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                                <th className="border border-gray-300 px-4 py-2">Correo Electrónico</th>
                                <th className="border border-gray-300 px-4 py-2">Mensaje</th>
                                <th className="border border-gray-300 px-4 py-2">Leído</th>
                                <th className="border border-gray-300 px-4 py-2">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {localMessages.map((message) => (
                                <tr key={message.id} className={message.is_read ? 'text-white' : 'text-red-500'}>
                                    <td className="border border-gray-300 px-4 py-2">{message.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{message.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{message.message}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {message.is_read ? (
                                            <MailOpen className="cursor-pointer text-green-500" onClick={() => toggleReadStatus(message.id)} />
                                        ) : (
                                            <Mail className="cursor-pointer text-red-500" onClick={() => toggleReadStatus(message.id)} />
                                        )}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{new Date(message.created_at).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-4 flex justify-center space-x-2">
                        {messages.links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(link.url)}
                                className={`rounded-lg border px-4 py-2 ${
                                    link.active ? 'bg-sidebar-border text-white' : 'text-sidebar-border bg-white'
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
