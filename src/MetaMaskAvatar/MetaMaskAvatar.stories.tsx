import { Meta, StoryObj } from '@storybook/react';

import { MetaMaskAvatar } from './index';

export default {
  title: 'Components/MetaMaskAvatar',
  component: MetaMaskAvatar,
  args: {},
} as Meta<typeof MetaMaskAvatar>;

export const Default: StoryObj<typeof MetaMaskAvatar> = {
  args: {
    address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
  },
};

export const VariantSize24: StoryObj<typeof MetaMaskAvatar> = {
  args: {
    address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    size: 24,
  },
};
