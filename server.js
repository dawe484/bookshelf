import express from 'express';

import connectDB from './config/db.js';

import authRoute from './routes/auth.js';
import authorsRoute from './routes/authors.js';
import avatarsRoute from './routes/avatars.js';
import booksRoute from './routes/books.js';
import usersRoute from './routes/users.js';

// Initialize App
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get(
  '/',
  (req, res) => res.send('<h1>Welcome to the ourBookcase API...</h1>')
  // res.json({
  //   msg: 'Welcome to the Bookcase API...',
  // })
);

// Define Routes
app.use('/api/auth', authRoute);
app.use('/api/authors', authorsRoute);
app.use('/api/avatars', avatarsRoute);
app.use('/api/books', booksRoute);
app.use('/api/users', usersRoute);
app.use((req, res) => res.status(404).send('<h1>Page not found</h1>'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
