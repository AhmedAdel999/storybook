import React, { useState } from 'react';
import Toggle from '../../atoms/Toggle/Toggle';

const Privacy = () => {
  const [privacy, setPrivacy] = useState('Public');
  const [show, setShow] = useState(false);
  const toggleDropDown = () => {
    setShow(!show);
  };
  const clickHandler = (e) => {
    setPrivacy(e.target.innerText);
  };
  return (
    <div className='flex items-center'>
      <div className='flex items-center mr-8'>
        <Toggle size='small' />
        <p className='text-dark-grey text-xs ml-2'>Hide my identity</p>
      </div>
      <div className='flex items-center'>
        <p className='text-dark-grey text-xs'>Privacy:</p>
        <button
          onClick={toggleDropDown}
          className='ml-2 relative focus:outline-none flex items-center font-medium text-dark-grey text-sm'
        >
          {privacy}
          <svg
            className='w-3 ml-2 fill-current'
            viewBox='0 0 12 8'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z' />
          </svg>
          <div
            className={`${
              show ? 'block' : 'hidden'
            } absolute top-6 left-0 flex flex-col items-start`}
          >
            <button
              onClick={clickHandler}
              className='focus:outline-none font-medium text-dark-grey hover:text-dark text-sm'
            >
              Public
            </button>
            <button
              onClick={clickHandler}
              className='focus:outline-none font-medium text-dark-grey hover:text-dark text-sm'
            >
              Private
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Privacy;
