/**
 * Type of hex color type
 */
export type TColorValueHex = `#${string}`;

/**
 * Type of rgb color type
 */
export type TColorValueRgb = `rgb(${string})`;

/**
 * Type of rgba color type
 */
export type TColorValueRgba = `rgba(${string})`;

/**
 * Type of hsl color type
 */
export type TColorValueHsl = `hsl(${string})`;

/**
 * Type of hsla color type
 */
export type TColorValueHsla = `hsla(${string})`;

/**
 * Type of global color types
 */
export type TCssGlobals = "inherit" | "initial" | "revert" | "unset";

/**
 * Type color
 */
export type TCssColor =
    | "currentColor"
    | "transparent"
    | TColorValueHex
    | TColorValueRgb
    | TColorValueRgba
    | TColorValueHsl
    | TColorValueHsla
    | TCssGlobals;

/**
 * Type colors in theme
 */
export type TThemeColors<TColorName extends string, TColorNumber extends number, TColorType extends string> = {
    [key in TColorName]: {
        [key in TColorNumber]: TColorType;
    };
};
