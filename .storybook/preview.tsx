import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  docs: {
    theme: darkTheme,
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: darkTheme.appBg,
      },
      {
        name: 'light',
        value: lightTheme.appBg,
      },
    ],
  },
};

export const decorators = [
  (story: () => React.ReactNode) => {
    return (
      <div
        style={{
          padding: 24,
        }}
      >
        {story()}
      </div>
    );
  },
];
