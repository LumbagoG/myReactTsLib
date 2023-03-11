// Библиотеки
import React from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";

// Enums
import { ECustomButtonVariants } from "@lib/components";

// Типы
import type { TCustomButton } from "./types/TCustomButton";

/**
 * Компонент кнопки
 * @constructor
 */
export const CustomButton: React.FC<PropsWithChildren<TCustomButton>> = ({
    children,
    disabled,
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    variant = ECustomButtonVariants.PRIMARY,
    ...restProps
}) => {
    // Если кнопка заблокирована, переданный обработчик не вызывается
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
    };

    return (
        // Кнопка
        <button disabled={disabled} onClick={handleClick} {...restProps}>
            {/* Ребенок кнопки  */}
            {children}
        </button>
    );
};
