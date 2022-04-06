// eslint-disable-next-line
import React, { Fragment, useContext, useEffect, useState } from 'react';
// eslint-disable-next-line
import { Link, useLocation } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

// import AvatarContext from '../../context/avatar/avatarContext';
import AuthContext from '../../context/auth/authContext';

// eslint-disable-next-line
import Spinner from '../layout/Spinner';
import Logo from '../layout/Logo';
import translate from '../../i18n/translate';

import './AccountPageManage.css';

const AccountPageManage = ({ user }) => {
  // const avatarContext = useContext(AvatarContext);
  const authContext = useContext(AuthContext);

  // const { avatars, getAvatars, loading, error } = avatarContext;
  // eslint-disable-next-line
  const { updateUser } = authContext;

  // const state = useLocation().userState,
  // history = useHistory();

  // useEffect(() => {
  //   // getAvatars();
  //   // if (state === undefined) history.goBack();

  //   // eslint-disable-next-line
  // }, [state, error]);

  // let slidesToShow = 9,
  //   slidesToScroll = 9;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: slidesToShow,
  //   slidesToScroll: slidesToScroll,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         dots: true,
  //         infinite: true,
  //         speed: 1000,
  //         slidesToShow: slidesToShow - 1,
  //         slidesToScroll: slidesToScroll - 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: slidesToShow - 2,
  //         slidesToScroll: slidesToScroll - 2,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: slidesToShow - 3,
  //         slidesToScroll: slidesToScroll - 3,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: slidesToShow - 4,
  //         slidesToScroll: slidesToScroll - 4,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: slidesToShow - 5,
  //         slidesToScroll: slidesToScroll - 5,
  //       },
  //     },
  //   ],
  // };

  // const AccountSliderItem = ({ avatar }) => {
  //   const { filePath, label } = avatar;

  //   return (
  //     <div className='avatar-slider-item'>
  //       <div className='avatar-slider-card'>
  //         <figure className='avatar-slider-card-image'>
  //           <img
  //             src={filePath}
  //             alt={label}
  //             aria-label={label}
  //             title={label}
  //             onClick={handleSectionClick}
  //           />
  //         </figure>
  //       </div>
  //     </div>
  //   );
  // };

  // eslint-disable-next-line
  const defaultSection = () => {
    return (
      <div className='our-main-container'>
        <div className='our-container our-row-title jc-flex-start margin-bottom-2'>
          <div className='left-container'>
            {/* <Link
              to={{
                pathname: `/account/${state}`,
              }}
            >
              <i className='fas fa-arrow-left'></i>
            </Link> */}
            <h1 className='margin-left-1'>{translate('edit_profile_icon')}</h1>
          </div>
          {/* {state !== null && user !== null && (
            <div className='right-container'>
              <div className='our-row-title'>
                <h1>{user.name}</h1>
              </div>
              <div className='profile-avatar-static'>
                <img src={user.userImage} alt='' />
              </div>
            </div>
          )} */}
        </div>
        <div className='our-card-row margin-bottom-2'>
          <div className='our-container our-card card-row-title'>
            <h2 className='h2'>{translate('default')}</h2>
          </div>
          <div className='our-card card-row-content'>
            <div className='our-slider'>
              {/* <Slider {...settings}>
                {avatars !== null && !loading
                  ? avatars.map((avatar) => (
                      <AccountSliderItem key={avatar._id} avatar={avatar} />
                    ))
                  : null}
                <div></div>
                <div></div>
              </Slider> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // const handleBackSectionClick = (e) => {
  //   e.preventDefault();
  //   changePageState(allAvatarsState);
  // };

  // const changeAvatarSection = (newAvatarPath) => {
  //   return (
  //     <div className='our-main-container'>
  //       <div className='our-center-container'>
  //         <div className='our-avatar-change-container'>
  //           <h2 className='margin-bottom-2 text-center'>
  //             {translate('change_profile_icon')}?
  //           </h2>
  //           <div className='confirm-avatar-icons margin-bottom-4'>
  //             {state !== null && user !== null && (
  //               <div className='change-avatar'>
  //                 <img src={user.userImage} alt='' />
  //                 <span>{translate('current')}</span>
  //               </div>
  //             )}
  //             <div className='font-size-2 padding-bottom-1'>
  //               <i className='fas fa-chevron-right'></i>
  //             </div>
  //             <div className='change-avatar'>
  //               <img src={newAvatarPath} alt='' />
  //               <span>{translate('new')}</span>
  //             </div>
  //           </div>
  //           <div className='confirm-avatar-buttons'>
  //             <span
  //               className='danger-btn'
  //               onClick={(e) => {
  //                 e.preventDefault();
  //                 user.userImage = newAvatarPath;
  //                 updateUser(user);
  //                 window.location.reload();
  //               }}
  //             >
  //               {translate('confirm')}
  //             </span>
  //             <span
  //               className='danger-btn transparent-danger-btn margin-left-1'
  //               onClick={handleBackSectionClick}
  //             >
  //               {translate('back')}
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const allAvatarsState =
  //   avatars !== null && !loading ? defaultSection() : null;

  // const [pageState, setPageState] = useState({
  //   state: allAvatarsState,
  // });

  // const changePageState = (newState) => setPageState({ state: newState });

  // const handleSectionClick = (e) => {
  //   e.preventDefault();
  //   changePageState(
  //     avatars !== null && !loading ? changeAvatarSection(e.target.src) : null
  //   );
  // };

  // if (avatars !== null && !loading && user !== null) {
  //   avatars.map((avatar) => {
  //     if (
  //       avatar.filePath ===
  //       user.userImage.substr(user.userImage.indexOf('img') - 1)
  //     )
  //       avatars.splice(avatars.indexOf(avatar), 1);

  //     return avatars;
  //   });

  //   if (pageState.state === null) setPageState({ state: allAvatarsState });
  // }

  return (
    <Fragment>
      <div className='our-header'>
        <div className='our-container'>
          <Logo />
        </div>
      </div>
      {/* <div className='our-main-container top-margin-1'>
        {avatars !== null && !loading ? pageState.state : <Spinner />}
      </div> */}
    </Fragment>
  );
};

export default AccountPageManage;
