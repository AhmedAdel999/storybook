import React, { useState } from 'react';
import Group from '../Group/Group';
import ImageUpload from '../ImageUpload/ImageUpload';

const Survey = () => {
  const [groupsNumber, setGroupsNumber] = useState(0);
  const groups = [];
  const clickHandler = () => {
    setGroupsNumber(groupsNumber + 1);
  };
  for (let i = 1; i <= groupsNumber; i++) {
    groups.push(<Group number={i} key={i} />);
  }
  return (
    <div>
      <ImageUpload text='Attach an image' />
      {groups}
      <button
        onClick={clickHandler}
        className='mt-2 focus:outline-none w-full bg-grey-bg p-4 rounded-lg flex items-center'
      >
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.66683 4.3335H5.66683V0.333496H4.3335V4.3335H0.333496V5.66683H4.3335V9.66683H5.66683V5.66683H9.66683V4.3335Z'
            fill='#5B6366'
          />
        </svg>
        <p className='ml-2 font-medium text-sm text-dark-grey'>
          Add Option Group
        </p>
      </button>
    </div>
  );
};

export default Survey;
