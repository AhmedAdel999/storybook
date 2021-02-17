import React from 'react';
import Text from './Text';

export default {
  title: 'Molecules',
  component: Text,
};

const Template = (args) => <Text {...args} />;
export const TextComponent = Template.bind({});
TextComponent.args = {
  withDelete: true,
};
