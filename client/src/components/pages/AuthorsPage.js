import React, { Fragment, useContext, useEffect } from 'react';

import AuthorContext from '../../context/author/authorContext';

import AuthorThumbnail from '../layout/authors/AuthorThumbnail';

import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import translate from '../../i18n/translate';

// import { authorNationality } from './enums/authorNationality';
// import { portraitLicense } from './enums/portraitLicense';

import './AuthorsPage.css';

const AuthorsPage = () => {
  const authorContext = useContext(AuthorContext);
  // const authContext = useContext(AuthContext);
  // const alertContext = useContext(AlertContext);

  const {
    authors,
    filtered,
    getAuthors,
    loading,
    clearAuthor,
    clearAuthorsFilter,
    error,
    // clearAuthorErrors,
  } = authorContext;

  // // const { isAuthenticated, user } = authContext;
  // // const { setAlert } = alertContext;

  useEffect(() => {
    clearAuthor();
    getAuthors();
    clearAuthorsFilter();

    // if (error === 'Author already exists') {
    //   setAlert(error, 'danger');
    //   toggleAlertModal();
    //   clearAuthorErrors();
    // }

    // eslint-disable-next-line
  }, [error]);

  return (
    <Fragment>
      <Navbar />
      <main className='our-main-container our-container'>
        <div className='list-container'>
          <div className='list-row'>
            <div className='list-title'>
              {/* <i className='icon fas fa-pencil-alt' aria-hidden='true' /> */}
              {/* <h1 data-text='Authors'>Authors</h1> */}
              <h1>{translate('authors')}</h1>
            </div>
            {/* {authors !== null && !loading ? (
            <div className='search-pos'>
     
            </div>
          ) : null} */}
          </div>
          {authors !== null && !loading ? (
            <div className='list-items'>
              {(filtered || authors).map((author) => (
                <AuthorThumbnail key={author._id} author={author} />
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AuthorsPage;
