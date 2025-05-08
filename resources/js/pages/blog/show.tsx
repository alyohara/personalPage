import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    const [language, setLanguage] = useState<'en' | 'es'>('es');

    const content = {
        en: {
            title: 'Blog',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
        },
        es: {
            title: 'Blog',
            about: 'Acerca de mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
        },
    };

    const t = content[language];

    const handleLanguageChange = (lang: 'en' | 'es') => {
        setLanguage(content[lang] ? lang : 'en');
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.meta_description} />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="/imgs/perfil2.png" />
                <style>
                    {`
                        body {
                            font-family: 'Courier New', Courier, monospace;
                        }
                    `}
                </style>
            </Head>

            <div className="flex min-h-screen items-center justify-center bg-black">
                <div className="w-full max-w-4xl border border-green-600 bg-black">
                    <div className="flex w-full items-center justify-between border-b border-green-600 bg-black px-4 py-2 text-sm font-bold text-green-400">
                        <span>Bianco(R) Angel Leonardo</span>
                        <div className="flex gap-1">
                            <button className="text-green-400 hover:text-white" onClick={() => handleLanguageChange('en')}>
                                [En]
                            </button>
                            <button className="text-green-400 hover:text-white" onClick={() => handleLanguageChange('es')}>
                                [Sp]
                            </button>
                        </div>
                    </div>

                    <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                        <Link
                            href={route('home')}
                            className={`text-green-400 hover:text-white ${route().current('home') ? 'font-bold text-white' : ''}`}
                        >
                            [Home]
                        </Link>
                        <Link
                            href={route('about')}
                            className={`text-green-400 hover:text-white ${route().current('about') ? 'font-bold text-white' : ''}`}
                        >
                            [{t.about}]
                        </Link>
                        <Link
                            href={route('projects')}
                            className={`text-green-400 hover:text-white ${route().current('projects') ? 'font-bold text-white' : ''}`}
                        >
                            [{t.projects}]
                        </Link>
                        <Link
                            href={route('blog')}
                            className={`text-green-400 hover:text-white ${route().current('blog') ? 'font-bold text-white' : ''}`}
                        >
                            [{t.blog}]
                        </Link>
                        <Link
                            href={route('contact')}
                            className={`text-green-400 hover:text-white ${route().current('contact') ? 'font-bold text-white' : ''}`}
                        >
                            [{t.contact}]
                        </Link>
                    </nav>

                    <div className="mx-auto px-6 py-8 font-mono text-sm text-green-400">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            {post.featured_image && (
                                <div className="mb-8">
                                    <img
                                        src={`/storage/${post.featured_image}`}
                                        alt={post.title}
                                        className="w-full h-[400px] object-cover rounded-lg border border-green-600"
                                    />
                                </div>
                            )}

                            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>

                            <div className="flex items-center text-green-500 mb-8">
                                <span className="mr-4">By {post.author}</span>
                                <span>{new Date(post.published_at).toLocaleDateString()}</span>
                            </div>

                            <div 
                                className="prose prose-lg max-w-none text-green-300"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </motion.div>
                    </div>

                    <footer className="border-t border-green-600 bg-black px-6 py-4 text-center font-mono text-sm text-green-400">
                        <p className="font-bold text-white">Angel Leonardo Bianco</p>
                        <p className="mt-2">
                            Emails:
                            <a href="mailto:angel.leonardo.bianco@gmail.com" className="ml-1 text-green-300 underline hover:text-white">
                                angel.leonardo.bianco@gmail.com
                            </a>
                            ,{' '}
                            <a href="mailto:angelleonardobianco@outlook.com" className="text-green-300 underline hover:text-white">
                                angelleonardobianco@outlook.com
                            </a>
                            ,{' '}
                            <a href="mailto:angel.bianco@unab.edu.ar" className="text-green-300 underline hover:text-white">
                                angel.bianco@unab.edu.ar
                            </a>
                        </p>
                        <p className="mt-2">
                            LinkedIn:
                            <a
                                href="https://www.linkedin.com/in/angel-leonardo-bianco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-green-300 underline hover:text-white"
                            >
                                https://www.linkedin.com/in/angel-leonardo-bianco/
                            </a>
                        </p>
                        <p className="mt-2">
                            GitHub:
                            <a
                                href="https://github.com/alyohara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-green-300 underline hover:text-white"
                            >
                                https://github.com/alyohara
                            </a>
                        </p>
                        <p className="mt-4 text-xs text-green-600">&copy; {new Date().getFullYear()} Angel Leonardo Bianco</p>
                    </footer>
                </div>
            </div>

            <style>
                {`
                    .blinking-cursor {
                        display: inline-block;
                        width: 10px;
                        height: 1rem;
                        background-color: white;
                        margin-left: 5px;
                        animation: blink 1s steps(1) infinite;
                    }

                    @keyframes blink {
                        50% { opacity: 0; }
                    }

                    .prose {
                        color: #86efac;
                    }

                    .prose a {
                        color: #86efac;
                        text-decoration: underline;
                    }

                    .prose a:hover {
                        color: white;
                    }

                    .prose h1, .prose h2, .prose h3, .prose h4 {
                        color: white;
                    }

                    .prose strong {
                        color: white;
                    }

                    .prose blockquote {
                        border-left-color: #22c55e;
                        color: #86efac;
                    }

                    .prose code {
                        color: #86efac;
                        background-color: #064e3b;
                    }
                `}
            </style>
        </>
    );
} 