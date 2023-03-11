import React from "react";
// Декоратор темы
import { withTheme } from "./withTheme.decorator";

// Стили
import GlobalStyle from "@lib/styles/themes/globalStyle";

/**
 * Параметры историй
 */
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: "centered",
};

const withGlobalStyle = (Story: any) => (
    <>
        <GlobalStyle />
        <Story />
    </>
);

export const decorators = [withGlobalStyle, withTheme];
