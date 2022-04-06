// BookThumbnail = Book thumbnail on BooksPage, IntroPage
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './BookThumbnail.css';

const BookThumbnail = ({ book }) => {
  const { urlTitle, title, bookCover, annotation, date } = book;

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const dateDiffInDays = (d1, d2) => {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
    const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
    const days = Math.floor((utc2 - utc1) / _MS_PER_DAY);

    return days;
  };

  return (
    <div className='list-item'>
      <Link
        to={{
          pathname: `/browse/ebooks/${urlTitle}`,
          urlTitle: urlTitle,
        }}
        className=''
      >
        <div className='list-card'>
          {bookCover ? (
            <div className='list-card_content'>
              <figure className='list-card_image'>
                <img src={bookCover} alt='' />
              </figure>
              <div className='list-card_annotation'>
                {annotation ? (
                  <p>{annotation.substring(0, 140).concat('...')}</p>
                ) : null}
              </div>
            </div>
          ) : (
            <div className='list-card_no-image'>
              <i className='far fa-file-image'></i>
            </div>
          )}
          {bookCover ? (
            <div className='book-status-labels'>
              {dateDiffInDays(new Date(date), new Date()) <= 30 && (
                <i className='book-status-label bsl--new' data-label='Novinka'>
                  <span className='show'>N</span>
                  <span className='show'>ovinka</span>
                </i>
              )}
            </div>
          ) : null}
        </div>
        <div className='list-card-specification'>
          {/* <div className='line'></div> */}
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

BookThumbnail.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookThumbnail;
