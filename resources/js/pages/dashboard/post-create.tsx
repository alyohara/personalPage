// resources/js/pages/dashboard/post-create.tsx
import AppLayout from '@/layouts/app-layout';
import { useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';

export default function PostCreate() {
    const { data, setData, post, processing } = useForm({
        title: '',
        content: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/posts');
    };

    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Crear Nuevo Post</h1>
                <form onSubmit={handleSubmit} className="mt-4">
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
                        <label className="block text-sm font-medium">Contenido</label>
                        <Editor
                            apiKey="8g1rfig0ilfv0bkpciq81y6oc3rlwnh0ikz52jt69b8sf2bv"
                            value={data.content}
                            onEditorChange={(content) => setData('content', content)}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount',
                                    'image media link codesample',
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
