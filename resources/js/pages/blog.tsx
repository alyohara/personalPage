import { Head } from '@inertiajs/react';

export default function Blog() {
    return (
        <>
            <Head title="Blog" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Blog</h1>
            </div>
        </>
    );
}
