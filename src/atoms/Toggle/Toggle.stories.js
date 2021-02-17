import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
  },
};

const Template = (args) => <Toggle {...args} />;
export const ToggleButton = Template.bind({});
ToggleButton.args = {
  size: 'default',
  disabled: false,
};
