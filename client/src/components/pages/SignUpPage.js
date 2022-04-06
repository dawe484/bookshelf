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

const SignUpPage = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { signUp, isAuthenticated, error, clearErrors } = authContext;
  const { setAlert, removeAlert } = alertContext;

  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }

    if (error === 'User with this email address already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // if (error === 'No token, authorization denied.') {
    //   setAlert(error, 'danger');
    //   clearErrors();
    // }

    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) navigate('/browse');

    // eslint-disable-next-line
  }, [isAuthenticated, navigate]);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    removeAlert();
    // console.log('Register submit');
    signUp({
      username,
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
                <h1>{translate('signup')}</h1>
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
                    <label htmlFor='username'>{translate('username')}</label>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      value={username}
                      ref={userRef}
                      onChange={onChange}
                      minLength={3}
                      maxLength={32}
                      required
                    />
                    <label htmlFor='email'>{translate('email')}</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      onChange={onChange}
                      required
                    />
                    <label htmlFor='password'>{translate('password')}</label>
                    <label>{translate('min_password')}</label>
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
                  <div className='our-agreement'>
                    {translate('agreement')}
                    <Link to='' className='bold'>
                      {translate('terms_of_use_link')}
                    </Link>
                    {translate('and')}
                    <Link to='' className='bold'>
                      {translate('privacy_policy')}
                    </Link>
                  </div>
                  <div className='our-button-container'>
                    <button
                      className='danger-btn sign-btn'
                      type='submit'
                      value='Sign Up'
                    >
                      {translate('continue')}
                    </button>
                  </div>
                  <div className='our-sign-message'>
                    <span>{translate('signin_message')}</span>
                    <Link
                      to='/signin'
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {translate('signin')}
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

export default SignUpPage;
