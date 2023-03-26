// Colors
import { mainColors } from "@lib/styles/themes/main";

// Hooks
import { useThemeMode } from "@lib/hooks";

// Types
import type { TMainTheme } from "@lib/styles/themes/main";

/*
 * Main theme
 */
export const mainTheme: TMainTheme = (darkTheme, lightTheme) => {
    // Current theme
    const { theme } = useThemeMode();

    /**
     * Get theme mode
     */
    const themeMode = theme === "dark" ? darkTheme : lightTheme;

    return {
        /**
         * Colors main theme
         */
        color: mainColors,

        /**
         * Theme mode main theme
         */
        ...themeMode,
    };
};
