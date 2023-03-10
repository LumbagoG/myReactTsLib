// Библиотеки
import { createGlobalStyle, withTheme } from "styled-components";

// Основная тема

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
        background-color: blanchedalmond;
    }
`;

export default withTheme(globalStyle);
