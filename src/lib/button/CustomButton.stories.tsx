import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CustomButtonStyled, ECustomButtonVariants } from "./";

// описание компонента и ссылка на него
const meta: ComponentMeta<typeof CustomButtonStyled> = {
    title: "Design System/Button",
    component: CustomButtonStyled,
};
export default meta;

// истории
// дефолтная кнопка
export const Default: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "primary",
    },
};
// заблокированная кнопка
export const Disabled: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "disabled",
        disabled: true,
    },
};
// успех
export const SuccessVariant: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "success bug",
        variant: ECustomButtonVariants.SUCCESS,
    },
};
// кнопка с обработчиком нажатия
export const WithClickHandler: ComponentStoryObj<typeof CustomButtonStyled> = {
    args: {
        children: "click me",
        onClick: () => alert("button clicked"),
    },
};
