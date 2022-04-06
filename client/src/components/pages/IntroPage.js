import React, { Fragment, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import translate from '../../i18n/translate.js';

import './IntroPage.css';

const IntroPage = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  useEffect(() => {
    // if (isAuthenticated) navigate('browse'); // Go back in navigation = reload page
    if (isAuthenticated) navigate(-1); // Go back in navigation = reload page

    // eslint-disable-next-line
  }, [isAuthenticated, navigate]);

  return (
    <Fragment>
      <Navbar />
      <div className='our-container-background'>
        <div className='our-card-text-title our-card-text'>
          <h1 className='our-card-text-h1'>{translate('card_text_h1_00')}</h1>
          <h2 className='our-card-text-h2'>{translate('card_text_h2_00')}</h2>
          <div className='our-card-button'>
            <Link to='/signup' className='danger-btn memberBtn'>
              {translate('card_membership')}
            </Link>
          </div>
        </div>
      </div>
      <div className='our-container'>
        <div className='our-card center'>
          <div className='our-card-container'>
            <div className='our-card-text'>
              <h1 className='our-card-text-h1'>
                {translate('card_text_h1_01')}
              </h1>
              <h2 className='our-card-text-h2 margin-botton-0'>
                {translate('card_text_h2_01')}
              </h2>
            </div>
            <div className='our-card-img'>
              <img src='img/pages/intro_section_cz_01.jpg' alt='' id='img_01' />
            </div>
          </div>
        </div>
        <div className='our-card center'>
          <div className='our-card-container reverse'>
            <div className='our-card-img'>
              <img src='img/pages/intro_section_cz_02.jpg' alt='' id='img_02' />
            </div>
            <div className='our-card-text flipped'>
              <h1 className='our-card-text-h1'>
                {translate('card_text_h1_02')}
              </h1>
              <h2 className='our-card-text-h2 margin-botton-0'>
                {translate('card_text_h2_02')}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default IntroPage;
