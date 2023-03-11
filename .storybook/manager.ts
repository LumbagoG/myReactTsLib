// Библиотеки
import { addons } from "@storybook/addons";
import { myTheme } from "./myTheme";

/**
 * Задаем конфиг отображения storybook
 */
addons.setConfig({
    theme: myTheme,
});
