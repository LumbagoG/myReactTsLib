// Colors
import { mainColors } from "@lib/styles";

// Hooks
import { useThemeMode } from "@lib/hooks";

const darkMainTheme = {};
const lightMainTheme = {};

/*
 * Main theme
 */
export const mainTheme = () => {
    // Current theme
    const { theme } = useThemeMode();

    /**
     * Get theme mode
     */
    const themeMode = theme === "dark" ? darkMainTheme : lightMainTheme;

    return {
        /**
         * Colors
         */
        color: { ...mainColors },

        /**
         * Theme mode
         */
        ...themeMode,
    };
};
