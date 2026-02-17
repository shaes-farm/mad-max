# Deployment Instructions for Mad Maxine Documentation Site

## Quick Start for CPanel/Apache Deployment

### What to Upload

Upload these directories to your web root (typically `public_html/` or `www/`):

```
web/              → Contents go to root (index.html, build-log.html, photos.html, css/, js/)
docs/             → Upload to docs/ subdirectory  
photos/before/    → Upload to photos/before/ subdirectory
```

### Final Directory Structure on Server

```
public_html/
├── index.html
├── build-log.html
├── photos.html
├── css/
│   └── style.css
├── js/
│   └── lazy-load.js
├── images/           (optional - if using processed images)
│   ├── webp/
│   └── thumbnails/
├── docs/
│   ├── Jeep_Comanche_Project_Brief.md
│   ├── project/
│   │   ├── 01_PROJECT_CHARTER.md
│   │   ├── 02_CURRENT_STATE_INVENTORY.md
│   │   ├── 03_MASTER_RESTORATION_PLAN.md
│   │   ├── 04_PARTS_TRACKER.md
│   │   ├── 05_WORK_LOG.md
│   │   ├── 06_TECHNICAL_REFERENCE.md
│   │   └── 07_BUDGET_TRACKER.md
│   └── guides/
│       ├── Phase_A_Renix_Harness_Cleanup_Guide.md
│       └── GM_TBI_Swap_Guide_Complete.md
└── photos/
    └── before/
        ├── frame-and-structure/
        ├── engine/
        ├── cab-interior/
        └── ... (all photo subdirectories)
```

## Optional: Image Processing

The site includes an image processing script that can generate optimized WebP images and thumbnails. This is **optional** - the site works fine with the original photos.

### To Process Images Locally Before Upload:

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Run the image processor:
   ```bash
   npm run process-images
   ```

3. Upload the generated `images/` directory to your web server

**Note**: Image processing requires the `sharp` npm package which has native dependencies. If you encounter issues, you can skip this step and use the original photos directly.

## Testing

After upload:
1. Visit `https://yourdomain.com/` - should show the dashboard
2. Click "Build Log" - should show the work journal
3. Click "Photo Journal" - should show the photo galleries
4. Test all documentation links

## Custom Domain Setup

If using a custom domain (e.g., mad-max.shaes.farm):
1. Point your domain's DNS to your hosting server
2. Update the Open Graph URLs in the HTML files (optional, for social media previews):
   - Find: `https://mad-max.shaes.farm/`
   - Replace with your actual domain

## Browser Caching (Optional)

For better performance, add this `.htaccess` file to your web root:

```apache
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
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

## Support

For more detailed information, see `web/README.md` in the repository.
