// resources/js/pages/dashboard/post-edit.tsx
import AppLayout from '@/layouts/app-layout';
import { useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect } from 'react';

interface Props {
    post: {
        id: number;
        title: string;
        content: string;
        slug: string;
        published_at: string;
        author: string;
        featured_image: string | null;
        meta_description: string;
        summary: string;
    };
}

export default function PostEdit({ post }: Props) {
    const { data, setData, put, processing } = useForm({
        title: post.title,
        content: post.content,
        slug: post.slug,
        published_at: post.published_at,
        author: post.author,
        featured_image: null as File | null,
        meta_description: post.meta_description,
        summary: post.summary,
    });

    const handleSubmit = (e: React.FormEvent) => {
        console.log('Form submission started');
        e.preventDefault();
        console.log('Prevent default completed');
        console.log('Form data state:', data);
        
        const formData = new FormData();
        console.log('FormData object created');
        
        // Log each field before appending
        console.log('Title:', data.title);
        console.log('Content:', data.content);
        console.log('Slug:', data.slug);
        console.log('Author:', data.author);
        console.log('Summary:', data.summary);
        console.log('Meta Description:', data.meta_description);
        console.log('Featured Image:', data.featured_image);
        
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('slug', data.slug);
        formData.append('author', data.author);
        formData.append('summary', data.summary);
        formData.append('meta_description', data.meta_description);
        
        if (data.published_at) {
            formData.append('published_at', data.published_at);
        }
        
        if (data.featured_image) {
            formData.append('featured_image', data.featured_image);
        }

        console.log('FormData prepared, sending request...');
        
        put(`/dashboard/posts/${post.id}`, {
            forceFormData: true,
            data: formData,
            onSuccess: () => {
                console.log('Update successful');
                window.location.href = '/dashboard/posts';
            },
            onError: (errors) => {
                console.error('Update failed:', errors);
            }
        });
    };

    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Editar Post</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Título</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="w-full rounded border-gray-300 shadow-sm"
                            required
                        />
                    </div>

                    {/* Slug (read-only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Slug</label>
                        <input
                            type="text"
                            value={data.slug}
                            className="w-full rounded border-gray-300 shadow-sm bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Autor</label>
                        <input
                            type="text"
                            value={data.author}
                            onChange={e => setData('author', e.target.value)}
                            className="w-full rounded border-gray-300 shadow-sm"
                            required
                        />
                    </div>

                    {/* Summary */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Resumen</label>
                        <textarea
                            value={data.summary}
                            onChange={e => setData('summary', e.target.value)}
                            className="w-full rounded border-gray-300 shadow-sm"
                            rows={4}
                            maxLength={500}
                            required
                        />
                        <p className="mt-1 text-sm text-gray-500">{data.summary.length}/500 caracteres</p>
                    </div>

                    {/* Featured Image */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Imagen destacada</label>
                        {post.featured_image && (
                            <div className="mb-2">
                                <img 
                                    src={`/storage/${post.featured_image}`} 
                                    alt="Imagen actual" 
                                    className="h-32 w-32 rounded object-cover"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e => {
                                const file = e.target.files?.[0];
                                if (file) setData('featured_image', file);
                            }}
                            className="w-full"
                        />
                    </div>

                    {/* Meta Description */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Descripción meta</label>
                        <input
                            type="text"
                            value={data.meta_description}
                            onChange={e => setData('meta_description', e.target.value)}
                            className="w-full rounded border-gray-300 shadow-sm"
                            maxLength={255}
                        />
                        <p className="mt-1 text-sm text-gray-500">{data.meta_description.length}/255 caracteres</p>
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Contenido</label>
                        <Editor
                            apiKey="8g1rfig0ilfv0bkpciq81y6oc3rlwnh0ikz52jt69b8sf2bv"
                            value={data.content}
                            onEditorChange={content => setData('content', content)}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                    'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                                    'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help'
                            }}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                            disabled={processing}
                        >
                            Guardar cambios
                        </button>
                        <a
                            href="/dashboard/posts"
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                        >
                            Cancelar
                        </a>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
