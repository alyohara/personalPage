import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [activeSentence, setActiveSentence] = useState(0);

    const sentences = [
        "A passionate IT professional with a strong academic background, I'm currently pursuing a Bachelor's degree in Systems Engineering (anticipated completion soon) while simultaneously working as a Software Analyst and Full Stack Developer.",
        'At my current role, I leverage my analytical skills to tackle complex challenges. I excel at dissecting problems for efficient resolution, guiding colleagues on best practices aligned with standard quality metrics.',
        "Since joining the team, we've not only built a robust sector but also spearheaded the development of a custom CRM system for optimized workflows.",
        "Beyond my core responsibilities, I'm constantly seeking opportunities to expand my skillset. This includes website development (projects like sosma.com.ar) and participation in intricate QA and cryptocurrency projects for various companies.",
        'Additionally, I share my knowledge as a Professor of Data Structures at the Universidad Nacional Guillermo Brown (UNAB) and as a Professor of NTICS at Instituto Superior FEMEBA, fostering the next generation of IT professionals.',
    ];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });

            // Determine which sentence the cursor is near
            const sentenceHeight = window.innerHeight / sentences.length;
            const index = Math.min(Math.floor(e.clientY / sentenceHeight), sentences.length - 1);
            setActiveSentence(index);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [sentences.length]);

    return (
        <>
            <Head title="About Me">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="relative min-h-screen bg-black font-mono text-green-500">
                {/* Navigation */}
                <nav className="flex justify-center gap-8 py-6 text-lg">
                    <Link href={route('about')} className="hover:text-white">
                        __About__
                    </Link>
                    <Link href={route('projects')} className="hover:text-white">
                        __Projects__
                    </Link>
                    <Link href={route('blog')} className="hover:text-white">
                        __Blog__
                    </Link>
                    <Link href={route('contact')} className="hover:text-white">
                        __Contact__
                    </Link>
                </nav>

                {/* Main Content */}
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                    {sentences.map((sentence, index) => (
                        <p key={index} className={`mt-4 text-lg ${index === activeSentence ? 'text-white' : 'text-green-500'}`}>
                            {sentence}
                            {index === activeSentence && <span className="blinking-cursor">|</span>}
                        </p>
                    ))}
                </div>
            </div>

            {/* CSS for blinking cursor */}
            <style>
                {`
                    .blinking-cursor {
                        display: inline-block;
                        margin-left: 5px;
                        width: 10px;
                        height: 20px;
                        background-color: white;
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
