import React, { useState } from 'react';
import { links } from '../../../../assets/images';
import PropTypes from 'prop-types';
import './styles.scss';

function CategoryBar({ selectedFilter, setSelectedFilter }) {
  return (
    <div className='category-container'>
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectedFilter && 'selected-box'}`}
          onClick={() => {
            setSelectedFilter(i);
          }}
        >
          <img src={item.url} className='links-img' />
          <p
            className={`links-label ${i == selectedFilter && 'selected-label'}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

CategoryBar.propTypes = {
  selectedFilter: PropTypes.number.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};

export default CategoryBar;
