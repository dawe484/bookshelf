// AuthorThumbnail = Author thumbnail on AuthorsPage
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './AuthorThumbnail.css';

const AuthorThumbnail = ({ author }) => {
  const { urlAuthorName, name, portrait } = author;

  return (
    <div className='list-item'>
      <Link
        to={{
          pathname: `/authors/${urlAuthorName}`,
          urlName: urlAuthorName,
        }}
        className=''
      >
        <div className='list-card'>
          <figure className='list-card_image'>
            {portrait ? (
              <img src={portrait} alt='' />
            ) : (
              <i className='far fa-file-image'></i>
            )}
          </figure>
          {/* <figure className='author-card_image2'>
            {portrait ? (
              <img src={portrait} alt='' style={{ opacity: 1 }} />
            ) : (
              <i className='far fa-file-image'></i>
            )}
          </figure> */}
        </div>
        <div className='list-card-specification'>
          <div className='line'></div>
          <h2>{name}</h2>
        </div>
      </Link>
    </div>
  );
};

AuthorThumbnail.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorThumbnail;
