import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

function LoginForm() {
  const navigate = useNavigate();
  const handleCloseLoginForm = () => {
    navigate(-1);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='container'>
        <CloseIcon className='close-icon' onClick={handleCloseLoginForm} />
        <div className='header'>
          <p className='header-text'>Log in or sign up</p>
        </div>
        <div className='title'>Welcome to Airbnb</div>
        <div className='phone-container'>
          <div className='country-code-input'>
            <select className='country-code-select'>
              <option value='+84'>Vietnam (+84)</option>
              <option value='+1'>United States (+1)</option>
            </select>
          </div>
          <div className='phone-number-input'>
            <input type='text' placeholder='Phone number' />
          </div>
        </div>
        <div className='text'>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </div>
        <div className='continue-button'>Continue</div>
        <div className='line-with-text'>
          <span>or</span>
        </div>
        <div className='button-container'>
          <FacebookIcon style={{ color: 'blue' }} className='icon' />
          <p className='button-text'>Continue with Facebook</p>
        </div>
        <div className='button-container'>
          <GoogleIcon className='icon' />
          <p className='button-text'>Continue with Google</p>
        </div>
        <div className='button-container'>
          <AppleIcon className='icon' />
          <p className='button-text'>Continue with Apple</p>
        </div>
        <div className='button-container'>
          <EmailIcon className='icon' />
          <p className='button-text'>Continue with email</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
