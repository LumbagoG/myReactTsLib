// Компонент
import { CustomButtonStyled as CustomButton, ECustomButtonVariants } from "./";

// Types
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

/**
 * Components description
 */
const meta: ComponentMeta<typeof CustomButton> = {
    title: "Components/Button",
    component: CustomButton,
};
export default meta;

/**
 * Default button
 */
export const Default: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "primary",
        variant: ECustomButtonVariants.PRIMARY,
    },
};

/**
 * Disabled button
 */
export const Disabled: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "disabled",
        disabled: true,
    },
};

/**
 * Success button
 */
export const SuccessVariant: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "success bug",
        variant: ECustomButtonVariants.SUCCESS,
    },
};

/**
 * Button with click handle
 */
export const WithClickHandler: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "click me",
        onClick: () => alert("button clicked"),
    },
};
