| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-95.34%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-86.66%25-yellow.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-97.43%25-brightgreen.svg?style=flat) |

# react-metamask-avatar

[![npm version](https://img.shields.io/npm/v/react-metamask-avatar.svg)](https://www.npmjs.com/package/react-metamask-avatar)
[![npm downloads](https://img.shields.io/npm/dw/react-metamask-avatar.svg)](https://www.npmjs.com/package/react-metamask-avatar)
[![GitHub issues](https://img.shields.io/github/issues-raw/ssbarbee/react-metamask-avatar.svg)](https://github.com/ssbarbee/react-metamask-avatar/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

🎭 A React component for rendering MetaMask-style Jazzicon avatars based on Ethereum account address.

## Features ✨

- **Deterministic** - Same address always generates the same avatar
- **TypeScript-First** - Full type definitions included
- **Customizable** - Control size, styling via props or CSS
- **Lightweight** - Minimal bundle impact

## Overview 🧐

The `MetaMaskAvatar` component is a React functional component that takes in a required `address` property of type `string` and an optional `size` property of type `number`. It returns an image avatar of the given Ethereum address provided as a string and renders it within an `AvatarWrapper` component, which can be styled using the `className` property.

## Demo 😈

Hosted [storybook](https://ssbarbee.github.io/react-metamask-avatar)

## Installation 📦

### npm

```bash
npm install react-metamask-avatar @metamask/jazzicon
```

### yarn

```bash
yarn add react-metamask-avatar @metamask/jazzicon
```

### pnpm

```bash
pnpm add react-metamask-avatar @metamask/jazzicon
```

**Note:** `@metamask/jazzicon` is a peer dependency.

## Props ℹ️

### address
The **required** address property is a **string** of length 42 that represents an Ethereum address. If it is not provided or does not meet the expected length, the component returns null.

### size
The **optional** size property is a **number** that sets the size of the avatar image in pixels. If not provided, it defaults to **24**.

### className
The **optional** className property is a **string** that allows for custom styling via CSS classes.

### style
The **optional** style property is a **React.CSSProperties** object that allows for inline style overrides.

## Usage 📚

```tsx
import React from 'react';
import { MetaMaskAvatar } from 'react-metamask-avatar';

export const App: React.FunctionComponent = () => {
    return (
        <MetaMaskAvatar address="0xb01F14d1C9000D453241221EB54648F1C378c970" size={24} />
    )
}
```

## FAQ 🙋❓

### I want to add custom styling. How can I do that?

The component accepts `className` and `style` props for custom styling.

#### Square avatar via style prop

```tsx
import React from 'react';
import { MetaMaskAvatar } from 'react-metamask-avatar';

export const App: React.FunctionComponent = () => {
    return (
        <MetaMaskAvatar
            address="0xb01F14d1C9000D453241221EB54648F1C378c970"
            size={48}
            style={{ borderRadius: 0 }}
        />
    )
}
```

#### Square avatar via className prop

```css
/* styles.css */
.square-avatar {
    border-radius: 0;
}
```

```tsx
import React from 'react';
import { MetaMaskAvatar } from 'react-metamask-avatar';
import './styles.css';

export const App: React.FunctionComponent = () => {
    return (
        <MetaMaskAvatar
            address="0xb01F14d1C9000D453241221EB54648F1C378c970"
            size={48}
            className="square-avatar"
        />
    )
}
```

## License 📄

MIT
