// Цвета
import { mainColors } from "@lib/styles";

// Хуки
import { useThemeMode } from "@lib/hooks";

const darkMainTheme = {};
const lightMainTheme = {};

/*
 * Основная тема
 */
export const mainTheme = () => {
    // Текущая тема
    const { theme } = useThemeMode();

    /**
     * Мод темы
     */
    const themeMode = theme === "dark" ? darkMainTheme : lightMainTheme;

    return {
        /**
         * Все Цвета
         *
         */
        color: { ...mainColors },

        /**
         * Мод темы
         */
        ...themeMode,
    };
};
