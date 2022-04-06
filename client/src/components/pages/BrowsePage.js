// eslint-disable-next-line
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import AuthContext from '../../context/auth/authContext';
import BookContext from '../../context/book/bookContext';

// import BookSliderItem from '../books/BookSliderItem';
import BookThumbnail from '../layout/books/BookThumbnail';

import Spinner from '../layout/Spinner';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import translate from '../../i18n/translate';

import './BrowsePage.css';

const BrowsePage = () => {
  let readingDiv = [],
    fantasyDiv = [],
    crimiDiv = [],
    fairyTalesDiv = [];

  const RowSection = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    let slidesToShow = 8,
      slidesToScroll = 8;

    useEffect(() => {
      const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }, 100);

      window.addEventListener('resize', debouncedHandleResize);

      return (_) => window.removeEventListener('resize', debouncedHandleResize);
    }, [props.array.length, slidesToScroll, slidesToShow]);

    let l;

    if (window.innerWidth > 1920) l = slidesToScroll;
    if (window.innerWidth <= 1920) l = slidesToScroll;
    if (window.innerWidth <= 1680) l = 5;
    if (window.innerWidth <= 1440) l = 4;
    if (window.innerWidth <= 1024) l = 3;
    if (window.innerWidth <= 800) l = 2;
    if (window.innerWidth <= 480) l = 1;

    let divv = [];

    if (props.array.length < l) {
      for (let i = 0; i < l - props.array.length; i++) {
        divv.push(<div key={i}></div>);
      }
    }

    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      // swipeToSlide: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            slidesToShow: slidesToShow - 1,
            slidesToScroll: slidesToScroll - 1,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      // <div>
      //   <div>
      //     Rendered at {dimensions.width} x {dimensions.height}
      //   </div>
        <div className='our-card-row'>
          <div className='our-card card-row-title'>
            <h2>{props.rowTitle}</h2>
          </div>
          <div className='our-card card-row-content'>
            <div className='our-slider'>
              <Slider {...settings}>
                {books !== null && !bookLoading
                  ? props.array.map((book) => (
                      <BookThumbnail key={book._id} book={book} />
                    ))
                  : null}
                {divv.length !== 0 ? divv : null}
              </Slider>
            </div>
          </div>
        </div>
      // </div>
    );
  };

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);

  const { user } = authContext,
    authLoading = authContext.loading;
  const { books, getBooks, error } = bookContext,
    bookLoading = bookContext.loading;

  useEffect(() => {
    getBooks();

    // eslint-disable-next-line
  }, [error]);

  let // Fantasy
    fantasyBooksArray = [],
    numberOfFantasyBooks = 0,
    // Detektivky, Thrillery, Krimi
    thrillerAndCrimeBooksArray = [],
    numberOfThrillerAndCrimeBooks = 0,
    // Pro děti a mládež, Pohádky
    fairyTalesArray = [],
    numberOfFairyTalesBooks = 0,
    // Literatura světová
    worldLiteratureArray = [],
    numberOfWorldLiteratureBooks = 0;

  const addBookToArray = (array, number, obj) => {
    if (!array.includes(obj)) {
      array.push(obj);
      number++;
    }
  };

  if (books !== null && !bookLoading) {
    books.map((book) => {
      book.genres.forEach((genre) => {
        if (genre === 'Fantasy')
          addBookToArray(fantasyBooksArray, numberOfFantasyBooks, book);

        if (
          genre === 'Detektivky' ||
          genre === 'Thrillery' ||
          genre === 'Krimi'
        )
          addBookToArray(
            thrillerAndCrimeBooksArray,
            numberOfThrillerAndCrimeBooks,
            book
          );

        if (genre === 'Pohádky' || genre === 'Pro děti a mládež')
          addBookToArray(fairyTalesArray, numberOfFairyTalesBooks, book);

        if (genre === 'Literatura světová')
          addBookToArray(
            worldLiteratureArray,
            numberOfWorldLiteratureBooks,
            book
          );
      });
      return null;
    });
  }

  // const rowSection = (rowTitle, array, div) => {
  //   let l;

  //   if (window.innerWidth > 1920) l = slidesToScroll;
  //   if (window.innerWidth <= 1920) l = slidesToScroll;
  //   if (window.innerWidth <= 1680) l = 5;
  //   if (window.innerWidth <= 1440) l = 4;
  //   if (window.innerWidth <= 1024) l = 3;
  //   if (window.innerWidth <= 800) l = 2;
  //   if (window.innerWidth <= 480) l = 1;

  //   // if (array.length < l)
  //   //   for (let i = 0; i < l - array.length; i++) {
  //   //     div.push(<div key={i}></div>);
  //   //   }

  //   // console.log(array.length);

  //   return (
  //     <div className='our-card-row'>
  //       <div className='our-card card-row-title'>
  //         <h2>{rowTitle}</h2>
  //       </div>
  //       <div className='our-card card-row-content'>
  //         <div className='our-slider'>
  //           <Slider {...settings}>
  //             {books !== null && !bookLoading
  //               ? array.map((book) => (
  //                   <BookThumbnail key={book._id} book={book} />
  //                 ))
  //               : null}
  //             {div}
  //           </Slider>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <Fragment>
      <Navbar />
      {user !== null && !authLoading ? (
        <main>
          <div
            className='our-billboard-background'
            aria-label='Ukázka obsahu'
            id='test'
          >
            <div className='our-container our-billboard'>
              <div className='our-billboard-container'>
                <div className='our-billboard-panel'>
                  <div className='our-billboard-title'>
                    <h1>Harry Potter a kámen mudrců</h1>
                  </div>
                  <div className='our-billboard-content'>
                    Výměnou za ochranu milované sestry zaprodala svoji
                    budoucnost a připravila se o radost. Ale naděje umírá jako
                    poslední.
                  </div>
                  <div className='our-billboard-links'>
                    <Link to='' className='danger-btn'>
                      <i className='fas fa-play'></i>
                      <span className='danger-btn-text'>
                        {translate('read')}
                      </span>
                    </Link>
                    <Link to='' className='danger-btn transparent-danger-btn'>
                      <span className='svg-icon'>
                        <svg viewBox='0 0 24 24'>
                          <path
                            d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z'
                            fill='var(--danger-color)'
                          ></path>
                        </svg>
                      </span>
                      <span className='danger-btn-text'>
                        {translate('more_info')}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='our-maturity-rating'>
                <span className='our-maturity-number'>7+</span>
              </div>
            </div>
          </div>
          <div className='our-billboard-container-shadow'></div>
          {books !== null && !bookLoading ? (
            <div className='our-container our-cards browse'>
              {/* Pokračovat ve čtení */}
              <RowSection
                rowTitle={translate('continue_reading')}
                array={user.reading}
                div={readingDiv}
              />
              {/* {rowSection(
                translate('continue_reading'),
                user.reading,
                readingDiv
              )} */}
              {/* Fantasy */}
              <RowSection
                rowTitle={translate('fantasy')}
                array={fantasyBooksArray}
                div={fantasyDiv}
              />
              {/* {rowSection(translate('fantasy'), fantasyBooksArray, fantasyDiv)} */}
              {/* Krimi a thrillery */}
              <RowSection
                rowTitle={translate('crimes_thrillers')}
                array={thrillerAndCrimeBooksArray}
                div={crimiDiv}
              />
              {/* {rowSection(
                translate('crimes_thrillers'),
                thrillerAndCrimeBooksArray,
                crimiDiv
              )} */}
              {/* Pohádky pro děti a mládež */}
              <RowSection
                rowTitle={translate('fairy_tales')}
                array={fairyTalesArray}
                div={fairyTalesDiv}
              />
              {/* {rowSection(
                translate('fairy_tales'),
                forKidsArray,
                fairyTalesDiv
              )} */}
            </div>
          ) : (
            <Spinner />
          )}
        </main>
      ) : (
        <Spinner />
      )}
      <Footer />
    </Fragment>
  );
};

export default BrowsePage;
