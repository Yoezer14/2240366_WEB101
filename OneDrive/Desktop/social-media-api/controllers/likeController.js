const { likes } = require('../utils/mockData');

exports.getLikes = (req, res) => {
  res.json({ success: true, data: likes });
};

exports.getLike = (req, res) => {
  const like = likes.find(l => l.id === req.params.id);

  if (!like) {
    return res.status(404).json({ message: 'Like not found' });
  }

  res.json({ success: true, data: like });
};

exports.createLike = (req, res) => {
  const newLike = {
    id: (likes.length + 1).toString(),
    ...req.body
  };

  likes.push(newLike);

  res.status(201).json({ success: true, data: newLike });
};

exports.updateLike = (req, res) => {
  const index = likes.findIndex(l => l.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Like not found' });
  }

  likes[index] = { ...likes[index], ...req.body };

  res.json({ success: true, data: likes[index] });
};

exports.deleteLike = (req, res) => {
  const index = likes.findIndex(l => l.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Like not found' });
  }

  likes.splice(index, 1);

  res.json({ success: true });
};