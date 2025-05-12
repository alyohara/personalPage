declare module '@inertiajs/react' {
    import { ComponentType, ReactNode } from 'react';

    export interface PageProps {
        [key: string]: any;
    }

    export interface HeadProps {
        title?: string;
        children?: ReactNode;
    }

    export interface LinkProps {
        href: string;
        method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
        data?: Record<string, any>;
        preserveScroll?: boolean;
        preserveState?: boolean;
        replace?: boolean;
        only?: string[];
        headers?: Record<string, string>;
        onCancelToken?: (cancelToken: any) => void;
        onBefore?: () => void;
        onStart?: () => void;
        onProgress?: (progress: any) => void;
        onFinish?: () => void;
        onCancel?: () => void;
        onSuccess?: () => void;
        onError?: (errors: any) => void;
        children?: ReactNode;
        className?: string;
    }

    export interface Router {
        get: (url: string, data?: Record<string, any>, options?: Record<string, any>) => void;
        post: (url: string, data?: Record<string, any>, options?: Record<string, any>) => void;
        put: (url: string, data?: Record<string, any>, options?: Record<string, any>) => void;
        patch: (url: string, data?: Record<string, any>, options?: Record<string, any>) => void;
        delete: (url: string, data?: Record<string, any>, options?: Record<string, any>) => void;
        visit: (url: string, options?: Record<string, any>) => void;
        reload: (options?: Record<string, any>) => void;
    }

    export interface Route {
        (name: string, params?: Record<string, any>): string;
        current: (name: string) => boolean;
    }

    export const Head: ComponentType<HeadProps>;
    export const Link: ComponentType<LinkProps>;
    export const router: Router;
    export const route: Route;

    export function useForm<T = Record<string, any>>(data?: T): {
        data: T;
        setData: (key: keyof T, value: any) => void;
        post: (url: string, options?: Record<string, any>) => void;
        put: (url: string, options?: Record<string, any>) => void;
        patch: (url: string, options?: Record<string, any>) => void;
        delete: (url: string, options?: Record<string, any>) => void;
        processing: boolean;
        reset: () => void;
        errors: Record<string, string>;
        clearErrors: () => void;
    };
} 