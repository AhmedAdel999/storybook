import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ progress, type }) => {
  const circular = {};
  circular.radius = 60;
  circular.stroke = 4;
  circular.normalizedRadius = circular.radius - circular.stroke * 2;
  circular.circumference = circular.normalizedRadius * 2 * Math.PI;
  return type === 'horizontal' ? (
    <div className='w-13xxxl h-2 rounded-sm bg-white'>
      <div
        className={`${
          progress === 100 ? 'bg-success' : 'bg-primary'
        } h-2 rounded-sm`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  ) : type === 'vertical' ? (
    <div
      className={`h-19xxxl w-2 rounded-sm ${
        progress === 100 ? 'bg-success' : 'bg-primary-shd5'
      }`}
    >
      <div
        className='w-2 bg-white rounded-t-sm'
        style={{ height: `${100 - progress}%` }}
      ></div>
    </div>
  ) : (
    <svg width={`circular.radius * 2`} height={`circular.radius * 2`}>
      <circle
        className={`-rotate-90 origin-center stroke-current ${
          progress > 50 ? 'text-primary' : 'text-error'
        }`}
        stroke-width={`${circular.stroke}`}
        stroke-dasharray={`${circular.circumference} ${circular.circumference}`}
        style={{
          strokeDashoffset: `${
            circular.circumference - (progress / 100) * circular.circumference
          }`,
        }}
        fill='transparent'
        r='52'
        cx={`${circular.radius}`}
        cy={`${circular.radius}`}
      />
    </svg>
  );
};

Slider.propTypes = {
  progress: PropTypes.number,
  type: PropTypes.string,
};
export default Slider;
