import React from 'react';
import Misc from './Misc';

export default {
  title: 'Molecules/Misc',
  component: Misc,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['success', 'error'],
      },
    },
  },
};

const Template = (args) => <Misc {...args} />;

export const MiscComponent = Template.bind({});
MiscComponent.args = {
  variant: 'success',
};
