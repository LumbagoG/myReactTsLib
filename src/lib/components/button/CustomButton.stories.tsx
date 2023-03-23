// Компонент
import { CustomButtonStyled as CustomButton, ECustomButtonVariants } from "@lib/components/button/index";

// Types
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

/**
 * Components description
 */
const meta: ComponentMeta<typeof CustomButton> = {
    title: "Design System/Button",
    component: CustomButton,
};
export default meta;

/**
 * Default button
 */
export const Default: ComponentStoryObj<typeof CustomButton> = {
    args: {
        children: "primary",
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