const fs = require('fs')
const cron = require("node-cron")
const SitemapGenerator = require('sitemap-generator')
const simpleLogger = require('simple-node-logger')

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const lang = argv.lang || 'de'
const logUrl = './logs'


// CHECK LOG URL AND IF NOT EXIST, CREATE NEW ONE
if (!fs.existsSync(logUrl)) {
  fs.mkdirSync(logUrl)
  fs.writeFileSync(logUrl + `/${lang}.log`, '')
}

// CREATE SIMPLE LOGGER
const log = simpleLogger.createSimpleLogger(logUrl + `/${lang}.log`)

log.info(`${lang} Daemon Started`)

// CREATE SITEMAP GENERATOR
const generator = SitemapGenerator(`https://www.digital-x.eu/${lang}`, {
  filepath: `../../public/sitemap${lang === 'en' ? '-en' : ''}.xml`,
  maxEntriesPerFile: 50000,
  stripQuerystring: true
})

let cnt = 0
let error = 0

generator.on("add", (url) => {
  cnt++;
  log.info(url)
})
generator.on("error", (err) => { error++; })
generator.on('done', () => { log.info(`crawled urls: ${cnt}, bad urls: ${error}`)})

const run = () => {
  const date = new Date()
  log.info(`Sitemap generating started on ${date.getMonth() + 1}/${date.getMinutes()}/${date.getFullYear()}`)
  generator.start()
}

// CREATE SCHEDULER EVERY 1:00 AM
if(!argv.withCron)
  run()
else {
  cron.schedule('0 1 * * *', () => { run() })
}
