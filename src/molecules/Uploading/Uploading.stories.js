import React from 'react';
import Uploading from './Uploading';

export default {
  title: 'Molecules/Uploading',
  component: Uploading,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'uploading', 'error'],
      },
    },
  },
};

const Template = (args) => <Uploading {...args} />;
export const UploadingComponent = Template.bind({});
UploadingComponent.args = {
  variant: 'default',
};
