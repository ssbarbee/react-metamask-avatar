import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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

export const VariantSize16: StoryObj<typeof MetaMaskAvatar> = {
  args: {
    address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    size: 16,
  },
};

export const SquareViaStyle: StoryObj<typeof MetaMaskAvatar> = {
  args: {
    address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    size: 48,
    style: { borderRadius: 0 },
  },
};

export const SquareViaClass: StoryObj<typeof MetaMaskAvatar> = {
  decorators: [
    (Story) => (
      <>
        <style>{`.square-avatar { border-radius: 0; }`}</style>
        <Story />
      </>
    ),
  ],
  args: {
    address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    size: 48,
    className: 'square-avatar',
  },
};
