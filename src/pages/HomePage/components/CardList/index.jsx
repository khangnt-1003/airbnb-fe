import React from "react";
import Card from "../Card/index";
import "./styles.scss";
import PropTypes from 'prop-types';

function CardList({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

CardList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default CardList;