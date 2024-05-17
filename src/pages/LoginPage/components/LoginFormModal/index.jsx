import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import './styles.scss';
import { login } from '../../../../utils';

const LoginFormModal = ({ onClose }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = async () => {
    const result = await login(username, password);
    if (result.success) {
      alert(result.message);
      onClose();
      window.location.reload();
    } else {
      alert(result.message);
    }
  }

  return (
    <div className='popup-container'>
      <div className='container'>
        <div className='close-icon' onClick={onClose}>
          <CloseIcon />
        </div>
        <div className='header'>
          <p className='header-text'>Log in or sign up</p>
        </div>
        <div className='title'>Welcome to Airbnb</div>
        <div className='phone-container'>
          {/* <div className='country-code-input'>
            <select className='country-code-select'>
              <option value='+84'>Vietnam (+84)</option>
              <option value='+1'>United States (+1)</option>
            </select>
          </div> */}
          <div className='username-input'>
            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='password-input'>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={{borderWidth: 0, width: "100%"}} />
          </div>
        </div>
        <div className='text'>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </div>
        <div className='continue-button' onClick={handleLogin}>Continue</div>
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
};

export default LoginFormModal;
