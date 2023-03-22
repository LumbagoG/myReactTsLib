// Types
import type { TNumberColor } from "@lib";
import type { TNameColor } from "@lib";

/**
 * Interface of colors main theme
 */
export type TTheme = {
    [key in TNameColor]: {
        [key in TNumberColor]: string;
    };
};
