// Library's
import { ThemeProvider } from "styled-components";

// Styles
import GlobalStyle from "@lib/styles/themes/globalStyle";
import { darkMainTheme, mainTheme, lightMainTheme } from "@lib/styles";

/**
 * Global decorator of stories
 * @param Story
 */
export const WithThemeDecorator = (Story: any) => {
    return (
        <ThemeProvider theme={mainTheme(darkMainTheme, lightMainTheme)}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    );
};
