// Library's
import React from "react";
import { ThemeProvider } from "styled-components";

// Types
import type { PropsWithChildren } from "react";

// styles
import { mainTheme } from "@lib";
import GlobalStyle from "@lib/styles/themes/globalStyle";

/**
 * Provider main theme
 * @constructor
 */
export const MainThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={mainTheme}>
        {/* Importing global styles */}
        <GlobalStyle />

        {/* Children */}
        {children}
    </ThemeProvider>
);
