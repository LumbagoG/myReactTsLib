// Types
import type { TMainColors } from "@lib/styles/themes/main/types";

/**
 * Custom configure theme
 * @param colors
 * @param themeMode
 */
export const customTheme = (colors: TMainColors, themeMode: object) => {
    return {
        /**
         * Все Colors
         *
         */
        color: { ...colors },

        /**
         * Мод темы
         */
        ...themeMode,
    };
};
