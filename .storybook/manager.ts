// Library's
import { addons } from "@storybook/addons";
import { myTheme } from "./myTheme";

/**
 * Config view storybook
 */
addons.setConfig({
    // Theme
    theme: myTheme,

    // Other settings
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
