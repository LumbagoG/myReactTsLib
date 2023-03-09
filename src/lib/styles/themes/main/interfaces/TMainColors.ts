// Типы
import type { TNameColor, TNumberColor } from "@lib/styles/types";

/**
 * Интерфейс цветов основной темы
 */
export type TMainColors = {
    [key in TNameColor]: {
        [key in TNumberColor]: string;
    };
};
