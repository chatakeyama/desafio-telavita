import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../components/Header';

export default {
  title: 'AnimaVita/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};


// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
