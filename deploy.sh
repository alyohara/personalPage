#!/bin/bash
cd /var/www/bianco
git pull origin master

# Clear and cache routes, views, and configurations
php artisan route:cache
php artisan view:clear
php artisan view:cache
php artisan config:cache
php artisan cache:clear

# Optimize the application
php artisan optimize

# Run database migrations (if needed)
# php artisan migrate --force

# Set correct permissions (if needed)
# sudo chown -R www-data:www-data /var/www/bianco

echo "Deployment script executed successfully." 
