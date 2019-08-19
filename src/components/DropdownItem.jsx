import React from 'react';

const DropdownItem = ({ option, handleChange, itemClass }) => {
  return (
    <li onClick={() => handleChange(option)} className={itemClass}>
      <a href="#">{option}</a>
    </li>
  );
};

export default DropdownItem;
