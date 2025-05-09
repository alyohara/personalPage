// resources/js/pages/dashboard/post-edit.tsx
import AppLayout from '@/layouts/app-layout';
import { useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';

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
        is_published: boolean;
    };
}

export default function PostEdit({ post }: Props) {
    const { data, setData, post: submitPost, processing } = useForm({
        title: post.title,
        content: post.content,
        slug: post.slug,
        author: post.author,
        featured_image: null as File | null,
        meta_description: post.meta_description,
        summary: post.summary,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('slug', data.slug);
        formData.append('author', data.author);
        formData.append('summary', data.summary);
        formData.append('meta_description', data.meta_description);
        formData.append('_method', 'PUT');
        
        if (data.featured_image) {
            formData.append('featured_image', data.featured_image);
        }

        submitPost(`/dashboard/posts/${post.id}`, {
            forceFormData: true,
            data: formData,
            preserveScroll: true,
            onSuccess: () => {
                window.location.href = '/dashboard/posts';
            },
            onError: (errors) => {
                console.error('Error updating post:', errors);
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
                                    'advlist',
                                    'autolink',
                                    'lists',
                                    'link',
                                    'image',
                                    'charmap',
                                    'preview',
                                    'anchor',
                                    'searchreplace',
                                    'visualblocks',
                                    'code',
                                    'fullscreen',
                                    'insertdatetime',
                                    'media',
                                    'table',
                                    'code',
                                    'help',
                                    'wordcount',
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help | \
                                    link image media codesample',
                                image_title: true,
                                automatic_uploads: true,
                                file_picker_types: 'image',
                                file_picker_callback: (callback, value, meta) => {
                                    if (meta.filetype === 'image') {
                                        const input = document.createElement('input');
                                        input.setAttribute('type', 'file');
                                        input.setAttribute('accept', 'image/*');
                                        input.onchange = function () {
                                            const file = this.files[0];
                                            const reader = new FileReader();
                                            reader.onload = function () {
                                                callback(reader.result, { alt: file.name });
                                            };
                                            reader.readAsDataURL(file);
                                        };
                                        input.click();
                                    }
                                },
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
