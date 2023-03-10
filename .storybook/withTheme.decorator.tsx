// Библиотеки
import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * Глобальный декоратор историй
 * @param Story
 */
export const withTheme = (Story: any) => {
    return (
        <ThemeProvider theme={{ color: "#000" }}>
            <Story />
        </ThemeProvider>
    );
};
