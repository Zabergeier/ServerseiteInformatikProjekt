FROM node:20-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN test -f /app/public/build/manifest.json

FROM php:8.5.6-cli

# Install system dependencies
RUN apt-get update -y && apt-get install -y openssl zip unzip git

# Install Composer (PHP package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PostgreSQL client
RUN apt-get update && apt-get install -y libpq-dev

# Install PHP extensions for PostgreSQL
RUN docker-php-ext-install pdo pdo_pgsql 


# Set working directory
WORKDIR /app

# Copy application files to container
COPY ./ /app

# Kopiere gebaute Frontend-Assets vom Build
COPY --from=frontend-build /app/public/build ./public/build

# Install PHP dependencies
RUN composer install 

# Command to run the Laravel development server
CMD php artisan serve --host=0.0.0.0 --port=8000

# Expose port 8000
EXPOSE 8000
