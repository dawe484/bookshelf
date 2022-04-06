import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

// import BookSliderItem from '../books/BookSliderItem';

// eslint-disable-next-line
import AccountPageManage from '../pages/AccountPageManage';
// eslint-disable-next-line
import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
// import Footer from '../layout/Footer';

import translate from '../../i18n/translate';

import './AccountPage.css';

const AccountPage = (props) => {
  useEffect(() => {
    if (!localStorage.token) props.history.push('/');

    // eslint-disable-next-line
  }, [props.history]);

  const authContext = useContext(AuthContext);

  const { user, loading } = authContext;

  const language = localStorage.getItem('language');

  const formatDate = (date) => {
    // const monthNames = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July',
    //   'August',
    //   'September',
    //   'October',
    //   'November',
    //   'December',
    // ];

    if (date.length > 10) date = date.substr(0, 10);

    const arr = date.split('-');

    if (arr[2].charAt(0) === '0') arr[2] = arr[2].charAt(1);
    if (arr[1].charAt(0) === '0') arr[1] = arr[1].charAt(1);

    return `${arr[2]}. ${arr[1]}. ${arr[0]}`;
  };

  const rowSocialsSection = (siteLink, iconPath) => {
    return (
      <li>
        <a href={siteLink} target='_blank' rel='noopener noreferrer'>
          <div className='social-icon'>
            <i className={iconPath}></i>
          </div>
        </a>
      </li>
    );
  };

  const rowSections = [
    translate('recently_read_ebooks'),
    translate('going_to_read'),
    translate('read_ebooks'),
    translate('favourite_ebooks'),
    translate('e_bookshelf'),
    translate('want_to_borrow'),
  ];

  const commonSection = (section, array) => {
    return (
      <div className='our-card-row margin-bottom-2'>
        <div className='our-card card-row-title'>
          <h2 className='our-account-card-title'>
            {section} ({array.length})
          </h2>
        </div>
        {/* <div className='our-account-card-content'>
          {array.length !== null && !loading
            ? array.map((book) => <BookSliderItem key={book._id} book={book} />)
            : null}
        </div> */}
      </div>
    );
  };

  const readingSection =
    user !== null && !loading
      ? commonSection(rowSections[0], user.reading)
      : null;

  const goingToReadSection =
    user !== null && !loading
      ? commonSection(rowSections[1], user.goingToRead)
      : null;

  const readSection =
    user !== null && !loading ? commonSection(rowSections[2], user.read) : null;

  const favouriteBooksSection =
    user !== null && !loading
      ? commonSection(rowSections[3], user.favouriteBooks)
      : null;

  const eBookcaseSection =
    user !== null && !loading
      ? commonSection(rowSections[4], user.eBookcase)
      : null;

  const wantToBorrowSection =
    user !== null && !loading
      ? commonSection(rowSections[5], user.wantToBorrow)
      : null;

  const [sectionState, setSectionState] = useState({
    section: readingSection,
  });

  const changeSection = (newSection) =>
    setSectionState({ section: newSection });

  const getAllNameSections = () => {
    document.querySelectorAll('.sec').forEach((element) => {
      element.style.textDecoration = 'none';
    });
  };

  const handleSectionClick = (e) => {
    e.preventDefault();
    // console.log(e.target.getAttribute('data-number'));
    getAllNameSections();
    e.target.style.textDecoration = 'underline';
    switch (e.target.getAttribute('data-number')) {
      case '0':
        changeSection(readingSection);
        break;
      case '1':
        changeSection(goingToReadSection);
        break;
      case '2':
        changeSection(readSection);
        break;
      case '3':
        changeSection(favouriteBooksSection);
        break;
      case '4':
        changeSection(eBookcaseSection);
        break;
      case '5':
        changeSection(wantToBorrowSection);
        break;
      default:
        break;
    }
  };

  if (user !== null && !loading)
    if (sectionState.section === null)
      setSectionState({ section: readingSection });

  return (
    <Fragment>
      {/* {props.match.params.name === 'manage' ? ( */}
        {/* <AccountPageManage user={user} /> */}
      {/* ) : user !== null && !loading ? ( */}
        {/* <div className='our-main-container'> */}
          <Navbar />
          <div className='our-main-container our-container'>
            <div className='our-row-title'>
              <Link to='' title='Edit'>
                <h1>{user.name}</h1>
                <i className='fas fa-edit margin-left-1'></i>
              </Link>
              <div className='socials'>
                <ul>
                  {user.facebook &&
                    rowSocialsSection(user.facebook, 'fab fa-facebook-square')}
                  {user.instagram &&
                    rowSocialsSection(user.instagram, 'fab fa-instagram')}
                  {user.twitter &&
                    rowSocialsSection(user.twitter, 'fab fa-twitter-square')}
                </ul>
              </div>
            </div>
            <section className='info'>
              <div className='account-top-section'>
                <section className='profile-section'>
                  <div className='profile-avatar'>
                    <Link
                      to={{
                        pathname: `/account/manage`,
                        userState: `${user.urlName}`,
                      }}
                      title='Změnit'
                    >
                      <img src={user.userImage} alt='' />
                      <i className='fas fa-edit'></i>
                    </Link>
                  </div>
                  <div className='user-info'>
                    <div className='user-header'>
                      {user.realName && <h1>{user.realName}</h1>}
                      {user.birthdate && language === 'cs-CZ' ? (
                        <h1>&nbsp;({formatDate(user.birthdate)})</h1>
                      ) : (
                        <h1>&nbsp;({user.birthdate})</h1>
                      )}
                    </div>
                    <div className='user-status'>
                      {translate('active_since')}{' '}
                      {language === 'cs-CZ'
                        ? formatDate(user.createdAt)
                        : user.createdAt.substr(0, 10)}
                    </div>
                  </div>
                </section>
              </div>
              <div className='account-bottom-section'>
                <div className='bottom-section-title'>
                  <ul>
                    <li className='link'>
                      <div className='name' onClick={handleSectionClick}>
                        <span
                          data-text={translate('recently_read')}
                          data-number='0'
                          className='sec'
                          style={{ textDecoration: 'underline' }}
                        >
                          {translate('recently_read')}
                        </span>
                      </div>
                    </li>
                    <li className='link'>
                      <div className='name' onClick={handleSectionClick}>
                        <span
                          data-text={translate('going_to_read')}
                          data-number='1'
                          className='sec'
                        >
                          {translate('going_to_read')}
                        </span>
                      </div>
                    </li>
                    <li className='link'>
                      <div className='name' onClick={handleSectionClick}>
                        <span
                          data-text={translate('read_ebooks')}
                          data-number='2'
                          className='sec'
                        >
                          {translate('read_ebooks')}
                        </span>
                      </div>
                    </li>
                    <li className='link'>
                      <div className='name' onClick={handleSectionClick}>
                        <span
                          data-text={translate('favourite_ebooks')}
                          data-number='3'
                          className='sec'
                        >
                          {translate('favourite_ebooks')}
                        </span>
                      </div>
                    </li>
                    <li className='link'>
                      <div className='name' onClick={handleSectionClick}>
                        <span
                          data-text={translate('e_bookshelf')}
                          data-number='4'
                          className='sec'
                        >
                          {translate('e_bookshelf')}
                        </span>
                      </div>
                    </li>
                    <li className='link'>
                      <div className='name' onClick={handleSectionClick}>
                        <span
                          data-text={translate('want_to_borrow')}
                          data-number='5'
                          className='sec'
                        >
                          {translate('want_to_borrow')}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='user-books-carousel'>
                  {sectionState.section}
                </div>
              </div>
            </section>
          </div>
        {/* </div> */}
      {/* ) : ( */}
        {/* <Spinner /> */}
      {/* )} */}
      {/* {props.match.params.name !== 'manage' ? (
        <Footer
        // language={language}
        // handleSetLanguage={(language) => {
        //   setLanguage(language);
        //   storeLanguageInLocalStorage(language);
        // }}
        />
      ) : null} */}
    </Fragment>
  );
};

export default AccountPage;
