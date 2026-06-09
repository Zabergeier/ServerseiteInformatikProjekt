FROM node:20-alpine AS node_build
WORKDIR /app
COPY . .
RUN npm install && npm run vite:build

FROM php:8.1-fpm AS fpm
RUN apt-get update && apt-get install -y \
    git zip unzip curl libpng-dev libzip-dev zlib1g-dev libjpeg-dev libfreetype6-dev libonig-dev \
    && docker-php-ext-install exif gd zip pdo_mysql mbstring

WORKDIR /var/www/app
COPY . .
COPY --from=node_build /app/public /var/www/app/public
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader --no-interaction

EXPOSE 9000
CMD ["php-fpm"]