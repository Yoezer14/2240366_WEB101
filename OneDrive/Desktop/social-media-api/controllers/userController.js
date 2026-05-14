const { users } = require('../utils/mockData');

// GET all users
exports.getUsers = (req, res) => {
  res.json({ success: true, data: users });
};

// GET single user
exports.getUser = (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ success: true, data: user });
};

// CREATE user
exports.createUser = (req, res) => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...req.body
  };

  users.push(newUser);

  res.status(201).json({ success: true, data: newUser });
};

// UPDATE user
exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[index] = { ...users[index], ...req.body };

  res.json({ success: true, data: users[index] });
};

// DELETE user
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(index, 1);

  res.json({ success: true });
};