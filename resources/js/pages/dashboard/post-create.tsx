// resources/js/pages/dashboard/post-create.tsx
import AppLayout from '@/layouts/app-layout';
import { useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';

export default function PostCreate() {
    const { data, setData, post, processing } = useForm({
        title: '',
        content: '',
        slug: '',
        published_at: '',
        author: '',
        featured_image: null as File | null,
        meta_description: '',
        summary: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/posts', {
            forceFormData: true,
        });
    };

    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Crear Nuevo Post</h1>
                <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Título</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Slug</label>
                        <input
                            type="text"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Fecha de publicación</label>
                        <input
                            type="datetime-local"
                            value={data.published_at}
                            onChange={(e) => setData('published_at', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Autor</label>
                        <input
                            type="text"
                            value={data.author}
                            onChange={(e) => setData('author', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Resumen</label>
                        <textarea
                            value={data.summary}
                            onChange={(e) => setData('summary', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            rows={4}
                            maxLength={500}
                            placeholder="Escribe un resumen del post (máximo 500 caracteres)"
                        />
                        <p className="mt-1 text-sm text-gray-500">{data.summary.length}/500 caracteres</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Imagen destacada</label>
                        <input
                            type="file"
                            name="featured_image"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setData('featured_image', file);
                                }
                            }}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Descripción meta</label>
                        <input
                            type="text"
                            value={data.meta_description}
                            onChange={(e) => setData('meta_description', e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            maxLength={255}
                        />
                        <p className="mt-1 text-sm text-gray-500">{data.meta_description.length}/255 caracteres</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Contenido</label>
                        <Editor
                            apiKey="8g1rfig0ilfv0bkpciq81y6oc3rlwnh0ikz52jt69b8sf2bv"
                            value={data.content}
                            onEditorChange={(content) => setData('content', content)}
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
                                    'print',
                                    'preview',
                                    'anchor',
                                    'searchreplace',
                                    'visualblocks',
                                    'code',
                                    'fullscreen',
                                    'insertdatetime',
                                    'media',
                                    'table',
                                    'paste',
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
                    <div className="flex space-x-4">
                        <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700" disabled={processing}>
                            Guardar
                        </button>
                        <a href="/dashboard/posts" className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">
                            Volver
                        </a>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
