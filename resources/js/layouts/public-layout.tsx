import { PublicFooter } from '@/components/public-footer';
import { PublicHeader } from '@/components/public-header';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
    className?: string;
}

export default function PublicLayout({ children, className }: PublicLayoutProps) {
    return (
        <div className={cn('scanlines flex min-h-screen flex-col', className)}>
            <PublicHeader />
            <main className="flex-1 pt-16" id="main-content" tabIndex={-1}>
                {children}
            </main>
            <PublicFooter />
        </div>
    );
}
