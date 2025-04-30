// resources/js/pages/dashboard/posts.tsx
import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

interface Post {
    id: number;
    title: string;
    is_published: boolean;
    created_at: string;
}

interface Props {
    posts: Post[];
}

export default function Posts({ posts }: Props) {
    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Listado de Posts</h1>
                <Link href="/dashboard/posts/create" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                    Crear Nuevo Post
                </Link>
                <table className="mt-4 w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Título</th>
                            <th className="border border-gray-300 px-4 py-2">Estado</th>
                            <th className="border border-gray-300 px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{post.is_published ? 'Publicado' : 'Borrador'}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link
                                        href={`/dashboard/posts/${post.id}/edit`}
                                        className="mr-2 rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-700"
                                    >
                                        Editar
                                    </Link>
                                    {post.is_published ? (
                                        <form method="POST" action={`/posts/${post.id}/unpublish`} className="inline">
                                            <meta name="csrf-token" content="{{ csrf_token() }}" />
                                            <button type="submit" className="mr-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">
                                                Despublicar
                                            </button>
                                        </form>
                                    ) : (
                                        <form method="POST" action={'/posts/' + post.id + '/publish'} className="inline">
                                            <meta name="csrf-token" content="{{ csrf_token() }}" />
                                            <button type="submit" className="mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700">
                                                Publicar
                                            </button>
                                        </form>
                                    )}
                                    <form method="DELETE" action={`/dashboard/posts/${post.id}`} className="inline">
                                        <input type="hidden" name="_method" value="DELETE" />
                                        <button type="submit" className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700">
                                            Eliminar
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
