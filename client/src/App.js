import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IntroPage from './components/pages/IntroPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import BrowsePage from './components/pages/BrowsePage';
import AccountPage from './components/pages/AccountPage';
import BooksPage from './components/pages/BooksPage';
import BookPage from './components/pages/BookPage';
import AuthorsPage from './components/pages/AuthorsPage';

import HelpPage from './components/pages/HelpPage';
import AboutPage from './components/pages/AboutPage';
// import NotFoundPage from './components/pages/NotFoundPage';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import AuthorState from './context/author/AuthorState';
import BookState from './context/book/BookState';
// import AvatarState from './context/avatar/AvatarState';

import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

import { default as I18nProvider } from './i18n/provider';
import { LOCALES } from './i18n/locales';

const App = () => {
  let languageStoredInLocalStorage = localStorage.getItem('language');

  let [language] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : LOCALES.CZECH
  );

  return (
    <I18nProvider locale={language}>
      <AuthState>
        <AlertState>
          <AuthorState>
            <BookState>
              <Router>
                <Routes>
                  {/* Private routes */}
                  <Route element={<PrivateRoute />}>
                    {/* <AvatarState> */}
                    <Route path='/account/:name' element={<AccountPage />} />
                    {/* </AvatarState> */}
                    <Route
                      path='/browse/ebooks/:urlTitle'
                      element={<BookPage />}
                    />
                    <Route path='/browse/ebooks' element={<BooksPage />} />
                    <Route path='/browse/authors' element={<AuthorsPage />} />
                    <Route path='/browse' element={<BrowsePage />} />
                  </Route>
                  {/* Public routes */}
                  <Route path='/' element={<IntroPage />} />
                  <Route path='/signup' element={<SignUpPage />} />
                  <Route path='/signin' element={<SignInPage />} />
                  <Route path='/help' element={<HelpPage />} />
                  <Route path='/about' element={<AboutPage />} />

                  {/* Catch all */}
                  {/* <Route path='*' element={<NotFoundPage />} /> */}
                </Routes>
              </Router>
            </BookState>
          </AuthorState>
        </AlertState>
      </AuthState>
    </I18nProvider>
  );
};

export default App;
