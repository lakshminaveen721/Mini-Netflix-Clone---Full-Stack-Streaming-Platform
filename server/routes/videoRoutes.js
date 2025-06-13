const express = require('express');
const router = express.Router();
const { getVideos, addVideo, incrementViews } = require('../controllers/videoController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', getVideos);
router.post('/', verifyToken, addVideo);
router.post('/view/:id', incrementViews);

module.exports = router;
