import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="About Me">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <style>
                    {`
                        body {
                            font-family: 'Courier New', Courier, monospace;
                        }
                    `}
                </style>
            </Head>

            <div className="flex min-h-screen items-center justify-center bg-black">
                {/* Terminal Window */}
                <div className="w-full max-w-4xl border border-green-600 bg-black">
                    {/* Top Bar */}
                    <div className="w-full border-b border-green-600 bg-black px-4 py-2 text-sm font-bold text-green-400">
                        Bianco(R) Angel Leonardo
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                        <Link href={route('about')} className="text-green-400 hover:text-white">
                            [About]
                        </Link>
                        <Link href={route('projects')} className="text-green-400 hover:text-white">
                            [Projects]
                        </Link>
                        <Link href={route('blog')} className="text-green-400 hover:text-white">
                            [Blog]
                        </Link>
                        <Link href={route('contact')} className="text-green-400 hover:text-white">
                            [Contact]
                        </Link>
                    </nav>

                    {/* Main Content */}
                    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 font-mono text-sm leading-relaxed text-green-400">
                        <h1 className="mb-4 text-xl font-bold text-white">C:\\BIOGRAPHY&gt;</h1>

                        <img src="/imgs/perfil2.png" alt="Perfil" className="mb-6 h-28 w-28 border-2 border-green-400" />
                        <img src="/imgs/perfil2.png" alt="Perfil" className="mt-6 h-32 w-32 rounded-full border-4 border-green-400 shadow-lg" />
                        <p>
                            A passionate IT professional with a strong academic background, currently pursuing a Bachelor's degree in Systems
                            Engineering (anticipated completion soon) while working as a Software Analyst and Full Stack Developer.
                        </p>
                        <p className="mt-4 text-left" style={{ textAlign: 'left' }}>
                            At my current role, I tackle complex challenges and guide best practices aligned with quality metrics. I also help build
                            and implement custom solutions.
                        </p>
                        <p className="mt-4 text-left" style={{ textAlign: 'left' }}>
                            Since joining the team, we built a robust sector and a custom CRM system for streamlined workflows.
                        </p>
                        <p className="mt-4 text-left" style={{ textAlign: 'left' }}>
                            I'm constantly learning — from website development (
                            <a href="https://sosma.com.ar" className="text-green-300 underline hover:text-white">
                                sosma.com.ar
                            </a>
                            ) to QA and crypto projects. I develop Laravel applications for various organizations and consulting firms.
                        </p>
                        <p className="mt-4 text-left" style={{ textAlign: 'left' }}>
                            I also teach Data Structures at{' '}
                            <a href="https://unab.edu.ar" className="text-green-300 underline hover:text-white">
                                UNAB
                            </a>{' '}
                            and NTICS at{' '}
                            <a href="https://www.institutosuperiorfemeba.com/" className="text-green-300 underline hover:text-white">
                                Instituto Superior FEMEBA
                            </a>
                            .
                        </p>
                        <p className="mt-4 text-left" style={{ textAlign: 'left' }}>
                            Academic rigor + dev experience + teaching = well-rounded IT profile.<span className="blinking-cursor"></span>
                        </p>
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-green-600 bg-black px-6 py-4 text-center font-mono text-sm text-green-400">
                        <p className="font-bold text-white">Angel Leonardo Bianco</p>
                        <p className="mt-2">
                            Emails:
                            <a href="mailto:angel.leonardo.bianco@gmail.com" className="ml-1 text-green-300 underline hover:text-white">
                                angel.leonardo.bianco@gmail.com
                            </a>
                            ,{' '}
                            <a href="mailto:angelleonardobianco@outlook.com" className="text-green-300 underline hover:text-white">
                                angelleonardobianco@outlook.com
                            </a>
                            ,{' '}
                            <a href="mailto:angel.bianco@unab.edu.ar" className="text-green-300 underline hover:text-white">
                                angel.bianco@unab.edu.ar
                            </a>
                        </p>
                        <p className="mt-2">
                            LinkedIn:
                            <a
                                href="https://www.linkedin.com/in/angel-leonardo-bianco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-green-300 underline hover:text-white"
                            >
                                https://www.linkedin.com/in/angel-leonardo-bianco/
                            </a>
                        </p>
                        <p className="mt-2">
                            GitHub:
                            <a
                                href="https://github.com/alyohara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-green-300 underline hover:text-white"
                            >
                                https://github.com/alyohara
                            </a>
                        </p>
                        <p className="mt-4 text-xs text-green-600">&copy; {new Date().getFullYear()} Angel Leonardo Bianco</p>
                    </footer>
                </div>
            </div>

            {/* Blinking Cursor Style */}
            <style>
                {`
                    .blinking-cursor {
                        display: inline-block;
                        width: 10px;
                        height: 1rem;
                        background-color: white;
                        margin-left: 5px;
                        animation: blink 1s steps(1) infinite;
                    }

                    @keyframes blink {
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </>
    );
}
