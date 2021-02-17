import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ size, disabled }) => {
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
      class={`${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'} ${
        disabled ? 'opacity-25' : ''
      } relative flex justify-center items-center`}
    >
      <input
        disabled={disabled}
        class={`${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'} ${
          checked
            ? 'bg-primary border-2 border-transparent focus:border-primary-shd6'
            : 'border-grey-shd4 hover:border-grey-shd1 focus:border-grey-shd2 border focus:border-2'
        } ${
          disabled ? 'cursor-not-allowed' : ''
        } appearance-none rounded-sm cursor-pointer focus:outline-none`}
        type='checkbox'
        onChange={changeHandler}
      />
      <svg
        class={` ${
          checked ? 'block' : 'hidden'
        } absolute flex pointer-events-none`}
        width='11'
        height='9'
        viewBox='0 0 11 9'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.66632 6.39073L1.47099 4.19539L0.52832 5.13806L3.66632 8.27606L10.1377 1.80473L9.19499 0.862061L3.66632 6.39073Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

Checkbox.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Checkbox;
