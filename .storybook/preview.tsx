// Theme decorator
import { WithThemeDecorator } from "./withTheme.decorator";
import { Parameters } from "@storybook/react";

/**
 * Params stories
 */
export const parameters: Parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: "centered",
};

export const decorators = [WithThemeDecorator];
