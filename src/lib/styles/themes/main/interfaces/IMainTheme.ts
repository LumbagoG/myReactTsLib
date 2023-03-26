// Interfaces
import type { ITheme } from "@lib/interfaces";

// Types
import type { TMainColors } from "@lib/styles/themes/main";

/**
 * Interfaces of main theme
 */
export interface TMainTheme {
    (darkTheme: object, lightTheme: object): ITheme<TMainColors>;
}
