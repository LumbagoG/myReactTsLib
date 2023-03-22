// Types
import type { TNameColor, TNumberColor } from "@lib/styles/types";

/**
 * Interface of colors main theme
 */
export type TMainColors = {
    [key in TNameColor]: {
        [key in TNumberColor]: string;
    };
};
