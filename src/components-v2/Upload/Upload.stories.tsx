import {ComponentStory, ComponentMeta} from '@storybook/react';

import React from 'react';

import {Upload} from '.';

export default {
  title: 'UI Revamp v2.0/components/Upload',
  component: Upload,
  argTypes: {},
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = args => <Upload {...args} />;

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  title: 'Image',
  accept: ['image/*'],
};