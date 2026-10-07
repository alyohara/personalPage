import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { useI18n } from '@/i18n';
import PublicLayout from '@/layouts/public-layout';
import { paginationLabel } from '@/lib/sanitize';
import { Head, Link, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    const { t } = useI18n();
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>(initialSort);

    const getPostsData = () => {
        if (Array.isArray(posts)) {
            return { posts: posts, links: [], hasPagination: false };
        }
        return { posts: posts.data, links: posts.links, hasPagination: true };
    };

    const { posts: postsList, links, hasPagination } = getPostsData();

    const debouncedSearch = useDebouncedCallback((value: string) => {
        router.get(route('blog'), { search: value, sort: sortOrder }, { preserveState: true, preserveScroll: true });
    }, 300);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        debouncedSearch(value);
    };

    const handleSortChange = (order: 'newest' | 'oldest') => {
        setSortOrder(order);
        router.get(route('blog'), { search: searchQuery, sort: order }, { preserveState: true, preserveScroll: true });
    };

    const handlePageChange = (url: string | null) => {
        if (url) window.location.href = url;
    };

    return (
        <PublicLayout>
            <Head title={t.blog.head.title} />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                            <Badge variant="default">{t.blog.hero.badge}</Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-display text-fg mb-6"
                        >
                            {t.blog.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-h3 text-fg-muted"
                        >
                            {t.blog.hero.subtitle}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Search & Filter */}
            <Section variant="muted" size="default">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="relative w-full sm:w-80">
                        <Search className="text-fg-subtle absolute top-1/2 left-3 size-5 -translate-y-1/2" aria-hidden="true" />
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder={t.blog.search.placeholder}
                            className="bg-bg-elevated border-border text-fg placeholder-fg-subtle focus:ring-ring w-full rounded-lg border py-2.5 pr-4 pl-10 transition-all focus:border-transparent focus:ring-2"
                            aria-label={t.blog.search.ariaLabel}
                        />
                    </div>
                    <div className="flex gap-2">
                        {(['newest', 'oldest'] as const).map((order) => (
                            <Button
                                key={order}
                                variant={sortOrder === order ? 'primary' : 'outline'}
                                size="sm"
                                onClick={() => handleSortChange(order)}
                                className="gap-2"
                            >
                                {order === 'newest' ? t.blog.sort.newest : t.blog.sort.oldest}
                            </Button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Posts Grid */}
            <Section>
                {postsList.length > 0 ? (
                    <>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {postsList.map((post, i) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                >
                                    <Card variant="interactive" className="flex h-full flex-col overflow-hidden">
                                        {post.featured_image && (
                                            <Link href={`/blog/${post.slug}`} prefetch className="relative h-48 overflow-hidden">
                                                <img
                                                    src={`/storage/${post.featured_image}`}
                                                    alt=""
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        )}
                                        <CardContent className="flex flex-1 flex-col p-6">
                                            <div className="mb-3 flex items-center gap-2">
                                                <time dateTime={post.published_at} className="text-body-sm text-fg-muted flex items-center gap-1">
                                                    <Calendar className="size-3.5" aria-hidden="true" />
                                                    {new Date(post.published_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </time>
                                            </div>
                                            <Link href={`/blog/${post.slug}`} prefetch className="group">
                                                <h3 className="text-h3 group-hover:text-accent mb-3 transition-colors">{post.title}</h3>
                                            </Link>
                                            <p className="text-body-sm text-fg-muted mb-4 flex-1">{post.summary}</p>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                prefetch
                                                className="text-body-sm text-accent group flex items-center gap-1 hover:underline"
                                            >
                                                {t.blog.list.readMore}
                                                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.article>
                            ))}
                        </div>

                        {/* Pagination */}
                        {hasPagination && links.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-12 flex justify-center gap-2"
                            >
                                {links.map((link, index) => (
                                    <Button
                                        key={index}
                                        variant={link.active ? 'primary' : 'outline'}
                                        size="sm"
                                        disabled={!link.url}
                                        onClick={() => handlePageChange(link.url)}
                                        aria-label={paginationLabel(link.label)}
                                        aria-current={link.active ? 'page' : undefined}
                                    >
                                        {paginationLabel(link.label)}
                                    </Button>
                                ))}
                            </motion.div>
                        )}
                    </>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
                        <Search className="text-fg-subtle mx-auto mb-4 size-12" aria-hidden="true" />
                        <h3 className="text-h3 mb-2">{t.blog.list.empty.title}</h3>
                        <p className="text-body text-fg-muted">{t.blog.list.empty.description}</p>
                    </motion.div>
                )}
            </Section>
        </PublicLayout>
    );
}

// Simple debounced callback hook
function useDebouncedCallback<T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number): T {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return ((...args: Parameters<T>) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => callbackRef.current(...args), delay);
    }) as T;
}
