// OneBoxItem.js
import React from 'react';

const OneBoxItem = ({ item }) => {
  return (
    <li>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  );
};

export default OneBoxItem;