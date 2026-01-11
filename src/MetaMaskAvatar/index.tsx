import React from 'react';

import { getMetamaskAvatar } from '../getMetamaskAvatar';

export type MetaMaskAvatarProps = {
  address: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const BASE_CLASS = '__rma_a7b3__';
const STYLE_ID = '__rma_styles__';

const baseCSS = `.${BASE_CLASS}{border-radius:50%;padding:0;margin:0;display:inline-block;background:rgb(242,98,2);overflow:hidden}`;

const injectStyles = (): void => {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = baseCSS;
  document.head.appendChild(style);
};

export const MetaMaskAvatar: React.FunctionComponent<MetaMaskAvatarProps> = ({
  size = 24,
  address,
  className,
  style,
}) => {
  if (!address || address.length !== 42) {
    return null;
  }

  injectStyles();

  const combinedClassName = className ? `${BASE_CLASS} ${className}` : BASE_CLASS;

  return (
    <div
      className={combinedClassName}
      data-testid="MetaMaskAvatar-AvatarWrapper"
      style={{ width: size, height: size, ...style }}
    >
      <img
        alt="avatar"
        data-testid={`MetaMaskAvatar-Image-${size}x${size}`}
        src={getMetamaskAvatar({
          address,
          size,
        })}
      />
    </div>
  );
};
