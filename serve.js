const http = require('http');
const fs = require('fs');
const path = require('path');

const types = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const file = path.join(__dirname, url === '/' ? 'preview.html' : url);
  const ext = path.extname(file);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); }
    else { res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' }); res.end(data); }
  });
}).listen(8080);
