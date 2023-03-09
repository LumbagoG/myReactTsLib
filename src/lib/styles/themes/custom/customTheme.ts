// Типы
import type { TMainColors } from "@lib/styles/themes/main/interfaces";

/**
 * Конфигурируемая тема
 * @param colors
 * @param themeMode
 */
export const customTheme = (colors: TMainColors, themeMode: any) => {
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
