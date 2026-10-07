import { usePage } from '@inertiajs/react';
import { en, type Dictionary } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function useI18n() {
    const props = usePage().props as { locale?: Locale };
    const locale: Locale = props.locale === 'es' ? 'es' : 'en';

    return { locale, t: dictionaries[locale] };
}
