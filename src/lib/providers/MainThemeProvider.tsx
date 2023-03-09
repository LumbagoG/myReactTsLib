// Библиотеки
import React from "react";
import { ThemeProvider } from "styled-components";

// Типы
import type { PropsWithChildren } from "react";

// Тема
import { mainTheme } from "@lib";
import GlobalStyle from "@lib/styles/themes/globalStyle";

/**
 * Провайдер основной темы
 * @constructor
 */
export const MainThemeProvider: React.FC<PropsWithChildren> = ({
    children,
}) => (
    <ThemeProvider theme={mainTheme}>
        {/* Подключаем глобальные стили */}
        <GlobalStyle />

        {/* Ребенок */}
        {children}
    </ThemeProvider>
);
