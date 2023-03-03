// Библиотеки
import React, {MouseEventHandler, PropsWithChildren} from 'react';

// Типы
import {TCustomButton} from "./types/TCustomButton";

/**
 * Вариации компонента кнопки
 */
export enum ECustomButtonVariants {
    PRIMARY = "primary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
}

/**
 * Компонент кнопки
 * @constructor
 */
export const CustomButton: React.FC<PropsWithChildren<TCustomButton>> = ({
      children,
      disabled,
      onClick,
      variant = ECustomButtonVariants.PRIMARY,
      ...restProps
  }) => {
    // если кнопка заблокирована, переданный обработчик не вызывается
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
    };

    return (
        <button disabled={disabled} onClick={handleClick} {...restProps}>
            {children}
        </button>
    );
};
