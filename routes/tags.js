
const express = require('express');

const router = express.Router();
const api = require('../controllers/tags');
router.get('/getTags', api.getTags);
router.post('/createTag', api.createTag);
router.delete('/deleteTag/:tagId',api.deleteTag);

module.exports = router;