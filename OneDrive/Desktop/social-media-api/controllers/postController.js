const { posts } = require('../utils/mockData');

// GET all posts
exports.getPosts = (req, res) => {
  res.json({ success: true, data: posts });
};

// GET single post
exports.getPost = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json({ success: true, data: post });
};

// CREATE post
exports.createPost = (req, res) => {
  const newPost = {
    id: (posts.length + 1).toString(),
    ...req.body
  };

  posts.push(newPost);

  res.status(201).json({ success: true, data: newPost });
};

// UPDATE post
exports.updatePost = (req, res) => {
  const index = posts.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  posts[index] = { ...posts[index], ...req.body };

  res.json({ success: true, data: posts[index] });
};

// DELETE post
exports.deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  posts.splice(index, 1);

  res.json({ success: true });
};