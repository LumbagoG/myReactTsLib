// Библиотеки
import { mergeConfig } from "vite";

// Типы
import type { StorybookConfig } from "@storybook/core-common";
import type { StorybookViteConfig } from "@storybook/builder-vite";

/**
 * Конфиг storybook
 */
const config: StorybookConfig & StorybookViteConfig = {
    // Конфиг историй
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],

    staticDirs: ["../public"],

    // Расширения
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-actions",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
                transcludeMarkdown: true,
            },
        },
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-links",
        "@storybook/addon-storysource",
        "@storybook/addon-viewport",
        "@storybook/addons",
        "@storybook/theming",
        "storybook-addon-designs",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
        disableTelemetry: true,
    },
    features: {
        storyStoreV7: true,
    },

    // Custom vite конфиг
    async viteFinal(config) {
        return mergeConfig(config, {
            // @ts-ignore-next-line
            resolve: (await import("../vite.config.ts"))?.default?.resolve,
        });
    },

    // Настройки typescript
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
};

// Экспортируем конфиг
module.exports = config;
