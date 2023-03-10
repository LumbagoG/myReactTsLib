// Библиотеки
import { addons } from "@storybook/addons";

/**
 * Задаем конфиг отображения storybook
 */
addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "bottom",
    enableShortcuts: true,
    showToolbar: true,
    theme: {
        base: "dark",
        brandTitle: "Hi",
    },
    selectedPanel: undefined,
    initialActive: "sidebar",
    sidebar: {
        showRoots: false,
        collapsedRoots: ["other"],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
