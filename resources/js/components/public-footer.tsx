import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    { href: 'mailto:angel.leonardo.bianco@gmail.com', key: 'emailPersonal', icon: Mail, external: false },
    { href: 'mailto:angel.bianco@unab.edu.ar', key: 'emailAcademic', icon: Mail, external: false },
    { href: 'https://www.linkedin.com/in/angel-leonardo-bianco/', key: 'linkedin', icon: Linkedin, external: true },
    { href: 'https://github.com/alyohara', key: 'github', icon: Github, external: true },
] as const;

const footerNav = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' },
    { href: '/catedras', key: 'courses' },
    { href: '/contact', key: 'contact' },
] as const;

export function PublicFooter() {
    const { t } = useI18n();
    const year = new Date().getFullYear();

    return (
        <footer className="border-border bg-bg-muted border-t" role="contentinfo">
            <div className="container-main py-12 lg:py-16">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {/* Brand / About */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            prefetch
                            className="focus-ring mb-4 block rounded px-1 py-0.5 text-sm transition-opacity hover:opacity-80"
                            aria-label={t.footer.aria.brand}
                        >
                            <span className="prompt">angel@bianco</span>
                            <span className="text-fg-subtle">:</span>
                            <span className="path">~</span>
                            <span className="text-fg-subtle">$</span> <span className="text-fg font-bold">whoami</span>
                            <span className="term-cursor" aria-hidden="true">
                                _
                            </span>
                        </Link>
                        <p className="text-body text-fg-muted max-w-xs">{t.footer.tagline}</p>
                    </div>

                    {/* Navigation */}
                    <nav aria-label={t.footer.aria.nav}>
                        <h3 className="text-label text-fg mb-3 font-semibold">ls ./</h3>
                        <ul className="space-y-2">
                            {footerNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="bracket-link text-body-sm text-fg-muted hover:text-accent focus-ring rounded px-1 py-0.5 transition-colors"
                                        prefetch
                                    >
                                        {t.footer.nav[item.key]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Connect */}
                    <div>
                        <h3 className="text-label text-fg mb-3 font-semibold">cat ./social</h3>
                        <ul className="space-y-2" role="list">
                            {socialLinks.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        target={item.external ? '_blank' : undefined}
                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                        className={cn(
                                            'text-body-sm text-fg-muted hover:text-accent focus-ring flex items-center gap-2 rounded px-1 py-0.5 transition-colors',
                                            item.external &&
                                                "opacity-60 after:size-3 after:bg-current after:mask-[url('/icons/external-link.svg')] after:content-['']",
                                        )}
                                        aria-label={t.footer.social[item.key]}
                                    >
                                        <item.icon className="size-4 shrink-0" aria-hidden="true" />
                                        <span>{t.footer.social[item.key]}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
                    <p className="text-body-sm text-fg-subtle">{t.footer.copyright(year)}</p>
                    <div className="flex items-center gap-4">
                        <a
                            href="/docs/resume.pdf"
                            download
                            className="bracket-link text-body-sm text-fg-muted hover:text-accent focus-ring rounded px-2 py-1 transition-colors"
                        >
                            {t.footer.downloadCv}
                        </a>
                        <span className="text-body-sm text-fg-subtle text-[0.6875rem] tracking-widest uppercase">
                            <span className="bg-ok mr-1.5 inline-block size-1.5 rounded-full align-middle" aria-hidden="true" />
                            {t.footer.systemStatus}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
