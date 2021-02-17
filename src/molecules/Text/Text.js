import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ withDelete, deleteHandler, id, changeHandler }) => {
  return (
    <div className='flex items-center my-2 w-full' id={id}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M20 9H4V11H20V9ZM4 15H20V13H4V15Z' fill='#8D9A9E' />
      </svg>
      <div className='mx-3.5 flex items-center w-full relative items-center'>
        <span className='absolute left-2 px-2 py-0.5 bg-grey-shd7 rounded-md font-sm text-grey'>
          {id}
        </span>
        <input
          className='form-text-input px-11 w-full focus:outline-none'
          type='text'
          placeholder='Enter Text'
          onChange={changeHandler}
          id={id}
        />
      </div>
      <button className='focus:outline-none' onClick={deleteHandler} id={id}>
        <svg
          className={`${withDelete ? 'block' : 'hidden'} pointer-events-none`}
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.6665 7.33325H11.3332V8.66659H4.6665V7.33325Z'
            fill='#FE544A'
          />
          <path
            d='M8.00016 1.33325C4.32416 1.33325 1.3335 4.32392 1.3335 7.99992C1.3335 11.6759 4.32416 14.6666 8.00016 14.6666C11.6762 14.6666 14.6668 11.6759 14.6668 7.99992C14.6668 4.32392 11.6762 1.33325 8.00016 1.33325ZM8.00016 13.3333C5.0595 13.3333 2.66683 10.9406 2.66683 7.99992C2.66683 5.05925 5.0595 2.66659 8.00016 2.66659C10.9408 2.66659 13.3335 5.05925 13.3335 7.99992C13.3335 10.9406 10.9408 13.3333 8.00016 13.3333Z'
            fill='#FE544A'
          />
        </svg>
      </button>
    </div>
  );
};

Text.propTypes = {
  withDelete: PropTypes.bool,
};

export default Text;
