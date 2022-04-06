import React, { Fragment } from 'react';

import Logo from '../layout/Logo';
import Footer from '../layout/Footer';

import translate from '../../i18n/translate';

import './HelpPage.css';

const HelpPage = () => {
  return (
    <Fragment>
      <div className='nav-header navbar'>
        <div className='our-container'>
          <Logo />
        </div>
      </div>
      <div className='our-card center'>
        <h1>{translate('helppage_title')}</h1>
        <div>{translate('helppage_p1')}</div>
        <div className=''></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HelpPage;
