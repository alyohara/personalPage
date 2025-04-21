import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function About() {
    const [language, setLanguage] = useState('en'); // Estado para el idioma actual

    // Contenido en inglés y español
    const content = {
        en: {
            title: 'About Me',
            biography: 'About Me',
            about: 'About Me',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
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
                    {/* Navigation */}
                    <nav className="flex justify-center gap-6 border-b border-green-600 bg-black py-2 text-sm">
                        <Link href={route('about')} className="text-green-400 hover:text-white">
                            [{content[language].about}]
                        </Link>
                        <Link href={route('projects')} className="text-green-400 hover:text-white">
                            [{content[language].projects}]
                        </Link>
                        <Link href={route('blog')} className="text-green-400 hover:text-white">
                            [{content[language].blog}]
                        </Link>
                        <Link href={route('contact')} className="text-green-400 hover:text-white">
                            [{content[language].contact}]
                        </Link>
                    </nav>

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
                    {/* Skills Section */}
                    <div className="mx-auto mt-8 w-full max-w-4xl px-6 py-8 text-green-400">
                        <h2 className="text-2xl font-bold text-white">{language === 'en' ? 'Skills' : 'Habilidades'}</h2>
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
                                methodologies, Software Documentation
                            </li>
                        </ul>
                    </div>

                    {/* Experience Section */}
                    <div className="mx-auto mt-8 w-full max-w-4xl px-6 py-8 text-green-400">
                        <h2 className="text-2xl font-bold text-white">{language === 'en' ? 'Experience' : 'Experiencia'}</h2>
                        <div className="mt-4">
                            <h3 className="text-lg font-bold text-green-300">
                                {language === 'en' ? 'Software Developer & Analyst (Freelance)' : 'Desarrollador y Analista de Software (Freelance)'}
                            </h3>
                            <p className="text-sm">{language === 'en' ? '01/2017 - Present' : '01/2017 - Presente'}</p>
                            <ul className="mt-2 list-disc pl-6">
                                <li>
                                    {language === 'en'
                                        ? 'Developed robust full-stack applications using frameworks like Laravel for client-facing applications.'
                                        : 'Desarrollé aplicaciones full-stack robustas utilizando frameworks como Laravel para aplicaciones orientadas al cliente.'}
                                </li>
                                <li>
                                    {language === 'en'
                                        ? 'Led full-stack development of client websites and platforms, ensuring scalability and functionality using PHP, MySQL, and Laravel.'
                                        : 'Lideré el desarrollo full-stack de sitios web y plataformas de clientes, asegurando escalabilidad y funcionalidad utilizando PHP, MySQL y Laravel.'}
                                </li>
                                <li>
                                    {language === 'en'
                                        ? 'Collaborated with teams to implement cross-border digital signature solutions using RESTful APIs and third-party integrations.'
                                        : 'Colaboré con equipos para implementar soluciones de firma digital transfronterizas utilizando APIs RESTful e integraciones de terceros.'}
                                </li>
                            </ul>
                        </div>
                        {/* Add other experience sections similarly */}
                    </div>

                    {/* Education Section */}
                    <div className="mx-auto mt-8 w-full max-w-4xl px-6 py-8 text-green-400">
                        <h2 className="text-2xl font-bold text-white">{language === 'en' ? 'Education' : 'Educación'}</h2>
                        <ul className="mt-4 list-disc pl-6">
                            <li>
                                <strong>{language === 'en' ? 'National University of La Plata' : 'Universidad Nacional de La Plata'}</strong> |{' '}
                                {language === 'en' ? '2004 - Present (anticipated completion soon)' : '2004 - Presente (próxima finalización)'}
                                <p>{language === 'en' ? 'Bachelor of Science in Systems Engineering' : 'Licenciatura en Ingeniería en Sistemas'}</p>
                            </li>
                            <li>
                                <strong>{language === 'en' ? 'National University of La Plata' : 'Universidad Nacional de La Plata'}</strong> |{' '}
                                {language === 'en' ? '2004 - 2018' : '2004 - 2018'}
                                <p>
                                    {language === 'en'
                                        ? 'Computer Science Analyst and Programmer'
                                        : 'Analista y Programador en Ciencias de la Computación'}
                                </p>
                            </li>
                        </ul>
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
