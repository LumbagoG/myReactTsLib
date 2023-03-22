// Types
import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

// Enums
import type { ECustomButtonVariants } from "@lib/components/button";

/**
 * Types props button
 */
export type TCustomButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Button variants
     */
    variant?: ECustomButtonVariants;

    /**
     * Click event handler
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
