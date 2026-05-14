const { comments } = require('../utils/mockData');

exports.getComments = (req, res) => {
  res.json({ success: true, data: comments });
};

exports.getComment = (req, res) => {
  const comment = comments.find(c => c.id === req.params.id);

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  res.json({ success: true, data: comment });
};

exports.createComment = (req, res) => {
  const newComment = {
    id: (comments.length + 1).toString(),
    ...req.body
  };

  comments.push(newComment);

  res.status(201).json({ success: true, data: newComment });
};

exports.updateComment = (req, res) => {
  const index = comments.findIndex(c => c.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  comments[index] = { ...comments[index], ...req.body };

  res.json({ success: true, data: comments[index] });
};

exports.deleteComment = (req, res) => {
  const index = comments.findIndex(c => c.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  comments.splice(index, 1);

  res.json({ success: true });
};