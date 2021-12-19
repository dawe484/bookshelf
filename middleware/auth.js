import jwt from 'jsonwebtoken';
import config from 'config';

export default (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied.' });
    // return res.status(401).json({ msg: 'Authorization denied.' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
    // res.status(401).json({ msg: 'Authorization denied.' });
  }
};
