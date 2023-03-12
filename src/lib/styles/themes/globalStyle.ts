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
    
    html {
        font-family: "Inter", sans-serif;
    }

    body {
      width: 100%;
      height: 100%;
    }
`;

export default withTheme(globalStyle);
