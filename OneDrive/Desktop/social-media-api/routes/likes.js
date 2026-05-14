const express = require('express');
const router = express.Router();

const {
  getLikes,
  getLike,
  createLike,
  updateLike,
  deleteLike
} = require('../controllers/likeController');

router.get('/', getLikes);
router.get('/:id', getLike);
router.post('/', createLike);
router.put('/:id', updateLike);
router.delete('/:id', deleteLike);

module.exports = router;