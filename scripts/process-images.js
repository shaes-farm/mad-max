#!/usr/bin/env node

/**
 * Image Processing Script for Mad Maxine Documentation Site
 * 
 * Processes photos from photos/before directory:
 * - Generates WebP versions for full-size images
 * - Creates JPEG thumbnails (300x300)
 * - Preserves original files
 * 
 * Usage: node scripts/process-images.js
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
    sourceDir: path.join(__dirname, '..', 'photos', 'before'),
    webpDir: path.join(__dirname, '..', 'web', 'images', 'webp'),
    thumbnailDir: path.join(__dirname, '..', 'web', 'images', 'thumbnails'),
    thumbnailSize: 300,
    webpQuality: 85,
    jpegQuality: 80,
    supportedFormats: ['.jpg', '.jpeg', '.png']
};

/**
 * Ensure directory exists
 */
async function ensureDir(dir) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch (error) {
        console.error(`Error creating directory ${dir}:`, error.message);
        throw error;
    }
}

/**
 * Get all image files recursively
 */
async function getAllImageFiles(dir, baseDir = dir) {
    const images = [];
    
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                const subImages = await getAllImageFiles(fullPath, baseDir);
                images.push(...subImages);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                if (config.supportedFormats.includes(ext)) {
                    const relativePath = path.relative(baseDir, fullPath);
                    images.push({
                        fullPath,
                        relativePath,
                        name: entry.name,
                        ext
                    });
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }
    
    return images;
}

/**
 * Process a single image
 */
async function processImage(image) {
    const { fullPath, relativePath, name } = image;
    
    // Create output paths
    const relativeDir = path.dirname(relativePath);
    const nameWithoutExt = path.parse(name).name;
    
    const webpOutDir = path.join(config.webpDir, relativeDir);
    const thumbnailOutDir = path.join(config.thumbnailDir, relativeDir);
    
    const webpPath = path.join(webpOutDir, `${nameWithoutExt}.webp`);
    const thumbnailPath = path.join(thumbnailOutDir, `${nameWithoutExt}_thumb.jpg`);
    
    try {
        // Ensure output directories exist
        await ensureDir(webpOutDir);
        await ensureDir(thumbnailOutDir);
        
        // Load image once
        const imageBuffer = await fs.readFile(fullPath);
        const sharpImage = sharp(imageBuffer);
        const metadata = await sharpImage.metadata();
        
        console.log(`Processing: ${relativePath} (${metadata.width}x${metadata.height})`);
        
        // Generate WebP version (preserve dimensions)
        await sharpImage
            .clone()
            .webp({ quality: config.webpQuality })
            .toFile(webpPath);
        console.log(`  ✓ WebP created: ${path.relative(process.cwd(), webpPath)}`);
        
        // Generate thumbnail (300x300, cover fit)
        await sharp(imageBuffer)
            .resize(config.thumbnailSize, config.thumbnailSize, {
                fit: 'cover',
                position: 'center'
            })
            .jpeg({ quality: config.jpegQuality })
            .toFile(thumbnailPath);
        console.log(`  ✓ Thumbnail created: ${path.relative(process.cwd(), thumbnailPath)}`);
        
        return { success: true, path: relativePath };
    } catch (error) {
        console.error(`  ✗ Error processing ${relativePath}:`, error.message);
        return { success: false, path: relativePath, error: error.message };
    }
}

/**
 * Main processing function
 */
async function main() {
    console.log('Mad Maxine Image Processing Script');
    console.log('===================================\n');
    
    console.log('Configuration:');
    console.log(`  Source: ${config.sourceDir}`);
    console.log(`  WebP Output: ${config.webpDir}`);
    console.log(`  Thumbnail Output: ${config.thumbnailDir}`);
    console.log(`  Thumbnail Size: ${config.thumbnailSize}x${config.thumbnailSize}`);
    console.log(`  WebP Quality: ${config.webpQuality}`);
    console.log(`  JPEG Quality: ${config.jpegQuality}\n`);
    
    // Check if source directory exists
    try {
        await fs.access(config.sourceDir);
    } catch (error) {
        console.error(`Error: Source directory does not exist: ${config.sourceDir}`);
        process.exit(1);
    }
    
    // Find all images
    console.log('Scanning for images...');
    const images = await getAllImageFiles(config.sourceDir);
    console.log(`Found ${images.length} images to process\n`);
    
    if (images.length === 0) {
        console.log('No images found to process.');
        return;
    }
    
    // Process all images
    const results = [];
    for (const image of images) {
        const result = await processImage(image);
        results.push(result);
        console.log(''); // Blank line between images
    }
    
    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log('\n===================================');
    console.log('Processing Complete');
    console.log('===================================');
    console.log(`Total images: ${images.length}`);
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);
    
    if (failed > 0) {
        console.log('\nFailed images:');
        results.filter(r => !r.success).forEach(r => {
            console.log(`  - ${r.path}: ${r.error}`);
        });
    }
    
    console.log('\nNote: Original images are preserved in photos/before/');
}

// Run the script
if (require.main === module) {
    main().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = { processImage, getAllImageFiles };
