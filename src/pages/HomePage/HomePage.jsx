import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import CategoryBar from './components/CategoryBar';
import CardList from './components/CardList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import LoginFormModal from '../LoginPage/components/LoginFormModal';
import { useModal } from '../LoginPage/components/LoginFormModal/ModalContext';

function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const {showModal, closeModal} = useModal();
  const fetchStays = async () => {
    let accessToken = Cookies.get('accessToken');

    try {
      const response = await axios.get('http://localhost:3000/stays', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) { // Unauthorized
        const refreshToken = Cookies.get('refreshToken');

        if (!refreshToken) {
          throw new Error('Session expired. Please log in again.');
        }

        try {
          const refreshResponse = await axios.post('http://localhost:3000/auth/refresh', {}, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResponse.data;
          Cookies.set('accessToken', newAccessToken, { expires: 7 });
          Cookies.set('refreshToken', newRefreshToken, { expires: 7 });

          const retryResponse = await axios.get('http://localhost:3000/stays', {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          });

          return retryResponse.data;
        } catch (refreshError) {
          console.error('Refresh token failed:', refreshError);
          throw new Error('Session expired. Please log in again.');
        }
      } else {
        throw error;
      }
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['list'],
    queryFn: fetchStays,
    retry: false,
  });

  useEffect(() => {
    if (error) {
      if (error.message === 'Session expired. Please log in again.') {
        const fetchError = window.confirm('Please log in again');
        if (fetchError) {
          showModal(<LoginFormModal onClose={closeModal} />)
        }
        // alert('Session expired. Please log in again.');
      } else {
        alert(error.message);
      }
    }
  }, [error]);

  return (
    <div>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <NavBar />
        <CategoryBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      {isLoading && <div>Loading...</div>}
      {error && console.log(error)}
      <CardList list={data ? data : []} />
    </div>
  );
}

export default HomePage;
