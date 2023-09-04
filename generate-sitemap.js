const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

const hostname = 'https://localhost:3000';
const stream = new SitemapStream({ hostname })
const fs = require('fs');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
  fs.writeFileSync('./public/sitemap.xml', data.toString())
)