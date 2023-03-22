// Библиотека
import { create } from "@storybook/theming";
// @ts-ignore
import glebLogo from "../public/images/glebLogo.png";

/**
 * My theme storybook
 */
export const myTheme = create({
    base: "dark",

    // UI
    appBg: "#0d1117",
    appContentBg: "#0d1117",
    appBorderColor: "#c9d1d9",
    appBorderRadius: 8,

    // Typography
    fontBase: '"Apple", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "#c9d1d9",
    textInverseColor: "#c9d1d9",

    // Toolbar
    barTextColor: "#c9d1d9",
    barSelectedColor: "#c9d1d9",
    barBg: "#161b22",

    // Forms colors
    inputBg: "#161b22",
    inputBorder: "#c9d1d9",
    inputTextColor: "#c9d1d9",
    inputBorderRadius: 4,

    // Brand
    brandTitle: "LumbagoG",
    brandUrl: "https://github.com/LumbagoG",
    brandImage: glebLogo,
    brandTarget: "_blank",
});
