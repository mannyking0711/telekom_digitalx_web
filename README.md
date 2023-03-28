# Telekom DigitalX Website

## Tech-Stack

- PHP 8.1
- Composer 2
- Node 16
- npm 8
- yarn 1.22


## Install

```shell
git clone https://git-codecommit.eu-central-1.amazonaws.com/v1/repos/telekom_digitalx_web
cd telekom_digitalx_web
composer install
yarn install
cp .env.example .env
php artisan key:generate
```


## Setup

The `.env` file stores the basic configurations such as project name, host, content url and authentication secrets.


## Development

```shell
# Start Vue.js frontend
yarn watch-ssr

# Start Laravel
php artisan serve --host=localhost
```
