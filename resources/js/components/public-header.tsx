import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAppearance } from '@/hooks/use-appearance';
import { locales, useI18n } from '@/i18n';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { Menu, Monitor, Moon, Sun, Terminal, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { href: '/', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/projects', key: 'projects' },
    { href: '/catedras', key: 'courses' },
    { href: '/contact', key: 'contact' },
] as const;

export function PublicHeader() {
    const { appearance, updateAppearance } = useAppearance();
    const { locale, t } = useI18n();
    const page = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 8);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentPath = page.url;
    const isActive = (href: string) => currentPath === href || (href !== '/' && currentPath.startsWith(href));

    const languageSwitch = (className?: string) => (
        <div
            className={cn('border-border text-fg-muted flex items-center gap-0.5 rounded-sm border px-1 py-0.5', className)}
            role="group"
            aria-label={t.header.aria.language}
        >
            {locales.map((item) => (
                <Link
                    key={item}
                    href={`/locale/${item}`}
                    aria-current={locale === item ? 'true' : undefined}
                    aria-label={item === 'en' ? 'English' : 'Español'}
                    className={cn(
                        'focus-ring rounded-sm px-1.5 py-0.5 text-[0.6875rem] font-medium tracking-widest uppercase transition-colors',
                        locale === item ? 'text-bg bg-prompt' : 'text-fg-muted hover:text-fg',
                    )}
                >
                    {item}
                </Link>
            ))}
        </div>
    );

    return (
        <header
            className={cn(
                'fixed top-0 right-0 left-0 z-50 transition-all duration-200',
                isScrolled ? 'bg-bg/95 border-border border-b backdrop-blur-md' : 'bg-transparent',
            )}
        >
            <nav className="container-main" aria-label={t.header.aria.mainNav}>
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Prompt / Brand */}
                    <Link
                        href="/"
                        className="text-fg focus-ring flex shrink-0 items-center gap-1 rounded-sm px-1 py-1 text-[0.8125rem] font-medium tracking-tight transition-opacity hover:opacity-80"
                        aria-label={t.header.aria.brand}
                    >
                        <img
                            src="/imgs/perfil-64.png"
                            alt=""
                            width={24}
                            height={24}
                            aria-hidden="true"
                            className="border-border h-6 w-6 shrink-0 rounded-sm border"
                        />
                        <span className="prompt">angel@bianco</span>
                        <span className="text-fg-subtle">:</span>
                        <span className="path">~</span>
                        <span className="text-fg-subtle">$</span>
                        <span className="text-fg font-bold">ALB</span>
                        <span className="term-cursor" aria-hidden="true">
                            _
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                data-active={isActive(item.href)}
                                className={cn(
                                    'bracket-link focus-ring rounded-sm px-2 py-1.5 text-sm transition-colors',
                                    isActive(item.href) ? 'text-bg bg-prompt font-bold' : 'text-fg-muted hover:text-fg',
                                )}
                                prefetch
                            >
                                {t.header.nav[item.key]}
                            </Link>
                        ))}
                    </div>

                    {/* Actions: Status + Language + Theme + Mobile Menu */}
                    <div className="flex items-center gap-2">
                        <span
                            className="text-fg-subtle hidden items-center gap-1.5 text-[0.6875rem] tracking-widest uppercase lg:inline-flex"
                            aria-label={t.header.aria.status}
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="bg-ok absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                                <span className="bg-ok relative inline-flex h-1.5 w-1.5 rounded-full" />
                            </span>
                            {t.header.status}
                        </span>

                        {/* Language Switcher */}
                        {languageSwitch('hidden sm:flex')}

                        {/* Theme Toggle */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="term-btn" aria-label={t.header.aria.theme}>
                                    {t.header.themePrefix} {t.header.themeButton[appearance]}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-bg-elevated w-44 rounded-sm">
                                <DropdownMenuItem
                                    onClick={() => updateAppearance('terminal')}
                                    className={cn('flex cursor-pointer items-center gap-2', appearance === 'terminal' && 'text-accent')}
                                >
                                    <Terminal className="size-4" /> {t.header.themeMenu.terminal}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => updateAppearance('light')}
                                    className={cn('flex cursor-pointer items-center gap-2', appearance === 'light' && 'text-accent')}
                                >
                                    <Sun className="size-4" /> {t.header.themeMenu.light}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => updateAppearance('dark')}
                                    className={cn('flex cursor-pointer items-center gap-2', appearance === 'dark' && 'text-accent')}
                                >
                                    <Moon className="size-4" /> {t.header.themeMenu.dark}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => updateAppearance('system')}
                                    className={cn('flex cursor-pointer items-center gap-2', appearance === 'system' && 'text-accent')}
                                >
                                    <Monitor className="size-4" /> {t.header.themeMenu.system}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-fg-muted hover:text-fg md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMobileMenuOpen ? t.header.aria.closeMenu : t.header.aria.openMenu}
                        >
                            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="animate-slide-in-right border-border bg-bg border-t pb-4 md:hidden"
                        role="navigation"
                        aria-label={t.header.aria.mobileMenu}
                    >
                        <div className="flex flex-col gap-1 pt-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    data-active={isActive(item.href)}
                                    className={cn(
                                        'bracket-link focus-ring rounded-sm px-3 py-3 text-base transition-colors',
                                        isActive(item.href) ? 'text-bg bg-prompt font-bold' : 'text-fg-muted hover:text-fg',
                                    )}
                                    prefetch
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t.header.nav[item.key]}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-3 px-3">
                            <span className="text-fg-subtle text-[0.6875rem] tracking-widest uppercase">{t.header.aria.language}</span>
                            {languageSwitch()}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
