import { render, screen } from '@testing-library/react';
import React from 'react';

import { MetaMaskAvatar } from './index';

describe('MetaMaskAvatar component', () => {
  test('renders null if address prop is not provided or is not of length 42', () => {
    const { container } = render(<MetaMaskAvatar address={''} />);
    expect(container.firstChild).toBeNull();

    const { container: container2 } = render(<MetaMaskAvatar address="invalid_address" />);
    expect(container2.firstChild).toBeNull();
  });

  test('renders AvatarWrapper component with img tag with correct src and size', () => {
    const address = '0x0000000000000000000000000000000000000000';
    const size = 48;
    render(<MetaMaskAvatar address={address} size={size} />);
    const avatarWrapper = screen.getByTestId('MetaMaskAvatar-AvatarWrapper');
    const image = screen.getByTestId(`MetaMaskAvatar-Image-${size}x${size}`);
    expect(avatarWrapper).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='48' height='48'%3E%3Crect x='0' y='0' width='48' height='48' transform='translate(5.3839952771887765 -8.001465934850284) rotate(458.4 24 24)' fill='%232362E1'/%3E%3Crect x='0' y='0' width='48' height='48' transform='translate(-23.045188934475316 11.988527453229947) rotate(268.8 24 24)' fill='%23F94301'/%3E%3Crect x='0' y='0' width='48' height='48' transform='translate(-13.614381118952135 44.220023821025066) rotate(117.3 24 24)' fill='%23FA7900'/%3E%3C/svg%3E`,
    );
    expect(avatarWrapper).toHaveStyle(`width: ${size}px`);
    expect(avatarWrapper).toHaveStyle(`height: ${size}px`);
  });

  test('renders AvatarWrapper component with className passed as prop', () => {
    const address = '0x0000000000000000000000000000000000000000';
    const size = 48;
    const className = 'custom-class';
    render(<MetaMaskAvatar address={address} className={className} size={size} />);
    const avatarWrapper = screen.getByTestId('MetaMaskAvatar-AvatarWrapper');
    expect(avatarWrapper).toBeInTheDocument();
  });

  test('merges base class with custom className', () => {
    const address = '0x0000000000000000000000000000000000000000';
    const className = 'custom-class';
    render(<MetaMaskAvatar address={address} className={className} />);
    const avatarWrapper = screen.getByTestId('MetaMaskAvatar-AvatarWrapper');
    expect(avatarWrapper).toHaveClass('__rma_a7b3__');
    expect(avatarWrapper).toHaveClass('custom-class');
  });

  test('applies style prop for inline style overrides', () => {
    const address = '0x0000000000000000000000000000000000000000';
    render(<MetaMaskAvatar address={address} style={{ borderRadius: 0 }} />);
    const avatarWrapper = screen.getByTestId('MetaMaskAvatar-AvatarWrapper');
    expect(avatarWrapper).toHaveStyle('border-radius: 0');
  });

  test('injects base styles into document head', () => {
    const address = '0x0000000000000000000000000000000000000000';
    render(<MetaMaskAvatar address={address} />);
    const styleTag = document.getElementById('__rma_styles__');
    expect(styleTag).toBeInTheDocument();
    expect(styleTag?.textContent).toContain('border-radius:50%');
    expect(styleTag?.textContent).toContain('overflow:hidden');
  });
});
