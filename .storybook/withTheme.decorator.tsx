// Library's
import { ThemeProvider } from "styled-components";

// Styles
import GlobalStyle from "@lib/styles/themes/globalStyle";

/**
 * Global decorator of stories
 * @param Story
 */
export const WithThemeDecorator = (Story: any) => {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    );
};
