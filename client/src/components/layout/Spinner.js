import React from 'react';

import translate from '../../i18n/translate';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='book-spinner-bg book-spinner'>
        <div className='book-spinner-page'></div>
        <div className='book-spinner-page'></div>
        <div className='book-spinner-page'></div>
      </div>
      <h1>{translate('spinner')}</h1>
    </div>
  );
};

export default Spinner;
