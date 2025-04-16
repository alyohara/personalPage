import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Mi CV">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col bg-black p-6 font-mono text-green-500">
                {/* Contenedor de los enlaces estilo terminal */}
                <nav className="mb-6 flex justify-center gap-8 text-lg">
                    <Link href={route('about')} className="hover:text-white">
                        __Acerca de mí__
                    </Link>
                    <Link href={route('projects')} className="hover:text-white">
                        __Proyectos__
                    </Link>
                    <Link href={route('blog')} className="hover:text-white">
                        __Blog__
                    </Link>
                    <Link href={route('contact')} className="hover:text-white">
                        __Contacto__
                    </Link>
                </nav>

                {/* Contenido principal */}
                <div className="flex flex-col items-center lg:justify-center lg:p-8">
                    <header className="mb-6 w-full max-w-[335px] text-center lg:max-w-4xl">
                        <h1 className="text-3xl font-bold text-white">Bienvenido a mi CV</h1>
                        <p className="mt-2 text-lg text-green-500">Explora más sobre mí, mis proyectos y mi blog.</p>
                    </header>
                </div>
            </div>
        </>
    );
}
