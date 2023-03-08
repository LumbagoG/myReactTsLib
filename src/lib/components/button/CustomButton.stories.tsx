// Компонент
import {
    CustomButtonStyled,
    ECustomButtonVariants,
} from "@lib/components/button/index";

// Типы
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

/**
 * Описание компонента
 */
const meta: ComponentMeta<typeof CustomButtonStyled> = {
    title: "Design System/Button",
    component: CustomButtonStyled,
};
export default meta;

/**
 * Дефолтная кнопка
 */
export const Default: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "primary",
    },
};

/**
 * Заблокированная кнопка
 */
export const Disabled: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "disabled",
        disabled: true,
    },
};

/**
 * Успех
 */
export const SuccessVariant: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "success bug",
        variant: ECustomButtonVariants.SUCCESS,
    },
};

/**
 * Кнопка с обработчиком нажатия
 */
export const WithClickHandler: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "click me",
        onClick: () => alert("button clicked"),
    },
};
