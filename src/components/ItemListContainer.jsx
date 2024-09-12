import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1 className="greeting-message">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
