#!/usr/bin/env node

/**
 * Simple Local Development Server
 * Serves the static HTML site from the web directory
 * 
 * Usage: node scripts/serve.js [port]
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.argv[2] || 3000;
const WEB_ROOT = path.join(__dirname, '..', 'web');
const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const PHOTOS_ROOT = path.join(__dirname, '..', 'photos');

// MIME types
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.md': 'text/markdown',
    '.txt': 'text/plain',
};

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream';
}

function serveFile(res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        
        const mimeType = getMimeType(filePath);
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    let requestPath = req.url;
    
    // Remove query string
    const queryIndex = requestPath.indexOf('?');
    if (queryIndex !== -1) {
        requestPath = requestPath.substring(0, queryIndex);
    }
    
    // Default to index.html
    if (requestPath === '/') {
        requestPath = '/index.html';
    }
    
    console.log(`${new Date().toISOString()} - ${req.method} ${requestPath}`);
    
    // Determine file location
    let filePath;
    
    if (requestPath.startsWith('/docs/')) {
        // Serve from docs directory
        filePath = path.join(DOCS_ROOT, requestPath.substring(6));
    } else if (requestPath.startsWith('/photos/')) {
        // Serve from photos directory
        filePath = path.join(PHOTOS_ROOT, requestPath.substring(8));
    } else {
        // Serve from web directory
        filePath = path.join(WEB_ROOT, requestPath);
    }
    
    // Security: prevent directory traversal
    const resolvedPath = path.resolve(filePath);
    const isInWebRoot = resolvedPath.startsWith(path.resolve(WEB_ROOT));
    const isInDocsRoot = resolvedPath.startsWith(path.resolve(DOCS_ROOT));
    const isInPhotosRoot = resolvedPath.startsWith(path.resolve(PHOTOS_ROOT));
    
    if (!isInWebRoot && !isInDocsRoot && !isInPhotosRoot) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }
    
    // Check if file exists
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        
        if (stats.isDirectory()) {
            // Try to serve index.html from directory
            const indexPath = path.join(filePath, 'index.html');
            fs.stat(indexPath, (err, indexStats) => {
                if (err || !indexStats.isFile()) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else {
                    serveFile(res, indexPath);
                }
            });
        } else {
            serveFile(res, filePath);
        }
    });
});

server.listen(PORT, () => {
    console.log('===========================================');
    console.log('Mad Maxine Documentation Server');
    console.log('===========================================');
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Serving files from:`);
    console.log(`  - Web: ${WEB_ROOT}`);
    console.log(`  - Docs: ${DOCS_ROOT}`);
    console.log(`  - Photos: ${PHOTOS_ROOT}`);
    console.log('\nPress Ctrl+C to stop');
    console.log('===========================================\n');
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
    console.log('\nShutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
