import { useI18n } from '@/i18n';
import { en } from '@/i18n/en';
import { es } from '@/i18n/es';
import { sanitizeHtml } from '@/lib/sanitize';
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
    const { t } = useI18n();
    const [language, setLanguage] = useState<'en' | 'es'>('es');

    const navContent = {
        en: en.blog.show.nav,
        es: es.blog.show.nav,
    };

    const nav = navContent[language];

    const handleLanguageChange = (lang: 'en' | 'es') => {
        setLanguage(navContent[lang] ? lang : 'en');
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.meta_description} />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="/imgs/perfil-64.png" />
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
                            [{t.blog.show.nav.home}]
                        </Link>
                        <Link
                            href={route('about')}
                            className={`text-green-400 hover:text-white ${route().current('about') ? 'font-bold text-white' : ''}`}
                        >
                            [{nav.about}]
                        </Link>
                        <Link
                            href={route('projects')}
                            className={`text-green-400 hover:text-white ${route().current('projects') ? 'font-bold text-white' : ''}`}
                        >
                            [{nav.projects}]
                        </Link>
                        <Link
                            href={route('blog')}
                            className={`text-green-400 hover:text-white ${route().current('blog') ? 'font-bold text-white' : ''}`}
                        >
                            [{nav.blog}]
                        </Link>
                        <Link
                            href={route('contact')}
                            className={`text-green-400 hover:text-white ${route().current('contact') ? 'font-bold text-white' : ''}`}
                        >
                            [{nav.contact}]
                        </Link>
                    </nav>

                    <div className="mx-auto px-6 py-8 font-mono text-sm text-green-400">
                        <Link
                            href={route('blog')}
                            className="mb-6 inline-block rounded border border-green-600 px-4 py-2 text-green-400 transition-colors hover:bg-green-600 hover:text-white"
                        >
                            {t.blog.show.backToBlog}
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto max-w-4xl"
                        >
                            {post.featured_image && (
                                <div className="mb-8">
                                    <img
                                        src={`/storage/${post.featured_image}`}
                                        alt={post.title}
                                        className="h-[400px] w-full rounded-lg border border-green-600 object-cover"
                                    />
                                </div>
                            )}

                            <h1 className="mb-4 text-4xl font-bold text-white">{post.title}</h1>

                            <div className="mb-8 flex items-center text-green-500">
                                <span className="mr-4">{t.blog.show.byAuthor(post.author)}</span>
                                <span>{new Date(post.published_at).toLocaleDateString()}</span>
                            </div>

                            <div
                                className="prose prose-lg max-w-none text-green-300"
                                dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
                            />
                        </motion.div>
                    </div>

                    <footer className="border-t border-green-600 bg-black px-6 py-4 text-center font-mono text-sm text-green-400">
                        <p className="font-bold text-white">Angel Leonardo Bianco</p>
                        <p className="mt-2">
                            {t.blog.show.emails}
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
                            {t.blog.show.linkedin}
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
                            {t.blog.show.github}
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
