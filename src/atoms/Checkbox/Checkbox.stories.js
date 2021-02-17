import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;
export const CheckboxButton = Template.bind({});
CheckboxButton.args = {
  size: 'default',
  disabled: true,
};
