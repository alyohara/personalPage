import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="About Me">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="relative min-h-screen bg-black font-mono text-green-400">
                {/* Navigation */}
                <nav className="flex justify-center gap-8 py-6 text-sm">
                    <Link href={route('about')} className="text-blue-400 hover:text-white">
                        __About__
                    </Link>
                    <Link href={route('projects')} className="text-blue-400 hover:text-white">
                        __Projects__
                    </Link>
                    <Link href={route('blog')} className="text-blue-400 hover:text-white">
                        __Blog__
                    </Link>
                    <Link href={route('contact')} className="text-blue-400 hover:text-white">
                        __Contact__
                    </Link>
                </nav>

                {/* Main Content */}
                <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-2xl font-bold text-white">Bianco OnLine</h1>

                    {/* Profile Image */}
                    <img src="/imgs/perfil2.png" alt="Perfil" className="mt-6 h-32 w-32 rounded-full border-4 border-green-400 shadow-lg" />

                    <p className="mt-4 text-sm text-green-300">
                        A passionate IT professional with a strong academic background, I'm currently pursuing a Bachelor's degree in Systems
                        Engineering (anticipated completion soon) while simultaneously working as a Software Analyst and Full Stack Developer.
                    </p>
                    {/* ... (resto del contenido principal) */}
                </div>

                {/* Footer */}
                <footer className="mt-12 bg-gray-800 text-gray-300">
                    <div className="container mx-auto px-6 py-8 text-center">
                        <p className="text-lg font-bold text-white">Angel Leonardo Bianco</p>
                        <p className="mt-2 text-sm">
                            Correo electrónico:
                            <a href="mailto:angel.leonardo.bianco@gmail.com" className="ml-1 text-blue-400 hover:text-white">
                                angel.leonardo.bianco@gmail.com
                            </a>
                            ,
                            <a href="mailto:angelleonardobianco@outlook.com" className="ml-1 text-blue-400 hover:text-white">
                                angelleonardobianco@outlook.com
                            </a>
                            ,
                            <a href="mailto:angel.bianco@unab.edu.ar" className="ml-1 text-blue-400 hover:text-white">
                                angel.bianco@unab.edu.ar
                            </a>
                        </p>
                        <p className="mt-2 text-sm">
                            LinkedIn:
                            <a
                                href="https://www.linkedin.com/in/angel-leonardo-bianco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-blue-400 hover:text-white"
                            >
                                https://www.linkedin.com/in/angel-leonardo-bianco/
                            </a>
                        </p>
                        <p className="mt-2 text-sm">
                            GitHub:
                            <a
                                href="https://github.com/alyohara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-blue-400 hover:text-white"
                            >
                                https://github.com/alyohara
                            </a>
                        </p>
                        <p className="mt-4 text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} Angel Leonardo Bianco. Todos los derechos reservados.
                        </p>
                    </div>
                </footer>
            </div>

            {/* CSS for blinking cursor */}
            <style>
                {`
                    .blinking-cursor {
                        display: inline-block;
                        width: 10px;
                        height: 20px;
                        background-color: white;
                        margin-left: 5px;
                        animation: blink 1s step-start infinite;
                    }

                    @keyframes blink {
                        50% {
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </>
    );
}
