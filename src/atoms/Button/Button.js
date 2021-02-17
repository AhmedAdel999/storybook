import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant,
  size,
  disabled,
  children,
  iconOnly,
  clickHandler,
}) => {
  const style = () => {
    let styleStr = '';
    styleStr += 'focus:outline-none flex items-center';
    if (size === 'large' && iconOnly) {
      styleStr += ' w-14 h-14 rounded-full justify-center';
    } else if (size === 'large' && !iconOnly) {
      styleStr += ' px-8 py-3.5 font-bold text-md rounded-xl';
    } else if (size === 'medium' && iconOnly) {
      styleStr += ' w-10 h-10 rounded-full justify-center';
    } else if (size === 'medium' && !iconOnly) {
      styleStr += ' px-6 py-2 font-medium text-base rounded-xl';
    } else if (size === 'small' && iconOnly) {
      styleStr += ' w-8 h-8 rounded-full justify-center';
    } else if (size === 'small' && !iconOnly) {
      styleStr += ' px-4 py-1.5 font-medium text-sm rounded-xl';
    }
    if (disabled) {
      styleStr += ' opacity-25 cursor-not-allowed ';
    }
    if (variant === 'text') {
      styleStr += ' text-accent hover:text-accent-hover focus:underline p-0 ';
    } else {
      styleStr += ' ' + variant;
    }
    return styleStr;
  };
  return (
    <button disabled={disabled} className={style()} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.string,
  iconOnly: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;
