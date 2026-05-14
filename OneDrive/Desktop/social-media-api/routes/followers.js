const express = require('express');
const router = express.Router();

const {
  getFollowers,
  getFollower,
  createFollower,
  updateFollower,
  deleteFollower
} = require('../controllers/followerController');

router.get('/', getFollowers);
router.get('/:id', getFollower);
router.post('/', createFollower);
router.put('/:id', updateFollower);
router.delete('/:id', deleteFollower);

module.exports = router;