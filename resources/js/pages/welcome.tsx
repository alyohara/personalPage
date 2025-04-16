// import { type SharedData } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Mi CV">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-center lg:max-w-4xl">
                    <h1 className="text-3xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">Bienvenido a mi CV</h1>
                    <p className="mt-2 text-lg text-[#706f6c] dark:text-[#A1A09A]">Explora más sobre mí, mis proyectos y mi blog.</p>
                </header>
                <main className="flex flex-col items-center gap-6">
                    <Link
                        href={route('about')}
                        className="inline-block rounded-md bg-[#1b1b18] px-6 py-3 text-lg font-medium text-white hover:bg-[#33312e] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#cfcfcf]"
                    >
                        Acerca de mí
                    </Link>
                    <Link
                        href={route('projects')}
                        className="inline-block rounded-md bg-[#1b1b18] px-6 py-3 text-lg font-medium text-white hover:bg-[#33312e] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#cfcfcf]"
                    >
                        Proyectos
                    </Link>
                    <Link
                        href={route('blog')}
                        className="inline-block rounded-md bg-[#1b1b18] px-6 py-3 text-lg font-medium text-white hover:bg-[#33312e] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#cfcfcf]"
                    >
                        Blog
                    </Link>
                    <Link
                        href={route('contact')}
                        className="inline-block rounded-md bg-[#1b1b18] px-6 py-3 text-lg font-medium text-white hover:bg-[#33312e] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#cfcfcf]"
                    >
                        Contacto
                    </Link>
                    <Link href={route('login')} className="hidden">
                        Iniciar sesión
                    </Link>
                </main>
            </div>
        </>
    );
}
