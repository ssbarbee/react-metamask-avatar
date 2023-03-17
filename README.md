| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-75.86%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-66.66%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-42.85%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-75%25-red.svg?style=flat) |

# react-metamask-avatar

![https://img.shields.io/npm/v/react-metamask-avatar](https://img.shields.io/npm/v/react-metamask-avatar)
![https://img.shields.io/github/issues-raw/ssbarbee/react-metamask-avatar](https://img.shields.io/github/issues-raw/ssbarbee/react-metamask-avatar)
![https://img.shields.io/npm/dw/react-metamask-avatar](https://img.shields.io/npm/dw/react-metamask-avatar)

🤡 A React component for rendering MetaMask avatars based on account address

## Overview 🧐

Create a React package in Typescript to provide rendering of Metamask jazzicon avatar.

## Installation 📦

### npm

```npm install react-metamask-avatar```

### yarn

```yarn add react-metamask-avatar```

## Usage 📚

```tsx

import { MetaMaskAvatar } from 'react-metamask-avatar';

export const MyComponent = () => {
    return (
        <MetaMaskAvatar variant="medium" address="0xb01F14d1C9000D453241221EB54648F1C378c970" />
    )
}
```
