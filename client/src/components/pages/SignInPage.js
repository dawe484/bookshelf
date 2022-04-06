import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

import Alerts from '../layout/Alerts';
import Logo from '../layout/Logo';
import Footer from '../layout/Footer';

import translate from '../../i18n/translate';

import './SignInUpPage.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { signIn, isAuthenticated, error, clearErrors } = authContext;
  const { setAlert, removeAlert } = alertContext;

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error === 'Wrong email or password') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) navigate('/browse');

    // eslint-disable-next-line
  }, [isAuthenticated, navigate]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    removeAlert();
    // console.log('Sign In submit');
    signIn({
      email,
      password,
    });
  };

  return (
    <Fragment>
      <div className='nav-header navbar'>
        <div className='our-container'>
          <Logo />
        </div>
      </div>
      <Alerts />
      <div className='our-sign-container'>
        <div className='our-sign-content'>
          <div className='our-sign-form-body'>
            <form onSubmit={onSubmit} className='our-sign-form'>
              <div className='our-sign-panel'>
                <h1>{translate('signin_services')}</h1>
                <div className='our-form-content'>
                  <div className='our-social-container'>
                    <Link to='' className='social'>
                      <i className='fab fa-facebook-square' />
                    </Link>
                    <Link to='' className='social'>
                      <i className='fab fa-google-plus-square' />
                    </Link>
                    <Link to='' className='social'>
                      <i className='fab fa-linkedin' />
                    </Link>
                    <Link to='' className='social'>
                      <i className='fab fa-twitter-square' />
                    </Link>
                  </div>
                  <div className='our-sign-email'>{translate('use_email')}</div>
                  <div className='our-sign-input-field'>
                    <label htmlFor='email'>{translate('email')}</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      ref={emailRef}
                      onChange={onChange}
                      required
                    />
                    <label htmlFor='password'>{translate('password')}</label>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      value={password}
                      onChange={onChange}
                      minLength={6}
                      required
                    />
                  </div>
                  <div className='our-button-container'>
                    <button
                      className='danger-btn sign-btn'
                      type='submit'
                      value='Sign In'
                    >
                      {translate('signin')}
                    </button>
                  </div>
                  <div className='our-forget-message'>
                    <Link to='' className=''>
                      {translate('forget_message')}
                    </Link>
                  </div>
                  <div className='our-sign-message'>
                    <span>{translate('signup_message')}</span>
                    <Link
                      to='/signup'
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {translate('signup_link')}
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignInPage;
