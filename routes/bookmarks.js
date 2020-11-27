

const express = require('express');
const router = express.Router();

const api = require('../controllers/bookmark');

router.get('/',api.welcome);
router.get('/getBookmarks', api.getBookmarks);
router.post('/createBookmark', api.createBookmark);
router.patch('/addTagToBookmark/:bookmarkId', api.addTagToBookmark)
router.delete('/removeTagFromBookmark/:bookmarkId', api.removeTagFromBookmark);
router.delete('/deleteBookmark/:bookmarkId',api.deleteBookmark);

module.exports = router;