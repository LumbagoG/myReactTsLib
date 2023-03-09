// Библиотеки
import { createGlobalStyle, withTheme } from "styled-components";

// Основная тема
import { mainTheme } from "@lib/styles";

/**
 * Создание глобальных стилей
 */
const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    body {
        background-color: ${mainTheme().color.gray["900"]};
    }
`;

export default withTheme(globalStyle);
