// Библиотека
import { create } from "@storybook/theming";

/**
 * Моя тема storybook
 */
export const myTheme = create({
    base: "dark",

    // UI
    appBg: "#0d1117",
    appContentBg: "#0d1117",
    appBorderColor: "#c9d1d9",
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "#c9d1d9",
    textInverseColor: "#c9d1d9",

    // Toolbar default and active colors
    barTextColor: "#c9d1d9",
    barSelectedColor: "#c9d1d9",
    barBg: "#0d1117",

    // Form colors
    inputBg: "#c9d1d9",
    inputBorder: "#c9d1d9",
    inputTextColor: "#c9d1d9",
    inputBorderRadius: 4,

    brandTitle: "LumbagoG",
    brandUrl: "https://github.com/LumbagoG",
    brandImage: "https://avatars.githubusercontent.com/u/47673320?v=4",
    brandTarget: "_blank",
});
