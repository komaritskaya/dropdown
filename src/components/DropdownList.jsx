import React from 'react';
import shortid from 'shortid';
import DropdownItem from './DropdownItem';

const DropdownList = ({ options, handleChange, active }) => (
  <ul className="dropdown">
    {options.map(option => (
      <DropdownItem
        key={shortid.generate()}
        option={option}
        itemClass={option === active ? 'active' : ''}
        handleChange={handleChange}
      />
    ))}
  </ul>
);

export default DropdownList;
