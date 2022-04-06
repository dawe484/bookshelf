import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth.js'; // for protecting routes

const router = express.Router();

import User from '../models/User.js';

// @route     GET api/auth
// @desc      Get logged user
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-_id -password -date -updatedAt -__v')
      .populate({ path: 'reading', select: '-date -updatedAt -__v' })
      .populate({ path: 'goingToRead', select: '-date -updatedAt -__v' })
      .populate({
        path: 'read',
        select: '-date -updatedAt -__v',
        populate: {
          path: 'author',
          // model: 'Author',
        },
      })
      .populate({ path: 'favouriteBooks', select: '-date -updatedAt -__v' })
      .populate({ path: 'bookshelf', select: '-date -updatedAt -__v' })
      .populate({ path: 'wantToBorrow', select: '-date -updatedAt -__v' })
      .sort({ date: -1 });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/auth
// @desc      Auth user and get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    console.log('Sign In: ', req.body);

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Wrong email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      // Wrong password
      if (!isMatch) {
        return res.status(400).json({ msg: 'Wrong email or password' });
      }

      const payload = {
        user: {
          id: user.id,
          urlName: user.urlName,
          name: user.name,
          role: user.role,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: '3d',
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }
);

export default router;
