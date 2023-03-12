// Библиотеки
import { addons } from "@storybook/addons";
import { myTheme } from "./myTheme";

/**
 * Задаем конфиг отображения storybook
 */
addons.setConfig({
    // Тема
    theme: myTheme,

    // Прочие настройки
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "top",
    enableShortcuts: true,
    showToolbar: true,
    selectedPanel: undefined,
    initialActive: "sidebar",

    // Sidebar
    sidebar: {
        showRoots: true,
        collapsedRoots: ["other"],
    },

    // Toolbar
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: true },
    },
});
