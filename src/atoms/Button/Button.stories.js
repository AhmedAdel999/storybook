import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'text'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  variant: 'primary',
  size: 'large',
  children: 'Button Text',
  iconOnly: false,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'primary',
  size: 'large',
  children: (
    <div class='flex'>
      <svg
        class='w-3 mr-2 fill-current'
        viewBox='0 0 12 8'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z' />
      </svg>
      Button Text
    </div>
  ),
  iconOnly: false,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: 'primary',
  size: 'large',
  children: (
    <div class='flex'>
      Button Text
      <svg
        class='w-3 ml-2 fill-current'
        viewBox='0 0 12 8'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z' />
      </svg>
    </div>
  ),
  iconOnly: false,
};

export const WithIconOnly = Template.bind({});
WithIconOnly.args = {
  variant: 'primary',
  size: 'large',
  iconOnly: true,
  children: (
    <svg
      class='w-3 fill-current'
      viewBox='0 0 12 8'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z' />
    </svg>
  ),
};
