const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
  const videos = await Video.find().sort({ uploadDate: -1 });
  res.json(videos);
};

exports.addVideo = async (req, res) => {
  const { title, url, tags } = req.body;
  try {
    const video = await Video.create({
      title,
      url,
      tags,
      uploadedBy: req.user.id
    });
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.incrementViews = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true });
    res.json(video);
  } catch (err) {
    res.status(404).json({ error: 'Video not found' });
  }
};
