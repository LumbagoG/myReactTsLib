// Библиотеки
import React from "react";
import { ThemeProvider } from "styled-components";

// Типы
import type { ThemeProviderProps } from "styled-components";

/**
 * Провайдер кастомной темы
 * @constructor
 */
export const CustomThemeProvider: React.FC<ThemeProviderProps<object>> = ({
    children,
    theme,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
