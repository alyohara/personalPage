import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Ship
        const ship = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: 20,
            angle: 0,
            color: 'lime',
            speed: 4,
        };

        // Bullets
        const bullets: { x: number; y: number; angle: number }[] = [];
        const bulletSpeed = 7;

        // Asteroids
        const asteroids: { x: number; y: number; size: number; dx: number; dy: number; color: string }[] = [];
        const asteroidCount = 10;
        const asteroidSize = 30;

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

        // Mouse move
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            setMouse({ x: mouseX, y: mouseY });
            ship.angle = Math.atan2(mouseY - ship.y, mouseX - ship.x);
        };

        const handleClick = () => {
            bullets.push({
                x: ship.x,
                y: ship.y,
                angle: ship.angle,
            });
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);

        // Draw ship
        const drawShip = () => {
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
        };

        // Draw bullets
        const drawBullets = () => {
            for (let i = bullets.length - 1; i >= 0; i--) {
                const bullet = bullets[i];
                bullet.x += Math.cos(bullet.angle) * bulletSpeed;
                bullet.y += Math.sin(bullet.angle) * bulletSpeed;

                if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
                    bullets.splice(i, 1);
                    continue;
                }

                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        // Draw asteroids
        const drawAsteroids = () => {
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
        };

        const detectCollisions = () => {
            for (let i = bullets.length - 1; i >= 0; i--) {
                const bullet = bullets[i];
                for (let j = asteroids.length - 1; j >= 0; j--) {
                    const asteroid = asteroids[j];
                    const dist = Math.hypot(bullet.x - asteroid.x, bullet.y - asteroid.y);
                    if (dist < asteroid.size) {
                        bullets.splice(i, 1);
                        asteroids.splice(j, 1);
                        break;
                    }
                }
            }
        };

        // Update loop
        const update = () => {
            // Move ship slowly toward mouse (optional)
            ship.x += (mouse.x - ship.x) * 0.05;
            ship.y += (mouse.y - ship.y) * 0.05;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawShip();
            drawBullets();
            drawAsteroids();
            detectCollisions();
            requestAnimationFrame(update);
        };

        update();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <Head title="Asteroids Canvas">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="relative min-h-screen bg-black font-mono text-green-500">
                {/* Background canvas */}
                <canvas ref={canvasRef} className="pointer-events-none fixed top-0 left-0 -z-10 h-full w-full" />

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

                <div className="flex h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-white">Welcome to my Page!</h1>
                    <p className="mt-2 text-lg text-green-500">Explore more about me, my projects, and my blog.</p>
                </div>
            </div>
        </>
    );
}

// Disable global layout if needed:
// Welcome.layout = null;
