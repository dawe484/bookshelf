import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth.js'; // for protecting routes

const router = express.Router();

import User from '../models/User.js';

function urlAddressName(name) {
  return (name = name
    .replace(/ /g, '-')
    .replace(/:/g, '-')
    .replace(/ě/gi, 'e')
    .replace(/š/gi, 's')
    .replace(/č/gi, 'c')
    .replace(/ř/gi, 'r')
    .replace(/ž/gi, 'z')
    .replace(/ý/gi, 'y')
    .replace(/á/gi, 'a')
    .replace(/í/gi, 'i')
    .replace(/é/gi, 'e')
    .replace(/ú/gi, 'u')
    .replace(/ů/gi, 'u')
    .replace(/ň/gi, 'n')
    .replace(/ď/gi, 'd')
    .replace(/ť/gi, 't')
    .replace(/ø/g, 'o')
    .toLowerCase());
}

// @route     POST api/users
// @desc      Register a User
// @access    Public
router.post(
  '/',
  [
    check('username', 'Please enter an username between 3 and 32 characters.')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email address.').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ name: username }); // same as name: name => same name in ES6
      let userEmail = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      } else if (userEmail) {
        return res
          .status(400)
          .json({ msg: 'User with this email address already exists' });
      } else {
        const urlName = urlAddressName(username);

        user = new User({
          urlName,
          name: username,
          email,
          password,
        });

        console.log('Sign Up: ', req.body);
      }

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/users/:username
// @desc      Update the User
// @access    Private
router.put('/:name', auth, async (req, res) => {
  const {
    name,
    email,
    password,
    role,
    date,
    userImage,
    realName,
    birthdate,
    facebook,
    instagram,
    twitter,
    statistics,
    justReading,
    alreadyRead,
    favouriteBooks,
    favouriteAuthors,
    eBookshelf,
    wantToRead,
  } = req.body;

  // Build user object
  const userFields = {};

  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (password) userFields.password = password;
  if (role) userFields.role = role;
  if (date) userFields.date = date;
  if (userImage) userFields.userImage = userImage;
  if (realName) userFields.realName = realName;
  if (birthdate) userFields.birthdate = birthdate;
  if (facebook) userFields.facebook = facebook;
  if (instagram) userFields.instagram = instagram;
  if (twitter) userFields.twitter = twitter;
  if (statistics) userFields.statistics = statistics;
  if (justReading) userFields.justReading = justReading;
  if (alreadyRead) userFields.alreadyRead = alreadyRead;
  if (favouriteBooks) userFields.favouriteBooks = favouriteBooks;
  if (favouriteAuthors) userFields.favouriteAuthors = favouriteAuthors;
  if (eBookshelf) userFields.eBookshelf = eBookshelf;
  if (wantToRead) userFields.wantToRead = wantToRead;

  console.log(req.params.name);

  try {
    let user = await User.findOne({
      name: req.params.name,
    });

    if (!user) return res.status(404).json({ msg: 'User not found.' });

    // Only authorized user can update user data (do it on client side ??)
    user = await User.findOneAndUpdate(
      { name: req.params.name },
      { $set: userFields },
      { new: true }
    );

    await user.save();

    console.log('Server: User updated!');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/users
// @desc      Get all users from DB
// @access    Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
