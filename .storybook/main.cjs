module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],

  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },

  "features": {
    "storyStoreV7": true
  },

  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-design-system'
    }

    return config
  },

  docs: {
    autodocs: true
  }
}