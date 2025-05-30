import { Head, Link, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

interface Post {
    id: number;
    title: string;
    summary: string;
    slug: string;
    published_at: string;
    featured_image: string | null;
    content: string;
}

interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedPosts {
    data: Post[];
    current_page: number;
    last_page: number;
    links: PaginationLinks[];
}

interface Props {
    posts: Post[] | PaginatedPosts;
    search: string;
    sort: 'newest' | 'oldest';
}

export default function Blog({ posts, search: initialSearch, sort: initialSort }: Props) {
    const [language, setLanguage] = useState<'en' | 'es'>('es');
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>(initialSort);

    const content = {
        en: {
            title: 'Blog',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            sortNewest: 'Sort by Newest',
            sortOldest: 'Sort by Oldest',
            searchPlaceholder: 'Search posts...',
            noResults: 'No posts found matching your search.',
        },
        es: {
            title: 'Blog',
            about: 'Acerca de mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
            sortNewest: 'Ordenar más recientes',
            sortOldest: 'Ordenar más antiguos',
            searchPlaceholder: 'Buscar posts...',
            noResults: 'No se encontraron posts que coincidan con tu búsqueda.',
        },
    };

    const t = content[language];

    const handleLanguageChange = (lang: 'en' | 'es') => {
        setLanguage(content[lang] ? lang : 'en');
    };

    const handlePageChange = (url: string | null) => {
        if (url) {
            window.location.href = url;
        }
    };

    // Helper function to get posts array and pagination data
    const getPostsData = () => {
        if (Array.isArray(posts)) {
            return {
                posts: posts,
                links: [],
                hasPagination: false
            };
        }
        return {
            posts: posts.data,
            links: posts.links,
            hasPagination: true
        };
    };

    const { posts: postsList, links, hasPagination } = getPostsData();

    // Debounced search function
    const debouncedSearch = debounce((value: string) => {
        router.get(
            route('blog'),
            { search: value, sort: sortOrder },
            { preserveState: true, preserveScroll: true }
        );
    }, 300);

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        debouncedSearch(value);
    };

    // Handle sort order change
    const handleSortChange = (order: 'newest' | 'oldest') => {
        setSortOrder(order);
        router.get(
            route('blog'),
            { search: searchQuery, sort: order },
            { preserveState: true, preserveScroll: true }
        );
    };

    return (
        <>
            <Head title={t.title}>
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
                        <div className="mb-4 flex items-center justify-between">
                            <h1 className="text-xl font-bold text-white">C:\{t.blog}&gt;</h1>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleSortChange('newest')}
                                    className={`rounded border border-green-600 px-3 py-1 ${
                                        sortOrder === 'newest' ? 'bg-green-600 text-white' : 'text-green-400 hover:bg-green-600 hover:text-white'
                                    }`}
                                >
                                    {t.sortNewest}
                                </button>
                                <button
                                    onClick={() => handleSortChange('oldest')}
                                    className={`rounded border border-green-600 px-3 py-1 ${
                                        sortOrder === 'oldest' ? 'bg-green-600 text-white' : 'text-green-400 hover:bg-green-600 hover:text-white'
                                    }`}
                                >
                                    {t.sortOldest}
                                </button>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="mb-6">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder={t.searchPlaceholder}
                                className="w-full rounded border border-green-600 bg-black px-4 py-2 text-green-400 placeholder-green-600 focus:border-green-500 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-6">
                            {postsList.length > 0 ? (
                                postsList.map((post, i) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="rounded-lg border border-green-600 bg-black p-4 shadow-md"
                                    >
                                        <div className="flex gap-4">
                                            <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border border-green-600">
                                                <img
                                                    src={post.featured_image ? `/storage/${post.featured_image}` : '/imgs/perfil2.png'}
                                                    alt={post.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col">
                                                <h2 className="text-lg font-semibold text-white">
                                                    <Link href={`/blog/${post.slug}`} className="text-green-400 hover:underline">
                                                        {post.title}
                                                    </Link>
                                                </h2>
                                                <p className="mt-2 flex-1 text-green-300">{post.summary}</p>
                                                <p className="mt-2 text-xs text-green-500">
                                                    Publicado el {new Date(post.published_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="rounded-lg border border-green-600 bg-black p-4 text-center text-green-400">
                                    {t.noResults}
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {hasPagination && links.length > 0 && (
                            <div className="mt-8 flex justify-center space-x-2">
                                {links.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(link.url)}
                                        className={`rounded-lg border border-green-600 px-4 py-2 ${
                                            link.active
                                                ? 'bg-green-600 text-white'
                                                : 'text-green-400 hover:bg-green-600 hover:text-white'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        )}
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
                `}
            </style>
        </>
    );
}
