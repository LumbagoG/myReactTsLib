// Библиотеки
import { useEffect, useState } from "react";

// Тип темы
type TModeTheme = "light" | "dark";

/**
 * Хук для переключения темы
 * @constructor
 */
export const useThemeMode = () => {
    // State theme
    const [theme, setTheme] = useState("dark");

    /**
     * Функция для проставления темы
     * @param mode - Название темы
     */
    const setMode = (mode: TModeTheme) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    /**
     * Функция переключение темы
     */
    const themeToggle = () => (theme === "dark" ? setMode("light") : setMode("dark"));

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    return { theme, themeToggle };
};
