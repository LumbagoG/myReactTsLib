// Типы
import {ButtonHTMLAttributes, MouseEventHandler} from "react";
import {ECustomButtonVariants} from "../enum/ECustomButton";

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
