import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

export default function Welcome() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configurar tamaño del canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Nave
        const ship = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: 20,
            angle: 0,
            color: 'green',
        };

        // Disparos
        const bullets: { x: number; y: number; angle: number }[] = [];
        const bulletSpeed = 5;

        // Asteroides
        const asteroids: { x: number; y: number; size: number; dx: number; dy: number; color: string }[] = [];
        const asteroidCount = 10;
        const asteroidSize = 40;

        for (let i = 0; i < asteroidCount; i++) {
            asteroids.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: asteroidSize,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2,
                color: 'gray',
            });
        }

        // Eventos del mouse
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            ship.angle = Math.atan2(mouseY - ship.y, mouseX - ship.x);
        });

        canvas.addEventListener('click', () => {
            bullets.push({
                x: ship.x,
                y: ship.y,
                angle: ship.angle,
            });
        });

        // Dibujar nave
        function drawShip() {
            ctx.save();
            ctx.translate(ship.x, ship.y);
            ctx.rotate(ship.angle);
            ctx.fillStyle = ship.color;
            ctx.beginPath();
            ctx.moveTo(ship.size, 0);
            ctx.lineTo(-ship.size, ship.size / 2);
            ctx.lineTo(-ship.size, -ship.size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        // Dibujar disparos
        function drawBullets() {
            bullets.forEach((bullet, index) => {
                bullet.x += Math.cos(bullet.angle) * bulletSpeed;
                bullet.y += Math.sin(bullet.angle) * bulletSpeed;

                if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
                    bullets.splice(index, 1);
                }

                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        // Dibujar asteroides
        function drawAsteroids() {
            asteroids.forEach((asteroid) => {
                asteroid.x += asteroid.dx;
                asteroid.y += asteroid.dy;

                if (asteroid.x < 0 || asteroid.x > canvas.width) asteroid.dx *= -1;
                if (asteroid.y < 0 || asteroid.y > canvas.height) asteroid.dy *= -1;

                ctx.fillStyle = asteroid.color;
                ctx.beginPath();
                ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        // Detectar colisiones
        function detectCollisions() {
            bullets.forEach((bullet, bIndex) => {
                asteroids.forEach((asteroid, aIndex) => {
                    const dist = Math.hypot(bullet.x - asteroid.x, bullet.y - asteroid.y);
                    if (dist < asteroid.size) {
                        asteroids.splice(aIndex, 1);
                        bullets.splice(bIndex, 1);
                    }
                });
            });
        }

        // Actualizar juego
        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawShip();
            drawBullets();
            drawAsteroids();
            detectCollisions();
            requestAnimationFrame(update);
        }

        update();

        // Limpiar al desmontar
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    return (
        <>
            <Head title="My CV">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="relative flex min-h-screen flex-col bg-black p-6 font-mono text-green-500">
                {/* Canvas para el juego */}
                <canvas ref={canvasRef} className="absolute top-0 left-0 -z-10 h-full w-full"></canvas>

                {/* Enlaces de navegación estilo terminal */}
                <nav className="mb-6 flex justify-center gap-8 text-lg">
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

                {/* Contenido principal */}
                <div className="flex flex-col items-center lg:justify-center lg:p-8">
                    <header className="mb-6 w-full max-w-[335px] text-center lg:max-w-4xl">
                        <h1 className="text-3xl font-bold text-white">Welcome to my Page!</h1>
                        <p className="mt-2 text-lg text-green-500">Explore more about me, my projects, and my blog.</p>
                    </header>
                </div>
            </div>
        </>
    );
}
