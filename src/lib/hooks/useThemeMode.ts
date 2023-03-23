// Library's
import { useEffect, useState } from "react";

// Type theme modes
type TModeTheme = "light" | "dark";

/**
 * Hook for toggle theme
 * @constructor
 */
export const useThemeMode = () => {
    // State theme
    const [theme, setTheme] = useState("dark");

    /**
     * Setting mode theme
     * @param mode - Название темы
     */
    const setMode = (mode: TModeTheme) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    /**
     * Toggle mode theme
     */
    const themeToggle = () => (theme === "dark" ? setMode("light") : setMode("dark"));

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    return { theme, themeToggle };
};
