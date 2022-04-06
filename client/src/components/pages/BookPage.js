import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../layout/books/BookDetail';

import BookContext from '../../context/book/bookContext';

import Spinner from '../layout/Spinner';

import './BookPage.css';

const BookPage = () => {
  const bookContext = useContext(BookContext);

  const { book, getBook, loading } = bookContext;

  let { urlTitle } = useParams();

  useEffect(() => {
    getBook(urlTitle);

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {book !== null && !loading ? (
        <BookDetail key={book._id} bookData={book} />
      ) : (
        <div className='container'>
          <Spinner />
        </div>
      )}
    </Fragment>
  );
};

export default BookPage;
