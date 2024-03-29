// Library's
import { mergeConfig } from "vite";

// Types
import type { StorybookConfig } from "@storybook/core-common";
import type { StorybookViteConfig } from "@storybook/builder-vite";

const config: StorybookConfig & StorybookViteConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],

    staticDirs: ["../public"],

    addons: [
        "@storybook/addon-a11y", // Тестирование
        "@storybook/addon-actions", // Консоль с событиями
        {
            name: "@storybook/addon-docs", // Документация
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
                transcludeMarkdown: true,
            },
        },
        "@storybook/addon-essentials", // Коллекция дополнений
        "@storybook/addon-interactions", // Визуальная отладка взаимодействий и тестов
        "@storybook/addon-links", // Ссылки на истории внутри приложения
        "@storybook/addon-storysource", // Код истории
        "@storybook/addon-viewport", // Изменение размеров экрана истории
        "@storybook/theming", // Управление темами
        "storybook-addon-designs", // Интеграция с figma
        "storybook-addon-styled-components-themes/register", // Теминг styled-components
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
        disableTelemetry: true,
    },
    features: {
        storyStoreV7: true,
    },

    // Custom vite config
    async viteFinal(config) {
        return mergeConfig(
            config,
            {
                // @ts-ignore-next-line
                resolve: (await import("../vite.config.ts"))?.default?.resolve,
            },
            true
        );
    },

    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
};

module.exports = config;
