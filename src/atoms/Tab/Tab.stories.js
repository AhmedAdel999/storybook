import React from 'react';
import Tab from './Tab';

export default {
  title: 'Atoms/Tab',
  component: Tab,
  argTypes: {
    withIcon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <Tab {...args} />;
export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  children: 'Label',
  withIcon: false,
  disabled: false,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: (
    <div class='flex'>
      <svg
        class='mr-2'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.2687 5.72398C13.2361 5.65331 13.1954 5.58598 13.1381 5.52865L9.13808 1.52865C9.08075 1.47131 9.01341 1.43065 8.94275 1.39798C8.92275 1.38865 8.90141 1.38331 8.88008 1.37598C8.82408 1.35731 8.76675 1.34531 8.70741 1.34198C8.69341 1.34065 8.68075 1.33331 8.66675 1.33331H4.00008C3.26475 1.33331 2.66675 1.93131 2.66675 2.66665V13.3333C2.66675 14.0686 3.26475 14.6666 4.00008 14.6666H12.0001C12.7354 14.6666 13.3334 14.0686 13.3334 13.3333V5.99998C13.3334 5.98598 13.3261 5.97331 13.3247 5.95865C13.3214 5.89931 13.3101 5.84198 13.2907 5.78598C13.2841 5.76465 13.2781 5.74398 13.2687 5.72398ZM11.0574 5.33331H9.33341V3.60931L11.0574 5.33331ZM4.00008 13.3333V2.66665H8.00008V5.99998C8.00008 6.36865 8.29808 6.66665 8.66675 6.66665H12.0001L12.0014 13.3333H4.00008Z'
          fill='#5B6366'
        />
        <path
          d='M5.33325 7.99998H10.6666V9.33331H5.33325V7.99998ZM5.33325 10.6666H10.6666V12H5.33325V10.6666ZM5.33325 5.33331H6.66659V6.66665H5.33325V5.33331Z'
          fill='#5B6366'
        />
      </svg>
      <span class='hidden md:block'>Label</span>
    </div>
  ),
  withIcon: true,
  disabled: false,
};
