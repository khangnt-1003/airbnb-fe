import React, { useState } from 'react';
import NavBar from './components/NavBar';
import CategoryBar from './components/CategoryBar';
import CardList from './components/CardList';
import { list, list2 } from '../../assets/cards';
import LoginForm from '../LoginPage/components/LoginForm';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const { data } = useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      return await axios
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
        <CardList list={list} />
      ) : (
        <CardList list={list2} />
      )}
    </div>
  );
}

export default HomePage;
