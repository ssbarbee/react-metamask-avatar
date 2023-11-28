| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-97.22%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-90.9%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-96.96%25-brightgreen.svg?style=flat) |

# react-metamask-avatar

![https://img.shields.io/npm/v/react-metamask-avatar](https://img.shields.io/npm/v/react-metamask-avatar)
![https://img.shields.io/github/issues-raw/ssbarbee/react-metamask-avatar](https://img.shields.io/github/issues-raw/ssbarbee/react-metamask-avatar)
![https://img.shields.io/npm/dw/react-metamask-avatar](https://img.shields.io/npm/dw/react-metamask-avatar)

🤡 A React component for rendering MetaMask avatars based on account address

## Overview 🧐

The `MetaMaskAvatar` component is a React functional component that takes in a required `address` property of type `string` and an optional `size` property of type `number`. It returns an image avatar of the given Ethereum address provided as a string and renders it within an `AvatarWrapper` component, which can be styled using the `className` property.

## Demo 😈

Hosted [storybook](https://ssbarbee.github.io/react-metamask-avatar)

## Installation 📦

### npm

```npm install react-metamask-avatar```

### yarn

```yarn add react-metamask-avatar```

## Props ℹ️

### address
The **required** address property is a **string** of length 42 that represents an Ethereum address. If it is not provided or does not meet the expected length, the component returns null.

### size
The **optional** size property is a **number** that sets the size of the avatar image in pixels. If not provided, it defaults to **24**.

### className
The **optional** className property is a **string** that allows for custom styling using the AvatarWrapper component. It will be added to the className prop of the AvatarWrapper component.

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

Under the hood `react-metamask-avatar` uses `@emotion/styled`. Therefore, following a [guide](https://emotion.sh/docs/styled#styling-any-component) 
for custom styling emotion elements is the way to go.

Example: 

```tsx
import React from 'react';
import { MetaMaskAvatar } from 'react-metamask-avatar';

const SquareMetaMaskAvatar = styled(MetaMaskAvatar)`
    border-radius: none;
`;

export const App: React.FunctionComponent = () => {
    return (
        <SquareMetaMaskAvatar address="0xb01F14d1C9000D453241221EB54648F1C378c970" size={24} />
    )
}
```