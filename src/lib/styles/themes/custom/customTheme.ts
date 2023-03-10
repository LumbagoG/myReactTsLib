// Типы
import type { TMainColors } from "@lib/styles/themes/main/types";

/**
 * Конфигурируемая тема
 * @param colors
 * @param themeMode
 */
export const customTheme = (colors: TMainColors, themeMode: object) => {
    return {
        /**
         * Все Цвета
         *
         */
        color: { ...colors },

        /**
         * Мод темы
         */
        ...themeMode,
    };
};
