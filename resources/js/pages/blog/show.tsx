import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

interface Post {
    id: number;
    title: string;
    content: string;
    published_at: string;
    author: string;
    featured_image: string | null;
    meta_description: string;
}

interface Props {
    post: Post;
}

export default function Show({ post }: Props) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.meta_description} />
            </Head>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-8"
            >
                <article className="max-w-4xl mx-auto">
                    {post.featured_image && (
                        <div className="mb-8">
                            <img
                                src={`/storage/${post.featured_image}`}
                                alt={post.title}
                                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    )}

                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center text-gray-600 mb-8">
                        <span className="mr-4">By {post.author}</span>
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                    </div>

                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </motion.div>
        </>
    );
} 