import React, { useState } from 'react';
import NavBar from './components/NavBar';
import CategoryBar from './components/CategoryBar';
import CardList from './components/CardList';
import { list, list2 } from '../../assets/cards';
import LoginForm from '../LoginPage/components/LoginForm';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState(0); 
  const { data, error, isLoading } = useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const accessToken = Cookies.get('accessToken');
      // console.log('access token: ' + accessToken);

      if (!accessToken) {
        throw new Error('Access token is missing');
      }

      return await axios
        .get('http://localhost:3000/stays', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
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

      {selectedFilter == 0 ? (
        <CardList list={data?data:[]} />
      ) : (
        <CardList list={data?data:[]} />
      )}
    </div>
  );
}

export default HomePage;
