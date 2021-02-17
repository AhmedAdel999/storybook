import React from 'react';
import Radio from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
  },
};

const Template = (args) => <Radio {...args} />;
export const RadioButton = Template.bind({});
RadioButton.args = {
  size: 'default',
  disabled: false,
};
