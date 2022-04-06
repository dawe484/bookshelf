import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../layout/Logo';

import AuthContext from '../../context/auth/authContext';

import translate from '../../i18n/translate.js';

import './Navbar.css';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, signOut } = authContext;

  let location = useLocation();
  // console.log(location);

  const onSignOut = () => {
    signOut();
  };

  // const [openNotifications, setOpenNotifications] = useState(false);
  // const [openProfile, setOpenProfile] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const changeNavbarBackgroundColor = () => {
      if (window.scrollY >= 60) setNavbar(true);
      else setNavbar(false);
    };

    window.addEventListener('scroll', changeNavbarBackgroundColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarBackgroundColor);
    };
  });

  // const handleBarClick = () => {
  //   document.getElementById('test').style.display = 'none';
  //   document.getElementById('footer').style.display = 'none';
  //   document.getElementById('mobile').style.display = 'block';
  // };

  const Menu = () => (
    <div className='our-navigation'>
      <ul className='our-primary-navigation'>
        <li className='our-navigation-item'>
          <Link to='/browse/ebooks' className=''>
            {translate('ebooks')}
          </Link>
        </li>
        <li className='our-navigation-item'>
          <Link to='/browse/authors' className=''>
            {translate('authors')}
          </Link>
        </li>
      </ul>
      <ul className='our-secondary-navigation'>
        <li className='our-navigation-item searchbox'>
          <Link to='' className='' aria-label='Hledat'>
            <span className='icon-search'>
              <i className='fas fa-search'></i>
            </span>
          </Link>
        </li>
        <li
          className='our-navigation-item notifications'
          // onMouseEnter={() => setOpenNotifications(true)}
          // onMouseLeave={() => setOpenNotifications(false)}
        >
          <Link to='' className='' aria-label='Oznámení'>
            <span className='icon-notification'>
              <i className='fas fa-bell'></i>
            </span>
            {/* <span className='notification-num'>4</span> */}
          </Link>
          {/* {openNotifications && (
            <div className='dropdown-notifications'>
              <i className='fas fa-caret-up'></i>
              <div className='notification-sub-menu'>
                <ul className='sub-menu-list'>
                  <li className='sub-menu-item'>
                    <div className='empty-notification'>
                      {translate('no_notifications')}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )} */}
        </li>
        {user && (
          <li
            className='our-navigation-item profile-item'
            // onMouseEnter={() => setOpenProfile(true)}
            // onMouseLeave={() => setOpenProfile(false)}
          >
            <Link
              to='/'
              className='profile'
              onClick={onSignOut}
              aria-label='Účet'
            >
              <img className='icon-user' src={user.userImage} alt='icon-user' />
              <span className='profile-name'>{user.name}</span>
            </Link>
            {/* <Link to='' className='profile-icon' aria-label='Účet'>
              <img className='icon-user' src={user.userImage} alt='icon-user' />
            </Link>
            <div className='profile-name'>{user.name}</div> */}
            {/* <div className='icon-angle-down'>
              <i className='fas fa-angle-down' id='1' />
            </div> */}
            {/* {openProfile && (
              <div className='dropdown-profile'>
                <i className='fas fa-caret-up'></i>
                <div className='profile-sub-menu'>
                  <ul className='sub-menu-list'>
                    <Link
                      to={{
                        pathname: `/account/${user.urlName}`,
                      }}
                    >
                      <li className='sub-menu-item'>{translate('account')}</li>
                    </Link>
                    <Link to='/' onClick={onSignOut}>
                      <li className='sub-menu-item'>{translate('signout')}</li>
                    </Link>
                  </ul>
                </div>
              </div>
            )} */}
          </li>
        )}
      </ul>
    </div>
  );

  const authLinks = (
    <header
      className={
        navbar ? 'nav-header navbar scrolled fixed' : 'nav-header navbar fixed'
      }
    >
      <div className='our-container navbar'>
        <Logo />
        <Menu />
        <div className='our-mobile-navigation'>
          {toggleMenu ? (
            <i
              className='fas fa-times'
              onClick={() => setToggleMenu(false)}
            ></i>
          ) : (
            <i className='fas fa-bars' onClick={() => setToggleMenu(true)}></i>
          )}
          {toggleMenu && (
            <div className='our-mobile-navbar'>
              <div className='our-mobile-navigation-container'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );

  const guestLinks = (
    <header className='nav-header navbar'>
      <div className='our-container'>
        <Logo />
        <Link
          to='/signin'
          className='auth-link danger-btn transparent-danger-btn'
        >
          {translate('signin')}
        </Link>
      </div>
    </header>
  );

  return isAuthenticated && location.pathname !== '/' ? authLinks : guestLinks;
};

export default Navbar;
