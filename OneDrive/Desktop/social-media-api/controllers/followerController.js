const { followers } = require('../utils/mockData');

exports.getFollowers = (req, res) => {
  res.json({ success: true, data: followers });
};

exports.getFollower = (req, res) => {
  const follower = followers.find(f => f.id === req.params.id);

  if (!follower) {
    return res.status(404).json({ message: 'Follower not found' });
  }

  res.json({ success: true, data: follower });
};

exports.createFollower = (req, res) => {
  const newFollower = {
    id: (followers.length + 1).toString(),
    ...req.body
  };

  followers.push(newFollower);

  res.status(201).json({ success: true, data: newFollower });
};

exports.updateFollower = (req, res) => {
  const index = followers.findIndex(f => f.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Follower not found' });
  }

  followers[index] = { ...followers[index], ...req.body };

  res.json({ success: true, data: followers[index] });
};

exports.deleteFollower = (req, res) => {
  const index = followers.findIndex(f => f.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Follower not found' });
  }

  followers.splice(index, 1);

  res.json({ success: true });
};