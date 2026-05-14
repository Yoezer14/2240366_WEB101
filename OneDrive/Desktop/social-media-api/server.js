const express = require('express');
require('dotenv').config();

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');
const likes = require('./routes/likes');
const followers = require('./routes/followers');

const app = express();

app.use(express.json());

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/comments', comments);
app.use('/api/likes', likes);
app.use('/api/followers', followers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});