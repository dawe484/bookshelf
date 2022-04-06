import React, { Fragment } from 'react';

import Logo from '../layout/Logo';
import Footer from '../layout/Footer';

import translate from '../../i18n/translate';

import './AboutPage.css';


const AboutPage = () => {
  return (
    <Fragment>
      <div className='nav-header navbar'>
        <div className='our-container'>
          <Logo />
        </div>
      </div>
      <div className='our-card center'>
        <h1>{translate('ap_title')}</h1>
        <div className=''>{translate('ap_p1')}</div>
        <div className=''>
          <strong>{translate('ap_version')}</strong> 1.0.0_20211222
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
