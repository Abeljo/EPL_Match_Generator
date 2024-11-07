const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const jsonFilePath = path.join(__dirname, 'data' ,'schedule.json');
const htmlFilePath = path.join(__dirname, 'public', 'index.html');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/api/matches') {
        // Serve the JSON data
        fs.readFile(jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the JSON file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else if (req.url === '/' || req.url === '/index.html') {
        // Serve the HTML file
        fs.readFile(htmlFilePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('HTML file not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // Handle unknown routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
