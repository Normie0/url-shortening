const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url');

// Create short URL
router.post('/', urlController.createShortUrl);

// Get all URLs
router.get('/links', urlController.getAllUrls);  // Directly use getAllUrls

// Find and redirect to original URL using shortUrl

// Delete a single URL
router.delete('/', urlController.deleteUrl);

router.get('/analytics', urlController.analytics);
// Delete all URLs
router.delete('/all', urlController.deleteAllUrls);  // Route for deleting all URLs

// Route to fetch analytics (total clicks across all URLs)

// Route to fetch top clicked URLs
router.get('/analytics/top', urlController.getTopClickedUrls);

router.get('/:shortUrl', urlController.redirectToOriginalUrl);

module.exports = router;