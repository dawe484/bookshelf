import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

import translate from '../../i18n/translate';

// import logo from '../../images/logo.svg';

import './Logo.css';

const Logo = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  return (
    <span className='our-logo'>
      {isAuthenticated ? (
        // <Link to='/browse'>
        //   <img src={logo} alt='logo' />
        // </Link>
        <Link to='/browse'>{translate('logo', { myLogo: 'bookshelf' })}</Link>
      ) : (
        <Link to='/'>{translate('logo', { myLogo: 'bookshelf' })}</Link>
      )}
      <span className='screen-reader-text'>
        {translate('logo', { myLogo: 'bookshelf' })}
      </span>
    </span>
  );
};

export default Logo;
