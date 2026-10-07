<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => in_array($appearance ?? 'terminal', ['dark', 'terminal']), 'light' => ($appearance ?? 'terminal') === 'light', 'terminal' => ($appearance ?? 'terminal') === 'terminal'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="description" content="Angel Leonardo Bianco — Software Architect, Tech Lead, Full Stack Engineer and University Lecturer.">
    <link rel="icon" type="image/png" href="{{ asset('imgs/perfil-64.png') }}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Angel Leonardo Bianco — Software Architect &amp; Tech Lead">
    <meta property="og:description" content="Portfolio, projects and teaching material.">
    <meta property="og:image" content="{{ asset('imgs/perfil2.png') }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Angel Leonardo Bianco — Software Architect &amp; Tech Lead">
    <meta name="twitter:image" content="{{ asset('imgs/perfil2.png') }}">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "terminal" }}';
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDark = appearance === 'dark' || appearance === 'terminal' || (appearance === 'system' && prefersDark);

            document.documentElement.classList.toggle('dark', isDark);
            document.documentElement.classList.toggle('light', !isDark);
            document.documentElement.classList.toggle('terminal', appearance === 'terminal');
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: #eff1f5;
        }

        html.dark,
        html.terminal {
            background-color: #11111b;
        }
    </style>

    <title inertia>{{ config('app.name', 'Bianco') }}</title>


    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;display=swap" rel="stylesheet">
    <!-- Fuente retro pixelada -->
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap" rel="stylesheet">

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
