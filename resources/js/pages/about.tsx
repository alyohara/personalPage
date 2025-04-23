import { Head, Link } from '@inertiajs/react';
import { Briefcase, Code, DocumentText, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function About() {
    const [language, setLanguage] = useState('en');

    const fallbackLanguage = 'en';
    const content = {
        en: {
            title: 'About Me',
            biography: 'About Me',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            skills: 'Skills',
            experience: 'Experience',
            education: 'Education',
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
            options: 'Selecciona una opción:',
            about: 'Acerca de mí',
            projects: 'Proyectos',
            blog: 'Blog',
            contact: 'Contacto',
            skills: 'Habilidades',
            experience: 'Experiencia',
            education: 'Educación',
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

    const currentContent = content[language] || content[fallbackLanguage];

    const handleLanguageChange = (lang) => {
        setLanguage(content[lang] ? lang : fallbackLanguage);
    };

    return (
        <>
            <Head title={currentContent.title}>
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
                <div className="w-full max-w-4xl rounded-2xl border border-green-600 bg-black shadow-lg">
                    <div className="flex w-full items-center justify-between border-b border-green-600 bg-black px-4 py-2 text-sm font-bold text-green-400">
                        <span>Bianco(R) Angel Leonardo</span>
                        <div className="flex gap-1">
                            <button className="text-green-400 hover:text-white" onClick={() => handleLanguageChange('en')}>
                                [En]
                            </button>
                            <button className="text-green-400 hover:text-white" onClick={() => handleLanguageChange('es')}>
                                [Sp]
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                        <Link
                            href={route('home')}
                            className={`text-green-400 hover:text-white ${route().current('home') ? 'font-bold text-white' : ''}`}
                        >
                            [Home]
                        </Link>
                        <Link
                            href={route('about')}
                            className={`text-green-400 hover:text-white ${route().current('about') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].about}]
                        </Link>
                        <Link
                            href={route('projects')}
                            className={`text-green-400 hover:text-white ${route().current('projects') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].projects}]
                        </Link>
                        <Link
                            href={route('blog')}
                            className={`text-green-400 hover:text-white ${route().current('blog') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].blog}]
                        </Link>
                        <Link
                            href={route('contact')}
                            className={`text-green-400 hover:text-white ${route().current('contact') ? 'font-bold text-white' : ''}`}
                        >
                            [{content[language].contact}]
                        </Link>
                    </nav>

                    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 font-mono text-sm leading-relaxed text-green-400">
                        <h1 className="mb-4 text-xl font-bold text-white">C:\{currentContent.biography}&gt;</h1>
                        {currentContent.description.map((paragraph, index) => (
                            <p key={index} className="mt-4 text-left">
                                {paragraph}
                                {index === currentContent.description.length - 1 && <span className="blinking-cursor"></span>}
                            </p>
                        ))}
                    </div>

                    <div className="border-t border-green-600 p-6 text-green-400">
                        <h2 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                            <Code size={20} /> {currentContent.skills}
                        </h2>
                        {/*<p>Laravel, JavaScript, React, MySQL, RESTful APIs, Git, HTML, CSS, C++, Python</p>*/}
                        <ul className="mt-4 list-disc pl-6">
                            <li>
                                <strong>{language === 'en' ? 'Programming Languages' : 'Lenguajes de Programación'}:</strong> PHP (Laravel, Zend
                                Framework, Drupal), C++, Java, Python, Spoon
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Databases' : 'Bases de Datos'}:</strong> MySQL, PostgreSQL, MongoDB, SQLite, Microsoft
                                SQL Server, Redis
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Web Development' : 'Desarrollo Web'}:</strong> HTML5, CSS3, JavaScript (jQuery, React),
                                PHP, RESTful APIs, AJAX
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Frameworks & CMS' : 'Frameworks y CMS'}:</strong> Laravel, CodeIgniter, Drupal, Moodle,
                                WordPress
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'DevOps & Tools' : 'DevOps y Herramientas'}:</strong> Git, Docker, Jenkins, CI/CD,
                                FLUIGsoftware
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Cloud Services' : 'Servicios en la Nube'}:</strong> AWS (EC2, S3), Azure, Google Cloud
                                Platform (GCP)
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Version Control' : 'Control de Versiones'}:</strong> Git, GitHub, GitLab, Bitbucket
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Testing & Debugging Tools' : 'Herramientas de Pruebas y Depuración'}:</strong> PHPUnit,
                                Selenium, Postman, Chrome DevTools
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'Other' : 'Otros'}:</strong> Leaflet (interactive maps), API integration, Agile/Scrum
                                methodologies, Software Documentation <span className="blinking-cursor"></span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-green-600 p-6 text-green-400">
                        <h2 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                            <Briefcase size={20} /> {currentContent.experience}
                        </h2>
                        <ul className="list-disc pl-6">
                            <li>
                                {language === 'sp' ? 'Desarrollador y Analista de Software (Freelance)' : 'Software Developer & Analyst (Freelance)'}
                            </li>

                            <li>
                                {language === 'sp'
                                    ? 'Desarrollador Full Stack – SOSMA / Ministerio de Desarrollo Productivo / Withmenetworks SL'
                                    : 'Full Stack Developer – SOSMA / Ministerio de Desarrollo Productivo / Withmenetworks SL'}
                            </li>
                            <li>{language === 'sp' ? 'Analista Desarrollador – FEMEBA' : 'Developer Analyst – FEMEBA'}</li>
                            <li>
                                {language === 'sp'
                                    ? 'Desarrollador FullStack Laravel– Universidad Nacional Guillermo Brown'
                                    : 'FullStack Laravel Developer – National University Guillermo Brown'}
                            </li>
                            <li>
                                {language === 'sp' ? 'Líder de equipo y responsable de soporte – FEMEBA' : 'Team Leader & Help Desk Manager – FEMEBA'}
                            </li>
                            <li>{language === 'sp' ? 'Analista de soporte y testing – FEMEBA' : 'Help Desk Analyst & Tester – FEMEBA'}</li>
                            <li>
                                {language === 'sp'
                                    ? 'Profesor Adjunto y Ayudante (Algotimos y Estructuras de Datos) – UNaB'
                                    : 'Adjunct Professor & Teaching Fellow (Algorithms & Data Structures)– UNaB'}
                            </li>
                            <li>{language === 'sp' ? 'Profesor (Informática & NTICS) – ISF' : 'Professor (Informatics & NTICS) – ISF'}</li>
                            <li>
                                {language === 'sp' ? 'Desarrollador Web Freelance y QA Engineer' : 'Freelance Web Developer & QA Engineer'}
                                <span className="blinking-cursor"></span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-green-600 p-6 text-green-400">
                        <h2 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                            <GraduationCap size={20} /> {currentContent.education}
                        </h2>
                        <ul className="list-disc pl-6">
                            <li>{language === 'en' ? 'Bachelor’s in Systems – UNLP (in progress)' : 'Licenciatura en Sistemas – UNLP (en curso)'}</li>
                            <li>{language === 'en' ? 'Analist University Programer Degree– UNLP' : 'Analista Programador Universitario – UNLP'}</li>
                            <li>
                                {language === 'en'
                                    ? 'Professional Certifications in Web Development & QA'
                                    : 'Certificaciones Profesionales en Desarrollo Web y QA'}
                            </li>
                        </ul>
                    </div>

                    {/* Resume Section */}
                    <div className="border-t border-green-600 p-6 text-green-400">
                        <h2 className="mb-2 text-lg font-bold text-white">
                            <DocumentText size={20} /> {language === 'en' ? 'Resume' : 'Currículum'}
                        </h2>
                        <p className="mb-4">
                            {language === 'en'
                                ? 'You can download my resume by clicking the button below:'
                                : 'Puedes descargar mi currículum haciendo clic en el botón a continuación:'}
                        </p>
                        <a href="/docs/resume.pdf" download className="inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500">
                            {language === 'en' ? 'Download Resume' : 'Descargar Currículum'}
                        </a>
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
