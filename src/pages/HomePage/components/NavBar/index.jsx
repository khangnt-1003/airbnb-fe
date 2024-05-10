import React, { useEffect } from 'react';
import logo from '../../../../assets/logos/long-logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import './styles.scss';
import ProfileMenu from '../ProfileMenu';
import BottomNavBar from '../BottomNavBar';

function NavBar() {
  useEffect(() => {
    const element = document.querySelector('.large-search-bar');
    const element2 = document.querySelector('.experience-container');
    const element3 = document.querySelector('.small-search-bar');
    function handleScroll() {
      const scrollPosition = window.scrollY;
      // console.log(scrollPosition)
      if (scrollPosition > 3) {
        element?.classList.add('show-item');
        element2?.classList.add('show-item');
        element3?.classList.add('hide-item');
      } else {
        element?.classList.remove('show-item');
        element2?.classList.remove('show-item');
        element3?.classList.remove('hide-item');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='navbar'>
        <div style={{ width: '25%', justifyContent: 'flex-start' }}>
          <img src={logo} alt='logo' className='navbar-logo' />
        </div>

        <div style={{ flexDirection: 'column', display: 'flex', width: '50%' }}>
          <div className='small-search-bar'>
            <div className='small-search-bar-text'>Anywhere</div>
            <div className='small-search-bar-text'>Any Week</div>
            <div className='small-search-bar-text2'>Add guests</div>
            <div className='search-icon'>
              <SearchRoundedIcon className='search-icon' />
            </div>
          </div>
          <div className='experience-container'>
            <div className='experience-text'>Stays</div>
            <div className='experience-text2'>Experiences</div>
            <div className='experience-text2'>Online Experiences</div>
          </div>
        </div>
        <div className='profile-container' style={{ width: '25%' }}>
          <div className='airbnb-your-home'>Airbnb your home</div>
          <div className='airbnb-your-home'>
            <LanguageIcon sx={{ fontSize: '1.3rem' }} />
          </div>
          <div className='profile-div'>
            <ProfileMenu />
          </div>
        </div>
        <BottomNavBar />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='large-search-bar'>
          <div
            className='large-search-bar-text'
            style={{ width: '35%', textAlign: 'left', paddingLeft: "2rem" }}
          >
            Where
            <p className='secondary-text'>Search destinations</p>
          </div>
          <div
            className='large-search-bar-text'
            style={{ width: '15%', textAlign: 'left' }}
          >
            Check in
            <p className='secondary-text'>Add dates</p>
          </div>
          <div
            className='large-search-bar-text'
            style={{ width: '15%', textAlign: 'left' }}
          >
            Check out
            <p className='secondary-text'>Add dates</p>
          </div>
          <div
            className='large-search-bar-text'
            style={{ width: '35%', textAlign: 'left', borderRight: '0px' }}
          >
            Who
            <p className='secondary-text'>Add guests</p>
          </div>
          <div className='large-search-icon' style={{}}>
            <SearchRoundedIcon className='large-search-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
