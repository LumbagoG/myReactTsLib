// Библиотеки
import { ThemeProvider } from "styled-components";

// Стили
import GlobalStyle from "@lib/styles/themes/globalStyle";

/**
 * Глобальный декоратор историй
 * @param Story
 * @param context
 */
export const WithThemeDecorator = (Story: any) => {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    );
};
