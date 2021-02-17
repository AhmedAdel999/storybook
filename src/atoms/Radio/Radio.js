import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Radio = ({ size, disabled }) => {
  const [checked, setChecked] = useState(false);
  const clickHandler = (e) => {
    setChecked(!checked);
  };
  return (
    <div
      className={`${
        disabled ? 'opacity-25 cursor-not-allowed' : ''
      }relative flex items-center justify-center`}
    >
      <input
        disabled={disabled}
        className={`${
          size === 'small' ? 'w-4 h-4' : 'w-6 h-6'
        } cursor-pointer ${
          checked
            ? disabled
              ? 'bg-primary cursor-not-allowed'
              : 'bg-primary'
            : disabled
            ? 'border-primary-shd6 border cursor-not-allowed'
            : 'border-primary-shd6 border hover:border-grey-shd1'
        } focus:outline-none rounded-full appearance-none`}
        type='radio'
        onClick={clickHandler}
      />
      <span
        className={`${checked ? 'block' : 'hidden'} ${
          size === 'small' ? 'w-xxsv h-xxsv' : 'w-xsvv h-xsvv'
        } rounded-full absolute bg-white pointer-events-none`}
      />
    </div>
  );
};

Radio.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Radio;
