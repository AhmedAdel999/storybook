import React from 'react';
import TextPoll from '../TextPoll/TextPoll';

const Group = ({ number }) => {
  return (
    <div className='bg-grey-bg p-4 rounded-sm w-full'>
      <div className='flex justify-between'>
        <p className='text-sm text-dark-grey'>Group {number}</p>
        <button className='focus:outline-none'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.99984 6.6665C7.2665 6.6665 6.6665 7.2665 6.6665 7.99984C6.6665 8.73317 7.2665 9.33317 7.99984 9.33317C8.73317 9.33317 9.33317 8.73317 9.33317 7.99984C9.33317 7.2665 8.73317 6.6665 7.99984 6.6665ZM7.99984 2.6665C7.2665 2.6665 6.6665 3.2665 6.6665 3.99984C6.6665 4.73317 7.2665 5.33317 7.99984 5.33317C8.73317 5.33317 9.33317 4.73317 9.33317 3.99984C9.33317 3.2665 8.73317 2.6665 7.99984 2.6665ZM7.99984 10.6665C7.2665 10.6665 6.6665 11.2665 6.6665 11.9998C6.6665 12.7332 7.2665 13.3332 7.99984 13.3332C8.73317 13.3332 9.33317 12.7332 9.33317 11.9998C9.33317 11.2665 8.73317 10.6665 7.99984 10.6665Z'
              fill='#5B6366'
            />
          </svg>
        </button>
      </div>
      <div className='mt-4'>
        <TextPoll />
      </div>
    </div>
  );
};

export default Group;
