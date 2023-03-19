import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MetaMaskAvatar } from './index';

export default {
  title: 'Components/MetaMaskAvatar',
  component: MetaMaskAvatar,
  args: {},
} as ComponentMeta<typeof MetaMaskAvatar>;

const Template: ComponentStory<typeof MetaMaskAvatar> = (args) => <MetaMaskAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
};

export const VariantSize24 = Template.bind({});
VariantSize24.args = {
  address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
  size: 24,
};
