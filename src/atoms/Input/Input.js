import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  children,
  variant,
  rightIcon,
  leftIcon,
  prefix,
  label,
  disabled,
  choice,
  placeholder,
}) => {
  const [focused, setFocused] = useState(false);
  const focusHandler = () => {
    setFocused(true);
  };
  const blurHandler = () => {
    setFocused(false);
  };
  return (
    <>
      {label ? <label className='text-xs text-dark-grey'>Label</label> : ''}
      <div className='mt-2 flex items-center w-full relative'>
        <input
          disabled={disabled}
          onFocus={focusHandler}
          onBlur={blurHandler}
          className={`form-text-input focus:outline-none ${
            variant === 'success'
              ? 'border-success'
              : variant === 'error'
              ? 'border-error'
              : 'hover:border-grey-shd2 focus:border-dark'
          } ${leftIcon ? 'px-10' : prefix ? 'px-16' : choice ? 'px-11' : ''} ${
            disabled ? 'opacity-25 cursor-not-allowed' : ''
          } w-full`}
          type='text'
          placeholder={placeholder || 'Enter Text'}
        />
        {variant === 'success' ? (
          <svg
            className={`w-4 h-4 fill-current absolute ${
              rightIcon ? 'right-xvxl' : 'right-sv'
            }`}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.66681 10.3906L4.47148 8.19527L3.52881 9.13794L6.66681 12.2759L13.1381 5.8046L12.1955 4.86194L6.66681 10.3906Z'
              fill='#07B255'
            />
          </svg>
        ) : variant === 'error' ? (
          <svg
            className={`w-4 h-4 fill-current absolute ${
              rightIcon ? 'right-xvxl' : 'right-sv'
            }`}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.96883 1.33337C4.31016 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6622 1.33337 7.96883 1.33337ZM8.00016 13.3334C5.0595 13.3334 2.66683 10.9407 2.66683 8.00004C2.66683 5.05937 5.04483 2.66671 7.96883 2.66671C10.9275 2.66671 13.3335 5.05937 13.3335 8.00004C13.3335 10.9407 10.9408 13.3334 8.00016 13.3334Z'
              fill='#FE544A'
            />
            <path
              d='M7.3335 4.66663H8.66683V9.33329H7.3335V4.66663ZM7.3335 9.99996H8.66683V11.3333H7.3335V9.99996Z'
              fill='#FE544A'
            />
          </svg>
        ) : (
          <svg
            className={`w-4 h-4 cursor-pointer fill-current absolute ${
              focused ? 'block' : 'hidden'
            } ${rightIcon ? 'right-xvxl' : 'right-sv'}`}
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998C0.333496 10.676 3.32416 13.6666 7.00016 13.6666C10.6762 13.6666 13.6668 10.676 13.6668 6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313ZM9.80483 8.86198L8.86216 9.80465L7.00016 7.94265L5.13816 9.80465L4.1955 8.86198L6.0575 6.99998L4.1955 5.13798L5.13816 4.19531L7.00016 6.05731L8.86216 4.19531L9.80483 5.13798L7.94283 6.99998L9.80483 8.86198Z'
              fill='#8D9A9E'
            />
          </svg>
        )}

        {children}
      </div>
    </>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  prefix: PropTypes.bool,
  label: PropTypes.bool,
  disabled: PropTypes.bool,
  choice: PropTypes.bool,
};
export default Input;
