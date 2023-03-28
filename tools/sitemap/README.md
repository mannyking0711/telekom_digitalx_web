# Telekom DIGITAL X Sitemap Generator


---

## Description
Generates Telekom DIGITAL X Sitemap by using crawler.

## Installation

`yarn install`
Install node modules

## Arguments
`--with-cron`
Generate Sitemap every day at 1:00 am

`--lang [lang]`
Sets language to crawl

Example (instant generate):

```
node index.js --lang de
```

Example with cron:

```
node index.js --with-cron --lang de

# or via yarn
yarn run sitemap-de
yarn run sitemap-en
```
