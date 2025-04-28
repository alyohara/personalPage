import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Messages',
        href: '/dashboard/messages',
    },
    {
        title: 'View Message',
        href: '#',
    },
];

interface Props {
    message: {
        id: number;
        name: string;
        email: string;
        message: string;
        is_read: boolean;
        created_at: string;
    };
}

export default function MessageView({ message }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="p-6">
                    <h1 className="mb-4 text-2xl font-bold">Detalle del Mensaje</h1>
                    <p>
                        <strong>Nombre:</strong> {message.name}
                    </p>
                    <p>
                        <strong>Correo Electrónico:</strong> {message.email}
                    </p>
                    <p>
                        <strong>Mensaje:</strong> {message.message}
                    </p>
                    <p>
                        <strong>Fecha:</strong> {new Date(message.created_at).toLocaleString()}
                    </p>
                    <div className="mt-4">
                        <a href="/dashboard/messages" className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">
                            Volver al listado
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
