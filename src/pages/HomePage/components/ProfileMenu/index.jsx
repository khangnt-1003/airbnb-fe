import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

function ProfileMenu() {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const open = Boolean(menuAnchor);
  const navigate = useNavigate();
  const handleOnClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  // const handleCloseMenu = () => {
  //   setMenuAnchor(null);
  // };
  const handleCloseMenu = (event) => {
    if (event.target.innerText === 'Login') {
      navigate('/login');
    }
    setMenuAnchor(null);
  };

  return (
    <div>
      <div
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOnClick}
        className='profile-menu-flex'
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id='basic-menu'
        anchorEl={menuAnchor}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '.MuiPaper-root': {
            minWidth: '200px',
            borderRadius: '1rem',
            boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
          },
        }}
      >
        <MenuItem className='menu-items' onClick={handleCloseMenu}>
          Signup
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} className='menu-items'>
          Login
        </MenuItem>
        <div
          style={{
            height: '1px',
            backgroundColor: '#ddd',
            width: '100%',
          }}
        />
        <MenuItem onClick={handleCloseMenu} className='menu-items'>
          Gift cards
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} className='menu-items'>
          Airbnb your home
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} className='menu-items'>
          Help Center
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
