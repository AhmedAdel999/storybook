import React from 'react';
import Slider from './Slider';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['horizontal', 'circular', 'vertical'],
      },
    },
  },
};

const Template = (args) => <Slider {...args} />;
export const SliderComponent = Template.bind({});
SliderComponent.args = {
  type: 'horizontal',
  progress: 50,
};
