import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './styles.scss';
import LoginForm from '../../../LoginPage/components/LoginForm';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LoginFormModal from './../../../LoginPage/components/LoginFormModal/index';
import { useModal } from '../../../LoginPage/components/LoginFormModal/ModalContext';

function ProfileMenu() {
  const { data } = useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const data = queryClient.getQueryData(['list']);
      return data
        ? data
        : await axios
            .get('http://localhost:3000/stays', {
              headers: {
                //tokem o day
              },
            })
            .then((res) => {
              console.log(res);
              return res.data;
            })
            .catch((err) => {
              console.log(err);

              throw err;
            });
    },
  });
  const {showModal, closeModal} = useModal();
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const queryClient = useQueryClient();
  queryClient.getQueryData;
  const open = Boolean(menuAnchor);
  const handleOnClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleCloseMenu = () => {
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
        <MenuItem
          className='menu-items'
          onClick={() => {
            handleCloseMenu();
            LoginForm.show();
          }}
        >
          Signup
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            // LoginForm.show();
            showModal(<LoginFormModal onClose={closeModal} />);
          }}
          className='menu-items'
        >
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
