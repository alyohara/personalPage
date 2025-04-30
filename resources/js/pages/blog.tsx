interface Post {
    id: number;
    title: string;
    summary: string;
    slug: string;
    published_at: string;
}

interface Props {
    posts: Post[];
}

export default function Blog({ posts }: Props) {
    return (
        <AppLayout>
            <div className="p-6">
                <h1 className="mb-6 text-3xl font-bold">Blog</h1>
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div key={post.id} className="border-b pb-4">
                            <h2 className="text-2xl font-semibold">
                                <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </a>
                            </h2>
                            <p className="text-gray-600">{post.summary}</p>
                            <p className="text-sm text-gray-500">Publicado el {new Date(post.published_at).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
