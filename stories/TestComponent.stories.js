import React from 'react';

import TestComponent from '../components/TestComponent/TestComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Elements/TestComponent',
  component: TestComponent,
};

const Template = (args) => <TestComponent {...args} />;

export const Default = Template.bind({});
