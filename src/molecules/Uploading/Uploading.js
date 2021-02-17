import React from 'react';
import Input from '../../atoms/Input/Input';
import Slider from '../../atoms/Slider/Slider';
import Misc from '../Misc/Misc';
import PropTypes from 'prop-types';

const Uploading = ({ variant }) => {
  return (
    <div className='relative w-44xl h-44xl'>
      <img
        className='w-44xl h-44xl object-fit object-cover rounded-t-lg'
        src='https://s3-alpha-sig.figma.com/img/5cf4/3d3f/0435559f4e6ddb90ce165b959245ec4f?Expires=1614556800&Signature=O0mCAds10LKlYRJB87bMw5OFOcPh3ydwR9bXu2b~3pN0WqqnADbeys1FW8MeshmOlvvOcgB3kVPSAi5aCuc37PII2n686CzUXkgbJyxWolaFx5Un8fTTnNKUD31TP1aa0Y66WkpuY6rpi9VJv8CuzuAoz91WFcUQoPT3TxibeyPajDn~VieUH-ga7PLwxyf7K96wz5lJtkZGUgCVJczxyfOcSkP6zX0eA5lHFEXYkFuVhA49LqJqPUFVpvlJ8U0Zlzip0R9VJzii9Zaj-cK5ifogRUWej6RSrdpJdPlovNbwM-gOaMaPrTLyJs5OKjy8~nyxjCyzI~cOKUm4LU4bmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        alt='image'
      />
      {variant === 'default' ? (
        <button className='absolute top-4 right-4'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z'
              fill='white'
            />
            <path
              d='M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z'
              fill='#5B6366'
            />
          </svg>
        </button>
      ) : variant === 'uploading' ? (
        <>
          <div class='w-44xl h-44xl absolute top-0 left-0 rounded-t-lg bg-primary-shd7 opacity-90 flex items-center justify-center'></div>
          <div className='w-44xl h-44xl absolute top-0 left-0 rounded-t-lg flex items-center justify-center'>
            <div className='absolute flex items-center justify-center'>
              <Slider type='horizontal' progress={50} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div class='w-44xl h-44xl absolute top-0 left-0 rounded-t-lg bg-primary-shd7 opacity-90 flex items-center justify-center'></div>
          <div class='w-44xl h-44xl absolute top-0 left-0 rounded-t-lg flex items-center justify-center'>
            <Misc variant='error' />
          </div>
        </>
      )}
      <Input choice placeholder='Type caption (optional)'>
        <span className='absolute left-2 px-2 py-0.5 bg-grey-shd7 rounded-md font-sm text-grey'>
          A
        </span>
      </Input>
    </div>
  );
};

Uploading.propTypes = {
  variant: PropTypes.string,
};
export default Uploading;
