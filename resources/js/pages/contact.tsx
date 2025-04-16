import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <>
            <Head title="Contacto" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Contacto</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Puedes contactarme a través de mi correo electrónico: <strong>correo@ejemplo.com</strong>
                </p>
            </div>
        </>
    );
}
