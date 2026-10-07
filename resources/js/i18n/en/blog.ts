export const blog = {
    head: {
        title: 'Blog — Angel Leonardo Bianco',
    },
    hero: {
        badge: 'Technical Articles & Tutorials',
        title: 'Blog',
        subtitle: 'Thoughts on software architecture, backend engineering, databases, and teaching.',
    },
    search: {
        placeholder: 'Search articles...',
        ariaLabel: 'Search articles',
    },
    sort: {
        newest: 'Newest',
        oldest: 'Oldest',
    },
    list: {
        readMore: 'Read more',
        empty: {
            title: 'No articles found',
            description: 'Try adjusting your search or filter criteria.',
        },
    },
    show: {
        nav: {
            home: 'Home',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
        },
        backToBlog: '← Back to Blog',
        byAuthor: (author: string) => `By ${author}`,
        emails: 'Emails:',
        linkedin: 'LinkedIn:',
        github: 'GitHub:',
    },
};

export type BlogDict = typeof blog;
