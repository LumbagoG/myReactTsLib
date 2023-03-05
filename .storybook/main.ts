// Типы
import type { StorybookConfig } from '@storybook/core-common';

/**
 * Конфиг storybook
 */
const config: StorybookConfig = {
  // Конфиг историй
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx"
  ],

  // Расширения
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },

  // Настройки typescript
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
}

// Экспортируем конфиг
module.exports = config;
