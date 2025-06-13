const express = require('express');
const router = express.Router();
const { uploadVideo, handleUpload } = require('../controllers/uploadController');

router.post('/video', uploadVideo, handleUpload);

module.exports = router;
