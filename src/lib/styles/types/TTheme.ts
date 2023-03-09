// Типы
import type { TNumberColor } from "@lib";
import type { TNameColor } from "@lib";

/**
 * Интерфейс цветов основной темы
 */
export type TTheme = {
    [key in TNameColor]: {
        [key in TNumberColor]: string;
    };
};
