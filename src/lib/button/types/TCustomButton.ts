// Типы
import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

// Enums
import type { ECustomButtonVariants } from "@lib/button";

/**
 * Типы props компонента кнопки
 */
export type TCustomButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Вариант кнопки
     */
    variant?: ECustomButtonVariants;

    /**
     * Событие на клик
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
