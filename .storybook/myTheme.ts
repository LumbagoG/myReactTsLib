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
    appBorderRadius: 8,

    // Типографика
    fontBase: '"Apple", sans-serif',
    fontCode: "monospace",

    // Цвета текста
    textColor: "#c9d1d9",
    textInverseColor: "#c9d1d9",

    // Toolbar
    barTextColor: "#c9d1d9",
    barSelectedColor: "#c9d1d9",
    barBg: "#161b22",

    // Цвета формы
    inputBg: "#161b22",
    inputBorder: "#c9d1d9",
    inputTextColor: "#c9d1d9",
    inputBorderRadius: 4,

    // Брэнд
    brandTitle: "LumbagoG",
    brandUrl: "https://github.com/LumbagoG",
    brandImage: "/glebLogo.png",
    brandTarget: "_blank",
});
