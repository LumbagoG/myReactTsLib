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
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
                transcludeMarkdown: true,
            },
        },
        {
            name: "@storybook/addon-docs",
            options: {
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
        "@storybook/theming",
        "@storybook/addon-a11y",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-designs",
        "@storybook/addon-viewport",
        "@react-theming/storybook-addon",
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
            resolve: (await import("../vite.config")).default.resolve,
            optimizeDeps: {
                include: ["storybook-dark-mode"],
            },
        });
    },

    // Настройки typescript
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
};

// Экспортируем конфиг
module.exports = config;
