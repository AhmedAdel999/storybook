import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ size, disabled }) => {
  let [checked, setChecked] = useState(false);
  const changeHandler = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <div
      className={`relative ${
        size === 'small' ? 'w-7 h-4' : 'w-2xl h-xl'
      } flex items-center ${disabled ? 'opacity-25' : ''}`}
    >
      <input
        disabled={disabled}
        className={`${
          size === 'small' ? 'w-7 h-4' : 'w-2xl h-xl'
        } focus:outline-none absolute ${
          checked
            ? 'bg-primary-shd7 hover:bg-primary-shd6  focus:border-primary-shd5'
            : 'bg-grey-shd4 hover:bg-grey-shd3  focus:border-grey-shd3'
        } ${
          disabled
            ? checked
              ? 'hover:bg-primary-shd7 cursor-not-allowed'
              : 'hover:bg-grey-shd4 cursor-not-allowed'
            : ''
        } rounded-full appearance-none cursor-pointer border-2 border-transparent`}
        type='checkbox'
        onChange={changeHandler}
      />
      <label
        className={`${
          size === 'small' ? 'w-xsvv h-xsvv' : 'w-4 h-4'
        } absolute pointer-events-none rounded-full ${
          checked ? 'right-1 bg-primary' : 'left-1 bg-white'
        } cursor-pointer`}
      ></label>
    </div>
  );
};

Toggle.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Toggle;
