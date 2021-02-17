import React from 'react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['success', 'error', 'default'],
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Label = Template.bind({});
Label.args = {
  children: '',
  variant: 'success',
  label: true,
};

export const LabelWithRightIcon = Template.bind({});
LabelWithRightIcon.args = {
  children: (
    <svg
      className='absolute right-sv'
      width='8'
      height='5'
      viewBox='0 0 8 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.86198 0.195374L3.99998 3.05737L1.13798 0.195374L0.195312 1.13804L3.99998 4.94271L7.80465 1.13804L6.86198 0.195374Z'
        fill='#94ACB5'
      />
    </svg>
  ),
  variant: 'default',
  rightIcon: true,
  leftIcon: false,
  label: true,
  disabled: false,
  choice: false,
};

export const LabelWithLeftIcon = Template.bind({});
LabelWithLeftIcon.args = {
  children: (
    <svg
      className='absolute left-sv'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.999801 7.66669H1.66647V9.00002V12.3334C1.66647 13.0687 2.26447 13.6667 2.9998 13.6667H4.9998H8.9998H10.9998C11.7351 13.6667 12.3331 13.0687 12.3331 12.3334V9.00002V7.66669H12.9998C13.2691 7.66669 13.5131 7.50402 13.6158 7.25536C13.7191 7.00602 13.6618 6.71936 13.4711 6.52869L7.47113 0.528691C7.21047 0.268024 6.78913 0.268024 6.52847 0.528691L0.528467 6.52869C0.337801 6.71936 0.280467 7.00602 0.383801 7.25536C0.486467 7.50402 0.730467 7.66669 0.999801 7.66669ZM5.66647 12.3334V9.00002H8.33313V12.3334H5.66647ZM6.9998 1.94269L10.9998 5.94269V9.00002L11.0005 12.3334H9.66647V9.00002C9.66647 8.26469 9.06847 7.66669 8.33313 7.66669H5.66647C4.93113 7.66669 4.33313 8.26469 4.33313 9.00002V12.3334H2.9998V9.00002V7.00002V5.94269L6.9998 1.94269Z'
        fill='#8D9A9E'
      />
    </svg>
  ),
  variant: 'default',
  rightIcon: false,
  leftIcon: true,
  label: true,
  disabled: false,
  choice: false,
};

export const LabelWithPrefix = Template.bind({});
LabelWithPrefix.args = {
  children: (
    <div className='flex absolute left-sv items-center'>
      <span className='text-sm text-grey'>+20</span>
      <span className='ml-2 text-grey-shd6'>|</span>
    </div>
  ),
  variant: 'default',
  rightIcon: false,
  leftIcon: false,
  prefix: true,
  label: true,
  disabled: false,
  choice: false,
};

export const choice = Template.bind({});
choice.args = {
  children: (
    <span class='absolute left-2 px-2 py-0.5 bg-grey-shd7 rounded-md font-sm text-grey'>
      A
    </span>
  ),
  variant: 'default',
  rightIcon: false,
  leftIcon: false,
  prefix: false,
  label: true,
  disabled: false,
  choice: true,
};
