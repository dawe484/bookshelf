import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

import setAuthToken from '../../utils/setAuthToken';

import translate from '../../i18n/translate';
import { LOCALES } from '../../i18n/locales';

import './Footer.css';

const Footer = () => {
  let languageStoredInLocalStorage = localStorage.getItem('language');

  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : LOCALES.CZECH
  );

  const handleSetLanguage = (language) => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  };

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { removeAlert } = alertContext;

  const today = new Date();

  useEffect(() => {
    removeAlert();

    if (localStorage.token) {
      setAuthToken(localStorage.token);
      authContext.loadUser();
    }

    // eslint-disable-next-line
  }, []);

  let selected, optionsContainer;

  return (
    <footer className='our-footer' id='footer'>
      <div className='our-footer-container'>
        <div className='our-footer-row'>
          <Link to='/help' className='linkBtn upper'>
            {translate('help')}
          </Link>
          <Link to='/about' className='linkBtn upper'>
            {translate('about')}
          </Link>
          <Link to='/' className='linkBtn upper'>
            {translate('jobs')}
          </Link>
          <Link to='/' className='linkBtn upper'>
            {translate('press')}
          </Link>
          <Link to='/' className='linkBtn upper'>
            {translate('contact_us')}
          </Link>
        </div>
        <div className='line-breaker'></div>
        <div className='our-footer-row'>
          <Link to='/' className='linkBtn small'>
            {translate('terms_of_use')}
          </Link>
          <Link to='/' className='linkBtn small'>
            {translate('privacy')}
          </Link>
          <Link to='/' className='linkBtn small'>
            {translate('privacy_cookies')}
          </Link>
          <Link to='/' className='linkBtn small'>
            {translate('sitemap')}
          </Link>
        </div>
        <div className='line-breaker'></div>
        <div className='our-footer-row our-socials'>
          <div className='our-footer-social'>
            <Link to='/'>
              <i className='fab fa-facebook-f' aria-hidden='true' />
            </Link>
            <Link to='/'>
              <i className='fab fa-twitter' aria-hidden='true' />
            </Link>
            <Link to='/'>
              <i className='fab fa-youtube' aria-hidden='true' />
            </Link>
            <Link to='/'>
              <i className='fab fa-instagram' aria-hidden='true' />
            </Link>
          </div>
          <p className='our-footer-legal'>
            &copy; {today.getFullYear()} bookshelf. {translate('legal')}
          </p>
        </div>
        <div className='our-footer-row end'>
          <div className='select-box'>
            <div className='options-container'>
              <div
                className='option'
                onClick={() => {
                  window.location.reload();
                  selected.innerHTML =
                    document.getElementById('czech').innerHTML;
                  handleSetLanguage(document.getElementById('czech').htmlFor);
                  if (window.location.pathname === '/')
                    document.getElementById('img_01').src =
                      'img/pages/intro_section_cz_01.jpg';
                  optionsContainer.classList.remove('active');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <input
                  type='radio'
                  className='radio'
                  id='cs-CZ'
                  value='Čeština'
                  name='category'
                />
                <label htmlFor='cs-CZ' id='czech'>
                  Čeština
                </label>
              </div>
              <div
                className='option'
                onClick={() => {
                  window.location.reload();
                  selected.innerHTML =
                    document.getElementById('english').innerHTML;
                  handleSetLanguage(document.getElementById('english').htmlFor);
                  if (window.location.pathname === '/')
                    document.getElementById('img_01').src =
                      'img/pages/intro_section_en_01.jpg';
                  optionsContainer.classList.remove('active');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <input
                  type='radio'
                  className='radio'
                  id='en-US'
                  value='English'
                  name='category'
                />
                <label htmlFor='en-US' id='english'>
                  English
                </label>
              </div>
            </div>
            <div
              className='selected'
              id='selected'
              onClick={() => {
                selected = document.querySelector('.selected');
                optionsContainer = document.querySelector('.options-container');
                optionsContainer.classList.toggle('active');
              }}
            >
              {language === 'cs-CZ'
                ? 'Čeština'
                : language === 'en-US'
                ? 'English'
                : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function storeLanguageInLocalStorage(language) {
  localStorage.setItem('language', language);
}

export default Footer;
