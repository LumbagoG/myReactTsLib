// Компонент
import {
    CustomButtonStyled as CustomButton,
    ECustomButtonVariants,
} from "@lib/components/button/index";

// Типы
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
/**
 * Описание компонента
 */
const meta: ComponentMeta<typeof CustomButton> = {
    title: "Components/Button",
    component: CustomButton,
};
export default meta;

/**
 * Дефолтная кнопка
 */
export const Default: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "primary",
        variant: ECustomButtonVariants.PRIMARY,
    },
};

/**
 * Заблокированная кнопка
 */
export const Disabled: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "disabled",
        disabled: true,
    },
};

/**
 * Успех
 */
export const SuccessVariant: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "success bug",
        variant: ECustomButtonVariants.SUCCESS,
    },
};

/**
 * Кнопка с обработчиком нажатия
 */
export const WithClickHandler: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "click me",
        onClick: () => alert("button clicked"),
    },
};
