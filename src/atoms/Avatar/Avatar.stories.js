import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'not filled', 'anonymous'],
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;
export const AvatarIcon = Template.bind({});
AvatarIcon.args = {
  size: 'large',
  variant: 'filled',
};
