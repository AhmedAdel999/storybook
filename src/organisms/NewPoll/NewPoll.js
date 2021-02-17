import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Poll from '../Poll/Poll';

const NewPoll = () => {
  const [show, setShow] = useState(false);
  const showNewPoll = () => {
    setShow(true);
  };
  const hideNewPoll = () => {
    setShow(false);
  };
  return (
    <div>
      <div
        onClick={hideNewPoll}
        className={`absolute top-0 left-0 w-screen h-screen bg-grey-bg3 z-30 opacity-50 ${
          show ? 'block' : 'hidden'
        }`}
      ></div>
      <div onClick={showNewPoll}>
        <Input disabled={show ? true : false} />
      </div>
      <div
        className={`w-screen h-screen flex items-center justify-center absolute top-0 left-0 ${
          show ? 'block' : 'hidden'
        }`}
      >
        <div className='absolute z-50'>
          <Poll />
        </div>
      </div>
    </div>
  );
};

export default NewPoll;
