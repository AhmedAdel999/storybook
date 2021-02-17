import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  children,
  withIcon,
  disabled,
  value,
  changeHandler,
  selectedOption,
}) => {
  const [checked, setChecked] = useState('false');
  useEffect(() => {
    if (value === selectedOption) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [selectedOption]);
  return (
    <button
      disabled={disabled}
      class={`${disabled ? 'cursor-not-allowed opacity-25 bg-grey-shd6' : ''} ${
        checked ? 'border-grey' : 'border-transparent'
      } border mr-2 focus:outline-none hover:bg-grey-shd6 text-sm text-dark-grey flex justify-between items-center rounded-full py-1.5 px-3.5`}
    >
      {withIcon ? (
        <div class='mr-3 relative flex items-center justify-center'>
          <input
            name='choice'
            class={`${
              checked ? 'bg-primary border-transparent' : ''
            } cursor-pointer border-grey-shd4 border-2 focus:outline-none rounded-full appearance-none w-4 h-4`}
            type='radio'
            value={value}
            onChange={changeHandler}
          />
          <span
            class={`${
              checked ? 'block' : 'hidden'
            } w-1.5 h-1.5 rounded-full absolute bg-white pointer-events-none`}
          />
        </div>
      ) : (
        ''
      )}
      {children}
    </button>
  );
};
Tab.propTypes = {
  children: PropTypes.node,
  withIcon: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default Tab;
