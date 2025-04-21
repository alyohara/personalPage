import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function About() {
    const [language, setLanguage] = useState('en'); // Estado para el idioma actual

    // Contenido en inglés y español
    const content = {
        en: {
            title: 'About Me',
            biography: 'About Me',
            description: [
                "I'm a passionate IT professional with a strong academic background and extensive experience in software development, systems analysis, and university-level teaching.",
                "I'm currently completing a Bachelor's degree in Systems Engineering at the National University of La Plata, while working as a Software Analyst, Full Stack Developer, and Adjunct Professor at the National University Guillermo Brown.",
                'I specialize in building robust web applications, both front-end and back-end, using technologies such as Laravel, JavaScript, MySQL, and RESTful APIs.',
                'In my current role, I combine analytical skills with a collaborative approach to solve complex challenges and design scalable solutions.',
                'One of my key achievements includes leading the development of a custom CRM system that significantly improved workflow efficiency in a healthcare organization.',
                'In addition to my main role, I actively participate in freelance projects involving web development, QA, and cryptocurrency platforms.',
                "I've contributed to projects like sosma.com.ar, and I’m currently working with various consulting firms and organizations to develop tailored solutions using modern technologies.",
                'As an educator, I enjoy sharing my experience and passion for programming with future IT professionals.',
                'I teach Data Structures, encouraging algorithmic thinking and mastery of languages like C++ and Python.',
                'This blend of academic rigor, hands-on experience, and a passion for teaching defines my profile: committed, versatile, and always looking for new challenges in the tech world.',
            ],
        },
        es: {
            title: 'Sobre mí',
            biography: 'Sobre mí',
            description: [
                'Soy un profesional de IT apasionado, con una sólida formación académica y una amplia experiencia en desarrollo de software, análisis de sistemas y docencia universitaria.',
                'Actualmente me encuentro finalizando la carrera de Ingeniería en Sistemas en la Universidad Nacional de La Plata, mientras trabajo como Analista de Software, Desarrollador Full Stack y Profesor Adjunto en la Universidad Nacional Guillermo Brown.',
                'Me especializo en el desarrollo de aplicaciones web robustas, tanto en el frontend como en el backend, utilizando tecnologías como Laravel, JavaScript, MySQL y APIs REST.',
                'En mi rol actual, combino habilidades analíticas con un enfoque colaborativo para resolver problemas complejos y diseñar soluciones escalables.',
                'Entre mis logros se encuentra el liderazgo en el desarrollo de un CRM personalizado que optimizó los flujos de trabajo en una organización de salud.',
                'Además de mi trabajo principal, participo en proyectos freelance de desarrollo web, QA y criptomonedas.',
                'He contribuido a plataformas como sosma.com.ar, entre otras, y actualmente colaboro con consultoras y organizaciones externas, desarrollando soluciones a medida con tecnologías modernas.',
                'Como docente, tengo la oportunidad de compartir mi experiencia y pasión por la programación con nuevas generaciones de profesionales.',
                'Enseño Estructuras de Datos, promoviendo el pensamiento algorítmico y el dominio de lenguajes como C++ y Python.',
                'Esta combinación de rigor académico, experiencia práctica y vocación por la enseñanza define mi perfil: comprometido, versátil y siempre en búsqueda de nuevos desafíos en el mundo de la tecnología.',
            ],
        },
    };

    return (
        <>
            <Head title={content[language].title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="/imgs/perfil2.png" />
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
                    <div className="flex w-full items-center justify-between border-b border-green-600 bg-black px-4 py-2 text-sm font-bold text-green-400">
                        <span>Bianco(R) Angel Leonardo</span>
                        <div className="flex gap-1">
                            <button className="text-green-400 hover:text-white" onClick={() => setLanguage('en')}>
                                [En]
                            </button>
                            <button className="text-green-400 hover:text-white" onClick={() => setLanguage('es')}>
                                [Sp]
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 font-mono text-sm leading-relaxed text-green-400">
                        <h1 className="mb-4 text-xl font-bold text-white">C:\\{content[language].biography}&gt;</h1>

                        {content[language].description.map((paragraph, index) => (
                            <p key={index} className="mt-4 text-left" style={{ textAlign: 'left' }}>
                                {paragraph}
                            </p>
                        ))}
                        <span className="blinking-cursor"></span>
                    </div>
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
