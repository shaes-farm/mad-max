# Mad Maxine Documentation Site

This is a semantic HTML documentation site for the 1986 Jeep Comanche MJ restoration project. The site provides organized access to project documentation, build logs, and photo galleries.

## Site Structure

```
web/
├── index.html          # Dashboard/Homepage
├── build-log.html      # Build log and work journal
├── photos.html         # Photo journal with galleries
├── css/
│   └── style.css       # Main stylesheet
└── js/
    └── lazy-load.js    # Image lazy loading
```

## Features

- **Semantic HTML5** markup for accessibility and SEO
- **Responsive design** that works on desktop, tablet, and mobile
- **SEO optimized** with complete meta tags for social media and search engines
- **Image processing** utilities for WebP conversion and thumbnail generation
- **Lazy loading** for efficient image loading
- **"Mad Max" aesthetic** - rugged, industrial design matching project theme

## Local Development

### Prerequisites

- Node.js (v14 or higher)

### Setup

1. Install dependencies:
```bash
npm install
```

2. (Optional) Process images to generate WebP and thumbnails:
```bash
npm run process-images
```

3. Start local development server:
```bash
npm start
```

The site will be available at `http://localhost:3000/`

## Image Processing

The image processing script converts photos to web-optimized formats:

- **WebP**: Full-size images converted to WebP format (85% quality)
- **Thumbnails**: 300x300 JPEG thumbnails (80% quality)
- **Originals preserved**: All original photos remain in `photos/` directory

### Running Image Processing

```bash
npm run process-images
```

This will:
1. Scan `photos/before/` for all `.jpg`, `.jpeg`, and `.png` files
2. Generate WebP versions in `web/images/webp/`
3. Generate JPEG thumbnails in `web/images/thumbnails/`
4. Preserve directory structure from source

## Deployment to CPanel/Apache

### Manual Upload via FTP/File Manager

1. Build the site (if using any build process):
   - The site is static HTML, no build required
   
2. Upload these directories to your web root (typically `public_html/`):
   ```
   web/              # Upload contents to web root
   docs/             # Upload to docs/ subdirectory
   photos/           # Upload to photos/ subdirectory (or use generated webp/thumbnails)
   ```

3. Directory structure on server should be:
   ```
   public_html/
   ├── index.html
   ├── build-log.html
   ├── photos.html
   ├── css/
   ├── js/
   ├── images/
   ├── docs/
   └── photos/
   ```

### .htaccess Configuration (Optional)

Create a `.htaccess` file in your web root for better performance:

```apache
# Enable mod_rewrite
RewriteEngine On

# Force HTTPS (optional)
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Serve WebP images when supported
<IfModule mod_rewrite.c>
  RewriteCond %{HTTP_ACCEPT} image/webp
  RewriteCond %{REQUEST_FILENAME} (.*)\.(jpe?g|png)$
  RewriteCond %1.webp -f
  RewriteRule ^(.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1,L]
</IfModule>

<IfModule mod_headers.c>
  Header append Vary Accept env=REDIRECT_accept
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Deployment Checklist

- [ ] Run image processing script locally
- [ ] Test site locally with `npm start`
- [ ] Upload web/, docs/, and photos/ directories to server
- [ ] Upload .htaccess (if using)
- [ ] Test all pages on live server
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Verify all internal links work
- [ ] Check meta tags with social media preview tools

## File Preservation

**Important**: The image processing script preserves all original files. Original photos remain in the `photos/` directory and are never modified. Generated WebP and thumbnail files are created in separate directories and are excluded from git via `.gitignore`.

## Documentation Links

The site links to existing markdown documentation:
- Project Brief
- Project Charter
- Current State Inventory
- Master Restoration Plan
- Parts Tracker
- Work Log
- Technical Reference
- Budget Tracker
- Technical Guides

These markdown files can be viewed directly in browsers (with appropriate mime types) or rendered via GitHub when stored in the repository.

## Browser Support

- Modern browsers with CSS Grid and IntersectionObserver support
- Fallback for older browsers: images load immediately without lazy loading
- Responsive design tested on:
  - Desktop (Chrome, Firefox, Safari, Edge)
  - Mobile (iOS Safari, Chrome Mobile)
  - Tablet

## Future Enhancements

Potential additions as the project progresses:
- Gallery lightbox for full-screen image viewing
- Image comparison slider for before/after photos
- Dynamic gallery generation from photo directory
- Search functionality for documentation
- Progress tracking visualizations
- Timeline view of restoration phases

## License

See [LICENSE](../LICENSE) file for project licensing information.

## Contact

SHAES Farm - Mad Maxine 1986 Jeep Comanche Restoration Project
