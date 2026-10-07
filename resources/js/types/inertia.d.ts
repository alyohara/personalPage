import type { PageProps as InertiaPageProps } from '@inertiajs/react';
import type { Config } from 'ziggy-js';
import type { Auth } from './index';

declare module '@inertiajs/react' {
    interface PageProps extends InertiaPageProps {
        auth: Auth;
        name: string;
        locale: 'en' | 'es';
        ziggy: Config & { location: string };
        quote?: { message: string; author: string };
        [key: string]: unknown;
    }
}
