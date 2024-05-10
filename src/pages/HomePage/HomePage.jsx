import React, { useState } from 'react';
import NavBar from './components/NavBar';
import CategoryBar from './components/CategoryBar';
import CardList from './components/CardList';
import { list, list2 } from '../../assets/cards';

function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState(0);
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
