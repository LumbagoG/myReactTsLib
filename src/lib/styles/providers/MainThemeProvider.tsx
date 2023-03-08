// Библиотеки
import React from "react";
import { ThemeProvider } from "styled-components";

// Типы
import type { PropsWithChildren } from "react";

// Тема
import { mainTheme } from "@lib";

/**
 * Провайдер основной темы
 * @constructor
 */
export const MainThemeProvider: React.FC<PropsWithChildren> = ({
    children,
}) => <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
