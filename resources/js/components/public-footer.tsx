import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    { href: 'mailto:angel.leonardo.bianco@gmail.com', label: 'Email (personal)', icon: Mail, external: false },
    { href: 'mailto:angel.bianco@unab.edu.ar', label: 'Email (academic)', icon: Mail, external: false },
    { href: 'https://www.linkedin.com/in/angel-leonardo-bianco/', label: 'LinkedIn', icon: Linkedin, external: true },
    { href: 'https://github.com/alyohara', label: 'GitHub', icon: Github, external: true },
] as const;

const footerNav = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/catedras', label: 'cátedras' },
    { href: '/contact', label: 'contact' },
] as const;

export function PublicFooter() {
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
                            aria-label="Angel Leonardo Bianco - Home"
                        >
                            <span className="prompt">angel@bianco</span>
                            <span className="text-fg-subtle">:</span>
                            <span className="path">~</span>
                            <span className="text-fg-subtle">$</span> <span className="text-fg font-bold">whoami</span>
                            <span className="term-cursor" aria-hidden="true">
                                _
                            </span>
                        </Link>
                        <p className="text-body text-fg-muted max-w-xs">
                            Software Architect · Tech Lead · Full Stack Engineer · University Lecturer. Building robust systems, leading teams, and
                            teaching the next generation.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation">
                        <h3 className="text-label text-fg mb-3 font-semibold">ls ./</h3>
                        <ul className="space-y-2">
                            {footerNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="bracket-link text-body-sm text-fg-muted hover:text-accent focus-ring rounded px-1 py-0.5 transition-colors"
                                        prefetch
                                    >
                                        {item.label}
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
                                        aria-label={item.label}
                                    >
                                        <item.icon className="size-4 shrink-0" aria-hidden="true" />
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
                    <p className="text-body-sm text-fg-subtle">&copy; {year} Angel Leonardo Bianco. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a
                            href="/docs/resume.pdf"
                            download
                            className="bracket-link text-body-sm text-fg-muted hover:text-accent focus-ring rounded px-2 py-1 transition-colors"
                        >
                            download cv
                        </a>
                        <span className="text-body-sm text-fg-subtle text-[0.6875rem] tracking-widest uppercase">
                            <span className="bg-ok mr-1.5 inline-block size-1.5 rounded-full align-middle" aria-hidden="true" />
                            system status: online
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
