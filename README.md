# Personal Website and Teaching Operations Platform

Production-ready Laravel + Inertia + React application used as my personal website, technical portfolio, and teaching operations dashboard.

## Overview

This project combines a public-facing professional website with private operational tools used in academic contexts.

Public features include:

- Portfolio pages (Home, About, Projects, Contact)
- Blog listing and post detail by slug
- Attendance submission form for students
- Contact/message submission

Private (authenticated) features include:

- Dashboard with attendance KPIs
- Attendance records view and CSV export
- Message inbox and detail view
- Blog post management (create, edit, publish, unpublish)

## Key Highlights

- Built with Laravel 12 + Inertia + React for a modern fullstack architecture
- Uses SSR-capable frontend setup with Vite
- Includes Google OAuth flow and standard auth-protected routes
- Implements practical teaching workflows: attendance tracking + reporting

## Tech Stack

- Backend: Laravel 12, PHP 8.2+
- Frontend: React 19, TypeScript, Inertia.js, Tailwind CSS 4, Radix UI
- Database: MySQL/MariaDB (SQLite supported for local setup)
- Tooling: Vite, ESLint, Prettier, Pest

## Main Route Groups

- Public pages: /, /about, /projects, /contact
- Blog: /blog, /blog/{slug}
- Attendance: /attendance (GET + POST)
- Authenticated dashboard: /dashboard and /dashboard/*
- Google OAuth: /auth/google, /auth/google/callback

## Local Development

### 1) Requirements

- PHP 8.2+
- Composer 2+
- Node.js 20+
- npm
- MySQL or MariaDB (or SQLite for local testing)

### 2) Install dependencies

```bash
composer install
npm install
```

### 3) Configure environment

```bash
cp .env.example .env
php artisan key:generate
```

Then update your database and app values in .env.

### 4) Prepare database

```bash
php artisan migrate
```

Optional:

```bash
php artisan db:seed
```

### 5) Run development environment

```bash
composer run dev
```

This starts:

- Laravel app server
- queue listener
- log tailing
- Vite dev server

## Frontend Scripts

- npm run dev: start Vite dev server
- npm run build: production build
- npm run build:ssr: build app + SSR bundle
- npm run lint: lint and fix
- npm run format: format resources with Prettier

## Testing

```bash
php artisan test
```

## Deployment Notes

The repository includes a deploy helper script at deploy.sh.

Typical production workflow:

1. Pull latest changes
2. Install/update dependencies
3. Build frontend assets
4. Run migrations if required
5. Cache routes/config/views
6. Restart process manager / PHP-FPM as needed

## Project Structure (high level)

- app/: Laravel application logic and controllers
- resources/js/: React/Inertia frontend app
- resources/views/: Blade templates and server-rendered views
- routes/: web, auth, settings, and API routes
- tests/: test suite
- public/: static/public assets

## License

MIT (see composer metadata)
