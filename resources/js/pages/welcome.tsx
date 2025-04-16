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
                    <p className="mt-4 text-sm text-green-300">
                        At my current role, I leverage my analytical skills to tackle complex challenges. I excel at dissecting problems for efficient
                        resolution, guiding colleagues on best practices aligned with standard quality metrics. My focus goes beyond just finding
                        solutions; I actively participate in developing and implementing them.
                    </p>
                    <p className="mt-4 text-sm text-green-300">
                        Since joining the team, we've not only built a robust sector but also spearheaded the development of a custom CRM system for
                        optimized workflows. This collaborative effort exemplifies my ability to translate theoretical knowledge into practical
                        applications.
                    </p>
                    <p className="mt-4 text-sm text-green-300">
                        Beyond my core responsibilities, I'm constantly seeking opportunities to expand my skillset. This includes website development
                        (projects like{' '}
                        <a href="https://sosma.com.ar" className="text-blue-400 underline hover:text-white">
                            sosma.com.ar
                        </a>
                        ) and participation in intricate QA and cryptocurrency projects for various companies. Currently, I'm honing my expertise by
                        developing applications using Laravel for various organizations and external consulting firms.
                    </p>
                    <p className="mt-4 text-sm text-green-300">
                        Additionally, I share my knowledge as a Professor of Data Structures at the{' '}
                        <a href="https://unab.edu.ar" className="text-blue-400 underline hover:text-white">
                            Universidad Nacional Guillermo Brown (UNAB)
                        </a>{' '}
                        and as a Professor of NTICS at{' '}
                        <a href="https://www.institutosuperiorfemeba.com/" className="text-blue-400 underline hover:text-white">
                            Instituto Superior FEMEBA
                        </a>
                        , fostering the next generation of IT professionals.
                    </p>
                    <p className="mt-4 text-sm text-green-300">
                        This combination of academic rigor, hands-on development experience, and a passion for teaching demonstrates my well-rounded
                        skillset and dedication to the IT field.<span className="blinking-cursor"></span>
                    </p>
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
