import {ComponentStory, ComponentMeta} from '@storybook/react';

import React from 'react';

import {VotingComponent} from '.';

export default {
  title: 'UI Revamp v2.0/atoms/vote',
  component: VotingComponent,
  argTypes: {
    variant: {
      options: ['column', 'row'],
      control: {type: 'radio'},
    },
  },
} as ComponentMeta<typeof VotingComponent>;

const Template: ComponentStory<typeof VotingComponent> = args => <VotingComponent {...args} />;

export const Row = Template.bind({});
Row.args = {
  variant: 'row',
};

export const Column = Template.bind({});
Column.args = {
  variant: 'column',
};
