


const express = require('express');

const router = express.Router();


// routes
router.use('/', require('./bookmarks'));
router.use('/bookmarks', require('./bookmarks'));
router.use('/tags', require('./tags'));

module.exports = router;