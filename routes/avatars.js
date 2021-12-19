import express from 'express';

const router = express.Router();

import Avatar from '../models/Avatar.js';

// @route     GET api/avatars
// @desc      Get all avatars in DB
// @access    Public
router.get('/', async (req, res) => {
  try {
    const avatars = await Avatar.find({})
      .select('-updatedAt -__v')
      .sort({ date: -1 });

    res.json(avatars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
