import { Inertia } from '@inertiajs/inertia';

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
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
    const handlePageChange = (url: string | null) => {
        if (url) {
            Inertia.get(url);
        }
    };

    return (
        <div className="p-6">
            <h1 className="mb-4 text-2xl font-bold">Mensajes</h1>
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Nombre</th>
                        <th className="border border-gray-300 px-4 py-2">Correo Electrónico</th>
                        <th className="border border-gray-300 px-4 py-2">Mensaje</th>
                        <th className="border border-gray-300 px-4 py-2">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.data.map((message) => (
                        <tr key={message.id}>
                            <td className="border border-gray-300 px-4 py-2">{message.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{message.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{message.message}</td>
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
                        className={`border px-4 py-2 ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
}
