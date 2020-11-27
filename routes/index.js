


const express = require('express');

const router = express.Router();

router.use('/bookmarks', require('./bookmarks'));
router.use('/tags', require('./tags'));

module.exports = router;